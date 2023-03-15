import { api } from "./api";
const api_key = process.env.API_KEY

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return api.get(`forecast.json?key=${api_key}&q=${city}&days=7&aqi=no&alerts=no`)
  }
}