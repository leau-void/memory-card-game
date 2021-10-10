import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import GameTable from "./components/GameTable";
import Footer from "./components/Footer";
import styled from "styled-components";
import forestBackground from "./assets/forestBackground.jpg";

const StyledApp = styled.div`
  background: center / cover no-repeat url(${forestBackground});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    if (score > bestScore) setBestScore(score);
  }, [score, bestScore]);

  const clickHandler = ({ e, id }) => {
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
    } else {
      setScore(score + 1);
      setClicked([...clicked, id]);
    }
  };

  return (
    <StyledApp>
      <Header>
        <Scoreboard {...{ score, bestScore }} />
      </Header>
      <GameTable {...{ clickHandler }} />
      <Footer />
    </StyledApp>
  );
}

export default App;
