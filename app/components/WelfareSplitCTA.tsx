"use client";
import { ExternalLink } from "lucide-react";
import { PROLAB_SITE, UTM } from "@/app/config";

export default function WelfareSplitCTA() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <a
        href={`${PROLAB_SITE}${UTM}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="group rounded-xl border bg-white p-5 hover:shadow-sm transition-shadow"
        aria-label="受給者証を持っているので、ぷろらぼで見学/案内を見る（外部サイト）"
      >
        <p className="text-xs font-semibold text-slate-600">受給者証をお持ちの方</p>
        <h3 className="mt-1 text-lg font-bold flex items-center gap-2">
          ぷろらぼへ（外部） <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </h3>
        <p className="mt-1 text-slate-600 text-sm">運営拠点（放課後等デイサービス）へ移動します。</p>
      </a>
      <a
        href="/voucher-guide"
        className="rounded-xl border bg-white p-5 hover:shadow-sm transition-shadow"
        aria-label="受給者証の取り方を見る"
      >
        <p className="text-xs font-semibold text-slate-600">受給者証がまだの方</p>
        <h3 className="mt-1 text-lg font-bold">受給者証の取り方を見る</h3>
        <p className="mt-1 text-slate-600 text-sm">申請の流れ・必要書類・所要期間（2〜4週間目安）。</p>
      </a>
    </div>
  );
}