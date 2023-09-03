import React from 'react'
import Linkimage from './Linkimage';
import bmw from './e46.jpg';
import pad from './gamepad.png';

export default function Wszystkieopcje({czyrozwinac}) {
  return (
    <div> 
        {czyrozwinac==='show less'
        ?<div>
            <div className='zdjeciawrzedzie'>
                <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            </div>
            <div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            </div>
            <div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            </div>
            <div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
            </div>
        </div>
        :<div className='zdjeciawrzedzie'>
            <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
          <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
          <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
          <Linkimage tekst={<img class="imagelogo" src={pad} alt='zdjecie_gamepada'/ >}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
                <Linkimage tekst={<img class="imagelogo" src={bmw} alt='zdjecie_bmw'/>}/>
        </div>
        }
    </div>
  )
}
