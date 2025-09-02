import type { Metadata } from "next";
import Link from "next/link";
import { Check, DollarSign, Zap, Heart, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "料金・プラン",
  description: "制度利用（放課後等デイ）と実費プランをご用意。初回見立て5,500円から始められます。",
};

const pricingPlans = {
  institutional: {
    title: "制度利用（放課後等デイ）",
    description: "受給者証に基づく自己負担",
    features: [
      "世帯収入により自己負担上限額が決定",
      "月額上限：0円〜37,200円",
      "利用日数に応じた負担",
      "送迎サービス利用可（要相談）",
    ],
    note: "※詳細は市区町村の福祉窓口にてご確認ください",
  },
  selfPay: [
    {
      name: "初回見立て",
      price: "5,500円",
      unit: "",
      description: "60–90分／アセスメントシート付",
      features: [
        "保護者面談・本人の状態把握",
        "アセスメントシート作成",
        "支援プランのご提案",
        "制度利用への移行時は初月分から充当可",
      ],
    },
    {
      name: "個別コーチング",
      price: "22,000〜33,000円",
      unit: "/月",
      description: "週1回45–60分／オンライン可",
      features: [
        "マンツーマンの学習支援",
        "生活リズムの調整サポート",
        "興味関心の探索・深掘り",
        "月次レポート作成",
      ],
    },
    {
      name: "居場所利用",
      price: "2,000円〜",
      unit: "/回",
      altPrice: "月額パス 15,000円〜",
      description: "小集団/趣味活動",
      features: [
        "安心できる居場所の提供",
        "同年代との交流機会",
        "創作・趣味活動のサポート",
        "イベント参加可",
      ],
    },
    {
      name: "保護者コミュニティ",
      price: "3,000円",
      unit: "/月",
      description: "勉強会・Q&A",
      features: [
        "月1回の勉強会参加",
        "オンラインQ&Aセッション",
        "保護者同士の交流会",
        "専門家による講座受講",
      ],
    },
  ],
};

export default function PricingPage() {
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

      {/* 制度利用 */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="group relative rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 xl:p-12 shadow-xl ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:ring-blue-200">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-gradient-to-br from-primary to-purple-600 p-3 shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-heading">
                    {pricingPlans.institutional.title}
                  </h2>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {pricingPlans.institutional.description}
                </p>
                <ul role="list" className="mt-8 space-y-3">
                  {pricingPlans.institutional.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 transition-transform duration-200 hover:translate-x-1">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-gray-500 italic">
                  {pricingPlans.institutional.note}
                </p>
                
                {/* 受給者証の自己負担上限 */}
                <div className="mt-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 ring-1 ring-amber-100">
                  <h4 className="font-semibold text-gray-900 mb-3">受給者証の自己負担上限（月額）</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">生活保護世帯</span>
                      <span className="font-medium text-gray-900">0円</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">市町村民税非課税世帯</span>
                      <span className="font-medium text-gray-900">0円</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">市町村民税課税世帯（年収約890万円まで）</span>
                      <span className="font-medium text-gray-900">4,600円</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">上記以外</span>
                      <span className="font-medium text-gray-900">37,200円</span>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-gray-500">
                    ※金額は全て税込です。詳細は市区町村の窓口でご確認ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実費プラン */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-heading">
              実費プラン
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              ※ 料金は税込み表記。オンライン・対面で変動する場合あり。
            </p>
          </div>
          
          <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
            {pricingPlans.selfPay.map((plan) => (
              <div
                key={plan.name}
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                    <span className="text-lg font-semibold leading-8 text-gray-600">
                      {plan.unit}
                    </span>
                  </p>
                  {plan.altPrice && (
                    <p className="mt-1 text-base text-accent font-medium">{plan.altPrice}</p>
                  )}
                  <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3 transition-transform duration-200 hover:translate-x-1">
                        <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <Zap className="mx-auto h-10 w-10 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-heading mb-4">
              まずは無料相談から
            </h2>
          </div>
          <p className="animate-fadeIn text-gray-600 mb-8" style={{ animationDelay: '0.2s' }}>
            お子さまの状況をお聞きして、最適なプランをご提案します
          </p>
          <Link
            href="/contact"
            className="animate-fadeIn group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="relative z-10">無料相談を予約</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </section>
    </>
  );
}