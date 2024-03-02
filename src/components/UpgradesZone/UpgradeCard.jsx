import React from 'react';

export const UpgradeCard = ({ title, description, info, upgradeFn }) => {
  return (
    <button onClick={() => upgradeFn(info.price)} className="upgrade-card">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className='price'>{info.price} $</div>
      <p className='level'>Level {info.level}</p>
    </button>
  );
};
