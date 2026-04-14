# Seed Growth Simulator

## Sample
This section represents the core data model for the Seed Growth Simulator. It defines foundational classes used to simulate 2D seed behavior, including a Point class for coordinate representation and a Seed class that manages position, visual properties, and interaction logic such as collision detection and point containment.

---
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
---