// API Key and Base URL (Replace with your API key from OpenWeatherMap)
const appid = 'f76c736b39c4b4728547f379a0cb5c4e'; // Get your API key from https://openweathermap.org/api
//const API_KEY = 'your_api_key_here'; // Replace with your OpenWeatherMap API key

document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    getWeatherData(city)
      .then((data) => displayWeather(data))
      .catch((error) => {
        console.error(error);
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
      });
  } else {
    alert('Please enter a city name.');
  }
});

function getWeatherData(city) {
  return new Promise((resolve, reject) => {
    // Step 1: Get latitude and longitude using Geocoding API
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${appid}`)
      .then((response) => response.json())
      .then((geoData) => {
        if (geoData.length === 0) {
          reject(new Error('City not found.'));
        } else {
          const { lat, lon } = geoData[0];

          // Step 2: Fetch weather data using latitude and longitude
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
          )
            .then((response) => response.json())
            .then((weatherData) => {
              if (weatherData.cod === 200) {
                resolve(weatherData);
              } else {
                reject(new Error('Weather data not found.'));
              }
            })
            .catch((error) => reject(error));
        }
      })
      .catch((error) => reject(error));
  });
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