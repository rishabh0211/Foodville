import styled from "styled-components";
import { media } from "../../styles";

export default styled.li`
  padding-bottom: 2.2rem;
  border-bottom: solid .1rem ${({ theme: { colors } }) => colors.gray};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right {
    display: none;
    .icon {
      cursor: pointer;
      &:first-child {
        margin-right: 1rem;
      }
    }
    ${media.tablet`
      display: block;
    `}
  }


  &:hover {
    .right {
      display: block;
    }
  }

  &:not(:first-child) {
    margin-top: 1.6rem;
  }

  .name {
    font-weight: 500;
  }

  .price {
    margin-top: 2rem;
    color: ${({ theme: { colors } }) => colors.darkestGray};
  }

  .btn-container {
    position: absolute;
    bottom: 1.6rem;
    right: 0;
  }

  .btn-add {
    padding: .8rem 2rem;
    text-transform: uppercase;
    color: ${({ theme: { colors } }) => colors.orange};
    background: ${({ theme: { colors } }) => colors.white};
    border: solid .1rem ${({ theme: { colors } }) => colors.gray};
  }
`;