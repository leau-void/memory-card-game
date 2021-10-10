import React from "react";
import styled from "styled-components";
import githubLogo from "../assets/githubLogo.png";

const StyledFooter = styled.footer`
  position: relative;
  height: 40px;
  padding: 3px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.span`
  margin: 0 0.5rem;
`;

const GitHubLink = styled.a`
  opacity: 0.8;
  &:hover  {
    opacity: 1;
  }
`;

const FooterBackground = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Copyright>Copyright © 2021 leau-void</Copyright>
        <GitHubLink href="https://github.com/leau-void/memory-card-game">
          <img src={githubLogo} alt="Github"></img>
        </GitHubLink>
      </FooterContent>
      <FooterBackground />
    </StyledFooter>
  );
};

export default Footer;
