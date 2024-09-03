export class Weather {
    constructor() {
        this.render();
    }

    
    addCity() {
        const input = document.getElementById("weatherValue")
        const button = document.getElementById("weatherButton")
        button.addEventListener("click", () => {
            this.getFetch(input.value); 
        })
    }

    async getFetch(city) { 
        const apiUrl = "4e995d2369a369fb432652325bf7768f"; 
        const weatherApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiUrl}`; //  URL
        const response = await fetch(weatherApi);
        let data = await response.json();

        if (data.cod === '404') { 
            document.getElementById("titleWeather").innerHTML = "Извините, такого города в базе данных нет.";
            document.getElementById("weatherTemp").innerHTML = "";
            document.getElementById("additional-temp").innerHTML = "";
            document.getElementById("weatherState").innerHTML = "";
            document.getElementById("weatherImg").src = "";
            document.getElementById("windTitle").innerHTML = "";
        } else {
            console.log(data);

            document.getElementById("titleWeather").innerHTML = data.name
            document.getElementById("weatherTemp").innerHTML = `${Math.floor( data.main.temp)} &deg;C`
            document.getElementById("additional-temp").innerHTML = ` Ощущается как ${Math.floor( data.main.feels_like)} &deg;C`
            document.getElementById("weatherState").innerHTML = data.weather[0].main
            const weatherImgElement = document.getElementById("weatherImg");
            weatherImgElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const windTitleElement = document.getElementById("windTitle");
            windTitleElement.innerHTML = `Скорость ветра: ${data.wind.speed} м/с`; 
        }
        
    }

    render() {
        this.addCity(); 
    }
}