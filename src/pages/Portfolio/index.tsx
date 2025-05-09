import SectionHeader from './components/SectionHeader'
import SectionHero from './components/SectionHero'
import SectionAbout from './components/SectionAbout'
import SectionSkills from './components/SectionSkills'
import SectionProjects from './components/SectionProjects'
import SectionContactMe from './components/SectionContactMe'

export default function Portfolio() {
  return (
    <div className="bg-blue-600 min-h-screen scroll-smooth">
      <div className="bg-indigo-900 text-white h-screen px-4 md:px-10 md:px-30 lg:px-40 xl:px-60 flex flex-col">
        <SectionHeader />
        <SectionHero />
      </div>
      <div className="bg-white text-black min-h-screen px-4 md:px-10 md:px-30 lg:px-40 xl:px-60 flex flex-col">
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
      </div>
      <div className="bg-indigo-900 text-white px-4 md:px-10 md:px-30 lg:px-40 xl:px-60">
        <SectionContactMe />
      </div>
    </div>
  )
}
