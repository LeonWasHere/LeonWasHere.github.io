# Clinical Management System

## Sample
This section represents the Reports menu of the Clinical Management System. It provides a user interface that allows navigation through different reporting options, including viewing all patients, searching for a specific patient, and displaying appointment records. It also controls program flow by handling user input and calling the appropriate functions based on the selected option.

---
```python
# Class: PROG1700 
# Topic: Clinical Management System
# Group: Group 4 (John, Leon, Portia, Michael)
# Author: Leon Wasiliew
# Date: 2024-12-03

# reports()
#--------------------------------------------------------------------------------------------------------------------------------------------

# Defining the reports() function which is a primary 
def reports():
    while True: # A while loop that iterrates through the reports() Menu 
        print("\nReports Menu")
        print("Option '1': Details of the Reports Menu")
        print("Option '2': Display all Patients")
        print("Option '3': Display Specific Patient Information")
        print("Option '4': Display all Appointments")
        print("Option '5': Exit Reports")

        # Prompting the user for input which directs them to an option 
        option = input("Please enter a valid option (1-5): ").strip() # strip() is used to remove starting or leading whitespace

        # A conditional structure with if-elif-else statements that check the user input (option)

        if option == '1': # If True, then the function details will be displayed
            print("""
                  The Reports Menu is implemented to allow users the option to 
                  access the PatientMaster.txt and the AppointmentMaster.txt file.

                  Pressing '2' will trigger a function that will read you all the 
                  patients registered within the PatientMaster.txt file.

                  Pressing '3' will allow you to search for a specific patient from the
                  PatientMaster.txt file and all patients with that name will be
                  read to you. 

                  Pressing '4' will trigger a function that will read you all the 
                  appointments scheduled under the PatientMaster.txt file.

                  Pressing '5' will break the current loop you are in and it 
                  will return you to the main Menu.
                  """, end="") # end="" is used here to remove the extra newline 

        elif option == '2': # If True, then the all_patients() function will be called
            all_patients() # reads and displays all the patients in the file 

        elif option == '3': # If True, then the user is prompted for input used in the specific_patient(name) function
            name = input("\nPlease enter the name of the patient you are looking for: ").strip() 
            if all(char.isalpha() or char.isspace() for char in name.split()): # If statement that checks if the user input (name) is valid
                specific_patient(name) # searches for the given name in the file
            else: # Else statement which will be executed if the user input (name) is invalid
                print("Invalid Input! Names only contain characters and spaces.")

        elif option == '4': # If True, then the all_appointments() function will be called
            all_appointments() # displays all the appointments from a seperate file

        elif option == '5': # If True, then the user will be able to exit the current while loop
            print("\nReturning to the main Menu...")
            break # used to interrupt the while loop and return the user to the main() Menu

        else: # Else statement which will be executed if the user input (option) is invalid
            print("Invalid Input! Please enter a whole number from 1 to 5.")


# Defining the all_patients() function
def all_patients():
    print("")
    try: # The try block tests the code below to see if the PatientMaster.txt can be accessed 
        with open(file="PatientMaster.txt") as file1: # Opening PatientMaster.txt in the read mode using the with statement
            for line in file1: # A for loop that itterates through each line in file1
                print(line, end="") # displays a line from the file without the newline
            print("")
    except FileNotFoundError: # The except block will handle execute if the file is not found
        print("File Not Found Error:")
        print("The file 'PatientMaster.txt' has not been found!")


# Defining the specific_patient(name) function
def specific_patient(name):
    print("")
    try: # The try block tests the code below to see if the PatientMaster.txt can be accessed
        with open(file="PatientMaster.txt") as file1: # Opening PatientMaster.txt in the read mode using the with statement
            patient = 0 # A counter/conditional variable
            for line in file1: # A for loop that itterates through each line in file1
                if line.find(name) != -1: # If statement that checks if the user input (name) is in the line from the file
                    print(line, end="") # displays a line from the file without the newline
                    patient += 1 # A counter that will add one to the previous patient variable
                else: # Else statement which will be executed if line.find(name) equals to 0
                    patient = patient # A statement ensuring that the previous count is kept 
            if patient == 0: # If statement that checks if the counter (patient) equals to 0 
                print("The patient you are looking for was not found!")
                print("Please check your spelling (this search engine is case sensitive).")
            else: # Else statement which will be executed if the counter (patient) equals anything above 0
                print("")
    except FileNotFoundError: # The except block will handle execute if the file is not found
        print("File Not Found Error:")
        print("The file 'PatientMaster.txt' has not been found!")


# Defining the all_appointments() function
def all_appointments():
    print("")
    try: # The try block tests the code below to see if the AppointmentMaster.txt can be accesed
        with open(file="AppointmentMaster.txt") as file2: # Opening AppointmentMaster.txt in the read mode using the with statement
            for line in file2: # A for loop that itterates through each line in file2
                print(line, end="") # displays a line from the file without the newline
            print("")
    except FileNotFoundError: # The except block will handle execute if the file is not found
        print("File Not Found Error:")
        print("The file 'AppointmentMaster.txt' has not been found!")
```
---