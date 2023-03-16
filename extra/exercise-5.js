function rollDice(numeroCara) {
    return Math.floor(Math.random() * numeroCara) + 1;
  }

  const resultado = rollDice(6);
console.log(resultado);