import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-unresolved
import Head from 'next/head';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Input from '../src/components/Input/index';
import Button from '../src/components/Button/index';

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

const QuizContainer = styled.div`
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
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> The Dummie Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();

                router.push(`quiz?name=${name}`);
                console.log('teste');
              }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos Jogar ${name}`}
              </Button>
            </form>
            <p>O quiz aleatorio sobre conhecimentos gerais mais inuteis... ou não.</p>
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
