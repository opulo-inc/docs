---
zoduki: true
---

# Connect and Configure Your Cameras

## What to Know

### Top and Bottom Camera

* Your LumenPnP has two cameras used throughout calibration and operation. {color=blue}
* **Top Camera:** Looks downward at the machine's work area and is used for locating fiducials and identifying positions. {color=blue}
* **Bottom Camera:** Looks upward at the nozzle tips and components for accurate alignment. {color=blue}
    <img src="images/top-and-bottom-cam.webp"/>

## Configure the Top Camera

### Step 1: Locate the Top Camera

* Open the **Machine Setup** tab.
    <img src="images/locate-machine-setup.webp"/>
* Navigate to:
    `Heads > ReferenceHead H1 > Cameras > OpenPnpCaptureCamera Top`
    <img src="images/select-top-cam.webp"/>

* Select the **Device Settings** tab.
    <img src="images/top-cam-device-settings.webp"/>

### Step 2: Select the Top Camera Device

* Locate the **Device** dropdown. {color=blue}
* Select the LumenPnP top camera. {color=blue}
    <img src="images/top-cam-device-and-format-selections.webp"/>
* Locate the **Format** dropdown. {color=green}
* Select **1920 x 1080, 30 FPS, MJPEG** or an equivalent 1920 x 1080 resolution, as an alternative option. {color=green}
    <img src="images/top-cam-format.webp"/>

### Step 3: Initialize the Top Camera

* Click **Test** next to the Capture FPS setting. {color=green}
* Allow OpenPnP to initialize the camera. {color=green}
    <img src="images/top-cam-test-button.webp"/>
* Confirm that the top camera preview begins displaying a live image and removes the **red X** from the top camera feed. {color=purple}
* The image may initially appear dark or completely black. This is normal if the exposure settings haven't been adjusted yet. {color=purple}
    <img src="images/top-cam-initialized.webp"/>

### Step 4: Enable Manual Exposure

To ensure exposure settings are applied correctly, locate the camera properties

* Locate **Exposure** in the camera properties. {color=purple}
* Check the checkbox under the **Auto** column. {color=purple}
* Uncheck the same checkbox to disable automatic exposure. {color=purple}
* This switches the camera back to manual exposure mode and helps ensure the setting is applied correctly. {color=purple}
    <img src="images/top-cam-exposure-auto-on-off.webp"/>

### Step 5: Configure Top Camera Properties

* Update the following top camera settings to match the settings below. The exposure setting is a rough starting point. In a few steps, we'll turn on the camera lights and adjust the exposure as needed.
    <img src="images/top-cam-set-exposure-gamma-wb.webp"/>

     | Camera Property | Value |
     |---|---|
     | Exposure | 100 (to start) |
     | Gamma | 100 |
     | White Balance | 4000 |

    !!! tip "Fine tuning the Exposure"
        In later steps, we'll fine-tune the camera exposure.

## Configure the Bottom Camera

### Step 6: Locate the Bottom Camera

* Open the **Machine Setup** tab.
    <img src="images/bottom-cam-locate-machine-setup.webp"/>
* Navigate to:
    `Cameras > OpenPnpCaptureCamera Bottom`
    <img src="images/select-bottom-cam.webp"/>
* Select the **Device Settings** tab.
    <img src="images/bottom-cam-device-settings.webp"/>

### Step 7: Select the Bottom Camera Device

* Locate the **Device** dropdown. {color=blue}
* Select the LumenPnP Bottom camera. {color=blue}
    <img src="images/bottom-cam-device-and-format-selections.webp"/>
* Locate the **Format** dropdown. {color=green}
* Select **1920 x 1080, 30 FPS, MJPEG** or an equivalent 1920 x 1080 resolution, as an alternative option. {color=green}
    <img src="images/bottom-cam-format.webp"/>

### Step 8: Initialize the Bottom Camera

* Click **Test** next to the Capture FPS setting. {color=green}
* Allow OpenPnP to initialize the camera. {color=green}
    <img src="images/bottom-cam-test-button.webp"/>
* Confirm that the bottom camera preview begins displaying a live image and removes the **red X** from the bottom camera feed. {color=purple}
* The image may initially appear dark or completely black. This is normal if the exposure settings haven't been adjusted yet. {color=purple}
    <img src="images/bottom-cam-initialized.webp"/>

### Step 9: Enable Manual Exposure

To ensure exposure settings are applied correctly, locate the camera properties

* Locate **Exposure** in the camera properties. {color=purple}
* Check the checkbox under the **Auto** column. {color=purple}
* Uncheck the same checkbox to disable automatic exposure. {color=purple}
* This switches the camera back to manual exposure mode and helps ensure the setting is applied correctly. {color=purple}
    <img src="images/bottom-cam-exposure-auto-on-off.webp"/>

### Step 10: Configure Bottom Camera Properties

* Update the following bottom camera settings to match the settings below. The exposure setting is a rough starting point. We'll turn on the camera lights and adjust the exposure as needed, next.
    <img src="images/bottom-cam-set-exposure-gamma-wb.webp"/>

     | Camera Property | Value |
     |---|---|
     | Exposure | 78 (to start) |
     | Gamma | 100 |
     | White Balance | 4000 |

    !!! tip "Fine tuning the Exposure"
        In the next steps, we'll fine-tune the camera exposure.

## Adjust Exposure

### Step 11: Turn on Top & Bottom LEDs

* In Machine Controls, locate and select the **Actuators tab** and click on **LED**
    <img src="images/machine-controls-led-button.webp"/>
* A small window will pop up. Set the Boolean Value to **ON**. {color=purple}
* This turn on the LEDs for the top and bottom camera. {color=purple}
* Then close the window, and switch back to the Jog tab when finished. {color=purple}
    <img src="images/machine-controls-turn-on-leds.webp"/>

### Step 12: Adjust Top & Bottom Camera Exposures

* The initial exposure settings were a starting point, and may be fine. Now that the top and bottom lights are on, adjust the **Exposure** for the top and bottom cameras until the camera produces a clear image without excessive brightness, if needed.
* For now, use whatever stationary area is visible, or your hand, in the camera preview to use as reference while adjusting the exposure.

    !!! tip "Fine tuning the Exposure"
         A good exposure should allow the camera to distinguish objects clearly without washing out important details.
         We can make more precise adjustments when positioning and calibrating the bottom camera, if needed.
    <img src="images/adjust-top-and-bottom-exposure.webp"/>

### Next Steps

!!! success "Cameras Configured"
    Both cameras are now connected and ready for the next stage of setup.<br></br>
    **Next, we'll initiate the homing sequence.**
    <img src="images/step-complete.webp"/>

<a href="../home-lumenpnp-install-nozzle-tips/" class="next-step">Initiate Homing Sequence & Install Nozzle Tips →</a>
