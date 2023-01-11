# Solutions

## Crashed Toolhead

If the toolhead has crashed and one of the axis has skipped steps, it's likely there will be a placement offset. Try jogging to your homing fiducial and see if the camera is centered on it (Found under `Machine Setup -> Heads -> ReferenceHead H1` and clicking on the "Jog camera to position" button next to the Homing Fiducal coordinates). If not, it's likely that the machine has skipped steps. Rehome the machine to solve this issue. You can set soft limits in the `Machine Setup > Axes` menus.

## Incorrect Toolhead Offset

If the offset of the nozzle tip to the top camera is set incorrectly, the machine will place parts slightly offset from where they should be and may not pick them up correctly. Redo the [Nozzle Offset Calibration](../../../openpnp/calibration/nozzle-offset/index.md) to solve this issue. You may also tweak the values manually in OpenPnP under `Machine Setup -> Heads -> ReferenceHead H1 -> Nozzles -> ReferenceNozzle N1 -> Offset Wizard -> Nozzle head offsets`.

## Bad Fiducial Scan

It's possible that when OpenPnP scans for the fiducials on your PCB, it actually found a bright section of silkscreen or another pad, and that shifted all the placements on your board. Rerun your fiducial scan and check to see if OpenPnP is correctly finding the fiducial. Instructions for tuning a vision pipeline for fiducials can be found [here](../vision-pipeline-adjustment/index.md).

## Incorrect Feeder Z Position

Picking can sometimes fail if the nozzle is either too far away from the part, or too close. Jog your nozzle tip about 1mm above a part in your feeder, and turn on the PV actuator to activate the vacuum. Now, slowly jog the Z axis down 0.1mm until you see the part jump onto the tip, and hear the pump strain against the vacuum. Jog one final 0.1mm down after this, and set your feeder Z position to your current Z position.

## Paste Inside Nozzle Tip

Sometimes the nozzle tip may dip into a bit of solder paste on your PCB. This can cause a blockage and prevent a part from being picked correctly. If you're finding that parts refuse to stick to your nozzle, try checking the nozzle tip for a blockage and clear it out with some small gauge wire, or some pressurized air.

## Pick Dwell Time Too Short

If OpenPnP does not give the machine enough time to pull a proper vacuum and grab the part before moving the nozzle tip away from the pick location, the part can fail to pick. Try increasing the pick dwell time for the nozzle tip you're using under `Machine Setup -> Nozzle Tips -> ReferenceNozzleTip N__ -> Dwell Times -> Pick Dwell Time`

## Place Dwell Time Too Short

If OpenPnP does not give the machine enough time to release the vacuum and drop the part onto the board before moving the nozzle tip away from the place location, the part can fail to place. Try increasing the place dwell time for the nozzle tip you're using under `Machine Setup -> Nozzle Tips -> ReferenceNozzleTip N__ -> Dwell Times -> Place Dwell Time`

## Board Z Height Incorrect

If the Board Z Height is set too high, the nozzle will not press the part firmly into the solder paste which helps it stay in place. Try tuning your board's Z position by bring it down in 0.1mm increments and testing placements between each tweak to see if parts are being pushed into the paste more firmly.

## Brass Nozzle Holder Loose

If not tightened into the motor properly, sometimes the brass nozzle holder can come loose and cause incorrect placements. Ensure that your nozzle holder is tightened into the hollow shaft stepper motor tightly.

## Loose Pulley

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

## Belt Tension

If the nozzle or camera is failing to repeatably move to the same position, it's likely that one of your timing belts do not have sufficient tension. Check the belt tensioner arms on the X and both Y axis and ensure they're tight, and difficult to pull away from the machine any further.

## USB Hub Overload

Some computers' internal USB controllers are unable to process a webcam feed from both webcams through the same USB port. If you are unable to get both webcams to appear in OpenPnP, try unplugging one from the motherboard and plugging it directly into your computer. For more information about this, check out the [camera testing section](../../../openpnp/calibration/connect-to-machine/index.md) of the assembly instructions.

## Camera Drop-Down Selected

If you're finding that trying to manually jog the Z axis of your machine does not work, check the drop-down in the "Machine Controls" section of the UI underneath the cameras, and select the Nozzle instead of the Camera. This should allow you to jog your Z axis.

## Bottom Vision Error

See [bottom vision pipeline adjustment.](../vision-pipeline-adjustment/index.md)

## Check Vacuum Pump

1. Press down on the quick connect coupler P
2. Pull out the plastic tubing from your tool head.
3. Turn on the vacuum pump
4. Turn on the valve
5. Put your finger over the end of the tubing
6. If you can't feel suction:
   1. You may have a leak in the tubing
   2. You may have wired your pump or valve incorrectly
   3. Your valve or pump may be damaged, check the noises they make

## Check Board Rotation

1. Re-run the board fiducials
2. Check various placement locations by moving the camera over them to make sure they're set correctly.
3. If the placement locations are NOT lining up with the reticle in the camera feed:
   1. Adjust your board fiducial pipeline,
   2. Or manually set your board's location and position with "set board location with multiple placements" icon button.
4. If the placement locations DO line up with the reticle in the camera feed:
   1. Check your nozzle offset
   2. Check your part identification vision pipeline
   3. (unlikely) Check for backlash and other mechanical issues with your motion system.

## Check Endstops

Check for something obstructing your end stops or triggering them early

## Check Staging Plate

If your staging plate comes loose, all of your locations defined in OpenPnP will start to be incorrect. Your machine may fail to home because it won't be able to find the homing fiducial. And it'll have trouble consistently picking components from the feeder. And it will probably place components in the wrong place on the PCB.

1. Tighten all four screws holding the staging plate in place
2. Reset your homing fiducial location
3. Reset your feeder locations
4. Reset your board location

## Check mm to Pixel Calibration

Redo the steps in [mm/pixel Calibration](../../../openpnp/calibration/mm-per-pixel/index.md)

## Check fisheye calibration

Redo the steps in [Camera Fisheye Calibration](../../../openpnp/calibration/camera-fisheye-cal/index.md)

## Check Board Location

Go to the list of placements and position the top camera over a few of them. If they're all offset a little bit, your board location is probably incorrect. Redo [Finding the FTP Board Location](../../../openpnp/ftp/setting-up-the-board/index.md#finding-the-ftp-location).
