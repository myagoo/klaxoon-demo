import React, { useState } from "react";
import { fetchBookmark, PhotoBookmark, VideoBookmark } from "../helpers";
import { useRefreshInterval } from "../hooks";
import { Bookmark } from "./Bookmark";

export const App = () => {
  // Refresh all application every second for relative times
  useRefreshInterval(1000);

  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [bookmarks, setBookmarks] = useState<(VideoBookmark | PhotoBookmark)[]>(
    []
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const bookmark = await fetchBookmark(inputValue);

      setBookmarks((prevBookmarks) => [bookmark, ...prevBookmarks]);
      setInputValue("");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-column gap-2">
      <h1 className="color-primary">Bookmarks</h1>
      <form className="flex-row gap-2" onSubmit={handleSubmit}>
        <input
          placeholder="https://vimeo.com/38437356"
          disabled={loading}
          type="url"
          value={inputValue}
          onChange={(event) => setInputValue(event.currentTarget.value)}
        />
        <button disabled={!inputValue || loading} type="submit">
          Ajouter un nouveau bookmark
        </button>
      </form>
      <div className="flex-column gap-2">
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.dateAdded} bookmark={bookmark} />
        ))}
      </div>
    </div>
  );
};
