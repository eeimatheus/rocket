const alunosTurmaA = [ //aqui fiz uma "tabela", com varios valores dentro
    {
        nome: `Matheus`,
        nota: 9.3
    },
    {
        nome: `Debora`,
        nota: 2.6
    },
    {
        nome: `Fedora`,
        nota: 1.4
    },
    {
        nome: `Fedora`,
        nota: 1.2
    },

    {
        nome: `Fedora`,
        nota: 6.2
    }

]

const alunosTurmaB = [ //aqui fiz uma "tabela", com varios valores dentro
    {
        nome: `Joazinho`,
        nota: 9.9
    },
    {
        nome: `Firmino`,
        nota: 5
    },
    {
        nome: `Cleiton`,
        nota: 7.2
    },
    {
        nome: `Cleiton`,
        nota: 7.5
    }
]

function contmedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media
}

const media1 = contmedia(alunosTurmaA)
const media2 = contmedia(alunosTurmaB)

//aqui, coloco as informações da variavel/constante "contmedia" dentro da varia vel media  
const med = media1.toFixed(2)
const med2 = media2.toFixed(2)

function EnviaMsg(media, turma) {
    if (media >= 6) { //fazer alguma coisa "SE for verdadeiro a condição"
        console.log(`A media da ${turma} foi ${media}, Parabens turma, vocês passaram.`)
    } else { //faz outra coisa caso não for(colocar o que fazer abaixo)
        console.log(`A media da ${turma} foi ${media}. Que pena, vocês nao passaram`)
    }
}

EnviaMsg(med, `Turma A`)
EnviaMsg(med2, `Turma B`)


// // abaixo segue um exemplo de objeto, uma constante com varias informações dentro.
// const aluno01 = {
//   nome: `Joca`,
//   serie: `5º serie`,
//   nota: 9.6
// }
// console.log(`O aluno ${aluno01.nome}, está na ${aluno01.serie}`)

//////////////////////////////////////////////////

// // //verificar se a pessoa é maior ou igual a 18 anos
// const idade = 1
// //se sim, deixar entrar, se não bloquear entrada
// if (!(idade >= 18) || idade === 17) {
//   console.log(`Você tem ${idade} anos, e não pode entrar`)
// }
// else {
//   console.log(`Você tem ${idade} anos, pode entrar`)
// }
// // se a pessoa tiver 17 anos
// // avisar para voltar quando tiver 18 anos.