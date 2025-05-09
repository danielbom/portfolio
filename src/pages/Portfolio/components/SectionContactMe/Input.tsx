interface InputProps {
  icon?: React.ReactNode
  children: (className: string) => React.ReactNode
}

export default function Input({ icon, children }: InputProps) {
  return (
    <div className="border border-white focus-within:outline outline-2 outline-white flex">
      {icon ? <div className="pl-2 py-2">{icon}</div> : null}
      {children('py-2 px-4 bg-transparent placeholder:text-white/90 outline-none w-full')}
    </div>
  )
}
