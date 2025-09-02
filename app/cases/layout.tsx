import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "実例と歩み",
  description: "不登校の形は一つではありません。支援の現場で見えてきた子どもたちの歩みの一例を、検索・フィルタ機能付きでご紹介します。学校復帰のみをゴールとせず、いま実現できる一歩を共に探します。",
  keywords: ["不登校", "実例", "支援事例", "別室登校", "放課後等デイサービス", "行事参加", "歩み"],
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}