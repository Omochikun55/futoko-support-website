import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/StructuredData";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "みらいの学び場 | 不登校の「いま」を肯定し、次の一歩を一緒に。札幌の不登校支援",
    template: "%s | みらいの学び場 - 札幌の不登校支援",
  },
  description: "学校に行く・行かないをゴールにせず、本人と家族が安心して学べる選択肢を一緒に増やします。札幌/オンライン対応。初回見立て5,500円。",
  keywords: ["不登校支援", "札幌", "北海道", "発達特性", "見立て", "別室登校", "居場所", "学習コーチング", "保護者支援"],
  metadataBase: new URL("https://example.jp"),
  alternates: {
    canonical: "https://example.jp",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://example.jp",
    siteName: "みらいの学び場",
    title: "みらいの学び場 | 札幌の不登校支援",
    description: "学校に行く・行かないをゴールにせず、本人と家族が安心して学べる選択肢を一緒に増やします。",
    images: [
      {
        url: "/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "みらいの学び場 - 不登校支援サービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "みらいの学び場 | 札幌の不登校支援",
    description: "学校に行く・行かないをゴールにせず、本人と家族が安心して学べる選択肢を一緒に増やします。",
    images: ["/images/hero-main.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
