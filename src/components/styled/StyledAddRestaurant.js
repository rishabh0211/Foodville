import styled from "styled-components";
import theme from "../../styles/theme";

export default styled.div`
  
  .heading {
    font-size: 3.2rem;
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
    border: solid 1px ${({ theme: { colors } }) => colors.blue};
    padding: 1.6rem 2rem;
    font-size: 1.4rem;
    letter-spacing: .1rem;

    &:placeholder-shown + .form-label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4rem);
    }
  }

  .textarea {
    .form-label {
      transform: translateY(-23rem);
    }

    .form-control {
      height: 20rem;
      resize: none;
      font-family: ${theme.fonts.Montserrat};
      font-size: 1.4rem;
      &:placeholder-shown + .form-label {
        transform: translateY(-19rem);
      }
    }
  }

  .btn-container {
    display: flex;
    margin-top: 2rem;

    > * {
      width: 14rem;
    }

    .save-btn {

    }

    .cancel-btn {
      margin-left: 1.4rem;
      font-size: 1.4rem;
    }
  }
`;