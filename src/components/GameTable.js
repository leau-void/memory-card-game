import React from "react";
import Card from "./Card";
import cardData from "../data/cardData";
import styled from "styled-components";

const randomizer = (arr) =>
  [...arr]
    .sort(() => Math.random() * 2 - 1)
    .sort(() => Math.random() * 2 - 1)
    .sort(() => Math.random() * 2 - 1)
    .sort(() => Math.random() * 2 - 1)
    .sort(() => Math.random() * 2 - 1);

const StyledGameTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 70vh;
  align-items: stretch;
  margin: 1rem;
`;

const GameTable = (props) => {
  const { clickHandler } = props;
  const randomizedData = randomizer(cardData);
  return (
    <StyledGameTable>
      {randomizedData.map((card) => (
        <Card {...{ clickHandler, ...card }} />
      ))}
    </StyledGameTable>
  );
};

export default GameTable;
