import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, School, Brain, GraduationCap, BookOpen, Target, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 animate-gradient" />
        
        {/* Decorative circles */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-cyan-200 opacity-20 blur-3xl" />
        
        <div className="relative py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="animate-fadeIn text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-heading">
                  不登校の<wbr/>「いま」を<wbr/>否定せず、<br className="hidden sm:block" />
                  子どもと<wbr/>一緒に<wbr/>ゴールを<wbr/>考える。
                </h1>
                <div className="animate-fadeIn mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 max-w-2xl" style={{ animationDelay: '0.2s' }}>
                  <p>学校に行くことだけがゴールではありません。</p>
                  <p className="mt-3 font-bold text-gray-900">
                    「なぜ行くのか？ 本当に行く必要があるのか？」を子どもと一緒に問い直し、
                    いまこの子にできることを最優先に、安心できる日々と自分らしい未来へ伴走します。
                  </p>
                  <p className="mt-3">
                    不登校に「必ず〇〇できる」という魔法の答えはありません。
                    だからこそ、本人と共に現実的で納得できるゴールを一歩ずつ探します。
                  </p>
                  <p className="mt-4 text-sm text-gray-600">（札幌/オンライン対応）</p>
                </div>
                
                {/* 相談の流れを1行で */}
                <div className="animate-fadeIn mt-6 p-4 rounded-xl bg-blue-50/50 border border-blue-100" style={{ animationDelay: '0.3s' }}>
                  <p className="text-sm sm:text-base text-slate-700 text-center">
                    初回は<strong className="text-primary">30-45分の無料相談</strong> → 
                    必要に応じ<strong className="text-primary">有料アセスメント</strong> → 
                    <strong className="text-primary">最適プラン</strong>をご提案します
                  </p>
                </div>
                
                <div className="animate-fadeIn mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6" style={{ animationDelay: '0.4s' }}>
                  <Link
                    href="/contact"
                    className="btn-primary group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="無料相談を予約する"
                  >
                    <span className="relative z-10">無料相談を予約する</span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                  <Link
                    href="/services"
                    className="btn-secondary group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-lg hover:ring-primary hover:text-primary hover:gap-3"
                    aria-label="支援メニューを見る"
                  >
                    支援メニューを見る
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto max-w-lg lg:mx-0">
                <div className="animate-fadeIn rounded-2xl overflow-hidden shadow-2xl" style={{ animationDelay: '0.6s' }}>
                  <Image
                    src="/images/hero-main.jpg"
                    alt="明るく温かみのある学習空間で、子どもたちが安心して学んでいる様子"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実現可能性の宣言 */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg font-semibold text-amber-900">
              <strong>私たちは「必ず通学できる」とは言いません。</strong> いま実現できる一歩を、本人と一緒に探します。
            </p>
          </div>
        </div>
      </section>

      {/* 3つの特長 */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              私たちの支援の特長
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-primary/20 hover:-translate-y-1">
                <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-3 ring-8 ring-blue-50/50">
                  <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  見立てから伴走まで一本化
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  <p>
                    初回相談→見立て→個別計画→伴走支援→学校/関係機関連携まで。
                  </p>
                </dd>
              </div>
              <div className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-primary/20 hover:-translate-y-1">
                <div className="mb-6 inline-flex rounded-xl bg-cyan-50 p-3 ring-8 ring-cyan-50/50">
                  <Users className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  制度利用と実費サービスを適切に案内
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  <p>
                    発達特性が背景にある場合は放課後等デイサービスを、ない/軽度なら実費型を。
                  </p>
                </dd>
              </div>
              <div className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-primary/20 hover:-translate-y-1">
                <div className="mb-6 inline-flex rounded-xl bg-purple-50 p-3 ring-8 ring-purple-50/50">
                  <School className="h-6 w-6 text-purple-600" aria-hidden="true" />
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  本人中心・家族もいっしょ
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  <p>
                    本人の気持ちを土台に、保護者の不安や実務も支える仕組み。
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 支援メニュー */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              お子さまに合わせた支援メニュー
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              一人ひとりの個性と目標に合わせた多彩な支援プログラムをご用意
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {/* AI支援 */}
            <Link href="/ai" className="group relative rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg ring-1 ring-purple-100 transition-all duration-300 hover:shadow-2xl hover:ring-purple-300 hover:-translate-y-1">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-medium text-white">
                  NEW
                </span>
              </div>
              <div className="mb-4 inline-flex rounded-xl bg-purple-100 p-3">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AIで学ぶ</h3>
              <p className="text-gray-600 mb-4">
                AIと一緒に「できた」を増やす。1対1個別とAIミニラボで創造力を育てます
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>プロンプトから始めるAI学習</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>ノーコード制作体験</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>かんたんPython入門</span>
                </li>
              </ul>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 高卒認定サポート */}
            <Link href="/kounin" className="group relative rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg ring-1 ring-green-100 transition-all duration-300 hover:shadow-2xl hover:ring-green-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">高卒認定サポート</h3>
              <p className="text-gray-600 mb-4">
                高卒認定試験合格への最短ルート。あなたの「今」から始める個別プラン
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>科目選択の戦略立案</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>効率的な学習計画</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>過去問徹底対策</span>
                </li>
              </ul>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* 受験個別 */}
            <Link href="/juken" className="group relative rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:ring-blue-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">受験個別</h3>
              <p className="text-gray-600 mb-4">
                中学・高校・大学受験を1対1で。あなただけの合格プランを一緒に
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>志望校別の対策</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>基礎から応用まで</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>面接・小論文対策</span>
                </li>
              </ul>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          {/* ゴール設計へのリンク */}
          <div className="mt-12 text-center">
            <Link 
              href="/goal-setting"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-3 text-sm font-semibold text-orange-700 shadow-lg ring-1 ring-orange-200 transition-all duration-300 hover:shadow-xl hover:ring-orange-300"
            >
              <Target className="h-5 w-5" />
              まずはゴール設計から始める
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 実例の一部 */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              実例の一部（匿名）
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              一人ひとりの歩みを大切にしています
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            <article className="group relative flex flex-col items-start bg-white p-8 rounded-2xl shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-primary/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-x-4">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 text-xs font-semibold text-primary">
                    小学4年生
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                  自宅中心から別室登校とオンライン学習の両立へ
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  小4から自宅中心→中学から別室登校とオンライン学習を両立
                </p>
                <div className="mt-8">
                  <Link
                    href="/cases#c2"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
                  >
                    もっと多くの実例を見る 
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
            <article className="group relative flex flex-col items-start bg-white p-8 rounded-2xl shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-primary/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-x-4">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-4 py-2 text-xs font-semibold text-accent">
                    小学3年生
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                  行きしぶりから週3の居場所利用へ
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  小3から行きしぶり→小5で別室登校・週3の居場所利用へ
                </p>
                <div className="mt-8">
                  <Link
                    href="/cases#c2"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
                  >
                    もっと多くの実例を見る 
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 流れ（ステップ） */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              支援の流れ
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              4つのステップで、お子さまと家族を支えます
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
              <li className="group relative flex flex-col">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="mt-6 font-semibold text-gray-900 text-sm sm:text-base">無料相談予約</h3>
                <p className="mt-2 text-sm text-gray-600">
                  まずはお気軽にご相談ください
                </p>
                {/* Connector line */}
                <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
              </li>
              <li className="group relative flex flex-col">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <span className="text-3xl font-bold text-accent">2</span>
                </div>
                <h3 className="mt-6 font-semibold text-gray-900 text-sm sm:text-base">見立て（アセスメント）</h3>
                <p className="mt-2 text-sm text-gray-600">
                  現状を整理し、適切な支援を提案
                </p>
                {/* Connector line */}
                <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-cyan-200 to-transparent" />
              </li>
              <li className="group relative flex flex-col">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="mt-6 font-semibold text-gray-900 text-sm sm:text-base">計画作成</h3>
                <p className="mt-2 text-sm text-gray-600">
                  制度/実費の選択肢を提示
                </p>
                {/* Connector line */}
                <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent" />
              </li>
              <li className="group relative flex flex-col">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <span className="text-3xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="mt-6 font-semibold text-gray-900 text-sm sm:text-base">伴走支援</h3>
                <p className="mt-2 text-sm text-gray-600">
                  学び・生活・連携をサポート
                </p>
              </li>
            </ol>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">無料相談を予約</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
