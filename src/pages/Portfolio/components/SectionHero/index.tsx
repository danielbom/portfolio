import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

import heroImage from '../../../../assets/professional-programmer-working-late-dark-office.jpg'

export default function SectionHero() {
  const { t } = useTranslation()
  return (
    <section className="flex gap-5 flex-1 pb-20 flex-col-reverse md:flex-row">
      <div className="flex-1 flex items-center">
        <div>
          <h2 className="font-extrabold text-2xl mb-4">{t('hero.hello')}</h2>
          <p className="mb-12">{t('hero.description')}</p>
          <Link
            to="contact"
            smooth
            duration={1000}
            as="button"
            className="rounded-sm bg-blue-400 text-white px-4 py-2 text-xl cursor-pointer hover:bg-blue-500 transition-colors"
          >
            {t('hero.hire-me')}
          </Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Professional Programmer Working Late"
          className="max-w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </section>
  )
}
