import axios from "axios";
const API_KEY = "e104ae098f0f093ed9b4c57bb1bf107e";



async function getWeatherData() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${API_KEY}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
  
getWeatherData();