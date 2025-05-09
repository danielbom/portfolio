import Section from '../../../../components/Section'

import About from './AboutRow'

import ipbImage from '../../../../assets/ipb_estig_ap_1.jpg'
import utfprImage from '../../../../assets/utfpr-nova-2022jpg.jpg'
import atlaEnsinoImage from '../../../../assets/atla.jpg'
import viptechImage from '../../../../assets/viptech.png'

export default function SectionAbout() {
  return (
    <Section id="about" className="flex-1 py-5 md:py-10">
      <Section.Title title="Sobre" />
      <Section.Content>
        <About>
          <About.Image
            link="https://www.utfpr.edu.br/campus/campomourao"
            src={utfprImage}
            alt="Universidade Tecnológica Federal do Paraná (UTFPR)"
          />
          <About.Text>
            <p>
              Meu nome é <b>Daniel Farina</b>. Nasci no estado de São Paulo em 1998 ({age()}) e me formei em
              <b>Bacharel em Ciências da Computação</b> pela
              <b>Universidade Tecnológica Federal do Paraná</b> (UTFPR – Campus Campo Mourão, Brasil) em 2024, com dupla
              diplomação como <b>Mestre em Informática</b> pelo
              <b>Instituto Politécnico de Bragança</b> (IPB – Portugal).
            </p>

            <p>
              Durante a graduação, estudei estruturas de dados básicas (listas, pilhas, filas) e avançadas (grafos,
              árvores de busca). Também tive aulas de Inteligência Artificial, Sistemas Distribuídos, Compiladores,
              Visualização de Dados, entre outras disciplinas que me marcaram.
            </p>
            <p>
              Atuei como <b>monitor</b> na disciplina de Cálculo Numérico e como <b>instrutor auxiliar</b> em Redes de
              Computadores para alunos do ensino médio. Aproveitei todos os eventos acadêmicos, especialmente os
              minicursos e palestras da <b>Semana de Informática</b> (SEINFO).
            </p>
          </About.Text>
        </About>
        <About>
          <About.Image link="https://atlaensino.com/public/landing" src={atlaEnsinoImage} alt="ATLA Ensino" />
          <About.Text>
            <p>
              Fui estagiário na start-up <b>ATLA Ensino</b> em Campo Mourão, onde aprendi os fundamentos de aplicações
              web: funcionamento de servidores (backend/API) e desenvolvimento de aplicações web e móveis (frontend)
              utilizando <b>Angular 2</b>, <b>Ionic</b> e <b>Node.js</b>.
            </p>
            <p>
              Durante a implantação do sistema nas escolas de Campo Mourão, toda a equipe realizava visitas de suporte,
              auxiliando na instalação da aplicação nos celulares dos professores e ouvindo sugestões para melhorias e
              correções no sistema.
            </p>
            <p>
              Posteriormente, passei a ser responsável pela geração de relatórios, realizando agregações em um banco de
              dados <b>MongoDB</b> e renderizando os resultados com a biblioteca <b>PDF.js</b> no frontend.
            </p>
          </About.Text>
        </About>
        <About>
          <About.Image link="https://www.viptech.com.br" src={viptechImage} alt="Viptech" />
          <About.Text>
            <p>
              Antes de viajar para Portugal, fui contratado pela <b>Viptech</b>, também em Campo Mourão, onde tive
              contato com novas tecnologias, como implantação automatizada com <b>Azure DevOps Actions</b> e
              gerenciamento de microserviços usando <b>Kubernetes</b>. Tive meu primeiro contato profissional com o
              banco de dados relacional <b>MySQL</b> e, para a comunicação entre microserviços, utilizávamos o banco de
              dados em memória <b>Redis</b>.
            </p>
            <p>
              Trabalhei com <b>NestJS</b>, <b>FastAPI</b> e <b>React.js</b> no desenvolvimento de aplicações internas,
              além de utilizar <b>.NET</b> e <b>Angular 2</b> em projetos terceirizados. Nesse projeto, o banco de dados
              utilizado era o <b>Oracle</b>, com diversas triggers configuradas para garantir a consistência dos dados.
            </p>
          </About.Text>
        </About>
        <About>
          <About.Image link="https://ipb.pt/pt" src={ipbImage} alt="Instituto Politécnico de Bragança (IPB)" />
          <About.Text>
            <p>
              Em Bragança, Portugal, pude consolidar e aprofundar meus conhecimentos. Em equipe, desenvolvi uma
              aplicação móvel em <b>Kotlin</b> conectada a um servidor remoto (API), como projeto da disciplina de{' '}
              <b>Desenvolvimento Móvel</b>.
            </p>
            <p>
              Na disciplina de <b>Arquitetura de Software</b>, participei da construção de uma aplicação web voltada
              para a comunidade local. Também cursei <b>Engenharia de Processos de Negócio</b> e{' '}
              <b>Qualidade em Sistemas de Software</b>, onde aprendi sobre gestão de processos de negócios (BPM) e
              práticas de análise e identificação de erros.
            </p>
          </About.Text>
        </About>
      </Section.Content>
    </Section>
  )
}

function age() {
  const now = new Date()
  let age = now.getFullYear() - 1998 - 1
  if (now.getMonth() === 11 && now.getDate() >= 7) age++
  return `${age} anos`
}
