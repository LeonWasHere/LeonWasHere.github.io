---

layout: default
title: Samples
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

# Samples

### MOBI3002 - Cake Ordering App
- **Kotlin Code Snippet (MenuScreen.kt):** 
```kotlin
/**
 * Author: Leon Wasiliew
 * Student W#: W0496661
 * Class: MOBI3002 - Mobile Application Development
 * Start Date: 2025-11-01
 * Last Update: 2025-12-09
 * File Name: MenuScreen.kt
 * Description: Describes what the user sees when they open the Menu screen.
 * Displays a list of cakes with names, prices, and images.
 * Navigates to the Order screen when a cake is selected, passing the item via the ViewModel.
 */

package com.example.mobi3002_w0496661_finalproject.ui.screens

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.example.mobi3002_w0496661_finalproject.R
import com.example.mobi3002_w0496661_finalproject.model.Cake
import com.example.mobi3002_w0496661_finalproject.ui.components.CakeDisplayCard
import com.example.mobi3002_w0496661_finalproject.ui.components.StyledText
import com.example.mobi3002_w0496661_finalproject.ui.theme.CustomBlue
import com.example.mobi3002_w0496661_finalproject.ui.theme.CustomRed
import com.example.mobi3002_w0496661_finalproject.ui.theme.prozaLibreRegular
import com.example.mobi3002_w0496661_finalproject.viewmodel.CakeViewModel

@Composable
fun MenuScreen(viewModel: CakeViewModel, navController: NavHostController) {
    val cakes = viewModel.cakeList.value
    val focusManager = LocalFocusManager.current

    // Loads cakes when screen first appears
    LaunchedEffect(Unit) {
        viewModel.loadCakes()
    }
    // Defines a list of cakes with name, price, and image resource
//    val cakes = listOf(
//        Cake("Strawberry Sync Cake", 25.00, R.drawable.strawberry),
//        Cake("Chocolate Chipset Cake", 27.00, R.drawable.chocolate),
//        Cake("Blueberry Byte Cake", 23.00, R.drawable.blueberry),
//        Cake("Quantum Crumble", 500.00, R.drawable.glitch)
//    )

    // Displays the cake list using a scrollable Column layout
    Column(
        modifier = Modifier
            .padding(8.dp)
            .verticalScroll(rememberScrollState())
    ){
        Spacer(modifier = Modifier.height(12.dp))

        // Displays the Menu subheading using custom font and brand color
        StyledText("Menu", 32.sp, prozaLibreRegular, CustomBlue)

        Spacer(modifier = Modifier.height(16.dp))

        // Populates a search field that filters cakes as the user types
        TextField(
            // Displays the current search text from the ViewModel
            value = viewModel.searchQuery,
            onValueChange = {
                // Updates the search query state
                viewModel.searchQuery = it
                viewModel.searchCakes(it)
            },
            label = { Text("Search cake by prefix") },
            singleLine = true,
            keyboardOptions = KeyboardOptions.Default.copy(imeAction = ImeAction.Done),
            // Removes focus when the user presses Done
            keyboardActions = KeyboardActions(
                onDone = { focusManager.clearFocus() }
            ),
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Iterates through each cake item and renders a display card
        cakes.forEach { cake ->
            CakeDisplayCard(cake) {
                viewModel.selectCake(cake) // Updates the selected cake in the ViewModel
                navController.navigate("order") // Navigates to the Order screen
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        if (viewModel.menuError.isNotEmpty()) {
            StyledText(viewModel.menuError, 16.sp, prozaLibreRegular, CustomRed)
        }
    }
}
```

---

### INET2005 - Inventory Management System
- **PHP Code Snippet (ProductController.php):** 
```php
<?php

/**
 * Author: Leon Wasiliew
 * Date: 2025-12-13
 * INET2005
 */

/**
 * Resource: https://www.laraveldocs.com/laravel-12-crud-application-example-step-by-step-tutorial-for-beginners
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller
{
    // C (Create) - Shows form to add a new product
    public function create() {
        // Retrieves all categories for dropdown
        $categories = Category::all();

        return view('products.create', ['categories' => $categories]);
    }

    // C (Create) - Saves a new product
    public function store(Request $request) {
        // Validates the submitted data
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title'       => 'required|string|max:100',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'quantity'    => 'required|integer|min:0',
            'sku'         => 'required|string|unique:products,sku',
            'image'       => 'required|image|mimes:png,jpeg,jpg|max:2048',
        ]);

        // Handles image upload
        $imageName = $request->image->getClientOriginalName();
        $request->image->move(public_path('images'), $imageName);

        // Creates a new product
        Product::create([
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'description' => $request->description,
            'price'       => $request->price,
            'quantity'    => $request->quantity,
            'sku'         => $request->sku,
            'image'       => $imageName,
        ]);

        // Redirects to product list with success message
        return redirect('/items')->with('success', 'New product was added successfully');
    }

    // R (Read) - Displays all products
    public function index() {
        // Retrieves all products with their categories
        $allProducts = Product::with('category')->get();

        // Passes products to the index view
        return view('products.index', ['products' => $allProducts]);
    }

    // U (Update) - Shows form to edit an existing product
    public function edit($productId) {
        // Finds the product by ID or fails
        $productToBeEdited = Product::findOrFail($productId);

        // Gets all categories for dropdown
        $categories = Category::all();

        // Passes product and categories to the edit view
        return view('products.edit', [
            'product' => $productToBeEdited,
            'categories' => $categories
        ]);
    }

    // U (Update) - Saves changes to an existing product
    public function update(Request $request, $productId) {
        $productToBeUpdated = Product::findOrFail($productId);

        // Validates input, allows current SKU
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title'       => 'required|string|max:100',
            'description' => 'required|string',
            'price'       => 'required|numeric|min:0',
            'quantity'    => 'required|integer|min:0',
            'sku'         => 'required|string|unique:products,sku,' . $productId,
            'image'       => 'nullable|image|mimes:png,jpeg,jpg|max:2048',
        ]);

        // Updates image if uploaded
        if ($request->hasFile('image')) {
            $imageName = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $imageName);

            // Deletes old image
            if (file_exists(public_path('images/' . $productToBeUpdated->image))) {
                unlink(public_path('images/' . $productToBeUpdated->image));
            }

            $productToBeUpdated->image = $imageName;
        }

        // Updates other fields
        $productToBeUpdated->update([
            'category_id' => $request->category_id,
            'title'       => $request->title,
            'description' => $request->description,
            'price'       => $request->price,
            'quantity'    => $request->quantity,
            'sku'         => $request->sku,
        ]);

        // Redirects to product list with success message
        return redirect('/items')->with('success', 'Existing product was updated successfully');
    }

    // D (Delete) - Deletes a product
    public function destroy($productId) {
        $productToBeDeleted = Product::findOrFail($productId);

        // Deletes image from folder
        if (file_exists(public_path('images/' . $productToBeDeleted->image))) {
            unlink(public_path('images/' . $productToBeDeleted->image));
        }

        $productToBeDeleted->delete();

        // Redirects to product list with success message
        return redirect('/items')->with('success', 'Product was deleted successfully');
    }
}
```

---

### PROG2200 - Snake Game
- **Java Code Snippet:** 
```java
/**
 * Author: Leon Wasiliew
 * Student W#: W0496661
 * Class: PROG2200 - Advanced Topics in Programming
 * Start Date: 2025-11-29
 * Last Update: 2025-12-13
 * File Name: Player.java
 * Description: Class that manages movement, growth, collision detection, scoring, and rendering.
 * This class does not extend DrawableObject because it is composed of multiple segments rather than a single entity.
 */

package org.example.prog2200_snakegame_leonw;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

/**
 * The Player class models the snake controlled by the user.
 * It maintains a list of body segments and handles movement logic.
 * It also detects collision, tracks score, and draws itself on the screen.
 */
public class Player {

    // Declares specific player class attributes

    // List that keeps track of Point objects is more flexible (Point stores x, y)
    // Using parallel arrays are harder to keep track of
    private final List<Point> snakeBody;
//    private final int[] xSnakeBody;
//    private final int[] ySnakeBody;


    private final int unitSize;
    private int initialSnakeLength;
    private char direction;
    private boolean alive;
    private int score;
    private final String initials;

    /**
     * Parameterized constructor for Player.
     * Initializes the snake's starting position, direction, body length, and other data.
     * @param x
     * @param y
     * @param unitSize
     * @param initials
     */
    public Player(int x, int y, int unitSize, String initials) {
        this.unitSize = unitSize;
        this.direction = 'R';
        this.initialSnakeLength = 6;
        this.alive = true;
        this.score = 0;
        this.initials = initials;

        snakeBody = new ArrayList<>();  // Initializes an empty ArrayList
        snakeBody.add(new Point(x, y)); // Adds the start x and star y - snake head

        // Adds initial body segments behind the head
        for (int i = 1; i < initialSnakeLength; i++) { // Starts with 1 since we already have the snake head
            snakeBody.add(new Point(x - (i * unitSize), y));
        }
    }

    // --------------------------- Movement ---------------------------

    /**
     * Moves the snake head forward one step based on its current direction.
     * Body segments follow the position of the segment ahead of them.
     */
    public void move() {
        for (int i = snakeBody.size() - 1; i > 0; i--) {
            // https://docs.oracle.com/javase/8/docs/api/java/awt/Point.html
            // "Sets the location of the point to the specified location."
            snakeBody.get(i).setLocation(snakeBody.get(i - 1));
        }

        // Initializes snakeHead to validate direction
        Point snakeHead = snakeBody.get(0);

        switch (direction) {
            case 'U':
                snakeHead.y = snakeHead.y - unitSize;
                break;
            case 'D':
                snakeHead.y = snakeHead.y + unitSize;
                break;
            case 'L':
                snakeHead.x = snakeHead.x - unitSize;
                break;
            case 'R':
                snakeHead.x = snakeHead.x + unitSize;
        }
    }

    /**
     * Retrieves the current direction of the snake.
     * @return
     */
    public char getDirection() {
        return direction;
    }

    /**
     * Sets the snake's movement direction, preventing 180 degree turns.
     * @param newDirection
     */
    public void setDirection(char newDirection) {
        newDirection = Character.toUpperCase(newDirection);

        if (newDirection != 'L' && newDirection != 'R' && newDirection != 'U' && newDirection != 'D') {
            return;
        }

        // Prevents 180 degree turns
        if ((newDirection == 'L' && direction == 'R') || (newDirection == 'R' && direction == 'L') ||
                (newDirection == 'U' && direction == 'D') || (newDirection =='D' && direction == 'U')) {
            return;
        }
        this.direction = newDirection;
    }

    // --------------------------- Growth & State ---------------------------

    /**
     * Increases the snake's length by adding a new segment at the end.
     */
    public void grow() {
        // Initializes snakeTail to find the last snake coordinates
        Point snakeTail = snakeBody.get(snakeBody.size() - 1); // Takes last Point stored in the ArrayList
        snakeBody.add(new Point(snakeTail.x, snakeTail.y)); // Adds a new element at the end of the snakeBody

//        bodyParts++;
    }

    /**
     * Checks whether the snake is alive.
     * @return alive
     */
    public boolean isAlive() {
        return alive;
    }

    /**
     * Marks the snake as dead.
     * Called when a bad collision occurs.
     */
    public void snakeDeath() {
        alive = false;
    }

    /**
     * Retrieves the player's score.
     * @return score
     */
    public int getScore() {
        return score;
    }

    /**
     * Adds points to the player's score.
     * @param points
     */
    public void addScore(int points) {
        score = score + points;
    }

    /**
     * Retrieves the player's initials.
     * @return initials
     */
    public String getInitials() {
        return initials;
    }

    // --------------------------- Collision Helpers ---------------------------

    // NOTE: Since it is not collidable but does the colliding we need to implement these methods

    /**
     * Checks whether the snake's head collides with its own body.
     * @return
     */
    public boolean checkSelfCollision() {
        Point snakeHead = snakeBody.get(0);
        for (int i = 1; i < snakeBody.size(); i++) {
            if (snakeHead.equals(snakeBody.get(i))) {
                return true;
            }
        }
        return false;
    }

    /**
     * Checks whether the snake's head collides with the game boundaries.
     * @param width
     * @param height
     * @return
     */
    public boolean checkBoundaryCollision(int width, int height) {
        Point snakeHead = snakeBody.get(0);
        if (snakeHead.x < 0 || snakeHead.x >= width || snakeHead.y < 0 || snakeHead.y >= height) {
            return true;
        }
        return false;
    }

    /**
     * Checks whether any part of the snake occupies the given tile.
     * @param x
     * @param y
     * @return
     */
    public boolean occupies(int x, int y) {
        for (Point point : snakeBody) {
            if (point.x == x && point.y == y) {
                return true;
            }
        }
        return false;
    }

    /**
     * Retrieves the snake's head segment.
     * @return xSnakeBody[0]
     */
    public Point getSnakeHead() {
        return snakeBody.get(0);
    }

    /**
     * Retrieves the full list of snake body segments.
     * @return ySnakeBody[0]
     */
    public List<Point> getSnakeBody() {
        return snakeBody;
    }

    // --------------------------- Drawing ---------------------------

    /**
     * Draws the snake on the screen, including the head, body, and player initials.
     * @param g
     */
    public void draw(Graphics g) {
        for (int i = 0; i < snakeBody.size(); i++) {
            Point point = snakeBody.get(i);

            if (i == 0) {
                g.setColor(Color.green);
            } else {
                g.setColor(new Color(45, 180, 0));
            }
            g.fillRect(point.x, point.y, unitSize, unitSize);
        }

        // Draws initials on head
        g.setColor(Color.blue);
        g.setFont(new Font("Ink Free", Font.BOLD, 10));
        Point snakeHead = snakeBody.get(0);
        g.drawString(initials, snakeHead.x, snakeHead.y);
    }
}
```

---

### PROG2100 - Library Management System
- **C++ Code Snippet (Member.h):** 
```cpp
/**
 * Author: Leon Wasiliew
 * Student W#: W0496661
 * Class: PROG2100 - Programming C++
 * Start Date: 2025-12-03
 * Last Update: 2025-12-07
 * File Name: Member.h
 * Description: C++ declaration file for the abstract base class Member used in the Library Management System.
 * Acts as the model interface for the system, which mirrors attributes of the Member table.
 */

// Prevents multiple inclusions of "Member.h"
#ifndef MEMBER_H
#define MEMBER_H

#include <iostream>  // For standard input/output utilities
#include <string>    // For standard string utilities

// Abstract base class representing a generic Member
class Member {
	protected:
		int memberId;            // Stores unique Member ID for database
		std::string name;        // Stores the name of the Member
		std::string address;     // Stores the address of the Member
		std::string contactInfo; // Stores the contact info (email) of the Member
	public:
	// Default Constructor

		// Constructs a Member object with the default keyword (explicit)
		Member() = default;

	// Parameterized Constructor	

		// Constructs a Member object with the member ID, name, address, and contact info
		Member(int memberId, const std::string &name, const std::string &address, const std::string &contactInfo);

	// Virtual Destructor

		// Enables polymorphic cleanup in derived classes
		virtual ~Member();

	// Encapsulation: Getters	
		
		// Returns the member ID of the Member
		int getId() const;

		// Returns the name of the Member
		std::string getName() const;

		// Returns the address of the Member
		std::string getAddress() const;

		// Returns the contact info of the Member
		std::string getContactInfo() const;

	// Encapsulation: Setters	
		
		// Sets the member ID for the Member
        void setId(int memberId);

		// Sets the name for the Member
		void setName(const std::string &name);

		// Sets the address for the Member
		void setAddress(const std::string &address);

		// Sets the contact info for the Member
		void setContactInfo(const std::string &contactInfo);

	// Pure Virtual Methods
	// (must be implemented and overridden in the child class)	

		// Returns the type in string format for display
		virtual std::string getType() const = 0;

		// Returns the string version of the Member object
		virtual std::string toString() const = 0;

		// Displays the details of the Member
		virtual void displayDetails() const = 0;

		// Returns boolean to indicate if the Member can borrow books
		virtual bool canBorrow() const = 0;

		// Calculates and returns the fees of the Member
		virtual double calculateFees(const std::string &dueDate, const std::string &returnDate) const = 0;

		// Returns boolean to indicate if the Member is upgradeable to PremiumMember
		virtual bool upgradeableToPremium() const = 0;

		// Returns boolean to indicate if the Member is upgradeable to FreeMember
		virtual bool downgradeableToFree() const = 0;
};

#endif
```
- **C++ Code Snippet (Member.cpp):** 
```cpp
/**
 * Author: Leon Wasiliew
 * Student W#: W0496661
 * Class: PROG2100 - Programming C++
 * Start Date: 2025-12-03
 * Last Update: 2025-12-07
 * File Name: Member.cpp
 * Description: C++ implementation file for the Member class used in the Library Management System.
 * Provides common attributes and polymorphic methods for FreeMember, and PremiumMember.
 * Includes encapsulated accessors and virtual methods for displaying and identifying member types.
 */

// User-defined Header File 
#include "../../include/models/Member.h"

/**
 * Parameterized Constructor:
 * --------------------------
 * Constructs a Member object with the member ID, name, address, and contact info.
 * Uses initializer list to initialize attributes.
 */
Member::Member(int memberId, const std::string &name, const std::string &address, const std::string &contactInfo) 
	: memberId(memberId), name(name), address(address), contactInfo(contactInfo) {}

// Virtual Destructor

/**
 * Destructor:
 * -----------
 * Destructs a Member object when it goes out of scope.
 * Enables polymorphic cleanup in derived classes.
 * Debug message commented out for developer use.
 */
Member::~Member() {
	// std::cout << "Member object was deleted." << std::endl;
}	
		
// Encapsulation: Getters

// Returns the member ID of the Member
int Member::getId() const {
	return memberId;
}

// Returns the name of the Member
std::string Member::getName() const {
	return name;
}

// Returns the address of the Member
std::string Member::getAddress() const {
	return address;
}

// Returns the contact info of the Member
std::string Member::getContactInfo() const {
	return contactInfo;
}

// Encapsulation: Setters	
		
// Sets the member ID for the Member
void Member::setId(int memberId) {
    this->memberId = memberId;
}

// Sets the name for the Member
void Member::setName(const std::string &name) {
	this->name = name;
}

// Sets the address for the Member
void Member::setAddress(const std::string &address) {
	this->address = address;
}

// Sets the contact info for the Member
void Member::setContactInfo(const std::string &contactInfo) {
	this->contactInfo = contactInfo;
}
```
---