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

// console.log(toDoList)

// Task3: You want to take break and do something relaxing. Extract the task related to relaxation 
// (index 2 to index , inclusive) into a new array called relaxationTask 

const relaxationTask = toDoList.slice(2,5)

//console.log(relaxationTask)

// Task4: You want to check if "Buy Groceries" is still on your list. If it is, mark it as completed by removing it

if (toDoList.includes("Buy Groceries")){
    const indexOfGroceries = toDoList.indexOf("Buy Groceries");
    toDoList.splice(indexOfGroceries,1);
}
// console.log(toDoList);

// Task:5 You receeive a new task "Call a Friend" but you are not sure if it's already on your list. check if it 
// is there . if not add it! 

if (!toDoList.includes("Call a Friend")){
    toDoList.push("Call a Friend");
}
console.log(toDoList);