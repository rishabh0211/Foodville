import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${fonts.Montserrat};
    font-size: 1.4rem;
    background: ${colors.white};
    color: ${colors.blue};
    margin: auto;

    &.hidden {
      overflow: hidden;
    }
  }

  ::selection {
    background-color: ${colors.darkBlue};
    color: ${colors.lightGray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: .2s all;
    cursor: pointer;

    &:hover,
    &:focus {

    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;
    font-family: ${theme.fonts.Montserrat};

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  p {
    margin: 0;
  }

  .btn {
    padding: 1.2rem 2rem;
    background: ${colors.orange};
    color: ${colors.white};
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .btn-secondary {
    padding: .8rem 2rem;
    text-transform: uppercase;
    color: ${colors.orange};
    background: ${colors.white};
    border: solid .1rem ${colors.gray};
    font-size: 1rem;
  }

  .empty-msg {
    margin-top: 3rem;
    font-size: 1.4rem;
  }

  .err-msg {
    margin: 1rem 0;
    color: ${colors.red};
  }

`;

export default GlobalStyle;
