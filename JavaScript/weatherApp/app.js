function getInput() {
    const cityName = document.getElementById('city').value;
    getApi(cityName);
}

async function getApi(cityName) {
    const api = `http://api.weatherapi.com/v1/current.json?key=0548dc82ef804d3ab5575828250301&q=${cityName}&aqi=no`;
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            printData(data); 
        })
        .catch((err) => {
            console.log(err);
        });
}

function printData(data) {

    const location = data.location.name;
    const temperature = data.current.temp_c; 
    const condition = data.current.condition.text; 
    const icon = data.current.condition.icon; 

    const weatherContainer = document.getElementById('weatherInfo');
    weatherContainer.innerHTML = `
        <h2>Weather in ${location}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${condition}</p>
        <img src="${icon}" alt="${condition}" />
    `;
}
