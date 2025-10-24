interface MarketErrorProps {
  error: Error | { message: string } | null;
  onRetry: () => void;
}
export default function MarketError({ error, onRetry }: MarketErrorProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
      <div className="text-red-500 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-red-800 mb-1">
        Failed to load market data
      </h3>
      <p className="text-sm text-red-600 mb-4">
        {error?.message || "Something went wrong"}
      </p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Try Again
      </button>
    </div>
  );
}
