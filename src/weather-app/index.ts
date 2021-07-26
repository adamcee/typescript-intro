import { WEATHER_DESCRIPTION, DailyForecast } from "./types";

// Human readable weather description
const getWeatherDescription = (isSunny: boolean): WEATHER_DESCRIPTION => isSunny ? "sunny" : "cloudy";

// Describe today's weather
const getTodaysWeatherDescription = (isSunny: boolean) => `Today is ${getWeatherDescription(isSunny)}`;

// Describe the recent weather for some past # of days
const getRecentWeatherDescription = (isSunny: boolean, numDays: number) => `There have been ${numDays} ${getWeatherDescription(isSunny)}.`

// Describe our weather today and recently.
export function describeTheWeatherToday(
  isSunny: boolean, 
  numRecentSunnyDays: number, 
  numRecentCloudyDays: number): string {
    const today = getTodaysWeatherDescription(isSunny);
    const recentSunny = getRecentWeatherDescription(true, numRecentSunnyDays);
    const recentCloudy = getRecentWeatherDescription(false, numRecentCloudyDays);
    return `${today} ${recentSunny} ${recentCloudy}`;
}

const forecasts: Array<DailyForecast> = [];

// TODO: Use DailyForecast type
/**
const numRecentSunnyDays = recentWeather.filter(f => f == true).length;
const numRecentCloudyDays = recentWeather.filter(f => f == false).length;

const isSunny = true;
console.log(describeTheWeatherToday(isSunny, numRecentSunnyDays, numRecentCloudyDays));
**/
