import { addMoney } from 'Store/mainReducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPizza } from './Pizza.styled';
import stage1 from 'images/stage1.jpg';
import stage2 from 'images/stage2.jpg';
import stage3 from 'images/stage3.jpg';
import stage4 from 'images/stage4.jpg';
import stage5 from 'images/stage5.jpg';

export const Pizza = () => {
  const dispatch = useDispatch();

  const currentTotalLevels = useSelector(state => state.main.totalLevels);
  return (
    <StyledPizza
      currentStage={selectCurrentPizzaStage(currentTotalLevels)}
      onClick={() => handlePizzaClick(dispatch)}
    />
  );
};
const selectCurrentPizzaStage = totalLevels => {
  const pizzaStagesArr = [stage1, stage2, stage3, stage4, stage5];
  const neadedLevels = [0, 10, 25, 50, 100];

  for (let i = 5; i >= 0; i--) {
    if (totalLevels >= neadedLevels[i]) {
      

      return pizzaStagesArr[i];
    }
  }
};
const handlePizzaClick = dispatch => {
  dispatch(addMoney());
};
