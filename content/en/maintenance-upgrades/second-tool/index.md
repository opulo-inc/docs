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

1. Attach the the prepared NEMA11 hollow shaft stepper motor (with the attached CP40 nozzle holder) to the right Z gantry with four M2.5x8mm screws. Make sure the wire port is facing outwards as shown below.
  {{< container-image path="images/Screen Shot 2021-12-29 at 6.20.02 PM.png" alt="" >}}

2. Plug the cable into the new tool motor
  {{< container-image path="images/IMG_0812.JPG" alt="plugging in the new tool motor">}}
3. Attach the wire to your umbilical with zip ties, or thread it into your wiring sheath. Make sure it has enough slack so that it isn't strained if the tool is raised or lowered.
4. Plug the new cable (labeled `RM`) into the first port in the second row, labeled `R`. (Note this image shows a Rev 4 motherboard, but the connector is in the same place on the Rev 3 motherboard.)
  {{< container-image path="images/plug-rm.JPG" alt="" >}}

## Installing the Pneumatics

### Pump mount

|  Qty | Part                  |
| ---: | --------------------- |
|    1 | FDM-0025 (Pump Mount) |
|    2 | M3 Hex Nuts           |
|    2 | Rubber Band           |
|    1 | Vacuum Pump           |
|    2 | M3x10 machine screw   |

The new tool will need a new vacuum pump and valve. This will be mostly the same assembly as the components for the first toolhead. The only differences will be that we will mount the electronics at different places on the staging plate, and and plug them into different connections on the motherboard.

1. Start by press-fitting M3 nuts into the side recesses in the Pump Mount.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-1-2.png" alt="Two Nut locations on the Pump Mount" >}}

2. Now we'll mount the pump in the Pump Mount using a couple rubber bands. Start by grabbing the rubber band with both hands, giving it a half twist, and folding it over on itself, making two loops.
  {{< container-image path="images/IMG_0737.JPG" alt="" >}}
  {{< container-image path="images/IMG_0738.JPG" alt="" >}}
  {{< container-image path="images/IMG_0740.JPG" alt="" >}}

3. Stretch each rubber band over each pair of pegs on the Pump Mount. Guide the pump between each pair of bands so that it's suspended in the Pump Mount.
  {{< container-image path="images/IMG_0742.JPG" alt="" >}}
  {{< container-image path="images/IMG_0743.JPG" alt="" >}}
  {{< container-image path="images/IMG_0744.JPG" alt="" >}}
<!-- TODO: Get new coordinates for the vacuum pump on the staging plate -->
4. Mount the Pump Mount to the staging plate using two M3 x 10mm screws in the location shown below, G31 and G33.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-4-ALT.png" alt="Mounting position for the Pump" >}}
  {{< container-image path="images/IMG_0741.JPG" alt="The Pump assembly mounted on the staging plate" >}}

### Valve mount

|  Qty | Part                   |
| ---: | ---------------------- |
|    1 | FDM-0042 (Valve Mount) |
|    1 | Blowoff Valve          |
|    4 | M3 Hex Nut             |
|    6 | M3x8 machine screw     |

Now we'll attach the second Valve Mount to the staging plate.

5. Press fit four M3 nuts into the recesses in the Valve Mount.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-5.png" alt="four nut locations in the Valve Mount" >}}

6. Use two M3x8mm screws to attach the valve to the Valve Mount as shown below.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-6.png" alt="attaching the valve to the valve mount with two screws" >}}
<!-- TODO: Get new coordinates for the valve on the staging plate -->
7. Use four M3x8mm screws to mount the Valve Mount to the staging plate in the location shown: E23, E25, G23, G25.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-7-ALT.png" alt="attaching the valve to the staging plate" >}}
  {{< container-image path="images/IMG_0745.jpg" alt="" >}}

### Pneumatic Y splitter mount

|  Qty | Part                |
| ---: | ------------------- |
|    1 | M3x30 machine screw |
|    1 | M3 Hex nut          |
|    1 | Y Splitter          |
<!-- TODO: Get new Y splitter coordinates on the staging plate -->
8. Use an M3x30mm screw and an M3 nut to mount the pneumatic Y splitter to the staging plate as shown: B12.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-8-ALT.png" alt="Attaching the Y Splitter to the Staging Plate" >}}
  {{< container-image path="images/PXL_20220204_061125932.MP.jpg" alt="" >}}

### Connecting the Pneumatics

Time to connect the pneumatics to the new toolhead.

|       Qty | Part                |
|----------:|---------------------|
|     65 mm | 6mm Tubing (Clear)  |
|    230 mm | 6mm Tubing (Clear)  |
|    235 mm | 4mm Tubing (Black)  |
| Remaining | 4mm Tubing (Black)  |

9. The origin of vacuum in the machine is our vacuum pump. The off-center port is the one that provides vacuum. Start by cutting a 65mm section of the 6mm clear tubing and pushing it onto the off-center port on the vacuum pump. Push the other end onto the inline plastic port of the valve as shown below.
  {{< container-image path="images/IMG_0728.JPG" alt="" >}}
  {{< container-image path="images/IMG_0729.JPG" alt="" >}}

10. Cut a 230mm section of the 6mm clear tubing and push it onto the right-angle plastic port of the valve, and push the other side into the single, larger port of the Y splitter.
  {{< container-image path="images/IMG_0745.JPG" alt="" >}}
  {{< container-image path="images/IMG_0731.JPG" alt="" >}}
<!-- TODO: Get an image of pressing the tubing on the VAC2 sensor, the photo we have is only on the VAC1 sensor -->
11. Switch to using the smaller, 4mm black tubing. Cut a 235mm length of 4mm OD tubing and push one side into a fork of the Y splitter, and route the other end underneath the motherboard and onto the `VAC2` sensor port. Gently press the tube onto the vacuum sensor.
  {{< container-image path="images/IMG_0733.JPG" alt="" >}}
  {{< container-image path="images/IMG_0736.JPG" alt="" >}}

12. Now take the remaining length of 4mm black tubing and push it into the other fork of the Y splitter. Take the loose end, and route it underneath the motherboard, then up along the X umbilical. Attach it with new zip ties, or slip it inside your existing ones, alongside the first tool head's tubing.
  {{< container-image path="images/IMG_0824.JPG" alt="" >}}

13. With the pneumatic tubing dangling loose past the end of the swivel arm, cut any excess tubing (still allowing some slack for motor rotation). Push the other end into the pneumatic coupling on the back side of the rotation stepper motor. Extra slack will allow the motor to rotate freely 180 degrees in each direction, so err on the side of leaving more than less. If the tubing falls away from the umbilical, use one or two small zip ties to secure them together.
  {{< container-image path="images/IMG_0825.JPG" alt="" >}}
  The bottom of the staging plate should look like the image below:
  {{< container-image path="images/IMG_0746.JPG" alt="" >}}
<!-- TODO: Get images of the final staging plate -->
## Configuring OpenPnP

With the hardware set up, we need to tell OpenPnP about the newly installed toolhead.

### Add Z-axis
<!-- TODO: Screenshot on big computer -->
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
7. Click `Apply` to save the changes

### Add Rotation Axis
<!-- TODO: Screenshot on big computer -->
8. Click on the Add button
9. Select `ReferenceControllerAxis` and click `Accept`
10. Configure the new axis with the following settings:
    1. Type: `Rotation`
    2. Name: `b`
    3. Driver: `GcodeDriver`
    4. Axis Letter: `B`
    5. Switch Linear <> Rotational: Checked
    6. Home Coordinate: `0`
    7. Resolution \[Millimeters\]: `0.0001`
    8. Steps / Millimeter: `10000`
    9. Limit to Range: Checked
    10. Wrap Around: Unchecked
    11. Soft Limit Low: `-180`
    12. Soft Limit Low Enabled: Unchecked
    13. Soft Limit High: `180`
    14. Soft Limit High Enabled: Unchecked
    15. Feed Rate \[/s\]: `50000`
    16. Acceleration \[/s2\]: `500`
    17. Jerk \[/s3\]: `2000`
11. Click `Apply` to save the changes

### Add 2nd Vacuum
<!-- TODO: Screenshot on big computer -->
12. Click on `Heads > ReferenceHead H1 > Actuators`
13. Click on the Add button
14. Select `ReferenceActuator` and click `Accept`
15. Configure the new Actuator with the following settings:
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
16. Click `Apply` to save the changes

### Add 2nd Nozzle
<!-- TODO: Screenshot on big computer -->
17. Click on `Nozzles`
18. Click on the Add button
19. Select `ReferenceNozzle` and click `Accept`
20. Configure the new Nozzle with the following settings:
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
21. Switch to the `Nozzle Tips` tab
22. Mark all the nozzle tips as Compatible
23. Switch to the `Vacuum` tab
24. Set the Vacuum Actuator to `VAC2`
25. Leave the Blow Off Actuator blank
26. Set the Sensing Actuator to `VAC2`
27. Click `Apply` to save the changes

## Fine Tuning

28. Attach a nozzle to your new second tool head
29. Set [your new nozzle's offset]({{< relref "nozzle-offset" >}})
30. Try homing your machine again. If you get the `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold` error, you will need to tune your [Bottom Camera Vision Pipeline]({{< relref "vision-pipeline-adjustment#nozzles" >}}).
31. Test picking components out of your feeders. Follow the instructions in the [FTP]({{< relref "installing-the-feeders#installing-the-n045-nozzle" >}}) guide. Make sure to activate your newly created tool head, and assign a nozzle tip to it.
