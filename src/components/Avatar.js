import React from 'react'
import Items from './Items'

function Avatar({ body, eyes, hair, clothing1, clothing2, clothing3, eyebrows, mouth, hat, glasses, earrings, neckwear, facialhair }) {
  return (
    <div className='avatar'>
      <Items part="body" index={body} zIndex={1}/>
      <Items part="eyes" index={eyes} zIndex={2}/>
      <Items part="hair" index={hair} zIndex={2}/>
      <Items part="clothes/layer_1" index={clothing1} zIndex={2}/>
      <Items part="clothes/layer_2" index={clothing2} zIndex={3}/>
      <Items part="clothes/layer_3" index={clothing3} zIndex={4}/>
      <Items part="eyebrows" index={eyebrows} zIndex={2}/>
      <Items part="mouths" index={mouth} zIndex={2}/>
      <Items part="accessories/hats" index={hat} zIndex={3}/>
      <Items part="accessories/glasses" index={glasses} zIndex={3}/>
      <Items part="accessories/earrings" index={earrings} zIndex={5}/>
      <Items part="accessories/neckwear" index={neckwear} zIndex={5}/>   
      <Items part="facialhair" index={facialhair} zIndex={5}/>
      <Items part="noses" index={1} zIndex={3} />
    </div>
  )
}

export default Avatar