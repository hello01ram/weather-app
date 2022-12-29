import './weather.component.css';
import { WeatherInterface } from "./weather.interface";
import { getCustomDateObj, getUVIndex, getWeatherIconUrl } from './weather.service';

function Weather({ weatherData }: { weatherData: WeatherInterface }) {
  const city = weatherData.timezone.slice(weatherData.timezone.indexOf('/') + 1);
  return (
    <div className="weather-app">
      <header>
        <p className="text-4xl font-light">{city}</p>
        <div className="flex">
          <div className="today-temp">
            <p className="text-9xl">{weatherData.current.temp.toFixed()}&#176;</p>
            <p className="text-xl ">{weatherData.current.weather[0].main}</p>
          </div>
          <div className="today-stats">
            <div><span>Humidity</span><span>{weatherData.current.humidity}%</span></div>
            <div><span>UV Index</span><span>{getUVIndex(weatherData.current.uvi)}</span></div>
            <div><span>Wind</span><span>{weatherData.current.wind_speed} km/h</span></div>
          </div>
        </div>
      </header>
      <ul className="hours-stats">
        {weatherData.hourly.map((hourWeather, i) => {
          if (i > 24) return undefined;
          return (
            <li key={i}>
              <span>{getCustomDateObj(hourWeather.dt).hourText}</span>
              <img src={getWeatherIconUrl(hourWeather.weather[0].icon)} alt="" />
              <span>{hourWeather.temp.toFixed()}&#176;</span>
            </li>
          )
        })}
      </ul>
      <ul className="week-stats">
        {weatherData.daily.map((dayWeather, i) => {
          return (
            <li key={i}>
              <span>{i === 0 ? 'Today' : getCustomDateObj(dayWeather.dt).weekDay}</span>
              <div className="flex items-center text-sm font-light">
                {(dayWeather.pop * 100).toFixed()}%
                <img src={getWeatherIconUrl(dayWeather.weather[0].icon)} alt="" />
              </div>
              <span>
                {dayWeather.temp.day.toFixed()}&#176;&nbsp;&nbsp;&nbsp;
                {dayWeather.temp.night.toFixed()}&#176;
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Weather;