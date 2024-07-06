# Nozzle Tip Calibration ([Video Guide](https://youtu.be/h3mtEQfGMlM?si=FHauQ0aEZQaOBkxV&t=1661))

Nozzle tip calibration measures exactly how your nozzles rotate by measuring them with the bottom camera. This prevents placement error due to runout.

1. Select `Nozzle: N1` from the dropdown under `Machine Controls`.
   
    ![](../7-bottom-camera-position/images/select-n1-machine-control-bottom.png)

2. Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom`.
  
    ![Switching to the camera device settings](images/Bottom-camera-device-settings.png)

1. Go to the "Position" tab and click the "Move Nozzle to Position" button.

2. Switch to the `Device Settings` tab. Check, then uncheck the Exposure "Auto" checkbox to set the camera to manual exposure mode.
  
    ![Switching to the camera device settings](images/Bottom-camera-device-settings.png)

1. Adjust the bottom camera exposure. The bottom camera needs to be able to find the dark hole in the nozzle tip for calibration, but it can't be so bright that we have trouble differentiating between the tip and a part. Adjust the Exposure slider until the brightest parts of the image are at approximately half brightness. Use the images below as reference.
  
    ![exposure too high](images/bottom-exp-high.png)
  
    ![exposure too low](images/bottom-exp-low.png)
  
    ![exposure correct](images/bottom-exp-good.png)

    !!! warning "Other Camera Settings"
        We highly recommend not adjusting any of the other sliders for your camera's settings. Exposure is the only slider you should adjust from the default values the camera boots up with.

2. Navigate to `Machine Setup > Nozzle Tips > N045 > Calibration`, and click the `Calibrate` button.
  
    ![click the calibrate button for n045](images/n045-calibrate-button.png)

3. If calibration fails, click the Pipeline `Edit` button to [adjust the nozzle tip vision pipeline](../../vision-pipeline-adjustment/4-nozzle-calibration-pipeline.md), then retest.

    ![Cant't find nozzle tip](images/too-many-vision-redirects.png)

    ![click pipeline edit button](images/n045-edit-pipeline.png)

4. Once you've calibrated successfully, set `Auto Recalibration` from `Manual` to `NozzleTipChange`. This will cause OpenPnP to calibrate any loaded N045 nozzle tips after homing, or after swapping tips. Hit `Apply` to save your changes.

    ![setting nozzle tip recal from manual to nozzletipchange](images/n045-change-recal.png)

5. Repeat this section but instead using N2 and the N24 nozzle tip. If you need to change the exposure during this, be sure to test the N045 calibration again to make sure it works with the new exposure setting.

6. As a final check, home your LumenPnP again to ensure that homing fiducial detection and nozzle tip calibration finish successfully without errors.

7. After you've settled on an exposure setting, record the final exposure value for inputting when restarting OpenPnP as you did for the top camera.

Next is configuring the [vacuum sensor](../10-vacuum-sensor/index.md).
