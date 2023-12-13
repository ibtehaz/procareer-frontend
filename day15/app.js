

async function getWeatherData() {
 try {    
    let city = document.getElementById("zipcode").value
    console.log(city)
    let key = 'd72729578543cfc435344f99b226b1c9'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

    await fetch(url)
        .then(response => response.json())
        .then(displayData)
} catch {
    console.log("Sorry something went wrong")
}


}

function displayData(data) {
    let mydiv = document.getElementById("w");
    let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(data)

    mydiv.innerHTML = `
        <div class="card">
            <img src="${iconUrl}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">Temperature: ${(data.main.temp * 9 / 5) + 32} °F</p>
                <p class="card-text">Feels Like: ${(data.main.feels_like * 9 / 5) + 32} °F</p>
                <p class="card-text">Max Temp: ${(data.main.temp_max * 9 / 5) + 32} °F</p>
                <p class="card-text">Min Temp: ${(data.main.temp_min * 9 / 5) + 32} °F</p>
                <p class="card-text">Humidity: ${data.main.humidity}%</p>
                <p class="card-text">Pressure: ${data.main.pressure} hPa</p>
                <p class="card-text">Wind Speed: ${data.wind.speed} m/s</p>
                <p class="card-text">Wind Direction: ${data.wind.deg}°</p>
            </div>
        </div>`;
}
