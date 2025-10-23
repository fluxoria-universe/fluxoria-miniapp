export const formatVolume = (volume: number) => {
  if (volume >= 1000000) return `${(volume / 1000000).toFixed(1)}M`;
  if (volume >= 1000) return `${(volume / 1000).toFixed(0)}K`;
  return `${volume}`;
};

export const formatDeadline = (deadline: string) => {
  const date = new Date(deadline);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const handleRedirect = (id: string) => {
  window.location.href = `/spot/${id}`;
};
