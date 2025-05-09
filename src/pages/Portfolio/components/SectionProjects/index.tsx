import Section from '../../../../components/Section'
import Project from './Project'

import rocketseatImage from '../../../../assets/rocketseat-logo.png'
import greenLifeImage from '../../../../assets/green-life.png'
import surfApiImage from '../../../../assets/surf-api.png'
import saveLinksImage from '../../../../assets/save-links-white.png'
import aocImage from '../../../../assets/advent-of-code.jpeg'
import forksimImage from '../../../../assets/forksim.png'
import virtualPetImage from '../../../../assets/virtual-pet.png'
import safeEatImage from '../../../../assets/safe-eat.png'

export default function SectionProjects() {
  return (
    <Section className="py-5 md:py-10" id="projects">
      <Section.Title title="Projects" />
      <Section.Content className="flex flex-wrap justify-evenly gap-6">
        <Project name="Safe Eat" image={safeEatImage} link="https://github.com/danielbom/safe-eat">
          Este projeto é dividido em três partes: um frontend móvel desenvolvido em Kotlin para os clientes, um backend
          utilizando Java Spring, e um frontend web voltado para os restaurantes. A ideia é criar um aplicativo de
          delivery que permita aos usuários informar suas alergias ou restrições alimentares, possibilitando verificar
          se um produto é seguro para consumo. O objetivo é oferecer uma experiência personalizada e segura para pessoas
          com necessidades alimentares específicas, promovendo inclusão e acessibilidade.
        </Project>
        <Project name="Green Life" image={greenLifeImage} link="https://github.com/danielbom/green-life">
          Desenvolvido em grupo durante a faculdade, este projeto utilizou FastAPI no backend e MongoDB como banco de
          dados. O frontend foi criado com React.js, Typescript e Material-UI, resultando em uma aplicação funcional e
          escalável. O objetivo foi aplicar boas práticas de desenvolvimento e integração entre frontend e backend.
        </Project>
        <Project name="Projetos Rocketseat" image={rocketseatImage} link="https://github.com/danielbom/rocketseat">
          Uma coleção de projetos criados durante a Next Level Week da Rocketseat, explorando desde frontends web com
          React e Next.js, até aplicações móveis com React Native e Flutter, além de backends desenvolvidos com
          Express.js e Elixir.
        </Project>
        <Project name="Surf API" image={surfApiImage} link="https://github.com/danielbom/api-of-rating-beaches-to-surf">
          Este projeto é uma adaptação do trabalho de{' '}
          <a
            className="text-blue-400"
            href="https://github.com/waldemarnt/node-typescript-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Waldemar Neto
          </a>
          , inspirado em sua{' '}
          <a
            className="text-blue-400"
            href="https://www.youtube.com/watch?v=W2ld5xRS3cY&list=PLz_YTBuxtxt6_Zf1h-qzNsvVt46H8ziKh&index=2&ab_channel=WaldemarNeto-DevLab"
            target="_blank"
            rel="noopener noreferrer"
          >
            playlist no YouTube
          </a>
          . O projeto inclui mudanças e padronizações pessoais descritas no README. Ele realiza chamadas a APIs externas
          para obter informações sobre o vento, como direção e intensidade, e sobre as praias, como orientação em
          relação ao mar. Com esses dados, é possível calcular as melhores praias para surfar.
        </Project>
        <Project name="Save Links" image={saveLinksImage} link="https://github.com/danielbom/save-links">
          Um agregador de links desenvolvido com diversas tecnologias ao longo do tempo. Começou com JS, CSS e HTML,
          passou por uma refinação arquitetural e explorou frameworks como ELM, Vue.js, Mythril e, atualmente, React.js.
          O que começou como um projeto paralelo despretensioso se transformou em uma jornada enriquecedora por
          diferentes ferramentas e frameworks, resultando em um aplicativo simples, mas significativo, que acompanhou
          várias etapas da minha evolução como programador.
        </Project>
        <Project name="Advent of Code" image={aocImage} link="https://github.com/danielbom/advent-of-code">
          Este repositório reúne minhas soluções para os desafios do Advent of Code, com os desafios de 2015 resolvidos
          em Rust e os de 2016 em Go. Meu objetivo é explorar os desafios dos outros anos utilizando diferentes
          linguagens, aprimorando minhas habilidades e aprendendo novos conceitos ao longo do caminho.
        </Project>
        <Project
          name="Forksim"
          image={forksimImage}
          link="https://bibliotecadigital.ipb.pt/entities/publication/9ea612dd-5864-4bf2-9d39-0fbd09df08aa"
        >
          Projeto final de Graduação/Mestrado, Forksim é uma plataforma desenvolvida para executar e visualizar códigos
          em C com chamadas fork. Sua implementação envolveu conceitos avançados de preprocessamento de linguagens de
          programação e programação concorrente em sistemas Unix. O projeto utilizou ferramentas como React.js, FastAPI,
          tree-sitter e Docker Compose, sendo implementado nos servidores da universidade.
        </Project>
        <Project name="Virtual Pet" image={virtualPetImage} link="https://github.com/danielbom/virtual-pet">
          Desenvolvido para a disciplina de Linguagens de Programação na UTFPR, este projeto utilizou LUA e o framework
          LOVE para criar um jogo estilo Tamagotchi. Foi um desafio, especialmente para muitos alunos que estavam tendo
          sua primeira experiência com desenvolvimento de jogos. Apesar de alguns bugs e lógicas curiosas, alcançamos
          nosso objetivo: um jogo com funcionalidades como comer, beber, estudar, curar, dormir e até acariciar nosso
          pet, o Togepi do Pokémon, que exibe uma animação adorável. O jogo também inclui um minigame de jogo da velha
          integrado.
        </Project>
      </Section.Content>
    </Section>
  )
}
