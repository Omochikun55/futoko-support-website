import type { Metadata } from "next";
import Link from "next/link";

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
              みらいの学び場（以下、「当事業所」といいます。）は、お客様の個人情報の重要性を認識し、
              その保護の徹底を図るため、以下のプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>

            <div className="space-y-12">
              {/* 第1条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第1条（個人情報の定義）</h2>
                <p className="text-gray-600">
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、
                  当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報、
                  及び容貌、指紋、声紋にかかるデータ、健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                </p>
              </div>

              {/* 第2条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第2条（個人情報の収集方法）</h2>
                <p className="text-gray-600">
                  当事業所は、お客様が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、
                  運転免許証番号などの個人情報をお尋ねすることがあります。また、お客様と提携先などとの間でなされたお客様の個人情報を含む取引記録や決済に関する情報を、
                  当事業所の提携先（情報提供元、広告主、広告配信先などを含みます。以下、「提携先」といいます。）などから収集することがあります。
                </p>
              </div>

              {/* 第3条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第3条（個人情報を収集・利用する目的）</h2>
                <p className="text-gray-600 mb-4">
                  当事業所が個人情報を収集・利用する目的は、以下のとおりです。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>当事業所サービスの提供・運営のため</li>
                  <li>お客様からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                  <li>お客様が利用中のサービスの新機能、更新情報、キャンペーン等及び当事業所が提供する他のサービスの案内のメールを送付するため</li>
                  <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li>利用規約に違反したお客様や、不正・不当な目的でサービスを利用しようとするお客様の特定をし、ご利用をお断りするため</li>
                  <li>お客様にご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                  <li>有料サービスにおいて、お客様に利用料金を請求するため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ol>
              </div>

              {/* 第4条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第4条（利用目的の変更）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>当事業所は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
                  <li>利用目的の変更を行った場合には、変更後の目的について、当事業所所定の方法により、お客様に通知し、または本ウェブサイト上に公表するものとします。</li>
                </ol>
              </div>

              {/* 第5条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第5条（個人情報の第三者提供）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li className="mb-4">
                    当事業所は、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく、第三者に個人情報を提供することはありません。
                    ただし、個人情報保護法その他の法令で認められる場合を除きます。
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                      <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                      <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                      <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                      <li>予め次の事項を告知あるいは公表し、かつ当事業所が個人情報保護委員会に届出をしたとき</li>
                    </ul>
                  </li>
                  <li>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                      <li>当事業所が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                      <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                      <li>個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* 第6条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第6条（個人情報の開示）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>当事業所は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                    <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                      <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                      <li>当事業所の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                      <li>その他法令に違反することとなる場合</li>
                    </ul>
                  </li>
                  <li>前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。</li>
                </ol>
              </div>

              {/* 第7条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第7条（個人情報の訂正および削除）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>お客様は、当事業所の保有する自己の個人情報が誤った情報である場合には、当事業所が定める手続きにより、当事業所に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。</li>
                  <li>当事業所は、お客様から前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</li>
                  <li>当事業所は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをお客様に通知します。</li>
                </ol>
              </div>

              {/* 第8条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第8条（個人情報の利用停止等）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>当事業所は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。</li>
                  <li>前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。</li>
                  <li>当事業所は、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをお客様に通知します。</li>
                  <li>前2項にかかわらず、利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、お客様の権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。</li>
                </ol>
              </div>

              {/* 第9条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第9条（プライバシーポリシーの変更）</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、お客様に通知することなく、変更することができるものとします。</li>
                  <li>当事業所が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
                </ol>
              </div>

              {/* 第10条 */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">第10条（お問い合わせ窓口）</h2>
                <p className="text-gray-600 mb-4">
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    事業所名：みらいの学び場<br />
                    住所：〒xxx-xxxx 北海道札幌市<br />
                    メールアドレス：info@example.jp<br />
                    電話番号：011-xxxx-xxxx
                  </p>
                </div>
              </div>

              {/* 制定日 */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-right text-gray-600">
                  制定日：2025年9月2日
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}