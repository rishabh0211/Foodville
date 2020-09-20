import styled from "styled-components";

export default styled.div`
  height: 100%;

  .header {
    background: ${({ theme: { colors } }) => colors.lightestGray};
    padding: 2rem 0 2rem;
  }

  .bread-crumb {
    display: flex;
    align-items: center;
    max-width: 104rem;
    margin: auto;
    padding: 0 2rem;
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

  .middle-section {
    max-width: 104rem;
    margin: auto;
    padding: 4rem 2rem;
    width: 100%;
  }

  .heading {
    font-size: 3.2rem;
    font-weight: 600;
  }

  .order-count {
    text-transform: uppercase;
    margin-top: .4rem;
  }

  .order-list {
    margin-top: 4rem;
  }
`;