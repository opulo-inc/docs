---
zoduki: true
---

# Precise Nozzle N1 Offset Calibration

## Prepare for Precise Calibration with Nozzle N1

### Step 1: Select **Calibrate precise camera > nozzle N1 offsets** Task

For this task, OpenPnP will use a our nozzle calibration token to precisely measure the offset between the top camera and Nozzle N1.

* After clicking **Find Issues & Solutions**, locate and select **Calibrate precise camera > nozzle N1 offsets**. {color=blue}
  <img src="../../../v4-1/issues-solutions/fundamental/images/task-09-calibrate-precise-nozzle-n1.webp"/>

### Step 2: Reduce Machine Speed to 50%

!!! warning "Reduce Speed Before Calibration"
    This automated calibration involves repeated nozzle movements, rotations, and picking up and placing the calibration token.<br></br>
    **Set the machine speed to 50% before continuing.**

* In **Machine Controls**, locate the **Speed slider**, to the right of the jog distance slider. {color=blue}
  <img src="images/n1-offset-precise-set-to-fifty-percent-img.webp"/>
* Reduce the machine speed to **50%**. {color=yellow}
* Keep the speed at 50% throughout this calibration and the following calibration that uses the calibration token. {color=yellow}
  <img src="images/n1-offset-precise-slow-to-fifty-percent-speed.webp"/>

### Step 3: Place the Nozzle Calibration Token

* Locate the **calibration Token**, stored in a small pocket to the left of the primary fiducial. {color=blue}
  <img src="images/n1-offset-precise-calibration-token-location.webp"/>
* Carefully remove the token and place it directly on top of the **primary fiducial**. {color=green}
* Make sure the token is lying flat and is not obstructed. {color=green}
  <img src="images/n1-offset-precise-grab-cal-token.webp"/>

!!! tip "Keep the Calibration Token Clean"
    Grease or oils from your fingers may pose a risk of having the token to stick to the primary fiducial, making it harder for the nozzle tip to pick up.

    Handle the token by its edges whenever possible, and make sure its contact surfaces are clean.

## Position and Detect the Calibration Token

### Step 4: Center the Top Camera and Detect the Token

* Press the **P (Park) button** in Machine Controls to raise the nozzles before moving. {color=yellow}
  <img src="images/n1-offset-precise-park-nozzles.webp"/>
* Go to `Machine Setup > Heads > ReferenceHead H1` and locate the primary fiducial coordinates, like we have in previous steps. Use the **"Call Camera to Primary Fiducial"** button to position the **top camera** directly over the calibration Token (See image for reference). {color=blue}
  <img src="images/n1-offset-precise-call-cam-to-prim-fid.webp"/>
  <img src="images/n1-offset-precise-call-cam-to-prim-fid-vid.webp"/>

* Return to Issues & Solutions and locate **Feature Diameter**. {color=purple}
  <img src="images/n1-offset-precise-feature-diameter.webp"/>
* Adjust the Feature Diameter until OpenPnP correctly detects the **circular calibration Token** with a solid green circle. {color=green}
* This is a much larger circle than what we have dealt with before. Aim for a good detection score, which will most likely be in the 400s, and confirm the green circle matches the actual token's circle. {color=green}
  <img src="images/n1-offset-precise-feature-score.webp"/>
* Like before, you can use **Auto-Detect** if you're unsure what feature diameter to use. {color=orange}
  <img src="images/n1-offset-precise-auto-detect.webp"/>

## Run the Precise Calibration

### Step 5: Start and Monitor the Calibration

!!! warning "Confirm Machine Speed Is Still 50%"
    Before clicking **Accept**, check the Speed slider in Machine Controls one more time.

    **Do not begin until the machine speed is set to 50%.**

* Once the calibration token is correctly detected, click **Accept** to begin the automated calibration. {color=green}
  <img src="images/n1-offset-precise-accept-button.webp"/>
* OpenPnP will first scan and precisely center the top camera over the detected token. {color=blue}
* Nozzle N1 will then pick up the token, rotate it, and place it back onto the primary fiducial. {color=purple}
* The top camera will measure the token's new position and compare it to the expected position. {color=purple}
* OpenPnP will repeat this process several times to calculate the precise nozzle offset. Your calibration should be much slower than this, and that is on purpose. {color=purple}
  <img src="images/n1-offset-precise-calibration-in-action-vid.webp"/>

!!! tip "This Calibration Takes Some Time"
    The machine will perform several pickup, rotation, placement, and camera measurement cycles.

    This is expected. Allow the calibration to finish and watch for any problems picking up or placing the token.

!!! warning "Watch for Pickup or Detection Issues"
    Make sure N1 is successfully picking up and placing the calibration token.

    If the calibration token sticks to the fiducial, slips during pickup, when it is put back down, or OpenPnP detects the wrong circular feature, the calibration may need to be repeated.

## Complete the Calibration

### Step 6: Refresh Issues & Solutions

* Once the calibration finishes, confirm that **Calibrate precise camera ↔ nozzle N1 offsets** is marked **Solved**. {color=green}
  <img src="images/n1-offset-precise-solved.webp"/>
* Click **Find Issues & Solutions** to refresh the task list. {color=blue}
  <img src="images/n1-offset-precise-find-i-and-s.webp"/>

### Next Steps

!!! success "Precise N1 Offset Calibrated"
    OpenPnP has completed the precise offset calibration for Nozzle N1.

    This improves the accuracy of the relationship between the top camera and nozzle.

Next, we'll repeat the same calibration process for **Nozzle N2**, using its **N045 nozzle tip**.
  <img src="../../preflight/connect-cameras/images/step-complete.webp"/>
**Keep the calibration token on the primary fiducial and leave the machine speed at 50%.**


<a href="../n2-offset-precise/" class="next-step">Calibrate Precise N2 Offset →</a>
