function hello(person: string): string {
  return `Hello, world! Hello, ' ${person}`;
}

console.log(hello('Bob'));

// Human readable weather description
const SUNNY = "sunny";
const CLOUDY = "cloudy";
const getWeatherDescription = (isSunny: boolean): string => isSunny ? SUNNY : CLOUDY;

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

const recentWeather: Array<boolean> = [true, false, false, true, true, false, false, false];

const numRecentSunnyDays = recentWeather.filter(f => f == true).length;
const numRecentCloudyDays = recentWeather.filter(f => f == false).length;

const isSunny = true;
console.log(describeTheWeatherToday(isSunny, numRecentSunnyDays, numRecentCloudyDays));
