//dates

const today = moment().format("MMMM DD, YYYY");

$("#date").text(today);
$("#date1").text(
    moment(new Date())
        .add(1, 'days')
        .format("MMMM DD, YYYY")
);
$("#date").text(today);
$("#date2").text(
    moment(new Date())
        .add(2, 'days')
        .format("MMMM DD, YYYY")
);
$("#date").text(today);
$("#date3").text(
    moment(new Date())
        .add(3, 'days')
        .format("MMMM DD, YYYY")
);
$("#date").text(today);
$("#date4").text(
    moment(new Date())
        .add(4, 'days')
        .format("MMMM DD, YYYY")
);
$("#date").text(today);
$("#date5").text(
    moment(new Date())
        .add(5, 'days')
        .format("MMMM DD, YYYY")
);

const searchBtn = $("searchBtn");
const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey = "ddf031eb741448191855d74eeb2a8769";

$(document).ready(function () {
    $("#searchBtn").click(function () {

        var city = $("#city").val();


        $.ajax({
            url: queryURL + city + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {
            // $(".curIcon").text(result.weather[0].icon);
            //$(".curIcon").attr("src", `http://openweathermap.org/img/wn/${resCopy.list[6].weather[0].icon}@2x.png`);
            $(".curTemp").text(Math.round(result.main.temp));
            $(".curSky").text(result.weather[0].main);
            $(".curHumidity").text(result.main.humidity);
            $(".curWind").text(Math.round((result.wind.speed) * 1.15078));
            $(".curUV").text()

            console.log(result)
        })

        $.ajax({
            url: queryURL2 + city + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {
             $(".Temp1").text(Math.round(result.list[8].main.temp));
             $(".Sky1").text(result.list[8].weather[0].main);
             $(".Humidity1").text(result.list[8].main.humidity);
             $(".Wind1").text(Math.round((result.list[8].wind.speed) * 1.15078));
            // $(".UV1").text()

            
            console.log("count2 result:", result)
        })
        $.ajax({
            url: queryURL2 + city + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {
            $(".Temp2").text(Math.round(result.list[16].main.temp));
            $(".Sky2").text(result.list[16].weather[0].main);
            $(".Humidity2").text(result.list[16].main.humidity);
            $(".Wind2").text(Math.round((result.list[16].wind.speed) * 1.15078));
            $(".UV2").text()

            console.log(result)
        })
        $.ajax({
            url: queryURL2 + city + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {
            $(".Temp3").text(Math.round(result.list[24].main.temp));
            $(".Sky3").text(result.list[24].weather[0].main);
            $(".Humidity3").text(result.list[24].main.humidity);
            $(".Wind3").text(Math.round((result.list[24].wind.speed) * 1.15078));
            $(".UV3").text()

            console.log(result)
        })
        $.ajax({
            url: queryURL2 + city + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {
            $(".Temp4").text(Math.round(result.list[32].main.temp));
            $(".Sky4").text(result.list[32].weather[0].main);
            $(".Humidity4").text(result.list[32].main.humidity);
            $(".Wind4").text(Math.round((result.list[32].wind.speed) * 1.15078));
            $(".UV4").text()

            console.log(result)
        })
        $.ajax({
            url: queryURL2 + city + "&units=imperial&appid=" + apiKey,
            method: "GET"
        }).then(function (result) {
            $(".Temp5").text(Math.round(result.list[39].main.temp));
            $(".Sky5").text(result.list[39].weather[0].main);
            $(".Humidity5").text(result.list[39].main.humidity);
            $(".Wind5").text(Math.round((result.list[39].wind.speed) * 1.15078));
            $(".UV5").text()

            console.log(result)
        })

    })
   
})
