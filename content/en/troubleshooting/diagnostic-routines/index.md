---
title: "Diagnostic Routines"
linkTitle: "Diagnostic Routines"
weight: 3
type: docs
description: >
  Diagnostic Routines
---

If you're having trouble picking and placing components but are having a hard time narrowing down the list of possibilities for what could be going wrong, this list of routines might help you find the culprit. The idea is to have you follow simple test steps to show the problem in limited situations so you have fewer possible root causes to check and solve.

## Motion System Check

The LumenPnP uses a lot of different offsets and calibrations for using its cameras to make precise movements. This test ignores those, and only tests the physical motion system of the machine.

1. Jog the machine until the top camera is positioned somewhere recognizable, such as over a feeder. This will be your starting point.
2. Next, pick another recognizable location as a target destination. For example, pick one of the component locations on your board.
3. Make sure that neither of the locations you picked require that you click a button in OpenPnP that uses the cameras to find fiducial markers. We want to avoid that during this test.
4. Move the machine back and forth between these two locations at least 5 times. Note which axes move: X, Y, and or Z.

If the machine correctly travels repeatably to these two locations each time, then your motion system is likely healthy. The test has succeeded.

If the machine does NOT correctly travel to these two locations repeatably, then something is wrong with your motion system. Check the following:

1. Check the X, Y, Z axis belt tension
2. Check the X, Y, Z axis motor pulleys to make sure they're not loose
3. Check the stepper motors to make sure they're not overheating
4. Check that the top camera isn't loose
5. Check that the staging plate isn't loose
6. Check that the tool head isn't crashing to reach one of the jog locations

## Toolhead offset check

Incorrect tool head offsets will cause pick and place operations to fail. This test tunes the tool head offset directly without any use of computer vision or the cameras themselves. It is recommended to run the Motion System Check first before this test to rule out motion system repeatability issues first.

1. Load one of your tray feeders
2. Position the camera over the feeder location
3. Switch to positioning the nozzle over the feeder location
4. Look at the nozzle and see if it's position is in line with what you saw on the camera feed in step 2
5. If not, adjust the toolhead offset by `0.05mm` at a time.
6. Repeat from step 2 until the nozzle location is consistent with what you could see from the camera.
