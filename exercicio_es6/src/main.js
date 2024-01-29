let alunosDaTurma = [
    {
        nome: 'Breno',
        nota: 8
    },
    {
        nome: 'Arthur',
        nota: 5.8
    },
    {
        nome: 'Pedro',
        nota: 6
    },
    {
        nome: 'Lucas',
        nota: 7
    }, 
    {
        nome: 'Carol',
        nota: '5.5'
    }
]

let alunosAcimaDaMedia = alunosDaTurma.filter(aluno => {
    return aluno.nota >= 6
})

console.log(alunosAcimaDaMedia)