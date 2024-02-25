import React from 'react';
import { ClickStatBlock } from './ClickStatBlock/ClickStatBlock';
import { Pizza } from './Pizza/Pizza';
import { useSelector } from 'react-redux';
import { StyledClickerZone } from './ClickerZone.styled';

export const ClickerZone = () => {
  const currentMoney = useSelector(state => state.main.money);
  return (
    <StyledClickerZone>
      <p className="current-money">{currentMoney} $</p>
      <Pizza />
      <ClickStatBlock />
    </StyledClickerZone>
  );
};
