let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let cidade = document.querySelector('.form-control')
async function getApi(cidade) {
    let request = await fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${cidade}`)
    let data = await request.json()
    // exibição
    container.innerHTML += `
    <p>${data['name']}</p>
    <p>Temperatura: ${data['main']['temp']}</p>
    <p>Temperatura Max: ${data['main']['temp_max']}</p>
    <p>Temperatura Min: ${data['main']['temp_min']}</p>
    <p> descricao: ${data['weather'][0]['description']}</p>
    `
}
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    getApi(cidade.value)
})