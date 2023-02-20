---
title: "MM/pixel Calibration"
linkTitle: "MM/Pixel Calibration"
weight: 50
type: docs
description: >
  Setting the millimeters per pixel value in OpenPnP
---

Nicely done so far! You've got your homing fiducial all set up. This next step calibrates the relationship between pixels and millimeters to make our cameras more accurate. You might have found that if you drag the reticle on the camera view around, the LumenPnP will move to the highlighted location. But you have probably also found that the movement is not very precise. We'll be fixing that in this calibration. See also our [setup video](https://youtube.com/watch?v=CSnczX6VJ7M&si=EnSIkaIECMiOmarE&t=1030).

## Top Camera Calibration

1. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

2. Click on the "Expand" checkbox to open all of the features about your machine.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

3. Click on `Heads > ReferenceHead H1`.
  ![Reviewing the ReferenceHead options](images/Select-Reference-Head-H1.png)

4. Click on the "Position Camera over location" icon button show below. This will move the top camera to where your datum board is mounted.
  ![Position top camera over homing fiducial](images/Position-camera-over-homing-fiducial.png)

5. Click on `Heads > ReferenceHeadH1 > Cameras > OpenPnPCaptureCamera Top`.
  ![Select the top camera](images/select-top-camera.png)

6. Go to the `General Configuration` tab.
  ![Go to the general configuration tab](images/general-configuration-tab.png)

7. Scroll down to `Units Per Pixel`.
  ![The top camera's units per pixel section](images/units-per-pixel-section.png)

8. Set the X and Y Object Dimensions to `5`.
  ![Set the object dimensions for automatic calibration](images/set-object-dimensions.png)

9. Jog the machine so that one of the golden guideline squares on the datum board are visible in the top camera's view. The whole square must be visible. Zoom out of the camera feed with the scroll wheel if necessary.
  ![The square guideline on the datum board](images/units-per-pixel-square-on-datum.png)

10. Then click the `Measure` button.
  ![Click the measure button](images/click-measure-button.png)

11. A box with drag handles will appear in the camera view. Drag the box so that it lines up with the lines on the datum board; they are exactly 5mm x 5mm. Make sure that you are aligning the bounding box with the **center** of the lines as shown in the image below.
  ![Drag the box to the center of the outline square on the datum board.](images/Screen Shot 2022-05-19 at 12.30.48 PM.png)

12. Once you have it perfectly outlined, click `Confirm`. The new calibration numbers will populate the Units per Pixel fields. They should be relatively close to the default values.
  ![Confirm the test](images/confirm-pixel-per-mm.png)

13. Click `Apply` to save the changes.
  ![Apply the new settings](images/apply-pixel-per-mm-settings.png)

14. To confirm, drag the reticle on the top camera view to move the machine. The camera center should move exactly where you tell it to. If it's inaccurate, try doing the calibration again or tweaking the values in the fields.

## Bottom Camera Calibration

1. Install an N24 nozzle on the left tool head.
  ![Install a N24 nozzle](images/n24-nozzle-attached.png)

2. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

3. Click on the "Expand" checkbox to open all of the features about your machine.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

4. Click on `Cameras > OpenPnPCaptureCamera Bottom`.
   ![Select the bottom camera](images/select-bottom-camera.png)

5. Go to the `Position` tab.
   ![Go to the Position tab](images/bottom-position-tab.png)

6. Click on the "Position nozzle over location" button
   ![Position nozzle over camera](images/position-nozzle-over-camera.png)

7. Use the jog controls to move the nozzle directly over the center of the bottom camera. Do not adjust the Z-axis.
   ![Jog the nozzle over the camera](images/jog-controls-bottom.png)
   ![Jog the nozzle over the camera](images/jogging-finished.png)

8. Twist the lens of the bottom camera until the tip of the nozzle is in focus.
   ![Jog the nozzle over the camera](images/in-focus-nozzle.png)

9. Go to the `General Configuration` tab.
   ![Go to the general configuration tab](images/general-configuration-bottom-tab.png)

10. Scroll down to `Units Per Pixel`.
   ![The bottom camera's units per pixel section](images/units-per-pixel-section-bottom.png)

11. Set the X and Y Object Dimensions to `4`.
  ![Set the object dimensions for calibration](images/set-object-dimensions-bottom.png)

12. Then click the `Measure` button.
  ![Click the measure button](images/click-measure-bottom.png)

13. A box with drag handles will appear in the camera viewfinder. Drag the bounding box around the nozzle tip so that it's perfectly tangent to the edges; they are exactly 4mm x 4mm.
  ![Drag the box to the edges of the nozzle.](images/measure-nozzle-mm-per-px.png)

14. Once you have it perfectly outlined, click `Confirm`. New numbers should populate the Units per Pixel fields. They should be relatively close to the default values.
  ![Confirm the test](images/confirm-pixel-per-mm-bottom.png)

15. Then click `Apply` to save the changes.
  ![Apply the new settings](images/apply-pixel-per-mm-settings-bottom.png)

16. To confirm, drag the reticle on the bottom camera view to move the machine. The **nozzle tip** should move exactly where you tell it to. If it's inaccurate, try doing the calibration again or tweaking the values in the fields.

## Next Steps

Next is [Nozzle Offset Calibration](../6-nozzle-offset/index.md).
