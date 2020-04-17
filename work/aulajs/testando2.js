const alunosTurmaA = [
  {
    nome: `Matheus`,
    nota: 7.7
  },
  {
    nome: `João`,
    nota: 2.7
  },
  {
    nome: `Milton`,
    nota: 8.3
  },
  {
    nome: `Wesley`,
    nota: 9.2
  },
]
const alunosTurmaB = [
  {
    nome: `Francisco`,
    nota: 9.4
  },
  {
    nome: `Fuinho`,
    nota: 9.3
  },
  {
    nome: `Predro`,
    nota: 3.4
  },
  {
    nome: `Feliz`,
    nota: 6.4
  },
  {
    nome: `Pedro`,
    nota: 2.9
  },
  {
    nome: `Joana`,
    nota: 6.3
  },
]

function calcAlunos(alunos) {
  let soma = 0
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length
  return media
}

const media1 = calcAlunos(alunosTurmaA)
const media2 = calcAlunos(alunosTurmaB)

const med = media1.toFixed(2)
const med2 = media2.toFixed(2)

function imprmirMsg(media, turma) {
  if (media >= 5) {
    console.log(`A Media da ${turma} foi de ${media} e passaram de ano`)
  }
  else {
    console.log(`A Media da ${turma} foi de ${media} e não passaram de ano`)
  }
}

imprmirMsg(med, `Turma A`)
imprmirMsg(med2, `Turma B`)

/////////

const soma1 = somartudo(alunosTurmaA)
const soma2 = somartudo(alunosTurmaB)

function somartudo(alunos) {
  return alunos.length
}
console.log(soma1)
console.log(soma2)