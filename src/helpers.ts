type Bookmark = {
  url: string;
  title: string;
  dateAdded: number;
  datePublished?: number;
  thumbnail: string;
  author: string;
};

export type VideoBookmark = Bookmark & {
  type: "video";
  duration: number;
};

export type PhotoBookmark = Bookmark & {
  type: "photo";
  width: number;
  height: number;
};

export const fetchBookmark = async (url: string) => {
  const response = await fetch(
    `https://noembed.com/embed?url=${encodeURIComponent(url)}`
  );

  if (!response.ok) {
    throw new Error(`Une erreur est survenue : ${response.statusText}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`Une erreur est survenue : ${data.error}`);
  }

  console.log(data);

  const bookmark = {
    type: data.type,
    url: data.url,
    title: data.title,
    author: data.author_name,
    thumbnail: data.thumbnail_url,
    dateAdded: Date.now(),
    datePublished: data.upload_date && new Date(data.upload_date).valueOf()
  };

  if (data.type === "video") {
    const videoBookmark: VideoBookmark = {
      ...bookmark,
      duration: data.duration
    };

    return videoBookmark;
  } else if (data.type === "photo") {
    const photoBookmark = {
      ...bookmark,
      width: data.width,
      height: data.height
    };

    return photoBookmark;
  } else {
    throw new Error(`Format non pris en charge`);
  }
};
