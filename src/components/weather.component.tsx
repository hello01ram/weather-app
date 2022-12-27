import './weather.component.css';
import { WeatherInterface } from "./weather.interface";
import { getHourFromTimestamp, getWeatherIconUrl } from './weather.service';

function Weather({ weatherData }: { weatherData: WeatherInterface }) {
  const city = weatherData.timezone.slice(weatherData.timezone.indexOf('/') + 1);
  return (
    <div className="weather-app">
      <header className="today-header">
        <div className="today-temp">
          <p className="text-4xl">{city}</p>
          <p className="text-9xl">{weatherData.current.temp.toFixed()}C</p>
          <p className="text-xl text-gray-600 ">{weatherData.current.weather[0].main}</p>
        </div>
        <div className="today-stats">
          <div><span>Humidity</span><span>{weatherData.current.humidity}%</span></div>
          <div><span>Rain</span><span>{weatherData.current.rain?.['1h'] ?? 0} mm</span></div>
          <div><span>Wind</span><span>{weatherData.current.wind_speed} km/h</span></div>
        </div>
      </header>
      <ul className="hours-stats">
        {weatherData.hourly.map((hourWeather, i) => {
          if (i > 24) return;
          return (
            <li key={i}>
              <span>{getHourFromTimestamp(hourWeather.dt).hourText}</span>
              <img src={getWeatherIconUrl(hourWeather.weather[0].icon)} alt="" />
              <span>{hourWeather.temp.toFixed()}C</span>
            </li>
          )
        })}
      </ul>
      <ul className="week-stats">
        {weatherData.daily.map((dayWeather, i) => {
          return (
            <li>
              <span>{getHourFromTimestamp(dayWeather.dt).weekDay}</span>
              <img src={getWeatherIconUrl(dayWeather.weather[0].icon)} alt="" />
              <span>{dayWeather.temp.day.toFixed()}C</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Weather;