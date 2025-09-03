import type { Metadata } from "next";
import { Target, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "1ヶ月ゴール設計",
  description: "お子様に合わせた1ヶ月の目標を一緒に設計します。スモールステップで確実に前進。",
};

export default function GoalSettingPage() {
  // 1ヶ月ゴール設計フォームのURL
  const goalFormUrl = "https://docs.google.com/forms/d/1beeomrQDZlRQAt5Pk0qitx91o8QSHyU8FLzELgkMvQ8/viewform?embedded=true";
  
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <Target className="mx-auto h-12 w-12 text-purple-600 mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                1ヶ月ゴール設計
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              お子様の現状に合わせて、無理のない目標を一緒に設計します。
              <br />
              小さな成功体験を積み重ねて、自信を取り戻しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* Goal Process Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-8">
              ゴール設計のプロセス
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center animate-fadeIn group" style={{ animationDelay: '0.1s' }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">現状の把握</h3>
                <p className="mt-2 text-sm text-gray-600">
                  お子様の今の状態、興味関心、強みを理解します
                </p>
              </div>
              <div className="text-center animate-fadeIn group" style={{ animationDelay: '0.2s' }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">目標の設定</h3>
                <p className="mt-2 text-sm text-gray-600">
                  達成可能で具体的な1ヶ月目標を設計
                </p>
              </div>
              <div className="text-center animate-fadeIn group" style={{ animationDelay: '0.3s' }}>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">週次チェック</h3>
                <p className="mt-2 text-sm text-gray-600">
                  毎週の振り返りと目標の微調整でサポート
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Examples Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-12">
              目標設定の例
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {/* 学習面の目標 */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">学習面の目標</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>毎日15分の学習習慣をつける</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>興味のある教科を1つ見つける</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>オンライン授業に週2回参加する</span>
                  </li>
                </ul>
              </div>

              {/* 生活面の目標 */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">生活面の目標</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span>決まった時間に起床する</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span>1日1回は外出する</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span>家族と1日1回は会話する</span>
                  </li>
                </ul>
              </div>

              {/* 社会性の目標 */}
              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <ArrowRight className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">社会性の目標</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>オンラインで友達と話す</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>グループ活動に1回参加する</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>新しい趣味活動を始める</span>
                  </li>
                </ul>
              </div>

              {/* 心の健康の目標 */}
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                    <Target className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">心の健康の目標</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>日記を週3回書く</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>1日1つ良かったことを見つける</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>リラックス時間を毎日作る</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-white to-blue-50 p-8 sm:p-12 shadow-xl">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-20 blur-3xl" />
            
            <div className="relative">
              <h2 className="text-2xl font-bold text-heading text-center mb-6">
                1ヶ月ゴール設計フォーム
              </h2>
              
              <p className="text-center text-gray-600 mb-8">
                お子様の状況を教えてください。<br />
                専門スタッフが最適な目標設定をサポートします。
              </p>
              
              {/* Googleフォーム埋め込み */}
              <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-inner ring-1 ring-gray-100">
                <iframe
                  src={`${goalFormUrl}?embedded=true`}
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                >
                  読み込んでいます...
                </iframe>
              </div>

              {/* 注意事項 */}
              <div className="mt-8 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">ご記入にあたって</h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>無理のない目標設定が大切です</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>お子様と一緒に考えることをおすすめします</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-600">•</span>
                    <span>途中での変更・調整も可能です</span>
                  </li>
                </ul>
              </div>

              {/* CTAボタン */}
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>まずは無料相談から</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}