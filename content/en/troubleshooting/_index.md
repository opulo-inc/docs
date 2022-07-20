---
title: "Troubleshooting"
linkTitle: "Troubleshooting"
weight: 20
type: docs
resources:
- src: "**.png"
- src: "**.jpg"
menu:
  main:
    weight: 31
---
## Placement Errors

### Placements Offset in the Same Direction

- Crashed Toolhead
  - If the toolhead has crashed and one of the axis has skipped steps, it's likely there will be a placement offset. Try jogging to your homing fiducial and see if the camera is centered on it (Found under `Machine Setup -> Heads -> ReferenceHead H1` and clicking on the "Jog camera to position" button next to the Homing Fiducal coordinates). If not, it's likely that the machine has skipped steps. Rehome the machine to solve this issue.
- Incorrect Toolhead Offset
  - If the offset of the nozzle tip to the top camera is set incorrectly, the machine will place parts slightly offset from where they should be. Redo the [Nozzle Offset Calibration](https://docs.opulo.io/openpnp/calibration/nozzle-offset/) to solve this issue. You may also tweak the values manually in OpenPnP under `Machine Setup -> Heads -> ReferenceHead H1 -> Nozzles -> ReferenceNozzle N1 -> Offset Wizard -> Nozzle head offsets`.
- Bad Fiducial Scan
  - It's possible that when OpenPnP scans for the fiducials on your PCB, it actually found a bright section of silkscreen or another pad, and that shifted all the placements on your board. Rerun your fiducial scan and check to see if OpenPnP is correctly finding the fiducial. Instructions for tuning a vision pipeline for fiducials can be found [here](https://docs.opulo.io/openpnp/calibration/homing-fiducial/).

### Parts Rotated Incorrectly

- Bottom Vision Error
  - If the bottom vision pipeline for your part is not set up correctly, it might find the outline of the part to be larger, smaller, or offset from what it actually is, causing an incorrect placement. The [homing fiducial vision calibration](https://docs.opulo.io/openpnp/calibration/homing-fiducial/) is helpful for seeing how to tune a vision pipeline, but also check out OpenPnP's [bottom vision wiki page](https://github.com/openpnp/openpnp/wiki/Bottom-Vision) to help tune your pipeline. 
- Brass Nozzle Holder Loose
  - If not tightened into the motor properly, sometimes the brass nozzle holder can come loose and cause incorrect placements. Ensure that your nozzle holder is tightened into the hollow shaft stepper motor tightly.

### Inconsistent Positioning

- Loose Pulley
  - If the nozzle or camera is failing to repeatably move to the same position, it's likely that one of your timing pulleys is loose. Check the pulleys on your motors to see if the grub screws are securely tightened onto the motor spindle. 
- Belt Tension
  - If the nozzle or camera is failing to repeatably move to the same position, it's likely that one of your timing belts do not have sufficient tension. Check the belt tensioner arms on the X and both Y axis and ensure they're tight, and difficult to pull away from the machine any further.

### Parts Not Picking

- Incorrect Feeder Z Position
  - Picking can sometimes fail if the nozzle is either too far away from the part, or too close. Jog your nozzle tip about 1mm above a part in your feeder, and turn on the PV actuator to activate the vacuum. Now, slowly jog the Z axis down 0.1mm until you see the part jump onto the tip, and hear the pump strain against the vacuum. Jog one final 0.1mm down after this, and set your feeder Z position to your current Z position.
- Incorrect Toolhead Offset
  - If the toolhead is not moving to the same position as was set by the top camera for the feeder position, then the pick will fail. Make sure that the feeder position is set correctly, and that your nozzle tip to top camera offset is [calibrated correctly](https://docs.opulo.io/openpnp/calibration/nozzle-offset/).
- Paste In Nozzle Tip
  - Sometimes the nozzle tip may dip into a bit of solder paste on your PCB. This can cause a blockage and prevent a part from being picked correctly. If you're finding that parts refuse to stick to your nozzle, try checking the nozzle tip for a blockage and clear it out with some small gauge wire, or some pressurized air.
- Pick Dwell Time Too Short
  - If OpenPnP does not give the machine enough time to pull a proper vacuum and grab the part before moving the nozzle tip away from the pick location, the part can fail to pick. Try increasing the pick dwell time for the nozzle tip you're using under `Machine Setup -> Nozzle Tips -> ReferenceNozzleTip N__ -> Dwell Times -> Pick Dwell Time`

### Parts Not Placing

- Place Dwell Time Too Short
  - If OpenPnP does not give the machine enough time to release the vacuum and drop the part onto the board before moving the nozzle tip away from the place location, the part can fail to place. Try increasing the place dwell time for the nozzle tip you're using under `Machine Setup -> Nozzle Tips -> ReferenceNozzleTip N__ -> Dwell Times -> Place Dwell Time`
- Board Z Height Incorrect
  - If the Board Z Height is set too high, the nozzle will not press the part firmly into the solder paste which helps it stay in place. Try tuning your board's Z position by bring it down in 0.1mm increments and testing placements between each tweak to see if parts are being pushed into the paste more firmly.

## OpenPnP Issues

### Cameras Don't Connect
- USB Hub Overload
  - Some computers' internal USB controllers are unable to process a webcam feed from both webcams through the same USB port. If you are unable to get both webcams to appear in OpenPnP, try unplugging one from the motherboard and plugging it directly into your computer. For more information about this, check out the [camera testing section](https://docs.opulo.io/docs/testing/connect-computer/#cameras) of the assembly instructions.

### Z Axis Won't Jog
- Camera Drop-Down Selected
  - If you're finding that trying to manually jog the Z axis of your machine does not work, check the drop-down in the "Machine Controls" section of the UI underneath the cameras, and select the Nozzle instead of the Camera. This should allow you to jog your Z axis.
