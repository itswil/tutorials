import axios from 'axios'

const API_KEY = '3294a8078da0933bb560f1b9217b605f'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
