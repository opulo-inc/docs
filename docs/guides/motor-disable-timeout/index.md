# Set Motor Disable Timeout

 * To extend the timeout of the motors, go to Machine Setup > Drivers > GcodeDriver > Gcode Tab > CONNECT_COMMAND and add the M018 code somewhere in there.
 * M18 S<seconds>

 * You change the inactivity timeout by 'seconds' so make sure to do the math for how long you want.
 * Here is a link to the Marlin page: https://marlinfw.org/docs/gcode/M018.html [https://marlinfw.org/docs/gcode/M018.html]