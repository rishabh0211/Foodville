import styled, { keyframes } from "styled-components";
import { media } from "../../styles";

export default styled.nav`
  background: ${({ theme: { colors } }) => colors.darkBlue};
  padding: 2rem;
  color: ${({ theme: { colors } }) => colors.white};

  .nav-container {
    max-width: 100rem;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .logo__text {
    font-size: 1.5rem;
  }

  .logo__text-light {
    font-weight: 500;
    font-size: 1.4rem;
  }

  .nav-options {
    display: flex;

    ${media.tablet`
      display: none;
    `}
  }

  .nav-item {
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 2rem;
    }
    &.main {
      text-transform: uppercase;
    }
    &.name {
      opacity: 50%;
    }
    ${media.tablet`
      padding: 2rem;
      text-transform: uppercase;
      &:not(:first-child) {
        margin-left: 0;
      }
    `}
  }

  .nav-login {
    position: relative;
    margin-left: 2rem;

    &::before {
      content: " ";
      width: 0.1rem;
      height: 75%;
      background: ${({ theme: { colors } }) => colors.white};
      position: absolute;
      top: 0.2rem;
      left: -1rem;
      cursor: auto;
    }
  }
  .mobile-links-container {
    visibility: hidden;
    position: absolute;
  }
  ${media.tablet`
    .mobile-links-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: 3;
      visibility: hidden;
      opacity: 0;
      &.active {
        visibility: visible;
        opacity: 1;
        .mobile-links {
          right: 0;
        }
      }
      .mobile-links {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 6.7rem;
        right: -30rem;
        width: 28rem;
        bottom: 0;
        box-shadow: -1rem 1rem 3rem rgba(0,0,0,0.8);
        transition: right .2s ease-in-out;
        background: ${({ theme: { colors } }) => colors.darkBlue};
      }
    }
  `}
`;

const topline = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(0, 1.3rem) rotate(0deg);
  }
  100% {
    transform: translate(0, 1.3rem) rotate(45deg);
  }
`;

const toplineBack = keyframes`
  0% {
		transform: translate(0, 1.3rem) rotate(45deg)
	}
	50% {
		transform: translate(0, 1.3rem) rotate(0deg)
	}
	100% {
		transform: translate(0, 0) rotate(0)
	}
`;

const middleLineBack = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const middleLine = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const bottomline = keyframes`
  0% {
		transform: translate(0, 0) rotate(0deg)
	}
	50% {
		transform: translate(0, -1.3rem) rotate(0deg)
	}
	100% {
		transform: translate(0, -1.3rem) rotate(135deg)
	}
`;

const bottomlineBack = keyframes`
  0% {
		transform: translate(0, -1.3rem) rotate(135deg)
	}
	50% {
		transform: translate(0, -1.3rem) rotate(0deg)
	}
	100% {
		transform: translate(0, 0) rotate(0deg)
	}
`;

export const StyledBurgerContainer = styled.div`
  height: 2.7rem;
  width: 4rem;
  position: relative;

  &.burger-container {
    display: none;
    z-index: 4;

    ${media.tablet`
      display: block;
    `}
  }

  .line-1, .line-2, .line-3 {
    height: .3rem;
    width: 100%;
    background: ${props => props.theme.colors.white};
    border-radius: .3rem;
    animation: ${middleLineBack} .5s ease-in-out forwards;
    position: absolute;
  }
  .line-1 {
    top: 0;
    animation: ${toplineBack} .5s ease-in-out forwards;
  }
  .line-2 {
    top: 1.2rem;
    animation: ${middleLineBack} .5s ease-in-out forwards;
  }
  .line-3 {
    top: 2.4rem;
    animation: ${bottomlineBack} .5s ease-in-out forwards;
  }
  &.no-anim {
    .line-1, .line-2, .line-3 {
      animation: none!important;
    }
  }
  &.active {
    .line-1 {
      animation: ${topline} .5s ease-in-out forwards;
    }
    .line-2 {
      animation: ${middleLine} 0.3s ease-in-out forwards;
    }
    .line-3 {
      animation: ${bottomline} .5s ease-in-out forwards;
    }
  }
`;