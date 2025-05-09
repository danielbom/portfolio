import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'

import I18nDropdown from './I18nDropdown'
import LinksDropdown from './LinksDropdown'

export default function SectionHeader() {
  const { t } = useTranslation()
  return (
    <header className="flex justify-between py-10">
      <div className="text-3xl md:text-2xl">
        <span className="font-semibold italic">{'<DF/>'}</span> <span className="font-extrabold">Daniel Farina</span>
      </div>
      <ul className="hidden md:flex gap-4 text-lg items-center">
        <li className="hover:text-blue-400 transition transition-1s cursor-pointer">
          <Link to="about" smooth spy duration={500}>
            {t('header.about')}
          </Link>
        </li>
        <li className="hover:text-blue-400 transition transition-1s cursor-pointer">
          <Link to="projects" smooth duration={750}>
            {t('header.projects')}
          </Link>
        </li>
        <li className="hover:text-blue-400 transition transition-1s cursor-pointer">
          <Link to="contact" smooth duration={1000}>
            {t('header.contacts')}
          </Link>
        </li>
        {/* <li className="text-blue-400 px-3 border border-blue-400 hover:bg-blue-400 hover:text-white transition transition-1s">
          <a href="#">Blog</a>
        </li> */}
        <li className="flex items-center">
          <I18nDropdown />
        </li>
      </ul>
      <LinksDropdown />
    </header>
  )
}
