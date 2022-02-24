// const empresa = {
//   nome: `Matheus`,
//   empresa: {
//     nome: `Mega Print Shop`,
//     cor: `Vermelho e Preto`,
//     foco: `Gráfica Rápida e Papelaria`,
//     endereco: {
//       rua: `Rua Santos Dumont`,
//       numero: `numero 391`,
//     }

//   }
// }

// console.log(`A empresa ${empresa.empresa.nome}, está localizada em ${empresa.empresa.endereco.rua}, ${empresa.empresa.endereco.numero}.`)


const programadores = [
  {
    nome: `Joao Carlos`,
    idade: 23,
    tecnologias: {
      nome: `C++`, especialidade: `Desktop`
    }
  },
  {
    nome: `Milton Bolonha`,
    idade: 32,
    tecnologias: {
      nome: `React Native`, especialidade: `Desenvolvimento Diferencial`
    }
  },
  {
    nome: `Matheus Miranda`,
    idade: 25,
    tecnologias: {
      nome: `Java Script`, especialidade: `Programação Web`
    }
  }
]

console.log(`O Usuario ${programadores[2].nome}, tem ${programadores[2].idade} anos e usa a tecnologia ${programadores[2].tecnologias.nome}, com especialidade em ${programadores[2].tecnologias.especialidade}.`)

//////////////// TESTANDO APRENDIZADO AULA 12 ///////////////

// function SomaTudo(adicao){
//   return (adicao[0].idade + adicao[1].idade + adicao[2].idade)
// }

// const soma1 = SomaTudo(programadores)

// function EnviaMsg(soma){
//   if(soma >= 99){
//     console.log(`A soma de tudo foi ${soma}, Deu certo`)
//   }else(
//     console.log(`Deu certo tambem mano`)
//   )
//   }

// EnviaMsg(soma1)