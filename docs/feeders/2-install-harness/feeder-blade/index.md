# Installing the Slot Harness for Blades

In this step, you'll install and wire slots onto the front and back rails of your LumenPnP. Slots provide power and communication to your feeders.

!!! info "If your machine is v3.2 or greater"
    Your LumenPnP came with blades pre-installed, so you can jump ahead to the [Install the Harness](#install-the-harness) section.

## Adjust Your Staging Plate

To ensure feeders will mount to your LumenPnP's front rail, we need to ensure that your staging plate is mounted at the correct position. **If you have a v3 LumenPnP, your staging plate is already at the correct distance, and can skip this section.**

!!! danger "Warning"
    Be aware that moving your primary staging plate will change where your bottom camera and homing fiducial markers are mounted. After moving the staging plate, you will need to review your machine's calibration. Specifically, the [Homing Fiducial](/openpnp/calibration/4-homing-fiducial) and [Bottom Camera Position](/openpnp/calibration/7-bottom-camera-position).

1. Unplug your LumenPnP.

2. Loosen the 4x M5x8mm button head screws that secure each staging plate to your machine.

3. Measure exactly 75mm of clearance between the front rail and the staging plate. You can use the [squaring bracket](https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/FDM/squaring-bracket.FCStd) included in LumenPnP v3 kits. (STL available in the latest [LumenPnP Release](https://github.com/opulo-inc/lumenpnp/releases))
  ![measuring with the squaring bracket](img/staging-plate-spacing.webp)

1. Re-tighten the four M5x8mm button head screws to secure the staging plate.
   ![Tighten the staging plate screws](img/staging-right-screw-1.webp)

## Prepare the Slots

In your Slot Harness Kit, you'll find:

| Count | Item                                       |
| ----- | -------------------------------------------|
| 4x    | [Feeder Slot Blades][slot-url]             |
| 1x    | [Feeder Programmer][slot-url]              |
| 10x   | [Cable Clips][clip-url]                    |
| 20x   | M5x10mm Socket Head Screws (Pre-installed) |
| 20x   | M5 T-Slot Nuts (Pre-installed)             |

![Slot Harness Kit](img/IMG_0514.webp)

!!! Note
    The feeder slot blade set has positions numbered from 1-50 across its four pieces. These are the slot blades's **addresses**. It's important that you **mount each slot blade in sequential order**. These instructions will refer to each slot blade the following way moving forward:

    * Feeder Slot Blade (#1 - #12)
    * Feeder Slot Blade (#13 - #25)
    * Feeder Slot Blade (#26 - #37)
    * Feeder Slot Blade (#38 - #50)

      ![Slot number 1](img/feeder-blade-set.webp)

## Mount the Feeder Slot Blades

0. Slighlty loosen each M5x10mm socket head screw and horizontally align every M5 T-slot nut to aid in mounting the Feeder Slot Blades to the front and back feeder rails, as shown in the above image.

1. Push the LumenPnP gantry to the back, right corner of the machine.
   ![Moving the gantry to the back right corner](img/IMG_0513.webp)
2. Lift the machine up onto its back legs.
   ![Grabbing the LumenPnP](img/IMG_0515.webp)
   ![LumenPnP on its back legs](img/IMG_0516.webp)
3. Grab a Spool Arm from your feeder packaging. This print comes with each feeder and holds a component spool. It also has a notch for aligning slots. This notch places the slot exactly 85mm away from the front left leg.
   ![Spool Arm](img/IMG_1968.webp)

### Front Feeder Rail

4. Looking at your machine from the bottom, find the front left leg (in the air, on your left). Place the flat of the square end of the spool arm against the front left leg, and the back of the arm against the front rail extrusion. Use the image below for reference.
   ![Spool Arm held in place against the front left leg](img/IMG_0517.webp)

5. Insert `Feeder Slot Blade (#1 - #12)` into the extrusion as shown, and slide it into the notch in the spool arm.
   ![Slot 1 positioned in the extrusion at the correct distance](img/IMG_0518.webp)
   ![Slot 1 positioned at the notch in the spool arm](img/IMG_0519.webp)

6. Tighten the 5x M5 screws in sequential order from left to right to secure `Feeder Slot Blade (#1 - #12)` in place.
   ![Tighten bolt 1](img/IMG_0520.webp)
   ![Tighten bolt 5](img/IMG_0521.webp)

6. Begin mounting `Feeder Slot Blade (#13 - #25)`, with the same orientation as the previous one.
    ![blade13-25 in hand](img/IMG_0522.webp)
    ![blade13-25 mounting start](img/IMG_0525.webp)

6. Gently press `Feeder Slot Blade (#13 - #25)` into the previous one while tightening to ensure there are no gaps between them.
    ![Alt text](img/IMG_0526.webp)
    ![Alt text](img/IMG_0527.webp)

7. `Feeder Slot Blade (#1 - #12)` and `Feeder Slot Blade (#13 - #25)` should now be firmly mounted to the front rail.
    ![front rail blades mounted](img/IMG_0528.webp)

### Back Feeder Rail

8. Next, you'll mount slots to the back rail. Near the back right leg, place the flat of the square end of the spool arm against the metal triangle bracket. Lay the flat back of the arm against the back rail extrusion as shown in the image.
   ![Spool Arm held in place against the back right leg](img/IMG_2057.webp)

9. As before, insert `Feeder Slot Blade (#26 - #37)` into the extrusion as shown, and slide it into the notch in the spool arm. Tighten the M5 screws to secure the slot blade.
   ![blade26-37 in hand](img/IMG_0529.webp)
   ![blade26-37 in position in the extrusion at the correct distance](img/IMG_0530.webp)
   ![blade26-37 fully tightend](img/IMG_0531.webp)

10. As you did for the front rail, next mount `Feeder Slot Blade (#38 - #50)`, while gently pushing it into the previous slot blade when tightening.
   ![Alt text](img/IMG_0532.webp)
   ![Alt text](img/IMG_0533.webp)
   ![Alt text](img/IMG_0535.webp)
   ![Alt text](img/IMG_0536.webp)

 11. `Feeder Slot Blade (#26 - #37)` and `Feeder Slot Blade (#38 - #50)` should now be firmly mounted to the rear rail.
   ![Alt text](img/IMG_0540.webp)

## Install the Harness

1. If you have a cover on your motherboard, remove it by unscrewing the two M3x30 socket head screws.
   ![Unscrewing the motherboard cover](img/IMG_0542.webp)
   ![Removing the cover](img/IMG_0545.webp)

2. Identify the feeder port on your motherboard. It's the 2x3 pin connector below the Y axis stepper driver.
  ![The Feeder Port](img/IMG_0546.webp)

3. Find the end of the cable harness with the `← TO MOBO` label. Plug this end into the feeder port on your motherboard. Flip the cable over so that it's leading off the left side of the motherboard.
   ![The motherboard side of the cable harness](img/IMG_0548.webp)
   ![Cable routed to the left of the motherboard](img/IMG_2090.webp)

4. Fit the cover back onto the motherboard by rotating it underneath the pneumatic tubing, and pressing down around the stepper driver pins and heatsinks. Remount using the original two M3x30mm screws.
   ![Reattaching the motherboard cover](img/IMG_0550.webp)
   ![Screwing in the motherboard cover](img/IMG_0551.webp)
   ![Screwing in the motherboard cover](img/IMG_0552.webp)

5. Using the cable clips, secure the cable to the bottom of the left rail as shown.
   ![Cable Clip](img/IMG_0559.webp)
   ![Cable clip routing the feeder cable](img/IMG_0560.webp)

6. Fold the cable over as shown, and secure it to the bottom of the front rail using two more cable clips.
   ![Routing the cable with a clip](img/IMG_0562.webp)
   ![Adding an additional clip](img/IMG_0563.webp)

7. Plug the cable into the exposed connector on the backside of `Feeder Slot Blade (#1 - #12)`.
    ![Alt text](img/IMG_0564.webp)

8. Collect one of the shorter cables from the cable bag and bend it into a "U" shape.
   ![Holding the cable between two connectors](img/IMG_0565.webp)
   ![Bending the cable between two connectors](img/IMG_0566.webp)

9. Use this cable to connect `Feeder Slot Blade (#1 - #12)` to `Feeder Slot Blade (#13 - #25)` as shown.
   ![connecting two slot blades](img/IMG_0567.webp)
   ![Plugging in more slots](img/IMG_0568.webp)
   ![All front slots connected](img/IMG_0569.webp)
   ![All front slots connected2](img/IMG_0570.webp)

10. Collect the longer cables from the cable bag for connecting `Feeder Slot Blade (#13 - #25)` to `Feeder Slot Blade (#26 - #37)`.
    ![Alt text](img/IMG_0571.webp)

11. Attach this cable to exposed connector on the right side of `Feeder Slot Blade (#13 - #25)`.
   ![Alt text](img/IMG_0572.webp)

12. Attach the cable to the bottom of the right side of the front rail using two cable clips.
   ![Adding a cable clip](img/IMG_0573.webp)
   ![Adding a second cable clip](img/IMG_0574.webp)

13. Fold the cable over, and secure the cable to the bottom of the right rail using three cable clips as shown.
   ![Folding the cable over with a clip](img/IMG_0575.webp)
   ![Adding the second cable clip](img/IMG_0576.webp)
   ![Adding the third cable clip](img/IMG_0577.webp)

14. Fold the cable over again and secure to the bottom of the right side of the back rail using two more cable clips.
   ![One cable clip on the bottom rail](img/IMG_0578.webp)
   ![Second cable clip on the bottom rail](img/IMG_0579.webp)

15. Plug the cable into the exposed connector on the right side of `Feeder Slot Blade (#26 - #37)`.
    ![Alt text](img/IMG_0580.webp)

16. Collect the last short cables from the cable bag and bend it into a "U" shape.
   ![Holding the cable between two connectors](img/IMG_0583.webp)
   ![Bending the cable between two connectors](img/IMG_0584.webp)

17. Use this cable to connect `Feeder Slot Blade (#26 - #37)` to `Feeder Slot Blade (#38 - #50)` as shown.
    ![Alt text](img/IMG_0585.webp)
    ![Alt text](img/IMG_0586.webp)

18. Take a minute to ensure that your wiring looks like the picture below.
   ![Final wiring for feeder slots](img/IMG_0590.webp)

19. Lower your LumenPnP back down onto its four legs.
   ![Lowering down the LumenPnP](img/IMG_0591.webp)
   ![The LumenPnP flat on the table](img/IMG_0592.webp)

## Next Steps

If you were directed to this page by LumenPnP wiring instructions return to one of the following pages to finish plugging everything in:

* [v3.0](/semi-assembly/wiring/#finalize-wiring)
* [v3.1 / V3.2](/semi-assembly-3-1/wiring-3-1/#finalize-wiring)

Otherwise, next is [updating your software.](/feeders/3-software-update)

[clip-url]: https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/FDM/extrusion-cable-clip.FCStd
[slot-url]: https://github.com/opulo-inc/feeder
