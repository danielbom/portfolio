interface SkillProps {
  src: string
  alt: string
}

export default function Skill({ src, alt }: SkillProps) {
  return (
    <li className="relative group hover:scale-[1.5] transition-transform">
      <img src={src} alt={alt} className="w-12 h-12 md:w-16 md:h-16" />
      <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm text-nowrap px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {alt}
      </span>
    </li>
  )
}
