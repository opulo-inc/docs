---
title: "Homing Fiducial"
linkTitle: "Homing Fiducial"
weight: 20
type: docs
description: >
  Setting up the datum board and testing the homing fiducial
---

Now that fisheye calibration is complete, we can set up the datum board. The datum board is a reference point for everything else you'll do with the machine. The center dot of the datum board will be the most important calibration point for the machine. It'll be used to fine-tune the LumenPnP's XY position after homing to account for any errors in the limit switches.

{{< alert color="warning" title="If Your Machine Is v2" >}}
If you are setting up a `v2` machine, your datum board is not yet mounted to the Staging Plate.

Use four M3x16mm screws and four M3 nuts to secure the datum board and datum board mount to the staging plate on the rear of the bottom camera, through holes: B18, A19, A21, B22. The the fisheye calibration pattern should be facing down, and the gold grid of lines and fiducial in the center of the Opulo logo facing upwards. Tighten this down securely.
   {{< container-image path="images/Screen Shot 2022-01-11 at 12.51.47 PM.png" alt="the mounting location for the datum board and holder" >}}
{{< /alert >}}

1. In the "Machine Controls" pane in the lower left, connect to the LumenPnP by pressing the power button. (If you haven't already)
2. Run a rough home routine by pressing the Home button (shaped like a house). The machine will move to the X, Y, and Z zero positions. The default machine configuration files are set so that OpenPnP will *not* try to use the homing fiducial yet. Note that the home icon will turn yellow, as the LumenPnP has homed to it's end stops, but hasn't completed its full homing routine. You will may still get an error message about nozzle tip detection or homing fiducial errors. This is normal; ignore that for now.
   {{< container-image path="images/Connect-and-home.png" alt="Connect to the LumenPnP and attempt to home it" >}}

## Tuning the Homing Fiducial

3. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

5. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

6. Under `Heads`, click on `ReferenceHead H1`
  {{< container-image path="images/Select-reference-head-H1.png" alt="Reviewing the ReferenceHead options" >}}
  
7. In the bottom right details pane, change the `Homing Method` to `ResetToFiducialLocation`. This will set OpenPnP to use the top camera to look for the homing fiducial to more precisely home the XY gantry, instead of only using the limit switches.
   {{< container-image path="images/Select-ResetToFiducialLocation.png" alt="Switch to using the homing fiducial" >}}

8. Click `Apply` to save this change.
   {{< container-image path="images/Homing-fiducial-apply.png" alt="Save the homing technique" >}}

9. Click on the "Position Camera over location" icon button show below. This will move the top camera to approximately where your datum board is mounted.
   {{< container-image path="images/Position-camera-over-homing-fiducial.png" alt="Position top camera over homing fiducial" >}}

10. In the bottom left Machine Controls pane, Select the `Actuators` tab.
   {{< container-image path="images/Actuators-tab.png" alt="Switch to the Actuators Tab" >}}

11. Toggle on the LED ring lights by pressing the `LED` button.
   {{< container-image path="images/Turn-on-LEDs.png" alt="Turn on the LEDs" >}}

12. If the fiducial board is not in focus, rotate the Top Camera lens until the board is sharply in focus.
   {{< container-image path="images/In-focus-homing-fiducial.png" alt="Turn on the LEDs" >}}

{{< alert color="info" title="Tip" >}}
Right click on the camera feed to change the Reticle style to see the center of the camera image. You can also use the scroll wheel to zoom in on the feed for more precision.
{{< container-image path="images/Switch-reticle-type.png" alt="Change the reticle that appears on the camera feed" >}}
{{< /alert >}}

13. Go back to the `Jog` tab in the "Machine Controls" pane.
   {{< container-image path="images/Jog-tab.png" alt="Switch to the jog tab" >}}

14. Set the `Distance` slider to `0.1` for more precise movements.
   {{< container-image path="images/Distance-slider-0pt1.png" alt="Make the jog controls more precise" >}}

15. Manually jog the head so that the reticle in the center of the Top Camera feed in your top camera view is perfectly centered on the Homing Fiducial in the center of the Opulo logo.
   {{< container-image path="images/jog-controls.png" alt="use the jog controls to move the machine" >}}
   {{< container-image path="images/Homing-fiducial-centered.png" alt="Center the homing fiducial in the camera view" >}}

## Double-Check Camera Exposure

As before, we're going to double-check our camera exposure.

16. Navigate to the `Machine Setup` tab
  {{< container-image path="images/Machine-Setup-Tab-4.png" alt="Selecting the Machine setup tab from the main screen" >}}

17. Click the "Expand" checkbox if necessary
  {{< container-image path="images/Expand-Checkbox-4.png" alt="Expanding the Machine Config options" >}}

18. Navigate to `Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`
  {{< container-image path="images/Top-camera-settings-4.png" alt="Finding the Top Camera Settings" >}}

16. In the lower detail pane, switch to the `Device Settings` tab
  {{< container-image path="images/Top-camera-device-settings-4.png" alt="Switching to the camera device settings" >}}

{{< alert color="info" title="Tip" >}}
Right click on the camera feed to enable the image info card. This will give you the brightness histogram of the image. In the next step, you'll want to tune your exposure and other camera settings so the image isn't too bright or too dark. The histogram can help: make sure the graph isn't going all the way to the edges of the X-axis in the histogram, and that will make sure all of the image's details are available for the computer to use when it is looking for the homing fiducial.
{{< container-image path="images/show-image-info.png" alt="enable the image histogram" >}}
{{< container-image path="images/good-histogram.png" alt="a good histogram" >}}
{{< container-image path="images/bad-histogram.png" alt="a bad histogram" >}}
{{< /alert >}}

17. Adjust the exposure and other camera settings. The goal is to make the image clear and have a lot of contrast, without being too bright or too dark overall. In most cases you can simply check the `Auto` checkbox for `Exposure`, then uncheck it to save the automatically set value, and this does a good job of making the image look how you want. Note that this may not work in all situations, so you may need to manually adjust the image settings to get a clear image, where the Homing Fiducial is clearly distinguished against the background of the datum board.
  {{< container-image path="images/Auto-exposure-on.png" alt="Top camera properly exposed with the auto-exposure turned on" >}}

{{% alert color="danger" title="For Mac Users" %}}
Due to an issue with the camera driver in OpenPnP, some Mac users might notice that the image settings are greyed out for you. There's a fantastic open-source application called [CameraController](https://github.com/Itaybre/CameraController) that can be used to edit these settings!
{{% /alert %}}

## Apply Homing Fiducial Changes

18. Double-check that:
    1. The Homing Fiducial is in the center of the reticle in the camera feed
    2. The camera image is in sharp focus
    3. The camera image is properly exposed

19. Go back to Machine Setup and select `Heads > ReferenceHead H1`.
  {{< container-image path="images/Select-Reference-Head-H1-5.png" alt="Return to the homing fiducial location settings" >}}

20. Click on the "Capture Location" icon button to save the location where OpenPnP will start searching for the Homing Fiducial.
   {{< container-image path="images/Capture-homing-fiducial-location.png" alt="Capture the location of the homing fiducial" >}}

21. Click `Apply` to save your changes.
   {{< container-image path="images/Homing-fiducial-apply-2.png" alt="Save homing fiducial location" >}}

22. Click on the "Home" button in the `Machine Controls Pane > Jog Tab` and watch your machine home using the limit switches, then move the top camera over the homing fiducial and find its exact location. You may still get an error about `nozzle tip calibration`, which is normal. We'll be working on that next.

23. If your machine positions correctly over the homing fiducial but you receive the error: `FIDUCIAL-HOME no matches found.`, you should double-check your camera settings. If they seem alright, you may need to adjust your [vision pipeline]({{< relref "vision-pipeline-adjustment#top-camera-vision-pipeline" >}}).
