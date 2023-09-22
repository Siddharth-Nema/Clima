function getTime() {
  var today = new Date();
  return today.getHours() + ':' + today.getMinutes();
}

export default function CurrentDayDetails(props) {
  return (
    <div className="right-partition">
      <h1>Good Morning</h1>
      <h1>{getTime()}</h1>
      <div className="details">
        <div className="parameter-row">
          <span className="parameter-label">Details</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Feels like</span>
          <span className="parameter-value">
            {parseInt(props.data.main.feels_like - 273)}°C
          </span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Wind</span>
          <span className="parameter-value">{props.data.wind.speed} m/s</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Humidity</span>
          <span className="parameter-value">{props.data.main.humidity}%</span>
        </div>
        <div className="parameter-row">
          <span className="parameter-label">Pressure</span>
          <span className="parameter-value">{props.data.main.pressure}hPa</span>
        </div>
      </div>
    </div>
  );
}
