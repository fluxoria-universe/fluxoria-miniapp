export default function MarketCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 animate-pulse">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="h-8 w-16 bg-gray-200 rounded"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-8 w-24 bg-gray-200 rounded"></div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}
