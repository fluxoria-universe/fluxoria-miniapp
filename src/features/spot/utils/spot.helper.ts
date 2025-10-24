export const formatVolume = (vol: number) => {
  if (vol >= 1000000) return `$${(vol / 1000000).toFixed(1)}M`;
  if (vol >= 1000) return `$${(vol / 1000).toFixed(0)}K`;
  return `$${vol}`;
};

export const formatDeadline = (
  deadline: Date | string | number | bigint
): string => {
  let date: Date;

  if (deadline instanceof Date) {
    date = deadline;
  } else if (typeof deadline === "bigint") {
    date = new Date(Number(deadline) * 1000);
  } else if (typeof deadline === "number") {
    date = new Date(deadline > 10000000000 ? deadline : deadline * 1000);
  } else {
    date = new Date(deadline);
  }

  // Check for invalid date
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
