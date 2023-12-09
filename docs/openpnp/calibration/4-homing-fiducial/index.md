# Homing Fiducial

Now we can set up the datum board. The datum board is a reference point for everything else you'll do with the machine. The center dot of the datum board will be the most important calibration point for the machine. It'll be used to fine-tune the LumenPnP's XY position after homing to account for any errors in the limit switches. See also our [setup video](https://youtube.com/watch?v=CSnczX6VJ7M&si=EnSIkaIECMiOmarE&t=705).

!!! danger "If Your Machine Is v2"
    If you are setting up a v2 LumenPnP kit, your datum board is not yet mounted to the Staging Plate.

    Use four M3x16mm screws and four M3 nuts to secure the datum board and datum board mount to the staging plate on the rear of the bottom camera, through holes: B18, A19, A21, B22. The the fisheye calibration pattern should be facing down, and the gold grid lines and fiducial in the center of the Opulo logo facing upwards. Tighten this down securely.
    ![the mounting location for the datum board and holder](images/Screen Shot 2022-01-11 at 12.51.47 PM.png)

1. In the "Machine Controls" pane in the lower left, connect to the LumenPnP by pressing the power button (if you haven't already).
  ![Connect to the LumenPnP](images/connect-to-machine-power-button.png)

2. Run a rough home routine by pressing the Home button (shaped like a house). The machine will move to the X, Y, and Z zero positions. Note that the home icon will turn yellow, as the LumenPnP has homed to it's end stops, but hasn't completed its full homing routine. You will may still get one of two error messages: `FIDUCIAL-HOME no matches found.` or `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold` This is normal; ignore the errors for now.
  ![Home the machine](images/Connect-and-home.png)

!!! danger "If your machine does not move fully to the front left"
    If your LumenPnP does not move all the way to the front left of the machine when you click the Home icon, it could mean that your sensorless homing values need to be adjusted. Instructions for tuning this setting are [here](https://youtu.be/CSnczX6VJ7M?si=w_B5Yie0wdoZVjiE&t=553).

    If you have a v3.1 machine, be sure to adjust the existing `M914` line under the `HOME_COMMAND` dropdown in the GCodeDriver, instead of adding the line in `CONNECT_COMMAND`

## Tuning the Homing Fiducial

1. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

2. Click on the "Expand" checkbox to open all of the features about your machine.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

3. Click on `Heads > ReferenceHead H1`.
  ![Reviewing the ReferenceHead options](images/Select-Reference-Head-H1.png)
  
4. In the bottom right details pane, change the `Homing Method` to `ResetToFiducialLocation`. This will set OpenPnP to use the top camera to look for the homing fiducial to more precisely home the XY gantry, instead of only using the limit switches.
  ![Switch to using the homing fiducial](images/Select-ResetToFiducialLocation.png)

5. Click `Apply` to save this change.
  ![Save the homing technique](images/Homing-fiducial-apply.png)

6. Click on the "Position Camera over location" icon button show below. This will move the top camera to approximately where your datum board is mounted.
  ![Position top camera over homing fiducial](images/Position-camera-over-homing-fiducial.png)

7. In the bottom left Machine Controls pane, Select the `Actuators` tab.
  ![Switch to the Actuators Tab](images/Actuators-tab.png)

8. Turn on the LED ring lights by pressing the `LED` button (if they're not already on).
  ![Turn on the LEDs](images/Turn-on-LEDs.png)

    !!! info "Tip"
        Right click on the camera feed to change the Reticle style to see the center of the camera image. You can also use the scroll wheel to zoom in on the feed for more precision.
        ![Change the reticle that appears on the camera feed](images/Switch-reticle-type.png)

9. Go back to the `Jog` tab in the "Machine Controls" pane.
  ![Switch to the jog tab](images/Jog-tab.png)

10. Set the `Distance` slider to `0.1` for more precise movements.
  ![Make the jog controls more precise](images/Distance-slider-0pt1.png)

11. Manually jog the head so that the reticle in the center of the Top Camera feed in your top camera view is perfectly centered on the Homing Fiducial in the center of the Opulo logo.
  ![use the jog controls to move the machine](images/jog-controls.png)
  ![Center the homing fiducial in the camera view](images/Homing-fiducial-centered.png)

## Fine-tune Camera Exposure

In order for OpenPnP to reliably detect the Lumen's homing fiducial, we'll need to set the exposure and camera settings for your top camera correctly. In some cases you can simply check the `Auto` checkbox for `Exposure`, then uncheck it to save the automatically set value. Make sure not to leave any of the settings with the `Auto` checkbox enabled, as that will lead to inconsistent vision results.

See also our [setup video](https://youtube.com/watch?v=CSnczX6VJ7M&si=EnSIkaIECMiOmarE&t=867) if you prefer.

1. Navigate to the `Machine Setup` tab.
  ![Machine Setup Tab](images/Machine-Setup-Tab-4.png)

2. Click the "Expand" checkbox if necessary.
  ![Expanding the Machine Config options](images/Expand-Checkbox-4.png)

3. Navigate to `Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`.
  ![Finding the Top Camera Settings](images/Top-camera-settings-4.png)

4. In the lower detail pane, switch to the `Device Settings` tab.
  ![Switching to the camera device settings](images/Top-camera-device-settings-4.png)

5. Right click on the camera feed to enable the image info card. This will give you the brightness histogram of the image. In the next step, you'll want to tune your exposure and other camera settings so the image isn't too bright or too dark. The histogram can help: make sure the graph isn't going all the way to the edges of the X axis in the histogram, and that will make sure all of the image's details are available for the computer to use when it is looking for the homing fiducial.
  ![enable the image histogram](images/show-image-info.png)
  ![a good histogram](images/good-histogram.png)
  ![a bad histogram](images/bad-histogram.png)

1. Adjust the exposure until your histogram has cleanly defined peaks for the bright parts and dark parts of the homing fiducial image. The goal is to make the image clear and have a lot of contrast, so that it's easy to isolate the light areas in our vision pipeline later.
  ![Top camera properly exposed with the auto-exposure turned on](images/Auto-exposure-on.png)

## Apply Homing Fiducial Changes

1. Double-check that:
    * The Homing Fiducial is in the center of the reticle in the camera feed.
    * The camera image is in sharp focus.
    * The camera image is properly exposed.

    !!! info "Tip"
        If you're having trouble adjusting the focus, try using the community-created [lens adjustment tool](https://www.printables.com/model/208453-lumen-pnp-lens-adjustment-tool). You may also need to loosen the set screw on the side of the camera.

2. Go back to Machine Setup and select `Heads > ReferenceHead H1`.
  ![Return to the homing fiducial location settings](images/Select-Reference-Head-H1-5.png)

3. Click on the "Capture Location" icon button to save the location where OpenPnP will start searching for the Homing Fiducial.
  ![Capture the location of the homing fiducial](images/Capture-homing-fiducial-location.png)

4. Click `Apply` to save your changes.
  ![Save homing fiducial location](images/Homing-fiducial-apply-2.png)

5. Click on the "Home" button in the `Machine Controls Pane > Jog Tab` and watch your machine home using the limit switches, then move the top camera over the homing fiducial and find its exact location.
  ![Home the machine](images/Connect-and-home.png)

6. If you receive the error: `FIDUCIAL-HOME no matches found.`, OpenPnP was not able to identify your homing fiducial. You'll need to double-check your [exposure settings](#fine-tune-camera-exposure), and then you may need to adjust your [Homing Fiducial Pipeline](../../../openpnp/vision-pipeline-adjustment/2-homing-fiducial-pipeline.md).
  ![A first attempt at homing the LumenPnP](images/Cant-find-homing-fiducial.png)

7. Ignore the error for: `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold`. We'll tune those settings next. For now, your homing was successful.
  ![Nozzle Calibration Error](images/too-many-vision-redirects.png)

## Next Steps

Next is the [MM/Pixel Calibration.](../5-mm-per-pixel/index.md)
