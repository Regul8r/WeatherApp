"use client";
import { useEffect, useState } from "react";
import { LocationSearch } from "@/components/LocationSearch";
import { LoadingState } from "@/components/LoadingState";
import { ErrorMessage } from "@/components/ErrorMessage";
import { WeatherDisplay } from "@/components/WeatherDisplay";
import { PageHeader } from "@/components/PageHeader";
import { getWeatherData } from "@/lib/getWeather";
import { WeatherData } from "@/types/weather";

// Default city to display on load
const DEFAULT_CITY = "Durham";

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load default city weather on mount
    loadCityWeather(DEFAULT_CITY);
  }, []);

  const loadCityWeather = async (cityName: string) => {
    setLoading(true);
    setError("");
    
    try {
      const data = await getWeatherData(cityName);
      if (data) {
        setWeather(data);
      } else {
        setError(`Failed to load weather data for ${cityName}`);
      }
    } catch (err) {
      setError(`Unable to fetch weather data. Please try again.`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center animated-gradient-bg px-4 py-12 overflow-hidden">
      {/* Floating particles in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle" style={{ top: '20%', left: '10%' }}></div>
        <div className="particle" style={{ top: '60%', left: '80%' }}></div>
        <div className="particle" style={{ top: '40%', left: '60%' }}></div>
        <div className="particle" style={{ top: '80%', left: '30%' }}></div>
      </div>

      <main className="relative z-10 w-full max-w-2xl space-y-8">
        {/* Header with fade-in animation */}
        <div className="animate-cardIn">
          <PageHeader
            title="Weather App"
            subtitle="The weather outside is weather"
          />
        </div>

        {/* Search with glow effect and staggered animation */}
        <div 
          className="flex flex-col items-center animate-cardIn" 
          style={{ animationDelay: "150ms" }}
        >
          <div className="w-full max-w-md">
            <LocationSearch onCitySelect={loadCityWeather} />
          </div>
        </div>

        {/* Weather display with animation */}
        <div className="animate-cardIn" style={{ animationDelay: "300ms" }}>
          {loading && <LoadingState />}
          {error && <ErrorMessage message={error} />}
          {weather && !loading && (
            <div className="space-y-6">
              <WeatherDisplay weather={weather} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}