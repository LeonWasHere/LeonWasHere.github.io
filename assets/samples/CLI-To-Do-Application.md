```c
/*
PROG2007 
Individual Project - Winter 2025
Name: Leon Wasiliew (W0496661)
Date: 2025-04-08
Purpose: To write a file containing entry point for the To-Do  List application. 
Handles the main menu, user input, and calls functions.
*/

// #include <stdio.h>  // Standard Library for input and output functions (e.g., printf, fgets, fprintf)
// #include <stdlib.h> // Standard Library for memory management and utility functions (e.g., malloc, calloc, realloc, free)
// #include <string.h> // Standard Library for string manipulation and functions (e.g., strcpy, strcmp, strcspn)
#include "task.h" // User-Defined Header File for constants, "Task" data structure, and function prototypes for the To-Do List

//=================================================================================================================================================

/*
Function: The main function serves as the entry point for the To-Do List application. 
Purpose: This function initializes the task array, display menu, processes user inputs to perform various task operations.
Return: 
--> int: Program exit status (0 for successful execution).
IMPORTANT: 
--> Loads tasks from the file at the start of the program.
--> Provides an interface with a menu for adding, modifying, deleting, displaying tasks. 
--> Saves tasks back to the file after modifications or additions. 
*/

int main() {
    Task *taskArray = NULL; // Pointer to the dynamic array of tasks
    int taskCount = 0; // Total number of tasks in the array

    // Load existing tasks from file to the array of tasks
    taskCount = loadTasksFromFile(&taskArray, FILENAME);

    char input[10]; // Buffer for storing user input
    char option; // Variable to hold the selected menu option
    int flag = 1; // Flag to control while loop of the menu

    // Call the display functions to remind user of tasks due today and tasks overdue
    displayTasksDueToday(taskArray, taskCount);
    displayOverdueTasks(taskArray, taskCount);

    while(flag) {
        /* Menu with options */
        printf("\n--- TO-DO APPLICATION ---\n");
        printf("1. Add a new task\n");
        printf("2. Display all tasks\n");
        printf("3. Modify a task by ID\n");
        printf("4. Delete a task by ID\n");
        printf("5. Display tasks due today\n");
        printf("6. Display overdue tasks\n");
        printf("0. Exit the Application\n");

        // Prompt the user for a menu option
        printf("Please enter a menu option: ");
        fgets(input, sizeof(input), stdin); // Read the user input using fgets() to allow for consistency and validation
        input[strcspn(input, "\n")] = 0; // Strip the newline (\n) character

        // Validate the user input
        if (strlen(input) != 1 || input[0] < '0' || input[0] > '6') { // Check if input is exactly one character and falls in the range (0-6)
            printf("Invalid Input! Please enter a valid menu option (0-6).\n");
            continue; // Skip the current iteration and retry input
        }

        option = input[0]; // Store the selected option

        /* Process the selected menu using a switch-case statement */
        switch (option) {
            case '1': // Add tasks
                int tasksAdded = addTask(&taskArray, &taskCount);
                if (tasksAdded > 0) { // Check if tasks were added successfully
                    writeTasksToFile(taskArray, taskCount, FILENAME); // Save tasks to specified file
                } else {
                    printf("No tasks were saved to the file!\n");
                }
                break;

            case '2': // Display all tasks
                displayAllTasks(taskArray, taskCount);
                break;

            case '3': // Modify a task by ID
                int modificationsMade = modifyTaskById(taskArray, taskCount);
                if (modificationsMade) { // Check if modifications were made successfully
                    writeTasksToFile(taskArray, taskCount, FILENAME); // Save tasks to specified file
                } else {
                    printf("No changes were made to the file!\n");
                }
                break;

            case '4': // Delete a task by ID
                int newTaskCount = deleteTaskById(taskArray, taskCount);
                if (newTaskCount != taskCount) { // Check if any tasks were deleted
                    taskCount = newTaskCount; // Update the task count
                    writeTasksToFile(taskArray, taskCount, FILENAME); // Save tasks to specified file 
                }
                break;

            case '5': // Display tasks due today
                displayTasksDueToday(taskArray, taskCount);
                break;

            case '6': // Display overdue tasks
                displayOverdueTasks(taskArray, taskCount);
                break;

            case '0': // Exit the application
                printf("Exiting Program...\n");
                printf("Have a wonderful day :)\n\n");
                flag = 0; // Set flag to 0 to exit the menu loop
                break;

            default: // Default case (should typically never occur due to previous validation)
                printf("Invalid Input! Please enter a valid menu option (0-6).\n");
        }
    }

    // Free dynamically allocated memory
    free(taskArray); // Ensures all resources are released before the program ends
    return 0; // Return 0 to indicate successfull execution
}
//=================================================================================================================================================
```