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
