import { notFound } from "next/navigation";
import type { Metadata } from "next"; // 👈 Add this import
import { getWeatherData } from "@/lib/getWeather";
import { CITIES } from "@/data/cities";
import { CurrentWeatherDetail } from "@/components/CurrentWeatherDetail";
import { ForecastCard } from "@/components/ForecastCard";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{
    location: string;
  }>;
}

export default async function WeatherDetailPage({ params }: PageProps) {
  const { location } = await params;
  const cityName = decodeURIComponent(location);

  const cityExists = CITIES.some(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!cityExists) {
    notFound();
  }

  // Fetch weather data
const weather = await getWeatherData(cityName);

  if (!weather) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Weather data unavailable
          </h1>
          <Button href="/" variant="default">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Header with back button */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            {weather.city}
          </h1>
          <Button href="/" variant="ghost">
            ← Back to Home
          </Button>
        </div>

        {/* Current weather - Large display with animation */}
        <div className="animate-cardIn">
          <CurrentWeatherDetail
            current={weather.current}
            latitude={weather.latitude}
            longitude={weather.longitude}
          />
        </div>

        {/* 3-Day Forecast with staggered animation */}
        <div className="animate-cardIn" style={{ animationDelay: "150ms" }}>
          <ForecastCard forecast={weather.forecast} />
        </div>


        {/* Action buttons with staggered animation */}
        <div className="flex justify-center gap-4 animate-cardIn" style={{ animationDelay: "300ms" }}>
          <Button href="/" variant="default">
            Search Another City
          </Button>
        </div>
      </main>
    </div>
  );
}

// 👇 Add the return type here
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const cityName = decodeURIComponent(location);
  return {
    title: `${cityName} Weather - Weather App`,
    description: `Detailed weather forecast for ${cityName}`,
  };
}