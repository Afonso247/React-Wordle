import React from 'react'
import Row from './Row'

export default function Grid({ tentativaAtual, tentativas, turno }) {
  return (
    <div>
        {tentativas.map((t, i) => {
            return <Row key={i} tentativa={t} />
        })}
    </div>
  )
}
