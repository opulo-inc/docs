# Feeder Validation

<div class="progress-container">
  <div class="progress-step progress-complete">FTP Board Prep</div>
  <div class="progress-step progress-current">Feeder Setup</div>
  <div class="progress-step">Job Validation</div>
</div>

---

## Strip Feeder Setup

There is an 8mm Strip Feeder that came with the Getting Started Kit, supplied with your LumenPnP.

(If you ware setting up **powered feeders**, [go here](../../../../feeders/1-overview/feeder-overview.md))

Feeders hold and present components to the pick-and-place machine in a consistent manner. In this guide, we will focus on setting up an **8mm strip feeder** for resistors.

---

## Understanding Feeder Types

The FTP PCB uses two main types of components: resistors and LEDs. For this guide, we are focusing on resistors to illustrate how to disable placements effectively when needed.

---

## Mounting a Strip Feeder

1. **Gather the necessary materials**.
    * Locate the 8mm strip feeder and mounting hardware from your Getting Started Kit.<br/><br/>
     ![](../../../v4/ftp/2-feeder-setup/images/8mm-strip-feeder.webp)
<br/><br/>

2. **Position the feeder correctly**.
    * Place the strip feeder onto the staging plate, aligning it with columns 14, 15, and 16.<br/><br/>
     ![Install the feeder to the staging plate](../../../v4/ftp/2-feeder-setup/images/strip-placement-location.webp)
<br/><br/>

3. **Secure the feeder**.
    * Use the 2x M3 x 10mm super flat-head screws and M3 wingnuts to mount the strip feeder to your staging plate in holes `A15` and `G15`.<br/><br/>
     ![](../../../v4/ftp/2-feeder-setup/images/strip-mounting-location.webp)
     ![](../../../v4/ftp/2-feeder-setup/images/wingnut.webp)
<br/><br/>

4. **Load the resistors**.
    * Insert the provided resistors into the left-most track, ensuring that the tape holes are on the left. Do not remove the clear covering tape yet; it will ensure the components stay in place.<br/><br/>
     ![](../../../v4/ftp/2-feeder-setup/images/loading-tape.webp)
     ![](../../../v4/ftp/2-feeder-setup/images/tape-mounted.webp)
<br/><br/>

5. **Prepare OpenPnP**.
    * In OpenPnP, connect to your LumenPnP, verify that both nozzles are free from running into obstructions, and home the machine to set its starting position.<br/><br/>
     ![Connect to your LumenPnP and home it](../../../v4/ftp/2-feeder-setup/images/Connect-and-home.webp)
<br/><br/>

---

## Adding Feeders in OpenPnP

Once the feeder is physically installed, it needs to be configured in OpenPnP so the machine knows where and how to pick components.
<br/><br/>

1. **Open the `Feeders` tab**.
    * It can be found in the top right pane. This section allows you to add and configure new feeders.<br/><br/>
     ![Switch to the feeders list](../../../v4/ftp/2-feeder-setup/images/Feeders-tab.webp)
<br/><br/>

2. **Add a new feeder**.
    * Click on the "**Add Feeder**" icon button.<br/><br/>
     ![Start adding a new feeder](../../../v4/ftp/2-feeder-setup/images/Add-feeder-button.webp)
<br/><br/>

3. **Choose the correct feeder type**.
    * Select `ReferenceTrayFeeder` and click `Accept`.<br/><br/>
     ![Select and add a new reference tray feeder](../../../v4/ftp/2-feeder-setup/images/Select-referenceTrayFeeder.webp)
<br/><br/>

4. **Assign the correct component**.
    * In the `Configuration` tab, Set the `Part` field to `R_0603_1608Metric-R_Small`<br/><br/>
     ![Assign the resistor to the tray feeder](../../../v4/ftp/2-feeder-setup/images/Change-feeder-part.webp)
<br/><br/>

5. **Define feeder spacing**.
    * Set the `Y` `Offset` to `-4` to match the spacing between components on the tape.<br/><br/>
     ![Set feeder offset](../../../v4/ftp/2-feeder-setup/images/Set-feeder-offset.webp)
<br/><br/>

6. **Set feeder capacity**.
    * Set Enter `30` in the `Y` `Tray Count`, indicating the number of resistors available before advancing the tape manually.<br/><br/>
     ![Set the feeder tray count](../../../v4/ftp/2-feeder-setup/images/Set-tray-count.webp)
<br/><br/>

7. **Define pick location**.
    * Set the initial pick position to `X=130`, `Y=205`, `Z=20` as a starting point. These values act as a starting reference, which can be fine-tuned later.<br/><br/>
     ![Set the starting location for the left feeder](../../../v4/ftp/2-feeder-setup/images/Set-left-pick-location.webp)
<br/><br/>

8. **Adjust rotation if needed**.
    * If components are placed incorrectly, modify the Rotation value in 90-degree increments until placement orientation is correct.
<br/><br/>

9. **Align the camera to the feeder**.
    * Use the `Position Camera` button to move the top camera roughly over the left feeder.<br/><br/>
     ![Move the top camera over the left feeder's approximate location](../../../v4/ftp/2-feeder-setup/images/Position-camera-over-feeder.webp)
<br/><br/>

10. **Fine-tune the alignment**.
    * Position the center of the top camera feed *precisely* over the center of the top-most slot holding a resistor in the tray. You can drag the reticle in the camera feed, or use the jog buttons. Don't forget, you want to align with the whole opening and **not** the resistor.<br/><br/>
     ![Manually move closer to the correct feeder location](../../../v4/ftp/2-feeder-setup/images/Position-over-feeder-start-rough.webp)
     ![Manually move closer to the correct feeder location](../../../v4/ftp/2-feeder-setup/images/Position-over-feeder-start-precise.webp)
<br/><br/>

11. **Save the feeder position**.
    * Click the "Capture Camera Location" icon button to lock in the XY position of the start of the feeder.<br/><br/>
     ![Save the current camera position as the start place for the feeder](../../../v4/ftp/2-feeder-setup/images/Capture-camera-position-feeder.webp)
<br/><br/>

12. **Apply and enable the feeder**.
    * Click `Apply` to save the feeder settings<br/><br/>
     ![Save feeder settings](../../../v4/ftp/2-feeder-setup/images/apply-button.webp)<br/><br/>
    * Click the `Enabled` checkbox in the feeder list.<br/><br/>
     ![Enable the feeder so that it is used](../../../v4/ftp/2-feeder-setup/images/save-config-small.webp)
<br/><br/>

---

## Fine-Tuning Feeder Height

1. **Select the Nozzle**.
    * In `Machine Controls`, select `Nozzle: N1` from the dropdown. To confirm, this should have the `N045` nozzle tip installed.<br/><br/>
     ![](../../../v4/calibration/6-nozzle-offset/images/01-seleect-nozzle-n1-from-machine-controls.webp)
<br/><br/>

1. **Position nozzle: N1 over the feeder**.
    * Within the `Feeders` tab, select the feeder you just created and click on the `Position Nozzle` icon button to bring the nozzle over the feeder.
    * Within `Machine Controls`, use the jog controls to lower the Z axis until the nozzle is touching the surface of the plastic tape cover.<br/><br/>
     ![Position the nozzle over the feeder](../../../v4/ftp/2-feeder-setup/images/Position-nozzle-over-feeder.webp)
     ![Use the jog controls to position the nozzle over the feeder](../../../v4/ftp/2-feeder-setup/images/Z-jog-controls.webp)
     ![Position the nozzle over the feeder](../../../v4/ftp/2-feeder-setup/images/set-height.webp)
<br/><br/>

1. **Capture the Z height**.
    * Click the `Capture Nozzle` icon button to store the new feeder Z height value.<br/><br/>
     ![Save the nozzle position](../../../v4/ftp/2-feeder-setup/images/Capture-nozzle-position-feeder.webp)
<br/><br/>

1. **Apply and Save**.
    * Click `Apply` to save these changes to the feeder z height.<br/><br/>
      ![apply](../../../v4/ftp/2-feeder-setup/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../../../v4/ftp/2-feeder-setup/images/save-config-small.webp)<br/><br/>
<br/><br/>

1. **Raise the nozzles to avoid collision**.
    * In `Machine Controls`, click the letter `P` between the **Z** up/down arrows to “**Park**” the nozzle at a safe height to prevent unwanted collisions.
    * Jog the nozzles away from the feeder using the arrows in `Machine Controls`. It does not matter where. This will prepare us to test picking parts in the next steps.<br/><br/>
     ![Move the Tool Head away from the feeder](../../../v4/ftp/2-feeder-setup/images/XY-jog-controls.webp)
<br/><br/>

1. **Test picking a component**.
    * Remove the cover tape.
    * Click the `Pick` icon button, seen below, to have the LumenPnP attempt to pick a component from the feeder.
    * If the component is picked up properly, your Z-height is correct.<br/><br/>
     ![Pick from the feeder](../../../v4/ftp/2-feeder-setup/images/Pick-from-feeder.webp)<br/><br/>
    * If unsuccessful:
        * Lower the Z height of the feeder by `0.1mm`
        * Press `Apply` to save the change
        * Home the machine
        * Retry picking

    !!! warning "Effective Safe Z Coordinate Error"
        If you see an "Effective Safe Z Coordinate" error, ensure that the part height is correctly set in the Parts tab.
         ![](../../../v4/ftp/2-feeder-setup/images/effectivesafezerror.webp)
<br/><br/>

1. **Recycle test components**.
    * Once a pick is successful, switch to the `Special` Tab in the `Machine Controls` pane.<br/><br/>
     ![Switch to the special tab](../../../v4/ftp/2-feeder-setup/images/Special-tab.webp)<br/><br/>
    * Click the `Recycle` button to instruct the LumenPnP to return the picked component back to its original location in the feeder. This allows you to confirm that the picking and placing of components is functioning correctly without wasting parts.<br/><br/>
     ![Recycle the component you've picked up](../../../v4/ftp/2-feeder-setup/images/Recycle-component.webp)
<br/><br/>

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
The feeder is primed and ready for action. Now let's create a job in OpenPnP and import the position file for the FTP Board.
</div>

<a href="../job-validation/" class="next-step">Job Validation →</a>

</div>