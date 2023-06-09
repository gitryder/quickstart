import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: hsl(39, 76%, 75%);
  color: hsla(220, 18%, 15%, 1);
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  letter-spacing: 0.01em;
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 1.7rem;
  }
`;

const Wave = styled.span`
  display: inline-block;
  animation: wave 0.5s infinite;
  transform-origin: 50% 50%;
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const Home = () => {
  return (
    <Main>
      <h1>
        quickstart <Wave>👋</Wave>
      </h1>
      <p>(Next.js, Styled-Components, Supabase, TanStack Query)</p>
    </Main>
  );
};

export default Home;
