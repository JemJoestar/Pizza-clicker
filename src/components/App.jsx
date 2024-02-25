import { useDispatch } from 'react-redux';
import { addMoneyPerSecond, increaseEnergy } from 'Store/mainReducer';
import { useEffect } from 'react';
import { UpgradeZone } from './UpgradesZone/UpgradeZone';
import { ClickerZone } from './ClickerZone/ClickerZone';
import { StyledApp } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(increaseEnergy());
      dispatch(addMoneyPerSecond());
    }, 1000);
  }, [dispatch]);

  return (
    <StyledApp>
      <h1>Pizza Clicker</h1>
      <ClickerZone />
      <UpgradeZone />
    </StyledApp>
  );
};
