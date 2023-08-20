import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

export default function Wordle({ solucao }) {
    const { tentativaAtual, handleKeyUp, tentativas, estaCorreto, turno, teclasUsadas } = useWordle(solucao);
    const [mostrarModal, setMostrarModal] = useState(false)

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if(estaCorreto) {
            setTimeout(() => setMostrarModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        if(turno > 5) {
            setTimeout(() => setMostrarModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, estaCorreto, turno])

    // useEffect(() => {
    //     console.log(tentativas, turno, estaCorreto)
    // }, [tentativas, turno, estaCorreto])

    return (
        <div>
            {/* <div>Tentativa: {turno+1}</div> */}
            <Grid tentativaAtual={tentativaAtual} tentativas={tentativas} turno={turno} />
            <Keypad teclasUsadas={teclasUsadas} />
            {mostrarModal && <Modal estaCorreto={estaCorreto} turno={turno} solucao={solucao} />}
        </div>
    )
}