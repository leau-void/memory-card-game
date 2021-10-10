import React from "react";
import styled from "styled-components";

const StyledScoreboard = styled.div`
  position: relative;
  z-index: 99;
  margin-left: auto;
  font-size: 1.5rem;
  min-width: 15%;
  border: 2px solid black;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  gap: 1rem;
`;

const StyledScore = styled.span`
  color: #154a11;
`;

const StyledBestScore = styled.span`
  color: #131040;
`;

const Scoreboard = (props) => {
  const { score, bestScore } = props;

  return (
    <StyledScoreboard>
      <div>
        Score: <StyledScore>{score}</StyledScore>
      </div>
      <div>
        Best Score: <StyledBestScore>{bestScore}</StyledBestScore>
      </div>
    </StyledScoreboard>
  );
};

export default Scoreboard;
