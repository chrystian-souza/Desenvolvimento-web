// let container = document.querySelector('.container')

// async function getTodos(){
//     let request = await fetch("https://jsonplaceholder.typicode.com/todos")
//     let data = await request.json()

//     data.forEach((todo) => {
//         console.log(todo.title);
//         container.innerHTML += `
//         <p>${todo.title}</p>
//         `
        
//     });
//     // console.log(data);
//  }

//  getTodos()

//FRAMEWORK Vue.js

const app = Vue.createApp({
    data() {
        return{
        nome: 'Bem vindo ao Vue!!!',
        // linguagens: ['Python', 'HTML', 'CSS', 'Javinha'] 
        todos: []
    }
    },
    methods: {
        async getTodos(){
            let request = await fetch("https://jsonplaceholder.typicode.com/todos")
            let data = await request.json()
            this.todos = data

        }
    },
    mounted() {
        this.getTodos()
    }
})
app.mount('#app')