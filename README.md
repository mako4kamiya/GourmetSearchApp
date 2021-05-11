# 簡易仕様書

## アプリ名
「スマート・グルメ・サーチ - 付近の飲食店を検索」

## ホスティングURL
https://gourmet-search-app.netlify.app

## リポジトリURL
https://github.com/mako4kamiya/gourmet-search-app

## 対象OS・ブラウザ
### MacOS
- Chrome
### Windows 10 Pro
- Chrome v90.0.4430.93
### iOS v14.4.2
- Chrome v90.0.4430.78
- Safari
- Sleipnir Mobile v4.6.10

## 開発言語・フレームワーク
- JavaScript
- React.js v17.0.2
- NPM v6.14.12
- MATERIAL-UI  v4.11.1

## 外部API
- Mapbox GL JS v2.0.1
- - Geolocation API

## 開発期間
約2週間

## 機能一覧
- 現在地情報から付近の飲食店の検索
- 検索結果の表示（一覧・詳細）
- 検索オプションを洗濯して絞り込み検索
- 検索範囲を指定して絞り込み検索

## 設計
「miro」で設計を行った。[リンク先](https://miro.com/welcomeonboard/c8RIFbcgTyHIJrzbVsAaahy2O6h4l5AS8jj5fe7WFvruejQbzWlZr9BsooqSZgUC)
![GourmetSearchApp](https://user-images.githubusercontent.com/52666344/117788702-95951480-b282-11eb-94dd-38f2948871b7.jpg)
![GourmetSearchApp (1)](https://user-images.githubusercontent.com/52666344/117788720-99c13200-b282-11eb-82d5-6debd03bd745.jpg)


## コンセプト
「新しい・スマート・シンプル」

## こだわったポイント
### ユーザー調査に基づいて設計を行った。
アプリ開発を始めるにあたり、自分なりに[市場調査](https://github.com/mako4kamiya/gourmet-search-app/issues/2#issuecomment-827632719)と[ユーザー調査](https://github.com/mako4kamiya/gourmet-search-app/issues/2#issuecomment-827717494)を行った。
ユーザー調査の結果、飲食店を検索する際には、「食べログ・ぐるなび・ホットペッパーなどのグルメサイト」等よりも、「Googleマップなどの地図サービス」が多く使われており、さらには「直接店舗のホームページを見る」という意見も見られた。さらに、「コロナ禍に伴う飲食店の営業時間の変更等の情報」や「決済方法」に関する情報の需要が高かった。
このことから、アプリは”地図表示ベース”で使用できることにし、ユーザー調査で需要の高かった情報を”見やすく”表示、詳細は直接店舗情報を見ることが多いと想定して、シンプルで動作が高速なアプリケーションになるように設計を考えた。

### デザイン面でこだわったポイント
「新しい・スマート・シンプル」をコンセプトに、ピンタレストでインスピレーションを得て画面設計を行なった。開発期間が短かったことから、簡単にレスポンシブ対応できかつおしゃれなデザインが作れる、UIコンポーネントとして「MATERIAL-UI」を採用した。地図サービスは、開発者が自由にレイアウトを作成できることから、「Mapbox GL JS」を採用した。

### 自己評価
アプリを開発するにあたってまずユーザー調査を始めたことから、アプリのコンセプトや開発の目的が定まったことで、とても作りやすかったため、調査を行ってよかった。
技術面では、やはりJavaScriptやアルゴリズムの理解が浅いことで開発スピードが遅かったように感じる。開発スピードや技術が身に付けば、プロダクトの品質の向上とユーザーの満足に繋がると思うので、これからも基礎と新しい技術の学習をを続けていきたいと思う。
    
