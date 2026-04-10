```java
package com.leon.cardgames;

/**
 * Author: Leon Wasiliew
 * Subject: INFT4000 - Special Topics 1
 * Creation Date: 2026-03-09
 * Modification Date: 2026-03-09
 * Resource: https://kevinsguides.com/guides/code/java/javaprojs/consoleblackjack/
 */

/** Enum representing the ranks of a playing card. */
public enum Rank {
    // Creates enum constants used by the Rank enum class
    AS("As", 11),
    ZEHN("Zehn", 10),
    KOENIG("Koenig", 4),
    OBER("Ober", 3),
    UNTER("Unter", 2),
    SIEBENER("Siebener", 0);

    // Stores the name and value of the rank
    String rankName;

    // Stores the value of the rank
    int rankValue;

    /** Parameterized constructor for the Rank enum class. */
    Rank(String rankName, int rankValue) {
        this.rankName = rankName;
        this.rankValue = rankValue;
    }

    /** Method that returns the name of the rank. */
    public String toString() {
        return rankName;
    }
}
```