import { WeatherData } from "@/types/weather";

// Weather code descriptions (from Open-Meteo documentation)
const WEATHER_DESCRIPTIONS: { [key: number]: string } = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  71: "Slight snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

// Get weather description from code
function getWeatherDescription(code: number): string {
  return WEATHER_DESCRIPTIONS[code] || "Unknown";
}

// Fetch weather data from Open-Meteo API
export async function fetchWeatherData(
  latitude: number,
  longitude: number,
  cityName: string
): Promise<WeatherData | null> {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    
    const weatherData: WeatherData = {
      city: cityName,
      latitude,
      longitude,
      current: {
        temperature: Math.round(data.current.temperature_2m),
        feelsLike: Math.round(data.current.apparent_temperature),
        humidity: data.current.relative_humidity_2m,
        windSpeed: Math.round(data.current.wind_speed_10m),
        condition: {
          code: data.current.weather_code,
          description: getWeatherDescription(data.current.weather_code),
        },
        isDay: data.current.is_day === 1,
      },
      forecast: data.daily.time.slice(0, 3).map((date: string, index: number) => ({
        date,
        high: Math.round(data.daily.temperature_2m_max[index]),
        low: Math.round(data.daily.temperature_2m_min[index]),
        condition: {
          code: data.daily.weather_code[index],
          description: getWeatherDescription(data.daily.weather_code[index]),
        },
      })),
    };

    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}