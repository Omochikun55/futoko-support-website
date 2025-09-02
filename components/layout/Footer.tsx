import Link from 'next/link'

const navigation = {
  main: [
    { name: 'ホーム', href: '/' },
    { name: '支援メニュー', href: '/services' },
    { name: '初回相談・見立て', href: '/assessment' },
    { name: '実例と歩み', href: '/cases' },
    { name: '料金・プラン', href: '/pricing' },
  ],
  support: [
    { name: '保護者さま向け', href: '/parents' },
    { name: '私たちについて', href: '/about' },
    { name: 'よくある質問', href: '/faq' },
    { name: 'お問い合わせ', href: '/contact' },
    { name: 'ブログ', href: '/blog' },
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '/privacy' },
    { name: '利用規約', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-24" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        フッター
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <p className="text-lg font-bold text-heading">みらいの学び場</p>
            <p className="text-sm leading-6 text-gray-600">
              学校に行く・行かないをゴールにせず、本人と家族が安心して学べる選択肢を一緒に増やします。
            </p>
            <p className="text-sm text-gray-600">
              放課後等デイサービス「ぷろらぼ」運営
              <br />
              <a 
                href="https://pro-labo.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-700 transition-colors"
              >
                pro-labo.net
              </a>
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">サービス</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">サポート</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">法務</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">お問い合わせ</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <p className="text-sm leading-6 text-gray-600">
                      札幌市（円山周辺）
                    </p>
                  </li>
                  <li>
                    <p className="text-sm leading-6 text-gray-600">
                      オンライン対応可
                    </p>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm leading-6 text-primary hover:text-blue-700 font-medium"
                    >
                      無料相談を予約
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* 緊急連絡先 */}
        <div className="mt-16 border-t border-gray-900/10 pt-8">
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-amber-900 mb-3">緊急時の相談窓口</h3>
            <div className="grid gap-2 text-sm text-amber-800">
              <p>
                <span className="font-medium">北海道こころの健康相談:</span>{" "}
                <a href="tel:0570-064-556" className="hover:underline">0570-064-556</a>
              </p>
              <p>
                <span className="font-medium">札幌市精神保健福祉センター:</span>{" "}
                <a href="tel:011-622-0556" className="hover:underline">011-622-0556</a>
              </p>
              <p>
                <span className="font-medium">24時間子供SOSダイヤル:</span>{" "}
                <a href="tel:0120-0-78310" className="hover:underline">0120-0-78310</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} みらいの学び場. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}