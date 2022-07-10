---
title: "Right Side"
linkTitle: "Right Side"
weight: 20
description: >
  Assembly of the right side of the machine
---

Great! Now lets make the right side. Very similar to the left, just a couple small changes. Remember that we're referring to the right side of the machine as seen from the front:

{{< container-image path="images/hero-alpha-min.png" alt="The machine shown from the front" >}}

## Assembly

| Qty | Part                          |
|----:|-------------------------------|
| 1   | FDM-0002 (Front Right Leg)    |
| 1   | FDM-0004 (Back Right Leg)     |
| 2   | Aluminum extrusion            |
| 6   | M5 T-slot nut                 |
| 6   | M5x10 machine screw           |
| 1   | NEMA17 stepper motor          |
| 1   | GT2 Pulley (with grub screws) |
| 4   | M3x8 machine screw            |

1. Take the {{<tooltip "Front Right Leg" "FDM-0002">}} and insert the v-slot extrusions into the two square holes designed to take this part. Ensure that the extrusion comes to the end of the holes in which they're inserted. If you have a hard time getting the extrusion into the slots, gently slide them into place using some taps from a mallet.
    {{< container-image path="images/Right-Side-Step-9.png" alt="Inserting the V-slot Extrusions into the Front Right Leg" >}}

2. Take the {{<tooltip "Back Right Leg" "FDM-0004">}} and place it onto the two v-slot extrusions at the end opposite the {{<tooltip "Front Right Leg" "FDM-0002">}}. Your progress should look like the image below.
  {{< container-image path="images/Right-Side-Step-10.png" alt="Inserting the V-slot Extrusions into the Back Right Leg" >}}
  {{< container-image path="images/Right-Side-Step-10-2.png" alt="Inserting the V-slot Extrusions into the Front Right Leg result 2" >}}

3. On the top rail, drop in and position a slot nut underneath the hole in the top of each leg and screw a M5x10mm machine screw into the nut.
  {{< container-image path="images/Right-Side-Step-11.png" alt="Securing the V-slot Extrusions to the top of the Front Right Leg" >}}
  {{< container-image path="images/Right-Side-Step-11-2.png" alt="Securing the V-slot Extrusions to the top of the Back Right Leg" >}}
  {{< container-image path="images/top_screws.png" alt="Location for the top screws" >}}

12. On the bottom rail, the outer side has three exposed holes for machine screws (one on the {{<tooltip "Back Right Leg" "FDM-0004">}}, two on the {{<tooltip "Front Right Leg" "FDM-0002">}}). For each, drop in and position a slot nut under it and screw a M5x10mm machine screw into it.
  {{< container-image path="images/Right-Side-Step-12.png" alt="Securing the V-slot Extrusions to the Side of the Front Right Leg" >}}
  {{< container-image path="images/Right-Side-Step-12-2.png" alt="Securing the V-slot Extrusions to the Side of the Back Right Leg" >}}
  {{< container-image path="images/outer_screws.png" alt="Location for screws on the outer side" >}}

4. On the bottom rail, the inner side has one exposed hole for a machine screw on the {{<tooltip "Back Right Leg" "FDM-0004">}}. Drop in and position a slot nut under it and screw a M5x10mm machine screw into it.
  {{< container-image path="images/Right-Side-Step-13.png" alt="Securing the V-slot Extrusions to the Side of the Back Right Leg" >}}
  {{< container-image path="images/inner_screws.png" alt="Location for the inner screw" >}}

5. Slide the GT2 Pulley onto the the motor shaft of a NEMA17 stepper motor with the set screw side facing the motor body. Align the pulley so that the end is roughly flush with the end of motor shaft, then tighten one of the set screws on the pulley into the flat side of the motor shaft. Tighten the second set screw as well.
  {{< container-image path="images/Left-Side-Step-14.png" alt="Attaching the GT2 Timing Pulley to the NEMA17 stepper motor" >}}

6. Mount the NEMA17 stepper motor to the {{<tooltip "Back Right Leg" "FDM-0004">}} with four M3x8mm screws, ensuring that the connector is facing inwards towards the zip tie loops as dictated in the picture.
  {{< container-image path="images/Right-Side-Step-15.png" alt="Mounting the Right Y-axis NEMA17 stepper motor to the Back Right Leg" >}}
  {{< container-image path="images/Right-Side-Step-15-2-MANUAL.png" alt="Orienting Right Y-axis NEMA17 stepper motor with the connector facing inwards" >}}

## Next steps

Continue to [connecting the two sides together]({{< relref "connecting-sides" >}}).
