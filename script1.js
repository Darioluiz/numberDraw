const numberRandom = Math.round(Math.random() * 10)
console.log(numberRandom)

let numberUser = prompt('Adivine o número que estou pensando, de 0 a 10')
let attempt = 1

while (Number(numberUser) != numberRandom) {
  if (numberUser >= 11) {
    alert('Número invalido')

    attempt--
  }
  numberUser = prompt('Errou, tente denovo')
  attempt++
}

const oneShot = `Parabéns, Você acertou o número de Primeira!`
const shots = `Parabéns, Você acertou o número em ${attempt} tentativas`

attempt == 1 ? alert(oneShot) : alert(shots)
