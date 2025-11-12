import { WeatherData } from "@/types/weather";

/**
 * Dummy weather data for development and teaching
 *
 * This data structure mimics the format returned by the Open-Meteo API
 * and our weather service layer
 * All temperatures in Fahrenheit, wind speed in mph
 */
export const DUMMY_WEATHER_DATA: Record<string, WeatherData> = {
  durham: {
    city: "Durham",
    latitude: 35.9940,
    longitude: -78.8986,
    current: {
      temperature: 64,
      feelsLike: 61,
      humidity: 65,
      windSpeed: 7,
      isDay: true, 
      condition: {
        code: 2,
        description: "Partly cloudy",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        high: 72, 
        low: 57, 
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        high: 75,
        low: 61,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        high: 68,
        low: 59,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
    ],
  },
  "new york": {
    city: "New York",
    latitude: 40.7128,
    longitude: -74.0060,
    current: {
      temperature: 59,
      feelsLike: 55,
      humidity: 72,
      windSpeed: 11,
      isDay: true, 
      condition: {
        code: 3,
        description: "Overcast",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        high: 63,
        low: 54,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        high: 66,
        low: 55,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        high: 70,
        low: 57,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
    ],
  },
  tokyo: {
    city: "Tokyo",
    latitude: 35.6762,
    longitude: 139.6503,
    current: {
      temperature: 72,
      feelsLike: 70,
      humidity: 58,
      windSpeed: 5,
      isDay: true, 
      condition: {
        code: 1,
        description: "Mainly clear",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        high: 77,
        low: 66,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        high: 79,
        low: 68,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        high: 73,
        low: 64,
        condition: {
          code: 63,
          description: "Moderate rain",
        },
      },
    ],
  },

  london: {
    city: "London",
    latitude: 51.5072,
    longitude: -0.1276,
    current: {
      temperature: 55,
      feelsLike: 52,
      humidity: 80,
      windSpeed: 12,
      isDay: true, 
      condition: {
        code: 3,
        description: "Overcast",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        high: 58,
        low: 48,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        high: 60,
        low: 49,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        high: 57,
        low: 47,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
    ],
  },

  "los angeles": {
    city: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
    current: {
      temperature: 74,
      feelsLike: 73,
      humidity: 35,
      windSpeed: 7,
      isDay: true, 
      condition: {
        code: 1,
        description: "Mainly clear",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        high: 78,
        low: 62,
        condition: {
          code: 0,
          description: "Clear sky",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        high: 76,
        low: 61,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        high: 74,
        low: 60,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
    ],
  },

  raleigh: {
    city: "Raleigh",
    latitude: 35.7796,
    longitude: -78.6382,
    current: {
      temperature: 66,
      feelsLike: 64,
      humidity: 60,
      windSpeed: 9,
      isDay: true, // 👈 Added
      condition: {
        code: 2,
        description: "Partly cloudy",
      },
    },
    forecast: [
      {
        date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        high: 72,
        low: 56,
        condition: {
          code: 1,
          description: "Mainly clear",
        },
      },
      {
        date: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        high: 70,
        low: 55,
        condition: {
          code: 61,
          description: "Slight rain",
        },
      },
      {
        date: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        high: 68,
        low: 54,
        condition: {
          code: 2,
          description: "Partly cloudy",
        },
      },
    ],
  },

};

export function getDummyWeatherData(cityName: string): WeatherData | null {
  const key = cityName.toLowerCase();
  return DUMMY_WEATHER_DATA[key] || null;
}