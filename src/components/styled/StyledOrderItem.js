import styled from "styled-components";
import { media } from "../../styles";

export default styled.li`

  &:not(:first-child) {
    margin-top: 1.6rem;
  }

  .top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px ${({ theme: { colors } }) => colors.gray};
    padding: 2rem;
    transition: .3s border-color ease-in-out;
    cursor: pointer;

    ${media.tablet`
      padding: 2rem 1rem;
    `}
    
    &:hover {
      border-color: ${({ theme: { colors } }) => colors.orange};
    }

    .left {
      display: flex;
      flex-direction: column;
    }

    .mob-status {
      display: none;
      margin-top: .8rem;
      ${media.tablet`
        display: block;
      `}
    }

    .restaurant {
      display: flex;
      align-items: center;

      .name {
        margin-left: 1.6rem;
      }
    }

    .details {
      display: flex;
      margin-top: 1.2rem;
    }

    .detail-item {
      position: relative;
      &:not(:first-child) {
        margin-left: 1.6rem;
      
        &::before {
          content: " ";
          position: absolute;
          width: .1rem;
          height: 80%;
          top: .2rem;
          left: -.8rem;
          background: ${({ theme: { colors } }) => colors.gray};
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      .icon {
        margin-left: 4rem;
        transition: transform .2s ease-in-out;
        &.active {
          transform: rotate(-180deg);
        }
        ${media.tablet`
          margin-left: .4rem;
        `}
      }
    }

    .status-rest-container {
      text-align: right;
      ${media.tablet`
        display: none;
      `}
    }

    .rest-name {
      margin-top: 1rem;
    }

    .status {
      text-transform: uppercase;
      font-weight: 600;

      &.placed {
        color: ${(props) => props.theme.colors.green};
      }
      &.canceled {
        color: ${(props) => props.theme.colors.red};
      }
      &.processing {
        color: ${(props) => props.theme.colors.green};
      }
      &.in_route {
        color: ${(props) => props.theme.colors.green};
      }
      &.delivered {
        color: ${(props) => props.theme.colors.green};
      }
      &.received {
        color: ${(props) => props.theme.colors.green};
      }
    }
  }

  .bottom-container {
    background: ${({ theme: { colors } }) => colors.lightGray};
    padding: 2rem 2rem 2.4rem 2rem;
    border: solid 1px ${({ theme: { colors } }) => colors.gray};
    border-top: none;
    display: flex;
    justify-content: space-between;
    ${media.tablet`
      flex-direction: column;
      padding: 2rem 1rem 2.4rem;
    `}

    .detail-heading {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .status-container {
      width: calc(50% - 1rem);
      ${media.tablet`
        width: 100%;
      `}
    }

    .status-list {
      margin-top: 2.4rem;
      position: relative;
    }

    .timeline {
      border-left: solid 1px ${({ theme: { colors } }) => colors.darkGray};
      position: absolute;
      top: 0.8rem;
      left: 9.8rem;
      height: calc(100% - 1.5rem);
    }

    .status-item {
      display: flex;
      width: 30rem;

      .time {
        width: 7rem;
      }

      &:not(:first-child) {
        margin-top: 1.6rem;
      }

      .status {
        margin-left: 6rem;
        position: relative;
        text-transform: capitalize;
        &::before {
          content: "";
          height: .9rem;
          width: .9rem;
          border-radius: 50%;
          position: absolute;
          border: solid 1px ${({ theme: { colors } }) => colors.darkGray};
          left: -3.6rem;
          top: .6rem;
          background: ${({ theme: { colors } }) => colors.lightGray};
        }
      }
    }

    .status-btn {
      margin-top: 2.4rem;
    }

    .block-container {
      margin-top: 1rem;
      .block-link {
        background: inherit;
        color: ${props => props.theme.colors.orange};
        font-weight: 500;
        transition: all .3s ease-in-out;
        &:hover {
          font-weight: 600;
        }
      }
    }

    .bill-container {
      width: calc(50% - 1rem);
      position: relative;
      ${media.tablet`
        width: 100%;
        margin-top: 4rem;
      `}
      &::before {
        content: " ";
        border-left: dashed 1px #949CA3;
        position: absolute;
        left: -2rem;
        top: 0;
        bottom: 0;
        ${media.tablet`
          left: 0;
          right: 0;
          top: -2rem;
          border-left: none;
          border-top: dashed 1px #949CA3;
        `}
      }
    }

    .bill-list {
      margin-top: 2rem;
      padding-right: 17%;
    }

    .bill-item {
      display: flex;
      justify-content: space-between;

      &.total {
        font-size: 1.6rem;
        font-weight: 600;
      }
      &:not(:first-child) {
        margin-top: 1.6rem;
      }
      .bill-item-name {
        width: 67%;
      }
      .bill-item-value {
        margin-left: 2rem;
      }
    }
  }
`;