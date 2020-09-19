import React from "react";
import { ThemeProvider } from "styled-components";

import StyledHome from "./styled/StyledHome";
import theme from '../styles/theme';
import Navbar from "./Navbar";
import AppRouter from "../router/AppRouter";
import Footer from "./Footer";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar />
        <section className="main-section">
          <AppRouter />
        </section>
        <Footer />
      </StyledHome>
    </ThemeProvider>
  )
}

export default Home;