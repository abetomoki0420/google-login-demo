# Google Login Demo
## 概要（powered by ChatGPT）
このサンプルアプリは React と Vite を組み合わせて作成されており、Google でのログイン機能を提供しています。ログインに成功すると、ユーザーのプロファイル情報が表示されます。

## 特徴
- **Google ログイン**: Google アカウントを使用してログインできます。
- **ユーザープロファイル表示**: ログイン中のユーザー情報を視覚的に表示します。
- **デザイン**: ユーザープロファイルのスタイリングには Radix Theme を使用しています。

## インストール方法
1. リポジトリをクローンします。
1. [Google API Console](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid?hl=ja#get_your_google_api_client_id) からクライアントIDを取得します。
1. 取得したクライアントIDを `.env`ファイルに`VITE_GOOGLE_CLIENT_ID`として設定します。
1. `npm install` を実行して必要な依存関係をインストールします。
1. `npm run dev` を実行して開発サーバーを起動します。

## 使用技術
- React
- Vite
- [Radix Theme](https://www.radix-ui.com/)