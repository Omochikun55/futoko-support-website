import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, ExternalLink, Home, BookOpen, MessageCircle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "保護者さま向け",
  description: "不登校の全体像、家庭で大切にしたいこと、学校との対話のコツ、参考資料をご提供します。",
};

const resources = [
  {
    title: "文部科学省",
    description: "不登校に関する基本的な情報と支援策",
    url: "https://www.mext.go.jp/",
  },
  {
    title: "北海道教育委員会",
    description: "道内の教育相談窓口一覧",
    url: "https://www.dokyoi.pref.hokkaido.lg.jp/",
  },
  {
    title: "札幌市教育委員会",
    description: "札幌市の不登校支援情報",
    url: "https://www.city.sapporo.jp/kyoiku/",
  },
];

export default function ParentsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <Heart className="mx-auto h-12 w-12 text-accent mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                保護者さま向け
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              お子さまと共に歩むために知っておきたいこと
            </p>
          </div>
        </div>
      </section>

      {/* 不登校の全体像 */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <BookOpen className="mx-auto h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-heading">
                不登校の全体像
              </h2>
            </div>
            <div className="space-y-8">
              <div className="group rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  多様な理由
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  不登校の理由は一つではありません。学習面の困難、対人関係の悩み、
                  発達特性によるストレス、家庭環境の変化、心身の不調など、
                  複数の要因が絡み合っていることがほとんどです。
                </p>
              </div>
              <div className="group rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  時間軸で考える
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  不登校は「一時的な休息」から「長期的な学び方の変更」まで、
                  時間軸で考えることが大切です。短期的な対応と中長期的な視点の
                  両方を持ちながら、お子さまの状態に合わせて柔軟に対応していきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 家庭で大切にしたいこと */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <Shield className="mx-auto h-10 w-10 text-orange-600 mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-heading">
                家庭で大切にしたいこと
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="group text-center animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <Home className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">安全</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  物理的・心理的に安全な環境を整え、家が安心できる場所に
                </p>
              </div>
              <div className="group text-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <Heart className="h-10 w-10 text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-bold bg-gradient-to-r from-accent to-pink-600 bg-clip-text text-transparent">安心</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  「今の状態でも大丈夫」というメッセージを伝え続ける
                </p>
              </div>
              <div className="group text-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <Users className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">肯定</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  小さな一歩も認め、本人のペースを尊重する
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 学校との対話のコツ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <MessageCircle className="mx-auto h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold tracking-tight text-heading">
                学校との対話のコツ
              </h2>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-10 shadow-xl">
              <p className="text-lg text-gray-700 mb-8 text-center">
                学校との対話は、要求ではなく<span className="font-bold text-primary">共有と選択肢</span>の観点から進めることが大切です。
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start group transition-transform duration-200 hover:translate-x-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">現状の共有</h4>
                    <p className="text-gray-600">お子さまの状態を客観的に伝え、学校側の見解も聞く</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group transition-transform duration-200 hover:translate-x-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-pink-600 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">選択肢の検討</h4>
                    <p className="text-gray-600">別室登校、時間調整、オンライン参加など複数の選択肢を相談</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group transition-transform duration-200 hover:translate-x-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">段階的な目標設定</h4>
                    <p className="text-gray-600">すぐに通常登校を目指すのではなく、小さなステップから</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start group transition-transform duration-200 hover:translate-x-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">定期的な見直し</h4>
                    <p className="text-gray-600">月1回程度、状況を共有し計画を調整</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 参考資料 */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-heading text-center mb-4">
              参考資料
            </h2>
            <p className="text-center text-gray-600 mb-12">
              自治体・支援機関・通信制高校の窓口
            </p>
            <div className="grid gap-6">
              {resources.map((resource, index) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group animate-fadeIn block rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-primary hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-gray-600">{resource.description}</p>
                    </div>
                    <div className="flex-shrink-0 ml-4 p-2 rounded-full bg-gray-100 group-hover:bg-primary group-hover:text-white transition-all">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <Users className="mx-auto h-10 w-10 text-accent mb-4" />
            <h2 className="text-2xl font-bold text-heading mb-4">
              保護者同士でつながり、学び合う
            </h2>
          </div>
          <p className="animate-fadeIn text-gray-600 mb-8" style={{ animationDelay: '0.2s' }}>
            月1回の勉強会、オンラインQ&A、保護者交流会を開催しています
          </p>
          <Link
            href="/pricing#community"
            className="animate-fadeIn group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-accent to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="relative z-10">コミュニティ参加（月3,000円）</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-700 to-rose-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </section>
    </>
  );
}