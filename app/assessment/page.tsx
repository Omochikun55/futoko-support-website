import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, FileText, Target, CheckCircle, Sparkles, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "初回相談・見立て（アセスメント）",
  description: "最初の一歩は「整理」から。保護者面談、本人の状態把握、学習・睡眠・生活リズム、対人面、学校との接点、過去の支援歴、希望の確認を行います。",
};

export default function AssessmentPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <div className="mx-auto mb-6 w-20 h-20">
                <Image
                  src="/images/icon-assessment.png"
                  alt="アセスメントアイコン"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                最初の一歩は「整理」から。
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              初回相談・見立て（アセスメント）
            </p>
          </div>
        </div>
      </section>

      {/* 内容説明 */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <h2 className="text-3xl font-bold text-heading mb-8 text-center">アセスメントの内容</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group rounded-xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg ring-1 ring-blue-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">保護者面談</span>
                  </div>
                </div>
                <div className="group rounded-xl bg-gradient-to-br from-white to-cyan-50 p-6 shadow-lg ring-1 ring-cyan-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">本人の状態把握</span>
                  </div>
                </div>
                <div className="group rounded-xl bg-gradient-to-br from-white to-purple-50 p-6 shadow-lg ring-1 ring-purple-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">学習・睡眠・生活リズム</span>
                  </div>
                </div>
                <div className="group rounded-xl bg-gradient-to-br from-white to-pink-50 p-6 shadow-lg ring-1 ring-pink-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">対人面</span>
                  </div>
                </div>
                <div className="group rounded-xl bg-gradient-to-br from-white to-orange-50 p-6 shadow-lg ring-1 ring-orange-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">学校との接点</span>
                  </div>
                </div>
                <div className="group rounded-xl bg-gradient-to-br from-white to-green-50 p-6 shadow-lg ring-1 ring-green-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">過去の支援歴</span>
                  </div>
                </div>
                <div className="group rounded-xl bg-gradient-to-br from-white to-indigo-50 p-6 shadow-lg ring-1 ring-indigo-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start">
                    <CheckCircle className="mr-3 h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-900">希望の確認</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Added above pricing section */}
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                無料相談から始める
              </Link>
              <p className="mt-3 text-sm text-gray-600">まずは無料相談でお話をお聞かせください</p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="group relative rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-xl ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-x-3">
                    <div className="rounded-xl bg-gradient-to-br from-primary to-blue-600 p-3 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">所要時間</h3>
                  </div>
                  <p className="mt-4 text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">60–90分</p>
                  <p className="mt-2 text-sm text-gray-600">じっくりお話をお伺いします</p>
                </div>
              </div>
              
              <div className="group relative rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-xl ring-1 ring-purple-100 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-center gap-x-3">
                    <div className="rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-3 shadow-lg">
                      <CreditCard className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">料金</h3>
                  </div>
                  <p className="mt-4">
                    <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5,500円</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-600">制度利用に切替の場合は初月分から充当可</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アウトプット */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-heading text-center mb-12">
              アセスメント後にお渡しするもの
            </h2>
            
            <div className="space-y-6">
              <div className="group relative bg-white rounded-2xl p-8 shadow-xl ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                <div className="relative flex items-start">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-blue-600 p-3 shadow-lg mr-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">アセスメントシート</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-primary mr-2" />
                        現状の整理
                      </li>
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-primary mr-2" />
                        お子さまの強み
                      </li>
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-primary mr-2" />
                        困りごとの分析
                      </li>
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-primary mr-2" />
                        短期・中期の目標設定
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-8 shadow-xl ring-1 ring-purple-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute -top-2 -right-2 h-16 w-16 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" />
                <div className="relative flex items-start">
                  <div className="rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-3 shadow-lg mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">提案プラン</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                        制度利用 or 実費の選択
                      </li>
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                        支援の頻度
                      </li>
                      <li className="flex items-center">
                        <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
                        連携方針
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-heading mb-8">
              まずは無料相談から始めましょう
            </h2>
          </div>
          <Link
            href="/contact"
            className="animate-fadeIn group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="relative z-10">無料相談</span>
            <span className="relative z-10">→</span>
            <span className="relative z-10">見立て予約</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </section>
    </>
  );
}