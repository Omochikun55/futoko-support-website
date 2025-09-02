import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "私たちについて",
  description: "「支援する人も、本人も、人間らしく」私たちは不登校を「問題」とは決めつけません。子どもと一緒に「なぜ学校に行くのか？本当に行く必要があるのか？」を問い直し、いま実現できる一歩を共に探します。",
};

export default function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              私たちについて
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              「支援する人も、本人も、人間らしく」
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-heading mb-8">
                私たちのミッション
              </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                私たちは、不登校を「問題」とは決めつけません。
              </p>
              
              <p>
                放課後等デイサービスを運営する中で、多くの子どもたちが学校に馴染めず苦しんでいる現実を見てきました。
                それは、社会の変化や価値観の多様化に伴い、従来の「学校」という枠組みだけでは支えきれない子どもが増えているからです。
              </p>
              
              <p>
                だからこそ、私たちの支援は「学校復帰」だけをゴールにしません。
              </p>
              
              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                <p className="text-lg font-medium text-heading mb-0">
                  子どもと一緒に『なぜ学校に行くのか？ 本当に行く必要があるのか？』を問い直し、
                  <br />
                  いま実現できる一歩を共に探す。
                </p>
              </div>
              
              <p className="text-xl font-medium">
                その歩みを伴走することが、私たちの使命です。
              </p>
            </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-concept.jpg"
                  alt="みらいの学び場のコンセプト - 成長、可能性、多様性、未来"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-heading mb-8">
              私たちが大切にしていること
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                「学校に行くかどうかより、安心して生きること」
              </p>
              <p className="text-lg text-gray-700">
                「子どもと一緒にゴールを描く支援」
              </p>
              <p className="text-lg text-gray-700">
                「現実的で実現可能な一歩を共に」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Structure */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-heading mb-8">
              支援体制
            </h2>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                教育・福祉・ITの三位一体で、お子さまと家族を支えます。
              </p>
              
              <h3 className="text-xl font-semibold text-heading mt-8 mb-4">連携機関</h3>
              <ul className="space-y-2">
                <li>学校（担任・特別支援コーディネーター・スクールカウンセラー）</li>
                <li>医療機関（小児科・児童精神科）</li>
                <li>福祉機関（児童相談所・市区町村の相談窓口）</li>
                <li>民間支援団体（フリースクール・親の会など）</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-heading mt-8 mb-4">拠点</h3>
              <p>
                札幌市（円山周辺）を拠点に、対面とオンラインの両方で支援を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro-labo Connection */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-heading mb-6">
              放課後等デイサービス「ぷろらぼ」との連携
            </h2>
            <p className="text-gray-600 mb-4">
              私たちは、放課後等デイサービス「ぷろらぼ」（pro-labo.net）を運営する中で培った支援ノウハウを活かし、
              不登校のお子さまに特化した支援プログラムを提供しています。
            </p>
            <p className="text-gray-600">
              発達特性がある場合は放課後等デイサービスの利用を、
              そうでない場合は実費型サービスをご案内し、
              一人ひとりに最適な支援を組み立てます。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-heading mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-600 mb-8">
            お子さまと家族の「いま」に寄り添い、一緒に次の一歩を探します
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="無料相談を予約する"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>
    </>
  );
}