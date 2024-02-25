import React from 'react';
import { UpgradeCard } from './UpgradeCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  upgradeEnergyGenerationThunk,
  upgradeMaxEnergyThunk,
  upgradeMoneyPerClickThunk,
  upgradeMoneyPerSecondThunk
} from 'Store/mainReducer';
import { StyledUpgradeZone } from './UpgradeZone.styled';

export const UpgradeZone = () => {
  const energyGenerationInfo = useSelector(
    state => state.main.energyGeneration
  );
  const maxEnergyInfo = useSelector(state => state.main.energyStorage);

  const moneyPerClickInfo = useSelector(state => state.main.moneyPerClick);
  const moneyPerSecondInfo = useSelector(state => state.main.moneyPerSecond);
  const dispatch = useDispatch();
  return (
    <StyledUpgradeZone>
      <p>Energy Gen</p>
      <UpgradeCard
        description={'+0.5 energy per second '}
        title={'Upgrade energy generation'}
        info={energyGenerationInfo}
        upgradeFn={e => dispatch(upgradeEnergyGenerationThunk(0.5))}
        
      />

      <p>Max Energy</p>
      <UpgradeCard
        description={'+5 max energy  '}
        title={'Upgrade max energy'}
        info={maxEnergyInfo}
        upgradeFn={e => dispatch(upgradeMaxEnergyThunk(5))}
      />
      <p>Money per click</p>
      <UpgradeCard
        description={'+1$  per click  '}
        title={'Upgrade $ per click'}
        info={moneyPerClickInfo}
        upgradeFn={e => dispatch(upgradeMoneyPerClickThunk(1))}
      />
      <p>Money per second</p>
      <UpgradeCard
        description={'+1$  per second  '}
        title={'Upgrade $ per second'}
        info={moneyPerSecondInfo}
        upgradeFn={e => dispatch(upgradeMoneyPerSecondThunk(1))}
      />
    </StyledUpgradeZone>
  );
};
