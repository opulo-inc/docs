---
title: "Installing the Feeders"
linkTitle: "Installing the Feeders"
weight: 2
type: docs
description: >
 Getting the feeders ready for automatic picking
---
# Feeder Setup ([Video Guide](https://youtu.be/W0kdrxkkXUw?si=4_92zIogzx7Cs2Lq&t=512))

Feeders hold and present components to the pick-and-place machine in a consistent manner. In this guide, we will focus on setting up an **8mm strip feeder** for resistors.

---

## Understanding Feeder Types

The FTP PCB uses two main types of components: resistors and LEDs. For this guide, we are focusing on resistors to illustrate how to disable placements effectively when needed.

!!! Note "Powered Feeders"
    If you purchased any [8mm Photon Feeders](https://opulo.io/products/8mm-feeder), we highly recommend using them for populating the FTP board. Follow the instructions for **[setting them up](../../../feeders/1-overview/feeder-overview.md)** now, and then proceed to the [test run](../3-test-run/index.md) once complete.

---

## Mounting a Strip Feeder

1. **Gather the necessary materials**.
    * Locate the 8mm strip feeder and mounting hardware from your Getting Started Kit.<br/><br/>
     ![8mm strip-feeder](images/8mm-strip-feeder.webp)
<br/><br/>

2. **Position the feeder correctly**.
    * Place the strip feeder onto the staging plate, aligning it with columns 14, 15, and 16.<br/><br/>
     ![Install the feeder to the staging plate](images/strip-placement-location.webp)
<br/><br/>

3. **Secure the feeder**.
    * Use the 2x M3 x 10mm super flat-head screws and M3 wingnuts to mount the strip feeder to your staging plate in holes `A15` and `G15`.<br/><br/>
     ![](images/strip-mounting-location.webp)
     ![](images/wingnut.webp)
<br/><br/>

4. **Load the resistors**.
    * Insert the provided resistors into the left-most track, ensuring that the tape holes are on the left. Do not remove the clear covering tape yet; it will ensure the components stay in place.<br/><br/>
     ![](images/loading-tape.webp)
     ![](images/tape-mounted.webp)
<br/><br/>

5. **Prepare OpenPnP**.
    * In OpenPnP, connect to your LumenPnP, verify that both nozzles are free from running into obstructions, and home the machine to set its starting position.<br/><br/>
     ![Connect to your LumenPnP and home it](images/Connect-and-home.webp)
<br/><br/>

---

## Adding Feeders in OpenPnP

Once the feeder is physically installed, it needs to be configured in OpenPnP so the machine knows where and how to pick components.
<br/><br/>

1. **Open the `Feeders` tab**.
    * It can be found in the top right pane. This section allows you to add and configure new feeders.<br/><br/>
     ![Switch to the feeders list](images/Feeders-tab.webp)
<br/><br/>

2. **Add a new feeder**.
    * Click on the "**Add Feeder**" icon button.<br/><br/>
     ![Start adding a new feeder](images/Add-feeder-button.webp)
<br/><br/>

3. **Choose the correct feeder type**.
    * Select `ReferenceTrayFeeder` and click `Accept`.<br/><br/>
     ![Select and add a new reference tray feeder](images/Select-referenceTrayFeeder.webp)
<br/><br/>

4. **Assign the correct component**.
    * In the `Configuration` tab, Set the `Part` field to `R_0603_1608Metric-R_Small`<br/><br/>
     ![Assign the resistor to the tray feeder](images/Change-feeder-part.webp)
<br/><br/>

5. **Define feeder spacing**.
    * Set the `Y` `Offset` to `-4` to match the spacing between components on the tape.<br/><br/>
     ![Set feeder offset](images/Set-feeder-offset.webp)
<br/><br/>

6. **Set feeder capacity**.
    * Set Enter `30` in the `Y` `Tray Count`, indicating the number of resistors available before advancing the tape manually.<br/><br/>
     ![Set the feeder tray count](images/Set-tray-count.webp)
<br/><br/>

7. **Define pick location**.
    * Set the initial pick position to `X=130`, `Y=205`, `Z=20` as a starting point. These values act as a starting reference, which can be fine-tuned later.<br/><br/>
     ![Set the starting location for the left feeder](images/Set-left-pick-location.webp)
<br/><br/>

8. **Adjust rotation if needed**.
    * If components are placed incorrectly, modify the Rotation value in 90-degree increments until placement orientation is correct.
<br/><br/>

9. **Align the camera to the feeder**.
    * Use the `Position Camera` button to move the top camera roughly over the left feeder.<br/><br/>
     ![Move the top camera over the left feeder's approximate location](images/Position-camera-over-feeder.webp)
<br/><br/>

10. **Fine-tune the alignment**.
    * Position the center of the top camera feed *precisely* over the center of the top-most slot holding a resistor in the tray. You can drag the reticle in the camera feed, or use the jog buttons. Don't forget, you want to align with the whole opening and **not** the resistor.<br/><br/>
     ![Manually move closer to the correct feeder location](images/Position-over-feeder-start-rough.webp)
     ![Manually move closer to the correct feeder location](images/Position-over-feeder-start-precise.webp)
<br/><br/>

11. **Save the feeder position**.
    * Click the "Capture Camera Location" icon button to lock in the XY position of the start of the feeder.<br/><br/>
     ![Save the current camera position as the start place for the feeder](images/Capture-camera-position-feeder.webp)
<br/><br/>

12. **Apply and enable the feeder**.
    * Click `Apply` to save the feeder settings<br/><br/>
     ![Save feeder settings](images/apply-button.webp.webp)<br/><br/>
    * Click the `Enabled` checkbox in the feeder list.<br/><br/>
     ![Enable the feeder so that it is used](images/Enable-feeder.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](images/save-config-small.webp)
<br/><br/>

---

## Fine-Tuning Feeder Height

1. **Select the Nozzle**.
    * In `Machine Controls`, select `Nozzle: N1` from the dropdown. To confirm, this should have the `N045` nozzle tip installed.<br/><br/>
     ![](../../calibration/6-nozzle-offset/images/select-n1-machine-control.webp)
<br/><br/>

1. **Position nozzle: N1 over the feeder**.
    * Within the `Feeders` tab, select the feeder you just created and click on the `Position Nozzle` icon button to bring the nozzle over the feeder.
    * Within `Machine Controls`, use the jog controls to lower the Z axis until the nozzle is touching the surface of the plastic tape cover.<br/><br/>
     ![Position the nozzle over the feeder](images/Position-nozzle-over-feeder.webp)
     ![Use the jog controls to position the nozzle over the feeder](images/Z-jog-controls.webp)
     ![Position the nozzle over the feeder](images/set-height.webp)
<br/><br/>

1. **Capture the Z height**.
    * Click the `Capture Nozzle` icon button to store the new feeder Z height value.<br/><br/>
     ![Save the nozzle position](images/Capture-nozzle-position-feeder.webp)
<br/><br/>

1. **Apply and Save**.
    * Click `Apply` to save these changes to the feeder z height.<br/><br/>
      ![apply](images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](images/save-configuration.webp)
<br/><br/>

1. **Raise the nozzles to avoid collision**.
    * In `Machine Controls`, click the letter `P` between the **Z** up/down arrows to “**Park**” the nozzle at a safe height to prevent unwanted collisions.
    * Jog the nozzles away from the feeder using the arrows in `Machine Controls`. It does not matter where. This will prepare us to test picking parts in the next steps.<br/><br/>
     ![Move the Tool Head away from the feeder](images/XY-jog-controls.webp)
<br/><br/>

1. **Test picking a component**.
    * Remove the cover tape.
    * Click the `Pick` icon button, seen below, to have the LumenPnP attempt to pick a component from the feeder.
    * If the component is picked up properly, your Z-height is correct.<br/><br/>
     ![Pick from the feeder](images/Pick-from-feeder.webp)<br/><br/>
    * If unsuccessful:
        * Lower the Z height of the feeder by `0.1mm`
        * Press `Apply` to save the change
        * Home the machine
        * Retry picking

    !!! warning "Effective Safe Z Coordinate Error"
        If you see an "Effective Safe Z Coordinate" error, ensure that the part height is correctly set in the Parts tab.<br/><br/>
         ![](images/effectivesafezerror.webp)
<br/><br/>

1. **Recycle test components**.
    * Once a pick is successful, switch to the `Special` Tab in the `Machine Controls` pane.<br/><br/>
     ![Switch to the special tab](images/Special-tab.webp)<br/><br/>
    * Click the `Recycle` button to instruct the LumenPnP to return the picked component back to its original location in the feeder. This allows you to confirm that the picking and placing of components is functioning correctly without wasting parts.<br/><br/>
     ![Recycle the component you've picked up](images/Recycle-component.webp)
<br/><br/>

---

## Next Steps

Now that your feeder is properly set up and calibrated and you have your FTP PCB mounted and ready, let's verify that your LumenPnP is correctly processing through a job by performing a [Test Run](../3-test-run/index.md).
