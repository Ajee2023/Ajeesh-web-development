// API Key and Base URL (Replace with your API key from OpenWeatherMap)
const appid = 'f76c736b39c4b4728547f379a0cb5c4e'; // Get your API key from https://openweathermap.org/api

document.getElementById('searchBtn').addEventListener('click', async () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    try {
      const data = await getWeatherData(city);
      displayWeather(data);
    } catch (error) {
      console.error(error);
      document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
  } else {
    alert('Please enter a city name.');
  }
});

async function getWeatherData(city) {
  try {
    // Step 1: Get latitude and longitude using Geocoding API
    const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appid}`);
    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      throw new Error('City not found.');
    }

    const { lat, lon } = geoData[0];

    // Step 2: Fetch weather data using latitude and longitude
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
    );
    const weatherData = await weatherResponse.json();

    if (weatherData.cod === 200) {
      return weatherData;
    } else {
      throw new Error('Weather data not found.');
    }
  } catch (error) {
    throw error;
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
}