import { Globe } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function I18nDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    console.log(i18n)
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  function renderDropdown() {
    if (!isOpen) return null
    return (
      <ul className="absolute right-0 text-black bg-white border border-grey-100 shadow-md rounded-md p-2 text-center flex flex-col gap-3 text-lg">
        <li className="cursor-pointer w-full hover:underline px-1 rounded" onClick={() => changeLanguage('pt')}>
          PT
        </li>
        <li className="cursor-pointer w-full hover:underline px-1 rounded" onClick={() => changeLanguage('en')}>
          EN
        </li>
      </ul>
    )
  }

  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false)
        }
      }}
      tabIndex={-1}
    >
      <button type="button" aria-label="Change Language" onClick={() => setIsOpen((it) => !it)}>
        <Globe absoluteStrokeWidth />
      </button>
      {renderDropdown()}
    </div>
  )
}
