import './App.css';
import { WeatherInterface } from './components/weather.interface';
import { useWeatherData } from './components/weather.service';
import Weather from './components/weather.component';
import WeatherDataError from './components/weatherDataError.component';

function App() {
  // const weatherData: WeatherInterface | undefined = undefined as any;
  const weatherData = useWeatherData();
  // console.log(weatherData);
  return (
    <div className="wrapper">
      {weatherData ? <Weather weatherData={weatherData}/> : <WeatherDataError /> }
    </div>
  );
}

export default App;
