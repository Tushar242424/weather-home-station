document.addEventListener('DOMContentLoaded', () => {
    const APIKey = '77126df6578f72416c6c44eb6b924bfa';
    const city = 'Dehradun'; // Set the city to Dehradun

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            // Display weather information
            image.src = ''; // Add the appropriate weather icon URL
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            document.querySelector('.container').style.height = '590px';
            document.querySelector('.weather-box').classList.add('fadeIn');
            document.querySelector('.weather-details').classList.add('fadeIn');
        });
});
