

// let forName = document.querySelector('.form-name')
// let listNames = document.querySelector('tbody')





//     // console.log(await getApi());

//     let infoNames = await getApi();

//     infoNames.forEach(function (item) {
//         // console.log(item ['periodo']);

//         listNames.innerHTML += 
//     `<tr>
//         <td>${ item['Nome']}</td>
//         <td>${ item['Email']}</td>
//         <td>${ item['Telefone']}</td>
//         <td>${ item['site']}</td>
//     </tr>`
        
//     });
  


//   async function getApi() {
//     let request = await fetch(`https://jsonplaceholder.typicode.com/users/`)
//     let response = await request.json()
//     return response
    
// }


let listNames = document.querySelector('tbody');

// Função para carregar os dados da API
async function loadApiData() {
    try {
        let infoNames = await getApi();

        infoNames.forEach(function (item) {
           let endereco = `${item.address.street} ${item.address.suite} ${item.address.city} ${item.address.zipcode}`
           console.log(endereco);
            listNames.innerHTML += 
            `<tr>
                <td>${item['name']}</td>
                <td>${item['username']}</td>
                <td>${item['email']}</td>
                <td>${endereco}</td>
                <td>${item['phone']}</td>
                <td>${item['website']}</td>
            </tr>`;
        });
        
    } catch (error) {
        console.error(error);
    }
}

async function getApi() {
    let request = await fetch(`https://jsonplaceholder.typicode.com/users/ `);
    let response = await request.json();
    return response;
}

// Chame a função para carregar os dados da API quando a página carregar
loadApiData();

