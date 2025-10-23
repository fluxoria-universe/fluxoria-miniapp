interface LeaderboardAvatarProps {
  avatar: string;
  rank: number;
}

export default function LeaderboardAvatar({
  avatar,
  rank,
}: LeaderboardAvatarProps) {
  const getBadge = () => {
    if (rank === 1) {
      return (
        <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="text-xs">🏆</span>
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-slate-400 rounded-full flex items-center justify-center">
          <span className="text-xs">🥈</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative flex-shrink-0">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${avatar}`} />
      {getBadge()}
    </div>
  );
}
