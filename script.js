function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = API_CONFIG.WEATHER_KEY;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let temp = data.main.temp;
      let desc = data.weather[0].description;
      let icon = data.weather[0].icon;

      document.getElementById("temperature").innerHTML = temp + "°C";
      document.getElementById("description").innerHTML = desc;
      document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;
    });
}
