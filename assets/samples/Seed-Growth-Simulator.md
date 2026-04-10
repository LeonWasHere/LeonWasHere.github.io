```js
/**
 * Developer: Leon Wasiliew
 * Instructor: David Kristiansen
 * Tool: Kiro Agentic Development Environment (AWS)
 * Method: Spec-Driven Development
 * Start Date: 2026-03-06
 */

// Seed Growth Simulation - Main Application File

/**
 * Point - Simple 2D coordinate structure
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/**
 * Seed - Represents a seed entity with position, visual properties, and arms
 */
class Seed {
    constructor(x, y, color, shape = null) {
        this.id = `seed-${Date.now()}-${Math.random()}`;
        this.x = x;
        this.y = y;
        this.color = color;
        this.shape = shape;
        this.radius = 10;
        this.arms = [];
    }

    addArm(arm) {
        this.arms.push(arm);
    }

    overlaps(otherSeed) {
        const distance = Math.sqrt(
            Math.pow(this.x - otherSeed.x, 2) + 
            Math.pow(this.y - otherSeed.y, 2)
        );
        return distance < (this.radius + otherSeed.radius);
    }

    containsPoint(x, y) {
        const distance = Math.sqrt(
            Math.pow(x - this.x, 2) + 
            Math.pow(y - this.y, 2)
        );
        return distance <= this.radius;
    }
}
```