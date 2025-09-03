"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navigation = [
  { 
    name: '支援メニュー', 
    href: '/services',
    dropdown: [
      { name: 'AIで学ぶ', href: '/ai', isNew: true },
      { name: '高卒認定サポート', href: '/kounin' },
      { name: '受験個別', href: '/juken' },
    ]
  },
  { name: '制度による支援', href: '/welfare' },
  { name: 'オンライン支援', href: '/online' },
  { name: '初回相談・見立て', href: '/assessment' },
  { name: 'ゴール設計', href: '/goal-setting' },
  { name: '実例と歩み', href: '/cases' },
  { name: '料金・プラン', href: '/pricing' },
  { name: '受給者証ガイド', href: '/voucher-guide' },
  { name: '保護者さま向け', href: '/parents' },
  { name: '私たちについて', href: '/about' },
  { name: 'よくある質問', href: '/faq' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-start">
              <span className="text-xl font-bold text-heading">みらいの学び場</span>
              <span className="text-xs text-gray-500">札幌の不登校支援</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-48 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                      openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="py-1">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        すべて見る
                      </Link>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                          {subItem.isNew && (
                            <span className="ml-2 text-xs font-semibold text-blue-600">New!</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="ml-6 flex items-center gap-4 border-l pl-6">
              <a
                href="tel:0111234567"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                aria-label="電話で問い合わせる"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">011-123-4567</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                無料相談を予約
              </Link>
            </div>
          </div>
          
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">メインメニューを開く</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 animate-slideIn">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex flex-col items-start" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-xl font-bold text-heading">みらいの学び場</span>
              <span className="text-xs text-gray-500">札幌の不登校支援</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">閉じる</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                            {subItem.isNew && (
                              <span className="ml-2 text-xs font-semibold text-blue-600">New!</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <a
                  href="tel:0111234567"
                  className="flex items-center justify-center gap-2 rounded-md bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  011-123-4567
                </a>
                <Link
                  href="/contact"
                  className="block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  無料相談を予約
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}