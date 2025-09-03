import { AlertTriangle, Info } from "lucide-react";

export function InfoCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border bg-white p-4 text-slate-700">
      <div className="flex items-start gap-2">
        <Info className="w-5 h-5 text-slate-500 mt-0.5 flex-shrink-0" />
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function CautionCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900">
      <div className="flex items-start gap-2">
        <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}