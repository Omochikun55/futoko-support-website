# みらいの学び場 - 不登校支援サービスウェブサイト

## 概要

札幌を拠点とする不登校支援サービス「みらいの学び場」の公式ウェブサイトです。学校に行く・行かないをゴールにせず、本人と家族が安心して学べる選択肢を一緒に増やすことを目的としています。

## 技術スタック

- **フレームワーク**: Next.js 15.0.2 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **フォーム**: React Hook Form + Zod
- **アイコン**: Lucide React
- **フォント**: Noto Sans JP (Google Fonts)

## 主な機能

### ページ構成
- **ホーム** - サービス概要と理念
- **支援メニュー** - 提供サービスの詳細
- **初回相談・見立て** - アセスメントプロセスの説明
- **実例と歩み** - 支援事例（検索・フィルタ機能付き）
- **料金・プラン** - 制度利用と実費プランの説明
- **保護者さま向け** - 保護者向け情報とリソース
- **私たちについて** - チーム紹介と理念
- **よくある質問** - FAQ
- **お問い合わせ** - 相談予約フォーム
- **プライバシーポリシー**
- **利用規約**

### デザイン特徴
- モダンなグラデーションとアニメーション
- レスポンシブデザイン（モバイル対応）
- アクセシビリティ対応（ARIA labels、セマンティックHTML）
- 日本語フォント最適化

### SEO対策
- メタタグ最適化
- Open Graph対応
- 構造化データ（JSON-LD）
- robots.txt / sitemap.xml
- Canonical URL設定

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## プロジェクト構造

```
futoko-support-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # ホームページ
│   ├── services/          # 支援メニュー
│   ├── assessment/        # 初回相談・見立て
│   ├── cases/             # 実例と歩み
│   ├── pricing/           # 料金・プラン
│   ├── parents/           # 保護者さま向け
│   ├── about/             # 私たちについて
│   ├── faq/               # よくある質問
│   ├── contact/           # お問い合わせ
│   ├── privacy/           # プライバシーポリシー
│   └── terms/             # 利用規約
├── components/
│   ├── layout/            # ヘッダー、フッター
│   └── StructuredData.tsx # 構造化データコンポーネント
├── public/
│   ├── images/            # 画像アセット
│   ├── robots.txt         # クローラー設定
│   └── sitemap.xml        # サイトマップ
└── styles/
    └── globals.css        # グローバルスタイル
```

## デプロイ

本プロジェクトはVercelやNetlifyなどの静的サイトホスティングサービスで簡単にデプロイできます。

```bash
# 静的エクスポート
npm run build
```

## ライセンス

このプロジェクトは非公開プロジェクトです。

## 連絡先

- 運営: 放課後等デイサービス「ぷろらぼ」
- ウェブサイト: [pro-labo.net](https://pro-labo.net)
- 所在地: 札幌市（円山周辺）