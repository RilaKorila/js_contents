/*
これは、JavaScriptのコード
Webサイトの動きに関するプログラムを書くよ
*/

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the "dipped" code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

// getElementByIdの使い方
let favorite_food = document.getElementById("favorite_food");
// 好きな食べ物の情報を入れる
// 文字を入力するときには、" " で囲むよ
favorite_food.innerText = "カレーライス";

let favorite_things = document.getElementById("favorite_things");
// (TRY)favorite_thingsの中身に、「自分の好きなもの/こと」の情報を入れてみよう！



//-------- くりかえし (ずっと〇〇する)  ----------
// 挨拶10回チャレンジ！！
let hello = document.getElementById("hello");
hello.innerHTML += "<p>Hello!</p>";  // +=  というのは、「元々あるものに追加する」という意味だよ
hello.innerHTML += "<p>Hello!</p>";
hello.innerHTML += "<p>Hello!</p>";
// (TRY)このしたにあと10こ追加しよう！





hello.innerHTML += "<h3>さらにもう10こ！</h3>";
// forは自分でかく
// for (let i = 0; i < 10; i++) {
//     hello.innerHTML += "<p>Hello!</p>";
// }


// 今日の表示(時間の取得)
let today = new Date()
document.getElementById("time").innerText = today
// (TODO) スライドに表を作っておいて、today.getMonth()のように、なにを表示するか選ぶ


//-------- 分岐 (もし〇〇なら...)  ----------
// 月1, 火2,
let today_youbi = "土曜日"

//(TODD)全体の分量見て決める
if (today_youbi === 1) {
    document.getElementById("day").innerText = "月曜日！！！"
} 
else if(today_youbi === 2){
    document.getElementById("day").innerText = "火曜日！！！"
}
else {
    document.getElementById("date").innerText = "Waffle Campではない日"
}

// (TRY)もし today_youbi が「土曜日(番号は6番)」なら、「Waffle Camp!」 と表示しよう！


// (TRY)もし today_youbi が「日曜日(番号は7番)」なら、「日曜日！」 と表示しよう！ (TODO: 0かも)


// (TRY)もし today_youbi が 「上記以外」 なら、「平日！」と表示しよう！



