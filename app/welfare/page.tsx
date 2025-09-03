import { Metadata } from "next";
import WelfareSplitCTA from "@/app/components/WelfareSplitCTA";
import ProviderCard from "@/app/components/ProviderCard";
import { CONTACT_EMAIL, CONTACT_TEL, CONTACT_TEL_LINK } from "@/app/config";

export const metadata: Metadata = {
  title: "制度による支援（放課後等デイ）",
  description: "受給者証が必要です。状況をうかがい、適切な窓口へつなぎます。",
};

export default function WelfarePage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.2] [text-wrap:balance] [line-break:strict] text-heading">
            制度による支援（放課後等デイ）
          </h1>
          <p className="mt-4 text-slate-700 md:text-lg">
            受給者証が必要です。まずは状況をお聞きし、適切な窓口へつなぎます。
          </p>

          {/* 分岐CTA：受給者証の有無 */}
          <WelfareSplitCTA />

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-heading">制度の概要</h2>
              <p className="mt-3 text-slate-700">
                放課後等デイサービスは、発達面に心配があるお子さまや、日常生活・対人面で
                <strong>継続的なサポートが必要な方</strong>を対象にした公的な通所支援です。
                これまで支援を受けてこなかった方でも、不安感がとても強い／生活リズムの大きな乱れ／
                感覚過敏や集団参加の難しさ等がある場合、<strong>対象となる可能性があります</strong>。
              </p>
            </section>

            {/* 運営拠点：ぷろらぼ */}
            <ProviderCard />

            <section>
              <h2 className="text-2xl font-bold text-heading">自己負担の目安</h2>
              <p className="mt-3 text-slate-700">
                自己負担は原則1割で、世帯所得に応じた月額上限（0円／4,600円／37,200円）があります。
                具体的な負担額は自治体の決定によります。利用には受給者証の交付が前提です。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-heading">利用までの流れ</h2>
              <ol className="mt-3 list-decimal pl-6 text-slate-700 space-y-1">
                <li>初回相談（無料）</li>
                <li>見立て（必要に応じ医療・相談支援へ接続）</li>
                <li>受給者証の申請・交付</li>
                <li>個別支援計画の作成・ご説明</li>
                <li>利用開始（必要に応じてAI活動を計画に組み込み）</li>
              </ol>
              <p className="mt-3 text-sm text-slate-500">
                ※医療診断や受給者証の可否は当方では決定できません。自治体の審査・判定に基づきます。
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/voucher-guide" className="rounded-xl px-4 py-2 ring-1 ring-slate-300 hover:bg-gray-50 transition-colors">受給者証の取り方</a>
                <a href="/contact?type=welfare" className="rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">初回相談を予約</a>
              </div>
              <p className="mt-3 text-sm text-slate-500">
                フォームが開かない場合は <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a> / <a href={`tel:${CONTACT_TEL_LINK}`} className="underline">{CONTACT_TEL}</a>
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* JSON-LD（最小） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "制度による支援（放課後等デイ）",
            "provider": { "@type": "Organization", "name": "（運営法人名）" }, // TODO
            "areaServed": "JP",
            "url": "https://futoko-support-website.vercel.app/welfare"
          }),
        }}
      />
    </main>
  );
}