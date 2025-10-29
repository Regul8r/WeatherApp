import type { City } from "../data/cities";
import type { WeatherData } from "../types/weather";

const iconFor = (code: number) => {
  if (code === 0) return "☀️";
  if (code === 1) return "🌤️";
  if (code === 2) return "☁️";
  if (code === 3) return "☁️";
  if (code >= 61 && code <= 67) return "🌧️";
  return "🌡️";
};

export default function CityWeatherCard({
  city,
  weather,
}: {
  city: City;
  weather?: WeatherData;
}) {
  if (!weather) {
    return (
      <div className="rounded-2xl border border-black/10 p-4 shadow-sm">
        <h3 className="text-lg font-semibold">{city.name}</h3>
        <p className="text-sm text-black/60">No data yet</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/10 p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{weather.city}</h3>
          <p className="text-sm text-black/60">
            {city.latitude.toFixed(2)}, {city.longitude.toFixed(2)}
          </p>
        </div>
        <span aria-hidden className="text-2xl">
          {iconFor(weather.current.condition.code)}
        </span>
      </div>

      <div className="mt-3 flex items-end gap-4">
        <div className="text-3xl font-bold">
          {weather.current.temperature}°F
        </div>
        <div className="text-sm text-black/70">
          <div>{weather.current.condition.description}</div>
          <div>Feels: {weather.current.feelsLike}°F</div>
          <div>Humidity: {weather.current.humidity}%</div>
          <div>Wind: {weather.current.windSpeed} mph</div>
        </div>
      </div>
    </div>
  );
}
