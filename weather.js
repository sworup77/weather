document.getElementById("search").addEventListener("click", function () {
   const city = document.querySelector(".search").value.trim(); 
   if (!city) {
       alert("Please enter a city name!");
       return;
   }


   fetch(`https://goweather.herokuapp.com/weather/${city}`)
       .then((response) => response.json())
       .then((data) => cityWeather(data, city))
       .catch((error) => {
           console.log("Error fetching weather data:", error);
           alert("Could not fetch weather data. Please try again.");
       });
});

function cityWeather(data, city) {
   document.getElementById("ten").innerHTML = `Temperature: ${data.temperature}`;

   document.getElementById("wind").innerHTML = `Wind Speed: ${data.wind}`;

   document.getElementById("addressnepal").innerHTML = `${city}, Unknown Country`; 

   console.log("Weather data:", data); 
}
