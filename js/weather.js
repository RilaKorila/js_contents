// import {WEATHER} from "./constants"
// 今回は、公開されたURLだから良いが、本当はconstantsに入れて、gitignoreする方法を教えたい
// file:// で開いているときに、別ファイルの外部モジュールをimportしようとするとセキュリティ上のエラーが出る

const WEATHER_SUMMARY =
    "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json"

// JSONのリンク先を表示した状態で、dev tool → Network → JSON選択 → 推薦されるformattedを選択で見やすくなる
// (TODO) 使うなら、指定の仕方を解説で入れておく
const WEATHER_FORECAST =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json"

// DOM要素をとるのは、<body>の中身が読まれた後でないといけない
window.onload = function () {
    // fetch(WEATHER.SUMMARY)
    fetch(WEATHER_SUMMARY)
        .then(function (response) {
            return response.json()
        })
        .then(function (weather) {
            // console.log(weather)
            // 画面に書き出す
            document.getElementById("publishingOffice").textContent =
                weather.publishingOffice
            document.getElementById("reportDatetime").textContent =
                weather.reportDatetime
            document.getElementById("targetArea").textContent =
                weather.targetArea
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
            // console.log(tokyo.weathers)
            // tokyo.weathers: [今日, 明日, 明後日]の天気
            // tokyo.winds: [今日, 明日, 明後日]の風向き
            // tokyo.waves: [今日, 明日, 明後日]の風速

            // 画面に書き出す
            document.getElementById("today").textContent = tokyo.weathers[0]
            document.getElementById("tomorrow").textContent = tokyo.weathers[1]
            document.getElementById("dayAfterTomorrow").textContent =
                tokyo.weathers[2]
        })
}
