/**
 * Displays error messages in a styled container with icon
 */
 interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-red-200 dark:border-red-800">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Error Icon */}
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-600 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <div>
          <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-2">
            Unable to Load Weather Data
          </h3>
          <p className="text-sm text-red-600 dark:text-red-500">
            {message}
          </p>
        </div>

        {/* Retry Button (optional) */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg 
                     transition-colors duration-200 font-medium"
          >
            Try Again
          </button>
        )}

        {/* Helpful suggestions */}
        <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-4">
          <p>Possible reasons:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Network connection issue</li>
            <li>Weather service temporarily unavailable</li>
            <li>Invalid location selected</li>
          </ul>
        </div>
      </div>
    </div>
  );
}