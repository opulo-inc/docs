---
title: "Camera Fisheye Calibration"
linkTitle: "Camera Fisheye Calibration"
weight: 10
type: docs
description: >
  Applying fisheye calibration to the cameras
---

Now we're connected to the LumenPnP, we need to set up the cameras so that they can accurately fine tune the machine's position. The LumenPnP is a robust machine, but it needs both cameras to make sure it can pick and place components reliably every time. Note that these are very important calibration steps, but OpenPnP makes them relatively easy. Certain steps will probably need you to tune them more than once to get them perfect, others should stay mostly constant.

The first step, is to correct for the fisheye effect of our webcams to help make sure they can identify distances accurately. This is not a step you will need to re-run unless you were to replace your webcams. [Original OpenPnP documentation for reference.](https://github.com/openpnp/openpnp/wiki/Camera-Lens-Calibration).

## Bottom Camera Calibration

1. Click on the `Machine Setup` tab.
  {{< container-image path="images/openPnP-shared/Machine-setup-tab.png" alt="Selecting the Machine setup tab from the main screen" >}}

3. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox.png" alt="Expanding the Machine Config options" >}}

4. Under `Cameras` click on `OpenPnpCaptureCamera Bottom`
  {{< container-image path="images/Bottom Camera Config.png" alt="Finding the Bottom Camera Settings" >}}

5. In the lower detail pane, switch to the `Lens Calibration` tab
  {{< container-image path="images/Bottom-camera-lens-calibration-tab.png" alt="Switching to the lens calibration tab" >}}

6. If necessary, use the Jog commands to move the XY gantry out of the way so you have room above the bottom camera.

{{< alert color="info" title="Tip" >}}
To see both camera views at the same time, click on the dropdown in the top left of the UI and select "Show All Horizontal".
{{< /alert >}}

7. Click `Start Lens Calibration`.
  {{< container-image path="images/Bottom-camera-click-lens-calibration.png" alt="Starting bottom camera lens calibration" >}}

8. OpenPnP is now looking for the pattern of dots printed on the underside of the datum board. (Depending on how they're displaced in the image, OpenPnP will correct for lens distortion while the LumenPnP is running.)

9. Hold your datum board under the top camera as shown below. Check the camera view in OpenPnP to move the pattern into focus.If the focal distance is too close such that you can't get the whole pattern in focus and in the field of view, screw in the lens a few turns and test again. If you're having trouble adjusting the focus, try using the community-created [lens adjustment tool](https://www.printables.com/model/208453-lumen-pnp-lens-adjustment-tool).

10. OpenPnP will flash when it takes an image of the pattern, and will require you to take a few for an accurate calibration. Slowly move the calibration pattern around the camera's field of view until OpenPnP tells you that it's gathered enough photos.

{{< container-image path="images/PXL_20220519_165145418.jpg" alt="" >}}
{{< container-image path="images/Screen Shot 2022-05-19 at 12.53.30 PM.png" alt="" >}}

{{< alert color="info" title="Tip" >}}
If you're having a hard time getting the camera to pick up on the pattern on the datum board, you can always print out the original calibration pattern recommended by OpenPnP, which you can find [here](https://nerian.com/support/calibration-patterns/). Be sure to download the "Circle Grid Camera Calibration Patterns" image.
{{< /alert >}}

11. Confirm that the `Apply Calibration?` checkbox is enabled checked after calibration is complete.
  {{< container-image path="images/Screen Shot 2022-05-19 at 12.49.28 PM.png" alt="" >}}

## Top Camera Calibration

13. Again, navigate to the `Machine Setup` tab
14. Again, click the "Expand" checkbox if necessary
15. Navigate to `Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`
  {{< container-image path="images/Top-camera-settings.png" alt="Finding the Top Camera Settings" >}}

16. Continue with the same steps starting from number 5 above.
