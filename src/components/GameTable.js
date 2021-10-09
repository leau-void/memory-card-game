import React from "react";
import Card from "./Card";
import cardData from "../data/cardData";
import styled from "styled-components";

const StyledGameTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 70vh;
  align-items: stretch;
  margin: 2rem;
`;

const GameTable = (props) => {
  const { clickHandler } = props;
  return (
    <StyledGameTable>
      {cardData.map((card) => (
        <Card {...{ clickHandler, ...card }} />
      ))}
    </StyledGameTable>
  );
};

export default GameTable;
