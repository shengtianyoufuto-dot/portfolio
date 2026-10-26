# Portfolio Starter
白基調・スマホ対応のポートフォリオサイト。HTML/CSS/JavaScriptのみで動くため、GitHub Pagesに無料公開できます。

## 編集方法
- `index.html`：自己紹介や見出しを編集。
- `script.js`：作品一覧 `works` を編集。`contactEmail` に自分のメールアドレスを指定。
- `style.css`：色やデザインを変更。
- `images/`：作品のサムネイル画像を入れる（例：`images/banner01.jpg`）。`script.js` の `image` にそのパスを指定。
- `url` にYouTube等の作品URLを指定するとサムネイルから開けます。未指定の場合はリンクなし。
- 作品データは公開用のサンプルなので、公開前に差し替えること。
- 業務制作物は必ず掲載許可を確認すること。

## GitHub Pages 公開
1. GitHubで新規の **Public** リポジトリ（例：`portfolio`）を作成。
2. このフォルダの中身（`index.html`、`style.css`、`script.js`、`README.md`、`images`）をリポジトリのルートにアップロードしてコミット。
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch**。
4. Branch `main`、Folder `/(root)` を選び **Save**。
5. 公開URLは通常 `https://ユーザー名.github.io/portfolio/`。反映には数分かかる場合があります。

## コツ
動画ファイルを大量にGitHubへ直接アップロードするのではなく、YouTube限定公開等のリンクを利用すると管理しやすいです（限定公開動画のURLを知る人は閲覧可能）。
