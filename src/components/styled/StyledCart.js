import styled from "styled-components";
import { media } from "../../styles";

export default styled.div`
  position: sticky;
  top: 0;
  grid-column: 1 / span 5;
  height: fit-content;

  ${media.tablet`
    max-width: 60rem;
    padding: 2rem;
  `}
  
  .heading {
    font-size: 3.2rem;
    font-weight: 600;
  }

  .item-count {
    margin-top: .4rem;
    text-transform: uppercase;
  }

  .items-list {
    margin-top: 4rem;
  }

  .subtotal-row {
    display: flex;
    justify-content: space-between;
    margin-top: 2.4rem;
    text-transform: capitalize;
    font-size: 1.6rem;
    font-weight: 700;
  }

  .submit-btn {
    text-transform: uppercase;
    margin-top: 4rem;
    font-weight: 700;
  }
`;