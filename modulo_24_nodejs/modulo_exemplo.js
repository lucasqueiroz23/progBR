const exemplo = {
  printaNomeCompleto(nome)
  {
    const primeiroNome = nome[0];
    const sobrenome = nome[1];

    console.log(primeiroNome + ' ' + sobrenome);
  },
}

// estou exportando o objeto 'exemplo'
module.exports = exemplo;