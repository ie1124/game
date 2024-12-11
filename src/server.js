// 必要なモジュールをインポート
const express = require("express");
const path = require("path");

// Expressアプリケーションを作成
const app = express();

// ポート番号を設定（環境変数から取得するか、デフォルトで3006を使用）
const PORT = process.env.PORT || 3006;

// 静的ファイルのディレクトリを指定
app.use(express.static(path.join(__dirname, "public")));
app.use("/highlow", express.static(path.join(__dirname, "highlow")));
app.use("/menu", express.static(path.join(__dirname, "menu")));
app.use("/roulette", express.static(path.join(__dirname, "roulette")));

// ルートパスへのGETリクエストに対するレスポンス（menu.htmlを表示）
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "menu", "menu.html")); // menu.htmlを表示
});

// 各ページへのルート設定
app.get("/highlow", (req, res) => {
  res.sendFile(path.join(__dirname, "highlow", "highlow.html")); // highlow.htmlを表示
});

app.get("/roulette", (req, res) => {
  res.sendFile(path.join(__dirname, "roulette", "roulette.html")); // roulette.htmlを表示
});

// エラーハンドリングミドルウェア
app.use((req, res) => {
  res.status(404).send("Sorry, that route does not exist."); // 404エラーメッセージ
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // サーバー起動メッセージ
});
