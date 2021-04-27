async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    myLib.checkForName(formText)
    console.log();

    console.log("::: Form Submitted :::")
    myLib.fetchWeather()
    .then(res => {
        console.log('res', res);
        return res.json()
    })
    .then(function(data) {
        console.log('data', data);
        document.getElementById('results').textContent = data.main.temp;
    })
}

export { handleSubmit }
