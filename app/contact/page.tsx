import type { Metadata } from "next";
import { ExternalLink, Mail, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "相談・予約",
  description: "みらいの学び場への相談・予約。48時間以内にメールにてご連絡いたします。",
};

export default function ContactPage() {
  // Googleフォームの埋め込みURL（実際のURLに置き換えてください）
  const googleFormUrl = "https://forms.gle/YOUR_FORM_ID_HERE";
  
  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-30 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fadeIn">
              <Mail className="mx-auto h-12 w-12 text-primary mb-6" />
              <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                相談・予約
              </h1>
            </div>
            <p className="animate-fadeIn mt-6 text-lg leading-8 text-gray-600" style={{ animationDelay: '0.2s' }}>
              まずはお気軽にご相談ください。
              <br />
              48時間以内にメールにてご連絡いたします。
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">安全・安心</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Googleフォームで<br />セキュアに送信
                </p>
              </div>
              <div className="text-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">迅速対応</h3>
                <p className="mt-1 text-sm text-gray-600">
                  48時間以内に<br />ご連絡します
                </p>
              </div>
              <div className="text-center animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">確認メール</h3>
                <p className="mt-1 text-sm text-gray-600">
                  自動返信で<br />受付確認
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 sm:p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-heading text-center mb-8">
              お問い合わせフォーム
            </h2>
            
            {/* Googleフォーム埋め込み */}
            <div className="bg-white rounded-2xl p-4 shadow-inner">
              <iframe
                src={`${googleFormUrl}?embedded=true`}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
              >
                読み込んでいます...
              </iframe>
            </div>

            {/* 外部リンクオプション */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                フォームが表示されない場合は、こちらからアクセスしてください
              </p>
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
              >
                <span>Googleフォームを開く</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mt-12 rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-100">
            <h3 className="text-lg font-semibold text-amber-900 mb-3">ご記入にあたってのお願い</h3>
            <ul className="space-y-2 text-sm text-amber-800">
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>お子さまの状況は、できるだけ具体的にご記入ください</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>希望日程は第3希望までご記入いただけると調整しやすくなります</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">•</span>
                <span>個人情報は適切に管理し、相談対応以外の目的では使用しません</span>
              </li>
            </ul>
          </div>

          {/* プライバシーポリシーリンク */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              お問い合わせいただく前に、
              <a href="/privacy" className="text-primary hover:text-blue-700 font-medium">
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}