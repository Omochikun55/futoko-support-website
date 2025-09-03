import Link from "next/link";
import { Metadata } from "next";
import ServiceStructuredData from "@/components/ServiceStructuredData";

export const metadata: Metadata = {
  title: "高卒認定サポート | 不登校支援センター",
  description: "学び直しの入口としての高認を、計画設計と過去問ルーティンで伴走。AIで要点抽出や小テスト生成を活用し、短時間でも積み上がる設計にします。",
};

export default function KouninPage() {
  return (
    <main className="min-h-screen">
      <ServiceStructuredData
        serviceName="高卒認定サポート"
        description="高卒認定試験合格への最短ルート。あなたの「今」から始める個別プラン。"
        price="11000"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.2] tracking-tight [text-wrap:balance] [line-break:strict]">
                高卒認定試験を
                <br />あなたのペースで
              </h1>
              <p className="mt-4 text-slate-700 md:text-lg leading-relaxed">
                学び直しの入口としての高認を、<b>計画設計と過去問ルーティン</b>で伴走。
                AIで要点抽出や小テスト生成を活用し、短時間でも積み上がる設計にします。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?type=kounin"
                  className="rounded-xl px-5 py-3 bg-green-600 text-white text-center font-semibold hover:bg-green-700 transition-colors"
                  aria-label="無料相談を予約"
                >
                  無料相談を予約
                </Link>
                <a
                  href="https://www.mext.go.jp/a_menu/koutou/shiken/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-5 py-3 ring-1 ring-green-600 text-green-700 text-center font-semibold hover:bg-green-50 transition-colors"
                  aria-label="文部科学省の公式情報を見る"
                >
                  文科省公式情報を見る
                </a>
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
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                <p className="text-slate-500 text-sm">高卒認定サポートのイメージ画像</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1対1支援の内容 */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">1対1支援の内容</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">📊</span>
            </div>
            <h3 className="font-bold text-lg mb-3">現状分析と計画設計</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              既修得単位の確認、必要科目の選定、試験日程から逆算した学習計画を一緒に作成します
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">📝</span>
            </div>
            <h3 className="font-bold text-lg mb-3">過去問ルーティン</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              過去問題を中心に、出題パターンを把握。AIツールで要点整理や小テスト生成も活用します
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">🎯</span>
            </div>
            <h3 className="font-bold text-lg mb-3">出願サポート</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              願書作成から必要書類の準備まで、手続きをサポート。試験会場の下見も一緒に計画します
            </p>
          </div>
        </div>
      </section>

      {/* 学習の流れ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">合格までの流れ</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              {
                step: "1",
                title: "無料相談",
                desc: "現状確認と目標設定",
              },
              {
                step: "2",
                title: "計画作成",
                desc: "科目選択と学習計画",
              },
              {
                step: "3",
                title: "定期学習",
                desc: "週1〜2回の個別指導",
              },
              {
                step: "4",
                title: "出願手続き",
                desc: "願書作成サポート",
              },
              {
                step: "5",
                title: "試験本番",
                desc: "直前対策と当日サポート",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-3 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-full">
                    <div className="border-t-2 border-dashed border-green-300 w-[70%]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 試験情報 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">高卒認定試験の基本情報</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">試験日程（年2回）</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <div>
                    <p className="font-semibold">第1回（夏）</p>
                    <p className="text-sm text-slate-600">出願：4〜5月頃 / 試験：8月上旬</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <div>
                    <p className="font-semibold">第2回（秋）</p>
                    <p className="text-sm text-slate-600">出願：7〜9月頃 / 試験：11月上旬</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                ※ 最新の日程は文部科学省のWebサイトでご確認ください
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-bold text-lg mb-4">必要科目数</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <p className="text-slate-700">
                    <span className="font-semibold">8〜10科目</span>の合格が必要
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <p className="text-slate-700">
                    既に高校で修得した単位は<span className="font-semibold">免除申請</span>可能
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <p className="text-slate-700">
                    科目合格は<span className="font-semibold">次回以降に持ち越し</span>可能
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIを活用した学習支援 */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AIを活用した効率学習</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">🤖</span>
                要点抽出
              </h3>
              <p className="text-sm text-slate-700">
                教科書や過去問から重要ポイントをAIが抽出。効率的に学習範囲を絞り込みます
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">📚</span>
                小テスト生成
              </h3>
              <p className="text-sm text-slate-700">
                学習した内容から自動で小テストを作成。理解度を確認しながら進められます
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold mb-3 flex items-center">
                <span className="text-2xl mr-2">💡</span>
                個別解説
              </h3>
              <p className="text-sm text-slate-700">
                わからない問題はAIが丁寧に解説。24時間いつでも質問できます
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金の目安</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <span className="font-semibold">月4回コース</span>
                  <span className="text-sm text-slate-500 ml-2">（週1回 × 90分）</span>
                </div>
                <span className="text-xl font-bold">28,000円〜38,000円</span>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-sm text-slate-600 flex items-start">
                <span className="mr-2">✓</span>
                個別学習計画の作成・更新
              </p>
              <p className="text-sm text-slate-600 flex items-start">
                <span className="mr-2">✓</span>
                過去問演習と解説
              </p>
              <p className="text-sm text-slate-600 flex items-start">
                <span className="mr-2">✓</span>
                AIツールの活用サポート
              </p>
              <p className="text-sm text-slate-600 flex items-start">
                <span className="mr-2">✓</span>
                出願手続きサポート
              </p>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              ※ 料金は参考価格です。需要に応じて調整する場合があります
              <br />
              ※ 教材費は別途実費（過去問題集等）
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">中学の勉強から不安なのですが...</h3>
              <p className="text-slate-700">
                大丈夫です。必要に応じて中学範囲の復習から始めます。個別指導なので、あなたのペースで進められます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">何回で合格できますか？</h3>
              <p className="text-slate-700">
                個人差がありますが、計画的に学習すれば1〜2回の受験で合格される方が多いです。科目合格は次回に持ち越せるので、焦らず着実に進められます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">オンラインでも受講できますか？</h3>
              <p className="text-slate-700">
                はい、オンラインでの個別指導も可能です。画面共有で問題を一緒に解きながら進められます。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">高認取得後の進路相談もできますか？</h3>
              <p className="text-slate-700">
                もちろんです。大学・専門学校への進学、就職など、高認取得後の進路についても一緒に考えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            新しい一歩を踏み出しましょう
          </h2>
          <p className="text-white text-lg mb-8">
            高卒認定は、あなたの可能性を広げる大切な資格です。
            <br />
            一緒に計画を立てて、着実に合格を目指しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=kounin"
              className="rounded-xl px-8 py-4 bg-white text-green-700 font-semibold hover:bg-slate-50 transition-colors"
              aria-label="無料相談を申し込む"
            >
              無料相談を申し込む
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