let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input = document.querySelector("input");
let btn = document.querySelector("button");
const weathericon = document.querySelector(".weather_icon");

const apikey = "f1dd08e6f00cd1caab0144ced1f0fc78";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

btn.addEventListener("click",async function(){
    checkweather(input.value);
})

async function checkweather(city){
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
       weathericon.src="clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weathericon.src="clear.png";
    }else if(data.weather[0].main == "Rain"){
        weathericon.src="rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src="drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weathericon.src="mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}
