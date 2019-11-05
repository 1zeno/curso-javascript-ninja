//Desafio da semana #3


// Declarar uma variável qualquer, que receba um objeto vazio.

var vaziozao = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoas = {
    nome: 'Zezin',
    sobrenome: 'Damassa',
    sexo: 'Masculino',
    idade: 20,
    altura: 1.30,
    peso: 36,
    andando: false,
    caminhouQuantosMetros: 0
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoas.fazerAniversario = function(){
    pessoas.idade++;
};


/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoas.andar = function(metros){

    pessoas.caminhouQuantosMetros += metros;
    pessoas.andando = true;    
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoas.parar = function(){

    pessoas.andando = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoas.nomeCompleto = function(){
    return 'Olá! Meu nome é '+pessoas.nome+' '+pessoas.sobrenome;
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoas.mostrarIdade = function(){
    return 'Olá, eu tenho '+pessoas.idade+' anos!';
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoas.mostrarPeso = function(){
    return 'Eu peso '+pessoas.peso+'Kg.';
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoas.mostrarAltura = function(){
    return 'Minha altura é '+pessoas.altura+'m.';
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoas.nomeCompleto()); //Olá! Meu nome é Zezin Damassa

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoas.mostrarIdade());//Olá, eu tenho 20 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoas.mostrarPeso());//Eu peso 36Kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoas.mostrarAltura());//Minha altura é 1.3m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for (i = 0; i<3; i++){
pessoas.fazerAniversario();
}

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoas.mostrarIdade());//Olá, eu tenho 23 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoas.andar(3);
pessoas.andar(6);
pessoas.andar(9);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoas.andando);//true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoas.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoas.andando);//false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log(pessoas.caminhouQuantosMetros);//18

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoas.apresentacao = function(){
    var letra = 'o';
    var ano = 'anos';
    var metro = 'metros';

    if(pessoas.sexo === 'Feminino'){
        letra = 'a';
    };

    if(pessoas.idade === 1){
        ano = 'ano';
    };

    if(pessoas.caminhouQuantosMetros === 1 ){
        metro = 'metro';
    };

    return 'Olá, eu sou '+letra+' '+pessoas.nome+' '+pessoas.sobrenome+', tenho '+pessoas.idade+' '+ano+', '+pessoas.altura+', meu peso é '+pessoas.peso+' e, só hoje, eu já caminhei '+pessoas.caminhouQuantosMetros+' '+metro+'!';
};

// Agora, apresente-se ;)


console.log(pessoas.apresentacao());
pessoas.sexo = 'Feminino';
pessoas.idade = 1;
pessoas.caminhouQuantosMetros = 1;
console.log(pessoas.apresentacao());