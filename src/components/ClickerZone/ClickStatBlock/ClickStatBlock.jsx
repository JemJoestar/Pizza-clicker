import React from 'react';
import {  useSelector } from 'react-redux';
import { StyledEnergy } from '../ClickerZone.styled';

export const ClickStatBlock = () => {
  const energyObj = useSelector(state => state.main.energyStorage);
  const currentPercent = (energyObj.ammount / energyObj.maxAmmount) * 100 + '%';

  return (
    <StyledEnergy currentPercent={currentPercent}>
      
      <div className="energy-range">
        <div className="energy">
          <span>🔥</span>
        </div>
        <p className="current-energy">{energyObj.ammount.toFixed(1)}/{energyObj.maxAmmount.toFixed(1)}</p>
      </div>
    </StyledEnergy>
  );
};
