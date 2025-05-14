export interface ProjectProps {
  name: string
  image: string
  link?: string
  description?: React.ReactNode
  children?: React.ReactNode
}

export default function Project({ name, image, link, description, children }: ProjectProps) {
  description = description ?? children
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
    <div className="group border rounded-lg shadow-md w-full max-w-[400px] md:w-[330px] xl:w-[400px] bg-gray-200 hover:bg-gray-300 transition-bg duration-300">
      <div className="px-4 pt-4">
        {renderImage()}
        <h3 className="text-lg font-bold">{name}</h3>
      </div>
      <div className="relative p-4">
        <p className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute group-hover:block w-full bg-gray-300 p-4 top-0 right-0 p-4 rounded-lg transition-opacity duration-300">{description}</p>
        <p className="line-clamp-none md:line-clamp-2 overflow-hidden">{description}</p>
      </div>
    </div>
  )
}
