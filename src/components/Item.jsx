import React from 'react';

export default function Item(props) {
  return (
    <div className='addedItems'>
        <h3 className='detail'>{props.name}</h3>
        <h3 className='detail'>{props.price}</h3>
        <h3 className='detail'>{props.no}</h3>
    </div>
  )
}
