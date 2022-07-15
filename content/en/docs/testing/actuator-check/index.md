---
title: "Actuator Check"
linkTitle: "Actuator Check"
weight: 40
description: >-
     How to check the actuators on your LumenPnP
---

## Pumps
The first and most important actuator on your LumenPnP is the vacuum pump. We can check this by sending more Gcode to the machine. Send the first line to turn on the pump, and the second one to turn it back off.

```gcode
M106 ;turn MOS1 on
M107 ;turn MOS1 off
```

## Valves
We can also check the blowoff valve. This can be tested using the Gcode below. Listen for a slight click when each of the commands are run; this is the sound of the valve actuating!

```gcode
M106 P1 S255   ;turn MOS2 on
M107 P1        ;turn MOS2 off
```

It's worth noting that MOS3 and MOS4 can be actuated using the following commands (when something is plugged into those ports):

```gcode
M106 P2 S255   ;turn MOS3 on
M107 P2        ;turn MOS3 off
M106 P3 S255   ;turn MOS4 on
M107 P3        ;turn MOS4 off
```

## Ring Lights
Check the ring lights using the Gcode below. Note that both lights are controlled together, with the same command. You can edit the color of the lights by adjusting the R, U, and B terms in the command, and you can edit the brightness by editing the P term. For more information, check the [Marlin Docs page on M150](https://marlinfw.org/docs/gcode/M150.html).

```gcode
M150 P255 R255 U255 B255   ;turn on ring lights
M150 P0                    ;turn off ring lights
```

If you'd like to change the brightness that your ring lights actuate to during a job, you can edit the P value in this section of the "Machine Setup" tab in OpenPnP:

{{< container-image path="images/edit-ringlight-brightness.png" alt="" >}}

## Vacuum Sensors
Now we can check the vacuum sensors.  First, check the value from the first vacuum sensor before and after a vacuum is pulled to check that it's working correctly. You should see that the values are different by about 200.

```gcode
M3426 G4 C1 I1 A110   ;read vac 1 value
M106                  ;turn on the pump
M106 P1 S255          ;turn on the valve
;cover the nozzle with your finger and wait two seconds
M3426 G4 C1 I1 A110   ;read vac 1 value again
M107                  ;turn off the pump
M107 P1               ;turn off the valve
```



{{< alert color="warning" title="Interposer Board" >}}

Some LumenPnP kits shipped with a less than optimal vacuum sensor wiring. Some people's sensors can detect a swing of about 200, but in some cases there isn't enough of a difference for a useful signal because of some part tolerances. We're sorry about this! When the community discovered this issue, we stopped shipping immediately and designed a board that sits in between the vacuum sensor and the motherboard that makes the signal much stronger. Once we confirmed this board fixes the issue, we installed them on all machines we shipped moving forward.

No Interposers Installed
{{< container-image path="images/IMG_1293.JPG" alt="No Interposer Installed" >}}

Interposer Boards Installed
{{< container-image path="images/IMG_1325.JPG" alt="Interposer Board Installed" >}}

If you bought a LumenPnP kit that did not come with interposer boards installed and would like to upgrade them, please [reach out to our support team](https://opulo.io/pages/contact-support) and we'll get some sent out to you as soon as possible. We have an [installation guide](https://docs.opulo.io/maintenance-upgrades/rev3-vac-interposer/) to guide you through the process.

If you have the interposer boards installed for your vacuum sensors, change the `G4` to a `G2` in your "sensor read" GCode command. This changes the gain of the sensor to a more usable value. The difference in value should now be about 2000.
{{< /alert >}}


It's also worth noting the command for reading the second vacuum sensor. Until pneumatics for a second nozzle are plumbed in, the second one will only ever read ambient pressure.

```gcode
M3426 G4 C2 I1 A110  ;read vac 2 value
```
{{< alert color="warning" title="In Case Of Error" >}}
These commands are meant for a newer version of Marlin that adds support for multiple ADCs. If you're getting an error in response from Marlin, [update the firmware to the latest version](https://docs.opulo.io/docs/motherboard/update-firmware/).
{{< /alert >}}