import FacebookIcon from './FacebookIcon'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

export default function SocialMidias() {
  return (
    <div className="flex-1 flex flex-col gap-5 items-center justify-center py-8">
      <h3 className="text-xl">Minhas redes sociais</h3>
      <div className="flex gap-8">
        <a target="_blank" href="https://www.linkedin.com/in/dafarina/">
          <LinkedinIcon />
        </a>
        <a target="_blank" href="https://github.com/danielbom">
          <GithubIcon />
        </a>
        <a target="_blank" href="https://www.facebook.com/danielaugusto.rodriguesfarina">
          <FacebookIcon />
        </a>
      </div>
      <a className="text-blue-200 hover:underline text-xl" href="/resume-br.pdf" target="_blank">
        Baixe meu currículo
      </a>
      <a className="text-blue-200 hover:underline" href="https://github.com/danielbom/portfolio" target="_blank">
        Acesse o repositório desta página no GitHub
      </a>
    </div>
  )
}
