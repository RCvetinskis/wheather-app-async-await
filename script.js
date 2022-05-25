"use strict"

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="
const apikey = "3265874a2c77ae4a04bb96236a642d2f"
const form = document.querySelector("form")
const search = document.getElementById("search")
const dataPlace = document.getElementById("dataPlace")


async function fetchUrl(city){
  const response = await   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    const result = await response.json()

    try{
        appendData(result)
    } catch(error){
        alert("Tokio miesto nera")
        console.log(error)
    }
       
}
function appendData(data){
//   clear html
dataPlace.innerHTML = ""
 let newWeather = document.createElement("div")
 let icon = data.weather[0].icon
 let temp = data.main.temp - 273.25
 temp = Math.floor(temp)
 newWeather.classList.add("weather")
 newWeather.innerHTML =
 `
 <h1> ${data.name}</h1>
 <h2>
            
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon">

        ${temp}°C

        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon">


    </h2>
 
 
 `
 dataPlace.append(newWeather)
 console.log(data)
}


form.addEventListener("submit", function(e){
    e.preventDefault()
    let cityText = search.value
    if(!cityText) return 
    fetchUrl(cityText)
        //  clear input
        search.value = ""
})
