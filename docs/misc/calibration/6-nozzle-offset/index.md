---
title: "Nozzle Offset Calibration"
linkTitle: "Nozzle Offset Calibration"
weight: 60
type: docs
description: >
  Calibrating the offset of the nozzle from the top camera
---

# Top Camera to Nozzle Offset

![](../img/lumenpnp-v3-docs-logo-small.png)

Calibrating the nozzle offset ensures precise alignment between the nozzle tips and the top camera. This process involves capturing the exact position of the nozzle tip and aligning the top camera to the same reference point. The calibration is essential for accurate component placement and must be performed carefully.

This guide will calibrate both nozzles, ensuring they share the same focal plane as your datum board, components, and PCBs.

---

## Nozzle: N1 Offset (Left Toolhead)

For these steps, you should be in the `Machine Setup` tab.

!!! danger "🚨 Critical Warning: Level Nozzles 🚨"
    ⚠️ **You must ensure that your nozzles are level**.<br/><br/>
    **Failure to do this can cause crashes and potentially damage your machine.**<br/><br/>
    Use the `P` between the Z-axis up/down arrows to ensure the nozzle tips are out of the way. The `P` stands for **Parking** the nozzle out of the way into a safe height that won’t collide with any objects.
      ![level nozzles](images/level-nozzles.webp)

1. **Select the correct nozzle to control**.
    * In the bottom left of OpenPnP, select `Nozzle: N1 - N045 (Head:H1)` from the **machine controls** dropdown. This ensures that movements and adjustments apply to the **left** nozzle equipped with the `N045` nozzle tip.<br/><br/>
     ![Select nozzle from machine control dropdown](images/select-n1-machine-control.webp)
<br/><br/>

1. **Confirm the correct nozzle tip is installed**.
    * Confirm that the `N045` nozzle tip is securely attached to **Nozzle: N1 (left toolhead)**.<br/><br/>
     ![Install the N045 nozzle tip](images/N045-nozzle-installed.webp)
<br/><br/>

1. **Open the Nozzle: N1 settings**.
    * Click through the following path: `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.<br/><br/>
     ![Open the Nozzle: N1 settings](images/select-nozzle-N1.webp)
<br/><br/>

1. **Open the Offset Wizard tab**.
    * Navigate to the `Offset Wizard` tab, where the nozzle offset calibration process will be performed.<br/><br/>
     ![Offset wizard settings](images/offset-wizard-n1.webp)
<br/><br/>

1. **Confirm the ‘Include Z?’ setting**.
    * Ensure that the `Include Z?` checkbox is checked. This ensures that the Z-height is properly factored into the calibration process.<br/><br/>
     ![do not use the include z checkbox](images/include-z-unchecked-n1.webp)
<br/><br/>

1. **Position Nozzle: N1 over the homing fiducial**.
    * Jog Nozzle: N1 (left toolhead) so that the **nozzle tip *barely* touches the datum board** and is perfectly centered over the golden homing fiducial. **Avoid collisions while jogging the nozzle tip**.<br/><br/>
     ![Jog controls](images/jog-controls-nozzle-offset.webp)<br/><br/>
    * Use the shiny edges of the fiducial that are visible around the nozzle tip to determine proper centering. Accuracy here is crucial to achieving precise placements, so please take your time with this and ensure it is dead center.<br/><br/>
     ![Nozzle almost touching homing fiducial](images/PXL_20220519_181926227.webp)
     ![Nozzle touching the homing fiducial](images/PXL_20220519_181952658.webp)
<br/><br/>

1. **Capture Nozzle: N1’s position**.
    * Click the `Store nozzle mark position` button within the **Offset Wizard** tab to capture the Nozzle: N1's location for calibration purposes.
    * Do not navigate away from the **Offset Wizard tab** while you go through the following steps to capture the nozzle offset.<br/><br/>
     ![Store the nozzle's position](images/store-nozzle-position.webp)
<br/><br/>

1. **Raise Nozzle: N1 off the datum board**.
    * Click the letter `P` between the Z up/down arrows to “**Park**” the nozzle at a safe height. This prevents collisions when moving the top camera into position.<br/><br/>
     ![raise the z-axis](images/z-axis-jog.webp)

    !!! Note
        The nozzles may not be level when clicking the “Park” button, which is okay. The nozzle only moves to the point that it reaches the “safe zone” and then stops.
<br/><br/>

1. **Align the top camera over the homing fiducial**.
    * Jog the **X** and **Y** axes to bring the top camera directly over the same homing fiducial used in the previous step so it is in the exact center of the camera feed. **Do not switch away from the Offset Wizard tab**. OpenPnP **will not save** your nozzle mark position.<br/><br/>
     ![bring the top camera over the homing fiducial](images/jog-xy-nozzle-offset.webp)
<br/><br/>

1.  **Calculate the nozzle offset**.
    * Once the homing fiducial is centered in the top camera view, click `Calculate nozzle offset`. This determines the offset distance between the nozzle and the top camera based on their recorded positions.<br/><br/>
     ![calculate the nozzle offset](images/calculate-nozzle-offset.webp)
<br/><br/>

1. **Apply and Save Nozzle offset**.
    * Click `Apply` in the lower right corner to store the calculated offset for the left N045 nozzle tip.<br/><br/>
      ![click the apply button](images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](images/save-config-small.webp)<br/><br/>

---

## Nozzle: N2 Offset (Right Toolhead)

For these steps, you should be in the `Machine Setup` tab.

!!! Note
    Use the `P` between the Z-axis up/down arrows to ensure the nozzle tips are out of the way. The `P` stands for **Parking** the nozzle out of the way into a safe height that won’t collide with any objects. If nothing happens after you click the `P` button, that means the nozzles are at a safe height already.

1. **Confirm the correct nozzle is installed**.
    * Confirm that the `N24` nozzle tip is securely attached to **Nozzle: N2 (right toolhead)**.<br/><br/>
     ![Install the N045 nozzle tip](images/N045-nozzle-installed.webp)
<br/><br/>

2. **Select the correct nozzle to control**.
    * In the bottom left of OpenPnP, select `Nozzle: N2 - N24 (Head:H2)` from the **machine controls** dropdown. This ensures that movements and adjustments apply to the **right** nozzle equipped with the `N24` nozzle tip.<br/><br/>
     ![Select nozzle from machine control dropdown](images/select-n1-machine-control.webp)
<br/><br/>

3. **Open the Nozzle: N2 settings**.
    * Click through the following path: `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2`.<br/><br/>
     ![Open the Nozzle N2 settings](images/select-nozzle-N1.webp)
<br/><br/>

4. **Open the Offset Wizard tab**.
    * Navigate to the `Offset Wizard` tab, where the nozzle offset calibration process will be performed.<br/><br/>
     ![Offset wizard settings](images/offset-wizard-n1.webp)
<br/><br/>

5. **Confirm the ‘Include Z?’ setting**.
    * Ensure that the `Include Z?` checkbox is checked. This ensures that the Z-height is properly factored into the calibration process.<br/><br/>
     ![do not use the include z checkbox](images/include-z-unchecked-n1.webp)
<br/><br/>

6. **Position the nozzle over the homing fiducial**.
    * Jog Nozzle: N2 (right toolhead) so that it *barely* touches the datum board and is perfectly centered over the golden homing fiducial. **Avoid collisions while jogging the nozzle tip**.<br/><br/>
     ![Jog controls](images/jog-controls-nozzle-offset.webp)<br/><br/>
    * This nozzle tip is larger than the last one, which is okay. We will use the circle just outside of the golden homing fiducial to determine if you've centered it correctly. Accuracy here is crucial to achieving precise placements, so please take your time with this and ensure it is dead center.<br/><br/>
     ![Nozzle almost touching homing fiducial](images/PXL_20220519_181926227.webp)
     ![Nozzle touching the homing fiducial](images/PXL_20220519_181952658.webp)
<br/><br/>

7. **Capture the Nozzle: N2’s position**.
    * Click the `Store nozzle mark position` button within the **Offset Wizard** tab to capture Nozzle: N2's location for calibration purposes.
    * Do not navigate away from the **Offset Wizard tab** while you go through the following steps to capture the nozzle offset.<br/><br/>
     ![Store Nozzle: N2's position](images/store-nozzle-position.webp)
<br/><br/>

8. **Raise Nozzle: N2 off the datum board**.
    * Click the letter `P` between the Z up/down arrows to “**Park**” the nozzle at a safe height. This prevents collisions when moving the top camera into position.<br/><br/>
     ![raise the z-axis](images/z-axis-jog.webp)

    !!! Note
        The nozzles may not be level when clicking the “Park” button, which is okay. The nozzle only moves to the point that it reaches the “safe zone” and then stops.
<br/><br/>

9. **Align the top camera over the homing fiducial**.
    * Jog the **X** and **Y** axes to bring the top camera directly over the same homing fiducial used in the previous step so it is in the exact center of the camera feed. **Do not switch away from the Offset Wizard tab**. OpenPnP **will not save** your nozzle mark position.<br/><br/>
     ![bring the top camera over the homing fiducial](images/jog-xy-nozzle-offset.webp)
<br/><br/>

10. **Calculate the nozzle offset**.
    * Once the homing fiducial is centered in the top camera view, click `Calculate nozzle offset`. This determines the offset distance between the nozzle and the top camera based on their recorded positions.<br/><br/>
     ![calculate the nozzle offset](images/calculate-nozzle-offset.webp)
<br/><br/>

11. **Apply and Save Nozzle offset**.
    * Click `Apply` in the lower right corner to store the calculated offset for the right N24 nozzle tip.<br/><br/>
     ![click the apply button](images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](images/save-config-small.webp)<br/><br/>

---

!!! note
    For more information about this step, you can read the OpenPnP docs about it [here](https://github.com/openpnp/openpnp/wiki/Setup-and-Calibration_Nozzle-Setup).

## Next Steps

Next is [Bottom Camera Position](../7-bottom-camera-position/index.md).

!!! info "Further Adjustment"
    If you find that your placement accuracy is slightly incorrect after performing this calibration, you can fine-tune your part placement by adjusting the X and Y offsets in the relevant nozzle settings, as shown below.
    ![nozzle offsets](images/manually-adjust-nozzle-offset.webp)