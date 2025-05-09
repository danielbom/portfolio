import { Globe, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function SectionHeader() {
  return (
    <header className="flex justify-between py-10">
      <div className="text-3xl md:text-2xl">
        <span className="font-semibold italic">{'<DF/>'}</span> <span className="font-extrabold">Daniel Farina</span>
      </div>
      <ul className="hidden md:flex gap-4 text-lg items-center">
        <li className="hover:text-blue-400 transition transition-1s cursor-pointer">
          <Link to="about" smooth spy duration={500}>
            Sobre
          </Link>
        </li>
        <li className="hover:text-blue-400 transition transition-1s cursor-pointer">
          <Link to="projects" smooth duration={750}>
            Projetos
          </Link>
        </li>
        <li className="hover:text-blue-400 transition transition-1s cursor-pointer">
          <Link to="contact" smooth duration={1000}>
            Contatos
          </Link>
        </li>
        <li className="text-blue-400 px-3 border border-blue-400 hover:bg-blue-400 hover:text-white transition transition-1s">
          <a href="#">Blog</a>
        </li>
        <li className="flex items-center">
          <a href="#" aria-label="Change Language">
            <Globe absoluteStrokeWidth />
          </a>
        </li>
      </ul>
      <MenuDropdown />
    </header>
  )
}

function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative md:hidden">
      <button className="cursor-pointer" onClick={() => setIsOpen((it) => !it)}>
        <Menu size={40} />
      </button>
      <LinksDropdown isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </div>
  )
}

interface LinksDropdownProps {
  isOpen: boolean
  onClick: () => void
}

function LinksDropdown({ isOpen, onClick }: LinksDropdownProps) {
  if (!isOpen) return null

  return (
    <ul className="absolute w-[calc(100vw-50px)] right-0 text-black bg-white shadow-md rounded-md px-5 py-2 text-center flex flex-col gap-3 text-lg">
      <li className="hover:text-blue-400 transition cursor-pointer">
        <Link to="about" smooth spy duration={500} onClick={onClick}>
          Sobre
        </Link>
      </li>
      <li className="hover:text-blue-400 transition cursor-pointer">
        <Link to="projects" smooth duration={750} onClick={onClick}>
          Projetos
        </Link>
      </li>
      <li className="hover:text-blue-400 transition cursor-pointer">
        <Link to="contact" smooth duration={1000} onClick={onClick}>
          Contatos
        </Link>
      </li>
      <li className="text-blue-400 px-3 border border-blue-400 hover:bg-blue-400 hover:text-white transition">
        <a href="#">Blog</a>
      </li>
      <li className="flex items-center justify-center">
        <a href="#" aria-label="Change Language" onClick={onClick}>
          <Globe absoluteStrokeWidth />
        </a>
      </li>
    </ul>
  )
}
