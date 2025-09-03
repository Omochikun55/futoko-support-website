// 画像最適化のユーティリティ関数

export const imageLoader = ({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) => {
  // 画像のURLを最適化
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Blur placeholder用のBase64エンコードされた小さな画像を生成
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const blurDataURL = (w: number, h: number) =>
  `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;

// 画像フォーマット判定
export const getOptimalFormat = () => {
  if (typeof window === 'undefined') return 'webp';
  
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  
  // AVIF対応チェック
  if (canvas.toDataURL('image/avif').indexOf('image/avif') > -1) {
    return 'avif';
  }
  
  // WebP対応チェック
  if (canvas.toDataURL('image/webp').indexOf('image/webp') > -1) {
    return 'webp';
  }
  
  return 'jpeg';
};

// 画像プリロード設定
export const preloadImage = (src: string, priority: boolean = false) => {
  if (typeof window === 'undefined' || !priority) return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};