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
