/*
  O OBJETO WINDOW

  O objeto window é, de certa forma, o objeto 'padrão'. Isso significa, por exemplo, que não precisamos chamar seus métodos ou
  propriedades da maneira comum (i.e., objeto.propriedade ou objeto.metodo()). Um exemplo disso é o console.log(). 
  Console é uma propriedade do objeto window, e log é um de seus métodos. Podemos chamar a console.log, também, utilizando
  window.console.log(). Mas, pelo fato de que window é o objeto padrão, basta utilizar console.log(). Isso é verdade para todos
  os métodos e propriedades do objeto window.

  Ele é gerado automaticamente ao abrir o navegador/nova aba.
*/

const imprimirTela = () => {
  window.print();
}

const fecharAba = () => {
  window.console.log('adeus!');
  window.close();
}

/* Isso significa, também, que métodos como alert() e prompt() são do window. */
/* Chamar alguma das funções acima, no console, vai rodá-las. */

/* 
  A PROPRIEDADE DOCUMENT DO OBJETO WINDOW

  window.document faz referência ao documento html em questão. É com ela que conseguiremos modificar o html, seja por alterar elementos,
  acessar, adicionar, excluir, e assim por diante. 

  O que é o DOM(Document Object Model)?
  
  Em bom português: modelo de objetos do documento. Através do DOM, transformamos cada elemento HTML num objeto em Javascript.
*/

/* 
  ACESSANDO ELEMENTOS
  
  Para acessar elementos, podemos utilizar de vários métodos. Os mais simples são document.getElementById(), document.getElementsByTagName()
  que retorna um vetor e document.getElementsByClassName(), que também retorna um vetor.
*/

console.log(document.title.toUpperCase());

/* O innerHTML de um objeto é, exatamente, o texto em html. */
function adicionarH1(str='Ola, mundo!'){
  const h1 = document.getElementById('titulo');
  if(!!h1)
    return;
  document.body.innerHTML += `<h1 id="titulo">${str}</h1>`;
}

function adicionarH2(str='lorem ipsum'){
  document.body.innerHTML += `<h2>${str}</h2>`
}

function adicionarParagrafo(str='lorem ipsum dolor sit amet, consectetur'){
  document.body.innerHTML += `<p class="paragrafo">${str}</p>`;
}

function criarElementoComPartesNaoRenderizadas(){
  let elemento = '<div id="novo"> <p>exemplo</p> <div id="no">xxxx</div> </div>'
  document.body.innerHTML += elemento;
  // Perceba que, na próxima linha, a id com conteúdo 'xxxx' não vai ser mais renderizada.
  document.getElementById('no').style.display = 'none';
  elemento = document.getElementById('novo')

  /* O innerHTML é exatamente o HTML, enquanto que o innerText mostra apenas o que está renderizado na tela. O textContent mostra
     o conteúdo do texto em HTML, mesmo que não esteja renderizado. */
  console.log(elemento.innerHTML);
  console.log(elemento.innerText);
  console.log(elemento.textContent);

}

/* Os atributos vanilla de um elemento podem ser alterados diretamente. Perceba que o que estava em kebab-case, no exemplo do css,
   virou camelCase.
*/
function modificarCorDeFundo(cor){
  document.body.style.backgroundColor = cor;
}
/* Para mexer na classe de um elemento, use className. */
function retirarClasseDeElemento(idElemento){
  document.getElementById(idElemento).className='';
}

/* Atributos não-vanilla podem ser criados, alterados e acessados. */
function adicionarAtributoH1(att, valor){
  const h1 = document.getElementById('titulo');
  h1.setAttribute(att,valor);
}

function toggleValoresH1(att){
  const h1 = document.getElementById('titulo');

  const attribute = h1.getAttribute(att);
  const text = h1.innerText;
  const temp = attribute;
  h1.innerText = temp;
  h1.setAttribute(att, text);
}

function mudarH1(input){
  const h1 = document.getElementById('titulo');
  if(!h1 && !input)
    return;
  h1.innerText = input.value != '' ? input.value : 'Ola, mundo!';
}

function trocarCorDeFundo(novaCor = 'black'){
  document.body.style.backgroundColor = novaCor;
}

// Existe uma forma de captar eventos. A forma é: objeto.addEventListener(evento, função que é acionada quando o evento ocorre.)

const input = document.getElementById('input');
// as funções javascript também são variáveis. No exemplo abaixo, estou mandando exatamente a função que é acionada quando o evento ocorre.
// Se eu colocasse parênteses, eu estaria chamando a função.
input.addEventListener('mouseover', inserirTexto);
input.addEventListener('mouseout', retirarTexto);

function inserirTexto(){
  this.value = 'lorem ipsum';
}

function retirarTexto(){
  this.value = '';
  console.log(this);
}

/* 
  SOBRE O OPERADOR THIS
  O 'this' varia dependendo se estamos falando de classes, funções ou num script global.
  Em funções, o this sempre vai fazer referência ao objeto que está chamando a função.
  OBS: não é o objeto que tem a função como propriedade, mas sim o objeto que está chamando a função! 
  Exemplo:
*/
function getThis(){
  return this;
};

const testObj = {
  name: 'foo',
  getThis: getThis,
}

const xpto = {
  x: 'pto',
  getThis(){
    return this;
  }
}

const novoObj = {age: 300, getThis: xpto.getThis};

console.log(testObj.getThis()); // vai printar {name: 'foo', getThis: f}, pois, nesse caso, this se refere ao objeto que chama a função
console.log(xpto.getThis()); // vai printar o objeto xpto.
console.log(novoObj.getThis()); // perceba que o método getThis de novoObj recebe, por atribuição, o getThis de xpto. No entanto,
                                // o objeto que está chamando getThis é novoObj, portanto, o this é o próprio objeto novoObj.

/* 
  NO ENTANTO, O COMPORTAMENTO MUDA QUANDO USAMOS ARROW FUNCTIONS.
*/
const globalThis = this; // objeto window

const obterThis = () => this; // esse this é o globalThis, ou seja, o objeto window.

const teste2 = {
  name: 'bar',
  obterThis: obterThis,
}

const teste3 = {
  name: 'nobodyyesdoor',
  returnThis: () => this,
}


console.log(teste2.obterThis()); // ele printa o objeto window!
console.log(teste3.returnThis()); // também printa o objeto window!

/// portanto, não use arrow functions como métodos de objetos!
// existem mais detalhes sobre o this, mas, por enquanto, isso basta!

/* 
  ACESSANDO ELEMENTOS FILHOS 
  Para acessar os elementos filhos de um elemento HTML, basta usar a propriedade children, que retorna uma lista com todos os filhos.

  ACESSANDO ELEMENTOS PAIS
  Para acessar os elementos pais de um elemento HTML, basta usar a propriedade parentElement, que retorna o elemento pai.
*/

const exemplo = document.getElementById('xpto');
const filhosExemplo = exemplo.children

console.log(filhosExemplo); // retorna [h2, p]
console.log(filhosExemplo[0].parentElement); // retorna a div com id = 'xpto'

/* 
  O OBJETO JSON serve para pegar um objeto e transformá-la numa string ou fazer o contrário.
  A função stringify transforma o objeto numa string, e a função parse transforma uma string num objeto.
  É importante notar que, no caso da função parse, a string deve ter cada chave entre parenteses.
*/

const newObj = {
  name: 'lucas',
  curso: 'engenharia de software'
}

// perceba que só a chave precisa estar entre aspas duplas. O elemento só precisa estar entre aspas duplas se seu tipo for string.
const strToJSON = '{"name": "sofia", "curso": "fisioterapia", "idade": 21, "estudando": true}'

console.log(JSON.stringify(newObj)); // printa o objeto em formato de string
console.log(JSON.parse(strToJSON)); // printa a string em formato de objeto
