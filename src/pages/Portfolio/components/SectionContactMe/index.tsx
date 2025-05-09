import Section from '../../../../components/Section'

// import ContactMeForm from './ContactMeForm'
import SocialMidias from './SocialMidias'

export default function SectionContactMe() {
  return (
    <Section className="py-5 md:py-10" id="contact">
      <Section.Title title="Entre em Contato" />
      <Section.Content className="flex flex-col lg:flex-row">
        {/* <ContactMeForm /> */}
        <SocialMidias />
      </Section.Content>
    </Section>
  )
}
