import React, { useState } from 'react'

import './App.css';
import Wszystkieopcje from './Wszystkieopcje';



function App() 
{
  const[buttontekst,SetButtontekst]=useState('show more ˅');

  const buttontekstchange=()=>{
    if(buttontekst==='show more ˅')
    {
        SetButtontekst('show less ˄')
    }
    else
    {
        SetButtontekst('show more ˅')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <div>
          Join 2 milion+ Australians finding better
        </div>
        <div className='mnniejeszyopis'>
          Finder's team of 40 experts will help you to find the right choice in over 100 categories.</div>
        </div>
      </header>

      <body>
      <div>
        <Wszystkieopcje czyrozwinac={buttontekst}/>
      </div>
      
      <button className='button' onClick={buttontekstchange}>{buttontekst}</button>
      </body>
    </div>
  );
}

export default App;
