const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function WeatherForecast(props) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(props.data);
  return (
    <div className="weatherForecast">
      <div className="forecastDayTab">
        <h3>Today</h3>
        <h1>{Math.round(props.data.list[0].main.temp) - 273}°C</h1>
        <h5>{props.data.list[0].weather[0].main}</h5>
      </div>

      {props.data.list.splice(1, 6).map((item, index) => {
        return (
          <div className="forecastDayTab" key={index}>
            <h3>{forecastDays[index]}</h3>
            <h1>{Math.round(item.main.temp) - 273}°C</h1>
            <h5>{item.weather[0].main}</h5>
          </div>
        );
      })}
    </div>
  );
}
