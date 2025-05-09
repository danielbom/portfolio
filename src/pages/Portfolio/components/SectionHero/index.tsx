import { Link } from 'react-scroll'

import heroImage from '../../../../assets/professional-programmer-working-late-dark-office.jpg'

export default function SectionHero() {
  return (
    <section className="flex gap-5 flex-1 pb-20 flex-col-reverse md:flex-row">
      <div className="flex-1 flex items-center">
        <div>
          <h2 className="font-extrabold text-2xl mb-4">Olá, meu nome é Daniel Farina, e eu sou um programador!</h2>
          <p className="mb-12">Desenvolvo APIs e páginas web com as ferramentas mais populares do mercado.</p>
          <Link
            to="contact"
            smooth
            duration={1000}
            as="button"
            className="rounded-sm bg-blue-400 text-white px-4 py-2 text-xl cursor-pointer hover:bg-blue-500 transition duration-1s"
          >
            Me contrate
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
