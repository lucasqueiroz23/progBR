// Como eu já sei programar a um bom tempo, vou só colocar coisas específicas da linguagem aqui para checar depois.
// No entanto, nesse módulo, ele basicamente explica (bem didaticamente, aliás) lógica de programação. 

alert('Hello, world!');

// tipos de dados primitivos em javascript 

// Boolean
// Null
// String
// Number
// Undefined

// operadores lógicos Equal( == ) e strictly equal ( === )
// o operador lógico Equal realiza uma conversão de tipos para comparar duas variáveis.
// Exemplos:
console.log(1 == '1');
console.log(1 == true);
console.log(0 == false);
console.log(15 == '15');

// perceba que, para cada comparação, embora os tipos sejam diferentes, o resultado é true.

// o operador lógico strictly equal faz uma comparação sem realizar conversão de tipos.
console.log(1 === '1');
console.log(1 === true);
console.log(0 === false);
console.log(15 === '15');

//perceba que são as mesmas comparações. No entanto, agora o javascript leva em conta o tipo dos dados.

/* ALERT e PROMPT 
    a função 'alert' funciona como saída de dados, enquanto que a função prompt é uma entrada de dados.
    É importante saber que a função prompt sempre retorna um dado do tipo string.
*/
const nome = prompt('Qual é o seu nome?');
const idade_2020 = parseInt(prompt('Quantos anos você tinha em junho de 2020?'));

const idade_2050 = 2050 - 2020 + idade_2020;
alert(`${nome}, sua idade em junho de 2050 será de ${idade_2050} anos!`);


/* Comandos for...in e for...of
   O comando for...in itera nos índices e chaves de um objeto iterável.
   O comando for...of itera nos próprios valores do objeto iterável.
*/
const pessoas = [{idade:21, nome:'Lucas'}, {idade:22, nome: 'Sofia'}];
for(const pessoa in pessoas){
  // vai printar 0 e 1, pois o array tem 2 elementos.
  console.log(pessoa);
}
for(const pessoa of pessoas){
  // vai printar exatamente o objeto guardado na posição em que a iteração está.
  console.log(pessoa);
}

// juntando os dois...

// esse for vai iterar em cada elemento do array pessoas.
for(const pessoa of pessoas){
  // esse for vai iterar em cada chave do elemento em questão.
  for(const key in pessoa){
    // printar o nome da chave e o valor que a chave guarda.
    console.log(`${key}: ${pessoa[key]}`);
  }
}