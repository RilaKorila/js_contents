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


// JSONでデータを表示
const gallery_data = [{
    "name":"Waffle Cafe",
    "text": "落ち着いたデザインがおしゃれなカフェ",
    "picture": "cafe1.jpg",
},
{
    "name": "タイトル",
    "text": "説明文",
    "picture": "画像のファイル名",
}]

for(let i=0; i++; i<length(gallery_data)){
    document.getElementsByClassName("gallery-picture")[i].setAttribute("src", "./imgs/" + gallery_data[i].picture); 
    document.getElementById("gallery-name")[i].textContent = gallery_data[i].name;
    document.getElementById("gallery-text")[i].textContent = gallery_data[i].text;
}
