# Feeder Validation

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

1. **Gather the necessary materials**
    * Locate the 8mm strip feeder and mounting hardware from your Getting Started Kit.<br/><br/>
     ![](images/strip-feeder-locate-in-tool-kit.webp)
<br/><br/>

2. **Position the feeder correctly**
    * Place the strip feeder onto the staging plate to the right of the FTP validation board.<br/><br/>
     ![Install the feeder to the staging plate](images/strip-feeder-mounting.webp)
<br/><br/>

1. **Secure the feeder**
    * Use the 2x M4 x 10mm screws to mount the strip feeder to your staging plate. You can ignore the G15 and A15 in this photo.

1. **Load the resistors**
    * Grab the resistors that were provided in a small roll of tape from a reel and insert that strip into one of the tracks, ensuring that the holes on the strip of tape are on the left side. Do not remove the clear covering tape yet; it will ensure the components stay in place.<br/><br/>
     ![](images/strip-feeder-insert-strip.webp)
     ![](images/strip-feeder-cut-excess-tape.webp)
     ![](images/strip-feeder-loaded-tape.webp)
<br/><br/>

1. **Peel the film**
    * There is a film that needs to be peeled from the top of the strip of tape.
    * For now, only peel it far enough to expose the first few pieces, and make sure the film is not obstructing the nozzle from reaching the first exposed part.
    * If you are having a hard time with peeling the film, feel free to remove the strip from the strip feeder to start the edge, and then place it back in before exposing components. If a component spills out, don't worry. We'll use the following one instead.<br/><br/>
     ![](images//strip-feeder-peel-film.webp)<br></br>

2. **Prepare OpenPnP**
    * In OpenPnP, level the nozzles so they will not collide with anything.
    * Press the Home icon in Machine Controls to home your LumenPnP.<br/><br/>
     ![](images/strip-feeder-home-button.webp)<br></br>

---

## Adding Feeders in OpenPnP

Once the feeder is physically installed, it needs to be configured in OpenPnP so the machine knows where and how to pick components.
<br></br>

1. **Open the `Feeders` tab**
    * It can be found in the top right pane. This section allows you to add and configure new feeders.<br></br>
     ![Switch to the feeders list](images/strip-feeder-feeder-tab.webp)
<br></br>

1. **Add a new feeder**
    * Click on the "**green plus-symbol (+)**" button.
    * From the list of feeders, select `ReferenceTrayFeeder` and click `Accept`.<br></br>
     ![Select and add a new reference tray feeder](images/strip-feeder-reference-tray-feeder.webp)<br></br>
    * We choose this over the strip feeder setup because of the simplicity it brings to use the referencetrayfeeder setup quickly for our validation purposes.
<br></br>

1. **Define feeder spacing**
    * Set the `Y` `Offset` to `-4` to match the spacing between components on the tape.<br></br>
     ![Set feeder offset](images/strip-feeder-tray-y-offset.webp)
<br></br>

1. **Set feeder capacity**
    * Set Enter `14` in the `Y` `Tray Count`, indicating the rough number of resistors available before advancing the tape manually.<br></br>
     ![Set the feeder tray count](images/strip-feeder-tray-count.webp)
<br></br>

1. **Position nozzle: N1 over the feeder**
    * In `Machine Controls`, confirm that `Nozzle: N1` is selected in the dropdown menu. This should have the `N08` nozzle tip installed from the calibration setup.
     ![Jog the nozzle over the Feeder Pick Location](images/strip-feeder-jog-to-feeder-pick-location.webp)
    * While still in Machine Controls, use the `jog controls` to jog the nozzle tip over to the first component in the strip feeder.
    * Adjust the XY position and lower the Z axis until nozzle tip on N1 is centered over the pocket and touching the top surface of the component.
     ![Position the nozzle over the feeder](images/strip-feeder-nozzle-over-pocket.webp)
    * Note: When lowering the nozzle tip to touch the top part of the component, it can feel like the nozzle tip is lowering inside of the pocket. That is expected.
<br></br>

1. **Capture feeder pick location coordinates**
    * Within the `Feeders` tab, select the feeder you just created and click on the ![Blue Capture-Nozzle-Location](images/strip-feeder-save-current-nozzle-tip-location.webp) icon, seen in the image below, to update the feeder pick location coordinates for X,Y, and Z.<br></br>
     ![Position the nozzle over the feeder](images/strip-feeder-set-pick-location.webp)
<br></br>

1. **Call the top camera to the feeder**
    * Use the ![red call-top-cam-location](images/strip-feeder-call-current-cam-location.webp) button to move the top camera over the feeder's pick location. It has red corner brackets around the camera icon.<br/><br/>
     ![Call the top camera over the feeder's pick location](images/strip-feeder-top-cam-over-pocket.webp)
<br/><br/>

1.  **Fine-tune the alignment**
    * You do not want the view centered on the physical component, but the pocket the component rests in. This is because the pocket is more consistent to use as a repeatable point.
    * If you want to make slight adjustments, use the jog controls to center the crosshair over the center of the pocket and use the ![blue capture top camera position](images/strip-feeder-save-current-cam-location.webp) button.
    * Don't forget, you want to align with the whole opening and **not** the resistor.<br/><br/>
     ![Manually move closer to the correct feeder location](images/strip-feeder-adust-pocket-location-with-top-cam.webp)
<br/><br/>

1.  **Apply and enable the feeder**
    * Click the `Enabled` checkbox in the feeder list.<br/><br/>
     ![Enable the feeder so that it is used](images/strip-feeder-enable-feeder.webp)
    * Click `File > Save Configuration` to save the feeder settings<br/><br/>
     ![Save feeder settings](images/save-config-small.webp)<br/><br/>
<br/><br/>

---

## Test Picking a Component

<div class="stop-if"> <div class="stop-if-title"> Assign Nozzle Tips to Every Package </div>

Every package listed in the packages tab must have at least one nozzle tip assigned to it. If not, OpenPnP may give you an error.
Go to: Packages tab > select a package > Nozzle Tips tab > Check  the box for given nozzle tip. We'll use both, the N08 and N045 nozzle tips for package we are using for the FTP board. Choose those nozzle tips for the package we are testing with.

 <img src="images/strip-feeder-assign-nozzle-tips-to-package.webp" width="80%">

</div>

1. **Test picking a component**
    * Remove the cover tape.
    * Click the `Feed & Pick` ![feed and pick button](images/strip-feeder-feed-and-pick-icon.webp) icon button, to have the LumenPnP attempt to pick a component from the feeder.
    * If the component is picked up properly, your Z-height is correct.<br/><br/>
     ![Pick from the feeder](images/strip-feeder-pick-first-test-part.webp)<br/><br/>
    * If unsuccessful:
        * Lower the Z height of the saved feeder pick location by `0.1mm`.
        * Press `Apply` to save the change.
        * Retry picking the component.

    !!! warning "Effective Safe Z Coordinate Error"
        If you see an "Effective Safe Z Coordinate" error, ensure that the part height is correctly set in the Parts tab.
         ![](images/effectivesafezerror.webp)
<br/><br/>

1. **Recycle/Discard test component**
    * Once a pick is successful, switch to the `Special` Tab in the `Machine Controls` pane.
    * Click the `Recycle` button, which places the component back in its pocket.
    * If the recycle button is greyed out, press the `Discard` button to place the component in the discard bin.
    * This allows you to confirm that the components is being picked correctly.<br/><br/>
    ![Switch to the special tab](../../../v4-2/preflight/establish-connection/images/machine-controls-special-tab.webp)<br/><br/>

---


<a href="../job-validation/" class="next-step">Job Validation →</a>