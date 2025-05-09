import { Trans, useTranslation } from 'react-i18next'

import Section from '../../../../components/Section'

import About from './AboutRow'

import ipbImage from '../../../../assets/ipb_estig_ap_1.jpg'
import utfprImage from '../../../../assets/utfpr-nova-2022jpg.jpg'
import atlaEnsinoImage from '../../../../assets/atla.jpg'
import viptechImage from '../../../../assets/viptech.png'

const components = [<p />, <p />, <b />]

export default function SectionAbout() {
  const {t} = useTranslation()
  return (
    <Section id="about" className="flex-1 py-5 md:py-10">
      <Section.Title title={t("about.title")} />
      <Section.Content>
        <About>
          <About.Image
            link="https://www.utfpr.edu.br/campus/campomourao"
            src={utfprImage}
            alt="Universidade Tecnológica Federal do Paraná (UTFPR)"
          />
          <About.Text>
            <p>
              <Trans i18nKey="about.utfpr.1" values={{ age: age() }} components={components} />
            </p>
            <p>
              <Trans i18nKey="about.utfpr.2" components={components} />
            </p>
            <p>
              <Trans i18nKey="about.utfpr.3" components={components} />
            </p>
          </About.Text>
        </About>
        <About>
          <About.Image link="https://atlaensino.com/public/landing" src={atlaEnsinoImage} alt="ATLA Ensino" />
          <About.Text>
            <p>
              <Trans i18nKey="about.atla.1" components={components} />
            </p>
            <p>
              <Trans i18nKey="about.atla.2" components={components} />
            </p>
            <p>
              <Trans i18nKey="about.atla.3" components={components} />
            </p>
          </About.Text>
        </About>
        <About>
          <About.Image link="https://www.viptech.com.br" src={viptechImage} alt="Viptech" />
          <About.Text>
            <p>
              <Trans i18nKey="about.viptech.1" components={components} />
            </p>
            <p>
              <Trans i18nKey="about.viptech.2" components={components} />
            </p>
          </About.Text>
        </About>
        <About>
          <About.Image link="https://ipb.pt/pt" src={ipbImage} alt="Instituto Politécnico de Bragança (IPB)" />
          <About.Text>
            <p>
              <Trans i18nKey="about.ipb.1" components={components} />
            </p>
            <p>
              <Trans i18nKey="about.ipb.2" components={components} />
            </p>
          </About.Text>
        </About>
      </Section.Content>
    </Section>
  )
}

function age() {
  const now = new Date()
  let age = now.getFullYear() - 1998 - 1
  if (now.getMonth() === 11 && now.getDate() >= 7) age++
  return `${age} anos`
}
