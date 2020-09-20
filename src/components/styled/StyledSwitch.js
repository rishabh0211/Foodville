import styled from "styled-components";
import theme from "../../styles/theme";


export default styled.div`
  display: flex;
  height: 2.8rem;
  width: 6.4rem;
  border: solid .1rem ${({ theme: { colors } }) => colors.gray};

  > * {
    width: 33.3%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .minus-btn {
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% + 0.1rem));
      width: 0.8rem;
      height: 0.2rem;
      background: ${theme.colors.gray};
    }
  }

  .value {
    font-size: 1.2rem;
    font-weight: 700;
    cursor: default;
    color: ${theme.colors.orange};
  }

  .plus-btn {
    background: linear-gradient(${theme.colors.orange},${theme.colors.orange}), linear-gradient(${theme.colors.orange},${theme.colors.orange});
    background-position: center;
    background-size: 53% 1.5px,1.5px 40%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 22px;
    height: 26px;
  }
`;