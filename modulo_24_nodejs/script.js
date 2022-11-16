// estou importanto o objeto 'exemplo'
const exemplo = require('./modulo_exemplo');

const args = process.argv.slice(2);

console.log('Seu nome é ');
console.log(exemplo.printaNomeCompleto(args));
