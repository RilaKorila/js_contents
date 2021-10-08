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
