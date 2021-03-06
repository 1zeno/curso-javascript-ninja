/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
let sum = function calculateSum(num1, num2){
  soma = num1+num2;
  return soma;
}
// ?

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
console.log("A soma de 1 e 2 é igual a "+sum(1,2)+".");
// ?

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log("O nome da função que faz a soma é "+sum.name+".");
// ?

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
  return showName.name;
}
// ?
console.log(showName);
/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ?

let varShowName = function showName(){
  return showName.name;
};

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?
console.log("A função "+varShowName.name+" retorna "+varShowName()+".");
/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?
function calculator(operator){

  if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/" && operator !== "%"){

    return "Operação inválida."
  }else{

    return function(number1, number2){

      if (operator === "+"){
        let result = number1+number2;
        return "Resultado da operação: "+ number1+ operator+ number2+" = "+result+".";
      }
      if (operator === "-"){
        let result = number1 - number2;
        return "Resultado da operação: "+ number1+ operator+ number2+" = "+result+".";
      } 
      if (operator === "*"){
        let result = number1 * number2;
        return "Resultado da operação: "+ number1+ operator+ number2+" = "+result+".";
      } 
      if (operator === "/"){
        let result = number1 / number2;
        return "Resultado da operação: "+ number1+ operator+ number2+" = "+result+".";
      } 
      if (operator === "%"){
        let result = number1 % number2;
        return "Resultado da operação: "+ number1+ operator+ number2+" = "+result+".";
      } 

    }

  }
}
  
/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?
let suma = calculator("+");
/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(suma(30,40));
// ?

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?
let subtraction = calculator("-");
let multiplication = calculator("*");
let division = calculator("/");
let mod = calculator("%");
/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
console.log(subtraction(3,3));
console.log(multiplication(3,3));
console.log(division(3,3));
console.log(mod(3,3));
// ?