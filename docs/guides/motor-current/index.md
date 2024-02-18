# Change Motor Current

The LumenPnP uses stepper motor drivers that allow software-defined current control. The default values work great for normal LumenPnP operation, but if you're troubleshooting an issue or want to experiment with settings, this guide will show you how to update your motor current.

!!! note "M906 Command"
    Current is set using the M906 Gcode command. To set current for an axis, you use M906, followed by the letter designating the axis, followed by the number of milliamps that should be used for the axis. For example, to set the X axis to 800 milliamps and the Y axis to 1200 milliamps, use `M906 X800` and `M906 Y1200`.

    The letters `A`, `B`, and `C` are used for the Left Nozzle, Right Nozzle, and Aux drivers, respectively.

    For more information, check out [Marlin's M906 documentation](https://marlinfw.org/docs/gcode/M906.html).

## Instructions

1. In OpenPnP, navigate to `Machine Setup` > `Drivers` > `GcodeDrivers` > `Gcode` Tab > `Setting`: `CONNECT_COMMAND`
2. Look to see if your config already has an `M906` line of gcode for the axis you're updating. If there is already a command, simply update the current value in that line. If there isn't an `M906` line add it at the end.
   ![](img/305-motor-current.png)
3. We recommend that you do not exceed 1.5 amps (1500 milliamps) for the X or Y axis.
