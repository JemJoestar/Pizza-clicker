import styled from '@emotion/styled';

export const StyledClickerZone = styled.div`
  width: 100%;
  background-color: #f0c789;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .current-money {
    font-size: 20px;
    font-weight: 600;
    font-family: cursive;
    margin-bottom: 20px;
  }
`;

export const StyledEnergy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;

  .energy-range {
    width: 75%;
    height: 16px;
    position: relative;
    background-color: #ffffff8f;
    border-radius: 4px;
    display: flex;
    justify-content: left;

    z-index: 0;
    .energy {
      height: 100%;
      border-radius: 4px;

      position: relative;
      width: ${({ currentPercent }) => currentPercent};
      background-color: #ffaa00;
      span {
        position: absolute;
        right: -5px;
        font-size: 20px;
        z-index: 5;
      }
      transition: width 100ms ease-out;
    }
  }
  .current-energy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 6;
  }
`;
