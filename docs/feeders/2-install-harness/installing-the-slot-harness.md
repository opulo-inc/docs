# Installing the Slot Harness

In this step, you'll install and wire slots onto the front and back rails of your LumenPnP. Slots provide power and communication to your feeders.

## Adjust Your Staging Plate

To ensure feeders will mount to your LumenPnP's front rail, we need to ensure that your staging plate is mounted at the correct position.

!!! danger
    Be aware that moving your primary staging plate will change where your bottom camera and homing fiducial markers are mounted. After moving the staging plate, you will need to review your machine's calibration. Specifically, the [Homing Fiducial](../../openpnp/calibration/4-homing-fiducial/index.md#tuning-the-homing-fiducial) and [Bottom Camera Position](../../openpnp/calibration/7-bottom-camera-position/index.md).

1. Unplug your LumenPnP.
   
2. Loosen the 4x M5x8mm button head screws that secure each staging plate to your machine.

3. Measure exactly 75mm of clearance between the front rail and the staging plate. You can use the [squaring bracket](https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/FDM/squaring-bracket.FCStd) included in LumenPnP v3 kits. (STL available in the latest [LumenPnP Release](https://github.com/opulo-inc/lumenpnp/releases))
  ![measuring with the squaring bracket](img/staging-plate-spacing.png)

1. Re-tighten the four M5x8mm button head screws to secure the staging plate.

## Prepare the Slots

In your Slot Harness Kit, you'll find:

  - 49x Slots
  - 1x Termination Slot
  - 1x Slot Cable Harness
  - 1x Feeder Programmer
  - 10x Cable Clips
  - 50x M5x10mm Socket Head Screws
  - 50x M5 T-Slot Nuts

![](img/IMG_1969.JPG)

1. Note that each slot has a number from 1-50. This is the slot's **address**. It's important that you **mount slots in order**. You'll also notice that the 50th slot is a different color. It's important that **50 is connected last in the harness**. This allows the feeders to communicate correctly.
   ![](img/IMG_2023.JPG)
   ![](img/IMG_1973.JPG)

2. For each slot, take an M5x10mm socket head screw and insert it in the circular opening on the back. Lightly thread an M5 T-slot nut onto each one as shown.
   ![](img/IMG_2026.JPG)
   ![](img/IMG_2027.JPG)
   ![](img/IMG_2029.JPG)

3. Line up slots 1-25 in preparation for mounting to the front rail.
   ![](img/IMG_2038.JPG)
   ![](img/IMG_2039.JPG)

## Mount the Slots

1. Push the head to the back right corner of the machine.
   ![](img/IMG_1959.JPG)
2. Lift the machine up onto its back legs.
   ![](img/IMG_1962.JPG)
   ![](img/IMG_1963.JPG)
3. Grab a `spool arm` from your feeder packaging. This print comes with each feeder and holds a component spool, but it also has a notch for aligning slots.
   ![](img/IMG_1968.JPG)

4. Looking at your machine from the bottom, find the front left leg to the upper left. Place the flat of the square end of the spool arm against the front left leg, and the back of the arm against the front rail extrusion. Use the image below for reference.
   ![](img/IMG_2030.JPG)
   ![](img/IMG_2032.JPG)


5. Insert the T-slot nut of the `1` slot into the extrusion as shown, and slide it into the notch in the spool arm. (This notch places the slot exactly 85mm away from the front left leg). Tighten the M5 screw to secure the slot.
   ![](img/IMG_2034.JPG)
   ![](img/IMG_2037.JPG)

6. Begin mounting the rest of the slots in order. Make sure they are mounted with the same orientation as the first. Gently press each slot into the previous one while tightening to ensure there are no gaps between them.
   ![](img/IMG_2044.JPG)
   ![](img/IMG_2045.JPG)
   ![](img/IMG_2049.JPG)

7. Continue until slots `1`-`25` are mounted to the front rail.
   ![](img/IMG_2047.JPG)

8. Next, you'll mount slots to the back rail. Near the back right leg, place the flat of the square end of the spool arm against the triangle bracket, and the flat back of the arm against the back rail extrusion as shown in the image.
   ![](img/IMG_2057.JPG)

9. Insert the T-slot nut of the `26` slot into the extrusion as shown, and slide it into the notch in the spool arm. (This notch places the slot exactly 85mm away from the bracket). Tighten the M5 screw to secure the slot.
   ![](img/IMG_2059.JPG)

10. As you did for the front rail, mount the slots in order in the same orientation as `26`, gently pushing each slot into the previous when tightening.
   ![](img/IMG_2062.JPG)

11. Ensure that the differently colored slot `50` is in the final position.
   ![](img/IMG_2065.JPG)
   ![](img/IMG_2069.JPG)

## Install the Harness

1. If you have one installed, remove the cover to your motherboard.
   ![](img/IMG_2073.JPG)
   ![](img/IMG_2075.JPG)
   ![](img/IMG_2076.JPG)

2. Identify the feeder port on your motherboard. It's the 2x3 pin connector below the Y axis stepper driver.
  ![](img/IMG_2081.JPG)

3. Find the end of the cable harness with the "<-- TO MOBO" label. Plug this end into the feeder port on your motherboard. Flip the cable over so that it's leading off the left side of the motherboard.
   ![](img/IMG_2084.JPG)
   ![](img/IMG_2089.JPG)
   ![](img/IMG_2090.JPG)

4. Remount your motherboard cover.
   ![](img/IMG_2093.JPG)
   ![](img/IMG_2094.JPG)

5. Using the cable clips, secure the cable to the bottom of the left rail as shown.
   ![](img/IMG_2096.JPG)
   ![](img/IMG_2098.JPG)

6. Fold the cable over as shown, and secure it to the bottom of the front rail using two more cable clips.
   ![](img/IMG_2099.JPG)
   ![](img/IMG_2100.JPG)
   ![](img/IMG_2101.JPG)

1. Bend a small "U" shape into the cable in between the next 25 connectors as shown.
   ![](img/IMG_2131.JPG)
   ![](img/IMG_2132.JPG)

2. Plug the next 25 connectors into the 25 slots on the front rail.
   ![](img/IMG_2102.JPG)
   ![](img/IMG_2103.JPG)
   ![](img/IMG_2105.JPG)

1. Attach the cable to the bottom of the right side of the front rail using two cable clips.
   ![](img/IMG_2108.JPG)
   ![](img/IMG_2109.JPG)

1. Fold the cable over, and secure the cable to the bottom of the right rail using three cable clips as shown.
   ![](img/IMG_2110.JPG)
   ![](img/IMG_2111.JPG)
   ![](img/IMG_2112.JPG)

1. Fold the cable over again and secure to the bottom of the right side of the back rail using two more cable clips.
   ![](img/IMG_2113.JPG)
   ![](img/IMG_2114.JPG)

1. Bend a small "U" shape into the cable in between the final 25 connectors as shown.
   ![](img/IMG_2131.JPG)
   ![](img/IMG_2132.JPG)

1. Plug the final 25 connectors into the 25 slots on the back rail.
   ![](img/IMG_2115.JPG)
   ![](img/IMG_2116.JPG)
   ![](img/IMG_2117.JPG)
   ![](img/IMG_2119.JPG)

1. Take a minute to ensure that your wiring looks like the picture below.
   ![](img/IMG_2120.JPG)

1. Lower your machine back down onto its four legs.
   ![](img/IMG_2122.JPG)
   ![](img/IMG_2125.JPG)

## Next Steps

Next is [updating your software.](../3-software-setup/software-setup.md)
