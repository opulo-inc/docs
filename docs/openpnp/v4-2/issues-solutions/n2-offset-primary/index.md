---
zoduki: true
---

# Nozzle N2 offsets for the primary fiducial

## Position Nozzle N2

### Step 1: Select the **Nozzle N2 offsets for the primary fiducial** Calibration Task

For this task, we'll precisely align nozzle N2 with the primary fiducial, just as we did with N1.

* After clicking **Find Issues & Solutions** in the previous step, locate and select the task for calibrating **Nozzle N2 offsets for the primary fiducial**. {color=blue}
* Confirm that the **N045 nozzle tip** is installed on **N2 (right nozzle)**. {color=blue}
  <img src="../../../v4-1/issues-solutions/fundamental/images/task-05-n2-offset-primary-fid.webp"/>

### Step 2: Align N2 with the Primary Fiducial

* Before moving the nozzle, press the **P (Park) button** between the Z-Axis Jog Controls to raise the nozzles to a safe height.
   <img src="images/n2-offset-primary-park-nozzles.webp"/> {color=yellow}
* In **Machine Controls**, use the **X/Y Jog Controls** to position the N045 nozzle tip directly on the **primary fiducial** so they are touching. **Nozzle N2** should already be selected. {color=green}
* When you get the nozzle tip roughly over the primary fiducial, just like we did with the other nozzle, carefully lower the N2 nozzle using the **Z-Axis Jog Controls** to better judge its position. {color=green}
    <img src="images/n2-offset-primary-jog-controls.webp"/>
* Use the distance slider for smaller jog distances as you approach the fiducial for precise alignment. {color=blue}
    <img src="images/n2-offset-primary--distance-slider.webp"/>
* Keep adjusting the jog controls for X, Y, and Z until the nozzle tip is centered on the primary fiducial. {color=purple}
    <img src="images/n2-offset-primary-n2-touching-fid.webp"/>

!!! tip "The N045 Nozzle Tip Is Smaller"
    Because the N045 nozzle tip is smaller than the N08, you'll see more of the gold fiducial around the tip.

    Try to center the nozzle tip so the visible gold around it is as even as possible on all sides.

## Accept the Calibration

### Step 3: Save the Nozzle Position

* Look at the N045 nozzle tip's position on the primary fiducial from multiple angles, like from the front and sides. {color=green}
* Make sure the visible gold around the nozzle tip is evenly distributed to confirm that it is centered. {color=green}
* Once **N2 is precisely centered over the primary fiducial**, return to the Issues & Solutions task. {color=green}
* Click **Accept** to save the nozzle's calibrated position. {color=green}
  <img src="images/n2-offset-primary--accept-button.webp"/>

!!! info "What Does This Calibration Do?"
    This records the position of nozzle N2 relative to the primary fiducial, establishing its position relative to the top camera.

## Complete the Calibration

### Step 4: Refresh Issues & Solutions

* Confirm the `Nozzle N2 offsets for the primary fiducial` calibration task is marked **Solved**. {color=green}
  <img src="images/n2-offset-primary-solved.webp"/>
* Click **Find Issues & Solutions** to refresh the task list. {color=blue}
  <img src="images/n2-offset-primary-find-i-and-s.webp"/>

### Next Steps

!!! success "Nozzle N2 Calibration Complete"
    Both nozzle positions have now been calibrated using their respective fiducial references.
  <img src="../../preflight/connect-cameras/images/step-complete.webp"/>

Next, we'll calibrate the **bottom camera position**, which will allow OpenPnP to accurately locate the nozzle tips and inspect components.

<a href="../bottom-cam-pos/" class="next-step">Calibrate Bottom Camera Position →</a>
