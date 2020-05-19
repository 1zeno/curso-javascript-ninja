/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 

let valores = [1,2,3,4,5];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function receber(arrayzao){
    return arrayzao;
};
// ?

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(receber(valores)[1]);
// 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function dois(arrayzao,numerozao){
    return arrayzao[numerozao];
}
// ?

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
cincao = [1,2,3,4,5];
// ?

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(receber(cincao));
// [ 1, 2, 3, 4, 5 ]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name){

    objetin = {
        lor1 : {
            qtd : 1,
            autor : "jj",
            editora : "sla",
        },
        lor2 : {
            qtd : 2,
            autor : "ee",
            editora : "isso",
        },
        lor3 : {
            qtd : 3,
            autor : "uu",
            editora : "aqui",
        },
        
    }

    if (name){
        return objetin[name];
    }else{
        return objetin;
    }
}
console.log(book("lor3"));
// ?

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro lor2 tem "+book("lor2").qtd+" páginas!");
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro lor1 é "+book("lor1").autor);
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro lor3 foi publicado pela editora "+book("lor3").editora);
// ?
