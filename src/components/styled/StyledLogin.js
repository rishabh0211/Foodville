import styled from "styled-components";

export default styled.section`
  max-width: 104rem;
  margin: auto;
  padding: 4rem 2rem 5rem 2rem;

  .heading {
    font-size: 3.2rem;
    text-transform: capitalize;
  }

  .form {
    margin-top: 5rem;
    max-width: 40rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    
    &:not(:first-child) {
      margin-top: 2.4rem;
    }
  }

  .form-label {
    margin-top: .4rem;
    font-weight: 500;
    transition: .2s transform ease-in-out;
    margin-left: 2rem;
    display: flex;
    transform: translateY(-8rem);
  }

  .form-control {
    border: none;
    border: solid 1px ${({theme: {colors}}) => colors.blue};
    padding: 1.6rem 2rem;
    font-size: 1.4rem;
    letter-spacing: .1rem;

    &:placeholder-shown + .form-label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4rem);
    }
  }

  .login-btn {
    width: 20rem;
    margin-top: 2rem;
    padding: 1.4rem 2rem;
  }

  .signup-text {
    display: flex;
    margin-top: 2rem;
  }
  .signup-link {
    color: ${({theme: {colors}}) => colors.orange};
    margin-left: 1rem;
    cursor: pointer;
    position: relative;

    &::before {
      content: " ";
      height: .1rem;
      background: ${({theme: {colors}}) => colors.orange};
      width: 0;
      position: absolute;
      top: 100%;
      left: 0;
      transition: width 0.3s ease-in-out;
    }
    &:hover::before{
      width: 100%;
    }
  }
`;