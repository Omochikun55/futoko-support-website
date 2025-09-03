"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, DollarSign, Zap, Heart, Star, Info, CheckCircle, ArrowRight, Shield, AlertCircle } from "lucide-react";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"fee" | "institutional">("fee");

  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <DollarSign className="mx-auto h-12 w-12 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                料金・プラン
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              お子さまの状況に合わせて、最適なプランをご提案します
            </p>
          </div>
        </div>
      </section>

      {/* タブ切り替え */}
      <section className="py-8 bg-white border-b sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("fee")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "fee"
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                実費プラン
              </button>
              <button
                onClick={() => setActiveTab("institutional")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "institutional"
                    ? "bg-white text-primary shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                制度による支援
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 選び方ガイド */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg ring-1 ring-amber-100">
            <h2 className="flex items-center text-xl font-bold text-gray-900 mb-6">
              <Info className="h-6 w-6 text-amber-600 mr-2" />
              どれを選べばいい？3つの質問で目安が分かります
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. 受給者証を持っている／申請予定ですか？
                </h3>
                <p className="text-gray-700 text-sm">
                  → Yes: <strong>制度による支援（放課後等デイ）</strong>をご案内
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. 受給者証は未定だが、発達面の心配や強い不安・生活の乱れ等が継続していますか？
                </h3>
                <p className="text-gray-700 text-sm">
                  → Yes: <strong>制度による支援の可能性あり</strong>。まずは相談／受給者証ガイドへ
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. 学習や進路を実費で個別に進めたいですか？
                </h3>
                <p className="text-gray-700 text-sm">
                  → Yes: <strong>AI／受験／高認</strong>の実費支援へ
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-amber-200 text-center">
              <p className="text-sm text-gray-600 mb-4">
                迷ったら初回相談へ（全ケース共通）
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium">
                無料相談を予約
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* コンテンツ表示 */}
      {activeTab === "fee" ? (
        /* 実費プランセクション */
        <>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-center mb-12">実費プラン</h2>
              <div className="grid gap-8 lg:grid-cols-3">
                
                {/* AI学習支援 */}
                <div className="relative rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-xl ring-1 ring-purple-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex rounded-xl bg-purple-100 p-3 ring-8 ring-purple-50">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    AI学習支援
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    月4回 18,000円〜
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    （税込・教材費込み）
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">プロンプト入門から創作まで</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">1対1個別サポート</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">月次レポート提供</span>
                    </li>
                  </ul>
                  <Link
                    href="/ai"
                    className="block w-full rounded-full bg-purple-600 py-3 text-center text-sm font-semibold text-white hover:bg-purple-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>

                {/* 高卒認定サポート */}
                <div className="relative rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-xl ring-1 ring-green-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex rounded-xl bg-green-100 p-3 ring-8 ring-green-50">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    高卒認定サポート
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    月4回 22,000円〜
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    （税込・教材費込み）
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">科目選択の戦略立案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">過去問徹底対策</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">AI活用の学習効率化</span>
                    </li>
                  </ul>
                  <Link
                    href="/kounin"
                    className="block w-full rounded-full bg-green-600 py-3 text-center text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>

                {/* 受験個別 */}
                <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-xl ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-3 ring-8 ring-blue-50">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    受験個別指導
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    月4回 24,000円〜
                  </p>
                  <p className="text-sm text-gray-600 mb-6">
                    （税込・教材費込み）
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">中学・高校・大学受験対応</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">志望校別カリキュラム</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">面接・小論文対策</span>
                    </li>
                  </ul>
                  <Link
                    href="/juken"
                    className="block w-full rounded-full bg-blue-600 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 初回相談・見立て */}
          <section className="py-16 sm:py-24 bg-gray-50">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  まずは初回相談から
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-lg bg-blue-50 p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">初回相談（無料）</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      30〜45分のオンライン面談で、お子さまの状況をお聞きします
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>現状のヒアリング</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>支援方法のご提案</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>料金プランの説明</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">見立て（5,500円）</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      必要に応じて、より詳しい評価を行います
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>学習状況の確認</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>個別支援計画の作成</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>医療連携の必要性検討</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* 制度による支援セクション */
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                <Shield className="h-4 w-4" />
                受給者証が必要です
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                放課後等デイサービス（制度による支援）
              </h2>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg ring-1 ring-green-200 mb-8">
              <p className="text-gray-700 mb-4">
                発達面の心配や日常生活・対人面での困りがあり、継続的な支援が必要な方向けの公的サービスです。
              </p>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-6">
                <p className="text-amber-900">
                  <strong>これまで支援を受けていない方でも</strong>、
                  不安感が強い／生活リズムの大きな乱れ／感覚過敏などがある場合は
                  <strong>対象となる可能性があります</strong>。
                </p>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-4">自己負担</h3>
              <p className="text-gray-700 mb-4">
                自己負担は原則1割で、<strong>月額上限</strong>があります。
              </p>
              
              <div className="bg-white rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold">世帯所得</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold">月額上限</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-sm">生活保護・非課税世帯</td>
                      <td className="text-right py-3 px-4 font-bold text-green-600">0円</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 text-sm">年収約890万円未満</td>
                      <td className="text-right py-3 px-4 font-bold text-blue-600">4,600円</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">上記以外</td>
                      <td className="text-right py-3 px-4 font-bold">37,200円</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="text-center">
                <Link
                  href="/voucher-guide"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  受給者証の取り方を見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">利用までの流れ</h3>
              <ol className="space-y-6">
                {[
                  "初回相談（無料）",
                  "見立て（必要なら医療・相談支援へ接続）",
                  "受給者証の申請・交付",
                  "個別支援計画の作成・ご説明",
                  "利用開始（必要に応じてAI活動を計画に組み込み）"
                ].map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 text-sm">
                  <AlertCircle className="inline h-4 w-4 mr-1" />
                  医療診断や受給者証の可否は当方では決定できません。自治体の審査・判定に基づきます。
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/welfare"
                  className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium"
                >
                  制度による支援の詳細を見る
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-heading mb-6">
              まずは無料相談から
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              お子さまの状況をお聞きし、最適な支援方法をご提案します
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <span>無料相談を予約</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:0111234567"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all duration-300"
              >
                <span>電話で相談</span>
                <span className="text-sm">011-123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}