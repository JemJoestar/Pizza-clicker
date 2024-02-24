import { addMoney } from 'Store/mainReducer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Pizza = () => {
    const dispatch = useDispatch()
    const currentMoney = useSelector(state => state.main.money)

    return (
    <>
      <button onClick={() => handlePizzaClick(dispatch)}>pizza</button>
        {currentMoney}$
    </>
  );
};

const handlePizzaClick = (dispatch) => {
  dispatch(addMoney());
};
