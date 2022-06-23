const ask = prompt("Would you like to add an item to your list?");
let list = ['apples', 'avocado', 'oatmeal', 'bananas'];

while(ask !== "quit" && ask !== "q") {
    ask = prompt(ask); 
    break;
}

console.log("It was good to see you, and sad to see you quit!");