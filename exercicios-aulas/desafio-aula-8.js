// //DEFINIÇÃO DAS VARIAVEIS
// const nome = `Milton Zumba`
// const peso = 90.6
// const alt = 1.75

// //A CONTA QUE O APLICATIVO VAI FAZER PARA DAR O RESULTADO
// const imcconta = peso / (alt * alt)

// //ESTOY TRANSFERINDO O VALOR DE DENTRO DO "IMCCONTA" PARA A AVRIAVEL IMC 
// // E DEFININDO QUE A QUANTIDADE DE CASA QUE UTILIZARA É (2) DUAS
// const imc = imcconta.toFixed(2)

// //DEFININDO CONDIÇÕES
// if (imc < 18.5) {
//   console.log(`${nome}, seu IMC é ${imc} e você está crakudo = Magro`)
// }
// else if (imc >= 18.5 && imc <= 24.9) {
//   console.log(`${nome}, seu IMC é ${imc}, seu peso é saudável`)
// }
// else if (imc >= 25 && imc <= 29.9) {
//   console.log(`${nome}, seu IMC é ${imc} e você está com sobrepeso`)
// }
// else {
//   console.log(`${nome}, seu IMC é ${imc} e você está Obesão nivel Wesley`)
// }
//////////////////////////////////////////////////////////////////////////////

// TEMPO DE CONTRIBUIÇÃO //

const nome = 'Debora'
const idade = 55
const sexo = "F"
const contrib = 35

const soma = idade + contrib

//AQUI VAI ME PASSAR SE AS INFORMAÇÕES SÃO VERDADEIRAS, SE SIM VAI ME DAR UM TRUE
const aprovado = sexo == "M" && contrib >= 35 && soma >= 95

const aprovada = sexo == "F" && contrib >= 30 && soma >= 85

// PARA DAR APROVADO, PRECISA DE UM TRUE EM AMBOS
if (aprovado || aprovada) {
  return console.log(`${nome}, você pode se aposentar!`)

  // SE NÃO DER TRUE EM NENHUMA DAS OPÇÕES, ELE VAI ME DAR ESSE ELSE
} else {
  return console.log(`${nome}, você não pode se aposentar!`)
}

