// https://github.com/bablubambal/All_logo_and_pictures/tree/main
// https://techicons.dev/icons/fastapi
import Section from '../../../../components/Section'

// frontend tech
import cssSvg from '../../../../assets/css.svg'
import htmlSvg from '../../../../assets/html.svg'
import javascriptSvg from '../../../../assets/javascript.svg'
// frontend framewords
import typescriptSvg from '../../../../assets/typescript.svg'
import angularSvg from '../../../../assets/angular.svg'
import reactSvg from '../../../../assets/react.svg'
// backend tech
import nodejsSvg from '../../../../assets/nodejs.svg'
import pythonSvg from '../../../../assets/python.svg'
import csSvg from '../../../../assets/csharp.svg'
// backend frameworks
import dotnetSvg from '../../../../assets/NET.svg'
import nestjsSvg from '../../../../assets/Nest.js.svg'
import fastapiSvg from '../../../../assets/FastAPI.svg'
// banco de dados
import mysqlSvg from '../../../../assets/mysql.svg'
import oracleSvg from '../../../../assets/oracle.svg'
import mongodbSvg from '../../../../assets/mongodb.svg'
import redisSvg from '../../../../assets/redis.svg'
// others
import kubernetes from '../../../../assets/Kubernetes.svg'
import Skill from './Skill'

export default function SectionSkills() {
  return (
    <Section>
      <Section.Title title="Habilidades" />
      <Section.Content>
        <ul className="flex flex-wrap gap-4 py-10 items-center justify-center max-w-[800px] mx-auto">
          <Skill src={htmlSvg} alt="HTML" />
          <Skill src={cssSvg} alt="CSS" />
          <Skill src={javascriptSvg} alt="JavaScript" />
          <Skill src={typescriptSvg} alt="TypeScript" />

          <Skill src={angularSvg} alt="Angular" />
          <Skill src={reactSvg} alt="React JS" />

          <Skill src={nodejsSvg} alt="Node JS" />
          <Skill src={nestjsSvg} alt="Nest JS" />

          <Skill src={pythonSvg} alt="Python" />
          <Skill src={fastapiSvg} alt="FastAPI" />

          <Skill src={csSvg} alt="C#" />
          <Skill src={dotnetSvg} alt=".NET" />

          <Skill src={mysqlSvg} alt="MySQL" />
          <Skill src={oracleSvg} alt="Oracle" />
          <Skill src={mongodbSvg} alt="MongoDB" />
          <Skill src={redisSvg} alt="Redis" />

          <Skill src={kubernetes} alt="Kubernetes" />
        </ul>
      </Section.Content>
    </Section>
  )
}
