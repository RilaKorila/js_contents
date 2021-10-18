# js_contents

HTML&CSS で作成した静的なホームページに、JavaScrpt を使って”おもしろい何か” をつけてみます。

## 開発環境

-   eslint を導入してみました。カンマ、セミコロンについても試しに制限かけてみます。（JS を使う予定だが、TS の練習もしたいので、typescript-eslint も入れてみた。まずは JS で書いた後、余裕があれば TS に書き換える）

-   prettier も導入。ただ、コマンドライン`npx prettier --write <filename/dirname>`からしか今は実行できない状態。VSCode のパッケージをうまく設定して、保存したら自動的に Prettier がきくようにしたい

## 直したい

-   全体
    -   ボタンの onclick の扱いを揃える
-   カレンダー
    -   カレンダーのタイトルが動く(月の桁数が原因)
    -   三角より少し多い幅がクリック対象
-   天気
    -   表関連の CSS をもう少し自在に扱えるように研究
    -   予報の方のコードが少し厄介(うまく説明するか、良い感じに変えるか)
    -   files://から始まるとき、外部モジュールを import できない(=API 直書きになってしまう)

## 注意点

-   window.onload イベントを複数記述した場合、最後のもののみ実行される
-   QuerySelector で呼び出した要素にたいして、textContent は作用しない
-   getElementsByClassName は指定したクラス名をもつ要素を全て取得できる。
