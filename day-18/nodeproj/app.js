async function getWeatherData() {
    try {
        const city = document.getElementById("cityInput").value;
        const apiKey = 'd72729578543cfc435344f99b226b1c9';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherDisplay").innerHTML = `<div class="alert alert-danger">Unable to fetch weather data.</div>`;
    }
}

function displayWeatherData(data) {
    const weatherContainer = document.getElementById("weatherDisplay");
    let weatherIconClass = 'fas '; // base class

    switch (data.weather[0].main) {
        case 'Clear':
            weatherIconClass += 'fa-sun';
            break;
        case 'Clouds':
            weatherIconClass += 'fa-cloud';
            break;
        case 'Rain':
            weatherIconClass += 'fa-cloud-rain';
            break;
        case 'Thunderstorm':
            weatherIconClass += 'fa-bolt';
            break;
        case 'Snow':
            weatherIconClass += 'fa-snowflake';
            break;
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Ash':
            weatherIconClass += 'fa-smog';
            break;
        default:
            weatherIconClass += 'fa-cloud-sun';
    }

    weatherContainer.innerHTML = `
        <div class="card">
            <i class="${weatherIconClass} mt-3" style="font-size: 5em;"></i>
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">Temperature: ${((data.main.temp * 9 / 5) + 32).toFixed(2)} °F</p> 
                <p class="card-text">Humidity: ${data.main.humidity}%</p>
                <p class="card-text">Pressure: ${data.main.pressure} hPa</p>
                <p class="card-text">Wind Speed: ${Math.floor((data.wind.speed) * 2.23694)} mph</p>
            </div>
        </div>`;
}





// document.getElementById("getWeatherBtn").addEventListener("click", getWeatherData);

