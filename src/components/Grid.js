import React from 'react'
import Row from './Row'

export default function Grid({ tentativaAtual, tentativas, turno }) {
  return (
    <div>
        {tentativas.map((t, i) => {
            if(turno === i) {
                return <Row key={i} tentativaAtual={tentativaAtual}/>
            }
            return <Row key={i} tentativa={t} />
        })}
    </div>
  )
}
