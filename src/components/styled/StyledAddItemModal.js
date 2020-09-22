import styled from "styled-components";
import { hex2rgba } from "../../utils";
import { media } from "../../styles";

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${(props) => hex2rgba(props.theme.colors.black, 0.5)};
  z-index: 11;

  .modal {
    background: ${(props) => props.theme.colors.white};
    padding: 4rem 8.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80rem;
    width: calc(100% - 4rem);
    ${media.tablet`
      padding: 2rem;
    `}
  }

  .heading {
    font-size: 3.2rem;
    text-transform: capitalize;
  }

  .form {
    max-width: 40rem;
    margin-top: 4rem;
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
      transform: translateY(-18rem);
    }

    .form-control {
      height: 15rem;
      resize: none;
      font-size: 1.4rem;
      &:placeholder-shown + .form-label {
        transform: translateY(-14rem);
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