# Homing Fiducial and Top Camera Exposure([Video Guide](https://youtu.be/h3mtEQfGMlM?si=YzBwkxLlAcJWxDJe&t=527))

Now, we can set up the **datum board**. Setting up the datum board ensures **precise and repeatable homing** for the LumenPnP. The center dot on the datum board is called the **"homing fiducial"**, and is the key calibration point, allowing fine-tuning of the machine’s XY position **to compensate for minor variations in limit switch accuracy**.

Then, we will fine-tune the top camera exposure settings for proper homing calibration. **We will use the top camera aligned above the datum board's homing fiducial to properly adjust the exposure**.

## Preparing for Homing

1. **Level the nozzles before homing**.

    !!! danger "🚨 Critical Warning: Level Nozzles Before Homing 🚨"
        **Before pressing the homing button**—now and every time in the future—**you must ensure that your nozzles are level**.<br/><br/>
        ⚠️ **Failure to do this can cause crashes and potentially damage your machine.**<br/><br/>
        OpenPnP **does not** remember the previous nozzle positions from the last homing sequence, meaning it **cannot adjust movements based on past alignment**. If the nozzles are not level before homing, they may collide with the machine, leading to misalignment or serious hardware damage.
      ![level nozzles](images/level-nozzles.webp)
<br/><br/>

2. Click the **Home button** to perform a rough homing sequence.
    * The Nozzles will move to X, Y, and Z zero positions **(front-left corner of the LumenPnP)** and park there.
      ![Home the machine](images/Connect-and-home.webp)

---

## Setting Homing Fiducial Location

1. Navigate to  `Machine Setup > Heads > ReferenceHead H1`.
      ![Reviewing the ReferenceHead options](images/Select-Reference-Head-H1.webp)
<br/><br/>

2. In the **Configuration tab**, change the **Homing Method** to `ResetToFiducialLocation`.
    * This sets the **homing sequence** to always finish by **scanning the fiducial**, which helps correct any minor inaccuracies caused by the sensorless homing.
      ![Switch to using the homing fiducial](images/Select-ResetToFiducialLocation.webp)
<br/><br/>

3. Apply and Save
    * Click `Apply` in the lower right corner to save your changes.
      ![Apply baud rate and port](images/apply-machine-config.webp)
    * Save your OpenPnP configuration now. `File > Save Configuration`.
      ![saving the machine config](images/save-configuration.webp)

    !!! Warning "Caution"
          **DO NOT** click the **homing button** again until you have fine-tuned the homing fiducial location, as explained in the next section.
<br/><br/>

4. Click on the **"Position Camera Over Location"** icon button shown below.
    * This moves the **top camera** to the **approximate position** of the datum board..
      ![Position top camera over homing fiducial](images/Position-camera-over-homing-fiducial.webp)
<br/><br/>

5. Ensure **LED lights** are on:
    * Ensure your **Top and Bottom ring lights** are still on. If not, go back to the **Machine Controls** in the bottom-left section of OpenPnP and go to `Actuators tab > LED > On`.
      ![Switch to the Actuators Tab](images/Actuators-tab.webp)
      ![Turn on the LEDs](images/Turn-on-LEDs.webp)
<br/><br/>

1. Navigate to `Machine Setup > Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`.
      ![Finding the Top Camera Settings](images/Top-camera-settings-4.webp)
<br/><br/>

1. In the lower detail pane, switch to the `Device Settings` tab.
      ![Switching to the camera device settings](images/Top-camera-device-settings-4.webp)
<br/><br/>

1. Located the `Exposure` slider and **check** the check box labeled `Auto`. The camera will attempt to find the correct exposure.

1. Then, **uncheck** the `Auto` box to ensure we are now in "**manual adjustment**" mode.

1. If the image is still difficult to see, slightly adjust the exposure until the datum board is easily visible. This will be fine-tuned after setting the homing fiducial location.
    * 🚨 **Keep all other camera settings at their default value, and only adjust the exposure slider**.

2. Navigate back to  `Machine Setup > Heads > ReferenceHead H1`.
      ![Reviewing the ReferenceHead options](images/Select-Reference-Head-H1.webp)

3. Return to the `Jog` tab in **Machine Controls** so we can fine-tune the homing fiducial location.
      ![Switch to the jog tab](images/Jog-tab.webp)
<br/><br/>

1. Set the `Distance` slider to `0.1` or `0.01` for more precise movements.
    * You can use your mouse scroll wheel to zoom in on the feed for more precision.
      ![Make the jog controls more precise](images/Distance-slider-0pt1.webp)

2. Align the Top Camera:
    * Towards the bottom right of OpenPnP, **use the jog controls** to position the **center of the reticle** directly over the **Homing Fiducial** in the perfect-center of the **Opulo logo**. Adjust the `Distance` slider as needed.
      ![use the jog controls to move the machine](images/jog-controls.webp)

      ![Center the homing fiducial in the camera view](images/Homing-fiducial-centered.webp)
<br/><br/>

1. Now that we're **perfectly centered** on the homing fiducial, We need to save this location in **two** different places.
    * **First**, click the `Capture Camera Location` button to save the fiducial’s position for the **Homing Fiducial**.
    * **Then**, Scroll down to the **Calibration Rig** section and click the `Capture Camera Location` button next to the **Primary Fiducial** field.
      ![capture camera location button](images/Capture-homing-fiducial-location.webp)s

    !!! info "Tip"
        We use the "**Ruler**" Reticle in the following steps. If you prefer a different **reticle style** in the center of the camera feed, right-click the **camera feed** to change the **Reticle style**. Choose "**Ruler**" to match our docs photos best.
        ![Different reticles](images/Switch-reticle-type.webp)
<br/><br/>

1.  Apply and Save
    * Click `Apply` in the lower right corner to save your changes.
      ![Apply](images/apply-machine-config.webp)
    * Save your OpenPnP configuration now. `File > Save Configuration`.
      ![Save your config now](images/save-configuration.webp)
<br/><br/>

---

## Fine-tune Camera Exposure

In order for OpenPnP to reliably detect the LumenPnP's homing fiducial, we'll need to **set the exposure and camera settings for your top camera** correctly.

We also detail this process in our [setup video](https://youtu.be/h3mtEQfGMlM?t=842).

1. Navigate to `Machine Setup > Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`.
      ![Finding the Top Camera Settings](images/Top-camera-settings-4.webp)
<br/><br/>

1. In the lower detail pane, switch to the `Device Settings` tab.
      ![Switching to the camera device settings](images/Top-camera-device-settings-4.webp)
<br/><br/>

1. Right click on the top camera's feed and select `Show Image Info?` to enable the image info card. This will give you the brightness histogram of the image.
      ![enable the image histogram](images/show-image-info.webp)
<br/><br/>

1. Adjust the Top Camera exposure using the slider or entering an exposure value.
    * 🚨 **Keep all other camera settings at their default value, and only adjust the exposure slider**.
    * Located the `Exposure` slider and click on the check box labeled `Auto`. The camera will attempt to find the correct exposure.
    * Then, **uncheck** the `Auto` box to ensure we are now in "**manual adjustment**" mode.
    * Aim for a **sharp peak on the right side** and a larger **cluster to the left** in the histogram. See the image below for reference.
       ![a good histogram](images/correct-exposure.webp){: style="width:60%;margin-left:10%;"}
    * Adjust the `Exposure` slider, or manually enter varying exposure values, until the Datum Board is easy to see.
       ![Adjust exposure](images/adjust-exposure-2.webp)
    !!! Warning "🚨 Important 🚨"
        The reference image below is just an example—**your histogram may look very different** depending on lighting conditions, camera placement, and other environmental factors. **Do not try to match it exactly.** Instead, focus on achieving the key characteristics: a distinct peak on the right and a noticeable cluster to the left. Adjust gradually until the image is clear and well-exposed.
       ![a good histogram](images/correct-exposure.webp){: style="width:60%;margin-left:10%;"}
    !!! caution "Not seeing anything in the top camera feed?"
        Ensure the lens caps on the top camera has been removed.
    !!! info "Tip"
        Cameras are pre-adjusted to the correct focus, but if you'd like to tweak it, the community-created [lens adjustment tool](https://www.printables.com/model/208453-lumen-pnp-lens-adjustment-tool) makes this easy. You will also need to loosen the set screw on the side of the camera.
<br/><br/>

1. Once you've found a good exposure value, **record your exposure value** by saving them in a text file or writing them down:
    * OpenPnP may not retain camera settings after restart, so **save the exposure value** for reference.
    * This means every time you boot up OpenPnP you'll have to:
        * Toggle **Auto Exposure** `on`, then `off`. (This puts your camera into manual exposure mode)
        * **Type your recorded exposure value into the exposure field beside the slider**.
<br/><br/>

1. **Turn off the histogram view** the same way you turned it on.

---

## Test Fiducial Homing

1. Navigate to `Machine Setup > Heads > ReferenceHead H1`.
      ![Return to the homing fiducial location settings](images/Select-Reference-Head-H1-5.webp)
<br/><br/>

1. Click on the **Home button** in the `Machine Controls Pane > Jog Tab` and watch your machine home using the limit switches, then moves the top camera over the homing fiducial and find its exact location. When the camera scans the fiducial, it will have a red-colored hue that scans for the fiducial's circle.
      ![Home the machine](images/Connect-and-home.webp)
<br/><br/>

1. If you receive the error `FIDUCIAL-HOME no matches found`, OpenPnP was not able to find your homing fiducial. You need to adjust your [Homing Fiducial Pipeline](../../vision-pipeline-adjustment/2-homing-fiducial-pipeline.md/).
      ![A first attempt at homing the LumenPnP](images/Cant-find-homing-fiducial.webp)
<br/><br/>

---

## Next Steps

Next is the [MM/Pixel Calibration.](../5-mm-per-pixel/index.md)