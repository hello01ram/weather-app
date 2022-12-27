function WeatherDataError() {
    return (
        <div>
            <p className="text-2xl">Weather data unavailable!</p>
            <p>Make sure you're using the correct API key.</p>
            <p>
                This app uses&nbsp;
                <a href="https://openweathermap.org/" className="text-blue-600">OpenWeatherMap</a> 
                &nbsp;API services for weather data.
            </p>
        </div>
    );
}

export default WeatherDataError;