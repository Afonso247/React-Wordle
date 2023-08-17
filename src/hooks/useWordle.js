import { useState } from 'react';


const useWordle = (solucao) => {
    
    const [turno, setTurno] = useState(0) 
    const [tentativaAtual, setTentativaAtual] = useState('')
    const [tentativas, setTentativas] = useState([]) // cada tentativa será um array
    const [historico, setHistorico] = useState(['ninja']) // cada tentativa será um string
    const [estaCorreto, setCorreto] = useState(false)


    // formatar a tentativa em um array de objetos em letras
    // ex: [{ tecla: 'a', cor: 'amarelo' }]
    const aplicarTentativa = () => {
      console.log('Tentativa aplicada - ', tentativaAtual)
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

        if(key === 'Enter') {
          // Apenas aplicar a tentativa se o número de turnos for < 5
          if(turno > 5) {
            console.log("Suas tentativas acabaram")
            return
          }
          // palavras iguais NÃO serão permitidas
          if(historico.includes(tentativaAtual)) {
            console.log("Palavra duplicada. Tente novamente")
            return
          }
          // checar se a palavra tem 5 letras
          if(tentativaAtual.length !== 5) {
            console.log("A palavra deve possuir 5 letras")
            return
          }
          aplicarTentativa()
        }
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