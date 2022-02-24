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
]

    function calculaMedia(alunos) { //eu coloco alunos dentro do bloco de codigo abaixo, para receber a media. POSSO USAR ESSA FUNCAO SEMPRE
        return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
    }

    const media1 = calculaMedia(alunosTurmaA)   //media e = a funcao calclamedia com os dados dos Alunos da Turma A
    const media2 = calculaMedia(alunosTurmaB)

    //////////// FUNCAO PARA ME DAR A MENSAEM CONSOLE.LOG //////////////////
    function EnviaMsg (media, turma){ //a variavel "turma"ai dentro e um parametro para identificar no console log. ler o comentario de EnviaMsg
        if(media >= 5){
            console.log (`A media da turma ${turma} foi de ${media}, Parabens`)
        }else(
            console.log(`A media da turma ${turma} foi de ${media}, voces reprovaram`)
        )   
    }
            //USA DADOS MEDIA1//
    EnviaMsg (media1,`TurmaA`) //dentro de cada funcao, posso adicionar paramentros. porem esses paramentros devem estar tambem dentro da funcao.
    //EnviaMsg (media2, `TurmaB`)

    
    









// 

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
// // avisar para voltar quando tiver 18 anos.function contmedia(alunos) {
//     let soma = 0
//     for (let i = 0; i < alunos.length; i++) {
//         soma = soma + alunos[i].nota
//     }
//     const media = soma / alunos.length
//     return media
// }

// const media1 = contmedia(alunosTurmaA)
// const media2 = contmedia(alunosTurmaB)

// //aqui, coloco as informações da variavel/const "contmedia" dentro da variavel media  
// const med = media1.toFixed(2)
// const med2 = media2.toFixed(2)

// function EnviaMsg(media, turma) {
//     if (media >= 6) { //fazer alguma coisa "SE for verdadeiro a condição"
//         console.log(`A media da ${turma} foi ${media}, Parabens turma, vocês passaram.`)
//     } else { //faz outra coisa caso não for(colocar o que fazer abaixo)
//         console.log(`A media da ${turma} foi ${media}. Que pena, vocês nao passaram`)
//     }
// }

// EnviaMsg(med, `Turma A`)
// EnviaMsg(med2, `Turma B`)



