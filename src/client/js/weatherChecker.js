async function fetchWeather () {
    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
    const apiKey = '&appid=8001878202185efdb8d070fe525b7efa'; // <== add own apiKey here
    const units = '&units=metric';
    return await fetch(weatherBaseUrl + '59077,de' + units + apiKey);
}

export { fetchWeather }
