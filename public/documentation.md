---

layout: default
title: Documentation
---

<nav style="margin-bottom: 15px;">
    <a href="/public/about">About</a> |
    <a href="/public/skills">Skills</a> |
    <a href="/public/projects">Projects</a> |
    <a href="/public/samples">Samples</a> |
    <a href="/public/documentation">Documentation</a> |
    <a href="/public/reflection">Reflection</a> |
    <a href="/public/contact">Contact</a>
</nav>

# Documentation

---

### MOBI3002 - Cake Ordering App
The README.md file part of the GIT Repository to keep track of my program and my documents for the Final Project in MOBI3002 - Mobile Application Development.

### RESOURCES:
https://kotlinlang.org/docs/data-classes.html


### GENERAL STRUCTURE:
1.	Android Developers. (n.d.). Kotlin coroutines on Android. Android Developers. https://developer.android.com/kotlin/coroutines
2.	Android Developers. (n.d.). SQLiteOpenHelper. Android Developers. https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper
3.	Android Developers. (2019). ViewModel Overview  |  Android Developers. Android Developers. https://developer.android.com/topic/libraries/architecture/viewmodel
4.	Android Developers. (2023). Debug your database with the Database Inspector. Android Developers. https://developer.android.com/studio/inspect/database?utm_source=android-studio
5.	Android Developers. (2025). ContentValues  |  API reference  |  Android Developers. Android Developers. https://developer.android.com/reference/android/content/ContentValues
6.	Android Developers. (2025). MessageDigest  |  API reference  |  Android Developers. Android Developers. https://developer.android.com/reference/kotlin/java/security/MessageDigest
7.	Draw.io. (2024). Diagram Software and Flowchart Maker. Www.drawio.com. https://www.drawio.com/
8.	GeeksforGeeks. (2017, July 12). Java SimpleDateFormat | Set 1. GeeksforGeeks. https://www.geeksforgeeks.org/java/java-simpledateformat-set-1/
9.	GeeksforGeeks. (2020, September 9). Launch vs Async in Kotlin Coroutines. GeeksforGeeks. https://www.geeksforgeeks.org/kotlin/launch-vs-async-in-kotlin-coroutines/
10.	GeeksforGeeks. (2020, September 9). Suspend Function In Kotlin Coroutines. GeeksforGeeks. https://www.geeksforgeeks.org/kotlin/suspend-function-in-kotlin-coroutines/
11.	iStock. (2025). Banana. Istockphoto.com. https://media.istockphoto.com/photos/banana-picture-id120492078?k=6&m=120492078&s=612x612&w=0&h=a4FNBRMoufM4ewkS2RiChWoO3be5HTmRl6_6dP9QB9I=
12.	JetBrains. (2025). Kotlin Help. Kotlin Help. https://kotlinlang.org/docs/data-analysis-connect-to-db.html#connect-to-database
13.	JetBrains. (2025). startsWith. Kotlin Help. https://kotlinlang.org/api/core/kotlin-stdlib/kotlin.text/starts-with.html
14.	JetBrains. (2025, October 2). Data classes | Kotlin. Kotlin Help. https://kotlinlang.org/docs/data-classes.html
15.	Krita Foundation. (2019). Krita | Digital Painting. Creative Freedom. Krita.org. https://krita.org/en/
16.	stackoverflow. (2019, August 17). update sql database with ContentValues and the update-method. Stack Overflow. https://stackoverflow.com/questions/3760774/update-sql-database-with-contentvalues-and-the-update-method
17.	stackoverflow. (2021, June 7). kotlin sort list of stings by startsWith(). Stack Overflow. https://stackoverflow.com/questions/67871838/kotlin-sort-list-of-stings-by-startswith
18.	stackoverflow. (2022, February 8). I have a hard time understanding the purpose of a “backing property.” Stack Overflow. https://stackoverflow.com/questions/71032860/i-have-a-hard-time-understanding-the-purpose-of-a-backing-property

### DETAILED STRUCTURE:

#### Root Package
- `com.example.mobi3002_w0496661_finalproject`
  - `MainActivity.kt`

#### Data Layer
- `com.example.mobi3002_w0496661_finalproject/data`
  - `data/database`
    - `DatabaseHelper.kt`
  - `data/repository`
    - `CustomerRepository.kt`
    - `CakeRepository.kt`
    - `CustomerOrderRepository.kt`
    - `OrderItemRepository.kt`

#### Model Layer
- `com.example.mobi3002_w0496661_finalproject/model`
  - `Cake.kt`
  - `Customer.kt`
  - `CustomerOrder.kt`
  - `OrderItem.kt`

#### Navigation Layer
- `com.example.mobi3002_w0496661_finalproject/navigation`
  - `Navigation.kt`

#### UI Layer
- `com.example.mobi3002_w0496661_finalproject/ui`
  - `ui/components`
    - `CakeCard.kt`
    - `TextComposable.kt`
  - `ui/screens`
    - `HomeScreen.kt`
    - `LaunchScreen.kt`
    - `LoginScreen.kt`
    - `MenuScreen.kt`
    - `OrderScreen.kt`
    - `SignUpScreen.kt`
  - `ui/theme`
    - `Color.kt`
    - `Font.kt`
    - `Type.kt`
    - `Theme.kt`

#### ViewModel Layer
- `com.example.mobi3002_w0496661_finalproject/viewmodel`
  - `CakeViewModel.kt`
  - `EntryViewModel.kt`

---

## INET2005 - Inventory Management System

A Laravel-based Management System that allows users to manage product categories and products with peristence and CRUD operations.

### Features

* CRUD (Create, Read, Update, Delete) for categories
* CRUD (Create, Read, Update, Delete) for products
* Product image upload and deletion
* HTML, PHP, JavaScript Validation
* MVC architecture using Laravel

### Technologies

* Laravel
* MySQL
* HTML
* PHP
* JavaScript
* Blade Templates
* Bootstrap (CSS)

### Setup

1. Download or Clone the Repository
2. Navigate to the Project Directory
3. Install PHP Dependencies (composer install)
4. Verify the .env file
5. Run Database Migrations (php artisan migrate)
6. Check that the Migration was successfull
7. Access the Application in the Browser

### Routes

#### Categories

* `/categories` – View categories
* `/categories/create` – Add category
* `/categories/{id}/edit` – Edit category

#### Products

* `/items` – View products
* `/items/create` – Add product
* `/items/{id}/edit` – Edit product
* `/items/{id}` – Delete product

### Pictures

* Stored under app/public/images

### Resources

#### Tutorials
* https://laraveldaily.com/course/laravel-beginners
* https://www.laraveldocs.com/laravel-12-crud-application-example-step-by-step-tutorial-for-beginners

#### Artisan
* https://artisan.page/

#### Database Migration
* https://laravel.com/docs/12.x/migrations

#### HasFactory
* https://stackoverflow.com/questions/73601972/laravel-what-is-use-hasfactory
* https://www.laravel.wiki/en/eloquent-factories

#### Model-View-Controller (MVC)

##### Controller
* https://laravel.com/docs/12.x/controllers

#### Terminal Commands
* https://www.delftstack.com/howto/powershell/powershell-create-text-file/

#### Blade Templates
* https://laravel.com/docs/12.x/blade

#### CSRF
* https://www.laravel.wiki/en/blade#csrf-field

#### Routing
* https://laravel.com/docs/12.x/routing

#### Bootstrap
* https://getbootstrap.com/docs/4.0/components/navbar/

### Extensions
* Laravel Blade Snippets (VSC)

---

## PROG2200 - Snake Game

* Name: Leon Wasiliew
* Course: PROG2200 - Advanced Topics in Programming
* Last Updated: 2025-12-13


### Prerequisites

* Use an IDE such as IntelliJ IDEA
* Have the project PROG2200_SnakeGame_LeonW open in the IDE
* Ensure the project compiles and runs successfully


### Step by Step - 1 Player

1. Run SnakeGame Launcher
2. Click 1 Player
3. Enter initials for Player 1
4. Click Start 1 Player

#### Note:

* Player 1 is the top snake (top-left cornor) with (WASD)


### Step by Step - 2 Players

1. Run SnakeGame Launcher
2. Click 2 Player
3. Enter initials for Player 1 and Player 2
4. Click Start 2 Player

#### Note:
* Player 1 is the top snake (top-left cornor) with (WASD)
* Player 2 is the bottom snake (bottom-left cornor) with (Arrows)


### Logic

* Red Circle – YummyApple
Increases score by 1 and grows the snake by 1 segment.
* Green Circle – PoisonApple
Instantly kills the snake on collision.
* Yellow Oval – EpicBanana
Grants a larger score bonus and grows the snake more than a normal apple.
* Gray Square – Wall
A solid obstacle. Colliding with a wall results in instant death.
* Player vs Player Collision (2‑Player Mode)
* Head‑on collision: both players die
* Player 1 hits Player 2’s body: Player 1 dies
* Player 2 hits Player 1’s body: Player 2 dies
* Boundary Collision
If a snake moves outside the screen, it dies.
* Self‑Collision
If a snake runs into its own body, it dies.
* Difficulty Scaling
The game becomes harder over time through:
* Additional PoisonApple
* Additional Wall 
* Smaller Space


### RESOURCES:

#### Tutorial

* https://www.youtube.com/watch?v=bI6e6qjJ8JQ

#### Java Swing

* https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html
* https://docs.oracle.com/javase/8/docs/api/javax/swing/JPanel.html

#### List and ArrayList

* https://www.geeksforgeeks.org/java/difference-between-list-and-arraylist-in-java/

#### Point class

* https://www.javaspring.net/blog/java-point-class/
* https://docs.oracle.com/javase/8/docs/api/java/awt/Point.html

#### Marker Interface

* https://www.geeksforgeeks.org/java/marker-interface-in-java/

#### Enhanced Switch Case

* https://www.geeksforgeeks.org/java/enhancements-for-switch-statement-in-java-13/

#### Filter Instances

* https://codingtechroom.com/question/java-8-stream-api-filtering-and-casting
* https://softwareengineering.stackexchange.com/questions/264106/is-there-an-alternative-to-instanceof-when-filtering-a-java-stream-by-class

### Sort Function

* https://www.geeksforgeeks.org/java/sorting-in-java/

#### JUnit Tests
* https://www.geeksforgeeks.org/advance-java/introduction-of-junit/
* https://www.tutorialspoint.com/junit/index.htm


### Commit History

9. Add DrawableSpawner with collision-safe spawning and prevent spawns in front of player
10. Update GamePanel to use DrawableSpawner, a cleaner collision logic, and separate fruits/walls
11. Plan out DifficultyController that manages the different difficulties, being the spawn rate
12. Update GamePanel to use DifficultyController, remove manual respawn logic
13. Update GameFrame to be more modular and less messy
15. Implemented the Initials Screen for Player 1 and integrated collision unit tests
16. Updated the comments, implemented final touches, recorded video and included reflection