import { AlertCircle, RefreshCw } from "lucide-react";

interface NewsErrorProps {
  error: Error | { message: string } | null;
  onRetry: () => void;
}

export default function NewsError({ error, onRetry }: NewsErrorProps) {
  return (
    <div className="w-full min-h-screen bg-white p-4">
      <div className="flex flex-col items-center justify-center h-full py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md w-full text-center">
          <div className="text-red-500 mb-4">
            <AlertCircle className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-red-800 mb-2">
            Failed to load news
          </h3>
          <p className="text-sm text-red-600 mb-4">
            {error?.message || "Something went wrong while loading the news"}
          </p>
          <button
            onClick={onRetry}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
