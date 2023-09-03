import React, { useState } from 'react'

export default function Showmorebutton() {

    const[buttontekst,SetButtontekst]=useState('show more')

    const buttontekstchange=()=>{
        if(buttontekst==='show more')
        {
            SetButtontekst('show less')
        }
        else
        {
            SetButtontekst('show more')
        }
    }

  return (
    <div>
        <button onClick={buttontekstchange}>{buttontekst}</button>
    </div>
  )
}

