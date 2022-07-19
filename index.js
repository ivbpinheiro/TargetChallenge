//Nota: Os exercícios devem ser executados separadamente pois há mais de uma função assíncrona na resolução;


//1) Observe o trecho de código abaixo:
let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE){
  K = K + 1;
  SOMA = SOMA + K;
};

console.log(SOMA);

//Resposta SOMA = 91

//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

//Leitura do número a partir do terminal, utilizando uma função assíncrona no Node.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

async function readInput() {
  const it = rl[Symbol.asyncIterator]();
  const readNum = await it.next();
  return readNum
}

function start() {
  return readInput();
}

(async() => {
  let index = 0;
  let indexAux = 1;
  let indexSum = 0;
  let fibList = [];
  console.log("");
  console.log("Digite um número para saber se ele pertence à sequência de Fibonacci");
  const readNum = await start();  
  fibList.push(index, indexAux);  
  for(let i = 0; i <= readNum.value; i++){
    if(indexSum <= readNum.value){
      indexSum = index + indexAux;
      fibList.push(indexSum);
      index = indexAux;
      indexAux = indexSum;
    }else{
      break;
    }
  }
  console.log("A sequência de Fibonacci é:");
  console.log(fibList);
  if(fibList.find(element => element == readNum.value) || readNum.value == 0){
    console.log("O número " + readNum.value + " pertence à sequência de Fibonacci");
  } else{
    console.log("O número " + readNum.value + " não pertence à sequência de Fibonacci");
  }
  return 0;
})();

/*5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});

async function readInput() {
  const it = rl[Symbol.asyncIterator]();
  const string = await it.next();
  return string
}

function start() {
  return readInput();
}

(async() => {
  console.log("");
  console.log("Digite uma palavra pra ser invertida");
  string = await start(); 
  string = string.value;
  var stringReverse = '';
  for(var i = string.length - 1; i >= 0; i--){
      stringReverse = stringReverse.concat(string[i]);
  }  
  console.log(stringReverse);
  return 0;
})();
