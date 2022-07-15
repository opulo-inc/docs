---
title: "REV03 Motherboard Interposer Installation Guide"
linkTitle: "REV03 Motherboard Interposer Installation Guide"
weight: 1
type: docs
resources:
- src: "**.png"
- src: "**.jpg"
description: >
  Install interposer boards on your REV03 Motherboard
---

This guide is for installing Vacuum Sensor Interposer Boards. Some early units of the LumenPnP shipped with the standard vacuum sensor on the motherboard that has a signal swing of a few hundred units. Because of some variability in the components used, this swing can be smaller for some folks and they may have a hard time getting a consistent signal from it for vacuum part-pick detection. This installation makes the signal swing much bigger, making it easier to get a consistent signal from the sensor.

We're sorry about this! In our internal testing of this feature, we found that the swing was large enough to detect a mispick accurately, but we didn't test comprehensively enough to ensure it was always the case for every board. We've changed the way we test features before boards leave our facility to catch these types of issues.

{{% alert color="danger" title="Help" %}}
If you at any time run into trouble or are unsure of how to proceed with this guide, please reach out to our [customer support line](https://opulo.io/pages/contact-support) and we'll get you up and running.
{{% /alert %}}

### Timing

This process should take about 60 minutes.

### Tools Needed

* Hot Air Gun
* Soldering Iron
* Tweezers
* Solder
* Solder Wick
* 2x Interposer PCBAs
* Your REV03 Motherboard

{{< container-image path="IMG_1290.JPG" alt="" >}}
{{< container-image path="IMG_1275.JPG" alt="" >}}

## Installation

1. First, we'll remove the existing vacuum sensors. You'll find them by the USB-C connector labeled "VAC1" and "VAC2". If your board looks like the image below, then you do not have the interposers installed and this guide is for you! If your vacuum sensors have a little green board between them and the motherboard, you're all set and don't need to perform this installation.

    Using your hot air gun, apply heat to the legs of one of the vacuum sensors on your motherboard. Wait until you see the solder become molten and shiny, then gently remove the sensor from the PCB using tweezers. Perform the same operation for the second sensor.

{{< container-image path="IMG_1278.JPG" alt="" >}}
{{< container-image path="IMG_1297.JPG" alt="" >}}
{{< container-image path="IMG_1298.JPG" alt="" >}}
{{< container-image path="IMG_1299.JPG" alt="" >}}

{{% alert color="danger" title="Warning" %}}
Be careful not to tug too hard on the sensor. It's being held down onto the PCB with just a few copper pads, and pulling too hard might result in lifting those pads off the PCB. Make sure the solder is completely molten, and the sensor should come away easily.
{{% /alert %}}
   
1. Remove any remaining solder on the vacuum sensor pads. We need these clean and flat for the interposer installation, so use some solder wick to remove any solder from the six pads that make up each vacuum sensor footprint.

{{< container-image path="IMG_1303.JPG" alt="" >}}
   
3. Now we can install an interposer board. To begin, make sure you have the board orientation correct. The bottom of the board has six pads that match the vacuum sensor footprint on the board. Ensure that they line up with the footprint, and that a bit of the interposer board is hanging off of the edge of the motherboard.

{{< container-image path="IMG_1305.JPG" alt="" >}}
{{< container-image path="IMG_1306.JPG" alt="" >}}
Correct orientation

{{< container-image path="IMG_1308.JPG" alt="" >}}
Ensure the six pads of the footprint on the motherboard align with the six plated edges of the interposer board.

{{< container-image path="IMG_1309.JPG" alt="" >}}

4. Add a bit of solder to one of the pads on the motherboard, and tack the interposer in place with a bit of solder on one of the pads. Apply heat to this joint while you align the interposer board using your tweezers.

{{< container-image path="IMG_1311.JPG" alt="" >}}
{{< container-image path="IMG_1314.JPG" alt="" >}}

5. Once your board is aligned with the pads and tacked in place, apply solder to the remaining five pads. Make sure that you have a good fillet of solder connecting the interposer board to the pad on the motherboard.

{{< container-image path="IMG_1315.JPG" alt="" >}}
{{< container-image path="IMG_1316.JPG" alt="" >}}
{{< container-image path="IMG_1317.JPG" alt="" >}}

6. Complete steps 4 and 5 with the second interposer board and the second vacuum footprint on the motherboard.

{{< container-image path="IMG_1321.JPG" alt="" >}}
{{< container-image path="IMG_1322.JPG" alt="" >}}
{{< container-image path="IMG_1327.JPG" alt="" >}}

7. Check to make sure that the sensor is working properly. We'll do this by connecting to the motherboard with your computer and try sending some GCode commands to it.
   - First sensor command: `M3426 G2 C1 I1 A110`
   - Second sensor command: `M3426 G2 C2 I1 A110`

    When at ambient pressure, the response from each sensor should look something like this:

    ```
    V: 
    ```

    Make sure the `V` value is about 29800. Don't worry if it's not exact. As long as it's within 500 of 29800, it's an acceptable value.

    If both sensors return an acceptable value, proceed to the next step.

8. Now we'll check the sensor readings when connected to the pneumatic system. Push the vacuum line onto the VAC1 sensor. Install the N045 nozzle tip onto the nozzle. Now we'll turn on the Nozzle 1 pump and valve using the two following commands:

    ```
    M106                  ;turn on pump 1
    M106 P1 S255          ;turn on valve 1
    ```

    Now, read the pressure from the first vacuum sensor:
    ```
    M3426 G2 C1 I1 A110
    ```

    You should read a value of about 15500. Don't worry if it's not exact. As long as it's within 13000 - 18000, it's an acceptable value. Record this number.

    Now, cover the tip of the nozzle with your finger and rerun the command. *Make sure the pump and valve are still running.* Record this number. Turn off the pump and valve using the following commands:

    ```
    M107                  ;turn off the pump
    M107 P1               ;turn off the valve
    ```

9. Remove the vacuum tube from VAC1 and install it onto VAC2.
10.   Perform step 8 again to check the second sensor. You'll need to use `M3426 G2 C2 I1 A110` to read the pressure from the second sensor instead of the first.
11.    Remove the vacuum tube from VAC2 and install it onto VAC1.
12.    If the value when the nozzle was covered was around 2000 less than the uncovered value for both sensors, then your installation is complete! If not, reasses the soldering joints of the interposer board onto the motherboard and make sure they're all connected with a solid joint. If you are still unable to get a good reading, please reach out to our [support line](https://opulo.io/pages/contact-support) and we'll make sure you get up and running.