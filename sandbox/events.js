// events.js
let tasks = [];

//function that passes in an object and returns a string of html
function todoTemplate(task){
    return `<li ${task.completed ? 'class="strike"' : ""}>
    <p>${task.detail}</p>
    <div>
      <span data-function="delete">❎</span>    
      <span data-function="complete">✅</span>
    </div>  
  </li>`;  // ``back-tick-JS template literal string-lets you embed variables ${task.completed} (i.e. variable you want) which references and outputs our completed part, and puts it in the <p>${task.detail} (adds the detail part)
}          // the data-function attribute in the div is a way to pass info (i.e. to know which was the delete and which was the complete) event.target.dataset.function

function renderTasks(tasks) {
  // get the list element from the DOM
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
    console.log("render:", tasks);
    const html = tasks.map(todoTemplate);
    console.log(html);
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = html.join(""); //take the array list of strings and squish into one long string  
}
function newTask() {
  // get the value entered into the #todo input
    const todoInput = document.querySelector("#todo");
    console.log(todoInput.value);
  // add it to our arrays tasks...an object(key value pairs) is created in javascript using curly braces{}. can have as many items as you want
    const newTask = {
      detail: todoInput.value,
      completed: false
    };      
    tasks.push(newTask);  // can add a string of objects instead of just one value
  // render out the list
    renderTasks(tasks);
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[1].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);    //points to the thing that triggered the event
  console.log(event.currentTarget);     //points to the thing the event handler was attached to
  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't
  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
  const item = event.target.closest("li"); //not from the document, we start with the thing clicked on- the event target
  const action = event.target.dataset.function;
  if (action === "delete") {
    removeTask(item);
  } 
  else if (action === "complete") {
      completeTask(item);
}
}
// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.querySelector("#submitTask").addEventListener("click", newTask)   /*reference the DOM, grab the submit button using ID, can assign to a variable if doing lots with it, add event listener-needs (what type event, what function to run)*NO parenthesis*/
document.querySelector("#todoList").addEventListener("click", manageTasks)
