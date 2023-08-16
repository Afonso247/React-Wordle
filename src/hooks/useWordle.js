import { useState } from 'react';


const useWordle = (solucao) => {
    
    const [turno, setTurno] = useState(0) 
    const [tentativaAtual, setTentativaAtual] = useState('')
    const [tentativas, setTentativas] = useState([]) // cada tentativa será um array
    const [historico, setHistorico] = useState([]) // cada tentativa será um string
    const [estaCorreto, setCorreto] = useState(false)


    // formatar a tentativa em um array de objetos em letras
    // ex: [{ tecla: 'a', cor: 'amarelo' }]
    const fomatarTentativa = () => {

    }

    // adicionar uma nova tentativa para o estado de tentativa
    // atualizar para estaCorreto se a tentativa estiver correta
    // adicionar +1 para o estado de turnos
    const addNovaTentativa = () => {

    }

    // um handler de evento para tecla e acompanhar a tentaiva atual
    // se o usuário apertar Enter, uma nova tentativa é adicionada
    const handleKeyUp = ({ key }) => {
        console.log(key)

        if(key === 'Backspace') {
          setTentativaAtual((prev) => {
            return prev.slice(0, -1)
          })
          return
        }

        if(/^[A-Za-z]$/.test(key)) {
          if(tentativaAtual.length < 5) {
            setTentativaAtual((prev) => {
              return prev + key
            })
          }
        }
    }

    return {turno, tentativaAtual, tentativas, estaCorreto, handleKeyUp}
}

export default useWordle