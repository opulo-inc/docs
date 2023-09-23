# Mounting Feeders

A feeder can be mounted on your LumenPnP with one smooth motion.

![mounting feeder](img/mounting.gif){ loading=lazy }

## Installing Spool Arm

1. Grab a spool arm and thimble.
   ![spool arm and thimble](img/spool-parts.jpg){ loading=lazy }

2. Insert the V-shaped side of the thimble into the spool arm as shown, so that the thimble and the block feature on the other end of the arm are on the same side. Make sure that the flat side of the thimble is facing the rest of the arm when inserting.
   ![inserting thimble into spool arm](img/thimble-inserted.jpg){ loading=lazy }
   ![inserting thimble into spool arm](img/thimble-inserted-back.jpg){ loading=lazy }

3. Rotate the thimble 90 degrees so that the flat side is facing downwards, as shown below.
   ![rotating the thimble 90 degrees](img/thimble-rotate.jpg){ loading=lazy }
   ![rotating the thimble 90 degrees](img/thimble-rotate-back.jpg){ loading=lazy }

4. The spool arm should look like the image below.
   ![assembled spool arm](img/spool-assembled-1.jpg){ loading=lazy }
   ![assembled spool arm](img/spool-assembled-2.jpg){ loading=lazy }
   ![assembled spool arm](img/spool-assembled-3.jpg){ loading=lazy }

5. Use a 2.0mm hex wrench to unscrew the countersunk screw in the spool arm slot,
   ![Unscrewing the Spool Arm mount screw](img/IMG_2146.JPG){ loading=lazy }

6. Insert the spool arm upright, with the flat side of the arm facing the PCB.
   ![Inserting the Spool Arm](img/IMG_2147.JPG){ loading=lazy }

7. Replace the screw.
   ![Re-tightening the Spool Arm mount screw](img/IMG_2149.JPG){ loading=lazy }

## Insert Feeder

!!! note "Powder on the Rail"
    You might notice that a small amount of dust or powder develops on your machine's feeder rail. This is totally ok. The feeder prints are designed to be just a little undersized, so that they wear in to exactly the right fit over a few insertion cycles. Brush any powder away and continue use as normal.

    ![powder on the rail](img/powder-on-rail.jpg){ loading=lazy }

!!! note "A Bit of Force is OK"
      It can take a bit of force to mount your feeder, especially the first few times as the print breaks in. As long as you are aligned correctly, you can put a bit of force into mounting the feeder.

1. Hold your feeder at a 45 degree angle downwards.
   ![holding feeder at 45 degrees](img/IMG_2150.JPG){ loading=lazy }

2. Align the peg on the slot with the channel in the feeder.
   ![Channel in the feeder](img/alignment-slot.JPG){ loading=lazy }
   ![Slot in the aluminum extrusion](img/IMG_2175.JPG){ loading=lazy }
   ![Channel in the feeder aligned with aluminum extrusion](img/IMG_2156.JPG){ loading=lazy }

3. Ensure the that the feeder is hooked around the extrusion as shown in the image below.
   ![Hooking the feeder around the rear rail](img/IMG_2158.JPG){ loading=lazy }

4. Depress the locking arm.
   ![Depressing the locking arm](img/IMG_2159.JPG){ loading=lazy }

5. Pull down on the feeder until it pops into place.
   ![Dropping the Feeder into place](img/IMG_2161.JPG){ loading=lazy }

6. Release the lever arm. You may want to double-check that the spring finger contacts on the feeder are properly touching the metal pads on the slot until you get the hang of installing them.

!!! danger "Powering on the LumenPnP with feeders already mounted"
      In some circumstances, you might find that plugging in your LumenPnP with many feeders already mounted prevents the machine from booting. This is a known issue due to high inrush current, but there's a method to get a successful boot. Before powering on your machine, lift a few feeders up and away from the rail slightly, just so that they disconnect from power as shown in the image below. Then plug in your LumenPnP. If you get a successful boot, you can drop the feeders down onto the rail fully. If you don't, lift a few more feeders and repeat.

      ![Dropping the Feeder into place](img/lift2.jpg){ loading=lazy }

## Next Steps

Next, you'll [configure your attached feeders in OpenPnP.](../5-openpnp-setup/feeder-openpnp-setup.md)
