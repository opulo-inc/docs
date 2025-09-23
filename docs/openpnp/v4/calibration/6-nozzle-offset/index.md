# Top Camera to Nozzle Offset

![](../images/lumenpnp-v4-docs-logo-small.png)

Calibrating the nozzle offset ensures precise alignment between the nozzle tips and the top camera. This process involves capturing the exact position of the nozzle tip and aligning the top camera to the same reference point. The calibration is essential for accurate component placement and must be performed carefully.

This guide will calibrate both nozzles, ensuring they share the same focal plane as your datum board, components, and PCBs.

---

## Nozzle: N1 Offset (Left Toolhead)

For these steps, you should be in the `Machine Setup` tab.

!!! danger "🚨 Critical Warning: Level Nozzles 🚨"
    ⚠️ **You must ensure that your nozzles are level**.<br/><br/>
    **Failure to do this can cause crashes and potentially damage your machine.**<br/><br/>
    Use the `P` between the Z-axis up/down arrows to ensure the nozzle tips are out of the way. The `P` stands for **Parking** the nozzle out of the way into a safe height that won’t collide with any objects.<br/><br/>
      ![level nozzles](../2-connect-to-machine/images/level-nozzles-gif.gif)

1. **Select the correct nozzle to control**.
    * In the bottom left of OpenPnP, select `Nozzle: N1 - N045 (Head:H1)` from the **machine controls** dropdown. This ensures that movements and adjustments apply to the **left** nozzle equipped with the `N045` nozzle tip.<br/><br/>
     ![Select nozzle from machine control dropdown](images/01-seleect-nozzle-n1-from-machine-controls.webp)
<br/><br/>

1. **Confirm the correct nozzle tip is installed**.
    * Confirm that the `N045` nozzle tip is securely attached to **Nozzle: N1 (left toolhead)**.
<br/><br/>

1. **Open the Nozzle: N1 settings**.
    * Click through the following path: `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.<br/><br/>
     ![Open the Nozzle: N1 settings](images/02-reference-nozzle-n1-settings.webp)
<br/><br/>

1. **Open the Offset Wizard tab**.
    * Navigate to the `Offset Wizard` tab, where the nozzle offset calibration process will be performed.<br/><br/>
     ![Offset wizard settings](images/03-offset-wizard-tab.webp)
<br/><br/>

1. **Confirm the ‘Include Z?’ setting**.
    * Ensure that the `Include Z?` checkbox is checked. This ensures that the Z-height is properly factored into the calibration process.<br/><br/>
     ![include z checkbox](images/04-include-z.webp)
<br/><br/>

1. **Position Nozzle: N1 over the homing fiducial**.
    * Jog Nozzle: N1 (left toolhead) so that the **nozzle tip *barely* touches the datum board** and is perfectly centered over the homing fiducial. **Avoid collisions while jogging the nozzle tip**.<br/><br/>
    * Use the shiny edges of the fiducial that are visible around the nozzle tip to determine proper centering. Accuracy here is crucial to achieving precise placements, so please take your time with this and ensure it is dead center.<br/><br/>
     ![Nozzle touching the homing fiducial](images/05-nozzle-tip-n045-touching-homing-fid-center.webp)
<br/><br/>

1. **Capture Nozzle: N1’s position**.
    * Click the `Store nozzle mark position` button within the **Offset Wizard** tab to capture the Nozzle: N1's location for calibration purposes.
    * Do not navigate away from the **Offset Wizard tab** while you go through the following steps to capture the nozzle offset.<br/><br/>
     ![Store the nozzle's position](images/06-store-nozzle-mark-position-n1.webp)
<br/><br/>

1. **Raise Nozzle: N1 off the datum board**.
    * Click the letter `P` between the Z up/down arrows to “**Park**” the nozzle at a safe height. This prevents collisions when moving the top camera into position.<br/><br/>
     ![Level the nozzles](../2-connect-to-machine/images/level-nozzles-gif.gif)

    !!! Note
        The nozzles may not be level when clicking the “**Park**” button, which is okay. The nozzle only moves to the point that it reaches the “safe zone” and then stops.
<br/><br/>

1. **Align the top camera over the homing fiducial**.
    * Jog the **X** and **Y** axes to bring the top camera directly over the same homing fiducial used in the previous step so it is in the exact center of the camera feed. **Do not switch away from the Offset Wizard tab**. OpenPnP **will not save** your nozzle mark position.<br/><br/>
     ![bring the top camera over the homing fiducial](images/07-center-cam-over-homing-fid-to-capture-position.gif)
<br/><br/>

1.  **Calculate the nozzle offset**.
    * Once the homing fiducial is centered in the top camera view, click `Calculate nozzle offset`. This determines the offset distance between the nozzle and the top camera based on their recorded positions.<br/><br/>
     ![calculate the nozzle offset](images/08-calculate-nozzle-offest.webp)
<br/><br/>

1. **Apply and Save Nozzle offset**.
    * Click `Apply` in the lower right corner to store the calculated offset for the left N045 nozzle tip.<br/><br/>
      ![click the apply button](../2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../2-connect-to-machine/images/save-config.webp)<br/><br/>

---

## Validate Nozzle N1's Offset

Once you have completed the top camera to nozzle tip offset calibration for the first nozzle, you need to validate that the alignment is accurate before continuing to the second one. This ensures that both the camera and nozzle tips are correctly aligned with the homing fiducial before continuing with production.

**Before starting, ensure you have `Nozzle N1` selected in the `Control Center`.**

When speaking of **increasing** values, this is always meaning that we are adding positive value to the number. Meaning a negative (-) number would go closer to zero.
When speaking of **decreasing** values, this is always meaning that we are adding negative value to the number. Meaning a negative (-) number would go further away from zero.

1. **Confirm camera alignment**
    * Go to `Machine Setup > Heads > ReferenceHead H1 > Primary Fiducial`<br/><br>
      ![primary fiducial location](../6-nozzle-offset/images/primary-fid-location.webp)<br/><br>
    * Ensure the primary fiducials Z-height field is blank.
    * Click the button to bring the Top Camera to the Homing Fiducial.<br/><br>
      ![camera to primary fiducial location](../6-nozzle-offset/images/camera-to-homing-fid-button.webp)<br/><br>
    * Check the camera view: the homing fiducial should appear exactly centered.
    * ❌ If it is not centered, restart the camera-to-fiducial calibration.
    * ✅ Do not continue until the fiducial is showing accurately centered in the camera feed.
<br/><br>

1. **Check nozzle tip alignment**
    * Click the button to place the selected nozzle tip on the Homing Fiducial. It is directly beside the button used for the camera in step 1.<br/><br>
      ![nozzle to primary fiducial location](../6-nozzle-offset/images/nozzle-tip-to-homing-fid-button.webp)<br/><br>
    * The machine should move the nozzle tip to its calculated position.
    * Inspect the nozzle tip visually.
    * ✅ If the nozzle tip sits directly on the fiducial, no correction is needed. Proceed to calibrating Nozzle N2's offset.
    * ❌ If it is off, **note whether it is left, right, in front, or behind the homing fiducial**.
<br/><br>

1. **Correct nozzle offsets**
    * When the nozzle tip does not land perfectly on the fiducial, adjust its offset.
    * Go to `Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1` and locate the Offset values on that page.
    * Start with fine adjustments to the decimal values so you can dial in the offset gradually. This helps get an idea of how much you need to adjust to get it spot on. Example: If the nozzle tip is sitting to the right of the homing fiducial, change the fake x-value offset of -24.360 to be -24.330, which increases this value, so the nozzle will move to the left.<br/><br>
      ![offset adjustment area](../6-nozzle-offset/images/top-cam-nozzle-offset-adjust.webp)<br/><br>
    * Key points to remember:
      * Increasing a value will move Nozzle N1 left (X) or forward (Y)
      * Decrease a value will move Nozzle N1 right (X) or backward (Y)
    * Whether the value is positive or negative, you still “increase” or “decrease” to move in the correct direction.<br/><br>

1. **Visual aid**
    * Use the table below to decide which way to change the value.
    * Red arrows represent the direction the nozzle is from the fiducial.
    * Blue arrows represent the direction the nozzle will move when that given axis value is raised or lowered.<br/><br>
![nozzle offset visual assistance](images/nozzle-offset-visual-assist.webp)<br/><br>
<br/><br>

1. Once you've adjusted it to be accurate, Validate one last time before moving to the second nozzle.
    * Click the button to bring the Top Camera to the Homing Fiducial and confirm it is still accurate.<br/><br>
      ![camera to primary fiducial location](../6-nozzle-offset/images/camera-to-homing-fid-button.webp)<br/><br>
    * Click the button to place the selected nozzle tip to our newly adjusted position on the Homing Fiducial, and confirm it is still good.<br/><br>
      ![nozzle to primary fiducial location](../6-nozzle-offset/images/nozzle-tip-to-homing-fid-button.webp)<br/><br>
    * If both are accurate, proceed to next step.

2. **Apply and Save Adjusted Nozzle offset**.
    * Click `Apply` in the lower right corner to store the calculated offset for the left nozzle.<br/><br/>
      ![click the apply button](../2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../2-connect-to-machine/images/save-config.webp)<br/><br/>

---

## Nozzle: N2 Offset (Right Toolhead)

For these steps, you should already be in the `Machine Setup` tab.

!!! danger "🚨 Critical Warning: Level Nozzles 🚨"
    ⚠️ **You must ensure that your nozzles are level**.<br/><br/>
    **Failure to do this can cause crashes and potentially damage your machine.**<br/><br/>
    Use the `P` between the Z-axis up/down arrows to ensure the nozzle tips are out of the way. The `P` stands for **Parking** the nozzle out of the way into a safe height that won’t collide with any objects.<br/><br/>
      ![level nozzles](../2-connect-to-machine/images/level-nozzles-gif.gif)

1. **Confirm the correct nozzle is installed**.
    * Confirm that the `N24` nozzle tip is still securely attached to **Nozzle: N2 (right toolhead)**.<br/><br/>

1. **Select the correct nozzle to control**.
    * In the bottom left of OpenPnP, select `Nozzle: N2 - N24 (Head:H2)` from the **machine controls** dropdown. This ensures that movements and adjustments apply to the **right** nozzle equipped with the `N24` nozzle tip.<br/><br/>
     ![Select nozzle from machine control dropdown](images/09-select-nozzle-n2-offset.webp)
<br/><br/>

1. **Open the Nozzle: N2 settings**.
    * Click through the following path: `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2`.<br/><br/>
     ![Open the Nozzle N2 settings](images/10-nozzle-n2-settings.webp)
<br/><br/>

1. **Open the Offset Wizard tab**.
    * Navigate to the `Offset Wizard` tab if you are not already there.<br/><br/>
     ![Offset wizard settings](images/11-nozzle-n2-offset-wizard.webp)
<br/><br/>

1. **Confirm the ‘Include Z?’ setting**.
    * Ensure that the `Include Z?` checkbox is checked. This ensures that the Z-height is properly factored into the calibration process.<br/><br/>
     ![use the include z checkbox](images/12-include-z-for-nozzle-n2.webp)
<br/><br/>

1. **Position the nozzle over the homing fiducial**.
    * Jog Nozzle: N2 (right toolhead) so that it is perfectly centered over the homing fiducial, while *barely* touching the datum board. **Avoid collisions while jogging the nozzle tip**.<br><br/>
     ![Nozzle touching the homing fiducial](images/13-nozzle-n2-centered-and-touching-homing-fid.webp)<br><br/>
    * This nozzle tip is larger than the last one, which is okay. We will use the circle just outside of the homing fiducial to determine if you've centered it correctly. Please take your time with this and ensure it is dead center.
<br/><br/>

1. **Capture the Nozzle: N2’s position**.
    * Click the `Store nozzle mark position` button within the **Offset Wizard** tab to capture Nozzle: N2's location for calibration purposes.
    * Do not navigate away from the **Offset Wizard tab** while you go through the following steps to capture the nozzle offset.<br/><br/>
     ![Store Nozzle: N2's position](images/14-store-nozzle-n2-mark-position.webp)
<br/><br/>

1. **Raise Nozzle: N2 off the datum board**.
    * Click the letter `P` between the Z up/down arrows to “**Park**” the nozzle at a safe height. This prevents collisions when moving the top camera into position.<br/><br/>
     ![Level the nozzles](../2-connect-to-machine/images/level-nozzles-gif.gif)

    !!! Note
        The nozzles may not be level when clicking the “Park” button, which is okay. The nozzle only moves to the point that it reaches the “safe zone” and then stops.
<br/><br/>

1. **Align the top camera over the homing fiducial**.
    * Jog the top camera to be directly over the homing fiducial so it is in the exact center of the camera feed. **Do not switch away from the Offset Wizard tab**. OpenPnP **will not save** your nozzle mark position if so.<br/><br/>
     ![bring the top camera over the homing fiducial](images/15-center-top-cam-over-homing-fid-nozzle-n2.gif)
<br/><br/>

1.  **Calculate the nozzle offset**.
    * Once the homing fiducial is centered in the top camera view, click `Calculate nozzle offset`. This determines the offset distance between the nozzle and the top camera based on their recorded positions.<br/><br/>
     ![calculate the nozzle offset](images/16-calculate-nozzle-offset-button-nozzle-n2.webp)
<br/><br/>

1. **Apply and Save Nozzle offset**.
    * Click `Apply` in the lower right corner to store the calculated offset for the right N24 nozzle tip.<br/><br/>
     ![click the apply button](../2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../2-connect-to-machine/images/save-config.webp)<br/><br/>

---

## Validate Nozzle N2's Offset

Once you have completed the top camera to nozzle tip offset calibration for the second nozzle, you need to validate that the alignment is accurate before continuing to the next calibration steps. This ensures that both the camera and nozzle tips are correctly aligned with the homing fiducial before continuing with production.

**Before starting, ensure you have `Nozzle N2` selected in the `Control Center`.**

1. **Confirm camera alignment**
    * Go to `Machine Setup > Heads > ReferenceHead H1 > Primary Fiducial`<br/><br>
      ![primary fiducial location](../6-nozzle-offset/images/primary-fid-location.webp)<br/><br>
    * Ensure the primary fiducials Z-height field is blank.
    * Click the button to bring the Top Camera to the Homing Fiducial.<br/><br>
      ![camera to primary fiducial location](../6-nozzle-offset/images/camera-to-homing-fid-button.webp)<br/><br>
    * Check the camera view: the homing fiducial should appear exactly centered.
    * ❌ If it is not centered, restart the camera-to-fiducial calibration.
    * ✅ Do not continue until the fiducial is showing accurately centered in the camera feed.
<br/><br>

1. **Check nozzle tip alignment**
    * Click the button to place the selected nozzle tip on the Homing Fiducial. It is directly beside the button used for the camera in step 1.<br/><br>
      ![nozzle to primary fiducial location](../6-nozzle-offset/images/nozzle-tip-to-homing-fid-button.webp)<br/><br>
    * The machine should move the nozzle tip to its calculated position.
    * Inspect the nozzle tip visually.
    * ✅ If the nozzle tip sits directly on the fiducial, no correction is needed, and both your nozzle tips are validated. Proceed to the next section.
    * ❌ If it is off, **note whether it is left, right, in front, or behind the homing fiducial**.
<br/><br>

1. **Correct nozzle offsets**
    * When the nozzle tip does not land perfectly on the fiducial, adjust its offset.
    * Go to `Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2` and locate the Offset values on that page.
    * Start with fine adjustments to the decimal values so you can dial in the offset gradually. This helps get an idea of how much you need to adjust to get it spot on. Example: If the nozzle tip is sitting to the right of the homing fiducial, change the fake x-value offset of 23.350 to be 23.380, which increases this value, so the nozzle will move to the left.<br/><br>
      ![offset adjustment area](../6-nozzle-offset/images/top-cam-nozzle-offset-adjust-n2.webp)<br/><br>
    * Key points to remember:
      * Increasing a value will move Nozzle N2 left (X) or forward (Y)
      * Decrease a value will move Nozzle N2 right (X) or backward (Y)
    * Whether the value is positive or negative, you still “increase” or “decrease” to move in the correct direction.<br/><br>

1. **Visual aid**
    * Use the table below to decide which way to change the value.
    * Red arrows represent the direction the nozzle is from the fiducial.
    * Blue arrows represent the direction the nozzle will move when that given axis value is raised or lowered.<br/><br>
![nozzle offset visual assistance](images/nozzle-offset-visual-assist.webp)<br/><br>
<br/><br>

1. Once you've adjusted it to be accurate, Validate one last time before moving on.
    * Click the button to bring the Top Camera to the Homing Fiducial and confirm it is still accurate.<br/><br>
      ![camera to primary fiducial location](../6-nozzle-offset/images/camera-to-homing-fid-button.webp)<br/><br>
    * Click the button to place the selected nozzle tip to our newly adjusted position on the Homing Fiducial, and confirm it is still good.<br/><br>
      ![nozzle to primary fiducial location](../6-nozzle-offset/images/nozzle-tip-to-homing-fid-button.webp)<br/><br>
    * If both are accurate, proceed to next step.

1. **Apply and Save Adjusted Nozzle offset**.
    * Click `Apply` in the lower right corner to store the newly adjusted offset for the right nozzle.<br/><br/>
     ![click the apply button](../2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../2-connect-to-machine/images/save-config.webp)<br/><br/>
---

## Next Steps

Next is [Bottom Camera Position](../7-bottom-camera-position/index.md).