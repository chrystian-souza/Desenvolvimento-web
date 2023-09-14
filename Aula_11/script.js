// let texto = 'texto'
// let inteiro = 20
// let decimal = 20.0
// let boleano = true
// let lista = ['a','b','c',['d','3']]
// let objet = {
//     'nome' : 'Chrystian',
//     'email' : 'email@gmail.com' 
// }
// let bulo = null
// let indefinido = undefined

// console.log(inteiro + decimal)

// console.log(lista[3][0])

// let x = 10;
// let y = '10';


// console.log(x===y);

// function soma (a,b) {  // função tradicional

//    return a + b

// // }

// console.log(soma(10,20))
// alert(soma(15,5))

// let soma = (a,b) => a+b // função simplificada arrowfunction
// console.log(soma(5,5));

// let soma = (a,b) => {
//     console.log('estou na função');  // callback uma função que chama outra função
//     return a + b
// }

// let objetoarrow = {
//     'nome' : 'Pedro',
//     'metodo' : (nome) => {
//         console.log(this.nome);
//     }
// }

// objetoarrow.metodo()

// let objet =  {

// 'nome' : 'Pedro',
// 'metodo' : function() {
//     console.log(this.nome);
//     }
// }

// objet.nome();

// Atividade: Solicitar do usuário nome, idade e altura, crie uma função para exibir as informações;

// let nome = prompt("Qual o seu nome?"); // Variáveis
// let idade = prompt("Qual a sua idade?");
// let altura = prompt("Qual a sua altura?");

// function usuario() { // <-- Função
//     alert(`Seu nome é: ${nome}`)
//     alert(' Sua idade é: ' + idade + ' anos ')
//     alert(' Sua altura é: ' + altura) 
// }

// usuario(); // <-- Chamada da função

// for i in range(intervalo):
// for (let x = 0; x< 10 ; x++) {
//     console.log(x);
// }

// let lista = ['maça', 'pera', 'uva']


// for(let x=0 ; x < lista.length ; x++) {
//     console.log(lista[x]);
// }

// let x = 25
// function teste() {
//     for(let x = 0 ; x < 10 ; x++) {   
//     }
//     console.log(x)
// }
// teste()

// Condicionais

// if(x == z && x==z || z == x) {
//     console.log('x é igual a z');
// }else {
//     console.log("x é diferente de z");
// }

// Tudo em caixa alta
// let letra = 'Chrystian'
// letra.toUpperCase()

// Função que adiciona item a lista
// listaC = []
// listaC.push('carro')
// console.log(listaC)

// Atividade: 

//A - Exibir uma lista de todos os nomes do carro em caixa alta
// B - O nome de todos os carros mais ou igual a 3 passageiros
// C - Exibir o numero da vaga de cada carro estacionada
// D - Uma lista com todos os carros estacionados


carros = [

    ['Ford', 2, true],
    ['Volvo', 5, false],
    ['Ferrari', 2, false],
    ['Tesla', 4, false],
    ['Chevrolet', 1, true],
]

console.log(carros[0][0]);       



