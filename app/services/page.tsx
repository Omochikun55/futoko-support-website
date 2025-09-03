import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, School, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "支援メニュー",
  description: "不登校の背景は一人ひとり違います。制度利用（放課後等デイ）と実費型サービスのどちらが適しているかをご提案します。",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-blue-200 opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-200 opacity-20 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <Sparkles className="mx-auto h-12 w-12 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                支援メニュー
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              不登校の背景は一人ひとり違います。まずは見立てを行い、
              <br />
              <strong className="text-primary">制度利用（放課後等デイ）</strong>と<strong className="text-accent">実費型サービス</strong>の
              <br />
              どちらが適しているかをご提案します。
            </p>
          </div>
        </div>
      </section>

      {/* 選び方ガイド Decision Tree */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-8">どちらが適している？</h2>
            
            {/* 制度への誘導 */}
            <div className="mb-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-amber-900">
                <strong>制度による支援（受給者証が必要）</strong>は、<a href="/welfare" className="underline hover:text-amber-700">こちら</a>をご覧ください。
              </p>
            </div>
            
            {/* Decision Tree */}
            <div className="space-y-6">
              {/* 制度利用が向いている方 */}
              <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-green-900 mb-3">
                  ✅ 制度利用（放課後等デイ）が向いている方
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>発達面の継続的な支援が必要</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>感覚過敏やこだわりが強い</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>医療機関の診断がある</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>費用面で公的支援を希望</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <Link
                    href="/welfare"
                    className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-800"
                  >
                    制度による支援の詳細 →
                  </Link>
                </div>
              </div>

              {/* 実費型が向いている方 */}
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-blue-900 mb-3">
                  ✅ 実費型サービスが向いている方
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>受給者証なしですぐ始めたい</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>特定の目標（受験・高認など）がある</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>柔軟なスケジュールを希望</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>AIなど最新の学習方法に興味</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800"
                  >
                    料金プランを見る →
                  </Link>
                </div>
              </div>

              {/* わからない場合 */}
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <p className="text-amber-900">
                  <strong>💡 どちらか迷う場合</strong>
                  <br />
                  まずは初回相談（無料）で状況をお聞きし、最適な支援方法をご提案します。
                  両方の併用も可能です。
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800"
                  >
                    無料相談を予約 →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 制度利用サービス */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="group relative rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 lg:p-12 shadow-lg ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:ring-blue-200">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-x-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-blue-600 p-4 shadow-lg">
                    <School className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">
                    (A) 制度利用：放課後等デイサービス
                    <span className="text-xs font-normal bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-2">通所のみ（遠隔不可）</span>
                  </h2>
                </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">対象</h3>
                  <p className="mt-1 text-gray-600">
                    発達特性の支援ニーズがあるお子さま
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">内容例</h3>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex gap-x-3 transition-transform duration-200 hover:translate-x-1">
                      <CheckCircle className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      学習サポート
                    </li>
                    <li className="flex gap-x-3 transition-transform duration-200 hover:translate-x-1">
                      <CheckCircle className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      生活リズムの調整
                    </li>
                    <li className="flex gap-x-3 transition-transform duration-200 hover:translate-x-1">
                      <CheckCircle className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      コミュニケーション練習
                    </li>
                    <li className="flex gap-x-3 transition-transform duration-200 hover:translate-x-1">
                      <CheckCircle className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                      学校・関係機関連携
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">費用</h3>
                  <p className="mt-1 text-gray-600">
                    受給者証に基づく自己負担（上限あり）
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実費型サービス */}
      <section className="py-0 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="group relative rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-8 lg:p-12 shadow-lg ring-1 ring-cyan-100 transition-all duration-300 hover:shadow-2xl hover:ring-cyan-200">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-x-4">
                  <div className="rounded-xl bg-gradient-to-br from-accent to-cyan-600 p-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">
                    (B) 実費型サービス
                  </h2>
                </div>
              
              <div className="mt-8 space-y-8">
                {/* 個別コーチング */}
                <div className="group/item rounded-xl bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/icon-coaching.png"
                        alt="個別コーチングアイコン"
                        width={60}
                        height={60}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                        1. 個別コーチング（オンライン/対面）
                      </h3>
                      <p className="mt-2 text-gray-600">
                        週1回45–60分、学習と生活の整え
                      </p>
                      <p className="mt-2 font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        目安：月22,000〜33,000円
                      </p>
                    </div>
                  </div>
                </div>

                {/* 居場所 */}
                <div className="group/item rounded-xl bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/icon-place.png"
                        alt="居場所活動アイコン"
                        width={60}
                        height={60}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                        2. 居場所（小集団/趣味活動/制作）
                      </h3>
                      <p className="mt-2 text-gray-600">
                        安心できる環境で、興味関心を広げる活動
                      </p>
                      <p className="mt-2 font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                        1回2,000円〜／月額パス15,000円〜
                      </p>
                    </div>
                  </div>
                </div>

                {/* 保護者向け支援 */}
                <div className="group/item rounded-xl bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/icon-parents.png"
                        alt="保護者支援アイコン"
                        width={60}
                        height={60}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                        3. 保護者向け支援
                      </h3>
                      <p className="mt-2 text-gray-600">
                        個別相談、勉強会、ピアサポート
                      </p>
                      <p className="mt-2 font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        月3,000円〜
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI学習支援 */}
                <div className="group/item rounded-xl bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-[60px] h-[60px] rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl">
                        🤖
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                        4. AIで学ぶ <span className="text-sm font-normal text-blue-600 ml-2">New!</span>
                        <span className="text-xs font-normal bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full ml-2">実費（制度対象外）</span>
                      </h3>
                      <p className="mt-2 text-gray-600">
                        1対1個別とAIミニラボで創造力を育てる
                      </p>
                      <p className="mt-2 font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        月2回15,000円〜／月4回18,000〜24,000円
                      </p>
                      <Link
                        href="/ai"
                        className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        詳細を見る →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 高卒認定サポート */}
                <div className="group/item rounded-xl bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-[60px] h-[60px] rounded-lg shadow-md bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-2xl">
                        📚
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                        5. 高卒認定サポート
                      </h3>
                      <p className="mt-2 text-gray-600">
                        計画設計と過去問ルーティンで伴走
                      </p>
                      <p className="mt-2 font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        月4回28,000〜38,000円
                      </p>
                      <Link
                        href="/kounin"
                        className="inline-block mt-3 text-sm text-green-600 hover:text-green-700 font-medium"
                      >
                        詳細を見る →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 受験個別 */}
                <div className="group/item rounded-xl bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-[60px] h-[60px] rounded-lg shadow-md bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-2xl">
                        🎯
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover/item:text-primary transition-colors">
                        6. 受験個別
                      </h3>
                      <p className="mt-2 text-gray-600">
                        基礎から着実に、あなたのペースで受験準備
                      </p>
                      <p className="mt-2 font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        月4回20,000〜28,000円
                      </p>
                      <Link
                        href="/juken"
                        className="inline-block mt-3 text-sm text-purple-600 hover:text-purple-700 font-medium"
                      >
                        詳細を見る →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500 text-center">
              ※ 放課後等デイは通所のみ。オンライン支援は制度対象外（実費）です。
            </p>
          </div>
        </div>
      </section>

      {/* 補足情報 */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="group rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg ring-1 ring-amber-100 transition-all duration-300 hover:shadow-xl">
              <h3 className="flex items-center text-base font-semibold text-gray-900">
                <svg className="mr-2 h-6 w-6 text-amber-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                補足
              </h3>
              <p className="mt-3 text-base text-gray-700">
                医学的診断は医師のみが行います。当サイトの<strong className="text-primary">見立ては教育・福祉的アセスメント</strong>です。
                必要に応じて医療機関を案内します。
              </p>
            </div>
            
            <div className="mt-10 text-center">
              <Link
                href="/assessment"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">まずは見立て（アセスメント）へ</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}