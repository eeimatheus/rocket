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

console.log(`O Usuario ${programadores[0].nome}, tem ${programadores[0].idade} anos e usa a tecnologia ${programadores[0].tecnologias.nome}, com especialidade em ${programadores[0].tecnologias.especialidade}.`)
