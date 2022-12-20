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

If you built a V2 LumenPnP with only one tool head, follow this guide to install a second one. Note that there have been subtle design changes to the 3D printed parts that attach components to the staging plate. Both the newer V3 models and the older V2 models are compatible with any LumenPnP. The photos in this guide will show v2 components.

## Required Materials

See the LumenPnP BOM for specifications and links to purchase hardware for the upgrade:

|  Qty | Pneumatics Part              |
| ---: | ---------------------------- |
|    1 | [Pump-Mount][pmount]         |
|    1 | [Pneumatic-Y-Adapter][yLink] |
|    1 | Vacuum Pump                  |
|    1 | Solenoid Valve               |
|    3 | M3 Hex Nuts                  |
|    2 | M3x8 machine screw           |
|    2 | M3x10 machine screw          |
|    1 | M3x30 machine screw          |
|    2 | [Rubber Band][rubLink]       |

|  Qty | Tool Head Part                         |
| ---: | -------------------------------------- |
|    1 | [Pneumatic Adapter MS4M-M5][adaptor]   |
|    1 | [Pneumatic-Y-Adapter][yLink]           |
|    3 | CP40 Holder (Link [1][cp1], [2][cp2])  |
|    2 | [Rubber Band][rubLink]                 |
|    1 | [NEMA11 Hollow Shaft Stepper][hollowL] |
|    4 | M2.5x8 machine screw                   |

|    Qty | Wires and Tubing Part                |
| -----: | ------------------------------------ |
| 2025mm | [Pneumatic Tubing 4mm OD][smalltube] |
|  325mm | [Pneumatic Tubing 6mm OD][bigTube]   |
|      1 | [R Motor Cable Harness][wireL]       |
|      1 | [Pump Wire Harness][pumpWire]        |

## Installing the Tool Head

1. Attach the the prepared NEMA11 hollow shaft stepper motor (with the attached CP40 nozzle holder) to the right Z gantry with four M2.5x8mm screws. Make sure the wire port is facing outwards as shown below.
  {{< container-image path="images/attaching the toolhead.png" alt="the four screws to attach the second toolhead" >}}

## Installing the Pneumatics

The new tool will need a new vacuum pump and valve. This will be mostly the same assembly as the components for the first toolhead. The main differences will be that we will mount the electronics at different places on the staging plate, and and plug them into different connections on the motherboard.

1. Start by press-fitting two M3 nuts into the side recesses in the Pump Mount.
  {{< container-image path="images/Populating-The-Staging-Plate-Step-1-2.png" alt="Two Nut locations on the Pump Mount" >}}

2. Mount the pump in the Pump Mount using a couple rubber bands. Start by grabbing the rubber band with both hands, giving it a half twist, and folding it over on itself, making two loops.
  {{< container-image path="images/IMG_0737.JPG" alt="" >}}
  {{< container-image path="images/IMG_0738.JPG" alt="" >}}
  {{< container-image path="images/IMG_0740.JPG" alt="" >}}

3. Stretch each rubber band over each pair of pegs on the Pump Mount. Guide the pump between each pair of bands so that it's suspended in the Pump Mount.
  {{< container-image path="images/IMG_0742.JPG" alt="" >}}
  {{< container-image path="images/IMG_0743.JPG" alt="" >}}
<!-- TODO: Get new coordinates for the vacuum pump on the staging plate -->
4. Mount the Pump Mount to the staging plate using two M3 x 10mm screws in the location shown below, G31 and G33.
  {{< container-image path="images/second pump mounting location v2.png" alt="Mounting position for the Pump" >}}

5. Use two M3x8mm screws to attach the valve to the Valve Mount as shown below.
  {{< container-image path="images/mounting the valve to mount.png" alt="attaching the valve to the valve mount with two screws" >}}
  {{< container-image path="images/valve mounting location.png" alt="attaching the valve to the valve mount with two screws" >}}
<!-- TODO: Get new Y splitter coordinates on the staging plate -->
6. Use an M3x30mm screw and an M3 nut to mount the pneumatic Y splitter to the staging plate as shown: B12.
  {{< container-image path="images/y splitter mount 2.png" alt="Attaching the Y Splitter to the Staging Plate" >}}

### Connecting the Pneumatics and wires

Time to connect the pneumatics to the new toolhead.

7. The origin of vacuum in the machine is our vacuum pump. The off-center port is the one that provides vacuum. Use about 95mm of the 6mm clear tubing and push it onto the off-center port on the vacuum pump. Push the other end onto the inline plastic port of the valve as shown below.
  {{< container-image path="images/IMG_0728.JPG" alt="" >}}
  {{< container-image path="images/IMG_0729.JPG" alt="" >}}

<!-- TODO: Do we want another photo of the 2nd Valve? -->
8. Use a 230mm section of the 6mm clear tubing and push it onto the right-angle plastic port of the valve, and push the other side into the single, larger port of the Y splitter.
  {{< container-image path="images/IMG_0745.JPG" alt="" >}}
  {{< container-image path="images/IMG_0731.JPG" alt="" >}}
<!-- TODO: Get an image of pressing the tubing on the VAC2 sensor, the photo we have is only on the VAC1 sensor -->
<!-- TODO: Do we want another photo of the 2nd Y splitter? -->

9. Switch to using the smaller, 4mm black tubing. Cut a 225mm length of 4mm OD tubing and push one side into a fork of the Y splitter, and route the other end underneath the motherboard and onto the `VAC2` sensor port. Gently press the tube onto the vacuum sensor.
  {{< container-image path="images/IMG_0733.JPG" alt="" >}}
  {{< container-image path="images/IMG_0736.JPG" alt="" >}}

10. Now take 1.8 meters of 4mm black tubing and push it into the other fork of the Y splitter. Take the loose end, and route it underneath the motherboard.

11. Route both the black tubing and the wire for the new toolhead up along the X umbilical. Attach them with new zip ties, or slip it inside your existing ones, alongside the first tool head's tubing and wires.
  {{< container-image path="images/IMG_0824.JPG" alt="" >}}

12. With the pneumatic tubing dangling loose past the end of the swivel arm, cut any excess tubing (still allowing some slack for motor rotation). Push the other end into the pneumatic coupling on the back side of the rotation stepper motor. Extra slack will allow the motor to rotate freely 180 degrees in each direction, so err on the side of leaving more than less. If the tubing falls away from the umbilical, use one or two small zip ties to secure them together.
  {{< container-image path="images/IMG_0825.JPG" alt="" >}}

13. Plug the cable into the new tool motor. Make sure it has enough slack so that it isn't strained if the tool is raised or lowered.
  {{< container-image path="images/plug in toolhead.png" alt="plugging in the new tool motor">}}

14. Plug the new cable (labeled `RM`) into the first port in the second row, labeled `R`. (Note this image shows a Rev 4 motherboard, but the connector is in the same place on the Rev 3 motherboard.)
  {{< container-image path="images/plug-rm.JPG" alt="" >}}

## Configuring OpenPnP

With the hardware set up, we need to tell OpenPnP about the newly installed toolhead.

### Add Z-axis

{{< container-image path="images/reference z2.png" alt="The OpenPnP settings for the new Z-axis">}}

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

{{< container-image path="images/reference b.png" alt="The OpenPnP settings for the new Rotation axis">}}

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

{{< container-image path="images/VAC2 settings.png" alt="The OpenPnP settings for the new Vacuum">}}

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

{{< container-image path="images/N2 settings.png" alt="The OpenPnP settings for the new Vacuum">}}

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

[yLink]: https://www.automationdirect.com/adc/shopping/catalog/pneumatic_components/push-to-connect_union_pneumatic_fittings_(thermoplastic)/union_y_reducer/ury6m-4m
[rubLink]: https://www.uline.com/Product/Detail/S-15809/Desk-Supplies/33-Latex-Free-Rubber-Bands-3-1-2-x-1-8
[pmount]: https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/FDM/pump-mount.FCStd
[adaptor]: https://www.automationdirect.com/adc/shopping/catalog/pneumatic_components/push-to-connect_r-thread_pneumatic_fittings_(thermoplastic)/male_straight_(hex_body)/ms4m-m5
[smalltube]: https://www.automationdirect.com/adc/shopping/catalog/pneumatic_components/flexible_pneumatic_tubing_-a-_hoses/straight_polyurethane_(pur)_tubing/5-z-32_inch_(4_mm)/pu532blk100
[bigTube]: https://www.automationdirect.com/adc/shopping/catalog/pneumatic_components/flexible_pneumatic_tubing_-a-_hoses/straight_polyurethane_(pur)_tubing/6_mm/pu6mblk100
[cp1]: https://www.robotdigg.com/product/799/OpenPnP-CP40-Holder
[cp2]: https://www.alibaba.com/product-detail/SMT-SPARE-PARTS-SAMSUNG-CP40-NOZZLE_60863912898.html?spm=a2700.galleryofferlist.normal_offer.d_title.795d3049d6w6hc
[hollowL]: https://www.robotdigg.com/product/798/NEMA11-hollow-shaft-stepper-for-Pick-and-Place-Machine
[wireL]: https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/CHA/toolhead-motor.yml
[pumpWire]: https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/CHA/pump.yml
