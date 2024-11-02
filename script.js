console.log("This is JavaScript");

const api_key = "3c1c2fdf28426ab5647c0a628f28c0a9";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".form-control");
const search_btn = document.querySelector(".btn");
const weather_icon = document.querySelector('.weather_img');

const fetch_url = async (city) => {
  const response = await fetch(url + city + `&appid=${api_key}`);
  const data = await response.json();
  console.log(data);

  if (data.name === undefined) {
    document.querySelector('.temp').innerHTML = "Please enter a valid city name";
  } else {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.ceil(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = Math.ceil(data.wind.speed) + "km/h";
    document.querySelector('.feels_like').innerHTML = Math.ceil(data.main.feels_like) + "°";
    document.querySelector('.Pressure').innerHTML = Math.ceil(data.main.pressure) + "mb";
    document.querySelector('.Visibility').innerHTML = Math.ceil(data.visibility) + "km";
    document.querySelector('.weather_name').innerHTML = data.weather[0].main;
    
    if (data.weather[0].main == 'Clouds') {
      weather_icon.className = 'ri-sun-cloudy-fill weather_img';
      weather_icon.style.color = 'rgb(0 179 255)'; // Example color for cloudy
    } else if (data.weather[0].main == 'Rain') {
      weather_icon.className = 'ri-heavy-showers-fill weather_img';
      weather_icon.style.color = '#46D5F9'; // Example color for rain
    } else if (data.weather[0].main == 'Clear') {
      weather_icon.className = 'ri-sun-fill weather_img';
      weather_icon.style.color = '#ffb700'; // Example color for clear
    } else if (data.weather[0].main == 'Drizzle') {
      weather_icon.className = 'ri-showers-fill weather_img';
      weather_icon.style.color = '#00BFFF'; // Example color for drizzle
    } else if (data.weather[0].main == 'Haze') {
      weather_icon.className = 'ri-haze-fill weather_img';
      weather_icon.style.color = 'rgb(255 168 18)'; // Example color for mist
    }
    
    document.querySelector('.col-md-4').style.display = "flex";
    document.querySelector('.card').style.backgroundColor = " #252525c4";
    document.querySelector('.main').style.display = "flex";
    document.querySelector('.details').style.display = "flex";
    document.querySelector('.info').style.display = "flex";
    document.querySelector('.weather_img').style.display = "flex";
  }
};

search_btn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch_url(search.value);
});
