import { useState } from 'react';


const useWordle = (solucao) => {
    
    const [turno, setTurno] = useState(0) 
    const [tentativaAtual, setTentativaAtual] = useState('')
    const [tentativas, setTentativas] = useState([...Array(6)]) // cada tentativa será um array
    const [historico, setHistorico] = useState([]) // cada tentativa será um string
    const [estaCorreto, setCorreto] = useState(false)


    // formatar a tentativa em um array de objetos em letras
    // ex: [{ tecla: 'a', cor: 'amarelo' }]
    const aplicarTentativa = () => {
      let listaDeTentativas = [...solucao]
      let tentativaAplicada = [...tentativaAtual].map((l) => {
        return {tecla: l, cor: 'cinza'}
      })

      // encontrar qualquer letra em verde
      tentativaAplicada.forEach((l, i) => {
        if(listaDeTentativas[i] === l.tecla) {
          tentativaAplicada[i].cor = 'verde'
          listaDeTentativas[i] = null
        }
      })

      // encontrar qualquer letra em amarelo
      tentativaAplicada.forEach((l, i) => {
        if(listaDeTentativas.includes(l.tecla) && l.cor !== 'verde') {
          tentativaAplicada[i].cor = 'amarelo'
          listaDeTentativas[listaDeTentativas.indexOf(l.tecla)] = null
        }
      })

      return tentativaAplicada
    }

    // adicionar uma nova tentativa para o estado de tentativa
    // atualizar para estaCorreto se a tentativa estiver correta
    // adicionar +1 para o estado de turnos
    const addNovaTentativa = (tentativaRealizada) => {

      // condição de vitória
      if(tentativaAtual === solucao) {
        setCorreto(true)
      }
      setTentativas((prevTentativas) => {
        let novaTentativas = [...prevTentativas]
        novaTentativas[turno] = tentativaRealizada
        return novaTentativas
      })
      setHistorico((prevHistorico) => {
        return [...prevHistorico, tentativaAtual]
      })
      setTurno((prevTurno) => {
        return prevTurno + 1
      })
      setTentativaAtual('')
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
          const aplicado = aplicarTentativa()
          addNovaTentativa(aplicado)
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