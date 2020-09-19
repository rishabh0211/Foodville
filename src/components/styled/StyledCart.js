import styled from "styled-components";

export default styled.div`
  position: sticky;
  top: 0;
  grid-column: 1 / span 5;
  height: fit-content;
  
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
  }

  .submit-btn {
    text-transform: uppercase;
    margin-top: 4rem;
  }
`;