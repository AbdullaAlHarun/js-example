const toDoList = [
    "Buy Groceries",
    "Complete projects",
    "Exercies",
    "Read a Book",
    "Attend Meeting",
];

// Task 1 : You realize that you forget to add "Walk to the Dog" to your to do list. Add it to th3e list 

toDoList.push("Walk to the Dog")

//console.log(toDoList)

// Task 2: You receive a call and you need to attend an emeargy meeting. Remove the "Attend Meeting" task from your list 

if (toDoList.includes("Attend Meeting")){
    const indexOfMetteing = toDoList.indexOf("Attend Meeting");
    toDoList.splice(indexOfMetteing,1)
}

console.log(toDoList)
