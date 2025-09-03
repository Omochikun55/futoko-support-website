import { Noto_Sans_JP } from 'next/font/google';

// 日本語フォントの設定
export const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: false, // CJKフォントは大きいのでpreloadを無効化
  adjustFontFallback: true, // フォールバックの行高を調整してCLSを低減
  fallback: [
    '"Hiragino Sans"',
    '"Hiragino Kaku Gothic ProN"',
    '"BIZ UDPGothic"',
    '"Yu Gothic"',
    '"Yu Gothic UI"',
    'Meiryo',
    'sans-serif'
  ],
  variable: '--font-noto-sans-jp'
});