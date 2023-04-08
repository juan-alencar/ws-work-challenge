import { Container, Profile, Section } from "@/styles/Pages/home";
import { Button } from "@/styles/components/button";
import Image from "next/image";
import ProfileImage from "../assets/Profile.png";
import Figma from "../assets/Figma.svg";
import * as Icons from "@iconscout/react-unicons";

export default function Home() {
  return (
    <Container>
      <Profile>
        <Image src={ProfileImage} height={200} width={200} alt=''></Image>
        <div>
          <h1>Juan Alencar</h1>
          <h2>FullStack Developer | UX Designer</h2>
          <p>João Pessoa, Paraíba, Brasil</p>

          <ul>
            <li>
              <a target='_blank' href='https://linkedin.com/in/juan-alencar'>
                <Icons.UilLinkedin size={24} />
              </a>
            </li>
            <li>
              <a target='_blank' href='https://github.com/juan-alencar'>
                <Icons.UilGithub size={24} />
              </a>
            </li>
            <li>
              <a target='_blank' href='https://wa.me/5583996975963'>
                <Icons.UilWhatsapp size={24} />
              </a>
            </li>
          </ul>
        </div>
      </Profile>

      <Section>
        <h1>Descrição</h1>
        <p>
          Neste projeto, utilizei o NextJS, um framework de desenvolvimento web
          React que oferece recursos modernos de roteamento, server-side
          rendering e code-splitting. Também foi utilizado a biblioteca React
          para a criação de componentes, juntamente com o Typescript para
          adicionar recursos de tipagem estática ao código e aumentar a
          segurança. Por fim, usei o Stitches, que é uma biblioteca de estilo
          CSS-in-JS que permite escrever CSS em JavaScript.
          <br />
          <br />
          Com essa combinação de tecnologias, foi possível criar essa aplicação
          simples, porém moderna, organizada e escalável, oferecendo uma
          experiência de usuário incrível. Usando NextJS, podemos melhorar a
          velocidade de carregamento da página, enquanto a utilização de
          componentes React torna a criação e gerenciamento de interfaces de
          usuário mais fácil. O Typescript nos ajuda a prevenir erros de
          digitação e de lógica, aumentando a segurança do código, enquanto o
          Stitches oferece uma maneira poderosa e flexível de estilizar nossos
          componentes.
        </p>
      </Section>

      <Section>
        <h1>Links Úteis</h1>
        <div>
          <Button size={"sm"}>
            <Icons.UilFolder /> REPOSITÓRIO DO PROJETO
          </Button>
          <Button size={"sm"}>
            <Image src={Figma} alt='figma' /> FIGMA
          </Button>
          <Button size={"sm"}>
            <Icons.UilServerNetwork /> PRODUÇÃO
          </Button>
        </div>
      </Section>
      <Section>
        <h1>Agradecimento</h1>
        <p>
          Gostaria de agradecer pela oportunidade de realizar o teste. Foi um
          desafio interessante e gostei muito de participar. Agradeço à equipe
          pelo tempo e esforço dedicados em avaliar meu desempenho. Foi uma
          experiência valiosa e estou feliz por ter tido a oportunidade de
          demonstrar minhas habilidades. Independentemente do resultado final,
          estou grato pela chance de ter participado e agradeço por todo o
          suporte oferecido.
        </p>
      </Section>
    </Container>
  );
}
