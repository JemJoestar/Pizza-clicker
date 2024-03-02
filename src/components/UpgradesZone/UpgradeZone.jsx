import React from 'react';
import { UpgradeCard } from './UpgradeCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  upgradeEnergyGenerationThunk,
  upgradeMaxEnergyThunk,
  upgradeMoneyPerClickThunk,
  upgradeMoneyPerSecondThunk,
} from 'Store/mainReducer';
import { StyledUpgradeZone } from './UpgradeZone.styled';

export const UpgradeZone = () => {
  const energyGenerationInfo = useSelector(
    state => state.main.energyGeneration
  );

  const totalLevels = useSelector(state => state.main.totalLevels);
  const maxEnergyInfo = useSelector(state => state.main.energyStorage);

  const moneyPerClickInfo = useSelector(state => state.main.moneyPerClick);
  const moneyPerSecondInfo = useSelector(state => state.main.moneyPerSecond);
  const dispatch = useDispatch();
  return (
    <StyledUpgradeZone >
      <p className="total-levels">Total levels: {totalLevels}</p>
      <UpgradeCard
        description={'+0.5 energy per second '}
        title={'Energy generation'}
        info={energyGenerationInfo}
        upgradeFn={e => dispatch(upgradeEnergyGenerationThunk(0.5))}
      />
      <UpgradeCard
        description={'+5 max energy  '}
        title={'Max energy'}
        info={maxEnergyInfo}
        upgradeFn={e => dispatch(upgradeMaxEnergyThunk(5))}
      />
      <UpgradeCard
        description={'+1$  per click  '}
        title={'$ per click'}
        info={moneyPerClickInfo}
        upgradeFn={e => dispatch(upgradeMoneyPerClickThunk(1))}
      />
      <UpgradeCard
        description={'+1$  per second  '}
        title={'$ per second'}
        info={moneyPerSecondInfo}
        upgradeFn={e => dispatch(upgradeMoneyPerSecondThunk(1))}
      />
    </StyledUpgradeZone>
  );
};
