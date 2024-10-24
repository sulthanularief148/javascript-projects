// Weather api
// e2173059a022da34c843a97b37269e02
// fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e2173059a022da34c843a97b37269e02")
//     .then((res) => res.json())
//     .then((data) => console.log(data.weather[0].main))
//     .catch(error => console.log(error))
const city = document.getElementById("city");
const btn = document.getElementById("btn")
const apikey = "e2173059a022da34c843a97b37269e02"
const weatherIcon = document.getElementById("weather-icon")
const temp = document.getElementById("temp")
const main = document.getElementById("main")
console.log(weatherIcon, "ICon")
btn.addEventListener("click", () => {
    console.log(city.value)
    return fetchWeatherData()
})
//  const whetherURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city.value +"+&units="+unit+"&appid=" + apiKey;
function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`)
        .then((res) => res.json())
        .then((data) => displayWeatherData(data))
        .catch(error => console.log(error))
}

function displayWeatherData(data) {
    console.log(data)
    const mainWeather = data?.weather[0].main;
    const description = data?.weather[0].description;
    const icon = data?.weather[0].icon;
    const whetherTemperature = data?.main?.temp;
    const weatherIconImg = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    if (weatherIcon) {
        weatherIcon.setAttribute("src", weatherIconImg);
    }
    temp.innerHTML = `${whetherTemperature} °C`
    main.innerHTML = mainWeather


} 