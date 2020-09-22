import styled from "styled-components";

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
    
    &:hover {
      border-color: ${({ theme: { colors } }) => colors.orange};
    }

    .left {
      display: flex;
      flex-direction: column;
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
      }
    }

    .status {
      text-transform: uppercase;
    }
  }

  .bottom-container {
    background: ${({ theme: { colors } }) => colors.lightGray};
    padding: 2rem 2rem 2.4rem 2rem;
    border: solid 1px ${({ theme: { colors } }) => colors.gray};
    border-top: none;
    display: flex;
    justify-content: space-between;

    .detail-heading {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .status-container {
      width: calc(50% - 1rem);
    }

    .status-list {
      margin-top: 2.4rem;
      position: relative;
    }

    .timeline {
      border-left: solid 1px ${({theme: {colors}}) => colors.darkGray};
      position: absolute;
      top: 0.8rem;
      left: 9.8rem;
      height: 78%;
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
          border: solid 1px ${({theme: {colors}}) => colors.darkGray};
          left: -3.6rem;
          top: .6rem;
          background: ${({theme: {colors}}) => colors.lightGray};
        }
      }
    }

    .status-btn {
      margin-top: 2.4rem;
    }

    .bill-container {
      width: calc(50% - 1rem);
      position: relative;

      &::before {
        content: " ";
        border-left: dashed 1px #949CA3;
        position: absolute;
        left: -2rem;
        top: 0;
        bottom: 0;
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