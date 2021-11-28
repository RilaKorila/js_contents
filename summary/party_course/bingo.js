$(function () {
    // 1~75まで、bingoの数字一覧を作成
    let max = 75
    let bingo = []
    for (let i = 1; i <= max; i++) {
        bingo.push(i)
    }

    let timer
    let random
    // START・STOPボタンクリックのイベント
    $("#button").on("click", function () {
        // START
        if ($(this).text() == "START") {
            // ボタンのテキストを"STOP"に変更
            $(this).text("STOP")

            // ルーレットタイマーを設定
            timer = setInterval(function () {
                random = Math.floor(Math.random() * bingo.length)
                $("#result").text(bingo[random])
            }, 10)
            // STOP
        } else {
            // ボタンのテキストを"START"に変更
            $(this).text("START")

            // ルーレットタイマーを停止
            clearInterval(timer)

            // 停止時の数字を結果に反映
            let result = bingo[random]
            // 一覧から削除（次のルーレットに表示させないため）
            bingo.splice(random, 1)

            // 数字一覧に追加
            $("#number").append($("<li>").text(result))
            $("#number li").addClass("centering")
        }
    })
})
