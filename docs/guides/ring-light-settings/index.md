# Change Ring Light Brightness

For bottom vision operations, we recommend keeping your ring light at full brightness, and keeping your camera's exposure low. We've found this helps remove the likelihood that other light sources in the room will affect your vision pipeline. However, some users have mentioned that lowering the brightness of the ring light has helped them get more consistent vision operations.

This is a guide for adjusting the brightness of your ring lights for all operations. <!-- Also included are instructions on how to adjust the brightness for each package/part, although a similar effect is much more easily accomplished by just adjusting the part's threshold in its vision pipeline. -->

## Universal Brightness/Color Adjustment

1. Go to `Machine Setup` > `Drivers` > `GcodeDrivers` > `Gcode Tab` > `Head Mountable`: `Actuator [No Head] LED` > `Setting`: `ACTUATE_BOOLEAN_COMMAND`.
   ![](img/led-actuator.webp)
2. You should see something like `{True:M150 P255 R255 U255 B255}{False:M150 P0}`.
    1. `P255` = Brightness value, Adjust this value from 0 to 255 to change the amount of brightness the LED outputs
    2. `R255` = Red value, Adjust this value from 0 to 255 to change the amount of red in the LED
    3. `U255` = Green value, Adjust this value from 0 to 255 to change the amount of green in the LED
    4. `B255` = Blue value, Adjust this value from 0 to 255 to change the amount of blue in the LED
3. Adjust these values in the `ACTUATE_BOOLEAN_COMMAND` to manipulate the LED output, then hit `Apply`.
4. Check out Marlin's [M150 command documentation](https://marlinfw.org/docs/gcode/M150.html) for more information.

<!-- ## Per Part/Package Brightness Adjustment

This is a much more in-depth and difficult modification, and shouldn't be necessary to perform.

1. In the machine.xml, update the Value Type of the LED actuator to "Double".
2. Set the defaults as 255.0 and 0.0 (on / off)
3. Go to the actuation GCode for the actuator and change the value to `M150 P{DoubleValue:%.0f} R255 U255 B255`.
4. Then create a profile for the part / package and reference it from the part's vision pipeline to adjust light levels as needed.
5. Reach out to the community on Discord if you're having trouble setting this up. -->
