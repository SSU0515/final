import React from "react";
import styled from "styled-components";
import logopng from "../assets/img/SUPace.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  max-width: 1920px;
  min-width: 1440px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px;
  color: white;
  z-index: 99;
  font-family: "nexonB";
  background: rgba(15, 15, 15, 0.8);
`;

const Logo = styled.div`
  img {
    width: 120px;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 60px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s;
  }

  a:hover {
    color: #fccc44;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <a href="#home">
          <img src={logopng} alt="Logo" />
        </a>
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="#home" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" rel="noopener noreferrer">
              About
            </a>
          </li>
          <li>
            <a href="#work" rel="noopener noreferrer">
              Work
            </a>
          </li>
          <li>
            <a href="#design" rel="noopener noreferrer">
              Design
            </a>
          </li>
          <li>
            <a href="#contact" rel="noopener noreferrer">
              Contact
            </a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
