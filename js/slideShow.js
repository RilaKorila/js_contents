const img_list = [
    "imgs/apple.png",
    "imgs/banana.png",
    "imgs/orange.png",
    "imgs/cherry.png",
]
var num = -1
var isMovingSldeShow = true
var timerID = 0

window.onload = function () {
    function slide_time() {
        // 高校生向け(順番に表示)
        // if(num===3){
        //     num=0;
        // }
        // else{
        //     num++
        // }

        // ランダム表示
        num = Math.floor(Math.random() * img_list.length)
        document.getElementById("slide_img").src = img_list[num]
        // document.getElementById("slide_img").src = img_list[num===3? num=0 : num++]
    }

    function startStop() {
        if (isMovingSldeShow) {
            isMovingSldeShow = false
            document.getElementById("slide-btn").value = "stop"
            timerID = setInterval(slide_time, 3000)
        } else {
            isMovingSldeShow = true
            document.getElementById("slide-btn").value = "start"
            clearInterval(timerID)
        }
    }
    document.getElementById("slide-btn").onclick = startStop
}
