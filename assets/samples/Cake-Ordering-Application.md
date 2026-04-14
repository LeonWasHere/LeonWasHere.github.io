# Cake Ordering Appliaction

## Sample
The Cake data model is used to represent individual cake items in the application. It stores the cake’s ID, name, price, and image resource, and is used across the menu and order screens.

---
```kotlin
/**
 * Author: Leon Wasiliew
 * Student W#: W0496661
 * Class: MOBI3002 - Mobile Application Development
 * Start Date: 2025-11-01
 * Last Update: 2025-12-03
 * File Name: Cake.kt
 * Description: Defines the structure of a Cake item used in the Mobile Bakery app.
 * Includes the id, name, price, and image resource ID for each cake.
 * Used across the Menu and Order screens to display and process cakes.
 */

package com.example.mobi3002_w0496661_finalproject.model

data class Cake(
    val id: Int = 0, // Stores the id of the cake (auto-incremented)
    val name: String, // Stores the name of the cake
    val price: Double, // Stores the price of the cake
    val resource: Int // Stores the image resource ID
)
```
---