---
zoduki: true
---

# Configure Homing & Nozzle Tip Calibration

## Configure the Homing Method

### Step 1: Change the Homing Method

Now that calibration is complete, we'll configure the LumenPnP to use the primary fiducial for precise homing instead of relying only on the initial mechanical home position.

* In **Machine Setup**, navigate to **Heads > ReferenceHead H1**. {color=blue}
* Locate the **Homing Method** dropdown menu. {color=blue}
* Change the setting from **None** to **ResetToFiducialLocation**. {color=blue}
  <img src="images/set-homing-method.webp"/>

!!! info "How Homing Will Work"
    (Don't home the LumenPnP yet.) When you home your LumenPnP, it will first locate its mechanical home position, then use the top camera to find the primary fiducial and establish a more precise position.

    The machine will no longer remain at the front-left corner after homing.

### Step 2: Update the Homing Fiducial Coordinates

Next, we'll copy the calibrated primary fiducial's X and Y coordinates into the homing fiducial coordinates.

!!! danger "Do Not Change the Primary Fiducial Coordinates"
    The primary fiducial coordinates were established during calibration and must remain unchanged.<br></br>
    **Only update the Homing Fiducial X and Y coordinates to match the Primary Fiducial X and Y coordinates.**

* While still in **Machine Setup > Heads > ReferenceHead H1**, locate the **Primary Fiducial Coordinates**. {color=green}
* Find and copy the **X value for the primary fiducial**. {color=green}
  <img src="images/set-homing-fid-x-copy.webp"/>
* Locate the **Homing Fiducial Coordinates**. {color=blue}
* Update the **Homing X value** to exactly match the Primary Fiducial X value. {color=blue}
  <img src="images/set-homing-fid-x-paste.webp"/>
* Double-check that the X values match and that the original Primary Fiducial Coordinates have not changed. {color=purple}
  <img src="images/set-homing-fid-x-paste-2.webp"/>
* Go back to the primary fiducial coordinates and copy the **Y value for the primary fiducial**. {color=green}
  <img src="images/set-homing-fid-y-copy.webp"/>
* Then go back to the **Homing Fiducial Coordinates**. {color=blue}
* Update the **Homing Y value** to exactly match the Primary Fiducial Y value. {color=blue}
  <img src="images/set-homing-fid-y-paste.webp"/>
* Double-check that the Y values match and that the original Primary Fiducial Coordinates have not changed. {color=purple}
  <img src="images/set-homing-fid-y-paste-2.webp"/>
* Click the apply button in the bottom right of OpenPnP. {color=yellow}
  <img src="images/set-homing-fid-apply-button.webp"/>
* Locate **File** in the top left of OpenPnP, and Select Save Configuration. {color=orange}
  <img src="images/set-homing-fid-save-config.webp"/>

## Configure Automatic Nozzle Runout Calibration

### Step 3: Enable Auto Recalibration for N08

We'll now configure OpenPnP to automatically calibrate nozzle tip runout when nozzle tips are changed.

* In the **Machine Setup** tab, navigate to **Nozzle Tips > ReferenceNozzleTip N08**. {color=blue}
* Select the **Calibration** tab. {color=blue}
* Locate the **Auto Recalibration** dropdown. {color=blue}
  <img src="images/set-nozzle-tip-runout-n08-location.webp"/>
* Change it from **Manual** to **NozzleTipChange**. {color=green}
  <img src="images/set-nozzle-tip-runout-n08-nozzle-tip-change.webp"/>
* You must click **Apply** button in the bottom right of OpenPnP before leaving this screen, or the changes will not save. {color=yellow}
  <img src="images/set-nozzle-tip-runout-n08-apply-button.webp"/>

!!! info "What Is Nozzle Tip Runout Calibration?"
    Nozzle tips may have a small amount of offset as they rotate.

    OpenPnP measures this offset using the bottom camera and compensates for it during placement.

    Setting Auto Recalibration to **NozzleTipChange** allows OpenPnP to automatically recalibrate a nozzle tip when it is loaded, including during homing when needed.

### Step 4: Enable Auto Recalibration for N045 and Other Tips

* While still in the **Nozzle tips** section**, navigate to **Nozzle Tips > ReferenceNozzleTip N045**. {color=blue}
* It should already be on the **Calibration** tab. {color=blue}
* Locate the **Auto Recalibration** dropdown. {color=blue}
  <img src="images/set-nozzle-tip-runout-n045-location.webp"/>
* Change it from **Manual** to **NozzleTipChange**. {color=green}
  <img src="images/set-nozzle-tip-runout-n045-nozzle-tip-change.webp"/>
* You must click **Apply** button in the bottom right of OpenPnP before leaving this screen, or the changes will not save. {color=yellow}
  <img src="images/set-nozzle-tip-runout-n045-apply-button.webp"/>

!!! tip "Configure All Your Nozzle Tips"
    We recommend changing Auto Recalibration to **NozzleTipChange** for all nozzle tips included with your LumenPnP.

    This prevents you from having to remember to configure them individually later.

## Verify the New Homing Sequence

### Step 5: Home Your LumenPnP

Now that the homing method and nozzle tip calibration settings are configured, we'll test the new homing sequence.

* First go to Files > Save Configuration, in the top left of OpenPnP. Make sure both nozzles and the machine's path are clear of any obstructions.
* In **Machine Controls**, locate the **Home button** above the Power button. {color=purple}
* Click **Home** to start the homing sequence. {color=purple}
* Watch as the machine homes and uses the **primary fiducial** to establish its precise position. {color=purple}
* OpenPnP will then move the nozzle tips over the bottom camera to perform their runout calibration. Allow the process to finish. {color=purple}
  <img src="images/homing-sequence-vid.webp"/>

!!! warning "Watch the First Homing Sequence"
    This is the first time your LumenPnP will use its updated homing method and automatic nozzle tip calibration settings.<br></br>
    Watch the machine throughout the process and make sure the primary fiducial and nozzle tips are detected correctly.

!!! success "Homing Configuration Complete"
    Your LumenPnP is now configured to use its calibrated primary fiducial for homing.<br></br>
    Automatic nozzle tip recalibration is also enabled for your nozzle tips.

### Next Steps

* Calibration is complete! Next, we'll run a controlled validation test to confirm your LumenPnP is accurately picking and placing components.
   <img src="../../preflight/connect-cameras/images/step-complete.webp"/>

<a href="../../../v4-1/controlled-validation-test/introduction/" class="next-step">Begin Validation Test →</a>
