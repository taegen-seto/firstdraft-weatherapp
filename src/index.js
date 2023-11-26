function displayTemp(response) {
  let currentTemp = Math.round(response.data.temperature.current);

  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = currentTemp;

  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  // cityElement.innerHTML = searchInputElement.value;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-imput");
  let city = searchInputElement.value;

  let apiKey = "384310c338bfe3o7f06caedc66df497t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let formattedDay = days[day];
  return `${formattedDay} ${hour}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
