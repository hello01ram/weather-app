export interface WeatherInterface {
    lat: string;
    long: string;
    timezone: string;
    current: {
        clouds: number;
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        uvi: number;
        wind_deg: number;
        wind_speed: number;
        rain?: {
            '1h': number;
        };
        weather: {
            description: string;
            main: string;
            icon: string;
            id: number;
        }[];
    }, 
    hourly: {
        dt: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_deg: number;
        wind_guest: number;
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
    }[];
    daily: {
        dt: number;
        pressure: number;
        humidity: number;
        uvi: number;
        clouds: number;
        wind_speed: number;
        wind_deg: number;
        wind_guest: number;
        rain?: number;
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        }
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[];
    }[];
}