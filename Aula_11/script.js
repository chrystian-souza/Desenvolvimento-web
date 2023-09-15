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


// carros = [

//     ['Ford', 2, true],
//     ['Volvo', 5, false],
//     ['Ferrari', 2, false],
//     ['Tesla', 4, false],
//     ['Chevrolet', 1, true],
// ]

// for(let x = 0; x < carros.length; x++) {

//     let nomeCarros = carros[x][0];
//     console.log(nomeCarros.toUpperCase());
// }

// for(let x = 0; x < carros.length; x++) {

//     let nomeCarros = carros[x][2];
//     if(nomeCarros === true) {
//         let soma = x + 5
//         console.log(soma);

//     }

// }
   
// console.log(carros[0][0]);       
// console.log(carros[1][0]);       
// console.log(carros[2][0]);       
// console.log(carros[3][0]);       
// console.log(carros[4][0]);       

// let lista = [1,2,3,4,5,6,7,8,9,10]
// let quadrado = lista.map((numero)=> numero*numero)
// console.log(quadrado);

// let produtos = ['Carro', 'Moto', 'Bicicleta', 'Batera']
// let novonome = produtos.map((produto)=> produto + 'Novo') // Alteração dentro de cada elemento
// console.log(novonome);

// let produtos = ['Carro', 2, 'Bicicleta', 'Batera']
// // let filtro = produtos.filter((produto)=> produto === 'Moto') // ou
// let filtro = produtos.filter((produto) => {
//     return produto == 'Carro';
    
// });

// console.log(filtro);


// Atividade: 

//A - Exibir uma lista de todos os nomes do carro em caixa alta
// B - O nome de todos os carros mais ou igual a 3 passageiros
// C - Exibir o numero da vaga de cada carro estacionada
// D - Uma lista com todos os carros estacionados

// carros = [

//         ['Ford', 2, true],
//         ['Volvo', 5, false],
//         ['Ferrari', 3, false],
//         ['Tesla', 4, false],
//         ['Chevrolet', 1, true],
//     ]
    

// let maiusculo = carros.map((nome) =>nome[0].toUpperCase())
// let passageiros = carros.filter((carro)=> carro[1] >= 3).map((nomecarro)=>nomecarro[0])
// let estacionado = carros.filter((carro)=>carro[2] == true).map((nomecarro)=>nomecarro[0])
// console.log(maiusculo);
// console.log(passageiros)
// console.log(estacionado);


// Atividade
// A: Um array contendo todas as notas
// B: O nome dos alunos com a nota emcima da media

const students = [
    {nome: 'Alice', nota: 85},
    {nome: 'Bob', nota: 72},
    {nome: 'Charlie', nota: 90},
    {nome: 'David', nota: 65},
    {nome: 'Eve', nota: 88},
];

let notas = students.map((nota)=>nota.nota)
let alunos= students.map((alunos)=>alunos.nome)
let media = notas.map((notas)=> notas 

  
    

)

// console.log(notas)
// console.log(alunos)
console.log(media)

