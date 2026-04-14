# Snake Game

## Sample
This section represents the Player class in a Snake game, which manages the snake’s body, movement, growth, scoring, and collision detection. It maintains the snake as a list of coordinate points and implements game logic such as directional movement, boundary and self-collision checks, and rendering the snake on the screen.

---
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