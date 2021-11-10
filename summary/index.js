// ------------------  API  ------------------
// ---- お天気
const WEATHER_SUMMARY =
    "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json"

// JSONのリンク先を表示した状態で、dev tool → Network → JSON選択 → 推薦されるformattedを選択で見やすくなる
// (TODO) 使うなら、指定の仕方を解説で入れておく
const WEATHER_FORECAST =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"

fetch(WEATHER_SUMMARY)
    .then(function (response) {
        return response.json()
    })
    .then(function (weather) {
        document.getElementById("publishingOffice").textContent =
            weather.publishingOffice
        document.getElementById("reportDatetime").textContent =
            weather.reportDatetime
        document.getElementById("targetArea").textContent = weather.targetArea
        document.getElementById("headlineText").textContent =
            weather.headlineText
        document.getElementById("text").innerHTML = weather.text.replace(
            /\n\n/g,
            "<br/>"
        )
    })

fetch(WEATHER_FORECAST)
    .then(function (response) {
        return response.json()
    })
    .then(function (weather) {
        var tokyo = weather[0].timeSeries[0].areas[0]
        // tokyo.weathers: [今日, 明日, 明後日]の天気
        // tokyo.winds: [今日, 明日, 明後日]の風向き
        // tokyo.waves: [今日, 明日, 明後日]の風速

        // 画面に書き出す
        document.getElementById("today").textContent = tokyo.weathers[0]
        document.getElementById("tomorrow").textContent = tokyo.weathers[1]
        document.getElementById("dayAfterTomorrow").textContent =
            tokyo.weathers[2]
    })

// ------------------  時間系  ------------------
// ---- テキストの時間表示
var currentTime = new Date()

function showTime() {
    var currentHour = currentTime.getHours()
    var currentMinutes = currentTime.getMinutes()

    var timeInfo =
        "ただいまの時間：" + currentHour + "時" + currentMinutes + "分"
    document.getElementById("now").innerHTML = timeInfo
}

function showDate() {
    var currentYear = currentTime.getFullYear()
    var currentMonth = currentTime.getMonth()
    var currentDate = currentTime.getDate()
    var currentDay = currentTime.getDay()
    const weeks = ["日", "月", "火", "水", "木", "金", "土"]

    var todayInfo =
        "今日：" +
        currentYear +
        "月" +
        currentMonth +
        "月" +
        currentDate +
        "日 (" +
        weeks[currentDay] +
        ")"
    document.getElementById("today").innerHTML = todayInfo
}
showTime()
showDate()
setInterval(showTime, 1000)
// ---- カレンダー
const week = ["日", "月", "火", "水", "木", "金", "土"]
const today = new Date()
var year = today.getFullYear()
var month = today.getMonth() + 1

// カレンダー中身の作成
// ここを、createElementで書き換えるか悩む
// 要素が3段階ぐらいになってしまうので、難しそう
function createCalendar(year, month) {
    // 月の最初の日を取得
    const firstDate = new Date(year, month - 1, 1)
    // 月の最初の曜日
    const firstDay = firstDate.getDay()
    // 月の最後の日を取得
    const lastDate = new Date(year, month, 0)
    const lastDayCount = lastDate.getDate()
    // 日にちのカウント
    var dayCount = 1

    // タイトルの作成
    const title = document.getElementById("calendar-title")
    title.textContent = year + "/" + month

    // HTML要素を格納する変数
    var calendarHtml = ""
    calendarHtml += "<table>"

    // 曜日の行を作成
    for (let i = 0; i < week.length; i++) {
        calendarHtml += "<td>" + week[i] + "</td>"
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += "<tr>"

        for (let d = 0; d < 7; d++) {
            if ((w == 0) & (d < firstDay)) {
                // 一行目で、1日が始まる前の曜日
                calendarHtml += "<td></td>" // 空白のマス
            } else if (dayCount > lastDayCount) {
                // 最後の行で、末日の後の曜日
                calendarHtml += "<td></td>" // 空白のマス
            }
            // 追加分-------
            else if (
                dayCount === today.getDate() &&
                month === today.getMonth() + 1
            ) {
                calendarHtml += `<td id="today">${dayCount}</td>`
                dayCount++
            } else {
                calendarHtml += `<td>${dayCount}</td>`
                dayCount++
            }
        }
        calendarHtml += "</tr>"
    }
    calendarHtml += "</table>"

    document.getElementById("calendar-main").innerHTML = calendarHtml
}

// ボタンの挙動
function next() {
    month++
    if (month > 12) {
        year++
        month = 1
    }
    createCalendar(year, month)
}

function prev() {
    month--
    if (month < 1) {
        year--
        month = 12
    }
    createCalendar(year, month)
}

createCalendar(year, month)
const prevBtn = document.getElementById("prev-btn")
prevBtn.onclick = prev
const nextBtn = document.getElementById("next-btn")
nextBtn.onclick = next

// ---- 時計
// 要素を取得する
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")

function setTime() {
    // 日時取得
    const time = new Date()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours
    const minutes = time.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"

    // 日時の設定
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        11,
        0,
        360
    )}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        59,
        0,
        360
    )}deg)`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// 日付をセット
setTime()

// 時計の針を動かす
setInterval(setTime, 1000)

// ------------------  占い(3種)  ------------------
function uranai() {
    var fortune_num = Math.floor(Math.random() * 4)

    var resultText
    if (fortune_num === 0) {
        resultText = "大吉"
    } else if (fortune_num === 1) {
        resultText = "中吉"
    } else if (fortune_num === 2) {
        resultText = "小吉"
    } else {
        resultText = "吉"
    }

    document.getElementById("uranai_result").textContent = resultText
}

const uranaiBtn = document.getElementById("uranai_btn")
uranaiBtn.onclick = uranai

function lucky() {
    var fortune_num = Math.floor(Math.random() * 4)
    const resultImg = document.getElementById("lucky_img")

    if (fortune_num === 0) {
        resultImg.setAttribute("src", "../imgs/pen.png")
    } else if (fortune_num === 1) {
        resultImg.setAttribute("src", "../imgs/ramen.png")
    } else if (fortune_num === 2) {
        resultImg.setAttribute("src", "../imgs/cherry.png")
    } else {
        resultImg.setAttribute("src", "../imgs/orange.png")
    }
}
const luckyBtn = document.getElementById("lucky_btn")
luckyBtn.onclick = lucky

let fruitRadio = document.getElementsByName("star")
let len = fruitRadio.length
fruitRadio[0].checked = true

let checkButton = document.getElementById("checkButton")

checkButton.addEventListener(
    "click",
    function () {
        let checkValue = ""

        for (let i = 0; i < len; i++) {
            if (fruitRadio.item(i).checked) {
                checkValue = fruitRadio.item(i).value
            }
        }
        console.log("選択されているのは " + checkValue + " です")

        var res
        if (checkValue === "ohitsuji") {
            res = "水玉のはんかち"
        } else if (checkValue === "uo") {
            res = "ハンドクリーム"
        } else {
            res = "おかし"
        }
        document.getElementById("result").innerText = res
    },
    false
)

//ボタン
const scroll_to_top_btn = document.querySelector("#scroll-to-top-btn")

//クリックイベントを追加
scroll_to_top_btn.addEventListener("click", scroll_to_top)

function scroll_to_top() {
    window.scroll({ top: 0, behavior: "smooth" })
}

//スクロール時のイベントを追加
window.addEventListener("scroll", scroll_event)

function scroll_event() {
    if (window.pageYOffset > 200) {
        scroll_to_top_btn.style.opacity = "1"
    } else if (window.pageYOffset < 200) {
        scroll_to_top_btn.style.opacity = "0"
    }
}

// ------------------  モーダル表示  ------------------
// Get the modal
var modal = document.getElementById("myModal")

// Get the button that opens the modal
var btn = document.getElementById("myModalBtn")
var imgBtn = document.getElementById("myModalImg")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0]

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block"
}
imgBtn.onclick = function () {
    modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

// ------------------  popup表示  ------------------
// When the user clicks on <div>, open the popup
function showPopup() {
    var popup = document.getElementById("myPopup")

    popup.classList.toggle("show")
}
