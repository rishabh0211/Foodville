import styled from "styled-components";

export default styled.div`
  padding: 4rem 2rem 5rem 2rem;
  max-width: 104rem;
  margin: auto;

  .section-heading {
    text-align: center;
    font-size: 3.2rem;
  }

  .list-container {
    margin-top: 4rem;
  }

  .list-item-container {
    width: 100%;

    &:not(:first-child) {
      margin-top: 1.6rem;
    }
  }
`;