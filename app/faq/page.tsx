"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, Search, MessageCircle, Phone, Mail, DollarSign, School } from "lucide-react";

// export const metadata: Metadata = {
//   title: "よくある質問",
//   description: "不登校支援に関するよくある質問と回答をまとめました。すぐに通学を目指すべきか、発達障害の診断、学校との連携、料金など。",
// };

const faqCategories = [
  { id: "initial", name: "初回相談について", icon: MessageCircle, color: "from-blue-500 to-cyan-500" },
  { id: "support", name: "支援内容について", icon: HelpCircle, color: "from-purple-500 to-pink-500" },
  { id: "system", name: "制度・料金について", icon: DollarSign, color: "from-green-500 to-emerald-500" },
  { id: "school", name: "学校・進路について", icon: School, color: "from-orange-500 to-red-500" },
];

const faqs = [
  {
    category: "initial",
    question: "すぐに通学を目指した方がいいですか？",
    answer: "本人の納得が土台です。「行ける/行けない」ではなく「行ける日を増やす」考え方を取ります。お子さまの状態を見極めながら、無理のないペースで進めることが大切です。",
  },
  {
    category: "initial",
    question: "発達障害か分かりません。診断は必要ですか？",
    answer: "見立てで教育・福祉的観点から整理し、必要時は医療機関の診断をご案内します。診断がなくても支援は開始できます。まずは現在の困りごとに焦点を当てて、適切な支援方法を一緒に考えていきます。",
  },
  {
    category: "support",
    question: "オンラインでの支援は可能ですか？",
    answer: "はい、可能です。個別コーチングや保護者相談はオンラインでも実施しています。お子さまの状態や環境に合わせて、対面とオンラインを組み合わせることもできます。",
  },
  {
    category: "support",
    question: "どのくらいの期間で改善が見られますか？",
    answer: "お子さまによって異なりますが、3〜6ヶ月で何らかの変化が見られることが多いです。ただし、「改善」の定義も人それぞれです。小さな変化を大切にしながら、長期的な視点で支援を続けることが重要です。",
  },
  {
    category: "system",
    question: "料金の目安を教えてください。",
    answer: "制度利用（放課後等デイサービス）の場合は受給者証に基づく自己負担となります。実費サービスの場合、初回見立て5,500円、個別コーチング月22,000〜33,000円、居場所利用1回2,000円〜などです。詳細は料金ページをご覧ください。",
  },
  {
    category: "system",
    question: "見学や体験はできますか？",
    answer: "まずは無料相談でお話を伺い、その後有料の見立て（アセスメント）を行います。居場所活動については、見立て後に体験参加が可能です。お子さまの状態に合わせて、無理のない形でご案内します。",
  },
  {
    category: "school",
    question: "学校との連携は可能ですか？",
    answer: "はい。保護者の意向を確認しながら進めます。担任の先生、特別支援コーディネーター、スクールカウンセラーなどと連携し、お子さまにとって最適な環境を整えるお手伝いをします。",
  },
  {
    category: "school",
    question: "高校進学はできますか？",
    answer: "多様な進路選択があります。全日制高校だけでなく、通信制高校、定時制高校、サポート校など、お子さまに合った選択肢を一緒に探します。中学校での出席日数が少なくても進学は可能です。",
  },
  {
    category: "support",
    question: "きょうだいへの影響が心配です。",
    answer: "不登校のお子さまのきょうだいへの配慮も大切です。保護者向け支援の中で、家族全体のバランスを考えたアドバイスも行っています。必要に応じて、きょうだいの相談にも対応可能です。",
  },
  {
    category: "support",
    question: "親の会やグループ活動はありますか？",
    answer: "保護者コミュニティ（月3,000円）で、月1回の勉強会や保護者同士の交流会を開催しています。同じ悩みを持つ保護者同士でつながることで、孤立感の軽減にもつながります。",
  },
  {
    category: "support",
    question: "AIを学校課題に使ってもいいですか？",
    answer: "学校のルールを必ず確認してください。多くの学校では、AIツールの使用について独自のガイドラインを設けています。使用する場合は、出典を明記し、AIを使用したことを明確にすることが重要です。不明な場合は、必ず学校に確認してから使用してください。",
  },
  {
    category: "school",
    question: "AI学習で出席扱いになりますか？",
    answer: "出席扱いは学校長の判断となります。当センターでは学習実態レポートを作成し、学習内容や時間、成果物などを記録します。このレポートを学校に提出し、相談することで出席扱いになる可能性があります。まずは学校と相談することをおすすめします。",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <HelpCircle className="mx-auto h-12 w-12 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                よくある質問
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              不登校支援に関するよくあるご質問にお答えします
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Search Bar */}
            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <input
                type="search"
                placeholder="質問を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="relative w-full rounded-xl border border-gray-300 bg-white pl-12 pr-4 py-3 shadow-sm transition-all duration-200 hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`inline-flex items-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-primary hover:text-primary"
                }`}
              >
                すべて
              </button>
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r text-white shadow-lg scale-105"
                        : "bg-white text-gray-700 ring-1 ring-gray-200 hover:ring-2 hover:ring-primary/50 hover:text-primary"
                    } ${
                      selectedCategory === category.id ? category.color : ""
                    }`}
                  >
                    <Icon className={`h-4 w-4 transition-transform duration-300 ${
                      selectedCategory === category.id ? "" : "group-hover:rotate-12"
                    }`} />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="rounded-2xl bg-gray-50 p-12 text-center">
                <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-600">
                  該当する質問が見つかりませんでした。
                  <br />
                  別のキーワードでお試しください。
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isExpanded = expandedItems.includes(index);
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-primary/20"
                  >
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="relative flex w-full items-start justify-between p-6 text-left transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-lg font-bold text-primary">Q.</span>
                          <span className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 text-lg font-bold text-accent">A.</span>
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-heading mb-6">
              その他のご質問はこちらから
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              上記以外のご質問や、より詳しい説明をご希望の方は
              <br />
              お気軽にお問い合わせください
            </p>

            {/* Contact Options */}
            <div className="grid gap-6 sm:grid-cols-3 mb-8">
              <div className="rounded-2xl bg-white p-6 shadow-lg text-center">
                <Phone className="mx-auto h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">お電話</h3>
                <p className="text-sm text-gray-600 mb-3">平日 9:00-18:00</p>
                <a
                  href="tel:011-xxxx-xxxx"
                  className="text-primary hover:text-blue-700 font-medium"
                >
                  011-xxxx-xxxx
                </a>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg text-center">
                <Mail className="mx-auto h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">メール</h3>
                <p className="text-sm text-gray-600 mb-3">24時間受付</p>
                <a
                  href="mailto:info@example.jp"
                  className="text-primary hover:text-blue-700 font-medium"
                >
                  info@example.jp
                </a>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg text-center">
                <MessageCircle className="mx-auto h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">オンライン相談</h3>
                <p className="text-sm text-gray-600 mb-3">初回無料</p>
                <Link
                  href="/contact"
                  className="text-primary hover:text-blue-700 font-medium"
                >
                  予約フォームへ
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">無料相談を予約</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
              <Link
                href="/pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all duration-300"
              >
                <span>料金プランを見る</span>
                <DollarSign className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

