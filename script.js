$(document).ready(function () {
    const API_URL = "https://api.weatherapi.com/v1/current.json";
    const API_KEY = '0eb86b06ba324146970102954250504'; // Your WeatherAPI key

    let localWeatherData = [];

    // Load local weather data from localStorage on page load
    const loadLocalWeatherData = () => {
        const savedData = localStorage.getItem('localWeatherData');
        if (savedData) {
            localWeatherData = JSON.parse(savedData);
            updateLocalWeatherList();
        }
    };

    // Save local weather data to localStorage
    const saveLocalWeatherData = () => {
        localStorage.setItem('localWeatherData', JSON.stringify(localWeatherData));
    };

    // Fetch weather data by city
    $("#fetchWeatherForm").submit(function (e) {
        e.preventDefault();
        const city = $("#cityName").val();
        
        // Fetch weather from WeatherAPI
        $.getJSON(`${API_URL}?key=${API_KEY}&q=${city}`, function (data) {
            if (data.current) {
                const weatherList = $("#weatherData");
                weatherList.empty();
                weatherList.append(
                    `<li>
                        <strong>${data.location.name}, ${data.location.country}</strong><br>
                        Temperature: ${data.current.temp_c}°C, 
                        Condition: ${data.current.condition.text}<br>
                        Humidity: ${data.current.humidity}%, Wind: ${data.current.wind_kph} kph
                    </li>`
                );
            } else {
                alert("City not found! Please try again.");
            }
        }).fail(function () {
            alert("Error fetching weather data. Please check the city name or try again later.");
        });
    });

    // Add local weather data
    $("#addWeatherForm").submit(function (e) {
        e.preventDefault();
        const city = $("#addCity").val();
        const temperature = $("#addTemperature").val();

        // Validate inputs
        if (!city || !temperature || isNaN(temperature)) {
            alert("Please enter a valid city and temperature.");
            return;
        }

        // Add to local array
        const newWeather = { city, temperature };
        localWeatherData.push(newWeather);

        // Save to localStorage and update UI
        saveLocalWeatherData();
        updateLocalWeatherList();

        // Clear form
        $("#addCity").val("");
        $("#addTemperature").val("");
    });

    // Update local weather list
    function updateLocalWeatherList() {
        const weatherList = $("#localWeatherData");
        weatherList.empty();
        localWeatherData.forEach((data, index) => {
            weatherList.append(
                `<li>${data.city}: ${data.temperature}°C 
                <button onclick="editLocalWeather(${index})">Edit</button>
                <button onclick="deleteLocalWeather(${index})">Delete</button></li>`
            );
        });
    }

    // Edit local weather data
    window.editLocalWeather = function (index) {
        const data = localWeatherData[index];
        $("#addCity").val(data.city);
        $("#addTemperature").val(data.temperature);
        deleteLocalWeather(index); // Remove old entry before editing
    };

    // Delete local weather data
    window.deleteLocalWeather = function (index) {
        localWeatherData.splice(index, 1);
        saveLocalWeatherData();
        updateLocalWeatherList();
    };

    // Load data on page load
    loadLocalWeatherData();
});
