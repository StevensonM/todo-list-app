let input = prompt('What would you like to do?');
const todos = ['Space holder sentence', 'Another space holder'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('-----------------------------')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('-----------------------------')
    } else if (input === 'new') {
        const newTodo = prompt('What is your new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, we deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('What would you like to do?')
}
console.log('Okay, you have quite the app.')