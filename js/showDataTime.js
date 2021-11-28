let currentTime = new Date()
let currentHour = currentTime.getHours()
let currentMinutes = currentTime.getMinutes()

function showTime() {
    let message = currentHour + "時" + currentMinutes + "分"
    document.getElementById("clock").innerHTML = message
}

setInterval(showTime, 1000)
