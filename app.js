$(document).ready(function () {
  let city = "";
  let weather = {};

  $("#contenido").hide();

  $("#weather-form").on("submit", function (e) {
    e.preventDefault();
    city = $("#city").val();
    $("#img").children().remove();
    //console.log(city);

    $.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0eefe33aacef12b81dd267d7e3052be7`,
      function (data) {
        weather = data;
        console.log(data);
        /* 
        console.log(weather.weather[0].main);
        console.log(weather.main.temp-273)
        console.log(weather.coord.lon)
        console.log(weather.coord.lat)
    */

        if (weather.weather[0].main == "Clouds") {
          $("#img").append('<i class="fas fa-cloud"></i>');
        } else if (weather.weather[0].main == "Rain") {
          $("#img").append('<i class="fas fa-cloud-rain"></i>');
        } else if (weather.weather[0].main == "Clear") {
          $("#img").append('<i class="far fa-sun"></i>');
        } else if (weather.weather[0].main == "Snow") {
          $("#img").append('<i class="far fa-snowflake"></i>');
        } else if (weather.weather[0].main == "Windy") {
          $("#img").append('<i class="fas fa-wind"></i>');
        }

        $("#contenido").show();

        $("#name").html(weather.name);
        $("#sky").html(weather.weather[0].main);
        $("#temp").html(Math.round(weather.main.temp - 273));
        $("#lan").html(weather.coord.lat);
        $("#lon").html(weather.coord.lon);
      }
    );
  }),
    "json";
});
