/**
 * Displays when no weather data is available for a location
 */
 export function NoDataState() {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* No Data Icon */}
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01"
              />
            </svg>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
              No Weather Data Available
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Weather information is not available for this location at the moment.
            </p>
          </div>
        </div>
      </div>
    );
  }