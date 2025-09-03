import type { Metadata } from "next";
import { FileText, Clock, CheckCircle2, AlertCircle, Phone, Building, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "受給者証取得ガイド",
  description: "放課後等デイサービスの受給者証取得方法を分かりやすく解説。必要書類、申請の流れ、よくある質問にお答えします。",
};

export default function VoucherGuidePage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <FileText className="mx-auto h-12 w-12 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                受給者証取得ガイド
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              放課後等デイサービスを利用するために必要な
              <br />
              「受給者証」の取得方法をわかりやすく解説します
            </p>
          </div>
        </div>
      </section>

      {/* 重要なお知らせ */}
      <section className="py-8 bg-amber-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex gap-4 items-start">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold text-amber-900">まずは当方でチェックします</h2>
                <p className="mt-2 text-amber-800">
                  受給者証の申請には医師の意見書が必要なケースがあります。
                  <strong>まずは当方で状況を確認し、必要に応じて医療機関と連携</strong>してスムーズな取得をサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 取得の流れ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-heading mb-12">
            受給者証取得の流れ
          </h2>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                    1
                  </div>
                  <div className="mt-2 h-full w-0.5 bg-gray-200" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    相談窓口での相談
                  </h3>
                  <p className="text-gray-600 mb-4">
                    お住まいの市区町村の障害福祉課（名称は自治体により異なります）で相談します。
                  </p>
                  <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm text-blue-900 font-medium mb-2">札幌市の場合</p>
                    <p className="text-sm text-blue-800">各区の保健福祉課で相談できます</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                    2
                  </div>
                  <div className="mt-2 h-full w-0.5 bg-gray-200" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    申請書類の準備
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">申請書</p>
                        <p className="text-sm text-gray-600">窓口でもらえます</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">計画相談支援事業所の利用申請書</p>
                        <p className="text-sm text-gray-600">セルフプランも可能です</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">医師の意見書（必要な場合）</p>
                        <p className="text-sm text-gray-600">発達特性の診断がある場合など</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg bg-amber-50 p-4">
                    <p className="text-sm text-amber-900 font-medium">よくある詰まりポイント</p>
                    <p className="text-sm text-amber-800 mt-1">
                      医師の意見書が必要かどうかの判断で迷うケースが多いです。
                      当方で事前にチェックしますのでご安心ください。
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                    3
                  </div>
                  <div className="mt-2 h-full w-0.5 bg-gray-200" />
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    審査・判定
                  </h3>
                  <p className="text-gray-600 mb-4">
                    提出された書類をもとに、支給の可否と支給量（利用日数）が決定されます。
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>審査期間：約2〜4週間</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    受給者証の交付
                  </h3>
                  <p className="text-gray-600 mb-4">
                    審査が通ると受給者証が交付され、サービスの利用が可能になります。
                  </p>
                  <div className="rounded-lg bg-green-50 p-4">
                    <p className="text-sm text-green-900 font-medium">交付後すぐに利用開始できます</p>
                    <p className="text-sm text-green-800 mt-1">
                      受給者証が手元に届いたらすぐにサービスの利用を開始できます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 必要書類チェックリスト */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-heading mb-12">
            必要書類チェックリスト
          </h2>
          
          <div className="mx-auto max-w-3xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">基本的な必要書類</h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                      障害児通所給付費支給申請書
                    </span>
                    <p className="text-sm text-gray-600 mt-1">市区町村の窓口で入手できます</p>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                      世帯の所得を証明する書類
                    </span>
                    <p className="text-sm text-gray-600 mt-1">課税証明書など（利用料の上限額決定のため）</p>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                      マイナンバーが分かるもの
                    </span>
                    <p className="text-sm text-gray-600 mt-1">マイナンバーカードまたは通知カード</p>
                  </div>
                </label>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-6 mt-8">場合により必要な書類</h3>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                      医師の診断書または意見書
                    </span>
                    <p className="text-sm text-gray-600 mt-1">発達障害等の診断がある場合</p>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <div className="flex-1">
                    <span className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                      障害者手帳（お持ちの場合）
                    </span>
                    <p className="text-sm text-gray-600 mt-1">療育手帳、精神障害者保健福祉手帳など</p>
                  </div>
                </label>
              </div>

              <div className="mt-8 rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                  <strong>ポイント：</strong>自治体により必要書類が異なる場合があります。
                  申請前に窓口で確認することをおすすめします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-heading mb-12">
            よくある質問
          </h2>
          
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 診断がなくても受給者証は取得できますか？
                </h3>
                <p className="text-gray-600">
                  A. 自治体により対応が異なりますが、学校生活での困りごとがある場合は、
                  診断がなくても取得できるケースもあります。まずは窓口でご相談ください。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 申請から交付までどのくらいかかりますか？
                </h3>
                <p className="text-gray-600">
                  A. 通常2〜4週間程度ですが、書類の不備や追加確認が必要な場合は
                  もう少し時間がかかることがあります。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 受給者証の有効期限はありますか？
                </h3>
                <p className="text-gray-600">
                  A. 通常1年間の有効期限があり、継続利用の場合は更新手続きが必要です。
                  更新時期が近づいたらご案内しますのでご安心ください。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 利用料金の上限はどのように決まりますか？
                </h3>
                <p className="text-gray-600">
                  A. 世帯の所得に応じて月額の上限額が設定されます。
                  詳しくは<Link href="/pricing" className="text-primary hover:text-blue-700">料金ページ</Link>をご覧ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-heading mb-6">
              まずは無料相談から
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              受給者証の取得についてご不明な点があれば、
              <br />
              お気軽にご相談ください。
              <br />
              <strong>必要に応じて医療機関との連携もサポートします。</strong>
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
                href="tel:011-xxxx-xxxx"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>電話で相談</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="py-16 border-t">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading mb-8 text-center">
            関連情報
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Link
              href="/services"
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                支援メニュー
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                放課後等デイサービスで提供する支援内容
              </p>
              <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-gray-400 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/pricing"
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <FileText className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                料金・プラン
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                利用料金と上限額について
              </p>
              <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-gray-400 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/assessment"
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <Building className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                初回相談・見立て
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                適切な支援方法をご提案
              </p>
              <ArrowRight className="absolute bottom-6 right-6 h-5 w-5 text-gray-400 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}