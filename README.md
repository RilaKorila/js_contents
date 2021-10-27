# js_contents

HTML&CSS で作成した静的なホームページに、JavaScrpt を使って”おもしろい何か” をつけてみます。

## 開発環境

-   eslint を導入してみました。カンマ、セミコロンについても試しに制限かけてみます。（JS を使う予定だが、TS の練習もしたいので、typescript-eslint も入れてみた。まずは JS で書いた後、余裕があれば TS に書き換える）

-   prettier も導入。ただ、コマンドライン`npx prettier --write <filename/dirname>`からしか今は実行できない状態。VSCode のパッケージをうまく設定して、保存したら自動的に Prettier がきくようにしたい

## 直したい

-   全体
    -   [x]ボタンの onclick の扱いを揃える
-   カレンダー
    -   カレンダーのタイトルが動く(月の桁数が原因)
    -   三角より少し多い幅がクリック対象
    -   (TODO) クリックすると、「今日はなんの日」が表示される仕組み
-   天気
    -   表関連の CSS をもう少し自在に扱えるように研究
    -   この「情報の見せ方」の部分は需要が高そうなので、API 変えるよりは表示方法にバリエーションを考える
    -   予報の方のコードが少し厄介(うまく説明するか、良い感じに変えるか)
    -   files://から始まるとき、外部モジュールを import できない(=API 直書きになってしまう)

## 注意点

-   window.onload イベントを複数記述した場合、最後のもののみ実行される
    -   script タグを最後に読む
    -   MDN では使わずにやっている
-   QuerySelector で呼び出した要素にたいして、textContent は作用しない
-   getElementsByClassName は指定したクラス名をもつ要素を全て取得できる。
    -   つまり、返り値はリスト
