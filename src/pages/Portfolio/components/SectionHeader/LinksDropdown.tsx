import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import I18nDropdown from './I18nDropdown'
import { useTranslation } from 'react-i18next'

export default function LinksDropdown() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  function renderDropdown() {
    if (!isOpen) return null
    return (
      <ul className="absolute w-[calc(100vw-50px)] right-0 text-black bg-white border-grey-100 shadow-md rounded-md px-5 py-2 text-center flex flex-col gap-3 text-lg">
        <li className="hover:text-blue-400 transition cursor-pointer">
          <Link to="about" smooth spy duration={500} onClick={() => setIsOpen(false)}>
            {t('header.about')}
          </Link>
        </li>
        <li className="hover:text-blue-400 transition cursor-pointer">
          <Link to="projects" smooth duration={750} onClick={() => setIsOpen(false)}>
            {t('header.projects')}
          </Link>
        </li>
        <li className="hover:text-blue-400 transition cursor-pointer">
          <Link to="contact" smooth duration={1000} onClick={() => setIsOpen(false)}>
            {t('header.contacts')}
          </Link>
        </li>
        {/* <li className="text-blue-400 px-3 border border-blue-400 hover:bg-blue-400 hover:text-white transition">
      <a href="#">Blog</a>
    </li> */}
        <li className="flex items-center justify-center">
          <I18nDropdown />
        </li>
      </ul>
    )
  }

  return (
    <div
      className="relative md:hidden"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false)
        }
      }}
      tabIndex={-1}
    >
      <button className="cursor-pointer" aria-label="Menu Toolbar" onClick={() => setIsOpen((it) => !it)}>
        <Menu size={40} />
      </button>
      {renderDropdown()}
    </div>
  )
}
