# Global offset

![parts placed with a consistent global offset](img/global-offset.webp){: style="width:60%;margin-left:10%;"}

If parts are universally placed with an offset in the X and/or Y axis, there are a few potential root causes:

## Bottom camera position needs adjustment

If OpenPnP's understanding of where the bottom camera is located is incorrect, part placements can also be incorrect. Perform a [nozzle offset calibration](../calibration/6-nozzle-offset/index.md) on one nozzle, then immediately [set the bottom camera position](../calibration/7-bottom-camera-position/index.md) without rotating the nozzle.

## Fiducial calibration pipeline needs adjustment

If OpenPnP incorrectly detects your fiducials and instead thinks a silkscreen marking or footprint pad is the fiducial, all of the locations on your board will be shifted. [Make sure your fiducial pipeline is correctly identifying your PCB's fiducials.](../vision-pipeline-adjustment/3-pcb-fiducial-pipeline.md)

## Both nozzles need offset calibration adjustment

It's possible that both of your nozzle offsets need adjusting. [Make sure your nozzle offsets are correct.](../calibration/6-nozzle-offset/index.md)

## The LumenPnP skipped steps during motion

If the LumenPnP's stepper motors encounter too much resistance, they can "skip steps" and lose their position. The way to confirm that this has happened is by navigating to `Machine Setup -> Heads`, clicking on `ReferenceHead H1` clicking the "Move camera to position" button next to the Homing Fiducial coordinates. If the camera is not centered on the homing fiducial, your machine has likely skipped steps. This can happen for a number of reasons:

- The machine's gantries interfered with something in the pick area, or something in your workspace. Check to make sure the machine is free to move easily and no cables are getting caught or tangled.
- LumenPnP models from v3.1 onward come with linear rails. These rails require proper lubrication to operate correctly. Lubricate your rails with the included lubrication packet.
- If you've increased your machine's travel speed, it's possible this is the reason for skipped steps. If the motors aren't capable of moving the machine at the requested speed, they will skip steps. Try lowering the machine's travel speed by navigating to `Machine Setup -> Drivers -> GcodeDriver GcodeDriver -> Driver Settings` and lower the value in the `Max. Feed Rate [/min]` field.
