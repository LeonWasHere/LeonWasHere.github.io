```cpp
/**
 * Author: Leon Wasiliew
 * Date: 3/27/2026
 */

/////////////////////////////////////////////////////////////////////////
// GLOBALS
/////////////////////////////////////////////////////////////////////////

const int MOTOR_PIN = 9;   // DC Motor pin (drives motor using PWM)
const int POT_PIN = A0;    // Potentiometer pin (selects operating mode)
const int BUTTON_PIN = 2;  // Button pin (activates motor sequence)

/////////////////////////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////////////////////////

void setup() {
  pinMode(MOTOR_PIN, OUTPUT);  // Sets the motor pin as an output for PWM control
  pinMode(BUTTON_PIN, INPUT);  // Sets the button pin as an input (pull-down resistor)
}

/////////////////////////////////////////////////////////////////////////

void loop() {

  // Reads potentiometer and convert to 2 modes
  int potRaw = analogRead(POT_PIN);    // Reads analog value (0-1023)
  int mode = (potRaw > 512) ? 1 : 0;  // Selects mode (0 = LOW, 1 = HIGH)

  // Reads the button state (not pressed = LOW, pressed = HIGH)
  int buttonState = digitalRead(BUTTON_PIN);

  /**
   * If the button is not pressed, the motor is turned off.
   * Prevents accidental activation and reduces power usage.
   */
  if (buttonState == 0) {
    analogWrite(MOTOR_PIN, 0);  // Ensures the motor is stopped
    return;                     // Skips the rest of the loop
  }

  /**
   * If the button is pressed, the system runs the selected mode.
   * Produces a different pulse pattern depending on the mode.
   */
  if (mode == 0) {
    // Executes stronger, shorter pulse pattern
    analogWrite(MOTOR_PIN, 180);  // Delivers high-power pulse
    delay(15);
    analogWrite(MOTOR_PIN, 0);  // Turns motor off 
    delay(60);
  }

  else if (mode == 1) {
    // Executes softer, longer pulse pattern
    analogWrite(MOTOR_PIN, 150);  // Delivers low-power pulse
    delay(10);
    analogWrite(MOTOR_PIN, 0);  // Turns motor off
    delay(80);
  }
}
```