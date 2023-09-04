import React from 'react'

export default function Linkimage({tekst}) {
  return (
    <div>
        <a href='https://www.finder.com.au/'
        target="_blank"
        rel="noopener noreferrer"
        >
        {tekst}
        </a>
    </div>
  )
}
