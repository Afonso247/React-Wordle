import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

export default function Wordle({ solucao }) {
    const { tentativaAtual, handleKeyUp } = useWordle(solucao);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp])

    return (
        <div>tentativa atual - {tentativaAtual}</div>
    )
}