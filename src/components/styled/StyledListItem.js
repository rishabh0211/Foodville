import styled from "styled-components";

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

    .icon {
      &:first-child {
        margin-right: 1rem;
      }
    }
  }

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