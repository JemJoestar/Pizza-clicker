import { useDispatch } from 'react-redux';
import { ClickStatBlock } from './ClickerZone/ClickStatBlock/ClickStatBlock';
import { Pizza } from './ClickerZone/Pizza/Pizza';
import { addMoneyPerSecond, increaseEnergy } from 'Store/mainReducer';
import { useEffect } from 'react';
import { UpgradeZone } from './UpgradesZone/UpgradeZone';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(increaseEnergy());
      dispatch(addMoneyPerSecond());
    }, 1000)
  }, [dispatch]);

  return (
    <>
      <>Welcome!</>
      <Pizza />
      <ClickStatBlock />
      <UpgradeZone/>
    </>
  );
};
