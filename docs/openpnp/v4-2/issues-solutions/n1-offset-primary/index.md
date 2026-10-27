---
zoduki: true
---

# Nozzle N1 Offset Calibration

## Position Nozzle N1

### Step 1: Select the **Nozzle N1 offsets for the primary fiducial** Calibration Task

For this task, we'll precisely align nozzle N1 with the primary fiducial to establish its position relative to the top camera. This will walk you through centering and lowering the nozzle tip onto the primary fiducial. In the end, you want the nozzle tip to be touching the primary fiducial.

* After clicking **Find Issues & Solutions** in the previous step, locate and select the task for calibrating **Nozzle N1 offsets for the primary fiducial**. {color=blue}
* Confirm that the **N08 nozzle tip** is installed on **N1 (left nozzle)**. {color=blue}
    <img src="../../../v4-1/issues-solutions/fundamental/images/task-03-n1-offset-primary-fid.webp"/>

### Step 2: Align N1 with the Primary Fiducial

* In **Machine Controls**, use the **X/Y Jog Controls** to position the N08 nozzle tip directly on the **primary fiducial** so they are touching. **Nozzle N1** should already be selected. {color=green}
* When you get the nozzle tip roughly over the primary fiducial, carefully lower the nozzle using the **Z-Axis Jog Controls** to better judge its position. {color=green}
    <img src="images/n1-offset-primary-jog-controls.webp"/>
* Use the distance slider for smaller jog distances as you approach the fiducial for precise alignment. {color=blue}
    <img src="images/n1-offset-primary-distance-slider.webp"/>
* Keep adjusting the jog controls for X, Y, and Z until the nozzle tip is centered on, and touching, the primary fiducial. {color=purple}
* Make sure to look at the nozzle tips position from multiple angles. Making sure to look from a side angle helps ensure centering is correct. {color=purple}
    <img src="images/n1-offset-primary-center-nozzle-n1-on-fid.webp"/>

!!! tip "Take Your Time with Alignment"
    If needed, use your camera phone and its flash to assist in seeing the nozzle tip on the fiducial better. <br></br> 
    The more accurately you center the nozzle tip over the primary fiducial, the more accurate your nozzle positioning will be during the precise calibration tasks towards the end of calibration.

## Accept the Calibration

### Step 3: Save the Nozzle Position

* Once **N1 is precisely centered over the primary fiducial**, return to the Issues & Solutions task and click **Accept** to save the nozzle's calibrated position. {color=green}
* This step does not perform any movement and is completed once you click **Accept**.
    <img src="images/n1-offset-primary-click-accept.webp"/>

!!! info "What Does This Calibration Do?"
    This records the position of nozzle N1 relative to the top camera, allowing OpenPnP to accurately call the camera or nozzle tip to a location and they go to the same exact same spot

## Complete the Calibration

### Step 4: Refresh Issues & Solutions

* Confirm the **N1 offsets for the primary fiducial** task is marked **Solved**. {color=blue}
    <img src="images/n1-offset-primary-task-solved.webp"/>
* Click **Find Issues & Solutions** to refresh the task list.
    <img src="images/n1-offset-primary-find-i-and-s.webp"/>

### Next Steps

!!! success "Nozzle N1 Calibrated"
    The position of nozzle N1 has been recorded with the primary fiducial.

Next, we'll repeat this process for the **Secondary Fiducial**.
    <img src="../../preflight/connect-cameras/images/step-complete.webp"/>

<a href="../n1-offset-secondary/" class="next-step">Calibrate Nozzle N1 Offset with the Secondary Fiducial →</a>
