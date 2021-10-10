import React from "react";
import styled from "styled-components";

const StyledCard = styled.button`
  height: 45%;
  width: 15%;
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`;

const ImageContainer = styled.div`
  height: 70%;
`;

const Image = styled.img`
  width: 90%;
`;

const Name = styled.div`
  margin: 1rem 0.5rem;
`;

const Card = (props) => {
  const { clickHandler, name, id, imgSrc } = props;
  return (
    <StyledCard key={id} onClick={(e) => clickHandler({ e, id })}>
      <ImageContainer>
        <Image src={imgSrc} />
      </ImageContainer>
      <Name>{name}</Name>
    </StyledCard>
  );
};

export default Card;
