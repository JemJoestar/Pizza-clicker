import React from 'react';
import { UpgradeCard } from './UpgradeCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  upgradeEnergyGenerationThunk,
  upgradeMaxEnergyThunk,
  upgradeMoneyPerClickThunk,
  upgradeMoneyPerSecondThunk
} from 'Store/mainReducer';

export const UpgradeZone = () => {
  const energyGenerationInfo = useSelector(
    state => state.main.energyGeneration
  );
  const maxEnergyInfo = useSelector(state => state.main.energyStorage);

  const moneyPerClickInfo = useSelector(state => state.main.moneyPerClick);
  const moneyPerSecondInfo = useSelector(state => state.main.moneyPerSecond);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Energy Gen</p>
      <UpgradeCard
        description={'+0.5 energy per second '}
        title={'Upgrade energy generation'}
        price={energyGenerationInfo.price}
        upgradeFn={e => dispatch(upgradeEnergyGenerationThunk(0.5))}
      />
      <p>lvl {energyGenerationInfo.level}</p>
      <p>total/s {energyGenerationInfo.ammount}</p>

      <p>Max Energy</p>
      <UpgradeCard
        description={'+5 max energy  '}
        title={'Upgrade max energy'}
        price={maxEnergyInfo.price}
        upgradeFn={e => dispatch(upgradeMaxEnergyThunk(5))}
      />
      <p>lvl {maxEnergyInfo.level}</p>
      <p>total energy {maxEnergyInfo.maxAmmount}</p>

      <p>Money per click</p>
      <UpgradeCard
        description={'+1$  per click  '}
        title={'Upgrade $ per click'}
        price={moneyPerClickInfo.price}
        upgradeFn={e => dispatch(upgradeMoneyPerClickThunk(1))}
      />
      <p>lvl {moneyPerClickInfo.level}</p>
      <p>total $/click {moneyPerClickInfo.ammount}</p>

      <p>Money per second</p>
      <UpgradeCard
        description={'+1$  per second  '}
        title={'Upgrade $ per second'}
        price={moneyPerSecondInfo.price}
        upgradeFn={e => dispatch(upgradeMoneyPerSecondThunk(1))}
      />
      <p>lvl {moneyPerSecondInfo.level}</p>
      <p>total $/s {moneyPerSecondInfo.ammount}</p>
    </div>
  );
};
