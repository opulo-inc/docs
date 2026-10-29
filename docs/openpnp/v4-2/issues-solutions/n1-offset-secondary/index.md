---
zoduki: true
---

# Nozzle N1 offsets for the secondary fiducial

## Position Nozzle N1

### Step 1: Select the **Nozzle N1 offsets for the secondary fiducial** Calibration Task

For this task, we'll precisely align **nozzle N1** with the **secondary fiducial**, similar to what we did with the primary fiducial in the previous step.

* After clicking **Find Issues & Solutions** in the previous step, locate and select the task for calibrating **Nozzle N1 offsets for secondary fiducial**. {color=blue}
   <img src="../../../v4-1/issues-solutions/fundamental/images/task-10-calibrate-precise-nozzle-n2.webp"/>

### Step 2: Align N1 with the Secondary Fiducial

* In **Machine Controls**, **Nozzle N1 - N08 (Head: H1)** should already be selected from the dropdown below the camera feeds, as OpenPnP automatically selects the correct nozzle needed for the current task.
* Before moving the nozzle, press the **P (Park) button** between the Z-Axis Jog Controls to raise the nozzles to a safe height. Alternatively, use the Z-Axis Jog Controls to ensure both nozzles are clear of any potential collisions. {color=yellow}
   <img src="images/park-nozzles.webp"/>
* When you get the nozzle tip roughly over the secondary fiducial, carefully lower the nozzle using the **Z-Axis Jog Controls** to better judge its position. {color=green}
    <img src="images/n1-offset-secondary-jog-controls.webp"/>
* Use the distance slider for smaller jog distances as you approach the fiducial for precise alignment. {color=blue}
    <img src="images/n1-offset-secondary-distance-slider.webp"/>
* Keep adjusting the jog controls for X, Y, and Z until the nozzle tip is centered on the secondary fiducial and making contact with it. {color=purple}
* Make sure to look at the nozzle tip's position on the secondary fiducial from multiple angles, like from the front and sides. {color=purple}
    <img src="images/n1-offset-secondary-nozzle-touching-fid.webp"/>

!!! tip "Take Your Time with Alignment"
    Check the nozzle tip's position from multiple angles to make sure it is centered on the secondary fiducial.

## Accept the Calibration

### Step 3: Save the Nozzle Position

* Once **N1 is precisely centered over, and touching, the secondary fiducial**, return to the Issues & Solutions task. {color=green}
* Click **Accept** to save the nozzle's calibrated position. {color=green}
   <img src="images/n1-offset-secondary-accept-button.webp"/>

!!! info "What Does This Calibration Do?"
    This records the position of nozzle N1 relative to the secondary fiducial, providing an additional reference for calibration.

## Complete the Calibration

### Step 4: Refresh Issues & Solutions

* Confirm the `Nozzle N1 offsets for the secondary fiducial` calibration task is marked **Solved**. {color=green}
   <img src="images/n1-offset-secondary-solved.webp"/>
* Click **Find Issues & Solutions** to refresh the task list. {color=blue}
   <img src="images/n1-offset-secondary-refresh-i-and-s.webp"/>

### Next Steps

!!! success "Nozzle N1 Secondary Fiducial Calibration Complete"
    Nozzle N1 has now been aligned with both the primary and secondary fiducials.
   <img src="../../preflight/connect-cameras/images/step-complete.webp"/>

Next, we'll calibrate **Nozzle N2**, which has the **N045 nozzle tip** installed, using the **primary fiducial**.

<a href="../n2-offset-primary/" class="next-step">Calibrate Nozzle N2 Offset for Primary Fiducial →</a>
