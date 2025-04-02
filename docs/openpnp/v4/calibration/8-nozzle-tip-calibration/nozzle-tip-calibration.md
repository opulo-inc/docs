# Nozzle Tip Runout Compensation ([Video Guide](https://youtu.be/h3mtEQfGMlM?si=FHauQ0aEZQaOBkxV&t=1661))

Nozzle Tip Runout Compensation measures how the nozzle tip's position shifts when the nozzle rotates. This shift is detected using the bottom camera. The compensation algorithm adjusts for any misalignment, ensuring more accurate placement. This process eliminates errors caused by runout, which can occur from either the nozzle tip or the nozzle itself. The calibration system automatically compensates for any combination of these factors. This section will be walking you through calibrating the `N045` and `N24` Nozzle Tips.<br/><br/>

**To better visualize what nozzle tip runout is and how the compensation helps, here is an example**:

* **Without** Compensation:<br/><br/>
     ![Without Runout Comp](images/without-runout-comp.gif)<br/><br/>
* **With** Compensation: <br/><br/>
     ![With Runout Comp](images/with-runout-comp.gif)

!!! note
    Runout can originate from either the nozzle tip or the nozzle it is attached to. The calibration system automatically handles both. 
<br/><br>

---

## Nozzle Tip Runout Compensation for Nozzle: N1 (left toolhead)

!!! note "🚨Important!🚨 Read this if you're continuing from the previous steps."  
    If you have just completed the previous steps, Nozzle: N1 should already be centered over the bottom camera. **Do not move it.** Skip to step 4 to continue.  

1. **Select Nozzle: N1**.
    * (If Nozzle: N1 is already centered over the bottom camera, please skip to step 4.)
    * From the `Machine Controls` dropdown, select `Nozzle: N1 - N045 (Head:H1)`.<br/><br/>
     ![](../7-bottom-camera-position/images/select-n1-machine-control-bottom.webp)
<br/><br/>

1. **Open the bottom Camera Settings**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom`.<br/><br/>
     ![Switching to the camera device settings](images/Bottom-camera-device-settings.webp)
<br/><br/>

1. **Position Nozzle: N1 over the Bottom Camera**.
    * Open the **"Position"** tab, then click the `Position the tool over the center of the location` button.
<br/><br/>

1. **Calibrate the N045 Nozzle Tip**.
    * Navigate to `Machine Setup > Nozzle Tips > N045 > Calibration`, and click the `Calibrate` button.<br/><br/>
     ![click the calibrate button for n045](images/n045-calibrate-button.webp)

    !!! warning
        If calibration fails with an error message stating, "...Too many vision misdetects...", click the Pipeline `Edit` button to [adjust the nozzle tip vision pipeline](../../vision-pipeline-adjustment/4-nozzle-calibration-pipeline.md)for Nozzle Tip N045, then retest.
         ![Cant't find nozzle tip](images/too-many-vision-redirects.webp)
         ![click pipeline edit button](images/n045-edit-pipeline.webp)
<br/><br/>

1. **Set Auto Recalibration**.
    * After successfully calibrating, Auto Recalibration should be set to `NozzleTipChange`. If it is set to `Manual`, change the Auto Recalibration setting from `Manual` to `NozzleTipChange`. This ensures that OpenPnP automatically recalibrates any loaded `N045` nozzle tips after homing or swapping tips.<br/><br/>
     ![setting nozzle tip recal from manual to nozzletipchange](images/n045-change-recal.webp)
<br/><br/>

1. **Confirm Final Exposure Settings for Nozzle: N1**.
    * If further exposure adjustments were necessary, update your saved exposure value for Nozzle: `N1` . You'll need it when restarting OpenPnP.
<br/><br/>

1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes.<br/><br/>
     ![apply](images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
     ![save configuration](images/save-config-small.webp)<br/><br/>

---

## Nozzle Tip Runout Compensation for Nozzle: N2 (right toolhead)

1. **Select Nozzle: N2**.
    * From the `Machine Controls` dropdown, select `Nozzle: N2 - N24 (Head:H2)`.<br/><br/>
     ![](../7-bottom-camera-position/images/select-n1-machine-control-bottom.webp)
<br/><br/>

1. **Open the bottom Camera Settings**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom`.<br/><br/>
     ![Switching to the camera device settings](images/Bottom-camera-device-settings.webp)
<br/><br/>

1. **Position Nozzle: N2 over the Bottom Camera**.
    * Open the **"Position"** tab, then click the `Position the tool over the center of the location` button.
<br/><br/>

1. **Confirm the Correct Exposure**.
    * The exposure settings from the first nozzle should be close to what Nozzle Tip `N24` requires. If minor adjustments are needed, they will be refined in the **vision pipeline** for Nozzle Tip `N24` in the next steps.

1. **Calibrate the N24 Nozzle Tip**.
    * Navigate to `Machine Setup > Nozzle Tips > N24 > Calibration`, and click the `Calibrate` button.<br/><br/>
     ![click the calibrate button for n045](images/n045-calibrate-button.webp)

    !!! warning
        If calibration fails with an error message stating, "...Too many vision misdetects...", click the Pipeline `Edit` button to [adjust the nozzle tip vision pipeline](../../vision-pipeline-adjustment/4-nozzle-calibration-pipeline.md)for Nozzle Tip N24, then retest.
         ![Cant't find nozzle tip](images/too-many-vision-redirects.webp)
         ![click pipeline edit button](images/n045-edit-pipeline.webp)
<br/><br/>

1. **Set Auto Recalibration**.
    * After successfully calibrating, Auto Recalibration should be set to `NozzleTipChange`. If it is set to `Manual`, change the Auto Recalibration setting from `Manual` to `NozzleTipChange`. This ensures that OpenPnP automatically recalibrates any loaded `N24` nozzle tips after homing or swapping tips.<br/><br/>
     ![setting nozzle tip recal from manual to nozzletipchange](images/n045-change-recal.webp)
<br/><br/>

1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes.<br/><br/>
     ![appy](images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](images/save-config-small.webp)<br/><br/>

---

## Final Check

!!! danger "🚨 Critical Warning: Level Nozzles 🚨"
    ⚠️ **You must ensure that your nozzles are level**.<br/><br/>
    **Failure to do this can cause crashes and potentially damage your machine.**<br/><br/>
    Use the `P` between the Z-axis up/down arrows to ensure the nozzle tips are out of the way. The `P` stands for **Parking** the nozzle out of the way into a safe height that won’t collide with any objects.<br/><br/>
      ![level nozzles](images/level-nozzles.webp)

1. **Retest the N045 Calibration**.
    * If you made any changes to the bottom camera exposure settings when calibrating Nozzle: `N2`, **retest the** `N045` **nozzle calibration** to ensure the settings are compatible and the calibration works with the new exposure.
<br/><br/>

1. **Home the LumenPnP**.
    * Level the nozzles to prevent collisions before homing.
    * Perform a homing of the LumenPnP to ensure that fiducial detection and nozzle tip calibration finish successfully for the `N1` and `N2` nozzles without errors.
<br/><br/>

1. **Record Final Exposure Settings for Nozzle: N2**.
    * Once you've finalized your exposure setting for the bottom camera, **record the exposure value. You'll need it when restarting OpenPnP**. We recommend saving these values to a text file and storing it somewhere convenient.
<br/><br/>

---

Next is configuring the [vacuum sensor](../10-vacuum-sensor/index.md).
