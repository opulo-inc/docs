# Installing the Slot Harness

In this step, you'll install and wire slots onto the front and back rails of your LumenPnP. Slots provide power and communication to your feeders.

!!! info "If your machine is v3.1 or greater"
    Your LumenPnP came with slots pre-installed, so you can jump ahead to the [Install the Harness](#install-the-harness) section.

## Adjust Your Staging Plate

To ensure feeders will mount to your LumenPnP's front rail, we need to ensure that your staging plate is mounted at the correct position. **If you have a v3 LumenPnP, your staging plate is already at the correct distance, and can skip this section.**

!!! danger "Warning"
    Be aware that moving your primary staging plate will change where your bottom camera and homing fiducial markers are mounted. After moving the staging plate, you will need to review your machine's calibration. Specifically, the [Homing Fiducial](../../openpnp/calibration/4-homing-fiducial/index.md#tuning-the-homing-fiducial) and [Bottom Camera Position](../../openpnp/calibration/7-bottom-camera-position/index.md).

1. Unplug your LumenPnP.

2. Loosen the 4x M5x8mm button head screws that secure each staging plate to your machine.

3. Measure exactly 75mm of clearance between the front rail and the staging plate. You can use the [squaring bracket](https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/FDM/squaring-bracket.FCStd) included in LumenPnP v3 kits. (STL available in the latest [LumenPnP Release](https://github.com/opulo-inc/lumenpnp/releases))
  ![measuring with the squaring bracket](img/staging-plate-spacing.png)

4. Re-tighten the four M5x8mm button head screws to secure the staging plate.
   ![Tighten the staging plate screws](img/staging-right-screw-1.JPG)

## Prepare the Slots

In your Slot Harness Kit, you'll find:

| Count | Item                                |
| ----- | ----------------------------------- |
| 49x   | [Feeder Slots][slot-url]            |
| 1x    | [Feeder Termination Slot][slot-url] |
| 1x    | [Feeder Programmer][slot-url]       |
| 10x   | [Cable Clips][clip-url]             |
| 50x   | M5x10mm Socket Head Screws          |
| 50x   | M5 T-Slot Nuts                      |

![Slot Harness Kit](img/IMG_1969.JPG)

!!! Note
    Each slot has a number from 1-50. This is the slot's **address**. It's important that you **mount slots in order**. You'll also notice that the 50th slot is a different color. It's important that **50 is connected last in the harness**. This allows the feeders to communicate correctly.
      ![Slot number 1](img/IMG_2023.JPG)
      ![Slots 50 is a different color](img/IMG_1973.JPG)

1. For slot number 1, take an M5x10mm socket head screw and insert it in the circular opening on the back.
   ![Inserting the M5x10mm screw](img/IMG_2026.JPG)
   ![Screw protruding from the back of the slot](img/IMG_2027.JPG)

2. Lightly thread an M5 T-slot nut onto the screw as shown.
   ![Loosely threading the t-slot nut](img/IMG_2029.JPG)

3. Repeat this for each feeder slot.
   ![Slots lined up in order side angle](img/IMG_2039.JPG)

4. Line up slots 1-25 in numerical order in preparation for mounting to the front rail.
   ![Slots lined up in order](img/IMG_2038.JPG)

## Mount the Slots

1. Push the LumenPnP gantry to the back, right corner of the machine.
   ![Moving the gantry to the back right corner](img/IMG_1959.JPG)
2. Lift the machine up onto its back legs.
   ![Grabbing the LumenPnP](img/IMG_1962.JPG)
   ![LumenPnP on its back legs](img/IMG_1963.JPG)
3. Grab a Spool Arm from your feeder packaging. This print comes with each feeder and holds a component spool. It also has a notch for aligning slots.
   ![Spool Arm](img/IMG_1968.JPG)

4. Looking at your machine from the bottom, find the front left leg (in the air, on your left). Place the flat of the square end of the spool arm against the front left leg, and the back of the arm against the front rail extrusion. Use the image below for reference.
   ![Front left leg](img/IMG_2030.JPG)
   ![Spool Arm held in place against the front left leg](img/IMG_2032.JPG)

5. Insert the T-slot nut of the `1` Feeder Slot into the extrusion as shown, and slide it into the notch in the spool arm. Tighten the M5 screw to secure the slot. This notch places the slot exactly 85mm away from the front left leg.
   ![Slot 1 positioned in the extrusion at the correct distance](img/IMG_2034.JPG)
   ![Slot 1 positioned at the notch in the spool arm](img/IMG_2037.JPG)

6. Begin mounting the rest of the slots in order, with the same orientation as the first one. Gently press each slot into the previous one while tightening to ensure there are no gaps between them.
   ![Adding slot 2](img/IMG_2044.JPG)
   ![Adding slot 3](img/IMG_2045.JPG)
   ![Adding multiple slots tightly packed](img/IMG_2049.JPG)

7. Continue until slots `1`-`25` are mounted to the front rail.
   ![Slots 1-25 mounted](img/IMG_2047.JPG)

8. Next, you'll mount slots to the back rail. Near the back right leg, place the flat of the square end of the spool arm against the metal triangle bracket. Lay the flat back of the arm against the back rail extrusion as shown in the image.
   ![Spool Arm held in place against the back right leg](img/IMG_2057.JPG)

9. As before, insert the T-slot nut of the `26` slot into the extrusion as shown, and slide it into the notch in the spool arm. Tighten the M5 screw to secure the slot.
   ![Slot 26 positioned in the extrusion at the correct distance](img/IMG_2059.JPG)

10. As you did for the front rail, mount the slots in order in the same orientation as `26`, gently pushing each slot into the previous when tightening.
   ![Slots 26-50 mounted](img/IMG_2062.JPG)

11. Ensure that the differently-colored slot `50` is in the final position.
   ![Slot 50 from the bottom](img/IMG_2065.JPG)
   ![Slot 50 from the top](img/IMG_2069.JPG)

## Install the Harness

1. If you have a cover on your motherboard, remove it by unscrewing the two M3x30 socket head screws.
   ![Unscrewing the motherboard cover](img/IMG_2073.JPG)
   ![Unscrewing the motherboard cover 2](img/IMG_2075.JPG)
   ![Removing the cover](img/IMG_2076.JPG)

2. Identify the feeder port on your motherboard. It's the 2x3 pin connector below the Y axis stepper driver.
  ![The Feeder Port](img/IMG_2081.JPG)

3. Find the end of the cable harness with the `← TO MOBO` label. Plug this end into the feeder port on your motherboard. Flip the cable over so that it's leading off the left side of the motherboard.
   ![The motherboard side of the cable harness](img/IMG_2084.JPG)
   ![Cable plugged into motherboard](img/IMG_2089.JPG)
   ![Cable routed to the left of the motherboard](img/IMG_2090.JPG)

4. Remount your motherboard cover with the two M3x30mm screws.
   ![Reattaching the motherboard cover](img/IMG_2093.JPG)
   ![Screwing in the motherboard cover](img/IMG_2094.JPG)

5. Using the cable clips, secure the cable to the bottom of the left rail as shown.
   ![Cable Clip](img/IMG_2096.JPG)
   ![Cable clip routing the feeder cable](img/IMG_2098.JPG)

6. Fold the cable over as shown, and secure it to the bottom of the front rail using two more cable clips.
   ![Folding the cable](img/IMG_2099.JPG)
   ![Routing the cable with a clip](img/IMG_2100.JPG)
   ![Adding an additional clip](img/IMG_2101.JPG)

7. Bend a small "U" shape into the cable in between each of the next 25 connectors as shown.
   ![Holding the cable between two connectors](img/IMG_2131.JPG)
   ![Bending the cable between two connectors](img/IMG_2132.JPG)

8. Plug the next 25 connectors into the 25 slots on the front rail.
   ![Plugging in one slot](img/IMG_2102.JPG)
   ![Plugging in more slots](img/IMG_2103.JPG)
   ![All front slots connected](img/IMG_2105.JPG)

9. Attach the cable to the bottom of the right side of the front rail using two cable clips.
   ![Adding a cable clip](img/IMG_2108.JPG)
   ![Adding a second cable clip](img/IMG_2109.JPG)

10. Fold the cable over, and secure the cable to the bottom of the right rail using three cable clips as shown.
   ![Folding the cable over with a clip](img/IMG_2110.JPG)
   ![Adding the second cable clip](img/IMG_2111.JPG)
   ![Adding the third cable clip](img/IMG_2112.JPG)

11. Fold the cable over again and secure to the bottom of the right side of the back rail using two more cable clips.
   ![One cable clip on the bottom rail](img/IMG_2113.JPG)
   ![Second cable clip on the bottom rail](img/IMG_2114.JPG)

12. Bend a small "U" shape into the cable in between the final 25 connectors as shown.
   ![Holding the cable between two connectors](img/IMG_2131.JPG)
   ![Bending the cable between two connectors](img/IMG_2132.JPG)

13. Plug the final 25 connectors into the 25 slots on the back rail.
   ![Plugging in the first connector to the back rail](img/IMG_2115.JPG)
   ![Plugging in multiple connectors to the back rail](img/IMG_2116.JPG)
   ![The final connector plugged in](img/IMG_2117.JPG)
   ![All connectors plugged into the back rail slots](img/IMG_2119.JPG)

14. Take a minute to ensure that your wiring looks like the picture below.
   ![Final wiring for feeder slots](img/IMG_2120.JPG)

15. Lower your LumenPnP back down onto its four legs.
   ![Lowering down the LumenPnP](img/IMG_2122.JPG)
   ![The LumenPnP flat on the table](img/IMG_2125.JPG)

## Next Steps

If you came here from the [Wiring](../../semi-assembly/wiring/index.md) page, go back to step 35 to finish plugging everything in. Otherwise, next is [updating your software.](../3-software-update/software-update.md)

[clip-url]: https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/FDM/extrusion-cable-clip.FCStd
[slot-url]: https://github.com/opulo-inc/feeder
