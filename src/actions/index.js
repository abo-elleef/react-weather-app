import axios from 'axios';
const API_KEY= '0558e327cc6577ab5890921d98a5c8a8';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather (city_name){
    const url = `${URL}&q=${city_name},eg`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}