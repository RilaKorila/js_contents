var currentTime = new Date()
var currentHour = currentTime.getHours()
var currentMinutes = currentTime.getMinutes()

function showTime() {
    var message = currentHour + "時" + currentMinutes + "分"
    document.getElementById("clock").innerHTML = message
}

setInterval(showTime, 1000)
