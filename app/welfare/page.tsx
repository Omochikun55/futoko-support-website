import Link from "next/link";
import { Metadata } from "next";
import { Shield, AlertCircle, Phone, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "制度による支援（放課後等デイサービス）",
  description: "受給者証が必要です。発達面の心配や日常生活・対人面で継続的なサポートが必要な方向けの公的通所支援。まずは状況をお聞きし、適切な窓口へつなぎます。",
};

export default function WelfarePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-emerald-50 py-16 sm:py-24">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-green-200 to-emerald-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-200 to-green-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
                <Shield className="h-4 w-4" />
                受給者証が必要です
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                制度による支援
                <span className="block text-2xl mt-2 text-gray-600 font-normal">
                  （放課後等デイサービス）
                </span>
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              受給者証が必要です。まずは状況をお聞きし、適切な窓口へつなぎます。
            </p>
          </div>
        </div>
      </section>

      {/* 説明セクション */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-heading mb-8">放課後等デイサービスとは</h2>
            
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-gray-600">
                放課後等デイサービスは、発達面に心配があるお子さんや、日常生活・対人面で
                <strong>継続的なサポートが必要な方</strong>を対象とした
                <strong>公的な通所支援</strong>です。
              </p>
              
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                <p className="text-amber-900 font-medium mb-2">
                  <AlertCircle className="inline h-5 w-5 mr-2" />
                  これまで支援を受けてこなかった方でも
                </p>
                <p className="text-amber-800">
                  不安感がとても強い／生活リズムの大きな乱れ／感覚過敏や集団参加の難しさ等がある場合、
                  <strong>対象となる可能性があります</strong>。まずはご相談ください。
                </p>
              </div>

              <p className="text-gray-600">
                当事業では、<strong>学校との連携</strong>と
                <strong>「いまこの子にできること」</strong>を最優先に、
                必要に応じて<strong>AIミニラボ</strong>等の学習・活動も組み合わせます
                （個別支援計画に記載）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 自己負担の目安 */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-heading mb-8">自己負担の目安</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  自己負担は原則1割、<strong>世帯所得に応じた月額上限</strong>があります。
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">世帯所得</th>
                        <th className="text-right py-3 px-4">月額上限</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">生活保護世帯・市民税非課税世帯</td>
                        <td className="text-right py-3 px-4 font-bold">0円</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">市民税課税世帯（年収約890万円未満）</td>
                        <td className="text-right py-3 px-4 font-bold">4,600円</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">上記以外</td>
                        <td className="text-right py-3 px-4 font-bold">37,200円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                具体的な負担額は自治体の決定によります。<strong>受給者証の交付が前提</strong>です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 利用までの流れ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-heading mb-12">利用までの流れ</h2>
            
            <ol className="space-y-8">
              {[
                {
                  step: "1",
                  title: "初回相談（無料）",
                  desc: "お子さまの状況をお聞きし、最適な支援方法をご提案",
                },
                {
                  step: "2",
                  title: "見立て",
                  desc: "必要なら医療・相談支援へ接続",
                },
                {
                  step: "3",
                  title: "受給者証の申請・交付",
                  desc: "自治体への申請をサポート（2〜4週間程度）",
                },
                {
                  step: "4",
                  title: "個別支援計画の作成・ご説明",
                  desc: "お子さまに合わせた支援内容を計画",
                },
                {
                  step: "5",
                  title: "利用開始",
                  desc: "必要に応じてAI活動を計画に組み込み",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900">
                <AlertCircle className="inline h-5 w-5 mr-2" />
                <strong>注意</strong>：医療診断や受給者証の可否は当方では決定できません。
                自治体の審査・判定に基づきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-heading mb-6">
              まずはご相談ください
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              受給者証の取得から支援開始まで、
              <br />
              丁寧にサポートいたします。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/voucher-guide"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-green-700 shadow-lg ring-1 ring-green-200 hover:shadow-xl hover:ring-2 hover:ring-green-300 transition-all duration-300"
              >
                <FileText className="h-5 w-5" />
                <span>受給者証の取り方を見る</span>
              </Link>
              <Link
                href="/contact?type=welfare"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-green-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <span>初回相談を予約する</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="mt-8">
              <a
                href="tel:0111234567"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <Phone className="h-4 w-4" />
                <span>お電話でのご相談：011-123-4567</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}