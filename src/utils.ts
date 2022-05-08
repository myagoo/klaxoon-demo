const relativeFomatter = new Intl.RelativeTimeFormat("fr");
const formatter = new Intl.DateTimeFormat("fr", {
  day: "numeric",
  month: "long",
  year: "numeric"
});

export const formatDateRelative = (timestamp: number) => {
  const delta = (Date.now() - timestamp) / 1000;

  let value;
  let unit: Intl.RelativeTimeFormatUnit;

  if (delta < 60) {
    value = delta;
    unit = "seconds";
  } else if (delta < 3600) {
    value = delta / 60;
    unit = "minutes";
  } else if (delta < 86400) {
    value = delta / 3600;
    unit = "hours";
  } else {
    value = delta / 86400;
    unit = "days";
  }

  return relativeFomatter.format(-Math.floor(value), unit);
};

export const formatDate = (timestamp: number) => {
  return formatter.format(timestamp);
};

export const formatDuration = (duration: number) => {
  const date = new Date(0);
  date.setSeconds(duration);
  return date.toISOString().substr(11, 8);
};
