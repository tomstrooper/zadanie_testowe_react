import React, { useState } from 'react'

export default function Showmorebutton() {

    const[buttontekst,SetButtontekst]=useState('show more v')

    const buttontekstchange=()=>{
        if(buttontekst==='show more v')
        {
            SetButtontekst('show less ^')
        }
        else
        {
            SetButtontekst('show more v')
        }
    }

  return (
    <div>
        <button onClick={buttontekstchange}>{buttontekst}</button>
    </div>
  )
}

