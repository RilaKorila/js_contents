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
        console.log(tokyo.weathers[1])
        console.log(tokyo.weathers[1].split(" "))
        document.getElementById("today_weather").textContent = tokyo.weathers[0]
        document.getElementById("tomorrow_weather").textContent =
            tokyo.weathers[1]
        document.getElementById("dayAfterTomorrow_weather").textContent =
            tokyo.weathers[2]

        get_weather(tokyo.weathers[1])
    })

function get_weather(weather_txt) {
    var icon_area = document.getElementById("whether_icon")

    if (weather_txt === "晴れ") {
        icon_area.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>`
    }
    // else if(条件) {} で新たな条件とsvgファイルを追加しよう
    else if (weather_txt === "晴れ　時々　雨") {
        icon_area.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
        <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
      </svg>`
    } else {
        // その他
        // サイズの変更：width="50" height="50" の数字を変える
        // 色の変更：fill="currentColor" のcurrentColorの部分を色の名前(か色コードに変える)
        icon_area.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cloud-moon" viewBox="0 0 16 16">
        <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
        <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
      </svg>`
    }
}

// ------------------  電卓  ------------------
var result = document.getElementById("result")
function edit(elem) {
    result.value = result.value + elem.innerText
}
function calc() {
    result.value = new Function("return " + result.value)()
}

const btns = document.getElementsByClassName("edit-btn")
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (e) {
        edit(e.target)
    }
}
const equal = document.getElementById("calc-btn")
equal.onclick = calc
