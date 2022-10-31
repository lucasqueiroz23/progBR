class somaSubtrai {
  constructor(args) {
    this.args = args;
  }

  soma() {
    let soma = 0;
    this.args.forEach((number) => soma += parseInt(number));
    console.log(soma);
  }

  subtrai(){
    let soma = 0;
    const primeiroVal = parseInt(this.args[0]);
    const outrosValores = this.args.slice(1);
    outrosValores.forEach(valor => soma += parseInt(valor));
      
    const resultado = primeiroVal + (-1) * soma;
    console.log(resultado);
  }

  calcula(){
    this.soma();
    this.subtrai();
  }

};

const args = process.argv.slice(2);

console.log(new somaSubtrai(args).calcula());