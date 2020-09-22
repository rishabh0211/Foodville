import styled from "styled-components";
import { media } from "../../styles";

export default styled.div`
  padding: 4rem 2rem 5rem 2rem;
  max-width: 104rem;
  margin: auto;

  .header {
    text-align: center;
    ${(props) => props.isRestaurantOwner && {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "left"
  }}

    .section-heading {
      font-size: 3.2rem;
      ${media.tablet`
        font-size: 2.4rem;
      `}
    }

    .add-btn {
      padding: 1.2rem 5rem;
      ${media.tablet`
        padding: 1rem 2rem;
      `}
    }
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