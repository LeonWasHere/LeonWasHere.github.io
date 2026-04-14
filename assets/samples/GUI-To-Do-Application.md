# GUI To-Do Application

## Sample
This section represents the main React component of the GUI To-Do application. It manages the application state using the useState hook, handles adding, deleting, and modifying tasks, and coordinates data flow between the TaskField input component and the TaskList display component.

---
```js
/**
 * Class: PROG2700 (JavaScript)
 * Name: Leon Wasiliew
 * Student ID: W0496661
 * Date: 2025-04-13
 * Purpose: This file is the core component of the React To-Do application,
 * and acts as the central point by managing components and states.
 */

import React, { useState } from 'react'; // Import React and "useState hook" for managing component state
import './App.css'; // Import the CSS Stylesheet for styles
import TaskList from './components/TaskList'; // Import component that is responsible for rendering the list of tasks
import TaskField from './components/TaskField.js'; // Import component that handles the input field for adding tasks

function App() {
  // Initialize the "state variable" 'taskList' to store the list of tasks
  // The function used to update this state is 'updateTaskList'
  const [taskList, updateTaskList] = useState([]); // Mangage the To-Do List
  
  // Function to add a new task to the list  
  const addTask = (newTask) => { 
    // Create a new array by adding (.concat) the new task to the end of the existing tasks
    const newTasks = taskList.concat(newTask);
    updateTaskList(newTasks); // Update the state with the new array
  };

  // Function to delete a specific task  
  const deleteTask = (index) => { 
    // Create a new array by excluding the task at the specified index (cutting out)
    const newTasks = taskList.slice(0, index).concat(taskList.slice(index + 1));
    updateTaskList(newTasks); // Update the state with the new array
  }; 

  // Function to modify a specific task
  const modifyTask = (index, updatedTask) => { 
    const newTasks = [...taskList]; // Create a copy of the current task list (with spread operator [...])
    newTasks[index] = updatedTask; // Replace the task at the specified index
    updateTaskList(newTasks); // Update the state with the modified list
  };

  return (
    <div className="App">
    {/* Display the app title (main header) */}
    <h1>Leon's To-Do List</h1>

    {/* Show the input field for adding tasks */}
    <TaskField addTask={addTask} />

    {/* Show the list of tasks only if there are task */}
    {taskList.length > 0 && (<TaskList taskList={taskList} deleteTask={deleteTask} modifyTask={modifyTask} />)}

    </div>
  );
}

// Export the "App" component so it can be used in other files
export default App;

/* References:
1. React useState - Difference: https://dev.to/aasthapandey/why-to-use-usestate-in-react-pkf
2. React useState - Use Case: https://medium.com/@blaircrumbly/understanding-state-in-react-why-it-matters-and-when-to-use-it-e00cad672889
3. React useState - Example: https://www.w3schools.com/react/react_usestate.asp
4. React useState - Convention: https://react.dev/reference/react/useState
5. Spread operator - Copy Array: https://www.w3schools.com/REACT/react_es6_spread.asp
6. Spread operator - Example: https://v1.scrimba.com/articles/react-spread-operator/
7. React To-Do List Example: https://www.makeuseof.com/react-to-do-list-app-build-simple/
8. React Shortcuts - IMPORTANT: https://dev.to/roshdiraed/important-shortcuts-in-react-you-must-know-it--1ek5
*/
```
---