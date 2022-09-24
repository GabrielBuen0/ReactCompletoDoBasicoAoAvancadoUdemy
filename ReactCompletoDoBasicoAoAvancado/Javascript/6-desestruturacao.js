const frutras = ['laranja', 'banana', 'uva']

let [fruta1, fruta2, fruta3, fruta4] = frutras

//console.log(fruta1)
//console.log(fruta3)

const pessoa = {
    nome: 'João',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Português'
}

let {idade, idioma} = pessoa

//console.log(idade)
//console.log(idioma)

const localidade = ({pais, idioma}) => `Você mora no ${pessoa.pais} e fala ${pessoa.idioma}`

console.log( localidade(pessoa) )