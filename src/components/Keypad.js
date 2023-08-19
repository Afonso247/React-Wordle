import React, { useEffect, useState } from 'react'

export default function Keypad() {
    const [letras, setLetras] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/letras')
            .then(res => res.json())
            .then(json => {
                setLetras(json)
            })
    }, [])

  return (
    <div className='teclado'>
        {letras && letras.map((l) => {
            return (
                <div key={l.key}>{l.key}</div>
            )
        })}
    </div>
  )
}
