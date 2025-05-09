import { useTranslation } from 'react-i18next'

import Section from '../../../../components/Section'

// import ContactMeForm from './ContactMeForm'
import SocialMidias from './SocialMidias'

export default function SectionContactMe() {
  const {t} = useTranslation()
  return (
    <Section className="py-5 md:py-10" id="contact">
      <Section.Title title={t("contacts.title")} />
      <Section.Content className="flex flex-col lg:flex-row">
        {/* <ContactMeForm /> */}
        <SocialMidias />
      </Section.Content>
    </Section>
  )
}
