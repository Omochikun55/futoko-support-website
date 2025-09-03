import { MapPin, Clock, ExternalLink } from "lucide-react";
import { PROLAB_SITE, PROLAB_VISIT_URL, UTM } from "@/app/config";

export default function ProviderCard() {
  return (
    <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-800 text-xs px-2 py-0.5 font-medium">
          受給者証が必要です
        </span>
      </div>
      <h2 className="text-2xl font-bold text-heading">運営拠点：ぷろらぼ（放課後等デイサービス）</h2>
      <p className="mt-2 text-slate-700">
        発達面の心配や日常生活・対人面で継続的なサポートが必要な方向けの公的サービスです。
        これまで支援を受けていない方でも、不安感が強い／生活リズムの乱れ／感覚過敏などがあれば対象となる可能性があります。
        まずはご相談ください。<span className="text-slate-500 text-xs ml-1">※利用には受給者証が必要です。</span>
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
        <li className="flex items-start gap-2">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
          <span>札幌市◯◯区◯◯（地図はぷろらぼサイトをご覧ください）</span>
        </li>
        <li className="flex items-start gap-2">
          <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-500" />
          <span>平日◯:◯◯–◯:◯◯（祝日除く）</span>
        </li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={`${PROLAB_VISIT_URL}${UTM}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 text-white px-4 py-2 inline-flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors"
        >
          見学を予約 <ExternalLink className="w-4 h-4 opacity-80" />
        </a>
        <a
          href={`${PROLAB_SITE}${UTM}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="rounded-xl ring-1 ring-blue-600 text-blue-700 px-4 py-2 inline-flex items-center gap-2 font-medium hover:bg-blue-50 transition-colors"
        >
          ぷろらぼ公式サイト <ExternalLink className="w-4 h-4 opacity-80" />
        </a>
      </div>
      <p className="mt-2 text-xs text-slate-500">※外部サイトへ移動します。</p>
    </div>
  );
}