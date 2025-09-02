import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "不登校支援に関するよくある質問と回答をまとめました。すぐに通学を目指すべきか、発達障害の診断、学校との連携、料金など。",
};

const faqs = [
  {
    question: "すぐに通学を目指した方がいいですか？",
    answer: "本人の納得が土台です。「行ける/行けない」ではなく「行ける日を増やす」考え方を取ります。お子さまの状態を見極めながら、無理のないペースで進めることが大切です。",
  },
  {
    question: "発達障害か分かりません。診断は必要ですか？",
    answer: "見立てで教育・福祉的観点から整理し、必要時は医療機関の診断をご案内します。診断がなくても支援は開始できます。まずは現在の困りごとに焦点を当てて、適切な支援方法を一緒に考えていきます。",
  },
  {
    question: "学校との連携は可能ですか？",
    answer: "はい。保護者の意向を確認しながら進めます。担任の先生、特別支援コーディネーター、スクールカウンセラーなどと連携し、お子さまにとって最適な環境を整えるお手伝いをします。",
  },
  {
    question: "料金の目安を教えてください。",
    answer: "制度利用（放課後等デイサービス）の場合は受給者証に基づく自己負担となります。実費サービスの場合、初回見立て5,500円、個別コーチング月22,000〜33,000円、居場所利用1回2,000円〜などです。詳細は料金ページをご覧ください。",
  },
  {
    question: "オンラインでの支援は可能ですか？",
    answer: "はい、可能です。個別コーチングや保護者相談はオンラインでも実施しています。お子さまの状態や環境に合わせて、対面とオンラインを組み合わせることもできます。",
  },
  {
    question: "どのくらいの期間で改善が見られますか？",
    answer: "お子さまによって異なりますが、3〜6ヶ月で何らかの変化が見られることが多いです。ただし、「改善」の定義も人それぞれです。小さな変化を大切にしながら、長期的な視点で支援を続けることが重要です。",
  },
  {
    question: "きょうだいへの影響が心配です。",
    answer: "不登校のお子さまのきょうだいへの配慮も大切です。保護者向け支援の中で、家族全体のバランスを考えたアドバイスも行っています。必要に応じて、きょうだいの相談にも対応可能です。",
  },
  {
    question: "高校進学はできますか？",
    answer: "多様な進路選択があります。全日制高校だけでなく、通信制高校、定時制高校、サポート校など、お子さまに合った選択肢を一緒に探します。中学校での出席日数が少なくても進学は可能です。",
  },
  {
    question: "親の会やグループ活動はありますか？",
    answer: "保護者コミュニティ（月3,000円）で、月1回の勉強会や保護者同士の交流会を開催しています。同じ悩みを持つ保護者同士でつながることで、孤立感の軽減にもつながります。",
  },
  {
    question: "見学や体験はできますか？",
    answer: "まずは無料相談でお話を伺い、その後有料の見立て（アセスメント）を行います。居場所活動については、見立て後に体験参加が可能です。お子さまの状態に合わせて、無理のない形でご案内します。",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              よくある質問
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              不登校支援に関するよくあるご質問にお答えします
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <dt className="flex w-full items-start justify-between text-left">
                  <span className="text-base font-semibold leading-7 text-gray-900">
                    Q. {faq.question}
                  </span>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">
                    A. {faq.answer}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Additional Questions CTA */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-heading mb-4">
            その他のご質問がある方へ
          </h2>
          <p className="text-gray-600 mb-8">
            上記以外のご質問や、より詳しい説明をご希望の方は、
            <br />
            お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              無料相談を予約
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              料金プランを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}