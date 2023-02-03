addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("form");
  const [input, button] = form.children;
  button.addEventListener('click', criarTarefa);
  input.setAttribute('placeholder', input.getAttribute('placeholder').toUpperCase());
})


function criarTarefa(){
  const input = this.parentElement.children[0].value;
  const tarefas = localStorage.getItem('tarefas');
  if(!tarefas){
    localStorage.setItem('tarefas', [input]);
  }
  localStorage.setItem('tarefas', [tarefas, input]);
  this.parentElement.children[0].value = ''
}