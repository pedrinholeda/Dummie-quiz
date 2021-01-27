import styled from "styled-components";
import React from "react";
import { useRouter } from "next/router";
// eslint-disable-next-line import/no-unresolved
import Head from "next/head";
import Logo from '../src/components/QuizLogo';
import db from "../db.json";
import Widget from "../src/components/Widget/index";
import Footer from "../src/components/Footer/index";
import GitHubCorner from "../src/components/GitHubCorner/index";
import QuizBackground from "../src/components/QuizBackground/index";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
          <title>Dummie Quiz</title>
        </Head>
      <QuizContainer>
      <Logo />
        <Widget>
          <Widget.Header>
            <h1> The Dummie Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();

                router.push(`quiz?name=${name}`);
                console.log("teste");
              }}
            >
              <input
                onChange={function (infosDoEvento) {
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                }}
                placeholder="diz ai seu nome "
              />
              <button type="submit" disabled={name.length === 0}>
                Vamos Jogar, {name}
              </button>
            </form>
            <p>O quiz sobre conhecimentos gerais inuteis.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Ainda não tem nenhum </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedrinholeda" />
    </QuizBackground>
  );
}
