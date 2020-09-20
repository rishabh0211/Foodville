import styled from "styled-components";

export default styled.li`
  padding: 2rem;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  transition: border-color .3s ease-in-out;
  &:hover {
    border-color: ${({ theme: { colors } }) => colors.orange};
  }
  cursor: pointer;
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