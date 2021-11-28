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

// リストもできたらいいけれど、厳しいかもな...
var greeting = ["こんにちは！", "Hello", "こんばんは", "Good Morning"]

// forは自分で描いてもらう
for (let i = 0; i < 10; i++) {
    document.getElementById("single-txt").textContent += greeting[i]
    console.log("hello;")
}

var today = new Date()

document.getElementById("time").textContent = today
// 表を作っておいて、today.getMonth()のように、なにを表示するか選ぶ

// 月1, 火2,
if (today.getDay() === 1) {
    document.getElementById("day").textContent = "月曜日！！！"
} else {
    document.getElementById("date").textContent = "平日！！！"
}
