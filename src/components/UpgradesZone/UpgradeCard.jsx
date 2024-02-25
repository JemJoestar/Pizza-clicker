import React from 'react'

export const UpgradeCard = ({title, description, info, upgradeFn}) => {
  return (
    <div className='upgrade-card'>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
      <button onClick={() => upgradeFn(info.price)}>{info.price}$</button>
      <p>level {info.level}</p>
    </div>
  )
}
