import Search from './components/Search';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import { weatherApiKey, weatherApiURL } from './api';
import { useState } from 'react';
import Forecast from './components/Forecast';
import CurrentDayDetails from './components/CurrentDayDetails';
import WeatherForecast from './components/WeatherForecast';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecaseData, setForecaseData] = useState(null);

  const handleLocationChange = async (newLocation) => {
    const [lat, lon] = newLocation.value.split(' ');

    const weatherDataFetch = await fetch(
      `${weatherApiURL}weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    )
      .then(async (response) => {
        const newWeatherData = await response.json();
        setWeatherData(newWeatherData);
        console.log(newWeatherData);
      })
      .catch((err) => {
        console.log(err);
      });

    const forecastDataFetch = await fetch(
      `${weatherApiURL}forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    )
      .then(async (response) => {
        const newForecastData = await response.json();
        setForecaseData(newForecastData);
        console.log(newForecastData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getWidget() {
    if (weatherData != null && forecaseData != null) {
      return (
        <div>
          <CurrentWeather weatherData={weatherData} />
          <WeatherForecast data={forecaseData} />
        </div>
      );
    }
  }

  function getRightPartitionWidget() {
    if (weatherData != null) {
      return <CurrentDayDetails data={weatherData} />;
    }
  }

  console.log(weatherData);

  return (
    <div className="App">
      <div className="left-partition">
        <Search onLocationChange={handleLocationChange} />
        {getWidget()}
      </div>

      {getRightPartitionWidget()}
    </div>
  );
}
