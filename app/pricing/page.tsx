import type { Metadata } from "next";
import Link from "next/link";
import { Check, DollarSign, Zap, Heart, Star, Info, Calculator, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "料金・プラン",
  description: "制度利用（放課後等デイ）と実費プランをご用意。初回見立て5,500円から始められます。",
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

      {/* おすすめの選び方 */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg ring-1 ring-amber-100">
            <h2 className="flex items-center text-xl font-bold text-gray-900 mb-4">
              <Info className="h-6 w-6 text-amber-600 mr-2" />
              おすすめの選び方
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">制度利用をおすすめの方</p>
                  <p className="text-gray-700">発達特性の診断がある、または医師の意見書が取得できる方。費用負担を抑えて継続的な支援を受けたい方。</p>
                  <Link href="/voucher-guide" className="inline-flex items-center gap-1 mt-2 text-primary hover:text-blue-700 font-medium">
                    受給者証ガイドを見る
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">実費利用をおすすめの方</p>
                  <p className="text-gray-700">診断がない・受給者証の取得が難しい方。まずは短期間で試したい方。オンライン中心で進めたい方。</p>
                  <div className="flex gap-4 mt-2">
                    <Link href="/online" className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium">
                      オンライン支援
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Link href="/services" className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 font-medium">
                      支援メニュー
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">遠方の方</p>
                  <p className="text-gray-700">札幌市外・道外の方はオンライン支援をご利用ください。初回相談もオンラインで実施可能です。</p>
                  <Link href="/online" className="inline-flex items-center gap-1 mt-2 text-green-600 hover:text-green-700 font-medium">
                    オンライン支援詳細
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-amber-200">
              <p className="text-xs text-gray-600">
                ※ どちらが適しているか分からない場合は、初回無料相談でご案内します。まずはお気軽にご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3段カードセクション */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* カード1: 制度利用 */}
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-xl ring-1 ring-blue-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
                おすすめ
              </div>
              <div className="mb-6 inline-flex rounded-xl bg-blue-100 p-3 ring-8 ring-blue-50">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                制度利用（放課後等デイ）
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                月額 0円〜
              </p>
              <p className="text-sm text-gray-600 mb-6">
                受給者証での利用
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">週1〜5回まで利用可</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">個別支援計画に基づく支援</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">送迎サービス利用可</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">学校・関係機関との連携</span>
                </li>
              </ul>
              <Link
                href="/voucher-guide"
                className="block w-full rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                受給者証の取得方法
              </Link>
            </div>

            {/* カード2: 初回見立て */}
            <div className="relative rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-xl ring-1 ring-purple-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6 inline-flex rounded-xl bg-purple-100 p-3 ring-8 ring-purple-50">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                初回見立て・相談
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                5,500円
              </p>
              <p className="text-sm text-gray-600 mb-6">
                60〜90分 / 1回
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">保護者面談・状態把握</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">アセスメントシート作成</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">支援プランのご提案</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">制度利用時は初月から充当</span>
                </li>
              </ul>
              <Link
                href="/assessment"
                className="block w-full rounded-full bg-purple-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-purple-700 transition-all duration-300"
              >
                詳しい内容を見る
              </Link>
            </div>

            {/* カード3: 実費プラン */}
            <div className="relative rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-xl ring-1 ring-amber-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="mb-6 inline-flex rounded-xl bg-amber-100 p-3 ring-8 ring-amber-50">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                実費サポート
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                月額 15,000円〜
              </p>
              <p className="text-sm text-gray-600 mb-6">
                受給者証なしですぐ開始
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">個別コーチング（週1回）</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">居場所利用（月額パス）</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">保護者コミュニティ</span>
                </li>
                <li className="flex gap-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">オンライン対応可</span>
                </li>
              </ul>
              <Link
                href="/online"
                className="block w-full rounded-full bg-amber-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:bg-amber-700 transition-all duration-300"
              >
                オンライン支援を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 上限早見表 */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-xl bg-blue-100 p-3 mb-4">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-heading">
                受給者証の自己負担上限早見表
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                世帯収入に応じて月額の自己負担上限が設定されています
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                      世帯の収入状況
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-white">
                      月額上限額
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      生活保護世帯
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-blue-600">
                      0円
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      市町村民税非課税世帯
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-blue-600">
                      0円
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      市町村民税課税世帯
                      <span className="block text-xs text-gray-500 mt-1">
                        （世帯年収約890万円まで）
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-blue-600">
                      4,600円
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      上記以外の世帯
                    </td>
                    <td className="px-6 py-4 text-right text-lg font-bold text-gray-900">
                      37,200円
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
              <div className="flex gap-4">
                <Info className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div className="text-sm text-amber-900">
                  <p className="font-semibold mb-2">ご利用にあたって</p>
                  <ul className="space-y-1">
                    <li>• 上限額は月単位で適用されます（日割り計算なし）</li>
                    <li>• 複数事業所を利用しても上限額は変わりません</li>
                    <li>• 詳細は市区町村の福祉窓口でご確認ください</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実費プラン詳細 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-12">
              実費プラン詳細
            </h2>

            <div className="space-y-6">
              {/* 個別コーチング */}
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      個別コーチング
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      週1回45〜60分のマンツーマンサポート。学習支援から生活リズムの調整まで、
                      お子さまのペースに合わせて伴走します。
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      <li>• オンライン対応可</li>
                      <li>• 月次レポート作成</li>
                      <li>• 保護者面談込み</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      22,000〜33,000円
                    </p>
                    <p className="text-sm text-gray-600">/月</p>
                  </div>
                </div>
              </div>

              {/* 居場所利用 */}
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      居場所利用
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      安心できる居場所で、同年代との交流や趣味活動を楽しめます。
                      都度利用と月額パスから選択可能。
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      <li>• 小集団活動</li>
                      <li>• 創作・趣味活動</li>
                      <li>• イベント参加可</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      2,000円〜/回
                    </p>
                    <p className="text-sm text-accent font-medium">
                      月額パス 15,000円〜
                    </p>
                  </div>
                </div>
              </div>

              {/* 保護者コミュニティ */}
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      保護者コミュニティ
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      同じ悩みを持つ保護者同士の交流と学びの場。
                      専門家による勉強会やQ&Aセッションも定期開催。
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600">
                      <li>• 月1回の勉強会</li>
                      <li>• オンラインQ&A</li>
                      <li>• 保護者交流会</li>
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      3,000円
                    </p>
                    <p className="text-sm text-gray-600">/月</p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="animate-fadeIn group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="relative z-10">無料相談を予約</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/voucher-guide"
              className="animate-fadeIn group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all duration-300"
              style={{ animationDelay: '0.5s' }}
            >
              <span>受給者証について</span>
              <Info className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}