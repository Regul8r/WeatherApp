import Link from "next/link";
import { CITIES } from "../../data/cities";
import { DUMMY_WEATHER_DATA } from "../../data/weather-data";



export default function CitiesPage() {
  // Map through all available cities and attach dummy weather data
  const items = CITIES.map((city) => {
    const key = city.name.toLowerCase();
    const weather = DUMMY_WEATHER_DATA[key];
    return { city, weather };
  });

  return (
    <main className="page-gradient min-h-screen py-12 px-6">
      <div className="mx-auto max-w-6xl">
        {/* 🧭 Navigation */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="underline hover:opacity-80">
            ← Home
          </Link>
        </nav>

        {/* 🏙️ Page Header */}
        <header className="glass-strong rounded-3xl px-8 py-6 mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            All Cities
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Explore weather snapshots across the globe 🌍
          </p>
        </header>

        {/* 🌤️ City Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ city, weather }, i) => (
            <div
              key={city.name}
              style={{ animationDelay: `${i * 70}ms` }} // 👈 stagger each card
              className="glass rounded-2xl border border-white/20 p-6 shadow-sm
                         hover:shadow-lg hover:-translate-y-1 transition
                         animate-cardIn"
            >
              <h3 className="text-xl font-semibold">{city.name}</h3>
              <p className="text-sm text-black/60 dark:text-gray-400">
                {city.latitude.toFixed(2)}, {city.longitude.toFixed(2)}
              </p>

              {weather && (
                <div className="mt-4 space-y-1">
                  <p className="text-2xl font-bold">
                    {weather.current.temperature}°F{" "}
                    <span className="text-gray-500 text-base">
                      {weather.current.condition.description}
                    </span>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Feels like {weather.current.feelsLike}°F <br />
                    Humidity: {weather.current.humidity}% <br />
                    Wind: {weather.current.windSpeed} mph
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
