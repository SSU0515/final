// src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Helmet } from "react-helmet";
import { styled, createGlobalStyle } from "styled-components";

// ------- styled components -------
const GlobalStyle = createGlobalStyle`
/* reset & font */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #110f0f;
  overflow-x: hidden;
`;

function App() {
  return (
    <Container>
      <Helmet>
        <link rel="stylesheet" href="../src/assets/font/Font.css" />
      </Helmet>
      <GlobalStyle />
      <Header />
      <Home />
    </Container>
  );
}

export default App;
