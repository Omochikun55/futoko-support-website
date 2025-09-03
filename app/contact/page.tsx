import type { Metadata } from "next";
import { ExternalLink, Mail, Clock, Shield, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "相談・予約",
  description: "みらいの学び場への相談・予約。48時間以内にメールにてご連絡いたします。",
};

export default function ContactPage() {
  // Googleフォームの埋め込みURL
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeZwmgpP_gRZf8YTTfJ0BwyQRN3uwmLRQtx4kpVBowQxw5X9Q/viewform";
  
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
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center animate-fadeIn group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">安全・安心</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Googleフォームで<br />セキュアに送信
                </p>
              </div>
              <div className="text-center animate-fadeIn group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">迅速対応</h3>
                <p className="mt-1 text-sm text-gray-600">
                  48時間以内に<br />ご連絡します
                </p>
              </div>
              <div className="text-center animate-fadeIn group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                  <Mail className="h-6 w-6 text-green-600" />
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 sm:p-12 shadow-xl">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 opacity-20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-3xl" />
            
            <div className="relative">
            <h2 className="text-2xl font-bold text-heading text-center mb-8">
              お問い合わせフォーム
            </h2>
            
            {/* Googleフォーム埋め込み */}
            <div className="bg-white rounded-2xl p-2 sm:p-4 shadow-inner ring-1 ring-gray-100">
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
            <div className="mt-8 space-y-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  フォームが表示されない場合は、以下の方法でもお問い合わせいただけます
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Googleフォームを開く</span>
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="mailto:info@minioffice.jp?subject=不登校支援のご相談&body=【保護者様のお名前】%0D%0A%0D%0A【お子様の学年】%0D%0A%0D%0A【ご相談内容】%0D%0A"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:ring-2 hover:ring-primary/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>メールで相談</span>
                    <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                  <a
                    href="tel:011-123-4567"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 text-sm font-semibold text-gray-700 shadow-md ring-1 ring-green-200 hover:shadow-lg hover:ring-2 hover:ring-green-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4 text-green-600 transition-transform duration-300 group-hover:rotate-12" />
                    <span>電話で相談</span>
                  </a>
                </div>
              </div>

              {/* 返信の流れ */}
              <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">お問い合わせ後の流れ</h3>
                <ol className="space-y-3 text-sm text-blue-800">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                    <div>
                      <p className="font-medium">自動返信メール</p>
                      <p className="text-blue-700">お問い合わせ受付のご連絡（即時）</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                    <div>
                      <p className="font-medium">担当者からのご連絡</p>
                      <p className="text-blue-700">48時間以内に詳細なご案内（平日対応）</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">3</span>
                    <div>
                      <p className="font-medium">日程調整</p>
                      <p className="text-blue-700">初回相談の日時を相談して決定</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 ring-1 ring-amber-100 hover:ring-2 hover:ring-amber-200 transition-all duration-300">
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