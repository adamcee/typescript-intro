
// Human readable weather description
type WEATHER_DESCRIPTION = "sunny" | "cloudy";
const getWeatherDescription = (isSunny: boolean): WEATHER_DESCRIPTION => isSunny ? "sunny" : "cloudy";

// Describe today's weather
const getTodaysWeatherDescription = (isSunny: boolean) => `Today is ${getWeatherDescription(isSunny)}`;

// Describe the recent weather for some past # of days
const getRecentWeatherDescription = (isSunny: boolean, numDays: number) => `There have been ${numDays} ${getWeatherDescription(isSunny)}.`

// Describe our weather today and recently.
function describeTheWeatherToday(
  isSunny: boolean, 
  numRecentSunnyDays: number, 
  numRecentCloudyDays: number): string {
    const today = getTodaysWeatherDescription(isSunny);
    const recentSunny = getRecentWeatherDescription(true, numRecentSunnyDays);
    const recentCloudy = getRecentWeatherDescription(false, numRecentCloudyDays);
    return `${today} ${recentSunny} ${recentCloudy}`;
}

type DailyForecast = {
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  date: string | Date,
  // IMPORTANT - temperature is in farenheight and represented by integers. 72 is 72 degrees farenheight.
  temperature: number,   
  description: WEATHER_DESCRIPTION,
  // IMPORTANT - chanceOfRain is a percentage from 0 - 100 and is represented by integers. 15 is 15% chance of rain. 
  chanceOfRain?: number,
}

const forecasts: Array<DailyForecast> = [];

/**
const numRecentSunnyDays = recentWeather.filter(f => f == true).length;
const numRecentCloudyDays = recentWeather.filter(f => f == false).length;

const isSunny = true;
console.log(describeTheWeatherToday(isSunny, numRecentSunnyDays, numRecentCloudyDays));
**/