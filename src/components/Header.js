import React from "react";
import styled from "styled-components";
import logopng from "../assets/img/SUPace.png";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 70px;
  color: white;
  z-index: 99;
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
        <img src={logopng} alt="Logo" />
      </Logo>
      <Nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Work</a>
          </li>
          <li>
            <a>Design</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
