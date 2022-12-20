import React, { useState, useEffect }from 'react';
import './App.css'; 
import Avatar from './components/Avatar';
import List from './components/List';


const totalAvatar = {
 
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    earrings: 32,
    neckwear: 18,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
    noses: 1,
   
};

function App() {
    const [body, setBody] = useState(0);
    const [eyes, setEyes] = useState(0);
    const [hair, setHair] = useState(0);
    const [clothing1, setClothing1] = useState(0);
    const [clothing2, setClothing2] = useState(0);
    const [clothing3, setClothing3] = useState(0);
    const [eyebrows, setEyebrows] = useState(0);
    const [mouth, setMouth] = useState(0);
    const [hat, setHat] = useState(0);
    const [glasses, setGlasses] = useState(0);
    const [earrings, setEarrings] = useState(0);
    const [neckwear, setNeckwear] = useState(0);
    const [noses, setNoses] = useState(0)


   
    const randomize = () => {
      setBody(Math.floor(Math.random() * totalAvatar.body) );
      setEyes(Math.floor(Math.random() * totalAvatar.eyes) );
      setHair(Math.floor(Math.random() * totalAvatar.hair) );
      setClothing1(Math.floor(Math.random() * totalAvatar.clothing1) );
      setClothing2(Math.floor(Math.random() * totalAvatar.clothing2) );
      setClothing3(Math.floor(Math.random() * totalAvatar.clothing3) );
      setEyebrows(Math.floor(Math.random() * totalAvatar.eyebrows) );
      setMouth(Math.floor(Math.random() * totalAvatar.mouth) );
      setHat(Math.floor(Math.random() * totalAvatar.hat) );
      setGlasses(Math.floor(Math.random() * totalAvatar.glasses) );
      setEarrings(Math.floor(Math.random() * totalAvatar.earrings) );
      setNeckwear(Math.floor(Math.random() * totalAvatar.neckwear) );
      setNoses(1);
    }

    useEffect (() => {
      randomize();
    },[]);


  return (
    <div>
      <div className='character-customize'>Character Customization</div>
        <div className='character-container'>
          <div>
          <div className='avatar-box'>
            <Avatar 
            body={body} eyes={eyes} hair={hair} hat={hat} mouth={mouth} 
            eyebrows={eyebrows} glasses={glasses} 
            clothing1={clothing1} clothing2={clothing2} clothing3={clothing3}
            neckwear={neckwear} earrings={earrings}
            noses={noses}
            />
            <div className='button'>
            <button className='randomize-btn' onClick={() => randomize()}>RANDOMIZE</button>
            </div>
          </div>
          </div>
          <div>
          <div className='character-list'>
            <h1>Body</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.body} part="body" selected={body} setState={setBody} />
            </div>
          </div>
          <div className='character-list'>
            <h1>Eyes</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.eyes} part="eyes" selected={eyes} setState={setEyes} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Glasses</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.glasses} part="accessories/glasses" selected={glasses} setState={setGlasses} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Hair</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.hair} part="hair" selected={hair} setState={setHair} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Clothing1</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.clothing1} part="clothes/layer_1" selected={clothing1} setState={setClothing1} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Clothing2</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.clothing2} part="clothes/layer_2" selected={clothing2} setState={setClothing2} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Clothing3</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.clothing3} part="clothes/layer_3" selected={clothing3} setState={setClothing3} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Eyebrows</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.eyebrows} part="eyebrows" selected={eyebrows} setState={setEyebrows} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Mouth</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.mouth} part="mouths" selected={mouth} setState={setMouth} />
          </div>
          </div>
          <div className='character-list'>
            <h1>Hat</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.hat} part="accessories/hats" selected={hat} setState={setHat} />
          </div>
          </div>
        
          <div className='character-list'>
            <h1>Earrings</h1>
            <div className='list'>
            <List totalAvatar={totalAvatar.earrings} part="accessories/earrings" selected={earrings} setState={setEarrings} />
          </div>
          </div>
        
      </div>
    </div>
  </div>
  )
}

export default App