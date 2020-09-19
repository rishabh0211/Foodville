import styled from "styled-components";

export default styled.li`
  padding-bottom: 2.2rem;
  border-bottom: solid .1rem ${({theme: {colors}}) => colors.gray};
  position: relative;

  &:not(:first-child) {
    margin-top: 1.6rem;
  }

  .name {
    font-weight: 500;
  }

  .price {
    margin-top: 2rem;
    color: ${({theme: {colors}}) => colors.darkestGray};
  }

  .btn-add {
    padding: .8rem 2rem;
    text-transform: uppercase;
    color: ${({theme: {colors}}) => colors.orange};
    background: ${({theme: {colors}}) => colors.white};
    border: solid .1rem ${({theme: {colors}}) => colors.gray};
    position: absolute;
    bottom: 1.6rem;
    right: 0;
  }
`;