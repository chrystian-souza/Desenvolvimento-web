// let container = document.querySelector('.container')
// let formulario = document.querySelector('.formulario')
// let tarefa = document.querySelector('.tarefa')
// let listaTarefa = document.querySelector('.lista')


// formulario.addEventListener('submit' , function (event) {
//     event.preventDefault();  //ignora as propriedades defaut de um elemento 
    //console.log(tarefa.value);

//     let item = document.createElement('li')
//     item.innerHTML = tarefa.value
//     listaTarefa.appendChild(item)

//     listaTarefa.innerHTML += `<li>${tarefa.value}</li>` 

//   })

// formulario.addEventListener('submit' , function (event) {
//     event.preventDefault();  

//     listaTarefa.innerHTML += `<li class="vermelho">${tarefa.value}</li>` 
//     let itens = document.querySelectorAll('li')
//     itens.forEach(function(item){
//         item.addEventListener('click', function(event) {
//             // console.log(item.innerHTML);
//             // item.remove();
//             // item.classList.add('vermelho')
//             // item.classList.remove('vermelho')
//              item.classList.toggle('vermelho')
//         })
//         })

//     })
    

//  async function getname() {
//     let request = await fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/chrystian');
//     let response = await request.json()
//     // console.log(response);
//     console.log(response[0] ['nome']);

//   }

//   getname()

// função de manipulação de DOM

let forName = document.querySelector('.form-name')
let listNames = document.querySelector('tbody')
let inputName = document.querySelector('.form-control')


forName.addEventListener('submit', async function(e) {
    e.preventDefault()

    // console.log(await getApi());

    let infoNames = await getApi(inputName.value);

    infoNames.forEach(function (item) {
        // console.log(item ['periodo']);

        listNames.innerHTML += 
    `<tr>
        <td>${ item['periodo']}</td>
        <td>${ item['frequencia']}</td>
    </tr>`
        
    });


    
   
})

  async function getApi(name) {
    let request = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${name}`)
    let response = await request.json()
    console.log(response);
    return response[0]['res']
}