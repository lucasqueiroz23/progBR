addEventListener('DOMContentLoaded', ()=>{
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', gerarSorteio);
})

function gerarSorteio(){
  const randomNumber = Math.random();
  const resposta = document.getElementById('res');
  resposta.innerText = Math.floor((randomNumber * 100));
  setInterval(mudarCorDoNumero, 1000);
}

function mudarCorDoNumero(){
  const [r,g,b] = [Math.floor(Math.random()*10000%256), Math.floor(Math.random()*10000%256), Math.floor(Math.random()*10000%256)];
  document.getElementById('res').style.color = `rgb(${r},${g},${b})`;
}