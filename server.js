// 必要なモジュールをインポート
const express = require('express');
const path = require('path');

// Expressアプリケーションを作成
const app = express();

// ポート番号を設定（環境変数から取得するか、デフォルトで3000を使用）
const PORT = process.env.PORT || 3000;

// 静的ファイルのディレクトリを指定
app.use(express.static(path.join(__dirname, 'public')));

// ルートパスへのGETリクエストに対するレスポンス
app.get('/', (req, res) => {
  res.send('Welcome to my web application!');
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
