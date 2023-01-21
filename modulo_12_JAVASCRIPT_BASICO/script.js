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

// no Javascript, funções podem ser guardadas em variáveis.
const foo = function(str){
  return str;
}

// vai printar a função, no caso, ela mesmo, não o valor de retorno.
console.log(foo);

// vai printar o retorno da função.
console.log(foo('bar'));

// outro exemplo: declaração de função e, depois, atribuição do valor da função em uma variável.

function printTo(num){
  for(let i = 1; i <= num; i++)
    console.log(i);
}

// chamar xpto é a mesma coisa que chamar printTo
const xpto = printTo;
console.log(xpto);
console.log(xpto(10));

// no Javascript, as propriedades de um objeto podem ser acessadas de duas formas:
const carro = {
  marca:'Ferrari',
  ano:2023,
};

// primeira forma: objeto.propriedade
console.log(carro.ano);
// segunda forma: objeto['propriedade']
console.log(carro['ano']);

// além disso, eu posso adicionar propriedades em um objeto que não estavam em sua declaração inicial.

carro.dono = 'Lucas';
console.log(carro.dono);

// no entanto, não conseguimos adicionar e/ou acessar chaves numéricas usando a forma objeto.chave.
// Precisamos, nesse caso, usar objeto['chave'].

// carro.10 = 10; dá erro

carro['10'] = 100;
console.log(carro['10']);

// também conseguimos criar um nome para a propriedade usando uma variável.
const newProp = 'Preco';

carro[newProp] = 'caro pra dedéu';

// perceba que o nome da chave não é 'newProp', mas sim 'preço'.
console.log(carro);

// ou seja: a chave é uma string.
carro.newProp = 'novaProp';
console.log(carro);

// outra forma de criar um objeto: instanciando a classe Object.
const musica = new Object();

musica.nome = "Sweet Child O' Mine";
musica.banda = "Guns N' Roses";

console.log(musica);

// perceba que o this aponta pro objeto que chamou a função nas linhas abaixo.
function media(){
  return (this.notaP1+this.notaP2)/2;
}

const aluno = {
  nome: 'Joao',
  notaP1: 4,
  notaP2: 9,
  // perceba que mediaProvas é uma chave que recebe uma função. 
  mediaProvas: media
}

console.log(aluno.mediaProvas());

// no javascript, diferentemente do typescript, não temos formas de tipar um objeto. Então, para 
// criar objetos iguais, uma forma de se fazer é utilizando funções:

function criarAluno(nome, notaP1,notaP2){
  return {
    nome: nome,
    notaP1: notaP1,
    notaP2: notaP2,
    mediaProvas: media
  }
}

const turma = [
  criarAluno('joao',10,10),
  criarAluno('edson',5,5),
]

console.log(turma);

for(const aluno of turma){
  console.log(aluno.mediaProvas());
}

// também podemos fazer a mesma coisa utilizando a keyword this.

function music(nome, banda){
  this.nome = nome;
  this.banda = banda;
  //perceba que a função não retorna nada. Para que isso crie, de fato, um objeto, deve-se instanciar utilizando o new.
}

console.log(new music('Back in Black', 'ACDC'));