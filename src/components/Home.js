import React from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import StyledHome from "./styled/StyledHome";
import theme from '../styles/theme';
import Navbar from "./Navbar";
import AppRouter from "../router/AppRouter";
import Footer from "./Footer";
import { getRestaurants } from "../actions";

const Home = ({ getRestaurants }) => {
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

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants())
  };
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);