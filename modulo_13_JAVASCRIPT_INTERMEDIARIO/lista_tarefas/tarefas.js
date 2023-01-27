addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("form");
  const button = form.children[1];
  button.addEventListener('click', criarTarefa);

  const input = form.children[0];
  input.setAttribute('placeholder', input.getAttribute('placeholder').toUpperCase());
})


function criarTarefa(){
  const input = this.parentElement.children[0].value;
  console.log(input);
}