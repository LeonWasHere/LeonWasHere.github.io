```java
/**
 * Player.java
 * Author: Leon Wasiliew (W0496661)
 * Student ID: W0496661
 * Date: 2025-04-08
 * Time: 1:14 p.m.
 * Description: Abstract Superclass 'Player' for Assignment 8 - Abstract Classes And Interfaces (Chapter 13)
 * (Subclass: Kirby, PrinceFluff)
 */
public abstract class Player {
    private String name; // Instance variable to store the player's name

    // Constructor to initialize Player
    public Player(String name) {
        this.name = name;
    }

    // Abstract method for custom movement
    public abstract void move(String direction);

    // Abstract method for dashing into a boss
    public abstract void dash(Boss boss);

    // Method for jumping
    public void jump() {
        System.out.println(name + " bounces up into the air!");
    }

    // Method for ducking
    public void duck() {
        System.out.println(name + " attempts to crouch duck low...");
    }

    // Method for yarn whip attack
    public void whip() {
        System.out.println(name + " whips the enemy with yarn!?");
    }
}
```