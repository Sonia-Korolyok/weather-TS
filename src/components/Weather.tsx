interface WeatherItems {
    country?: string,
    temp?: string,
    pressure?: string,
    sunset?: string,
    city?: string
}
interface WeatherProps {
    weather: WeatherItems,
    message: string
}

const Weather = ({weather, message}: WeatherProps) => {

        return (
            <div className={'infoWeather'}>
                {!message &&
                    <>
                        <p>Location: {weather.country}, {weather.city}</p>
                        <p>Temperature: {weather.temp}</p>
                        <p>Pressure: {weather.pressure}</p>
                        <p>Sunset: {weather.sunset}</p>
                    </>
                }
                {message}
            </div>
        );


    }
;
export default Weather;