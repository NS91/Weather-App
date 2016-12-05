$(document).ready(function(){
  var isCelsius = true;
var getIP = "http://ip-api.com/json/";
$.getJSON(getIP, function(location){
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon + "&appid=005a772d5a10c7adde4a43e07beaccd5";

$.getJSON(url, function(data){
 var celsius = Math.floor(data.main.temp - 273.15) + "°C";
  var farenheit = Math.floor(data.main.temp - 273.15) * 1.8 + 32 + "°F";
  var weatherIcon = JSON.stringify(data.weather[0].icon);
  var iconUrl = "http://openweathermap.org/img/w/" + weatherIcon.replace(/['"]+/g, '') + ".png"
  $('#city').html(data.name + ", " + data.sys.country);
  $('#temp').html(celsius);
  $('#weather').html(data.weather[0].main)
  $('#image').attr("src", iconUrl);
  $("button").on("click", function() {
    if (isCelsius == true) {
      isCelsius = false;
      $("#temp").html(farenheit);
    } else if (isCelsius == false) {
      isCelsius = true;
      $("#temp").html(celsius);
    }
  });
 
}); 
});
});