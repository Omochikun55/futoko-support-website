import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "コラム一覧 | 不登校支援センター",
  description: "不登校支援に関する実践的なコラムを掲載。1か月ゴール設定、AI学習活用、保護者サポートなど、現場で役立つ情報をお届けします。",
};

// コラムデータ（今後増やしていく）
const columns = [
  {
    id: "goal-setting-1month",
    title: "子どもと一緒に決める「1か月ゴール」",
    subtitle: "小さな一歩から始める不登校支援",
    description: "不登校支援の出発点は'現実的な小さな一歩'。FASTで1か月ゴールを作り、If-Thenと代替案で続けられる設計に。",
    category: "支援方法",
    date: "2024-01-15",
    readTime: "10分",
    tags: ["ゴール設定", "FAST", "保護者向け"],
    featured: true,
  },
  // 今後追加予定のコラム
  {
    id: "ai-learning-start",
    title: "AIで学習を再開する3つのステップ",
    subtitle: "プロンプトから始める創造的学習",
    description: "不登校中でもAIツールを活用して、創造的な学習を始める具体的な方法を紹介。",
    category: "AI学習",
    date: "2024-01-22",
    readTime: "8分",
    tags: ["AI", "学習再開", "創造性"],
    featured: false,
    comingSoon: true,
  },
  {
    id: "parent-mental-care",
    title: "保護者の心を守る5つの習慣",
    subtitle: "燃え尽きを防ぐセルフケア",
    description: "不登校支援で疲れた保護者のための、実践的なメンタルケア方法。",
    category: "保護者サポート",
    date: "2024-01-29",
    readTime: "7分",
    tags: ["保護者", "メンタルケア", "セルフケア"],
    featured: false,
    comingSoon: true,
  },
];

// カテゴリー別の色設定
const categoryColors = {
  "支援方法": "bg-blue-100 text-blue-700",
  "AI学習": "bg-purple-100 text-purple-700",
  "保護者サポート": "bg-green-100 text-green-700",
  "学校連携": "bg-orange-100 text-orange-700",
} as const;

export default function ColumnsPage() {
  const featuredColumn = columns.find((col) => col.featured);
  const otherColumns = columns.filter((col) => !col.featured);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <BookOpen className="h-4 w-4" />
              コラム
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              実践的な不登校支援コラム
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              現場で役立つ具体的な方法と事例を紹介
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredColumn && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">注目の記事</h2>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                  Featured
                </span>
              </div>
              
              <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[featuredColumn.category as keyof typeof categoryColors]}`}>
                  {featuredColumn.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredColumn.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredColumn.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {featuredColumn.title}
              </h3>
              <p className="text-lg text-gray-700 mb-2">{featuredColumn.subtitle}</p>
              <p className="text-gray-600 mb-6">{featuredColumn.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {featuredColumn.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs text-gray-700"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/columns/${featuredColumn.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                記事を読む
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Other Articles */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">すべての記事</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherColumns.map((column) => (
              <div
                key={column.id}
                className={`group rounded-xl bg-white p-6 shadow-sm transition-all ${
                  column.comingSoon
                    ? "opacity-60"
                    : "hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {column.comingSoon && (
                  <div className="mb-4">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="mb-4 flex items-center gap-3 text-xs">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 font-semibold ${categoryColors[column.category as keyof typeof categoryColors]}`}>
                    {column.category}
                  </span>
                  <span className="text-gray-500">{column.date}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {column.title}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {column.subtitle}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {column.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {column.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    {column.readTime}
                  </span>
                  {!column.comingSoon && (
                    <Link
                      href={`/columns/${column.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                    >
                      読む
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              コラムの内容を実践したい方へ
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              個別の状況に合わせた具体的なサポートを提供します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
              >
                無料相談を予約
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-lg ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
              >
                支援サービスを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}