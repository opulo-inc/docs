If you want to change the motor current to help with different problems like skipping steps, etc.


DEBUGGING STEPS

 * You will be using the Marlin Code M906 [https://marlinfw.org/docs/gcode/M906.html] to change this.
 * (note: You will not want to raise the X-axis or Y-axis above 1.5 amps to be safe)


LUMENPNP V3.0.5 OR EARLIER

 * If your machine is a LumenPnP v3.0.5 or earlier, you will change/add M906 in the CONNECT COMMAND
   (Found under Machine Setup > Drivers > GcodeDrivers > Gcode Tab > Setting - CONNECT_COMMAND)
 * If there is already something there for your axis, update it. If there isn't something there, add it.
   




LUMENPNP V3.1.0 OR NEWER

 * If your machine is a LumenPnP 3.1 or newer, you will change the M906 command in two places.
 * First you will update M906 in the CONNECT_COMMAND gcode as seen in this image:
   (Machine Setup > Drivers > GcodeDrivers > Gcode Tab > Setting - CONNECT_COMMAND)

 * Next, under the "Settings" dropdown, choose the HOME_COMMAND option, and update the M906 gcode in the section that is AFTER the G28 homing command. Do not change the M906 gcode that is above the G28 command. That needs to be specifically set to these numbers for homing properly.
   (Machine Setup > Drivers > GcodeDrivers > Gcode Tab > Setting - HOME_COMMAND)
   