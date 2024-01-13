/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.css";
import { format } from "date-fns";

const getData = async () => {
  const city = "Jyväskylä";
  const api_key = process.env.WEATHER_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${api_key}&units=metric`;
  const weatherRequest = await fetch(url);
  const weatherInfo = await weatherRequest.json();

  console.log("city", city);
  console.log("weaterInfo", weatherInfo);

  if (!weatherRequest.ok) {
    throw new Error("Failed to fetch data");
  }

  return { weatherInfo, city };
};

const Home = async () => {
  const data = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>{data.city}</h1>
        <p>{format(new Date(), "dd.MM.yy HH:mm")}</p>
        <p>{Math.round(data.weatherInfo.main.temp)}°C</p>
        <p>{data.weatherInfo.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.weatherInfo.weather[0].icon}@2x.png`}
          alt="image"
        />
      </div>
    </main>
  );
};

export default Home;
