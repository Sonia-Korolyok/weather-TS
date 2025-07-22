import type {FormEvent} from "react";

type GetWeatherProps = {
    getWeather: (city: string) => void;
}
const Form = ({getWeather}: GetWeatherProps) => {
    const getCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);

    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder="Enter city name"/>
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;