import React from 'react'

export const UpgradeCard = ({title, description, price, upgradeFn}) => {
  return (
    <div className='upgrade-card'>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
      <button onClick={() => upgradeFn(price)}>{price}$</button>
    </div>
  )
}
