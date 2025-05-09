import { Trans, useTranslation } from 'react-i18next'

import Section from '../../../../components/Section'
import Project from './Project'

import rocketseatImage from '../../../../assets/rocketseat-logo.png'
import greenLifeImage from '../../../../assets/green-life.png'
import surfApiImage from '../../../../assets/surf-api.png'
import saveLinksImage from '../../../../assets/save-links-white.png'
import aocImage from '../../../../assets/advent-of-code.jpeg'
import forksimImage from '../../../../assets/forksim.png'
import virtualPetImage from '../../../../assets/virtual-pet.png'
import safeEatImage from '../../../../assets/safe-eat.png'

export default function SectionProjects() {
  const { t } = useTranslation()
  return (
    <Section className="py-5 md:py-10" id="projects">
      <Section.Title title={t('projects.title')} />
      <Section.Content className="flex flex-wrap justify-evenly gap-6">
        <Project name="Safe Eat" image={safeEatImage} link="https://github.com/danielbom/safe-eat">
          {t('projects.safe-eat.description')}
        </Project>
        <Project name="Green Life" image={greenLifeImage} link="https://github.com/danielbom/green-life">
          {t('projects.green-life.description')}
        </Project>
        <Project
          name={t('projects.rocketseat.title')}
          image={rocketseatImage}
          link="https://github.com/danielbom/rocketseat"
        >
          {t('projects.rocketseat.description')}
        </Project>
        <Project name="Surf API" image={surfApiImage} link="https://github.com/danielbom/api-of-rating-beaches-to-surf">
          <Trans
            i18nKey="projects.surf-api.description"
            components={[
              <></>,
              <a
                className="text-blue-400"
                href="https://github.com/waldemarnt/node-typescript-api/"
                target="_blank"
                rel="noopener noreferrer"
              />,
              <a
                className="text-blue-400"
                href="https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh"
                target="_blank"
                rel="noopener noreferrer"
              />,
            ]}
          />
        </Project>
        <Project name="Save Links" image={saveLinksImage} link="https://github.com/danielbom/save-links">
          {t('projects.save-links.description')}
        </Project>
        <Project name="Advent of Code" image={aocImage} link="https://github.com/danielbom/advent-of-code">
          {t('projects.aoc.description')}
        </Project>
        <Project
          name="Forksim"
          image={forksimImage}
          link="https://bibliotecadigital.ipb.pt/entities/publication/9ea612dd-5864-4bf2-9d39-0fbd09df08aa"
        >
          {t('projects.forksim.description')}
        </Project>
        <Project name="Virtual Pet" image={virtualPetImage} link="https://github.com/danielbom/virtual-pet">
          {t('projects.virtual-pet.description')}
        </Project>
      </Section.Content>
    </Section>
  )
}
