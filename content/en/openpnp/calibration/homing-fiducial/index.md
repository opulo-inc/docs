---
title: "Homing Fiducial"
linkTitle: "Homing Fiducial"
weight: 20
type: docs
description: >
  Mounting datum board and testing the homing fiducial
---

Now that we've done the fisheye calibration, we can mount the datum board to the staging plate. The datum board is a reference point for everything else you'll do with the machine. The center dot of the datum board will be the most important calibration point for the machine. It'll be used to fine-tune the LumenPnP's XY position after homing to account for any errors in the limit switches.

1. Use four M3x16mm screws and four M3 nuts to secure the datum board and datum board mount to the staging plate on the rear of the bottom camera, through holes: B18, A19, A21, B22. The the fisheye calibration pattern should be facing down, and the gold grid of lines and fiducial in the center of the Opulo logo facing upwards. Tighten this down securely.
   {{< container-image path="images/Screen Shot 2022-01-11 at 12.51.47 PM.png" alt="the mounting location for the datum board and holder" >}}

2. In the "Machine Controls" pane in the lower left, connect to the LumenPnP if you haven't already by pressing the power button.
3. Run a rough home routine by pressing the Home button (shaped like a house). The machine will move eto the X and Y axis limit switches. The default machine configuration files are set so that OpenPnP will *not* try to use the homing fiducial yet. Note that the home icon will turn yellow, as the LumenPnP has homed to it's end stops, but hasn't completed its full homing routine.
   {{< container-image path="images/Connect-and-home.png" alt="Connect to the LumenPnP and attempt to home it" >}}

## Tuning the Homing Fiducial

4. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/openPnP-shared/Machine-setup-tab.png" alt="Selecting the Machine setup tab from the main screen" >}}

5. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox.png" alt="Expanding the Machine Config options" >}}

6. Under `Heads`, click on `ReferenceHead H1`
  {{< container-image path="images/Select-reference-head-H1.png" alt="Reviewing the ReferenceHead options" >}}
  
7. In the bottom right details pane, you'll be looking at the `Configuration` Tab. Change the `Homing Method` to `ResetToFiducialLocation`. This will set OpenPnP to use the top camera to look for the homing fiducial to more precisely home the XY gantry, instead of only using the limit switches.
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
   {{< container-image path="images/Homing-fiducial-centered.png" alt="Center the homing fiducial in the camera view" >}}

## Check Camera Exposure

Double-check your camera's exposure. If it needs adjustment follow the steps in this section:

16. Navigate to the `Machine Setup` tab
  {{< container-image path="images/openPnP-shared/Machine-setup-tab.png" alt="Selecting the Machine setup tab from the main screen" >}}

17. Click the "Expand" checkbox if necessary
  {{< container-image path="images/Expand-Checkbox.png" alt="Expanding the Machine Config options" >}}

18. Navigate to `Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`
  {{< container-image path="images/Top-camera-settings.png" alt="Finding the Top Camera Settings" >}}

16. In the lower detail pane, switch to the `Device Settings` tab
  {{< container-image path="images/Top-camera-device-settings.png" alt="Switching to the camera device settings" >}}

17. Scroll down if necessary to the `Properties` list of adjustments for the camera image.
  {{< container-image path="images/Top-camera-properties.png" alt="Top camera properties" >}}

18. In most cases you can simply check the `Auto` checkbox for `Exposure`, then uncheck it to save the automatically set value. Note that this may not work in all situations, so you may need to manually adjust the image settings to get a clear image, where the Homing Fiducial is clearly distinguished against the background o the datum board.
  {{< container-image path="images/Auto-exposure-on.png" alt="Top camera properly exposed with the auto-exposure turned on" >}}

{{% alert color="danger" title="For Mac Users" %}}
Due to an issue with the camera driver in OpenPnP, some Mac users might notice that the image settings are greyed out for you. There's a fantastic open-source application called [CameraController](https://github.com/Itaybre/CameraController) that can be used to edit these settings!
{{% /alert %}}

## Apply Homing Fiducial Changes

19. Double-check that:
    1. The Homing Fiducial is in the center of the reticle in the camera feed
    2. The camera image is in sharp focus
    3. The camera image is properly exposed
20. Go back to Machine Setup and select `Heads > ReferenceHead H1`.
  {{< container-image path="images/Select-Reference-Head-H1.png" alt="Return to the homing fiducial location settings" >}}

21. Click on the "Capture Location" icon button to save the location where OpenPnP will start searching for the Homing Fiducial.
   {{< container-image path="images/Capture-homing-fiducial-location.png" alt="Capture the location of the homing fiducial" >}}

22. Click `Apply` to save your changes.
   {{< container-image path="images/Homing-fiducial-apply.png" alt="Save homing fiducial location" >}}

23. Click on the "Home" button in the `Machine Controls Pane > Jog Tab` and watch your machine home using the limit switches, then move the top camera over the homing fiducial and find its exact location.

## Troubleshooting: Vision Pipeline Adjustment

24. If you find that the machine is having a hard time finding the homing fiducial, you might need to edit the Vision Pipeline for it. You can do that by going to the `Machine Setup` tab, and selecting `Fiducial Locator` under `Vision`. Click the `Edit` button to adjust the computer vision settings.
{{< container-image path="images/Screen Shot 2022-05-18 at 2.22.00 PM.png" alt="" >}}

10. There is quite a bit to tuning a vision pipeline, and you should take a look at the [OpenPnP documentation](https://github.com/openpnp/openpnp/wiki/Bottom-Vision). But there are a few things you can pretty easily tweak to get up and running. First, let's check out what the vision pipeline *thinks* it's seeing. In the window that just popped up, click on the row with "DrawCircles" in the Stage column. The image will show you every circle detected from the pipeline, as shown below. If there is more than one, or if the one shown is not perfectly hugging the fiducial, there are tweaks to be made. The image below shows a correctly tuned pipeline, with a single circle encircling the fiducial.

{{< container-image path="images/Screen Shot 2022-05-18 at 2.41.29 PM.png" alt="" >}}

11. The first variable to address is the threshold value. To access these settings, click on the row with "Threshold" under the Stage column. If the threshold is too low, then we won't be isolating the area around the fiducial enough. A too low of a threshold value will look like the image below:

{{< container-image path="images/Screen Shot 2022-05-18 at 2.25.13 PM.png" alt="" >}}

Raise the value until the fiducial is a clean, solid circle, as shown below:

{{< container-image path="images/Screen Shot 2022-05-18 at 2.25.59 PM.png" alt="" >}}

11. Next, we can check and see how many circles the pipeline is finding. We want it to only be finding one, and have it hug the fiducial exactly. Click on the row with "DetectCirclesHough" in the Stage column. In the image below, you can see from the list in the bottom right that two circles have been detected. We can solve this by adjusting "param2" and bumping the value up. The lower the value, the more circles are detected. If the diameter of the circles detected is incorrect, adjust the maxDiameter and minDiameter settings.

{{< container-image path="images/Screen Shot 2022-05-18 at 2.26.48 PM.png" alt="" >}}

With a higher value in the "param2" field, we only detect a single circle.

{{< container-image path="images/Screen Shot 2022-05-18 at 2.27.08 PM.png" alt="" >}}

12. Lastly, you can confirm that the changes result in accurate fiducial detection. Once again click on the row with "DrawCircles" in the Stage column. The image will show you every circle detected from the pipeline. Confirm there is only one, and it is perfectly hugging the fiducial as shown below.

{{< container-image path="images/Screen Shot 2022-05-18 at 2.41.29 PM.png" alt="" >}}

13. Exit out of the pipeline editing UI, save your changes, and try to home again. With your vision pipeline tuned, the machine should find the homing fiducial on your machine and center the crosshairs of the top camera on it.

4. It is likely that the machine will move to the wrong place and not be able to identify the homing fiducial. If this happens, OpenPnP will give an error popup that says `FIDUCIAL-HOME no matches found`. This means we'll need to fine-tune the location that OpenPnP moves the LumenPnP to in order to find the homing fiducial. (this is normal). You'll also note that the home icon will turn yellow, as the LumenPnP has homed to it's end stops, but hasn't completed its full homing routine.
   {{< container-image path="images/Cant-find-homing-fiducial.png" alt="A first attempt at homing the LumenPnP" >}}

{{< alert color="info" title="Note" >}}
If you're lucky, your machine may succeed at finding the homing fiducial on the very first try. In that case, the homing procedure will continue, and will try to detect a nozzle on your toolhead. This will fail, and you will receive the error: `Nozzle tip calibration: too many vision misdetects. Check pipeline and threshold.` This is normal, and you can skip the rest of this page and go onto [MM/Pixel calibration]({{< relref "mm-per-pixel" >}}).
{{< /alert >}}
