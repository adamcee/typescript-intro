export type WEATHER_DESCRIPTION = "sunny" | "cloudy";

export type DailyForecast = {
  // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  date: string | Date,
  // IMPORTANT - temperature is in farenheight and represented by integers. 72 is 72 degrees farenheight.
  temperature: number,   
  description: WEATHER_DESCRIPTION,
  // IMPORTANT - chanceOfRain is a percentage from 0 - 100 and is represented by integers. 15 is 15% chance of rain. 
  chanceOfRain?: number,
}
