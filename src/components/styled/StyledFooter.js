import styled from "styled-components";

export default styled.footer`
  padding: 4rem 0;
  background: ${({theme: {colors}}) => colors.lightestGray};
  text-align: center;

  .container {
    display: inline-block;
  };

  .header {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.6rem;
  }

  .heading-light {
    font-weight: 500;
  }
  .desc {
    color: ${({theme: {colors}}) => colors.darkGray};
    margin-top: 1.2rem;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    margin-top: 1.2rem;

    .icon:not(:first-child) {
      margin-left: 1.4rem;
    }
  }
`;