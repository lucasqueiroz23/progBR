function retornaMaioresDeIdade(){
    const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade>=18);
    maioresDeIdade.forEach(pessoa => console.log(pessoa.nome + ' tem ' + pessoa.idade + ' anos de idade!'));
};

const pessoas = [
    {
        nome: 'Lucas',
        idade: 21,
    },
    {
        nome: 'Gustavo',
        idade: 16,
    },
    {
        nome: 'Sofia',
        idade: 21,
    },
    {
        nome: 'Arthur',
        idade: 20,
    },
    {
        nome: 'Pedro',
        idade: 18,
    },
    {
        nome: 'Tiago',
        idade: 15,
    },
    {
        nome:'João',
        idade: 14,
    },
];


retornaMaioresDeIdade();
