import React from "react";
import styled from "styled-components";

const StyledCard = styled.button`
  height: 45%;
  width: 15%;
  border: 1px solid black;
`;

const Card = (props) => {
  const { clickHandler, name, id, imgSrc } = props;
  return (
    <StyledCard key={id} onClick={(e) => clickHandler({ e, id })}>
      {name}
    </StyledCard>
  );
};

export default Card;
