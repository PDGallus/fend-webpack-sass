function fetchWeather () {
    console.log('::: Running fetch weather :::');
    const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
    const apiKey = '&appid=8001878202185efdb8d070fe525b7efa'; // <== add own apiKey here
    const units = '&units=metric';
    return fetch(weatherBaseUrl + '59077' + units + apiKey);
}

export { fetchWeather }
