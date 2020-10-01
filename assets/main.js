const city = document.getElementById("city");
const cur_date = document.getElementById("date");
const temp = document.getElementById("temp");
const img = document.getElementById("img");
const cloud = document.getElementById("cloud");
const cloud_desc = document.getElementById("cloud_desc");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const wind_speed = document.getElementById("wind_speed");
const direction = document.getElementById("direction");
const search = document.getElementById("search");
search.value = "";

document.addEventListener("DOMContentLoaded", () => {
  /* Get weather forecast */
  const date = new Date();
  const user_city = "Kryvyi Rih";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${user_city},ua&units=metric&appid=c11f684d51f941ec3ec7c0ef0fd34e67`)
    .then(response => response.json())
    .then(value => {
      temp.innerText = `${Math.round(value.main.temp)} °C`;
      img.src = `http://openweathermap.org/img/wn/${value.weather[0].icon}.png`;
      let weather_desc = value.weather[0].description;
      cloud_desc.innerText = weather_desc.charAt(0).toUpperCase() + weather_desc.slice(1);
      cloud.innerText = value.clouds.all;

      humidity.innerText = value.main.humidity;
      pressure.innerText = (value.main.pressure * 0.75006156).toFixed(1);
      wind_speed.innerText = value.wind.speed;

      direction.style.transform = `rotate(${value.wind.deg}deg)`;
    });

  city.innerText = user_city;
  cur_date.innerText = date.toString("dd MMMM yyyy");
});

search.onkeydown = (key) => {
  /* Search via Google */
  if (key.key === "Enter") {
    location.href = `https://www.google.com/search?client=firefox-b-e&q=${search.value}`;
  }
};
