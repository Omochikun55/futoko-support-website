import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, AlertCircle, ArrowRight, Calendar, Target, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "子どもと一緒に決める「1か月ゴール」—小さな一歩から始める不登校支援",
  description: "不登校支援の出発点は'現実的な小さな一歩'。FASTで1か月ゴールを作り、If-Thenと代替案・許容幅で'続けられる設計'に。家庭と学校へ共有しやすいKPIと文例も紹介。",
};

export default function GoalSetting1MonthPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Calendar className="h-4 w-4" />
              コラム
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              子どもと一緒に決める「1か月ゴール」
              <span className="block mt-2 text-xl text-gray-600">小さな一歩から始める不登校支援</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              最初の一歩は「大きな決意」ではなく「30秒の行動」
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="prose prose-lg mx-auto max-w-4xl px-6 py-12 lg:px-8">
        {/* まず結論 */}
        <section className="mb-12">
          <div className="rounded-xl bg-blue-50 p-6 not-prose">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              まず結論：最初の一歩は「大きな決意」ではなく「30秒の行動」
            </h2>
            <p className="text-gray-700 mb-4">
              不登校のゴールは<strong>「学校に行く」だけではありません</strong>。
              まずは<strong>子ども本人と一緒に</strong>、1か月で試せる<strong>小さな一歩</strong>を決めましょう。
            </p>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-3">今日からの一歩（3つ）</p>
              <ol className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>子どもが<strong>安心できる時間/場所/人</strong>を1つ言語化する</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>その安心を使った<strong>30秒〜3分の行動</strong>を1つ書く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span><strong>週に何回</strong>やるかだけ決める（数えられれば十分）</span>
                </li>
              </ol>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※医療的判断や診断は行いません。必要に応じて学校・自治体・医療へつなぎます。
            </p>
          </div>
        </section>

        {/* なぜ期間は「1か月」？ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">なぜ期間は「1か月」？</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>見通しが持てる</strong>：学期単位より<strong>試しやすい</strong>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>調整が効く</strong>：合わなければ<strong>翌月に作り直せる</strong>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>共有しやすい</strong>：家庭・学校・支援者で<strong>同じ周期</strong>で振り返れる
              </div>
            </li>
          </ul>
        </section>

        {/* FASTで作るゴール文 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">FASTで作るゴール文（例文つき）</h2>
          <div className="rounded-lg bg-purple-50 p-6 mb-6 not-prose">
            <p className="font-semibold text-purple-900 mb-3">
              <strong>FAST</strong>＝<strong>F</strong>ocused（絞る） / <strong>A</strong>cceptable（本人が許容） / <strong>S</strong>mall（小さい） / <strong>T</strong>rackable（数えられる）
            </p>
            <ul className="space-y-2 text-gray-700">
              <li><strong>F：領域を1つに</strong>（生活リズム／安心づくり／学校接続／学習）</li>
              <li><strong>A：本人が「やってみてもいい」と思える</strong>大きさ</li>
              <li><strong>S：30秒〜3分の行動</strong>に分解</li>
              <li><strong>T：回数や時間で数えられる</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold text-gray-900 mb-4">ゴール文例</p>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-gray-600">生活：</span>
                <em className="text-gray-800">「週3回、朝9:30までに家の前へ<strong>30秒</strong>出る」</em>
              </li>
              <li>
                <span className="text-sm text-gray-600">安心：</span>
                <em className="text-gray-800">「週4回、夕方に<strong>5分</strong>のゆっくり呼吸」</em>
              </li>
              <li>
                <span className="text-sm text-gray-600">学校接続：</span>
                <em className="text-gray-800">「週1回、保健室に<strong>3分</strong>だけ入る」</em>
              </li>
              <li>
                <span className="text-sm text-gray-600">学習：</span>
                <em className="text-gray-800">「週2回、タブレットで<strong>10分</strong>のAI作品づくり」</em>
              </li>
            </ul>
          </div>
        </section>

        {/* If-Then／代替案／許容幅 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">If-Then／代替案／許容幅（±1）</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold">If-Then：</p>
              <p className="text-gray-700">「朝に出られなかったら → <strong>11:00に</strong>ベランダへ30秒」</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold">代替案：</p>
              <p className="text-gray-700">「それも無理な日は、窓を開けて<strong>深呼吸3回</strong>」</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold">許容幅（±1）：</p>
              <p className="text-gray-700">「週3回」目標に対し、<strong>2〜4回</strong>をOKとする</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <p className="text-amber-900">
              <AlertCircle className="inline h-4 w-4 mr-1" />
              できない日は失敗ではなく<strong>設計の手がかり</strong>。翌月に<strong>やり直せる</strong>前提で。
            </p>
          </div>
        </section>

        {/* KPI */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">KPI（「できた」を数字で残す最小ルール）</h2>
          <p className="text-gray-700 mb-4">面倒な記録は続きません。<strong>これだけ</strong>数えれば十分です。</p>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Target className="h-5 w-5 text-blue-600" />
                <span><strong>週のセッション数</strong>（何回できたか）</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-green-600" />
                <span><strong>平均時間（分）</strong>（ざっくりでOK）</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-600 font-bold">😊</span>
                <span><strong>安心度0–4（本人）</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-600 font-bold">💪</span>
                <span><strong>保護者負担0–4（保護者）</strong></span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            記録テンプレは <Link href="/assessment" className="text-blue-600 underline">見立てページ</Link> に設置予定。
            <strong>月次1枚レポート</strong>に自動集約し、学校共有に使えます。
          </p>
        </section>

        {/* ケーススタディ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ケーススタディ（状況別に「最初の一歩」を作る）</h2>
          
          <div className="space-y-8">
            {/* ケースA */}
            <div className="rounded-xl bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">
                ケースA：小4／完全不登校 → 「外へ30秒」から
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>領域</strong>：生活リズム</p>
                <p><strong>ゴール文</strong>：週3回、朝9:30までに家の前へ<strong>30秒</strong>出る</p>
                <p><strong>If-Then</strong>：朝が難しい日は<strong>11:00に</strong>ベランダへ30秒</p>
                <p><strong>代替案</strong>：窓を開けて<strong>深呼吸3回</strong></p>
                <p><strong>KPI</strong>：回数／平均分／安心度</p>
                <p><strong>1か月の期待</strong>：屋外刺激に慣れる／朝の切り替えが<strong>1日でも</strong>増える</p>
              </div>
            </div>

            {/* ケースB */}
            <div className="rounded-xl bg-green-50 p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">
                ケースB：小5／別室登校中 → 「校内3分」
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>領域</strong>：学校接続</p>
                <p><strong>ゴール文</strong>：週2回、<strong>保健室3分</strong>滞在</p>
                <p><strong>If-Then</strong>：混雑時は廊下の静かな場所で<strong>30秒</strong> → その後保健室へ</p>
                <p><strong>代替案</strong>：<strong>校門まで</strong>来られたらOK（入室なしでも可）</p>
                <p><strong>KPI</strong>：校内滞在分／回数／安心度</p>
                <p><strong>1か月の期待</strong>：「行ける場所」が<strong>1つ増える</strong></p>
              </div>
            </div>

            {/* ケースC */}
            <div className="rounded-xl bg-purple-50 p-6">
              <h3 className="text-lg font-bold text-purple-900 mb-4">
                ケースC：中1／朝の体調差が大きい → 「ゆっくり起動」
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>領域</strong>：安心づくり</p>
                <p><strong>ゴール文</strong>：週3回、起床後<strong>90分以内</strong>に<strong>音楽1曲＋ストレッチ30秒</strong></p>
                <p><strong>If-Then</strong>：体が重い朝は<strong>ベッドで深呼吸10回</strong></p>
                <p><strong>代替案</strong>：午後もできなければ、入浴前に<strong>首元を温めて</strong>深呼吸3回</p>
                <p><strong>KPI</strong>：回数／起床満足度0–4</p>
              </div>
            </div>

            {/* ケースD */}
            <div className="rounded-xl bg-orange-50 p-6">
              <h3 className="text-lg font-bold text-orange-900 mb-4">
                ケースD：中2／学習の再開が不安 → 「作品づくり10分」
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>領域</strong>：学習・興味</p>
                <p><strong>ゴール文</strong>：週2回、<strong>AI作品づくり10分</strong>（画像生成→タイトルまで）</p>
                <p><strong>If-Then</strong>：集中が切れたら<strong>3分で強制終了</strong>し、次回に続きから</p>
                <p><strong>代替案</strong>：制作が難しい日は<strong>作品の説明文50字</strong></p>
                <p><strong>KPI</strong>：回数／平均分／作品枚数</p>
              </div>
            </div>
          </div>
        </section>

        {/* ミニチェックリスト */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ミニチェックリスト（毎朝30秒でOK）</h2>
          <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-200">
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span>昨夜の就寝時刻をざっくり</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span>今日の「安心アイテム」1つ（音・場所・人）</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span><strong>30秒行動</strong>できた／できなかった（○／△／×）</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span>できなかった理由1行（眠気／不安／予定）</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <span>If-Thenの微調整（時間帯・場所・代替）</span>
              </li>
            </ul>
          </div>
        </section>

        {/* NG→OK修正例 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">NG→OK修正例（「現実的に続けられる設計」へ）</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <span className="text-red-600 font-bold">NG</span>
              <span className="line-through text-gray-500">毎朝<strong>30分</strong>散歩</span>
              <span className="text-gray-400">→</span>
              <span className="text-green-600 font-bold">OK</span>
              <span className="text-gray-700">週<strong>2回</strong>・玄関前<strong>30秒</strong></span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 font-bold">NG</span>
              <span className="line-through text-gray-500">提出物を<strong>全部</strong>終わらせる</span>
              <span className="text-gray-400">→</span>
              <span className="text-green-600 font-bold">OK</span>
              <span className="text-gray-700">週<strong>1回</strong>・<strong>10分</strong>だけ向き合う</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 font-bold">NG</span>
              <span className="line-through text-gray-500"><strong>必ず</strong>登校</span>
              <span className="text-gray-400">→</span>
              <span className="text-green-600 font-bold">OK</span>
              <span className="text-gray-700"><strong>保健室3分</strong>／<strong>校門まで</strong>でもOK</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 font-bold">NG</span>
              <span className="line-through text-gray-500">毎日学習<strong>1時間</strong></span>
              <span className="text-gray-400">→</span>
              <span className="text-green-600 font-bold">OK</span>
              <span className="text-gray-700">週<strong>2回</strong>・<strong>10分</strong>のAI作品づくり</span>
            </div>
          </div>
        </section>

        {/* 記録テンプレ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">記録テンプレ（コピペで使える1行フォーマット）</h2>
          <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
            日付｜行動：外30秒／保健室3分／呼吸5分／作品10分｜回数：○△×｜安心度：2｜保護者負担：1｜メモ：11時に代替実施
          </div>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• 記録は<strong>丸印</strong>でOK。数字が苦手でも続きます。</li>
            <li>• 月末に<strong>1枚サマリー</strong>へまとめ、家庭・学校・支援者で共有。</li>
          </ul>
        </section>

        {/* 学校・先生に伝える文例 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">学校・先生に伝える「そのまま文例」</h2>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <p className="font-semibold text-blue-900 mb-3">連絡テンプレ（短文）</p>
            <div className="bg-white rounded p-4 border-l-4 border-blue-500">
              <p className="text-gray-700">
                「今月は「週3回・外へ30秒」を目標に、<strong>If-Thenで11時の代替</strong>を設定しています。
                実施は<strong>週2回程度</strong>、<strong>安心度平均2</strong>でした。
                来月は「朝ベランダ30秒→玄関前30秒」に<strong>少しだけ</strong>増やします。」
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <p className="font-semibold text-green-900 mb-3">共有の要点（3つ）</p>
            <ol className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">1.</span>
                <span><strong>いまの実態</strong>（回数・平均分・安心度）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">2.</span>
                <span><strong>次の一歩</strong>（ほんの少し増やす／場所を1段階広げる）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">3.</span>
                <span><strong>配慮の相談</strong>（別室/時差/課題調整 など）</span>
              </li>
            </ol>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            制度（放課後等デイ）は<strong>通所のみ</strong>、オンラインは<strong>実費</strong>。
            <strong>線引き</strong>も合わせて説明すると誤解が減ります。
          </p>
        </section>

        {/* よくあるつまずきと対処 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">よくあるつまずきと対処</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-red-500">⚠️</span>
              <div>
                <strong>目標が大きすぎる</strong> → <strong>30秒行動</strong>に分解
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500">⚠️</span>
              <div>
                <strong>親主導になりがち</strong> → <strong>本人の「許容できる」</strong>を最優先
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500">⚠️</span>
              <div>
                <strong>続かない</strong> → <strong>If-Then/代替案/許容幅</strong>を見直し、翌月に<strong>設計を小さく</strong>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500">⚠️</span>
              <div>
                <strong>記録が面倒</strong> → <strong>○△×と一言メモ</strong>だけにする
              </div>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="mb-12">
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">まとめ：小さく、数えられて、やり直せる</h2>
            <p className="text-gray-700 mb-6">
              1か月ゴールは<strong>「小さく」「数えられ」「やり直せる」</strong>ことが大切。
              次の一歩は、<strong>今週の回数だけ</strong>決めることです。
              <strong>回数が決まれば十分</strong>。続けながら整えましょう。
            </p>
            
            <div className="bg-white rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-4">CTA</p>
              <p className="text-gray-700 mb-4">
                まずは<strong>整理セッション（60分 / 5,500円）</strong>で、
                <strong>あなたのご家庭のFASTゴール</strong>を一緒に作ります。
              </p>
              <Link
                href="/contact?type=assessment"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                相談を予約する
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs text-gray-500 mt-3">※15分の無料トリアージもあります</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Q. ゴールはいくつ作る？</p>
              <p className="text-gray-700">A. <strong>1つで十分</strong>です。慣れたら2つ目を検討。</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Q. できなかった週は失敗？</p>
              <p className="text-gray-700">
                A. いいえ。<strong>If-Then/代替案/許容幅</strong>を見直すサイン。
                翌月に<strong>小さく再設計</strong>します。
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Q. 数字が合っているか不安</p>
              <p className="text-gray-700">A. ざっくりで大丈夫。<strong>続く仕組み</strong>が最優先です。</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Q. 医療や診断の相談は？</p>
              <p className="text-gray-700">
                A. 当方では診断は行いません。必要に応じて<strong>学校・自治体・医療</strong>につなぎます。
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "子どもと一緒に決める「1か月ゴール」",
            "description": "不登校支援で'現実的な小さな一歩'を作る手順。FASTとIf-Then・代替案・許容幅で続けられる設計に。",
            "step": [
              {
                "@type": "HowToStep",
                "name": "安心の特定",
                "text": "子どもが安心できる時間・場所・人を1つ言語化する。"
              },
              {
                "@type": "HowToStep",
                "name": "30秒行動に分解",
                "text": "30秒〜3分で終わる行動に分解し、週の回数を決める。"
              },
              {
                "@type": "HowToStep",
                "name": "If-Thenと代替案・許容幅",
                "text": "うまくいかない日用のIf-Thenと代替案、許容幅（±1回）を決める。"
              },
              {
                "@type": "HowToStep",
                "name": "KPIで記録",
                "text": "セッション数・平均分・安心度0–4・保護者負担0–4を丸印で記録。"
              },
              {
                "@type": "HowToStep",
                "name": "月次レポート共有",
                "text": "1か月ごとに1枚にまとめ、家庭・学校・支援者で共有する。"
              }
            ]
          }),
        }}
      />
    </main>
  );
}