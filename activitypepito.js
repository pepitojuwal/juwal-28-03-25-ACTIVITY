const todos = [
    {id: 1, userId:1, title: "Go to sm"},
    {id: 2, userId:1, title: "Go to pacific"},
    {id: 3, userId:3, title: "buy iPhone"},
    {id: 4, userId:2, title: "Go shopping"},
    {id: 5, userId:1, title: "Do assignment"},
    {id: 5, userId:2, title: "Do my hair"},


    
]


function searchUserTodo (todos, userId){
    return todos.filter(todo => todo.userId === userId);

}

function searchTitle (todos, title){
    const lowerCaseTitle = title.toLowerCase();
    return todos.filter(todo => todo.title.toLowerCase()
    .includes(lowerCaseTitle));
}

const userTodos = searchUserTodo(todos, 2);
console.log(user1Todos); 

const searchResults = searchTitle(todos, "GO tO");
console.log(searchResults);