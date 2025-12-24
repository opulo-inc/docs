# Connecting to Your LumenPnP V3 and Configure Bottom Camera

![](../img/lumenpnp-v3-docs-logo-small.png)

*(**V2 Users**, you can use these docs for your machine as well. For anything specific to V2, we will add notes pointing it out).*

**Now that OpenPnP is installed and the LumenPnP configuration files have been placed in the hidden system folder, OpenPnP can start with some basic preconfigured settings. The next step is to connect your LumenPnP and get familiar with OpenPnP’s user interface.**.

**Then, we will install the N045 and N24 nozzle tips to help us with calibration**.

**Finally, we will configure your bottom camera by establishing a connection to it, and setting the correct exposure**.

---

## Prepare for Connection

**Before launching OpenPnP, follow these guidelines to ensure a smooth connection**:

!!! warning "USB Connection Order Matters!"
    Always plug in your LumenPnP’s USB cable before launching OpenPnP.<br/><br/>
    If OpenPnP is already open, close it before connecting the USB.

!!! warning "Camera USB Ports"
    **Plug cameras directly into your computer using separate USB ports**.<br/><br/>
    Avoid USB hubs, as they may not provide enough bandwidth for the cameras.**Use separate USB ports directly into your computer**. The cameras require a lot of USB bandwidth, and many USB hubs aren't capable of handling it. For best results, make sure each camera is plugged into a different USB port directly into your computer, ideally on different internal USB hubs.

---

## Connecting to Your LumenPnP V3

Follow these steps in order:

!!! danger "Always Plug In Barrel Jack First"
     Always plug in the barrel jack before USB power. This ensures the proper power up sequence for the LumenPnP motherboard. When plugging in the barrel jack, *always* make sure the USB type B connector is unplugged.

1. **Ensure OpenPnP is closed**.

1. **Power the LumenPnP** by plugging in the barrel jack power cable.

1. **Connect the LumenPnP** to your computer using the included USB cable.

1. **Connect both cameras** using their USB cables.

1. **Launch OpenPnP**. You should now see the OpenPnP user interface:<br/><br/>
  ![OpenPnP's basic UI](../../../openpnp/v4/calibration/2-connect-to-machine/images/01-open-openpnp.webp)
<br/><br/>

---

### Configuration the Serial Port

**Before OpenPnP can communicate with the LumenPnP, we need to set the correct serial port**.

1. **Open Machine Setup**
    * Click the `Machine Setup` tab, toward the top right section of OpenPnP.<br/><br/>
     ![Machine Setup Tab](../../../openpnp/v4/calibration/2-connect-to-machine/images/02-choose-machine-setup.webp)
<br/><br/>

1. **Expand the Configuration Trees**
    * Check the `Expand` checkbox toward the top right of OpenPnP to show all machine configuration options.
    * This will expand all of the categories, and sub-categories, in the upper pane of `Machine Setup` and will require you to scroll to see all of the options mentioned below.<br/><br/>
     ![Expanding the Machine Config options](../../../openpnp/v4/calibration/2-connect-to-machine/images/03-expand.webp)
<br/><br/>

1. **Select the Gcode Driver**
    * In the upper pane, locate the newly expanded `Drivers` category and click on `GcodeDriver GcodeDriver`.<br/><br/>
     ![Reviewing the GcodeDriver options](../../../openpnp/v4/calibration/2-connect-to-machine/images/04-drivers-gcodedrivers.webp)
<br/><br/>

1. **Choose the Correct Port**
    * Under the `Serial Port` section in the `Configuration` tab, select the correct `Port` from the dropdown menu:
        * **Linux**: Select the `Port` formatted as `ttyACM#`. *(Examples ttyACM0, ttyACM1, ttyACM2, etc.)*<br/><br/>
         ![Changing the Port and Baud Rate](../../../openpnp/v4/calibration/2-connect-to-machine/images/05-choose-serial-port-gif.gif)<br/><br/>
        * **Windows**: The `Port` will be labeled as `COM#`. *(Examples COM1, COM2, COM3, etc.)*
        * **Mac**: Look for a `Port` in the format of `cu.usbmodemXXXX`, where `XXXX` is a series of numbers.
<br/><br/>

1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes.<br/><br/>
     ![Apply baud rate and port](../../../openpnp/v4/calibration/2-connect-to-machine/images/06-full-screen-apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration: `File > Save Configuration`.<br/><br/>
     ![saving the machine config](../../../openpnp/v4/calibration/2-connect-to-machine/images/07-full-screen-save-config.webp)<br/><br/>

!!! info "Port Not Found?"

    If your machine's port isn't listed: 

       1. Ensure the USB cable is securely connected on both sides.
       
       2. Make sure the motherboard is powered on.
       
       3. Close OpenPnP, press the reset button on the control box, wait a few seconds, and reopen OpenPnP. 
       
       4. Finally, use our [Debug Tool](https://debug.opulo.io) and see if you are able to connect your LumenPnP there.
<br/><br/>

---

### Establishing a Serial Connection

1. **Connect OpenPnP to Your Machine**
    * Click the **green power button** in the `Machine Controls` section (Bottom left of OpenPnP).<br/><br/>
     ![Connect to the LumenPnP](../../../openpnp/v4/calibration/2-connect-to-machine/images/08-click-power-button.gif)
<br/><br/>

1. **Confirm Connection**
    * If successful, the green **power button will turn red**. This means OpenPnP has successfully connected to your machine.<br/><br/>
    * If unsuccessful,review your [Serial Port Connection](#configuration-the-serial-port).
<br/><br/>

1. **Turn On Ring Lights**
    * In the bottom left corner of OpenPnP, go to `Machine Controls`.
    * Click the `Actuators` tab.
    * Click the `LED` button.
    * Then press `On`.<br/><br/>
     ![](../../../openpnp/v4/calibration/2-connect-to-machine/images/09-turn-on-leds-and-close-window-gif.gif)<br/><br/>
    * Close the LED window.
    * Switch back to the `Jog` tab so you are ready to move the nozzles in the following steps.

    !!! note "Keep Ring Lights On"
        Keep the ring lights on for the rest of calibration. All calibrations should be based on the lighting from the ring lights.
        Once calibration is complete and running a job on the LumenPnP, OpenPnP will automatically control the ring lights as needed, eliminating the need for manual operation during normal use.

---

## Preparing for Homing

1. **Level the nozzles before homing**.

    !!! danger "🚨 Critical Warning: Level Nozzles Before Homing 🚨"
        **Before pressing the homing button**—now and every time in the future—**you must ensure that your nozzles are level**.<br/><br/>
        ⚠️ **Failure to do this can cause crashes and potentially damage your machine.**<br/><br/>
        OpenPnP **does not** remember the previous nozzle positions from the last homing sequence, meaning it **cannot adjust movements based on past alignment**. If the nozzles are not level before homing, they may collide with the machine, leading to misalignment or serious hardware damage.
         ![level nozzles](../../../openpnp/v4/calibration/2-connect-to-machine/images/10-level-nozzles.webp)
    !!! Note
        Use the `P` between the Z-axis up/down arrows located in Machine Controls toward the bottom right of OpenPnP. This ensures the nozzle tips are out of the way.<br/><br?> 
        The `P` stands for **Parking** the nozzle out of the way into a safe height that won’t collide with any objects. If nothing happens after you click the `P` button, that means the nozzles are at a safe height already.
    !!! Note "Nozzles not level after parking."
        The nozzles may not be level when clicking the “**Park**” button, which is okay. The nozzle only moves to the point that it reaches the “safe zone” and then stops.
<br/><br/>

1. Before we home the LumenPnP, it is very important that we check a couple of settings.
    * Go to `Machine Setup > Nozzle Tips >N045 > Calibration Tab > Auto Recalibration`
    * Ensure `Auto Recalibration` is set to `Manual`.<br/><br/>
     ![Set nozzle N045 to manual](../../../openpnp/v4/calibration/2-connect-to-machine/images/set-n045-to-manual.webp)<br/><br/>
    * Then, go to `Machine Setup > Nozzle Tips >N24 > Calibration Tab > Auto Recalibration`
    * Ensure `Auto Recalibration` is set to `Manual`.<br/><br/>
     ![Set nozzle N24 to manual](../../../openpnp/v4/calibration/2-connect-to-machine/images/set-n24-to-manual.webp)<br/><br/>

1. Once the nozzle tips are set to `Manual`, click the **Home button** to perform a rough homing sequence.
    * The Nozzles will move to X, Y, and Z zero positions **(front-left corner of the LumenPnP)** and park there.
    * If the LumenPnP does not stay in the front left corner of the machine, Please go back to the prior step and ensure the `Manual` settings was saved.<br/><br/>
         ![Home your LumenPnP](../../../openpnp/v4/calibration/2-connect-to-machine/images/11-home-your-machine-gif.gif) *This image shows a V4 homing, but the end location is the same for both versions.*

!!! danger "If your machine does not move fully to the front left"
    If your LumenPnP does not move all the way to the front left of the machine when you click the Home icon, it could mean that your sensorless homing values need to be adjusted.

    Instructions for tuning this setting are [here](../../../guides/tuning-sensorless/index.md).

---

### Install the Nozzle Tips

1. **Locate Your Nozzle Tips and SuperLube tube**.
    * Find and remove the `N045` and `N24` nozzle tips in the nozzle rack that is mounted on the staging plate.<br/><br/>
     ![](../../../semi-assembly-3-1/mounting-staging-plates-3-1/images/nozzle-tip-location.webp)<br/><br/>
    * Remove the `SuperLube` Tube that comes in the LumenPnP V3 Tool Bag.<br/><br/>
     ![](../../../semi-assembly-3-1/unboxing-3-1/images/tool-bag.webp)<br/><br/>

1. **Lubricate both brass nozzles**.
    * Apply a small amount of **SuperLube** to the brass nozzles. This prevents damage to the rubber O-rings when mounting nozzle tips. We pre-lubricate them before shipping, but adding extra ensures longevity.<br/><br/>
     ![Apply Lubricant to holder](images/apply-super-lube.webp)<br/><br/>

    !!! warning "Automatic Nozzle Tip Swapping"
        OpenPnP supports automatic nozzle tip swapping, but we don’t recommend it yet due to inconsistent performance. This feature will be improved in a future update, and the nozzle tip rack will be mounted on the staging plate. Most jobs can be completed using an `N045` on one nozzle and an `N24` on the other.
<br/><br/>

1. **Mount the `N045` Nozzle Tip onto Nozzle: N1**.
    * In OpenPnP, navigate to `Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
    * Select the `Nozzle Tips` tab, and check the `Loaded?` checkbox for the `N045` row.
    * **Your machine will jog the head to the front of the machine** for easy tip loading.<br/><br/>
     ![N045 Loaded?](../../../openpnp/v4/calibration/2-connect-to-machine/images/14-n045-nozzle-ready-for-loading.webp)<br/><br/>
    * A **”Task Interrupted:”** window will pop up. This is **not** an error! OpenPnP is just notifying you that the job has been stopped if one is running. This is normal and can be dismissed.<br/><br/>
     ![task interrupted](../../../openpnp/v4/calibration/2-connect-to-machine/images/15-task-interrupted.webp)<br/><br/>
    * Slide the **N045 nozzle tip** (the one with the smaller opening) onto the **left nozzle** (using red tubing). Rotate the nozzle tip as you mount it to the brass nozzle to evenly distribute the lubricant around the O-rings. It should slide on and off smoothly after working it in.<br/><br/>
     ![left nozzle has red tubing getting n045 tip, right has no tip](images/mountingn1.webp)
<br/><br/>

1. **Mount the `N24` Nozzle Tip onto Nozzle: N2**.
    * In OpenPnP, navigate to `Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2`.
    * Select the `Nozzle Tips` tab, and check the `Loaded?` checkbox for the `N24` row.
    * **Don’t forget.** It will move to the second nozzle and you’ll see the **”Task Interrupted:”** popup window again.<br/><br/>
     ![](../../../openpnp/v4/calibration/2-connect-to-machine/images/17-n24-nozzle-ready-for-loading.webp)<br/><br/>
    * Slide the N24 nozzle tip (the one with the larger opening) onto the **right nozzle** (using blue tubing). Rotate the nozzle tip as you mount it to the brass holder to ensure the grease works its way into the tip and around the O-rings. It should slide on and off easily after working it in.<br/><br/>
     ![blue tubing right nozzle getting n24 tip, left already has n045](images/mountingn2.webp)

    !!! Tip "Why These Nozzle Tips?"
        The **N045** and **N24 nozzle tips** cover the vast majority of parts **without needing swaps**. We highly recommend keeping them as the default and only swapping when absolutely (e.g., for very heavy parts).

---

## Configuring the Bottom Camera

Before calibration begins, the bottom camera and exposure must be set up properly. **We will need to install a nozzle tip and position it above the bottom camera to properly adjust the exposure**.

!!! tip "Which Reticle should I use?"
    We use the "**Ruler**" Reticle in the following steps. If you prefer to use the same **reticle style** that we use, right-click on the **top or bottom camera feed** and choose `Reticle`, then "`Ruler`" to match our docs photos best.<br/><br/>
        ![Different reticles](../../../openpnp/v4/calibration/2-connect-to-machine/images/Switch-reticle-type.webp)

!!! Note
    From the LumenPnP V3 and up, machines ship with a more recessed bottom camera, as ween in the photo below. The images in our setup guides mostly show an older mounting solution, but either works the same.

    ![recessed bottom camera](images/new-bottom-camera.webp)

1. **🚨 Remove Lens Caps 🚨**
    * ⚠️ Ensure both the **top and bottom cameras** have their lens caps removed.<br/><br/>
     ![Lens cap locations](../5-mm-per-pixel/images/remove-lens-caps.webp)
<br/><br/>

1. **Navigate to the Bottom Camera's Device Settings tab in OpenPnP**
    * Navigate to `Machine Setup > Cameras > OpenPnpCaptureCamera Bottom > Device Settings tab`.<br/><br/>
     ![Finding the Bottom Camera Settings](../../../openpnp/v4/calibration/2-connect-to-machine/images/20-click-on-device-settings.webp)
<br/><br/>

1. **Choose the Correct Camera Device**
    * In the `Device Settings` tab, select `LumenPnP Bottom` from the `Device` dropdown.<br/><br/>
     ![Selecting the correct device for the Bottom Camera](../../../openpnp/v4/calibration/2-connect-to-machine/images/21-choose-lumenpnp-bottom-from-dropdown.webp)<br/><br/>

    !!! info "Duplicate Camera Names"
        If two cameras appear with the same name, select one. If incorrect, choose the other. This is a bug within OpenPnP.
<br/><br/>

1. **Set Resolution and Frame Rate**
    * In the `Format` drop-down menu, select `1280x720, 10FPS`. *A low frame rate is crucial to avoid bandwidth/performance issues*.<br/><br/>
     ![setting bottom camera resolution](images/Bottom-resolution.webp)
<br/><br/>

1. **Apply and Verify**
    * Click `Apply` to save the **Bottom Camera** settings. One of the red "X"s in the camera feed should disappear. The image might be entirely black, but we'll fix that in the following steps.
    * Save your OpenPnP configuration so OpenPnP will remember this when opened. `File > Save Configuration`.<br/><br/>
     ![Saving changes to the Bottom Camera Config](../../../openpnp/v4/calibration/2-connect-to-machine/images/23-apply-and-save-bottom-cam-settings-gif.gif)
<br/><br/>

---

### Adjust Bottom Camera Exposure

!!! warning "Other Camera Settings"
    In the following step, **do not** modify any camera settings other than exposure. The default values should remain unchanged.

1. **Select Nozzle: N1**.
    * From the `Machine Controls` dropdown, select `Nozzle: N1 - N045 (Head:H1)`.<br/><br/>
     ![Select nozzle from machine control dropdown](../../../openpnp/v4/calibration/2-connect-to-machine/images/24-select-nozzle-n1.webp)
<br/><br/>

1. **Select the bottom Camera**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom`

1. **Access the Position Tab**.
    * Click on the `Position` tab.
    * Enter `31.500` into the `Z position field`. (*This step is specific to any LumenPnP V3 machine, and is vital that it is set to 31.5.*) <br/><br/>
     ![Select the position tab](../../../misc/calibration/7-bottom-camera-position/images/02-bottom-cam-position-tab-v3.webp)
<br/><br/>

1. **Save the 31.500 Z Position**
    * Click `Apply` in the lower right corner to save the bottom camera position in OpenPnP.<br/><br/>
     ![Save the camera location](../../../openpnp/v4/calibration/2-connect-to-machine/images/apply-button.webp)<br/><br/>

1. **Align Nozzle Tip Over the Bottom Camera**.
    * In the `Position Tab`, click on the button to bring the nozzle tip over the bottom camera. This will jog the Nozzle: N1 (left toolhead) to be roughly over the bottom camera.<br/><br/>
     ![Position the V3 toolhead over the bottom camera precisely](../7-bottom-camera-position/images/click-to-bring-nozzle-over-bottom-cam.webp)<br/><br/>
  
1. **Adjust the bottom camera exposure using the slider**.
    * Return to `Machine Setup > Cameras > OpenPnpCaptureCamera Bottom` to adjust the exposure. This will help us through the rest of the calibration.
    * 🚨 **Keep all other camera settings at their default value, and only adjust the exposure slider**.
    * In the `OpenPnpCaptureCamera Bottom` go back to the `Device Settings` tab.<br/><br/>
     ![go to device settings](../../../openpnp/v4/calibration/2-connect-to-machine/images/28-bottom-camera-device-settings-tab.webp)<br/><br/>
    * Located the `Exposure` slider and click on the check box labeled `Auto`. The camera will attempt to find the correct exposure.
    * Then, **uncheck** the `Auto` box to ensure we are now in "**manual adjustment**" mode.<br/><br/>
     ![Switching to the camera device settings](../../../openpnp/v4/calibration/2-connect-to-machine/images/29-turn-auto-exposure-on-then-off-gif.gif)<br/><br/>
    * Using the jog controls, fine-tune the nozzle tip location to be perfectly centered over the bottom camera's reticle. You can use your mouse scroll wheel to zoom in on the feed for more precision. (Images are of a LumenPnP V4 and won't match exactly what you will see)<br/><br/>
     ![Align over center of bottom camera](../../../openpnp/v4/calibration/2-connect-to-machine/images/30-align-over-center-of-bottom-camera-gif.gif)<br/><br/>
    * Set the `Distance` slider to `0.1` or `0.01` for when you need more precise movements.<br/><br/>
      ![Make the jog controls more precise](../../../openpnp/v4/calibration/2-connect-to-machine/images/distance-slider-machine-controls.webp)<br/><br/>
    * Right click on the bottom camera's feed and select `Show Image Info?` to enable the image info card. This will give you the brightness histogram of the image.<br/><br/>
     ![enable the image histogram](../../../openpnp/v4/calibration/2-connect-to-machine/images/31-show-histograph-gif.gif)<br/><br/>
    * Use the histogram as a general guide rather than a precise measurement. It’s a helpful tool but not exact. For the best results, refer to the comparison photos below, which show examples of 'too bright,' 'too dark,' and 'good exposure' to help you fine-tune your settings after using the histogram.
    * In the next step, we'll be aiming for a **sharp peak on the right side** and a larger **cluster to the left** in the histogram. See the image below for reference.<br/><br/>
     ![a good histogram](../../../openpnp/v4/calibration/2-connect-to-machine/images/32-good-exposure-with-histogram.webp)<br/><br/>
    !!! Warning "🚨 Important 🚨"
        The reference image above is just an example. **Your histogram may look very different** depending on lighting conditions, camera placement, and other environmental factors. **Do not try to match it exactly.** Instead, focus on achieving the key characteristics: a distinct peak on the right and a noticeable cluster, or peak, to the left. Adjust gradually until the image is clear and well-exposed.

1. **Find the Correct Exposure**.
    * Adjust the exposure slider, or enter varying manual exposure values, to ensure the camera can clearly detect the dark hole in the nozzle tip for calibration. The exposure should be balanced. Meaning, sbright enough to distinguish the nozzle tip from the background but not so bright that the hole becomes difficult to detect. Aim for a setting where the brightest areas are visible but do not appear completely white, and the darker areas remain well-defined. Use the following images as a reference for adjusting exposure:<br/><br/>
     ![exposure too high](../../../openpnp/v4/calibration/2-connect-to-machine/images/33-exposure-too-high.webp)<br/><br/>
     ![exposure too low](../../../openpnp/v4/calibration/2-connect-to-machine/images/34-exposure-too-low.webp)<br/><br/>
     ![exposure correct](../../../openpnp/v4/calibration/2-connect-to-machine/images/35-good-exposure.webp)<br/><br/>
    * Close the Histogram window when you are done with it.

    !!! caution "Not seeing anything in the bottom camera feed?"
        If you are not seeing anything after adjusting the bottom camera exposure, ensure the lens caps on the bottom camera has been removed.

    !!! danger "For Mac Users"
        On some Macs, If OpenPnP doesn’t allow exposure adjustments, use the open-source tool, [CameraController](https://github.com/Itaybre/CameraController).
<br/><br/>

1. **Record the Bottom Camera Exposure Value**
    * OpenPnP may not retain camera settings after restart **Record and save your exposure value** by saving them in a text file or writing them down.
    * This means every time you boot up OpenPnP you'll have to:
        * Toggle **Auto Exposure** `on`, then `off`. (This puts your camera into manual exposure mode)
        * **Type your recorded exposure value into the exposure field beside the slider**.
<br/><br/>

1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes, if applicable. *(OpenPnP may have the button greyed out. That is fine.)* <br/><br/>
      ![apply button](../../../openpnp/v4/calibration/2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../../../openpnp/v4/calibration/2-connect-to-machine/images/save-config.webp)<br/><br/>

---

## Next Steps

Now that your LumenPnP V3 is connected, nozzle tips have been installed, and the bottom camera is configured, you're ready to proceed with [Configuring Top Camera and Homing Fiducial](../4-homing-fiducial/index.md).<br/><br/>

<!--
!!! success "v3.1+ Speed Increase"

    If your machine is v3.1 or higher, your machine can move much faster than the default configuration because of the addition of linear rails, and use less current for the L and R motors with the addition of pneumatic rotation couplings.

      1. In the `Gcode` tab under your `GcodeDriver`, select `Default` in the `Head Mountable` dropdown, and `CONNECT_COMMAND` in the `Setting` dropdown. **Overwrite** the existing text in this field with the new settings below. Be sure to hit `Apply` to confirm your changes.

        ```
        G21 ; Set Millimeters Mode
        G90 ; Set absolute positioning mode
        M82 ; Set absolute mode for extruder
        M204 T5000 ; Set max travel acceleration
        M201 Y1500 ; Set max Y acceleration
        M201 X2000 ; Set max X acceleration
        M203 X1000 Y1000 ; Set max feedrate in mm/min
        M906 Y1000 ; Set Y motor current
        M906 X800 ; Set X motor current
        M906 A200 ; Set L motor current
        M906 B200 ; Set R motor current
        M569 S0 X Y ; Switches to SpreadCycle
        ```

        Your settings should look similar like the image below:

        ![](images/31settings.webp)

      2. Next, under the `Setting` dropdown, choose the `HOME_COMMAND` option. **Overwrite** the existing text in this field with the new settings below. Be sure to hit `Apply` to confirm your changes.

        ```
        M569 S1 X Y ; Switches to StealthChop
        M201 Y1500 ; Set Max Y Acceleration
        M201 X2000 ; Set Max X Acceleration
        M906 Y400 ; Set Y motor current
        M906 X200 ; Set X motor current
        M914 X50 Y30 ; Set Homing Sensitivity
        G28 ; Home all axis
        M569 S0 X Y ; Switches back to SpreadCycle
        M201 Y2500 ; Set Max Y Acceleration
        M201 X3000 ; Set Max X Acceleration
        M906 Y1000 ; Set Y motor current
        M906 X800 ; Set X motor current
        ```

      3. To tell OpenPnP to take advantage of this speed increase, you can update the `Max Feed Rate` field in the `Driver Settings` tab. Enter `35000` into this field.

      4. If you need to tweak your sensorless homing settings, make sure to adjust the values in the line starting with `M914` under `HOME_COMMAND`, *not* under `CONNECT_COMMAND`. -->