import React from "react";
import { PhotoBookmark, VideoBookmark } from "../helpers";
import { formatDate, formatDateRelative, formatDuration } from "../utils";

export const Bookmark: React.FC<{
  bookmark: VideoBookmark | PhotoBookmark;
}> = ({ bookmark }) => {
  return (
    <div className="flex-column" key={bookmark.dateAdded}>
      <img alt={bookmark.title} src={bookmark.thumbnail} />
      <h3>{bookmark.title}</h3>
      <a href={bookmark.url} target="_blank" rel="noreferrer">
        {bookmark.url}
      </a>
      <span>{bookmark.author}</span>
      <span>Ajouté {formatDateRelative(bookmark.dateAdded)}</span>

      {bookmark.datePublished ? (
        <span>Publié le {formatDate(bookmark.datePublished)}</span>
      ) : (
        <span>Date de publication inconnue</span>
      )}

      {bookmark.type === "video" ? (
        <span>{formatDuration(bookmark.duration)}</span>
      ) : (
        <span>
          {bookmark.width}x{bookmark.height}
        </span>
      )}
    </div>
  );
};
