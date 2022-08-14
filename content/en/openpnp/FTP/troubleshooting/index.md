---
title: "Troubleshooting Placement Error"
linkTitle: "Troubleshooting Placement Error"
weight: 4
type: docs
description: >
  Troubleshooting Placement Error
---

There are several different sources of placement error in a pick and place system, and the LumenPnP is no different. Fortunately, most of these issues only need to be addressed once, and so once you've successfully placed components on your FTP, you'll have done the vast majority of the setup work needed to fine-tune your machine. After that, populating new PCBs on your LumenPnP will simply be a matter of setting up the board and feeder locations.

There's two ways to use this troubleshooting guide. Hopefully, you'll see a pattern to the placement errors on your machine. If that's the case, look at the list of Symptoms and narrow down the possible causes so that you only have to check some of the Solutions. If you'd prefer, however, you can also run through every Solution to double-check each possible source of error.

## Symptoms

### Components not picked properly from the feeder

1. Check your feeder location
2. Check your Z-axis offset for the feeder
3. Check your toolhead offset
4. Check for loose pulleys on the Y axis
5. Check for backlash or add more compensation
6. Check your vacuum pump and valve to make sure they’re working and engaging properly

### Components not recognized by bottom camera

### Components not rotated correctly on the board

1. Check your vision pipeline
2. Check that your nozzle holder is on tight
3. Check that your nozzle is fully seated and lubricated

### Components not sticking to FTP board

1. Check your board Z-axis position
2. Replace your double-sided tape

### Components are always placed with a consistent offset from where they should be

1. Check that your tool head isn't crashing into something. You can set soft limits in the `Machine Setup > Axes` menus.
2. Check your Toolhead offset
3. Your board location is incorrect

### Some placements are consistently better than others

If parts are placed consistently from run to run, but some placements are better than others, your board is probably slightly rotated and the rotation is not being properly accounted for in your board fiducial scans.

1. Re-run the board fiducials
2. Check various placement locations by moving the camera over them to make sure they're set correctly.
3. If the placement locations are NOT lining up with the reticle in the camera feed:
   1. Adjust your board fiducial pipeline,
   2. Or manually set your board's location and position with "set board location with multiple placements" icon button.
4. If the placement locations DO line up with the reticle in the camera feed:
   1. Check your nozzle offset
   2. Check your part identification vision pipeline
   3. (unlikely) Check for backlash and other mechanical issues with your motion system.

### Inconsistent tool head positioning moving between fixed locations

If you get inconsistent positioning going back and forth between your board, the homing fiducials, and the feeder:

1. Check for loose pulleys
2. Check for backlash
3. Check that your staging plate is tight

### Top Camera not positioning over homing fiducial

If the top camera doesn’t position correctly over the homing fiducial (after your first setup):

1. Check for loose pulleys
2. Check for backlash
3. Check for something obstructing your end stops or triggering them early
4. Check that the staging plate is tight

### Tool head doesn't move correctly when jogging from the camera feed

If the toolhead doesn’t move as expected when you drag on the crosshair on the cameras:

1. Redo your mm to pixel calibration
2. Check for loose pulleys
3. Check for backlash
4. Redo your fisheye calibration

### Camera positions over feeder but nozzle doesn't

This is an indicator that you need to fine-tune your nozzle offset

## Solutions

### Tool head moving out of bounds (Crashing)

When setting up the board on the staging plate, you should make sure that you’re not going outside the max placement bounds for your toolhead. Or set soft max and min settings so that your toolhead doesn’t crash. If it does crash, it’ll offset all the part placements after the crash.

### Tighten Pulleys

Check the pulleys attached to each motor for play. While the machine is powered and homed, try pushing or pulling on the X, Y, and Z axes. If the axis can be moved by hand back and forth without causing the motor to skip steps, then the pulley on that axis probably needs to be tightened down onto the motor shaft.

1. Power off the LumenPnP
2. Loosen the belt tension for the axis you're working on
3. Remove the motor from its mount
4. Check that the pulley is fully secured
5. Tighten the grub screws holding the pulley on the motor shaft
6. Reinstall the motor
7. Re-tighten the timing belt
8. Power on the LumenPnP
9. Home the machine
10. Make sure that the play in that axis is gone.

### Tighten Staging Plate

If your staging plate comes loose, all of your locations defined in OpenPnP will start to be incorrect. Your machine may fail to home because it won't be able to find the homing fiducial. And it'll have trouble consistently picking components from the feeder. And it will probably place components in the wrong place on the PCB.

1. Tighten all four screws holding the staging plate in place
2. Reset your homing fiducial location
3. Reset your feeder locations
4. Reset your board location

### Re-run calibration steps

1. Fish-eye calibration (almost no chance of needing to re-run)
2. Homing Fiducial calibration (uncommon to rerun)
3. Pixels-per-mm calibration (uncommon to rerun)
4. Backlash compensation (common to rerun)
5. Nozzle offset calibration (common to rerun)
6. Bottom Camera Position (uncommon to rerun)
7. Toolchanger calibration (common to rerun)

### Feeder location fine tuning

The steps for setting up your feeders should get you to the point where you can consistently tell your LumenPnP to move to the feeder location and have the camera position directly over the first component slot. You can incrementally adjust your feeder's Z coordinate by swapping between positioning the nozzle and camera over the feeder and slowly adjusting the Z-axis until it looks like the nozzle is positioned just right. Then, try picking a component and recycling it if it is picked correctly.

### Board location fine tuning

If you have significant trouble getting the fiducials on your board to work, you can also manually define the board's location with the button for "define board position by multiple placements." This will launch a wizard that can help you manually set the location and rotation of your board. The alternative is working to tune your vision pipeline so that it can more accurately detect the fiducials on the board and line everything up.