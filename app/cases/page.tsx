"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, Calendar, Users, Star, ArrowRight, CheckCircle } from "lucide-react";

// 型定義
interface CaseItem {
  id: string;
  title: string;
  gradeBand: "小2" | "小3" | "小4" | "小5" | "小6" | "中1";
  gender: "男子" | "女子" | "非公表";
  timeline: string[];
  currentStatus: string;
  supports: string[];
  participation?: string[];
  achievements?: string[];
}

const CASES: CaseItem[] = [
  {
    id: "c1",
    title: "中学1年生・男子",
    gradeBand: "中1",
    gender: "男子",
    timeline: [
      "小学4年〜6年：通学は難しく、学校には行けない期間が続く（修学旅行・卒業式は不参加）",
      "小学5年〜：放課後等デイサービスに通所、現在も継続",
      "中学進学時：地元校ではなく支援の手厚い中学校へ進学",
    ],
    currentStatus: "新しい環境で過ごしながら、継続的に支援利用中。",
    supports: ["放課後等デイサービス"],
    achievements: ["支援の手厚い中学への進学", "継続的な支援の利用", "新環境への適応"],
  },
  {
    id: "c2",
    title: "小学5年生・男子",
    gradeBand: "小5",
    gender: "男子",
    timeline: [
      "小学3年〜：断続的に不登校",
      "小学3年〜5年：放課後等デイサービスに通所、現在も継続",
    ],
    currentStatus: "通常級に在籍しつつ、別室登校を継続。",
    supports: ["放課後等デイサービス"],
    achievements: ["別室登校の実現", "支援の場での安定した活動", "学校とのつながり維持"],
  },
  {
    id: "c3",
    title: "小学4年生・男子",
    gradeBand: "小4",
    gender: "男子",
    timeline: [
      "小学2年から通学が難しくなり、現在も登校は難しい状況",
      "現在：放課後等デイサービスに通所し、生活リズムを整える取組を実施",
    ],
    currentStatus: "家庭と支援の場を行き来しながら、活動時間の安定を目指している。",
    supports: ["放課後等デイサービス"],
    achievements: ["生活リズムの改善", "支援の場への定期通所", "活動時間の安定化"],
  },
  {
    id: "c4",
    title: "小学6年生・男子",
    gradeBand: "小6",
    gender: "男子",
    timeline: [
      "小学5年から登校が難しくなる",
      "学校行事（運動会・修学旅行）には参加できていた",
    ],
    currentStatus: "放課後等デイサービスを継続利用中。",
    supports: ["放課後等デイサービス"],
    participation: ["運動会", "修学旅行"],
    achievements: ["大きな行事への参加", "友達との思い出作り", "自分のペースでの参加"],
  },
  {
    id: "c5",
    title: "小学6年生・男子",
    gradeBand: "小6",
    gender: "男子",
    timeline: [
      "小学3年から不登校が続く",
      "地域の支援センターを利用し、行事（修学旅行・運動会）には参加できていた",
      "現在：放課後等デイサービスに通所",
    ],
    currentStatus: "支援の場を活用しながら、家庭・学校外の活動を継続。",
    supports: ["地域の支援センター", "放課後等デイサービス"],
    participation: ["運動会", "修学旅行"],
    achievements: ["複数の支援機関の活用", "大きな行事への参加", "地域とのつながり"],
  },
  {
    id: "c6",
    title: "小学6年生・男子",
    gradeBand: "小6",
    gender: "男子",
    timeline: [
      "小学4年頃から不登校",
      "地域の支援センターを利用しながら、学校行事（運動会）には参加",
      "現在：放課後等デイサービスに通所",
    ],
    currentStatus: "日中の活動機会の確保と、体力・生活リズムの安定に取り組み中。",
    supports: ["地域の支援センター", "放課後等デイサービス"],
    participation: ["運動会"],
    achievements: ["体力の維持・向上", "日中活動の確保", "社会的なつながりの維持"],
  },
  {
    id: "c7",
    title: "中学1年生・男子",
    gradeBand: "中1",
    gender: "男子",
    timeline: [
      "小学3年頃から不登校が続く",
      "小学校にはほとんど通えず、卒業式は卒業証書の受け取りのみ",
      "現在：放課後等デイサービスに継続通所",
    ],
    currentStatus: "現在も通学は難しいが、支援の場での活動は継続。",
    supports: ["放課後等デイサービス"],
    achievements: ["長期的な支援の継続", "居場所の確保", "成長に合わせた支援"],
  },
];

const gradeOptions = [
  { value: "ALL", label: "すべて" },
  { value: "小4", label: "小4" },
  { value: "小5", label: "小5" },
  { value: "小6", label: "小6" },
  { value: "中1", label: "中1" },
];

const statusOptions = [
  { value: "ALL", label: "すべて" },
  { value: "別室登校", label: "別室登校あり" },
  { value: "行事参加", label: "行事参加あり" },
  { value: "継続支援", label: "支援継続中" },
];

export default function CasesPage() {
  const [gradeFilter, setGradeFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return CASES.filter((c) => {
      const matchGrade = gradeFilter === "ALL" || c.gradeBand === gradeFilter;

      const hasSeparateRoom = c.currentStatus.includes("別室登校") || c.timeline.some(t => t.includes("別室登校"));
      const hasEvent = (c.participation?.length ?? 0) > 0 || c.timeline.some(t => t.includes("運動会") || t.includes("修学旅行"));
      const hasSupport = c.supports.length > 0;

      const matchStatus =
        statusFilter === "ALL" ||
        (statusFilter === "別室登校" && hasSeparateRoom) ||
        (statusFilter === "行事参加" && hasEvent) ||
        (statusFilter === "継続支援" && hasSupport);

      const q = query.trim();
      const matchQuery =
        q === "" ||
        c.title.includes(q) ||
        c.timeline.some((t) => t.includes(q)) ||
        c.currentStatus.includes(q) ||
        c.supports.join("・").includes(q);

      return matchGrade && matchStatus && matchQuery;
    });
  }, [gradeFilter, statusFilter, query]);

  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200 to-blue-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fadeIn">
              <Users className="mx-auto h-12 w-12 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                不登校のいろいろな歩み
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              不登校の形は一つではありません。ここでは、支援の現場で見えてきた
              「子どもたちの歩みの一例」を紹介します。
            </p>
            <div className="animate-fadeIn mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-sm shadow-lg" style={{ animationDelay: '0.4s' }}>
              <p className="text-gray-700">
                ※ 実例は匿名加工済みであり、特定可能な情報（学校名・地域名など）は記載していません。
                学校復帰のみをゴールとせず、<span className="font-medium text-primary">「いま、この子にできること」を最優先にした現実的な支援</span>を大切にしています。
              </p>
            </div>
          </div>
          
          {/* イラストセクション */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="animate-fadeIn rounded-xl overflow-hidden shadow-lg" style={{ animationDelay: '0.6s' }}>
              <Image
                src="/images/case-study-1.png"
                alt="オンライン学習をしている子どものイラスト"
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="animate-fadeIn rounded-xl overflow-hidden shadow-lg" style={{ animationDelay: '0.7s' }}>
              <Image
                src="/images/case-study-2.png"
                alt="小集団で活動している様子"
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="animate-fadeIn rounded-xl overflow-hidden shadow-lg" style={{ animationDelay: '0.8s' }}>
              <Image
                src="/images/case-study-3.png"
                alt="個別指導を受けている様子"
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="animate-fadeIn rounded-xl overflow-hidden shadow-lg" style={{ animationDelay: '0.9s' }}>
              <Image
                src="/images/case-study-4.png"
                alt="創作活動をしている様子"
                width={200}
                height={150}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="sr-only">フィルタ</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {/* Search */}
              <div className="md:col-span-1">
                <label htmlFor="q" className="block text-sm font-medium text-gray-700 mb-2">
                  <Search className="inline-block h-4 w-4 mr-1" />
                  キーワード検索
                </label>
                <input
                  id="q"
                  type="search"
                  placeholder="例：別室登校、放課後等デイ"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              {/* Grade Filter */}
              <div>
                <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline-block h-4 w-4 mr-1" />
                  学年
                </label>
                <select
                  id="grade"
                  value={gradeFilter}
                  onChange={(e) => setGradeFilter(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {gradeOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              
              {/* Status Filter */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="inline-block h-4 w-4 mr-1" />
                  状態
                </label>
                <select
                  id="status"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:border-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {statusOptions.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="sr-only">事例リスト</h2>
          {filtered.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
              <p className="text-gray-600">
                条件に合致する事例が見つかりませんでした。フィルタ条件を調整してください。
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute -top-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity" />
                  
                  <header className="relative mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                        {item.gradeBand}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-100">
                        {item.gender}
                      </span>
                      {item.supports.length > 0 && (
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-green-100">
                          支援中
                        </span>
                      )}
                    </div>
                  </header>

                  <div className="space-y-4">
                    <section>
                      <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                        <Star className="h-4 w-4 text-amber-500 mr-1" />
                        これまでの歩み
                      </h4>
                      <div className="space-y-3">
                        {item.timeline.map((t, idx) => {
                          const timeMatch = t.match(/^(小学\d年|中学\d年|小\d|中\d|現在)/)
                          const timeChip = timeMatch ? timeMatch[1] : null
                          const content = timeMatch ? t.substring(timeMatch[0].length + 1).trim() : t
                          
                          return (
                            <div key={idx} className="flex items-start gap-2">
                              {timeChip && (
                                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 ring-1 ring-blue-200 whitespace-nowrap shadow-sm">
                                  {timeChip}
                                </span>
                              )}
                              <span className="text-sm text-gray-600 flex-1">{content}</span>
                            </div>
                          )
                        })}
                      </div>
                    </section>

                    <section>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">現在の様子</h4>
                      <p className="text-sm text-gray-600">{item.currentStatus}</p>
                    </section>

                    {item.participation && item.participation.length > 0 && (
                      <section>
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">参加できた活動</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.participation.map((p, idx) => (
                            <span key={idx} className="inline-block rounded-lg bg-amber-50 px-2 py-1 text-xs text-amber-700">
                              {p}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}

                    {item.achievements && item.achievements.length > 0 && (
                      <section>
                        <h4 className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                          できたこと
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((a, idx) => (
                            <span key={idx} className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-xs text-green-700 ring-1 ring-green-100">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              {a}
                            </span>
                          ))}
                        </div>
                      </section>
                    )}

                    <section>
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">利用中の支援</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.supports.map((s, idx) => (
                          <span key={idx} className="inline-block rounded-lg bg-blue-50 px-2 py-1 text-xs text-blue-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer Note */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              ※ 本ページの事例は「成功・失敗」を示すものではなく、
              多様な歩みの一例として掲載しています。学校に行くことだけをゴールにせず、
              子どもと一緒に「なぜ行くのか？ 本当に行く必要があるのか？」を問い直しながら、
              <span className="font-medium text-primary">いま実現できる一歩</span>を共に探すという方針に基づいています。
            </p>
            
            <div className="mt-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <span className="relative z-10">あなたの状況をご相談ください</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}