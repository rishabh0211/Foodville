import React from "react";
import { ThemeProvider } from "styled-components";

import StyledHome from "./styled/StyledHome";
import theme from '../styles/theme';
import Navbar from "./Navbar";
import AppRouter from "../router/AppRouter";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar />
        <section className="main-section">
          <AppRouter />
        </section>
      </StyledHome>
    </ThemeProvider>
  )
}

export default Home;