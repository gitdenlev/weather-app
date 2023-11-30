import axios from "axios";

const API_KEY = "e104ae098f0f093ed9b4c57bb1bf107e";
const inputCity = document.querySelector("#js-input");
const mainTemperatureInfo = document.querySelector("h1");

const getWeatherData = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=${API_KEY}`
  );
  console.log(response.data.main);
  const toCelsius = (response.data.main.temp - 273.15).toFixed(0) // округляем до двух знаков после запятой
  mainTemperatureInfo.textContent = toCelsius + " °C";
};

inputCity.addEventListener("change", () => {
  getWeatherData();
});

//   function getWeatherData() {
//   try {

//     console.log(response.data.main.temp_min);
//     inputCity.addEventListener("change", () => {
//       const response = axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${API_KEY}`
//     );
//     })
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
//   // Convert from kelvins to celcius

//   console.log((270.18-273).toFixed(2))
// }

// getWeatherData();
