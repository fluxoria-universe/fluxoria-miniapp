export const formatVolume = (vol: number) => {
  if (vol >= 1000000) return `$${(vol / 1000000).toFixed(1)}M`;
  if (vol >= 1000) return `$${(vol / 1000).toFixed(0)}K`;
  return `$${vol}`;
};

export const handleRedirect = (id: string) => {
  window.location.href = `/spot/${id}`;
};

export const formatDeadline = (deadline: string) => {
  const date = new Date(deadline);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
