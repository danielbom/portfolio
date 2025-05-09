import { Mail, MessageCircle, User } from 'lucide-react'

import Input from "./Input"

export default function ContactMeForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const values = Object.fromEntries(formData.entries())
        console.log('send email with values', values)
      }}
      className="flex flex-col gap-3 flex-1"
    >
      <Input icon={<User />}>
        {(className) => <input name="name" placeholder="Nome" type="text" className={className} />}
      </Input>
      <Input icon={<Mail />}>
        {(className) => <input name="email" placeholder="Email" type="email" className={className} />}
      </Input>
      <Input icon={<MessageCircle />}>
        {(className) => <textarea name="message" placeholder="Deixe uma mensagem" className={className} rows={4} />}
      </Input>
      <button
        className="bg-blue-400 text-white font-bold py-2 px-4 active:outline outline-2 outline-blue-400 hover:bg-blue-500 transition duration-1s"
        type="submit"
      >
        Enviar
      </button>
    </form>
  )
}
