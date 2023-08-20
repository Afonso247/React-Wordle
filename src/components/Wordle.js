import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';

export default function Wordle({ solucao }) {
    const { tentativaAtual, handleKeyUp, tentativas, estaCorreto, turno, teclasUsadas } = useWordle(solucao);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    useEffect(() => {
        console.log(tentativas, turno, estaCorreto)
    }, [tentativas, turno, estaCorreto])

    return (
        <div>
            <div>Resposta: {solucao}</div>
            <div>tentativa atual - {tentativaAtual}</div>
            <Grid tentativaAtual={tentativaAtual} tentativas={tentativas} turno={turno} />
            <Keypad teclasUsadas={teclasUsadas} />
        </div>
    )
}