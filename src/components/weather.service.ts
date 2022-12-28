import { useEffect, useState } from "react";
import { WeatherInterface } from "./weather.interface";

/**
 * getWeatherData: Make an API call to weather api to get weather data. 
 * It uses fetch API.
 * @param lat latitude value
 * @param long longitude value
 * @returns a promise resolve to Weather data or throws an error
 */
async function getWeatherData(lat: string, long: string): Promise<WeatherInterface> {
    const apiKey = process.env.REACT_APP_MyWeatherMapAPIKey // 'e88f0356930e6594cd956e386a22a2af'
    const url = `https://api.openweathermap.org/data/3.0/onecall?`;
    const params = `lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
    const response = await fetch(url + params);
    if (!response.ok) 
        throw Error('Failed to fetch weather data');
    return response.json();
}

/**
 * getLocationCoords: Uses geolocation API to request user coordinates. 
 * If user doesn't allow location access, use default Sydney Opera House coordinates
 * @returns a tuple contining user coordinates [lat, long]
 */
function getLocationCoords(): [lat: string, long: string] {
    // Get user location using geolocation api
    return ['-33.8567799', '151.2127218'];
}

/**
 * useWeatherData: A custom React hook to wrap weather data in a state. 
 * It request user coordinates and feed them to a function to get weather 
 * information. 
 * @returns Weather data or undefined.
 */
export function useWeatherData(): WeatherInterface | Error | undefined {
    const [weatherData, setWeatherData] = useState<WeatherInterface | Error | undefined>();
    useEffect(() => {
        const [lat, long] = getLocationCoords();
        getWeatherData(lat, long)
            .then(weatherData => {
                setWeatherData(weatherData);
            }).catch(e => {setWeatherData(e)});
    }, []);
    return weatherData;
}

/**
 * getWeatherIconUrl: Construct weather icon url from the name of icon. 
 * @param icon name of MyWeatherMap weather icon
 * @returns URL of weather icon on MyWeatherMap
 */
export function getWeatherIconUrl(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
}

/**
 * getUVIndex: Return UV index based on UVI value. 
 * @param UVI 
 * @returns 'Low' | 'Moderate' | 'High' | 'Very High' | 'Extreme'
 */
export function getUVIndex(UVI: number) {
    UVI = Math.trunc(UVI);
    let desc = 'Low';
    desc = UVI > 2 && UVI < 6 ? 'Moderate' : desc;
    desc = UVI > 5 && UVI < 8 ? 'High' : desc;
    desc = UVI > 7 && UVI < 12 ? 'Very High' : desc;
    desc = UVI > 11 ? 'Extreme' : desc;
    return desc;
}

export function getCustomDateObj(timestamp: number): {weekDay: string, hourText: string} {
    const dateObj = {weekDay: '', hourText: ''};
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday',];
    const date = (new Date(timestamp * 1000));
    const hour = date.getHours();

    dateObj.hourText = (hour > 12 ? hour - 12 : hour).toString();
    dateObj.hourText = hour === 0 ? '12' : dateObj.hourText;
    dateObj.hourText += hour >= 12 ? 'pm' : 'am';
    
    dateObj.weekDay = weekDays[date.getDay()];
    return dateObj;
}