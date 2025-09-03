import type { Metadata } from "next";
import { Video, Wifi, Calendar, Shield, Home, Headphones, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "オンライン支援",
  description: "全国どこからでも参加できるオンライン不登校支援。1対1の個別サポートから少人数グループまで、お子さまに合わせた支援を提供。",
};

export default function OnlinePage() {
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-16 sm:py-24">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <Wifi className="mx-auto h-12 w-12 text-purple-600 mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                オンライン支援
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              自宅から安心して参加できる
              <br />
              全国対応の不登校支援プログラム
            </p>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-heading">
              オンライン支援の特徴
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              距離や移動の制約を超えて、質の高い支援を提供します
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-purple-200 hover:-translate-y-1">
              <div className="mb-6 inline-flex rounded-xl bg-purple-50 p-3 ring-8 ring-purple-50/50">
                <Home className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                自宅から安心して参加
              </h3>
              <p className="mt-4 text-gray-600">
                外出が難しいお子さまも、慣れた環境から無理なく参加できます。
                保護者の送迎負担もありません。
              </p>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-purple-200 hover:-translate-y-1">
              <div className="mb-6 inline-flex rounded-xl bg-pink-50 p-3 ring-8 ring-pink-50/50">
                <Video className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                顔出し不要・柔軟な参加
              </h3>
              <p className="mt-4 text-gray-600">
                カメラOFF、音声のみ、チャットのみなど、
                お子さまの状態に合わせて参加方法を選べます。
              </p>
            </div>

            <div className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-purple-200 hover:-translate-y-1">
              <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-3 ring-8 ring-blue-50/50">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                時間・頻度を自由に調整
              </h3>
              <p className="mt-4 text-gray-600">
                週1回30分から始められます。
                体調や気分に合わせて、無理のないペースで継続できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プログラム内容 */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-heading">
              オンラインプログラム
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              お子さまの興味・関心に合わせて選べます
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* 1対1サポート */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-purple-100 p-3">
                  <Headphones className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">1対1 個別サポート</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">お話し相手・傾聴</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">学習サポート（教科学習の補助）</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">趣味の共有（ゲーム、アニメ、音楽など）</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">創作活動（イラスト、プログラミング等）</span>
                </li>
              </ul>
            </div>

            {/* 少人数グループ */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-pink-100 p-3">
                  <Users className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">少人数グループ活動</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">オンラインゲーム会</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">読書会・アニメ鑑賞会</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">創作活動の共有会</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">テーマトーク（2-4名程度）</span>
                </li>
              </ul>
            </div>

            {/* 保護者サポート */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">保護者サポート</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">定期面談（月1-2回）</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">日々の相談（チャット）</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">保護者交流会（任意）</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">学校連携のサポート</span>
                </li>
              </ul>
            </div>

            {/* 特別プログラム */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-amber-100 p-3">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">特別プログラム</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">オンライン社会科見学</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">ゲストトーク（月1回）</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">季節のイベント</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">プロジェクト型学習</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 利用の流れ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-heading">
              オンライン支援の始め方
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l-2 border-gray-200 ml-8">
              <li className="mb-10 ml-6">
                <span className="absolute -left-9 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white">
                  <span className="text-xl font-bold text-purple-600">1</span>
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  無料体験の申し込み
                </h3>
                <p className="text-gray-600">
                  まずは30分の無料体験から。お子さまの様子を見ながら、参加方法を一緒に決めます。
                </p>
              </li>

              <li className="mb-10 ml-6">
                <span className="absolute -left-9 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white">
                  <span className="text-xl font-bold text-purple-600">2</span>
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  接続テスト＆顔合わせ
                </h3>
                <p className="text-gray-600">
                  機器の設定をサポート。カメラOFF、音声のみでもOK。お子さまのペースに合わせます。
                </p>
              </li>

              <li className="mb-10 ml-6">
                <span className="absolute -left-9 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white">
                  <span className="text-xl font-bold text-purple-600">3</span>
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  プログラムの選択
                </h3>
                <p className="text-gray-600">
                  興味・関心に合わせて、1対1サポートか少人数グループを選択。途中変更も可能です。
                </p>
              </li>

              <li className="ml-6">
                <span className="absolute -left-9 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 ring-8 ring-white">
                  <span className="text-xl font-bold text-purple-600">4</span>
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  定期的な活動開始
                </h3>
                <p className="text-gray-600">
                  週1回30分から無理なくスタート。徐々に時間や頻度を調整していきます。
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 必要な環境 */}
      <section className="py-16 sm:py-24 bg-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-8">
              必要な環境
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">必須環境</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>インターネット接続</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>PC、タブレット、スマートフォンのいずれか</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">あると良いもの</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>イヤホンまたはヘッドフォン</span>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>静かな参加場所</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-purple-50 p-4">
                <p className="text-sm text-purple-900">
                  <strong>ご安心ください：</strong>カメラ・マイクは必須ではありません。
                  チャットのみの参加も可能です。必要な設定は全てサポートします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-8">
              オンライン支援の料金
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  受給者証をお持ちの方
                </h3>
                <p className="text-3xl font-bold text-primary mb-2">
                  月額上限 4,600円〜
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  世帯収入により0円〜37,200円
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 放課後等デイサービスとして利用</li>
                  <li>• 週1〜5回まで利用可能</li>
                  <li>• 他事業所との併用も可</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  実費でご利用の方
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  月額 15,000円〜
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  週1回（月4回）の場合
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 受給者証不要ですぐ開始</li>
                  <li>• 回数・時間を柔軟に調整</li>
                  <li>• 保護者サポート込み</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/pricing"
                className="text-primary hover:text-blue-700 font-medium"
              >
                詳しい料金プランを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-heading mb-6">
              まずは無料体験から
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              30分の無料体験で、オンライン支援の雰囲気を体験してください。
              <br />
              カメラOFF、音声のみ、チャットのみでもOKです。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-purple-700 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <span>無料体験を申し込む</span>
                <Video className="h-5 w-5" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-purple-200 transition-all duration-300"
              >
                <span>オンライン支援の実例</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-center text-heading mb-8">
              よくある質問
            </h2>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 人と話すのが苦手な子でも参加できますか？
                </h3>
                <p className="text-gray-600">
                  A. もちろんです。最初はチャットのみ、スタンプのみでもOK。
                  徐々に慣れていけるよう、スタッフが優しくサポートします。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 途中で気分が悪くなったら？
                </h3>
                <p className="text-gray-600">
                  A. いつでも退出できます。「ちょっと休憩」と伝えていただければ、
                  スタッフが配慮します。無理のない参加が一番大切です。
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Q. 他の子との交流が不安です
                </h3>
                <p className="text-gray-600">
                  A. 1対1から始めることができます。グループ活動も2〜4名の少人数で、
                  相性を考慮してメンバーを決めています。見学から始めることも可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Star icon component
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Users icon component
function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ArrowRight icon component
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}