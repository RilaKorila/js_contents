const week = ["日", "月", "火", "水", "木", "金", "土"]
const today = new Date()
var year = today.getFullYear()
var month = today.getMonth() + 1

function creatCalendarTitle(year, month){
    return year + "/" + month;
}

function creatCalendar(year, month) {
    // 月の最初の日を取得
    const firstDate = new Date(year, month - 1, 1)
    // 月の最初の曜日
    const firstDay = firstDate.getDay()
    // 月の最後の日を取得
    const lastDate = new Date(year, month, 0)
    const lastDayCount = lastDate.getDate()
    // 日にちのカウント
    var dayCount = 1
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
            } else {
                calendarHtml += `<td>${dayCount}</td>`
                dayCount++
            }
        }
        calendarHtml += "</tr>"
    }
    calendarHtml += "</table>"

    return calendarHtml
}

// DOM要素をとるのは、<body>の中身が読まれた後でないといけない
window.onload = function () {
    const next = document.getElementById("next-btn")
    next.addEventListener("click", function () {
        month++
        if (month > 12) {
            year++
            month = 1
        }
        document.getElementById("calendar-title").textContent = creatCalendarTitle (year, month);
        document.querySelector("#calendar-main").innerHTML = creatCalendar(
            year,
            month
        )
    })

    const prev = document.getElementById("prev-btn")
    prev.addEventListener("click", function () {
        month--
        if (month < 1) {
            year--
            month = 12
        }
        document.getElementById("calendar-title").textContent = creatCalendarTitle (year, month);
        document.querySelector("#calendar-main").innerHTML = creatCalendar(
            year,
            month
        )
    })

    document.getElementById("calendar-title").textContent = creatCalendarTitle (year, month);
    document.querySelector("#calendar-main").innerHTML = creatCalendar(
        year,
        month
    )
}
