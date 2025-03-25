# Connecting to Your LumenPnP V4 ([Video Guide](https://youtu.be/h3mtEQfGMlM?si=EwPYDBEEKK8miH29&t=31))

**Now that OpenPnP is installed and the LumenPnP configuration files have been placed in the hidden system folder, OpenPnP can start with some basic preconfigured settings. The next step is to connect your LumenPnP and get familiar with OpenPnP’s user interface.**.

## Prepare for Connection

**Before launching OpenPnP, follow these guidelines to ensure a smooth connection**:

!!! warning "USB Connection Order Matters!"
    Always plug in your LumenPnP’s USB cable before launching OpenPnP.<br/><br/>
    If OpenPnP is already open, close it before connecting the USB.

!!! warning "Camera USB Ports"
    **Plug cameras directly into your computer using separate USB ports**.<br/><br/>
    Avoid USB hubs, as they may not provide enough bandwidth for the cameras.**Use separate USB ports directly into your computer**. The cameras require a lot of USB bandwidth, and many USB hubs aren't capable of handling it. For best results, make sure each camera is plugged into a different USB port directly into your computer, ideally on different internal USB hubs.

---

## Connecting to Your LumenPnP V4

Follow these steps in order:

1. **Ensure OpenPnP is closed**.

1. **Power the LumenPnP** by plugging in the barrel jack power cable.

1. **Connect the LumenPnP** to your computer using the included USB cable.

1. **Connect both cameras** using their USB cables.

1. **Launch OpenPnP**. You should now see the OpenPnP user interface:
  ![OpenPnP's basic UI](images/openpnp-ui.webp)
<br/><br/>

---

## Configuration the Serial Port

**Before OpenPnP can communicate with the LumenPnP, we need to set the correct serial port**.

1. **Open Machine Setup**
    * Click the `Machine Setup` tab, toward the top right section of OpenPnP.
     ![Machine Setup Tab](images/Machine-Setup-Tab.webp)
<br/><br/>

1. **Expand the Configuration Trees**
    * Check the `Expand` checkbox toward the top right of OpenPnP to show all machine configuration options.
    * This will expand all of the categories, and sub-categories, in the upper pane of `Machine Setup` and will require you to scroll to see all of the options mentioned below.
     ![Expanding the Machine Config options](images/Expand-Checkbox.webp)
<br/><br/>

1. **Select the Gcode Driver** 
    * In the upper pane, locate the newly expanded `Drivers` category and click on `GcodeDriver GcodeDriver`.
     ![Reviewing the GcodeDriver options](images/SelectGcodeDriver.webp)
<br/><br/>

1. **Choose the Correct Port**
    * Under the `Serial Port` section in the `Configuration` tab, select the correct `Port` from the dropdown menu:
        * **Windows**: The `Port` will be labeled as `COM#`. *(Examples COM1, COM2, COM3, etc.)*
        * **Mac**: Look for a `Port` in the format of `cu.usbmodemXXXX`, where `XXXX` is a series of numbers.
        * **Linux**: Select the `Port` formatted as `ttyACM#`. *(Examples ttyACM0, ttyACM1, ttyACM2, etc.)*
     ![Changing the Port and Baud Rate](images/Check COM Port and Baud Rate.webp)
<br/><br/>

1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes.
     ![Apply baud rate and port](images/apply-machine-config.webp)
    * Save your OpenPnP configuration: `File > Save Configuration`.
     ![saving the machine config](images/save-configuration.webp)

!!! info "Port Not Found?"

    If your machine's port isn't listed: 

       1. Ensure the USB cable is securely connected on both sides.
       
       2. Make sure the motherboard is powered on.
       
       3. Close OpenPnP, press the reset button on the control box, wait a few seconds, and reopen OpenPnP. 
       
       4. Finally, use our [Debug Tool](https://debug.opulo.io) and see if you are able to connect your LumenPnP there.
<br/><br/>

---

## Establishing a Serial Connection

1. **Connect OpenPnP to Your Machine**
    * Click the **green power button** in the `Machine Controls` section (Bottom left of OpenPnP).
     ![Connect to the LumenPnP](images/connect-to-machine-power-button.webp)
<br/><br/>

1. **Confirm Connection**
    * If successful, the green **power button will turn red**. This means OpenPnP has successfully connected to your machine.
     ![having successfully connected to the LumenPnP and cameras](images/connected-to-machine.webp)
    * If unsuccessful,review your [Serial Port Connection](#serial-port-configuration).
<br/><br/>

1. **Turn On Ring Lights**
    * In the bottom left corner of OpenPnP, go to `Machine Controls`.
    * Click the `Actuators` tab.
    * Click the `LED` button.
    * Then press `On`.<br/><br/>
     ![](images/turn-on-led.webp)
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
      ![level nozzles](images/level-nozzles.webp)
<br/><br/>

1. Click the **Home button** to perform a rough homing sequence.
    * The Nozzles will move to X, Y, and Z zero positions **(front-left corner of the LumenPnP)** and park there.
      ![Home the machine](images/Connect-and-home.webp)

---

## Install the Nozzle Tips

1. **Locate Your Nozzle Tips and SuperLube tube**.
    * Find and remove the `N045` and `N24` nozzle tips in the nozzle rack located in your LumenPnP v4 packaging.
    * Remove the `SuperLube` Tube that is also in the LumenPnP V4 packaging.

     ![](../../../semi-assembly-3-1/mounting-staging-plates-3-1/images/nozzle-tip-location.webp)

1. **Lubricate both brass nozzles**.
    * Apply a small amount of **SuperLube** to the brass nozzles. This prevents damage to the rubber O-rings when mounting nozzle tips. We pre-lubricate them before shipping, but adding extra ensures longevity.
     ![Apply Lubricant to holder](images/apply-super-lube.webp)

    !!! warning "Automatic Nozzle Tip Swapping"
        OpenPnP supports automatic nozzle tip swapping, but we don’t recommend it yet due to inconsistent performance. This feature will be improved in a future update, and the nozzle tip rack will be mounted on the staging plate. Most jobs can be completed using an `N045` on one nozzle and an `N24` on the other.
<br/><br/>

1. **Mount the `N045` Nozzle Tip**.
    * In OpenPnP, navigate to `Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
    * Select the `Nozzle Tips` tab, and check the `Loaded?` checkbox for the `N045` row.
    * **Your machine will jog the head to the front of the machine** for easy tip loading.
    * A **”Task Interrupted:”** window will pop up. This is **not** an error! OpenPnP is just notifying you that the job has been stopped if one is running. This is normal and can be dismissed.
     ![](images/n045-on-n1.webp)
     ![](images/task-interrupted.webp)
    * Slide the **N045 nozzle tip** (the one with the smaller opening) onto the **left nozzle** (using red tubing). Rotate the nozzle tip as you mount it to the brass nozzle to evenly distribute the lubricant around the O-rings. It should slide on and off smoothly after working it in.
     ![left nozzle has red tubing getting n045 tip, right has no tip](images/mountingn1.webp)
<br/><br/>

1. **Mount the `N24` Nozzle Tip**.
    * In OpenPnP, navigate to `Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2`.
    * Select the `Nozzle Tips` tab, and check the `Loaded?` checkbox for the `N24` row.
    * **Don’t forget.** It will move to the second nozzle and you’ll see the **”Task Interrupted:”** popup window again.
     ![](images/n24-on-n2.webp)
    * Slide the N24 nozzle tip (the one with the larger opening) onto the **right nozzle** (using blue tubing). Rotate the nozzle tip as you mount it to the brass holder to ensure the grease works its way into the tip and around the O-rings. It should slide on and off easily after working it in.
     ![blue tubing right nozzle getting n24 tip, left already has n045](images/mountingn2.webp)

    !!! Tip "Why These Nozzle Tips?"
        The **N045** and **N24 nozzle tips** cover the vast majority of parts **without needing swaps**. We highly recommend keeping them as the default and only swapping when absolutely (e.g., for very heavy parts).

---

## Configuring the Bottom Camera

Before calibration, the bottom camera and exposure must be set up properly. **We will need to install a nozzle tip and position it above the bottom camera to properly adjust the exposure**.

1. **🚨 Remove Lens Caps 🚨**
    * ⚠️ Ensure both the **top and bottom cameras** have their lens caps removed.
     ![Lens cap locations](../5-mm-per-pixel/images/remove-lens-caps.webp)
<br/><br/>

1. **Select the Bottom Camera in OpenPnP**
    * Navigate to `Machine Setup` > `Cameras` > `OpenPnpCaptureCamera Bottom`.
     ![Finding the Bottom Camera Settings](images/Bottom%20Camera%20Config.webp)
<br/><br/>

1. **Choose the Correct Camera Device**
    * In the `Device Settings` tab, select `LumenPnP Bottom` from the `Device` dropdown.
     ![Switching to the camera device settings](images/Bottom-camera-device-settings.webp)
    * Switch to the `Device Settings` tab in the lower detail pane.
     ![Selecting the correct device for the Bottom Camera](images/Bottom-camera-select-device.webp)

    !!! info "Duplicate Camera Names"
        If two cameras appear with the same name, select one—if incorrect, choose the other. This is a bug within OpenPnP.
<br/><br/>

1. **Set Resolution and Frame Rate**
    * In the `Format` drop-down menu, select `1920x1080 5fps`. *A low frame rate is crucial to avoid bandwidth/performance issues*.
     ![setting bottom camera resolution](images/Bottom-resolution.webp)
<br/><br/>

1. **Apply and Verify**
    * Click `Apply` to save the **Bottom Camera** settings. One of the red "X"s in the camera feed should disappear. The image might be entirely black, but we'll fix that in the following steps.
     ![Saving changes to the Bottom Camera Config](images/Bottom%Camera%Apply.webp)
     ![Bottom camera is now on](images/Bottom-camera-on.webp)
<br/><br/>

## Adjust Bottom Camera Exposure

!!! warning "Other Camera Settings"
    In the following step, **do not** modify any camera settings other than exposure. The default values should remain unchanged.

1. **Select Nozzle: N1**.
    * (If Nozzle: N1 is already centered over the bottom camera, please skip to step 4.)
    * From the `Machine Controls` dropdown, select `Nozzle: N1 - N045 (Head:H1)`.
     ![Select nozzle from machine control dropdown](images/select-n1-machine-control-bottom.webp) //placeholder for photo

1. **Positioning 'Nozzle: N1' Over the Bottom Camera**
    * Using the `Machine Controls`, jog `Nozzle: N1` to be anywhere **above the datum board** and lower `Nozzle: N1`, using the `Z-axis` controls, until it's just *barely* touching the datum board. (The very edge of the datum board has been ideal for easily seeing how close it is before Nozzle: N1 makes contact). This ensures the nozzle is at the correct Z-height for calibration.
    * **Keeping the Z-height unchanged, jog `Nozzle: N1` to be centered over the crosshair reticles in the bottom camera feed**.
     ![Position the toolhead over the bottom camera](images/position-over-bottom-cam.webp) //placeholder for photo
<br/><br/>

1. **Adjust the bottom camera exposure using the slider**.
    * Return to `Machine Setup > Cameras > OpenPnpCaptureCamera Bottom` to adjust the exposure. This will help us through the rest of the calibration.
    * 🚨 **Keep all other camera settings at their default value, and only adjust the exposure slider**.
    * In the `OpenPnpCaptureCamera Bottom` go to the `Device Settings` tab.
    * Located the `Exposure` slider and click on the check box labeled `Auto`. The camera will attempt to find the correct exposure.
    * Then, **uncheck** the `Auto` box to ensure we are now in "**manual adjustment**" mode.
     ![Switching to the camera device settings](images/Bottom-camera-device-settings.webp)
    * Right click on the bottom camera's feed and select `Show Image Info?` to enable the image info card. This will give you the brightness histogram of the image.
     ![enable the image histogram](images/show-image-info.webp)
    * In the next step, we'll be aiming for a **sharp peak on the right side** and a larger **cluster to the left** in the histogram. See the image below for reference.
     ![a good histogram](images/bottom-exp-good.webp){: style="width:60%;margin-left:10%;"}
    !!! Warning "🚨 Important 🚨"
        The reference image below is just an example—**your histogram may look very different** depending on lighting conditions, camera placement, and other environmental factors. **Do not try to match it exactly.** Instead, focus on achieving the key characteristics: a distinct peak on the right and a noticeable cluster to the left. Adjust gradually until the image is clear and well-exposed.

1. **Set the Correct Exposure**.
    * Adjust the exposure slider, or enter varying manual exposure values, to ensure the camera can clearly detect the dark hole in the nozzle tip for calibration. The exposure should be balanced—bright enough to distinguish the nozzle tip from the background but not so bright that the hole becomes difficult to detect. Aim for a setting where the brightest areas are visible but do not appear completely white, and the darker areas remain well-defined. Use the following images as a reference for adjusting exposure:<br/><br/>
     ![exposure too high](images/bottom-exp-high.webp)
     ![exposure too low](images/bottom-exp-low.webp)
     ![exposure correct](images/bottom-exp-good.webp)

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
    * Click `Apply` in the lower right corner to save your changes, if applicable.
    * Save your OpenPnP configuration now. `File > Save Configuration`.
      ![Save your config now](images/save-configuration.webp)

---

## Configuring the Top Camera

The same thing needs to be done to the top camera, where the exposure must be set up properly. We'll connect to the top camera in this step and adjust the exposure in the next.

🚨 The **homing fiducial** is the 1mm dot in the center of the Opulo logo, located toward the center of the datum board. 🚨
![Filler image](images/31settings.webp)

1. **Select the Top Camera in OpenPnP**
    * Navigate to `Machine Setup > Heads > ReferenceHead H1 > Cameras > OpenPnpCaptureCamera Top`.
     ![Finding the Top Camera Settings](images/Top-camera-settings.webp)
<br/><br/>

1. **Choose the Correct Camera Device**
    * In the `Device Settings` tab, select `LumenPnP Top` from the `Device` dropdown.
     ![Switching to the camera device settings](images/Top-camera-device-settings.webp)
<br/><br/>

1. **Set Resolution and Frame Rate**
    * In the `Format` dropdown menu, select `1920x1080 5fps`. *A low frame rate is crucial to avoid bandwidth/performance issues*.
     ![setting top camera resolution](images/Top-resolution.webp)
<br/><br/>

1. **Apply and Verify**
   * Click `Apply` to save the **Top Camera settings**. One of the red "X"s in the camera feed should disappear. The image might be entirely black, but we'll fix that in the following steps.
     ![Saving changes to the Top Camera Config](images/Top-Camera-Apply.webp)

1. **Save Your Configuration**
    * Save your OpenPnP configuration now. `File > Save Configuration`.
      ![Save your config now](images/save-configuration.webp)
<br/><br/>

---

## Next Steps

Now that your LumenPnP is connected and both cameras are configured, you're ready to proceed with setting up the homing fiducial and fine-tuning the top camera exposure. Continue to  [Homing Fiducial and Top Camera Exposure](../4-homing-fiducial/index.md).
