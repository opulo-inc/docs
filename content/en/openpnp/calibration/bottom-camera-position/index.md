---
title: "Bottom Camera Position"
linkTitle: "Bottom Camera Position"
weight: 70
type: docs
description: >
  Setting the position of your bottom camera
---

Now that we know the offset from the top camera to the nozzle, we can use the nozzle to set our bottom camera position.

{{< alert color="warning" title="Bottom Camera Z Position: v2 and v3 Differences" >}}
  When inspecting the tip of the nozzle and parts that have been picked up, OpenPnP uses a saved Z-height to bring the nozzle tip to so that it is in focus.

  If you're using only one nozzle, set the bottom camera Z Location to `61mm`. (Standard for v2 LumenPnP kits)
  If you're using two nozzles, set the bottom camera Z Location to `31.5mm`. (Standard for v3 semi-assembled LumenPnP kits)

  v2, LumenPnP kits only have one nozzle. The default Z-height is `61mm`. This is relatively high, and allows the bottom camera to see very large parts. But it is high enough that, if you have a second nozzle installed, the inactive nozzle can collide and cause damage.

  v3, semi-assembled LumenPnP machines come with two nozzles. To more safely accomadate this, the Z-height is only `31.5mm`, and the bottom camera is mounted deeper below the Staging Plate. This ensures we can see large parts while preventing collisions with a second nozzle.

  Make sure your bottom camera Z position is set correctly based on your machine type and number of nozzles.
{{< /alert >}}

1. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

3. Click on `Cameras > OpenPnpCaptureCamera Bottom`.
  {{< container-image path="images/select-bottom-camera-2.png" alt="Select the bottom camera" >}}

4. Click on the `Position` tab.
  {{< container-image path="images/bottom-camera-position.png" alt="Select the position tab" >}}

5. Set the camera's Z-axis location:
   1. If you have a v2 LumenPnP **kit** with only one nozzle, set the Z-axis value to `31.5mm`.
   2. If you have a v3 **semi-assembled** LumenPnP with two nozzles, set the Z-axis value to `61mm`.
  {{< container-image path="images/bottom-camera-z-pos.png" alt="Set the z position" >}}

6. Home your LumenPnP to make sure your toolhead's location is accurate. As before, ignore the `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold` error if it appears.
  {{< container-image path="images/home-during-bottom-cam-pos.png" alt="Home the machine" >}}

7. Jog the toolhead off to the side so that it isn't aligned with any calibration points. (This will make it easier to see if the nozzle is lined up with the bottom camera.)
  {{< container-image path="images/bottom-cam-jog-random.png" alt="Jog the toolhead" >}}

8. Select the `Nozzle: N1 - N045 (Head:H1)` from the machine controls dropdown.
  {{< container-image path="images/select-n1-machine-control-bottom.png" alt="Select nozzle from machine control dropdown" >}}

9. Click the "Position tool over location" button to bring the left nozzle very roughly above the bottom camera.
  {{< container-image path="images/position-over-bottom-cam.png" alt="Position the toolhead over the bottom camera" >}}

10. Jog the toolhead until the left nozzle is directly in the center of the bottom camera's vision.
  {{< container-image path="images/position-over-bottom-cam-precise.png" alt="Position the toolhead over the bottom camera precisely" >}}

11. If the tip of the nozzle isn't in focus, rotate the bottom camera lens to set it in focus. Re-center the nozzle in the camera view if necessary.
  {{< container-image path="images/focus-nozzle-from-bottom-cam.png" alt="Focus on the tip of the nozzle" >}}

12. Click the "Capture Toolhead Location" button to calculate the correct position for the bottom camera.
  {{< container-image path="images/store-nozzle-location-bottom.png" alt="Store the camera location" >}}

13. Click the `Apply` button to save the new camera position.
  {{< container-image path="images/apply-bottom-cam-pos.png" alt="Save the camera location" >}}

14. Try homing your machine again. If you get the `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold` error, you will need to tune your [Bottom Camera Vision Pipeline]({{< relref "vision-pipeline-adjustment#nozzles" >}})
  {{< container-image path="images/home-during-bottom-cam-pos.png" alt="Home the machine" >}}

## Next Steps

Next is [Backlash Calibration.]({{< relref "backlash-compensation" >}})
