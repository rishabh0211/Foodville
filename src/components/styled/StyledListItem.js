import styled from "styled-components";

export default styled.li`
  padding: 2rem;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  transition: box-shadow .2s ease-in-out;
  &:hover {
    box-shadow: 0 0.1rem 1rem rgba(0,0,0,0.2);
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