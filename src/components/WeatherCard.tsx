import { CurrentWeather } from "@/types/weather";
import { WeatherIcon } from "./WeatherIcon";

/**
 * Basic weather card with icon and styling
 */
interface WeatherCardProps {
  city: string;
  weather: CurrentWeather;
}

export function WeatherCard({ city, weather }: WeatherCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-800 w-full max-w-md">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 text-center">
        {city}
      </h2>
      
      {/* Weather Icon */}
      <div className="flex justify-center mb-4">
        <WeatherIcon 
          code={weather.condition.code} 
          isDay={weather.isDay} 
          size="xl" 
        />
      </div>
      
      {/* Temperature */}
      <div className="text-center mb-6">
        <p className="text-5xl font-bold text-zinc-900 dark:text-white">
          {weather.temperature}°F
        </p>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mt-2">
          {weather.condition.description}
        </p>
      </div>
      
      {/* Weather Details */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Feels like:</span>
          <span className="font-semibold text-zinc-900 dark:text-white">
            {weather.feelsLike}°F
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Humidity:</span>
          <span className="font-semibold text-zinc-900 dark:text-white">
            {weather.humidity}%
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">Wind:</span>
          <span className="font-semibold text-zinc-900 dark:text-white">
            {weather.windSpeed} mph
          </span>
        </div>
      </div>
    </div>
  );
}