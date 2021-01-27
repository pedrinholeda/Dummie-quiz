/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

const QuizLogo = styled.div`
  margin: auto;
  display: block;

  img {
    margin-left: 3vw;
  }

  @media screen and (max-width: 500px) {
    margin: 0;

    img {
      margin-left: 24vw;
      height: 50px;
      margin-top: 22vh;
    }
  }
`;

export default function Logo(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <QuizLogo {...props}>
      <a href="https://pedrinholeda.github.io">
        <img src="https://i.imgur.com/C1QbPM7.png" alt="Logo Quiz" />
      </a>
    </QuizLogo>
  );
}
