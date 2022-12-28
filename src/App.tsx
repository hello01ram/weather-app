import './App.css';
import { useWeatherData } from './components/weather.service';
import Weather from './components/weather.component';
import WeatherDataError from './components/weatherDataError.component';
import Loading from './components/loading.component';

function App() {
  const weatherData = useWeatherData();
  if (weatherData instanceof Error) {
    return (
      <div className="wrapper">
        <WeatherDataError />
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        {weatherData ? <Weather weatherData={weatherData} /> : <Loading />}
      </div>
    );
  }
}

export default App;
