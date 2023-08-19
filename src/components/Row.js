import React from 'react'

export default function Row({ tentativa }) {

    if(tentativa) {
        return (
            <div className="row past">
                {tentativa.map((l, i) => (
                    <div key={i} className={l.cor}>{l.tecla}</div>
                ))}
            </div>
        )
    }

  return (
    <div className='row'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
