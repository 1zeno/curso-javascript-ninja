(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
let person = {
    name : "Biricotico",
    lastname : "Dovrau",
    age : 26,
};
// ?
console.log( 'Propriedades de "person":', person );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log(Object.keys(person));
/*
Crie um array vazio chamado `books`.
*/
let books = [];
// ?

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({ name: "algo", pages: 16,});
books.push({ name: "uhul",pages: 20,});
books.push({ name: "legal",pages: 34,});          
// ?


/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:', books );
// ?

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
let removi = books.pop();
console.log(removi);
// ?

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);
// ?

/*
Converta os objetos que ficaram em `books` para strings.
*/
let converti = JSON.stringify(books);
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(converti);
// ?

/*
Converta os livros novamente para objeto.
*/
let desconverti = JSON.parse(converti);
// ?
console.log( '\nAgora os livros são objetos novamente:', desconverti );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/

for(i=0; i < books.length; i++){

    for( prop in books[i]){

        console.log(prop+":"+books[i][prop]);
    }
}

// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
let myName = [];
myName.push("E");
myName.push("M");
myName.push("A");
myName.push("N");
myName.push("U");
myName.push("E");
myName.push("L");
// ?
console.log( '\nMeu nome é: '+ myName);


/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log( '\nMeu nome juntando é: '+ myName.join(""));
// ?

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
let reverse_name = [];
for (i=myName.length-1; i>=0; i--){

    reverse_name.push(myName[i]);
}
console.log( '\nMeu nome invertido é: '+reverse_name.join(""));

// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log("normal: "+myName.sort())
console.log("reverso: "+reverse_name.sort())
// ?
})()
