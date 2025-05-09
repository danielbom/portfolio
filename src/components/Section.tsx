function SectionTitle({ title }: { title: string }) {
  return <h1 className="font-bold text-3xl md:text-4xl pb-5 md:pb-10">{title}</h1>
}

function SectionContent(props: React.HTMLAttributes<HTMLElement>) {
  return <div {...props} />
}

export default Section;function Section(props: React.HTMLAttributes<HTMLElement>) {
  return <section {...props} />
}

Section.Title = SectionTitle
Section.Content = SectionContent
