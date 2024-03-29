// Import statements to bring in functions and data from other modules
import { createTodo, projectsArray } from "./projects.js"; // Importing createTodo function and projectsArray
import { activeTodoDiv } from "./activeProject.js"; // Importing activeTodoDiv

// Create a container for the todo form
const todoFormContainer = document.createElement("div");
todoFormContainer.setAttribute("id", "todo-form-container");
todoFormContainer.classList.add("div-background");

// Create the header for the todo form
const todoDivHead = document.createElement("div");
const todoDivHeader = document.createElement("p");
todoDivHead.setAttribute("id", "todo-div-head");
todoDivHeader.setAttribute("id", "todo-div-header");
todoDivHeader.textContent = "Create To-Do";

// Create the todo form and its elements
const todoFormDiv = document.createElement("div");
const todoForm = document.createElement("form");
todoFormDiv.setAttribute("id", "todo-form-div");
todoForm.setAttribute("id", "todo-form");

// Create input fields for todo properties (title, due date, description, priority, notes)
const todoTitleDiv = document.createElement("div");
const todoTitleLabel = document.createElement("label");
const todoTitleInput = document.createElement("input");
todoTitleDiv.setAttribute("id", "todo-title-div");
todoTitleDiv.classList.add("form-elements");
todoTitleLabel.textContent = "Title:";
todoTitleInput.setAttribute("type", "text");

const todoDueDateDiv = document.createElement("div");
const todoDueDateLabel = document.createElement("label");
const todoDueDateInput = document.createElement("input");
todoDueDateDiv.setAttribute("id", "todo-duedate-div");
todoDueDateDiv.classList.add("form-elements");
todoDueDateLabel.textContent = "Date:";
todoDueDateInput.setAttribute("type", "date");

const todoDescriptionDiv = document.createElement("div");
const todoDescriptionLabel = document.createElement("label");
const todoDescriptionInput = document.createElement("input");
todoDescriptionDiv.setAttribute("id", "todo-description-div");
todoDescriptionDiv.classList.add("form-elements");
todoDescriptionLabel.textContent = "Description:";
todoDescriptionInput.setAttribute("type", "text");

const todoPriorityDiv = document.createElement("div");
const todoPriorityLabel = document.createElement("label");
const todoPriorityInput = document.createElement("input");
const todoPriorityLevels = document.createElement("div");
const todoPriorityLow = document.createElement("p");
const todoPriorityMid = document.createElement("p");
const todoPriorityHigh = document.createElement("p");
todoPriorityDiv.setAttribute("id", "todo-priority-div");
todoPriorityDiv.classList.add("form-elements");
todoPriorityLabel.textContent = "Priority:";
todoPriorityInput.setAttribute("type", "range");
todoPriorityInput.setAttribute("min", "1");
todoPriorityInput.setAttribute("max", "3");
todoPriorityInput.setAttribute("value", "1");
todoPriorityLevels.setAttribute("id", "priority-levels");
todoPriorityLow.textContent = "Low";
todoPriorityLow.style.textShadow = "0 0 7px red";
todoPriorityMid.textContent = "Mid";
todoPriorityMid.style.textShadow = "0 0 7px yellow";
todoPriorityHigh.textContent = "High";
todoPriorityHigh.style.textShadow = "0 0 7px #39fc03";

const todoNotesDiv = document.createElement("div");
const todoNotesLabel = document.createElement("label");
const todoNotesInput = document.createElement("textarea");
todoNotesDiv.classList.add("form-elements");
todoNotesDiv.setAttribute("id", "todo-notes-div");
todoNotesInput.setAttribute("rows", "5");
todoNotesLabel.textContent = "Notes:";

// Create a submit button for the todo form
const todoSubmitDiv = document.createElement("div");
const todoSubmitBtn = document.createElement("button");
todoSubmitDiv.setAttribute("id", "todo-submit-div");
todoSubmitBtn.textContent = "Submit";

// Append elements to the todo form
todoFormContainer.appendChild(todoDivHead);
todoFormContainer.appendChild(todoFormDiv);
todoDivHead.appendChild(todoDivHeader);
todoFormDiv.appendChild(todoForm);
todoForm.appendChild(todoTitleDiv);
todoForm.appendChild(todoDueDateDiv);
todoForm.appendChild(todoDescriptionDiv);
todoForm.appendChild(todoPriorityDiv);
todoForm.appendChild(todoNotesDiv);
todoForm.appendChild(todoSubmitDiv);
todoTitleDiv.appendChild(todoTitleLabel);
todoTitleDiv.appendChild(todoTitleInput);
todoDueDateDiv.appendChild(todoDueDateLabel);
todoDueDateDiv.appendChild(todoDueDateInput);
todoDescriptionDiv.appendChild(todoDescriptionLabel);
todoDescriptionDiv.appendChild(todoDescriptionInput);
todoPriorityDiv.appendChild(todoPriorityLabel);
todoPriorityDiv.appendChild(todoPriorityLevels);
todoPriorityLevels.appendChild(todoPriorityLow);
todoPriorityLevels.appendChild(todoPriorityMid);
todoPriorityLevels.appendChild(todoPriorityHigh);
todoPriorityDiv.appendChild(todoPriorityInput);
todoNotesDiv.appendChild(todoNotesLabel);
todoNotesDiv.appendChild(todoNotesInput);
todoSubmitDiv.appendChild(todoSubmitBtn);

// Function to get the active project's todos
const pushToActiveProject = () => {
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray[i].active == true) {
      return projectsArray[i].todos;
    }
  }
};

// Event listener for the todo form submission
todoSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < projectsArray.length; i++) {
    if (projectsArray.length > 0 && projectsArray[i].active == true) {
      // Create a new todo and add it to the active project
      createTodo(
        todoTitleInput.value,
        todoDueDateInput.value,
        todoDescriptionInput.value,
        todoPriorityInput.value,
        todoNotesInput.value,
        false,
        pushToActiveProject() // Function to get the active project's todos
      );

      // Reset the form
      todoForm.reset();
    }
  }
  // Set data-todo-index attribute for activeTodoDiv children
  for (let i = 0; i < activeTodoDiv.children.length; i++) {
    activeTodoDiv.children[i].setAttribute("data-todo-index", i);
  }
});

// Export the todo form container
export { todoFormContainer };
