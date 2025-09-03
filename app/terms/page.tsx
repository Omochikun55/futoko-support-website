import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "みらいの学び場の利用規約。サービスのご利用にあたってのルールを定めています。",
};

export default function TermsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
              利用規約
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              サービス利用規約
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              この利用規約（以下、「本規約」といいます。）は、合同会社ミニオフィスが運営する「みらいの学び場」（以下、「当事業所」といいます。）が提供する不登校支援サービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
              保護者様およびお子様（以下、「利用者」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </p>

            <div className="space-y-12">
              {/* 第1条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">1. サービス内容</h2>
                <p className="text-gray-600 mb-4">
                  当事業所は、以下のサービスを提供します。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>個別の学習支援・カウンセリング</li>
                  <li>オンライン学習プログラム</li>
                  <li>保護者様向け相談・サポート</li>
                  <li>進路相談・学校復帰支援</li>
                  <li>その他、不登校支援に関連するサービス</li>
                </ul>
              </div>

              {/* 第2条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">2. 利用申込み</h2>
                <p className="text-gray-600 mb-4">
                  サービスの利用をご希望の方は、以下の流れでお申し込みください。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>初回無料相談のお申込み（オンラインフォームまたは電話）</li>
                  <li>初回相談の実施（30-45分）</li>
                  <li>必要に応じてアセスメントの実施</li>
                  <li>支援プランのご提案・説明</li>
                  <li>正式なお申込みとサービス開始</li>
                </ol>
                <p className="text-gray-600 mt-4">
                  ※正確な情報をご提供いただけない場合、サービスのご利用をお断りすることがあります。
                </p>
              </div>

              {/* 第3条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">3. 利用料金</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-semibold mb-2">料金体系</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>初回相談：無料（30-45分）</li>
                      <li>アセスメント：5,000円</li>
                      <li>定期支援：料金ページに記載の通り</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">お支払い方法</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>銀行振込</li>
                      <li>クレジットカード（オンライン決済）</li>
                      <li>現金（対面サービスのみ）</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">キャンセルポリシー</h3>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>前日17時まで：無料</li>
                      <li>前日17時以降：50％</li>
                      <li>当日：100％</li>
                      <li>※体調不良等やむを得ない事情の場合は個別対応</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 第4条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">4. 利用上のお願い</h2>
                <p className="text-gray-600 mb-4">
                  円滑なサービス提供のため、以下の点にご協力ください。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>予約時間の厳守</li>
                  <li>他の利用者様のプライバシーの尊重</li>
                  <li>施設・設備の適切な利用</li>
                  <li>スタッフへの敬意ある対応</li>
                  <li>緊急連絡先の更新</li>
                  <li>お子様の体調変化等の速やかな報告</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  ※不適切な行為があった場合、サービスの利用を制限させていただくことがあります。
                </p>
              </div>

              {/* 第5条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">5. サービスの変更・中止</h2>
                <p className="text-gray-600 mb-4">
                  以下の場合、サービスを変更または中止することがあります。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>天災・災害等の不可抗力</li>
                  <li>スタッフの急病等</li>
                  <li>施設・設備のメンテナンス</li>
                  <li>その他、やむを得ない事情</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  ※可能な限り事前にご連絡いたしますが、緊急時はこの限りではありません。
                </p>
              </div>

              {/* 第6条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">6. 守秘義務</h2>
                <p className="text-gray-600 mb-4">
                  当事業所は、サービス提供を通じて知り得た利用者様の情報を適切に管理し、
                  法令に基づく場合やお子様の安全に関わる場合を除き、第三者に開示いたしません。
                </p>
                <p className="text-gray-600">
                  ただし、以下の場合は関係機関と連携することがあります。
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mt-2">
                  <li>お子様の生命・身体に危険が及ぶ可能性がある場合</li>
                  <li>虐待の疑いがある場合</li>
                  <li>法令により開示が求められる場合</li>
                </ul>
              </div>

              {/* 第7条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">7. 退会・解約</h2>
                <p className="text-gray-600 mb-4">
                  サービスの解約をご希望の場合は、1ヶ月前までにお申し出ください。
                  月途中の解約の場合、日割り計算での返金はいたしかねます。
                </p>
                <p className="text-gray-600">
                  ※お子様の状況により、段階的な終了をご提案することがあります。
                </p>
              </div>

              {/* 第8条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">8. 免責事項</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    当事業所は最善のサービス提供に努めますが、以下の点についてご了承ください。
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>支援の効果には個人差があり、特定の結果を保証するものではありません</li>
                    <li>学校復帰や進学を保証するものではありません</li>
                    <li>医療行為は行いません（医療機関の受診が必要な場合はご案内します）</li>
                    <li>他の利用者様とのトラブルについて、当事業所は責任を負いかねます</li>
                  </ul>
                </div>
              </div>

              {/* 第9条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">9. 個人情報の取り扱い</h2>
                <p className="text-gray-600">
                  お預かりした個人情報は、プライバシーポリシーに基づき適切に管理します。
                  詳細は<Link href="/privacy" className="text-primary hover:underline">プライバシーポリシー</Link>をご確認ください。
                </p>
              </div>

              {/* 第10条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">10. 利用規約の変更</h2>
                <p className="text-gray-600">
                  本規約は、法令の改正やサービス内容の変更に応じて、
                  事前の通知をもって変更することがあります。
                  変更後の規約は、本ウェブサイトに掲載した時点から効力を生じます。
                </p>
              </div>

              {/* 第11条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">11. 準拠法・管轄裁判所</h2>
                <p className="text-gray-600">
                  本規約は日本法に準拠し、本規約に関する紛争については、
                  札幌地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>

              {/* お問い合わせ */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">12. お問い合わせ</h2>
                <p className="text-gray-600 mb-4">
                  本規約に関するご質問は、以下までお問い合わせください。
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


              {/* 重要事項 */}
              <div className="bg-amber-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-amber-900 mb-4">
                  重要事項
                </h3>
                <div className="space-y-3 text-amber-800">
                  <div className="flex gap-2">
                    <span className="text-amber-600">●</span>
                    <p>
                      <strong>医療行為について：</strong>
                      当事業所のサービスは教育・福祉的支援であり、医療行為ではありません。
                      必要に応じて医療機関をご紹介します。
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-600">●</span>
                    <p>
                      <strong>公的支援との併用：</strong>
                      助成制度や公的支援サービスとの併用も可能です。
                      詳しくはご相談ください。
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-amber-600">●</span>
                    <p>
                      <strong>学校との連携：</strong>
                      保護者様のご希望により、学校との連携も行います。
                    </p>
                  </div>
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