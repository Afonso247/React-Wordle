import React from 'react'

export default function Modal({ estaCorreto, turno, solucao }) {
  return (
    <div className='modal'>
        {estaCorreto && (
            <div>
                <h1>Você venceu!</h1>
                <p className='solucao'>{solucao}</p>
                <p>Você usou {turno} tentativa(s) para achar a resposta ^⁻^</p>
                <small>Recarregue a página para jogar novamente</small>
            </div>
        )}
        {!estaCorreto && (
            <div>
                <h1>Que pena!</h1>
                <p className='solucao'>{solucao}</p>
                <p>Mais sorte na próxima vez :/</p>
                <small>Recarregue a página para jogar novamente</small>
            </div>
        )}
    </div>
  )
}
