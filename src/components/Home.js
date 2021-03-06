import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import StyledHome from "./styled/StyledHome";
import theme from '../styles/theme';
import Navbar from "./Navbar";
import AppRouter from "../router/AppRouter";
import Footer from "./Footer";
import Loader from "./Loader";

const Home = ({ isLoading }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHome>
        <Navbar />
        {isLoading && <Loader />}
        <section className="main-section">
          <AppRouter />
        </section>
        <Footer />
      </StyledHome>
    </ThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);