import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import StyledHome from "./styled/StyledHome";
import theme from '../styles/theme';
import Navbar from "./Navbar";
import AppRouter from "../router/AppRouter";
import Footer from "./Footer";
import { getRestaurants, checkLogin } from "../actions";
import Loader from "./Loader";

const Home = ({ user, getRestaurants, checkLogin, isLoading }) => {
  const history = useHistory();
  useEffect(() => {
    // if (!user || !!Object.keys(user).length) {
    //   history.push("/");
    // }
  }, []);

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

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants()),
    checkLogin: () => dispatch(checkLogin())
  };
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    user: state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);