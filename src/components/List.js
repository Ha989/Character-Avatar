import React from 'react';

function List({ totalAvatar, part, selected, setState}) {
    let items = []
     for( let i = 0; i < totalAvatar ; i ++)
        items.push (
          <div key={part+i} className={selected === i ? "selected-items" : "items"} onClick={() => setState(i)}>
             <img src={`character/${part}/${i+1}.png`} alt="" /> 
          </div>
         )
  return (
   <div className='item-list'>{items}</div>
  )
  }
export default List