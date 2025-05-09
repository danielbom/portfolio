import { useRef } from 'react'

export interface ProjectProps {
  name: string
  image: string
  link?: string
  description?: React.ReactNode
  children?: React.ReactNode
}

export default function Project({ name, image, link, description, children }: ProjectProps) {
  description = description ?? children
  const popupRef = useRef<HTMLDivElement>(null)
  function renderImage() {
    const img = <img src={image} alt={name} className="w-full h-[200px] md:h-[150px] object-contain rounded-md mb-4" />
    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {img}
        </a>
      )
    } else {
      return img
    }
  }
  return (
    <div
      className="group border rounded-lg shadow-md w-full max-w-[400px] md:w-[330px] xl:w-[400px] bg-gray-200 hover:bg-gray-300 p-4 transition duration-1s"
      onMouseEnter={(e) => {
        if (popupRef.current) {
          popupRef.current.style.left = `${e.clientX + 10}px`
          popupRef.current.style.top = `${e.clientY}px`
        }
      }}
      onMouseMove={(e) => {
        if (popupRef.current) {
          popupRef.current.style.left = `${e.clientX + 10}px`
          popupRef.current.style.top = `${e.clientY}px`
        }
      }}
      onMouseLeave={() => {
        if (popupRef.current) {
          popupRef.current.style.left = ''
          popupRef.current.style.top = ''
        }
      }}
    >
      {renderImage()}
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="relative">
        <p className="line-clamp-none md:line-clamp-4">{description}</p>
        <div
          ref={popupRef}
          className="absolute hidden group-hover:hidden md:group-hover:block bg-gray-700 text-white rounded p-2 w-[400px] z-10 text-lg popup"
          style={{ position: 'fixed' }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}
