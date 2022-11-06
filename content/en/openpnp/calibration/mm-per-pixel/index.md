---
title: "MM/pixel Calibration"
linkTitle: "MM/Pixel Calibration"
weight: 50
type: docs
description: >
  Setting the millimeters per pixel value in OpenPnP
---

Nicely done so far! You've got your homing fiducial all set up. This next step calibrates the relationship between pixels and millimeters to make our cameras more accurate. You might have found that if you drag the reticle on the camera view around, the LumenPnP will move to the highlighted location. But you have probably also found that the movement is not very precise. We'll be fixing that in this calibration.

## Top Camera Calibration

1. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

3. Click on `Heads > ReferenceHead H1`.
  {{< container-image path="images/Select-reference-head-H1.png" alt="Reviewing the ReferenceHead options" >}}

4. Click on the "Position Camera over location" icon button show below. This will move the top camera to where your datum board is mounted.
   {{< container-image path="images/Position-camera-over-homing-fiducial.png" alt="Position top camera over homing fiducial" >}}

5. Click on `Heads > ReferenceHeadH1 > Cameras > OpenPnPCaptureCamera Top`.
   {{< container-image path="images/select-top-camera.png" alt="Select the top camera" >}}

6. Go to the `General Configuration` tab.
   {{< container-image path="images/general-configuration-tab.png" alt="Go to the general configuration tab" >}}

7. Scroll down to `Units Per Pixel`.
   {{< container-image path="images/units-per-pixel-section.png" alt="The top camera's units per pixel section" >}}

8. Set the X and Y Object Dimensions to `5`.
{{< container-image path="images/set-object-dimensions.png" alt="Set the object dimensions for automatic calibration" >}}

9. Jog the machine so that one of the golden guideline squares on the datum board are visible in the top camera's view. The whole square must be visible. Zoom out of the camera feed with the scroll wheel if necessary.
  {{< container-image path="images/units-per-pixel-square-on-datum.png" alt="The square guideline on the datum board" >}}

10. Then click the `Measure` button.
  {{< container-image path="images/click-measure-button.png" alt="Click the measure button" >}}

11. A box with drag handles will appear in the camera view. Drag the box so that it lines up with the lines on the datum board; they are exactly 5mm x 5mm. Make sure that you are aligning the bounding box with the **center** of the lines as shown in the image below.
  {{< container-image path="images/Screen Shot 2022-05-19 at 12.30.48 PM.png" alt="Drag the box to the center of the outline square on the datum board." >}}

12. Once you have it perfectly outlined, click `Confirm`. The new calibration numbers will populate the Units per Pixel fields. They should be relatively close to the default values.
  {{< container-image path="images/confirm-pixel-per-mm.png" alt="Confirm the test" >}}

13. Click `Apply` to save the changes.
  {{< container-image path="images/apply-pixel-per-mm-settings.png" alt="Apply the new settings" >}}

14. To confirm, drag the reticle on the top camera view to move the machine. The camera center should move exactly where you tell it to. If it's inaccurate, try doing the calibration again or tweaking the values in the fields.

## Bottom Camera Calibration

15. Install an N24 nozzle on the left tool head.
  {{< container-image path="images/n24-nozzle-attached.png" alt="Install a N24 nozzle" >}}

16. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

17. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

18. Click on `Cameras > OpenPnPCaptureCamera Bottom`.
   {{< container-image path="images/select-bottom-camera.png" alt="Select the bottom camera" >}}

19. Go to the `Position` tab.
   {{< container-image path="images/bottom-position-tab.png" alt="Go to the Position tab" >}}

20. Click on the "Position nozzle over location" button
   {{< container-image path="images/position-nozzle-over-camera.png" alt="Position nozzle over camera" >}}

21. Use the jog controls to move the nozzle directly over the center of the bottom camera. Do not adjust the Z-axis.
   {{< container-image path="images/jog-controls-bottom.png" alt="Jog the nozzle over the camera" >}}
   {{< container-image path="images/jogging-finished.png" alt="Jog the nozzle over the camera" >}}

22. Twist the lens of the bottom camera until the tip of the nozzle is in focus.
   {{< container-image path="images/in-focus-nozzle.png" alt="Jog the nozzle over the camera" >}}

23. Go to the `General Configuration` tab.
   {{< container-image path="images/general-configuration-bottom-tab.png" alt="Go to the general configuration tab" >}}

24. Scroll down to `Units Per Pixel`.
   {{< container-image path="images/units-per-pixel-section-bottom.png" alt="The bottom camera's units per pixel section" >}}

25. Set the X and Y Object Dimensions to `4`.
{{< container-image path="images/set-object-dimensions-bottom.png" alt="Set the object dimensions for calibration" >}}

26. Then click the `Measure` button.
  {{< container-image path="images/click-measure-bottom.png" alt="Click the measure button" >}}

27. A box with drag handles will appear in the camera viewfinder. Drag the bounding box around the nozzle tip so that it's perfectly tangent to the edges; they are exactly 4mm x 4mm.
  {{< container-image path="images/measure-nozzle-mm-per-px.png" alt="Drag the box to the edges of the nozzle." >}}

28. Once you have it perfectly outlined, click `Confirm`. New numbers should populate the Units per Pixel fields. They should be relatively close to the default values.
  {{< container-image path="images/confirm-pixel-per-mm-bottom.png" alt="Confirm the test" >}}

29. Then click `Apply` to save the changes.
  {{< container-image path="images/apply-pixel-per-mm-settings-bottom.png" alt="Apply the new settings" >}}

30. To confirm, drag the reticle on the bottom camera view to move the machine. The **nozzle tip** should move exactly where you tell it to. If it's inaccurate, try doing the calibration again or tweaking the values in the fields.

## Next Steps

Next is [Nozzle Offset Calibration.]({{< relref "nozzle-offset" >}}).
