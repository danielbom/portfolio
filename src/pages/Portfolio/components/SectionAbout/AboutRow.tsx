import { ImgHTMLAttributes } from 'react'

export default function About({ children }: { children?: React.ReactNode }) {
  return <div className="flex lg:flex-row odd:lg:flex-row-reverse group flex-col pb-10 gap-10">{children}</div>
}

About.Image = AboutImage
About.Text = AboutText

interface AboutImageProps extends React.DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  link: string
}

function AboutImage({ link, ...props }: AboutImageProps) {
  return (
    <div className="flex justify-center">
      <div className="flex-1 max-w-[300px]">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            {...props}
            className="rounded-lg hover:scale-[1.5] lg:hover:-translate-x-[25%] group-odd:lg:hover:translate-x-[25%] lg:hover:translate-y-[25%] transition"
          />
        </a>
      </div>
    </div>
  )
}

function AboutText({ children }: { children?: React.ReactNode }) {
  return <div className="flex-1 flex flex-col gap-6">{children}</div>
}
