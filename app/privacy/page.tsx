import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "みらいの学び場のプライバシーポリシー。個人情報の取り扱いについて定めています。",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              プライバシーポリシー
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              個人情報保護方針
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              合同会社ミニオフィスが運営する「みらいの学び場」（以下、「当事業所」といいます。）は、
              お客様からお預かりする個人情報を適切に管理・保護するため、以下のプライバシーポリシーを定めます。
            </p>

            <div className="space-y-12">
              {/* 第1条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">1. 収集する個人情報</h2>
                <p className="text-gray-600 mb-4">
                  当事業所では、以下の個人情報をお預かりすることがあります。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>保護者様のお名前、メールアドレス、電話番号</li>
                  <li>お子様の学年、お名前（ニックネーム可）</li>
                  <li>ご相談内容、お子様の状況に関する情報</li>
                  <li>サービス利用履歴</li>
                </ul>
              </div>

              {/* 第2条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">2. 個人情報の利用目的</h2>
                <p className="text-gray-600 mb-4">
                  お預かりした個人情報は、以下の目的で利用いたします。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>ご相談への対応、サービスの提供</li>
                  <li>お子様に最適な支援プランのご提案</li>
                  <li>ご予約の確認、日程調整のご連絡</li>
                  <li>サービス改善のための分析（個人を特定しない形で利用）</li>
                  <li>重要なお知らせ、メンテナンス情報等のご連絡</li>
                </ul>
              </div>

              {/* 第3条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">3. 個人情報の管理</h2>
                <p className="text-gray-600">
                  お預かりした個人情報は、以下の方法で適切に管理いたします。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-4">
                  <li>アクセス権限を持つスタッフのみが取り扱います</li>
                  <li>セキュリティ対策を施したシステムで保管します</li>
                  <li>不要になった情報は適切に削除します</li>
                  <li>第三者への提供は原則として行いません（法令に基づく場合を除く）</li>
                </ul>
              </div>

              {/* 第4条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">4. Googleフォーム利用について</h2>
                <p className="text-gray-600">
                  お問い合わせフォームはGoogleフォームを利用しています。
                  Googleのプライバシーポリシーについては、
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    こちら
                  </a>
                  をご確認ください。
                </p>
              </div>

              {/* 第5条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">5. お客様の権利</h2>
                <p className="text-gray-600 mb-4">
                  お客様は、ご自身の個人情報について以下の権利を有します。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>開示の請求（どのような情報を保有しているか確認）</li>
                  <li>訂正・追加・削除の請求</li>
                  <li>利用停止・消去の請求</li>
                  <li>第三者提供の停止請求</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  これらのご請求は、下記お問い合わせ窓口までご連絡ください。
                </p>
              </div>

              {/* 第6条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">6. Cookieについて</h2>
                <p className="text-gray-600">
                  当サイトでは、サービス向上のためCookieを使用することがあります。
                  Cookieは個人を特定する情報は含みません。
                  ブラウザの設定でCookieを無効にすることも可能です。
                </p>
              </div>

              {/* 第7条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">7. セキュリティ対策</h2>
                <p className="text-gray-600">
                  当事業所では、個人情報の漏洩、滅失、毀損の防止のため、
                  適切なセキュリティ対策を実施しています。
                  また、スタッフに対して個人情報保護に関する教育を行っています。
                </p>
              </div>

              {/* 第8条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">8. プライバシーポリシーの変更</h2>
                <p className="text-gray-600">
                  本ポリシーは、法令の改正やサービス内容の変更に応じて、
                  予告なく変更することがあります。
                  変更後のポリシーは、本ページに掲載した時点から効力を生じます。
                </p>
              </div>

              {/* お問い合わせ */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">9. お問い合わせ窓口</h2>
                <p className="text-gray-600 mb-4">
                  個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>みらいの学び場</strong><br />
                    運営会社：合同会社ミニオフィス<br />
                    所在地：北海道札幌市<br />
                    メール：info@minioffice.jp<br />
                    電話：011-123-4567（平日9:00-18:00）
                  </p>
                </div>
              </div>

              {/* 制定日 */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-right text-gray-600">
                  制定日：2025年9月2日<br />
                  最終更新日：2025年9月3日
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}