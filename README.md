<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&height=210&color=0:1E3A5F,50:2563EB,100:60A5FA&text=Weather%20Dashboard&fontColor=ffffff&fontSize=50&fontAlignY=38&desc=Real-Time%20Weather%20%7C%20Local%20Storage%20%7C%20jQuery&descAlignY=60&animation=fadeIn" alt="Weather Dashboard Header" />

<br>

<img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=20&duration=2800&pause=700&color=2563EB&center=true&vCenter=true&repeat=true&width=700&height=52&lines=Real-Time+Weather+Dashboard+Application.;Built+with+HTML%2C+CSS%2C+jQuery+%26+WeatherAPI.;Fetch+Live+Weather+%7C+Add+Local+Weather+Data.;Clean%2C+Responsive%2C+and+User-Friendly." alt="Typing Animation" />

<br><br>

A modern **Weather Dashboard Application** built using **HTML, CSS, jQuery, and WeatherAPI** that allows users to fetch real-time weather data for any city and manage local weather entries with persistent storage.

<br>

<a href="https://github.com/maira333-mmm/weather-dashboard-app">
  <img src="https://img.shields.io/badge/📂_SOURCE_CODE-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code"/>
</a>

<a href="https://github.com/maira333-mmm/weather-dashboard-app/commits/main">
  <img src="https://img.shields.io/github/last-commit/maira333-mmm/weather-dashboard-app?style=for-the-badge&label=LAST%20UPDATE" alt="Last Update"/>
</a>

<br><br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white"/>
<img src="https://img.shields.io/badge/WeatherAPI-FF6B6B?style=flat-square"/>
<img src="https://img.shields.io/badge/LocalStorage-00C853?style=flat-square"/>
<img src="https://img.shields.io/badge/Responsive-FF9800?style=flat-square"/>

</div>

---

# 📋 Table of Contents

- 📖 About
- ✨ Features
- 📁 Project Structure
- 🚀 Getting Started
- 🔑 API Setup
- 🎯 Features in Detail
- 🎨 UI/UX Design
- 📊 Application Workflow
- 🛠 Technologies Used
- 🌍 Browser Compatibility
- 🤝 Contributing
- 📬 Contact
- 📄 License
- 🙏 Acknowledgements

---

# 📖 About

This is a **Weather Dashboard Application** that provides two primary functionalities:

1. **Fetch Real-Time Weather**: Get current weather data for any city using the WeatherAPI
2. **Manage Local Weather**: Add, edit, and delete custom weather entries stored in browser localStorage

The application features a clean, responsive design with intuitive forms, hover animations, and persistent data storage.

---

# ✨ Features

| Feature | Description |
|----------|-------------|
| 🌤 **Live Weather** | Fetch real-time weather by city name |
| 📍 **City Search** | Search any city worldwide |
| 🌡 **Weather Details** | Temperature, condition, humidity, wind speed |
| 📝 **Local Weather** | Add custom weather entries |
| ✏️ **Edit Entries** | Modify existing local weather data |
| 🗑️ **Delete Entries** | Remove local weather entries |
| 💾 **Auto-Save** | Data persists in localStorage |
| 🎨 **Modern UI** | Clean design with hover effects |
| 📱 **Responsive** | Works on all devices |
| ⚡ **jQuery** | Simplified DOM manipulation |

---

# 📁 Project Structure

```text
weather-dashboard-app/
│
├── README.md
├── index.html          # Main HTML structure
├── style.css           # Styling & animations
├── script.js           # JavaScript with jQuery
└── assets/
    └── images/         # Optional: icons and images
---

# 🚀 Getting Started

## 📋 Requirements

- 🌐 Modern Web Browser
- 💻 Visual Studio Code (Recommended)
- 🔑 Free WeatherAPI Key

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/maira333-mmm/weather-dashboard-app.git

cd weather-dashboard-app
```

---

## 2️⃣ Get WeatherAPI Key

1. Visit https://www.weatherapi.com/
2. Create a free account.
3. Log in to your dashboard.
4. Copy your API Key.

---

## 3️⃣ Configure API Key

Open **script.js** and replace the API key.

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

---

## 4️⃣ Run the Project

```bash
# Method 1
Double-click index.html

# Method 2
Open with Live Server (VS Code)

# Method 3
Open using any modern web browser
```

---

## 5️⃣ Using the Application

### 🌤 Fetch Live Weather

- Enter a city name.
- Click **Fetch Weather**.
- View live weather information including:
  - 🌡 Temperature
  - ☁ Weather Condition
  - 💧 Humidity
  - 💨 Wind Speed

### 📝 Add Local Weather

- Enter City Name
- Enter Temperature
- Click **Add**
- Weather is stored locally.

### ⚙ Manage Weather

- ✏ Edit weather entry
- 🗑 Delete weather entry
- 💾 Automatically saved using LocalStorage

---

# 🔑 API Setup

<details>
<summary><b>📝 Get WeatherAPI Key</b></summary>

1. Visit https://www.weatherapi.com/
2. Click **Sign Up**
3. Create a free account
4. Open Dashboard
5. Copy your API Key
6. Paste it inside **script.js**

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

</details>

---

<details>

<summary><b>🌐 Weather API Endpoint</b></summary>

```javascript
const API_URL =
"https://api.weatherapi.com/v1/current.json";

$.getJSON(`${API_URL}?key=${API_KEY}&q=${city}`, function(data){

    // Weather Data

});
```

</details>

---

<details>

<summary><b>📊 API Response Example</b></summary>

```json
{
  "location": {
    "name": "London",
    "country": "United Kingdom"
  },
  "current": {
    "temp_c": 15,
    "condition": {
      "text": "Partly cloudy"
    },
    "humidity": 72,
    "wind_kph": 24
  }
}
```

</details>

---

# 🎯 Features in Detail

<details>

<summary><b>🌤 Fetch Live Weather</b></summary>

```javascript
$("#fetchWeatherForm").submit(function(e){

e.preventDefault();

const city=$("#cityName").val();

$.getJSON(`${API_URL}?key=${API_KEY}&q=${city}`,function(data){

$("#weatherData").append(`

<li>

<strong>${data.location.name},
${data.location.country}</strong><br>

Temperature:
${data.current.temp_c}°C

<br>

Condition:
${data.current.condition.text}

<br>

Humidity:
${data.current.humidity}%

<br>

Wind:
${data.current.wind_kph} kph

</li>

`);

});

});
```

</details>

---

<details>

<summary><b>📝 Add Local Weather</b></summary>

```javascript
$("#addWeatherForm").submit(function(e){

e.preventDefault();

const city=$("#addCity").val();

const temperature=$("#addTemperature").val();

localWeatherData.push({

city,

temperature

});

saveLocalWeatherData();

updateLocalWeatherList();

});
```

</details>

---

<details>

<summary><b>✏ Edit & Delete Weather</b></summary>

```javascript
window.editLocalWeather=function(index){

const item=localWeatherData[index];

$("#addCity").val(item.city);

$("#addTemperature").val(item.temperature);

deleteLocalWeather(index);

}

window.deleteLocalWeather=function(index){

localWeatherData.splice(index,1);

saveLocalWeatherData();

updateLocalWeatherList();

}
```

</details>

---

<details>

<summary><b>💾 LocalStorage</b></summary>

```javascript
const saveLocalWeatherData=()=>{

localStorage.setItem(

"localWeatherData",

JSON.stringify(localWeatherData)

);

}

const loadLocalWeatherData=()=>{

const data=localStorage.getItem(

"localWeatherData"

);

if(data){

localWeatherData=JSON.parse(data);

updateLocalWeatherList();

}

}
```

</details>

---

# 🎨 UI / UX Design

## 🎨 Color Palette

| Color | Hex | Usage |
|:------|:----|:------|
| 🔵 Primary Blue | `#4A90E2` | Headings |
| 🔷 Button Blue | `#007BFF` | Primary Buttons |
| 🟢 Success Green | `#28A745` | Add Button |
| 🔴 Delete Red | `#FF6F61` | Delete Button |
| ⚪ Background | `#E2E8F0` | Page |
| ⚪ Card | `#FFFFFF` | Cards |
| ⚪ Input | `#F9FAFB` | Forms |

### UI Highlights

- ✅ Clean Interface
- ✅ Responsive Design
- ✅ Hover Animations
- ✅ Smooth Buttons
- ✅ User-Friendly Forms
- ✅ LocalStorage Support

---

# 📊 Application Workflow

```text
🏠 Home

│

├────────🌤 Fetch Weather
│
├── Enter City
│
├── Click Fetch
│
└── Display Weather

│

└────────📝 Add Local Weather
          │
          ├── City Name
          ├── Temperature
          ├── Save
          └── LocalStorage
                 │
                 ├── Edit
                 └── Delete
```

---

# 🛠 Technologies Used

| Technology | Purpose |
|:-----------|:--------|
| HTML5 | Structure |
| CSS3 | Styling |
| jQuery | DOM & AJAX |
| WeatherAPI | Live Weather |
| LocalStorage | Save Data |

---

# 🌍 Browser Compatibility

| Browser | Supported |
|:---------|:---------:|
| Chrome | ✅ |
| Firefox | ✅ |
| Microsoft Edge | ✅ |
| Safari | ✅ |
| Opera | ✅ |

---

# 🤝 Contributing

```text
Fork Repository

      │

      ▼

Create Feature Branch

      │

      ▼

Commit Changes

      │

      ▼

Push Branch

      │

      ▼

Open Pull Request
```

### Contribution Steps

1. Fork Repository

2. Create Branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit

```bash
git commit -m "Add Amazing Feature"
```

4. Push

```bash
git push origin feature/AmazingFeature
```

5. Open Pull Request

---

# 📬 Contact

<div align="center">

## 👩‍💻 Maira Alam

<a href="https://mail.google.com/mail/?view=cm&fs=1&to=maira.alam33@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
</a>

<a href="https://github.com/maira333-mmm">
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://www.linkedin.com/in/maira-a-48699630b/">
<img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://maira-alam-o2p20gi.gamma.site/">
<img src="https://img.shields.io/badge/Portfolio-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white"/>
</a>

</div>

---

# 📄 License

Licensed under the **MIT License**.

See the **LICENSE** file for more details.

---

# 🎯 Future Enhancements

| Feature | Description |
|:---------|:------------|
| 📅 Weather Forecast | 5-Day Forecast |
| 🌍 Geolocation | Auto Detect Location |
| 🌙 Dark Mode | Theme Toggle |
| 📈 Charts | Temperature Graphs |
| 🌤 Weather Icons | Dynamic Icons |
| 🔔 Alerts | Severe Weather Alerts |
| ⭐ Favorite Cities | Save Cities |
| 📱 PWA | Installable App |

---

# 🙏 Acknowledgements

| Resource | Purpose |
|:---------|:--------|
| Capsule Render | Animated Header |
| Readme Typing SVG | Typing Animation |
| Shields.io | Badges |
| GitHub | Repository Hosting |
| WeatherAPI | Live Weather |
| jQuery | JavaScript Library |

---

# 🐛 Troubleshooting

<details>

<summary><b>❌ API Key Not Working</b></summary>

- Verify the API key.
- Ensure internet connection.
- Check free-tier limits.
- Generate a new API key.

</details>

---

<details>

<summary><b>❌ Data Not Saving</b></summary>

- Enable LocalStorage.
- Clear Browser Cache.
- Check Console Errors.
- Refresh the Page.

</details>

---

<details>

<summary><b>❌ City Not Found</b></summary>

- Check spelling.
- Use full city name.
- Try City,Country format.
- Verify WeatherAPI supports the city.

</details>

---

<div align="center">

## ❤️ Built with HTML, CSS, jQuery & WeatherAPI

### Made with 💙 by **Maira Alam**

⭐ If you found this project helpful, consider giving it a ⭐

<br>

<a href="https://github.com/maira333-mmm/weather-dashboard-app">
<img src="https://img.shields.io/badge/📂_SOURCE_CODE-181717?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="https://github.com/maira333-mmm/weather-dashboard-app/commits/main">
<img src="https://img.shields.io/github/last-commit/maira333-mmm/weather-dashboard-app?style=for-the-badge&label=LAST%20UPDATE"/>
</a>

</div>
