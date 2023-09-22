export default function CurrentWeather(props) {
  console.log(props.weatherData.main.feels_like);
  return (
    <div className="weather">
      <div className="top">
        <p className="city"></p>
      </div>
      <div className="bottom">
        <p className="temperature">
          {parseInt(props.weatherData.main.temp - 273)}°C
        </p>
        <span className="short-desc">{props.weatherData.weather[0].main}</span>
      </div>
    </div>
  );
}
