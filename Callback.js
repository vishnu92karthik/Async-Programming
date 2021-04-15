const getTodo = callback =>{
    setTimeout(() =>{
        callback({text: 'completed'})
    },2000)
}

getTodo(todo =>{
    console.log(todo.text);
})