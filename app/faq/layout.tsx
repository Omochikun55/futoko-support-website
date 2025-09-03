import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "不登校支援に関するよくある質問と回答をまとめました。すぐに通学を目指すべきか、発達障害の診断、学校との連携、料金など。",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}