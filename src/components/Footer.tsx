import React, { Fragment } from 'react'
import MainNav from './MainNav'
import Link from './Link'
import Icon from './Icon'
import { useSiteMetadata } from './Hooks/use-site-metadata'

export default function Footer() {
  const { siteMetadata } = useSiteMetadata()
  const navItems = MainNav.global()

  return (
    <footer className="w-full px-4 xl:px-12 bg-substrateDark text-white font-body">
      <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:pt-12 lg:pb-3 border-b-2 border-gray-600">
        <div className="w-52 lg:h-7 relative py-12 lg:p-0 transform transition-all duration-300 ease-in-out hover:opacity-50">
          <Link to={siteMetadata.substrateIO}>
            
          </Link>
        </div>
        <nav className="p-0 m-0 hidden xs:block lg:w-full lg:max-w-screen md:h-auto">
          <ul className="h-[640px] sm:h-auto m-0 p-0 list-none flex flex-wrap flex-col flex-start">
            {navItems.map((section, index) => {
              return (
                <li
                  className="m-0 pb-4 w-1/2 sm:w-full sm:flex sm:items-start text-base sm:text-lg"
                  key={index}
                >
                  <span className="block mb-4 font-semibold text-substrateGreen sm:w-28 leading-relaxed">
                    {section.name}
                  </span>
                  <ul className="m-0 p-0 list-none ml-0 sm:ml-7 sm:flex sm:flex-wrap sm:w-full text-sm sm:text-base sm:mt-0.5">
                    {section.subMenu.map((item, index) => {
                      const itemStyles =
                        'p-0 m-0 underline-anchor pb-4 sm:mr-6 leading-relaxed'
                      if (item.items) {
                        return (
                          <Fragment key={index}>
                            {item.items.map((each, index) => {
                              return (
                                <div className={itemStyles} key={index}>
                                  <Link to={each.link}>{each.linkTitle}</Link>
                                </div>
                              )
                            })}
                          </Fragment>
                        )
                      }
                      return (
                        <div className={itemStyles} key={index}>
                          <Link to={item.link}>{item.linkTitle}</Link>
                        </div>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className="h-auto pb-6 md:flex md:flex-row-reverse md:justify-between md:items-center">
        <div className="flex items-center py-4">
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.element}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="elementWhite"
              className="fill-current text-substrateWhite"
            />
          </a>
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.stackOverflow}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="stackOverflowWhite"
              className="fill-current text-substrateWhite"
            />
          </a>
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="github"
              className="h-6 w-6 fill-current text-substrateWhite"
            />
          </a>
          <a
            className="mr-11 md:mr-0 md:ml-9 transform transition-all duration-300 ease-in-out hover:opacity-50"
            href={siteMetadata.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              name="twitter"
              className="h-6 w-6 fill-current text-substrateWhite"
            />
          </a>
        </div>
        <div className="underline-anchor inline-flex flex-col md:flex-row py-6 text-[#DFE3EA] text-xs font-light">
          <div className="mb-4 md:mb-0 md:pr-8 inline-block">
            © {new Date().getFullYear()} DeeperNetwork Technologies{` `}All Rights
            Reserved{` `}
          </div>
          <div className="mb-4 md:mb-0 md:mr-8 inline-block">
            <a
              className="block cursor-pointer"
              href={siteMetadata.privacy}
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
          </div>

          <div className="mb-4 md:mb-0 md:mr-8 inline-block">
            <a
              className="block cursor-pointer"
              href={siteMetadata.terms}
              target="_blank"
              rel="noreferrer"
            >
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
