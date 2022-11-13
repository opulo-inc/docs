---
title: "Installing a Second Tool Head"
linkTitle: "Second Tool Head"
weight: 3
type: docs
resources:
- src: "**.png"
- src: "**.jpg"
description: >
  Installing a second tool head
---

If you built a V2 LumenPnP with only one tool head, follow this guide to install a second one.

## Required Materials

See the LumenPnP BOM for specifications and links to purchase hardware for the upgrade.

## Installing the Tool Head

1. Use four MXXX screws to install the motor onto the right tool holder. Make sure that the wiring connector is facing out towards the front of the machine.
28. Now that our Z gantries are all tightened and moving freely, we can mount our final axis: rotation! Take your NEMA11 hollow shaft stepper motor and place it in the left Z gantry. Secure it in place with four M2.5x8mm screws. Make sure the wire port is facing outwards as shown below.
  {{< container-image path="images/Screen Shot 2021-12-29 at 6.20.02 PM.png" alt="" >}}

29. Now we'll mount a few bits of hardware to the hollow shaft motor. Screw the CP40 nozzle holder into the bottom side of the motor, and screw the press-fit pneumatic coupler into the top side.
  {{< container-image path="images/Screen Shot 2021-12-29 at 6.22.45 PM.png" alt="" >}}

3. Plug the cable into the tool motor
4. Attach the wire to your umbilical with zip ties, or thread it into your wiring sheath.
5. Plug the motor cable into the `R` connector.

## Installing the Vacuum Pump 

## Pump mount

|  Qty | Part                  |
| ---: | --------------------- |
|    1 | FDM-0025 (Pump Mount) |
|    2 | M3 Hex Nuts           |
|    2 | Rubber Band           |
|    1 | Vacuum Pump           |
|    2 | M3x10 machine screw   |

The first thing we'll mount to the staging plate is the {{< tooltip "Pump Mount" "FDM-0025" >}}. This print suspends the pump using two rubber bands to ensure none of the vibration of the pump is transferred into the frame.

6. Start by press-fitting M3 nuts into the side recesses in the {{< tooltip "Pump Mount" "FDM-0025" >}}.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-1-2.png" alt="Two Nut locations on the Pump Mount" >}}

7. Now we'll mount the pump in the {{< tooltip "Pump Mount" "FDM-0025" >}} using a couple rubber bands. Start by grabbing the rubber band with both hands, giving it a half twist, and folding it over on itself, making two loops.
  {{< container-image path="images/IMG_0737.JPG" alt="" >}}
  {{< container-image path="images/IMG_0738.JPG" alt="" >}}
  {{< container-image path="images/IMG_0740.JPG" alt="" >}}

8. Now stretch each rubber band over each pair of pegs on the {{< tooltip "Pump Mount" "FDM-0025" >}}. Guide the pump between each pair of bands so that it's suspended in the {{< tooltip "Pump Mount" "FDM-0025" >}}.
  {{< container-image path="images/IMG_0742.JPG" alt="" >}}
  {{< container-image path="images/IMG_0743.JPG" alt="" >}}
  {{< container-image path="images/IMG_0744.JPG" alt="" >}}

9. Mount the {{< tooltip "Pump Mount" "FDM-0025" >}} to the staging plate using two M3 x 10mm screws in the location shown below, G31 and G33.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-4-ALT.png" alt="Mounting position for the Pump" >}}
  {{< container-image path="images/IMG_0741.JPG" alt="The Pump assembly mounted on the staging plate" >}}

## Valve mount

|  Qty | Part                   |
| ---: | ---------------------- |
|    1 | FDM-0042 (Valve Mount) |
|    1 | Blowoff Valve          |
|    4 | M3 Hex Nut             |
|    6 | M3x8 machine screw     |

Now we'll attach the {{< tooltip "Valve Mount" "FDM-0042" >}} to the staging plate.

10. Press fit four M3 nuts into the recesses in the {{< tooltip "Valve Mount" "FDM-0042" >}}.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-5.png" alt="four nut locations in the Valve Mount" >}}

11. Use two M3x8mm screws to attach the valve to the {{< tooltip "Valve Mount" "FDM-0042" >}} as shown below.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-6.png" alt="attaching the valve to the valve mount with two screws" >}}

12. Use four M3x8mm screws to mount the {{< tooltip "Valve Mount" "FDM-0042" >}} to the staging plate in the location shown: E23, E25, G23, G25.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-7-ALT.png" alt="attaching the valve to the staging plate" >}}
  {{< container-image path="images/IMG_0745.jpg" alt="" >}}

## Pneumatic Y splitter mount

|  Qty | Part                |
| ---: | ------------------- |
|    1 | M3x30 machine screw |
|    1 | M3 Hex nut          |
|    1 | Y Splitter          |

13. Use an M3x30mm screw and an M3 nut to mount the pneumatic Y splitter to the staging plate as shown: B12.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-8-ALT.png" alt="Attaching the Y Splitter to the Staging Plate" >}}
  {{< container-image path="images/PXL_20220204_061125932.MP.jpg" alt="" >}}

## Configuring OpenPnP

1. Select the `Machine Setup` tab
2. Click the `Expand` checkbox if necessary
3. Click on `Axes`
4. Click on the Add button
5. Select `ReferenceMappedAxis` and click `Accept`
6. Configure the new axis with the following settings:
   1. Type: `Z`
   2. Name: `z2`
   3. Input Axis: `z1` (or whatever you had named your original Z axis)
   4. Map Point A: Input: `0`
   5. Map Point A: Output: `63`
   6. Map Point B: Input: `63`
   7. Map Point B: Output: `0`
7. Click apply to save the changes
8. Click on the Add button
9. Select `ReferenceControllerAxis` and click `Accept`
10. Configure the new axis with the following settings:
    1. Type: `Rotation`
    2. Name: `b`
    3. Driver: `GcodeDriver`
    4. Axis Letter: `B`
    5. Switch Linear <> Rotational: Checked
    6. Home Coordinate: `0`
    7. Resolution [Millimeters]: `0.0001`
    8. Steps / Millimeter: `10000`
    9. Limit to Range: Checked
    10. Wrap Around: Unchecked
    11. Soft Limit Low: `-180`
    12. Soft Limit Low Enabled: Unchecked
    13. Soft Limit High: `180`
    14. Soft Limit High Enabled: Unchecked
    15. Feed Rate [/s]: `50000`
    16. Acceleration [/s2]: `500`
    17. Jerk [/s3]: `2000`
11. Click apply to save the changes
17. Click on `Heads > ReferenceHead H1 > Actuators`
18. Click on the Add button
19. Select `ReferenceActuator` and click `Accept`
20. Configure the new Actuator with the following settings:
    1. Driver: `GcodeDriver`
    2. Name: `VAC2`
    3. Axis X: `x`
    3. Axis Y: `y`
    4. Axis Z: `z2`
    5. Axis Rotation: `b`
    6. Offset X: `0`
    7. Offset Y: `0`
    8. Offset Z: `0`
    9. Offset Rotation: `0`
    10. Axis Interlock?: Unchecked
    11. Safe Z: `30`
    12. Before Actuation: Checked
    13. After Actuation: Unchecked
    14. Before Read?: Checked
    15. Value Type: `Boolean`
    16. Actuation Enabled: `AssumeUnknown`
    17. Actuation Homed: `LeaveAsIs`
    18. Actuation Disabled: `LeaveAsIs`
    19. Index: `0`
21. Click apply to save the changes
22. Click on `Nozzles`
23. Click on the Add button
24. Select `ReferenceNozzle` and click `Accept`
25. Configure the new Nozzle with the following settings:
    1. Name: `N2`
    2. Axis X: `x`
    3. Axis Y: `y`
    4. Axis Z: `z2`
    5. Axis Rotation: `b`
    6. Offset X: `25.692`
    7. Offset Y: `-66.460`
    8. Offset Z: `0`
    9. Offset Rotation: `0`
    10. Rotation Mode: `LimitedArticulation`
    11. Safe Z: `30`
    12. Dynamic Safe Z: Checked
    13. Pick Dwell Time (ms) `0`
    14. Place Dwell Time (ms) `0`
26. Switch to the `Nozzle Tips` tab
27. Mark all the nozzle tips as Compatible
28. Switch to the `Vacuum` tab
29. Set the Vacuum Actuator to `VAC2`
30. Leave the Blow Off Actuator blank
31. Set the Sensing Actuator to `VAC2`

## Fine Tuning
TSwi
32. Attach a nozzle to your new second tool head
33. Set your new nozzle's offset
34. Set Vision pipeline
35. Test picking up components
