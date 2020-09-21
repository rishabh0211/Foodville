import styled from "styled-components";

export default styled.nav`
  background: ${({ theme: { colors } }) => colors.darkBlue};
  padding: 2rem;
  color: ${({ theme: { colors } }) => colors.white};

  .nav-container {
    max-width: 100rem;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo__text {
    font-size: 1.5rem;
  }

  .logo__text-light {
    font-weight: 500;
    font-size: 1.4rem;
  }

  .nav-options {
    display: flex;
  }

  .nav-item {
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 2rem;
    }
    &.main {
      text-transform: uppercase;
    }
    &.name {
      opacity: 50%;
    }
  }

  .nav-login {
    position: relative;
    margin-left: 2rem;

    &::before {
      content: " ";
      width: 0.1rem;
      height: 75%;
      background: ${({ theme: { colors } }) => colors.white};
      position: absolute;
      top: 0.2rem;
      left: -1rem;
      cursor: auto;
    }
  }
`;