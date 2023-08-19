import React from 'react'

export default function Row({ tentativa, tentativaAtual }) {

    if(tentativa) {
        return (
            <div className="row past">
                {tentativa.map((l, i) => (
                    <div key={i} className={l.cor}>{l.tecla}</div>
                ))}
            </div>
        )
    }

    if(tentativaAtual) {
        let letras = tentativaAtual.split('')

        return (
            <div className='row current'>
                {letras.map((letra, i) => (
                    <div key={i} className='preenchido'>{letra}</div>
                ))}
                {[...Array(5 - letras.length)].map((_, i) => (
                    <div key={i}></div>
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
