import React from "react";
import styled from "styled-components";

const StyledScoreboard = styled.div`
  position: relative;
  z-index: 99;
  margin-left: auto;
  font-size: 1.5rem;
  width: 25%;
`;

const StyledScore = styled.div``;

const StyledBestScore = styled.div``;

const Scoreboard = (props) => {
  const { score, bestScore } = props;

  return (
    <StyledScoreboard>
      <StyledScore>Score: {score}</StyledScore>
      <StyledBestScore>Best Score: {bestScore}</StyledBestScore>
    </StyledScoreboard>
  );
};

export default Scoreboard;
