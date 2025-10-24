export const handleRedirect = (id: string) => {
  window.location.href = `/spot/${id}`;
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
