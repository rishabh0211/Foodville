import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import StyledHome from "./styled/StyledHome";
import theme from '../styles/theme';
import Navbar from "./Navbar";
import AppRouter from "../router/AppRouter";
import Footer from "./Footer";
import { getRestaurants, checkLogin } from "../actions";

const Home = ({ getRestaurants, checkLogin }) => {

  useEffect(() => {
    // checkLogin();
  }, []);

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
    getRestaurants: () => dispatch(getRestaurants()),
    checkLogin: () => dispatch(checkLogin())
  };
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);