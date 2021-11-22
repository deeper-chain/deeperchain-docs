import React, { useState, useEffect } from 'react'
import MobileMenu from '../MobileMenus/MobileMenu'
import { useSiteMetadata } from '../Hooks/use-site-metadata'
import cx from 'classnames'
import DocsButton from '../DocsButton'
import DropDownMenu from './DropDownMenu'
import { SearchDocs } from '../search-ui'
import ThemeToggle from '../ThemeToggle'
import MainNav from '../MainNav'
import useScrollListener from '../Hooks/use-scroll-listener'

import Link from '../Link'

export default function Header() {
  const scroll = useScrollListener()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleMenu = () => setIsMobileNavOpen(!isMobileNavOpen)
  const navItems = MainNav.global()

  const { siteMetadata } = useSiteMetadata()

  useEffect(() => {
    isMobileNavOpen
      ? (document.body.style.overflow = `hidden`)
      : (document.body.style.overflow = `unset`)
  }, [isMobileNavOpen])

  useEffect(() => {
    /* TODO: add into context */
    if (scroll.y > 30) {
      setIsScrolled(true)
    } else if (scroll.y < 1) {
      setIsScrolled(false)
    }
  }, [scroll.y])

  return (
    <header
      className={cx(
        'sticky top-0 z-50 border-b border-gray-200 dark:border-substrateDarkThemeGrey bg-white dark:bg-substrateDarkest'
      )}
    >
      <div className="px-4 xl:px-12">
        <div
          className={cx(
            'flex items-center justify-between transition-height ease-in-out',
            {
              'h-24': !isScrolled,
              'h-16': isScrolled,
            }
          )}
        >
        
          {/* ------------------ */}
          {/* Mobile Navigation */}
          {/* ------------------ */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => toggleMenu()}
          >
            <svg
              className="fill-current text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="16"
              viewBox="0 0 24 16"
            >
              <path d="M0 14.6667C0 15.403 0.596954 16 1.33333 16H22.6667C23.403 16 24 15.403 24 14.6667C24 13.9303 23.403 13.3333 22.6667 13.3333H1.33333C0.596954 13.3333 0 13.9303 0 14.6667ZM0 8C0 8.73638 0.596954 9.33333 1.33333 9.33333H22.6667C23.403 9.33333 24 8.73638 24 8C24 7.26362 23.403 6.66667 22.6667 6.66667H1.33333C0.596954 6.66667 0 7.26362 0 8ZM1.33333 0C0.596954 0 0 0.596954 0 1.33333C0 2.06971 0.596954 2.66667 1.33333 2.66667H22.6667C23.403 2.66667 24 2.06971 24 1.33333C24 0.596954 23.403 0 22.6667 0H1.33333Z" />
            </svg>
          </div>
          {isMobileNavOpen && (
            <MobileMenu
              toggleMenu={toggleMenu}
              navItems={navItems}
              // currentLang={locale}
              // langConfig={config}
            />
          )}
          {/* ------------------ */}
          {/* Desktop Navigation */}
          {/* ------------------ */}
          <nav className="hidden lg:flex lg:justify-between lg:items-center  w-full">
            <div className="w-2/3 max-w-3xl flex justify-evenly">
              {navItems.map((section, index) => {
                return (
                  <div key={index}>
                    <DropDownMenu index={index} menuData={section} />
                  </div>
                )
              })}
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <div>
                <SearchDocs />
              </div>
              <div className="pl-8 pr-6">
                <DocsButton />
              </div>
              {/* <div className="w-6 h-6">
                <ThemeToggle />
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
