import Link from "next/link";
import { Metadata } from "next";
import ServiceStructuredData from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "受験個別 | 不登校支援センター",
  description: "「いまの地点から」受験計画を作り直す。無理な長時間ではなく、小さく積める設計と反復の自動化で、基礎から丁寧に。",
};

export default function JukenPage() {
  return (
    <main className="min-h-screen">
      <ServiceStructuredData
        serviceName="受験個別指導"
        description="中学・高校・大学受験を1対1で。あなただけの合格プランを一緒に作ります。"
        price="16500"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.2] tracking-tight [text-wrap:balance] [line-break:strict]">
                「いまの地点から」
                <br />受験計画を作り直す
              </h1>
              <p className="mt-4 text-slate-700 md:text-lg leading-relaxed">
                無理な長時間ではなく、<b>小さく積める設計</b>と<b>反復の自動化</b>で、
                基礎から丁寧に。別室登校、オンライン完結、高認後の設計など、
                あなたに合ったルートを一緒に見つけます。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?type=juken"
                  className="rounded-xl px-5 py-3 bg-purple-600 text-white text-center font-semibold hover:bg-purple-700 transition-colors"
                  aria-label="体験30分を予約"
                >
                  体験30分を予約
                </Link>
                <Link
                  href="/assessment"
                  className="rounded-xl px-5 py-3 ring-1 ring-purple-600 text-purple-700 text-center font-semibold hover:bg-purple-50 transition-colors"
                  aria-label="学習状況を診断"
                >
                  学習状況を診断
                </Link>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                フォームが開かない場合は{" "}
                <a href="mailto:info@example.jp" className="underline">
                  info@example.jp
                </a>{" "}
                /{" "}
                <a href="tel:0111234567" className="underline">
                  011-123-4567
                </a>{" "}
                へ
              </p>
            </div>
            <div className="relative aspect-[4/3] md:aspect-[16/12]">
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <p className="text-slate-500 text-sm">受験個別サポートのイメージ画像</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3つのルート */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">あなたに合った受験ルート</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 text-xl">🏫</span>
            </div>
            <h3 className="font-bold text-lg mb-3">別室登校×短時間学習</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              学校の別室登校と併用しながら、短時間集中型の学習設計。出席日数を確保しつつ、無理のないペースで進めます。
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>1日30分〜1時間の学習設計</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>学校の進度に合わせた補習</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>定期テスト対策</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 text-xl">💻</span>
            </div>
            <h3 className="font-bold text-lg mb-3">オンライン完結型</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              自宅から一歩も出ずに受験準備。オンライン指導と自動化ツールで、効率的に学習を進めます。
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>完全オンライン個別指導</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>AIツールで反復学習を自動化</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>24時間質問対応</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 text-xl">📚</span>
            </div>
            <h3 className="font-bold text-lg mb-3">高認後の大学受験</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              高認取得後の大学受験に特化。基礎固めから志望校対策まで、段階的にサポートします。
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>高認レベルからの基礎固め</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>共通テスト対策</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>志望校別の個別対策</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 学習ログの可視化 */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">学習ログで成長を可視化</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">毎日の小さな積み重ねを記録</h3>
              <p className="text-slate-700 mb-6">
                学習時間、解いた問題数、理解度を毎回記録。
                グラフで成長が見えるから、モチベーションが続きます。
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">学習内容の記録</h4>
                    <p className="text-sm text-slate-600">教科、単元、問題数、正答率を自動記録</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">週次レポート</h4>
                    <p className="text-sm text-slate-600">1週間の学習時間と達成度をグラフ化</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-purple-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">月次分析</h4>
                    <p className="text-sm text-slate-600">苦手分野の特定と次月の学習計画提案</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="space-y-4">
                <div className="h-40 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <p className="text-slate-500 text-sm">学習ログのグラフイメージ</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">156h</p>
                    <p className="text-xs text-slate-600">累計学習時間</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">82%</p>
                    <p className="text-xs text-slate-600">平均正答率</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">24日</p>
                    <p className="text-xs text-slate-600">継続日数</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 基礎固めプログラム */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">基礎から着実に積み上げる</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  phase: "Phase 1",
                  title: "基礎診断",
                  period: "1〜2週目",
                  desc: "現在の理解度を確認し、スタート地点を明確化",
                  items: ["各教科の基礎力チェック", "苦手分野の特定", "学習計画の作成"],
                },
                {
                  phase: "Phase 2",
                  title: "基礎固め",
                  period: "3〜8週目",
                  desc: "中学レベルから必要に応じて復習",
                  items: ["基本概念の理解", "計算力・語彙力の強化", "基礎問題の反復"],
                },
                {
                  phase: "Phase 3",
                  title: "応用展開",
                  period: "9〜16週目",
                  desc: "標準レベルの問題に挑戦",
                  items: ["応用問題への取り組み", "解法パターンの習得", "時間管理の練習"],
                },
                {
                  phase: "Phase 4",
                  title: "実戦演習",
                  period: "17週目〜",
                  desc: "過去問や模試で実力を確認",
                  items: ["過去問演習", "模試の受験と分析", "弱点の集中対策"],
                },
              ].map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow bg-white rounded-xl p-6 border border-slate-100">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-sm text-purple-600 font-semibold">{phase.phase}</span>
                        <h3 className="text-lg font-bold mt-1">{phase.title}</h3>
                      </div>
                      <span className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full">
                        {phase.period}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-3">{phase.desc}</p>
                    <ul className="space-y-1">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金の目安</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <span className="font-semibold">月4回コース</span>
                  <span className="text-sm text-slate-500 ml-2">（週1回 × 60分）</span>
                </div>
                <span className="text-xl font-bold">20,000円〜28,000円</span>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">基本サポート</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">✓</span>
                    個別学習計画の作成
                  </li>
                  <li className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">✓</span>
                    1対1オンライン指導
                  </li>
                  <li className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">✓</span>
                    学習ログの記録・分析
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">追加オプション</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">＋</span>
                    AIツール活用サポート
                  </li>
                  <li className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">＋</span>
                    24時間質問対応
                  </li>
                  <li className="text-sm text-slate-600 flex items-start">
                    <span className="mr-2">＋</span>
                    模試分析レポート
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              ※ 料金は参考価格です。需要に応じて調整する場合があります
              <br />
              ※ 教材費は別途実費
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold mb-2">学校に全く行けていなくても大丈夫ですか？</h3>
              <p className="text-slate-700">
                はい、大丈夫です。現在の状況に合わせて、無理のないペースから始められます。オンライン完結も可能なので、外出が難しい場合も安心です。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold mb-2">どのくらいの期間で受験レベルに到達しますか？</h3>
              <p className="text-slate-700">
                スタート地点と目標により異なりますが、基礎から始めて半年〜1年程度が目安です。焦らず着実に積み上げることを重視します。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold mb-2">親のサポートは必要ですか？</h3>
              <p className="text-slate-700">
                基本的には本人と講師で進めますが、保護者の方への定期報告も行います。必要に応じて三者面談も実施可能です。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold mb-2">途中で目標が変わっても大丈夫ですか？</h3>
              <p className="text-slate-700">
                もちろん大丈夫です。学習を進める中で、目標や進路が変わることはよくあります。その都度、計画を見直して最適な学習を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            今から始める、あなたの受験準備
          </h2>
          <p className="text-white text-lg mb-8">
            「遅すぎる」ことはありません。
            <br />
            今の地点から、一緒に計画を立てて進んでいきましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=juken"
              className="rounded-xl px-8 py-4 bg-white text-purple-700 font-semibold hover:bg-slate-50 transition-colors"
              aria-label="体験30分を申し込む"
            >
              体験30分を申し込む
            </Link>
            <Link
              href="/services"
              className="rounded-xl px-8 py-4 bg-transparent text-white border-2 border-white font-semibold hover:bg-white/10 transition-colors"
              aria-label="他の支援も見る"
            >
              他の支援も見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}