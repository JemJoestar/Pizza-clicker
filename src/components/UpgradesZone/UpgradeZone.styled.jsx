import styled from '@emotion/styled';

export const StyledUpgradeZone = styled.div`
  width: 100%;
  background-color: #f0c789;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 0 0 10px 10px;
  
  background-size: cover;
  background-repeat: no-repeat;



  .total-levels{
    font-size: 16px;
    font-weight: 600;

  }

  .upgrade-card {
    border: none;
    font-size: 16px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    color: #000000;
    padding: 12px;
    position: relative;
    width: 100%;

    background-color: #ebecab;
    .title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 4px;
      color: inherit;
    }
    .price {
      background-color: #f0c789;
      padding: 4px;
      margin-bottom: 4px;
      margin-top: 4px;
      border-radius: 4px;
      font-weight: 600;
      color: inherit
    }

    .level {
      position: absolute;
      font-size: 16px;
      font-weight: 600;
      top: 16px;
      right: 16px;
      color: inherit;
    }
  }
`;
