# MM/Pixel Calibration

This next step calibrates the relationship between pixels and millimeters to make our cameras more accurate.

## Top Camera Calibration

In this step, we will calibrate the mm/pixels for the **Top Camera**. This requires us to set the dimensions and use a virtual bounding box to outline and measure one of the squares on the datum board, known as a golden guideline square. This allows us to calibrate the **top camera’s Units per pixel**, giving us accurate top camera movement.
<br/><br/>

1. **Select the Top Camera**.
    * Confirm that your `Top Camera` is still centered on your `Homing Fiducial`
    * Navigate to `Machine Setup > Heads > ReferenceHeadH1 > Cameras > OpenPnPCaptureCamera Top`.<br/><br/>
     ![Navigate to you Top Camera Settigns](images/01-select-openpnpcapturecamera-top.webp)
<br/><br/>

1. **Click on the `General Configuration` tab**.<br/><br/>
     ![Go to the general configuration tab](images/02-top-camera-general-config.webp)
<br/><br/>

1. **Scroll down to the** `Units Per Pixel` **section**.
    * Locate the Object Dimension Fields for **X** and **Y**.<br/><br/>
     ![The top camera's units per pixel section](images/03-units-per-pixel-pane.webp)
<br/><br/>

1. **Set the Object Dimensions**.
    * In the **X** Object Dimension field, enter `5`.
    * In the **Y** Object Dimension field, enter `5`.
    * Double-check that both **X and Y** are set correctly before proceeding.<br/><br/>
     ![Set the object dimensions for automatic calibration](images/04-unit-per-pixel-x-and-y.webp)
<br/><br/>

1. **Locate a calibration square to be measured**.
    * Jog the machine until a **golden guideline square** is fully visible in the top camera view. The square should be roughly centered in the camera's reticles. The whole square must be visible. If necessary, use the scroll wheel to zoom out and ensure the entire square is visible.
    * In `Machine Controls`, you can adjust the `Distance Slider` to jog in larger or smaller increments when locating the golden guideline square.<br/><br/>
     ![Find a Golden Guideline Square](images/05-golden-guideline-square.gif)
<br/><br/>

1. **Align and Measure**.
    * locate and click the `Measure` button.<br/><br/>
     ![Click the measure button](images/06-measure-button-top.webp)<br/><br/>
    * Click and drag in the camera view to create a bounding box. Align it with the center of the golden guideline square to align with the lines along its edge. The square is exactly 5mm x 5mm.<br/><br/>
     ![Creating the Bounding Box](images/07-create-bounding-box-top.gif)
     ![Close Up of Bounding Box](images/07-bounding-box.gif)<br/><br/>

    !!! Note "Squareness"
        Don't worry if the box's square doesn't perfectly align with the camera image. Any slight skew will be adjusted for during jobs with fiducial calibration.
<br/><br/>

1. **Finalize Calibration**.
    * Once you have it perfectly outlined, click the `Measure` button again to update the Units Per Pixel values.<br/><br/>
     ![Confirm the test](images/08-confirm-by-clicking-measure-again.webp)<br/><br/>
    * Click `Apply` in the lower right corner to save your changes.<br/><br/>
     ![Apply the new settings](../2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../2-connect-to-machine/images/save-config.webp)
<br/><br/>

1. **Confirm Top Camera Calibration**.
    * First, ensure your top camera view is fully zoomed out.
    * Click and drag the center reticle (located in the middle of the camera feed) to one of the corners of the Golden Guideline Square.
    * If the mm/pixel calibration is correct, the **Top Camera** will move to be precisely over your chosen corner.
     ![Confirm Top Camera Calibration](images/09-confirm-top-cal-is-correct.gif)

---

## Bottom Camera Calibration

The following steps will calibrate the mm/pixels for the **Bottom Camera**. This requires us to set the dimensions and use a virtual bounding box to outline the nozzle tip. This allows us to calibrate the **bottom camera’s Units per pixel**, giving us accurate bottom camera movement.

1. **Home your machine using the "Home" button**.
    * The LumenPnP will perform the homing process and position the top camera over the homing fiducial. In future steps, the homing sequence will also scan the nozzle tips after calibrating the homing fiducial, but for now, it should only scan the homing fiducial.

2. **Select the bottom Camera**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom`
    * In the drop-down under `Machine Controls`, select `Nozzle: N2 - N24 (Head: H1)` to control the nozzle on the right. This way, for any nozzle commands we run, OpenPnP knows to base them on Nozzle: N2 and **not** the other nozzle.<br/><br/>
     ![selecting n2 for control](images/10-select-nozzle-n2.webp)
<br/><br/>

1. **Manually adjust the Nozzle to be over the Bottom Camera**.
    * Using the controls at the bottom left of OpenPnP, jog `Nozzle: N2` (right toolhead) to roughly the center of the Datum board, positioning it near the edge closest to the bottom camera.<br/><br/>
     ![Position nozzle over camera](images/11-bring-nozzle-n2-over-datum.webp)<br/><br/>
    * Lower the `Nozzle: N2` so that it’s just **barely** touching the top surface of the Datum Board, just like we did with the first nozzle tip in previous steps. Placing the nozzle tip on the edge of the Datum Board makes it easier to see the nozzle tip's proximity to the Datum board as you lower it.
    * **Keep the nozzle at this Z height** and carefully use the jog controls to move it directly over the **center of the bottom camera’s reticle**.<br/><br/>
     ![Position Nozzle: N2 over camera](images/12-bring-n24-over-bottom-camera.gif)
     ![Jog the nozzle over the camera](images/13-nozzle-n24-centered-in-cam-view.webp)<br/><br/>
    !!! Tip "Fine-Tuning Focus"
        The bottom camera’s focus is pre-adjusted before shipping, but you can fine-tune it if needed. The lens is secured with friction grease, so apply light pressure while twisting the top portion of the lens until the image appears sharp. Avoid excessive force.
<br/><br/>

1. **Go to the `General Configuration` tab**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom`
    * Select the `General Configuration` tab.<br/><br/>
     ![Go to the general configuration tab](images/14-general-configuration-bottom-camera.webp)
<br/><br/>

1. **Scroll down to the** `Units Per Pixel` **section**.
    * Locate the Object Dimension Fields for **X** and **Y**.<br/><br/>
     ![The bottom camera's units per pixel section](images/15-unit-per-pixel-bottom-cam.webp)
<br/><br/>

1. **Set the Object Dimensions**
    * In the **X** Object Dimension field, enter `4`.
    * In the **Y** Object Dimension field, enter `4`.
    * Double-check that both **X and Y** are set correctly before proceeding.<br/><br/>
     ![Set the object dimensions for calibration](images/16-units-per-pixel-bottom-set-x-and-y-to-4.webp)
<br/><br/>

1. **Align and Measure**
    * locate and click the `Measure` button.<br/><br/>
     ![Click the measure button](images/17-measure-button-bottom-cam.webp)<br/><br/>
    * Click and drag in the camera view to create a bounding box. Align it with the center of the nozzle tip so that it's **perfectly tangent to the edges** as shown in the image.<br/><br/>
     ![Drag the box to the edges of the nozzle.](images/18-align-bounding-box-around-nozzle-tip.webp)
<br/><br/>

1. **Finalize Bottom Camera Calibration**
    * Once you have it perfectly outlined, click the `Measure` button again to update the Units Per Pixel values.<br/><br/>
     ![Confirm by clicking the measure button again](images/19-confirm-by-clicking-apply-again.webp)<br/><br/>
    * Click `Apply` in the lower right corner to save your changes.<br/><br/>
     ![Apply the new settings](../2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../2-connect-to-machine/images/save-config.webp)
<br/><br/>

1. **Confirm Bottom Camera Calibration**.
    * First, ensure your bottom camera view is fully zoomed out.
    * Click and drag the center reticle (located in the middle of the camera feed) to the edge of the nozzle tip and then back to the center of the tip.
    * The **Bottom Camera** should now be centered on the nozzle tip again.<br/><br/>
     ![Test your Bottom camera Units Per Pixel](images/20-testing-bottom-cam-units-per-pixel.gif)<br/><br/>
    * If it's inaccurate, repeat the bottom camera calibration and confirm you are using the larger N24 nozzle tip on Nozzle: N2 (right toolhead).

---

## Next Steps

Next is [Nozzle Offset Calibration](../6-nozzle-offset/index.md).
