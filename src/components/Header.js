import React from "react";
import mushroomIcon from "../assets/mushroomIcon.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: relative;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: -10px;
`;

const TitleWrap = styled.div`
  position: relative;
  z-index: 99;
  width: 75%;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const HeaderBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <TitleWrap>
        <Title>
          The Mushroom Hunt
          <Icon src={mushroomIcon} />
        </Title>
        <SubTitle>How many unique specimens can you find?</SubTitle>
      </TitleWrap>
      {props.children}
      <HeaderBackground />
    </StyledHeader>
  );
};

export default Header;
