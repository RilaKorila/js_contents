const img_list = [
    "imgs/apple.png",
    "imgs/banana.png",
    "imgs/orange.png",
    "imgs/cherry.png",
]
const new_img_list = [
    "../imgs/apple.png",
    "../imgs/banana.png",
    "../imgs/orange.png",
    "../imgs/cherry.png",
]
let isMovingSldeShow = true
let timerID = 0

function slide_time() {
    // 高校生向け(順番に表示)
    // if(num===3){
    //     num=0;
    // }
    // else{
    //     num++
    // }

    // ランダム表示
    let num = Math.floor(Math.random() * new_img_list.length)
    document.getElementById("slide_img").src = new_img_list[num]
    // document.getElementById("slide_img").src = img_list[num===3? num=0 : num++]
}

function startStop(e) {
    console.log("startStop")
    if (isMovingSldeShow) {
        isMovingSldeShow = false
        e.target.textContent = "stop"
        timerID = setInterval(slide_time, 3000)
    } else {
        isMovingSldeShow = true
        e.target.value = "start"
        clearInterval(timerID)
    }
}

// 変えるとこ：スライドを始める関数をまず実行 + btnに対してえonclickを付与
