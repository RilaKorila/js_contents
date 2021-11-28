function uranai() {
    let fortune_num = Math.floor(Math.random() * 4)

    let resultText
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

// import { star_uranai } from "../data/uranai"
// (TODO)jsonファイルベタがきはやめる
const star_uranai = {
    stars: [
        { name: "おひつじ", item: "帽子", words: "今日もお疲れ様！" },
        { name: "おうし", item: "帽子", words: "今日もお疲れ様！" },
        { name: "ふたご", item: "帽子", words: "今日もお疲れ様！" },
        { name: "かに", item: "帽子", words: "今日もお疲れ様！" },
        { name: "しし", item: "帽子", words: "今日もお疲れ様！" },
        { name: "おとめ", item: "ケーキ", words: "今日もお疲れ様！" },
        { name: "てんびん", item: "帽子", words: "素敵な日になりますように" },
        { name: "さそり", item: "おかし", words: "今日もお疲れ様！" },
        { name: "いて", item: "帽子", words: "いつもありがとう" },
        { name: "やぎ", item: "ボール", words: "今日もお疲れ様！" },
        { name: "みずがめ", item: "帽子", words: "今日もお疲れ様！" },
        { name: "うお", item: "くま", words: "今日もとってもお疲れ様！" },
    ],
}

// 要素の追加を簡素化
const addElement = function (tag, contents, myClassName = "", myIdName = "") {
    if (tag === "div") {
        let divElem = document.createElement("div")
        // class名, id名を付与
        if (myClassName !== undefined) {
            divElem.setAttribute("class", myClassName)
        }
        if (myIdName !== undefined) {
            divElem.setAttribute("id", myIdName)
        }

        // divタグのときは中身のHTMLを受け取る
        divElem.innerHTML = contents
        document.body.append(divElem)
    } else {
        let name = document.createElement(tag)
        name.innerText = contents

        if (myClassName !== undefined) {
            name.setAttribute("class", myClassName)
        }
        if (myIdName !== undefined) {
            name.setAttribute("id", myIdName)
        }

        document.body.append(name)
    }
}

// jsonを用いた星座ごとの占い
const starArray = star_uranai["stars"]
addElement("h3", "今月の星座占い")

let contents = ""
for (let i = 0; i < starArray.length; i++) {
    contents +=
        `<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
    <label class="form-check-label" for="flexRadioDefault1">
     ` +
        starArray[i]["name"] +
        `
    </label>
  </div>`
}

addElement("div", contents, "radio-box")

// 占い結果の表示
addElement("h2", "今日のラッキーアイテムは...")

addElement("p", starArray)
