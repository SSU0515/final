// src/App.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { styled, createGlobalStyle } from "styled-components";

// ------- styled components -------
const GlobalStyle = createGlobalStyle`
@import url("../src/assets/font/Font.css");
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
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Home />
    </Container>
  );
}

export default App;
