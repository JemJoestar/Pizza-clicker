import { increaseEnergy } from 'Store/mainReducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ClickStatBlock = () => {
  const dispatch = useDispatch();
  const energyObj = useSelector(state => state.main.energyStorage);

  return (
    <div>
      <p>Current energy: {energyObj.ammount.toFixed(1)}</p>
      <button onClick={() => dispatch(increaseEnergy())}></button>
    </div>
  );
};
