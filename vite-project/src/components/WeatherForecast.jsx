const WeatherForecast = ({weatherForecasts})=>{
  return(
    <div className="weather">
        {weatherForecasts.map((weatherForecast)=>(
          <div className="card">
            <h2>{weatherForecast.day}</h2>
            <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
            <p><span>conditions: </span>{weatherForecast.conditions}</p>
            <p><span>time: </span>{weatherForecast.time}</p>
          </div>
        ))}
    </div>
  )
}
export default WeatherForecast