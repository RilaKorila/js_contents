// ------------------  スライドショー  ------------------
// スライドショー
const newImgList = [
    "../../imgs/apple.png",
    "../../imgs/orange.png",
    "../../imgs/cherry.png",
]

// まずは配列の考え方から
function slide_time() {
    // numにはおなじ0から3がランダムに入る
    // 3 = (参加者が埋める:new_img_listの長さ) TRY
    var num = Math.floor(Math.random() * newImgList.length)
    // 要素を取得
    const slideImg = document.getElementById("slide-show")
    // 要素に対して、実行(今回は、属性を付与)
    slideImg.setAttribute("src", newImgList[num])
}
// 関数を呼び出す (TRY: ここも多分新しい感覚)
// setInterval(slide_time, 3000)

// ボタンで関数を実行する練習
// ボタンの情報を取得: TRY
// const startBtn = document.getElementById("start-btn")
// const stopBtn = document.getElementById("stop-btn")
const startStop = document.getElementById("start-stop-btn")
var timerID

// function startSlide() {
//     console.log("start")
//     timerID = setInterval(slide_time, 2000)
// }
// function stopSlide() {
//     console.log("stop")
//     clearInterval(timerID)
// }

// ボタンを1つにする ->> 分岐
// TRY 分岐の練習：if文は自分で
function startStopSlide() {
    var text = document.getElementById("start-stop-btn").innerText
    if (text === "start") {
        document.getElementById("start-stop-btn").innerText = "stop"
        timerID = setInterval(slide_time, 2000)
    } else {
        document.getElementById("start-stop-btn").innerText = "start"
        clearInterval(timerID)
    }
}
// TRY onclickをボタンにつける
// startBtn.onclick = startSlide
// stopBtn.onclick = stopSlide
startStop.onclick = startStopSlide

// おすすめ音楽

function tellRecommend() {
    var fortune_num = Math.floor(Math.random() * 4)

    var resultText, resultImg
    if (fortune_num === 0) {
        resultText = "Happy Birthday"
        resultImg = "./imgs/party.jpg"
    } else if (fortune_num === 1) {
        resultText = "Make you happy"
        resultImg = "./imgs/party2.jpg"
    } else if (fortune_num === 2) {
        resultText = "Chopstick"
        resultImg = "./imgs/chopstick.jpg"
    } else {
        resultText = "Take a picture"
        resultImg = "./imgs/takeapicture.jpg"
    }

    document
        .getElementById("recommend_music_img")
        .setAttribute("src", resultImg)
    document.getElementById("recommend_music_txt").textContent = resultText
}

var recommend_btn = document.getElementById("recommend_music")
recommend_btn.onclick = () => {
    tellRecommend()
    document.getElementById("recommend_contents").style.display = "block"
}
