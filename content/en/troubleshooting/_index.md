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
    weight: 30
---

## Troubleshooting

### All your placements are offset in the same direction the same amount

- Crashing toolhead
- Toolhead offset is wrong
- Your board location is incorrect (unlikely)

### Inconsistent positioning going back and forth between your board, the homing fiducials, and the feeder

- Check for loose pulleys
- Check for backlash
- Check that your staging plate is tight

### Parts aren’t rotated correctly

- Check your vision pipeline
- Check that your nozzle attachment thingie is on tight
- Check that your nozzle is fully seated and lubricated

### Parts aren’t getting picked properly

- Check your feeder location
- Check your Z-axis offset for the feeder
- Check your toolhead offset
- Check for loose pulleys on the Y axis
- Check for backlash or add more compensation
- Check your vacuum pump and valve to make sure they’re working and engaging properly

### Parts aren’t sticking onto the FTP board

- Check your board Z-axis position
- Maybe replace your double-sided tape

### Parts are placed consistently from run to run, but some placements are better than others

- Check your board location and rotation
- You might need to manually define your board location and rotation with the pad identification tool
- You might need to adjust your vision pipeline for the board fiducials

### The top camera doesn’t position correctly over the homing fiducial (after your first setup)

- Check for loose pulleys
- Check for backlash
- Check for something obstructing your endstops or triggering them early
- Check that the staging plate is tight

### The toolhead doesn’t move as expected when you drag on the crosshair on the cameras

- Redo your mm to pixel calibration
- Check for loose pulleys
- Check for backlash
- Redo your fisheye calibration
