import { CITIES } from "@/data/cities";
import { fetchWeatherData } from "./weatherApi";
import { WeatherData } from "@/types/weather";

/**
 * Get weather data for a city by name
 * Now uses real API instead of dummy data
 */
export async function getWeatherData(
  cityName: string
): Promise<WeatherData | null> {
  // Find the city in our cities list
  const city = CITIES.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) {
    console.error(`City not found: ${cityName}`);
    return null;
  }

  // Fetch real weather data from API
  const weatherData = await fetchWeatherData(
    city.latitude,
    city.longitude,
    city.name
  );

  return weatherData;
}