# 簡易仕様書

## 概要

### アプリ名：Gourmet Search App

### ホスティングURL：https://gourmet-search-app.netlify.app

### リポジトリURL：https://github.com/mako4kamiya/gourmet-search-app

### アプリの内容

### コンセプト

### こだわったポイント

### デザイン面でこだわったポイント



## 開発環境
### OS
- MacOS
- Windows 10 Pro

### ブラウザ
Chrome バージョン: 90.0.4430.93

### 開発言語・フレームワーク
- JavaScript
- React.js v17.0.2
- NPM v6.14.12
- MATERIAL-UI  v4.11.1

### 外部API
- Mapbox GL JS v2.0.1


## 動作対象ブラウザ
Chrome バージョン: 90.0.4430.93


## 開発期間


## 設計
#### ルーティング
| HTTP | url      | 意味                        |
|---   |---       |---                          | 
| GET  | /        | 検索結果画面（マップ）・ホーム |
| GET  | /list    | 検索結果画面（リスト）         |
| GET  | /filter  | 検索条件入力画面              |
| GET  | /shop/id | 検索結果画面                  |


## アプリケーション機能
### 機能一覧
- 新規登録機能
- ログイン機能
- 振り返り内容の記録機能
- 振り返り内容の一覧表示機能
- ユーザー情報表示機能
- 権限ごとの画面表示機能
- Reflection App - ホーム画面


## 自己評価


## 課題
- Promiseなど非同期処理などJavascriptの基礎、React・Nodeの基礎の理解がまだまだ薄かった。「現代のJavascriptチュートリアル」にそって習得する。
- ログイン機能を実装するにあたって、実装したことのなかったJWTを選択したが、クライアントサイドのローカルストレージにトークンを保存する方法では、XSSで悪意のあるJSに情報を抜き取られてしまう恐れがあり、セキュリティを強化するためには、「Access Token および Refresh Token」の概念の理解が必要である。



## 参考サイト・リンク集
- [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)
- [React Hooks: JWT Authentication (without Redux) example](https://bezkoder.com/react-hooks-jwt-auth/)
- [mongoose](https://mongoosejs.com/docs/guide.html)
- [React](https://ja.reactjs.org/docs/getting-started.html)
- [ui-neumorphism](https://akaspanion.github.io/ui-neumorphism/)
- [themesberg neumorphism-ui](https://demo.themesberg.com/neumorphism-ui/) 
- [春を感じる淡い色を集めてみた](https://pulpxstyle.com/post-214/)
- [アイコン React - Material Design Icons](https://www.npmjs.com/package/@mdi/react)
