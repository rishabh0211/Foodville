import styled from "styled-components";

export default styled.div`
  .header {
    background: ${({ theme: { colors } }) => colors.lightestGray};
    padding: 2rem 0 4rem;
  }

  .inner-container {
    max-width: 104rem;
    margin: auto;
    padding: 0 2rem;
  }

  .bread-crumb {
    display: flex;
  }

  .bread-crumb-item {
    position: relative;
    cursor: pointer;
    font-size: 1.2rem;
    color: ${({ theme: { colors } }) => colors.darkestGray};

    &:not(:first-child) {
      margin-left: 1rem;
      ::before {
        content: "/";
        position: absolute;
        left: -.7rem;
      }
    }
  }

  .name-container {
    display: flex;
    margin-top: 2rem;
    .image {
      width: 4rem;
    }
    .name {
      font-size: 3.2rem;
      margin-left: 2rem;
    }
  }

  .desc {
    margin-top: 1.6rem;
    color: ${({ theme: { colors } }) => colors.darkestGray};
  }

  .middle-section {
    max-width: 104rem;
    margin: auto;
    padding: 4rem 2rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 2rem;
  }

  .menu-container {
    grid-column: 1 / span 6;
  }

  .cart-container {
    grid-column: 8 / span 5;
    /* display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(5, 1fr); */
  }

  .heading {
    font-size: 3.2rem;
    font-weight: 600;
  }

  .item-count {
    margin-top: .4rem;
  }

  .menu-list {
    margin-top: 4rem;
  }
`;