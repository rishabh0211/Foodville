import styled from "styled-components";
import { media } from "../../styles";

export default styled.li`
  padding: 2rem;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  transition: border-color .3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme: { colors } }) => colors.orange};
    .right {
      ${(props) => props.isRestaurantOwner && {
        display: "block"
      }}
    }
  }

  .right {
    display: none;
    margin-left: 1rem;
    .icon {
      &:first-child {
        margin-right: 1rem;
      }
    }
  }

  ${media.tablet`
    .right {
      ${(props) => props.isRestaurantOwner && {
        display: "block"
      }}
    }
  `}

  .header-row {
    display: flex;
  }
  .name {
    margin-left: 1.6rem;
  }
  .desc {
    margin-top: 1.2rem;
  }
`;