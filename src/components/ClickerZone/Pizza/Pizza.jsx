import { addMoney } from 'Store/mainReducer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledPizza } from './Pizza.styled';

export const Pizza = () => {
  const dispatch = useDispatch();

  return (
    <StyledPizza onClick={() => handlePizzaClick(dispatch)}>
      pizza
    </StyledPizza>
  );
};

const handlePizzaClick = dispatch => {
  dispatch(addMoney());
};
