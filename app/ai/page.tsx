import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIで学ぶ | 不登校支援センター",
  description: "AIと一緒に「できた」を増やす。1対1個別とAIミニラボで、子どもたちの創造力を育てます。プロンプトから始めるAI学習、ノーコード制作、かんたんPythonまで。",
};

export default function AIPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm rounded-full bg-blue-50 px-3 py-1 mb-4">
                <span className="font-semibold">パイロット実施中</span>
                <span className="text-slate-500">放デイ内「AIミニラボ」</span>
              </p>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.2] tracking-tight [text-wrap:balance] [line-break:strict]">
                AIと一緒に「できた」を増やす。
                <br />1対1個別が基本です。
              </h1>
              <p className="mt-4 text-slate-700 md:text-lg leading-relaxed">
                学校に行く・行かないよりも、「いまこの子にできること」を最優先に。
                プロンプトから始めるAI学習、ノーコード制作、かんたんPythonまで。
                <b>1対1個別</b>と<b>放デイ内ミニラボ</b>の両輪で、できたを積み上げます。
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact?type=ai"
                  className="rounded-xl px-5 py-3 bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition-colors"
                  aria-label="AI体験30分を予約"
                >
                  AI体験30分を予約
                </Link>
                <a
                  href="https://pro-ai.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-5 py-3 ring-1 ring-blue-600 text-blue-700 text-center font-semibold hover:bg-blue-50 transition-colors"
                  aria-label="作品ギャラリーを開く"
                >
                  作品ギャラリーを見る
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
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl flex items-center justify-center">
                <p className="text-slate-500 text-sm">AI学習のイメージ画像</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIミニラボ・1対1個別 Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* AIミニラボ */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-4">
              AIミニラボ（放デイ内・40分）
            </h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>10分：チェックイン（1対1）→ 20分：制作 → 10分：ふりかえり</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>自己紹介カード → 画像から物語 → タイトル → 作品カード化</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>保護者同席可 / カメラ任意 / 作品は閉じた共有</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>4回スターター台本</strong>：初めての子も安心して参加できる進行プログラムをご用意しています
              </p>
            </div>
          </div>

          {/* 1対1個別 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold mb-4">
              1対1個別（通所 / オンライン）
            </h2>
            <p className="text-slate-700 mb-4">
              Starter → Builder → Creator の3段階で、本人のペースに合わせて調整します。
            </p>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-sm mb-1">Starter（入門）</h3>
                <p className="text-sm text-slate-600">プロンプト入力、画像生成、簡単な対話</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-sm mb-1">Builder（制作）</h3>
                <p className="text-sm text-slate-600">ノーコード制作、ゲーム作成、Webサイト</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <h3 className="font-semibold text-sm mb-1">Creator（創造）</h3>
                <p className="text-sm text-slate-600">Python入門、データ分析、AI活用</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              終了5分で「できた1行＋次の一歩」を記録し、月次1枚レポートに集約します
            </p>
          </div>
        </div>
      </section>

      {/* 学習の流れ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">学習の流れ</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "体験・相談",
                desc: "30分の無料体験でお子さまの興味を確認",
              },
              {
                step: "2",
                title: "目標設定",
                desc: "1か月の小さなゴールを一緒に決める",
              },
              {
                step: "3",
                title: "定期セッション",
                desc: "週1〜2回、45分の個別またはグループ",
              },
              {
                step: "4",
                title: "振り返り",
                desc: "月次レポートで成長を可視化",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金の目安 */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">料金の目安</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="font-semibold">月2回（隔週）</span>
                <span className="text-xl font-bold">15,000円〜</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="font-semibold">月4回（週1回）</span>
                <span className="text-xl font-bold">18,000円〜24,000円</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              ※ 料金は参考価格です。需要に応じて調整する場合があります
              <br />
              ※ 放課後等デイサービス利用の場合は、制度による自己負担上限が適用されます
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
              <h3 className="font-semibold mb-2">AIアカウントは必要ですか？</h3>
              <p className="text-slate-700">
                初回は不要です。継続利用の場合は、保護者同意のもとでアカウント作成をサポートします。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">オンラインの場合、準備するものは？</h3>
              <p className="text-slate-700">
                PC/タブレットとインターネット環境があれば大丈夫です。カメラはお子さまの希望に応じて任意です。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold mb-2">セッション時間はどのくらい？</h3>
              <p className="text-slate-700">
                基本は45分です。集中力に配慮し、休憩を入れながら進めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 受け入れ枠 */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">現在の受け入れ枠（目安）</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold mb-3">放デイAIミニラボ</h3>
              <p className="text-slate-700">週2回 × 各3〜5名</p>
              <p className="text-sm text-slate-500 mt-2">※ 曜日・時間はお問い合わせください</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100">
              <h3 className="font-semibold mb-3">1対1オンライン</h3>
              <p className="text-slate-700">週6〜8コマ</p>
              <p className="text-sm text-slate-500 mt-2">※ 埋まり具合により変動します</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            まずは無料体験から始めましょう
          </h2>
          <p className="text-white text-lg mb-8">
            お子さまの興味・関心に合わせて、最適な学習プランをご提案します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=ai"
              className="rounded-xl px-8 py-4 bg-white text-blue-700 font-semibold hover:bg-slate-50 transition-colors"
              aria-label="無料体験を申し込む"
            >
              無料体験を申し込む
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

      {/* 外部リンク */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <p className="text-slate-600 mb-4">作品例や導入事例はこちら</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://pro-ai.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                作品ギャラリー →
              </a>
              <a
                href="https://pro-ai.jp/articles/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                AI学習の導入記事 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}