# Secondary calibration fiducial position & initial camera calibration

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">N1 Primary Offsets</div>
  <div class="progress-step progress-current">N1 Secondary Offsets</div>
  <div class="progress-step">N2 Primary Offsets</div>
  <div class="progress-step">Backlash</div>
  <div class="progress-step">Precise Offsets</div>
  <div class="progress-step">Camera Settling</div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Nozzle N1 offsets for the secondary fiducial.

<div class="solution-label">
Solution
</div>

Move the nozzle N1 to the secondary calibration fiducial and capture its offsets.

</div>

---

## What This Step Does

This step measures **Nozzle N1 relative to the secondary fiducial**.

Using both fiducials helps OpenPnP build a more accurate spatial model of the machine and staging plate.

---

<div class="stop-if">

<div class="stop-if-title">
If you can't find this step:
</div>

This step does not populate until you complete the Issues & Solutions step, `Secondary calibration fiducial position & initial camera calibration`

Once that is complete, clicking the "Find Issues & Solutions" button will auto-populate this task.
</div>

---

## Move Nozzle N1 Over the Secondary Fiducial

1. Use the **Machine Controls** jog controls to move **Nozzle N1** over the secondary calibration fiducial.
2. Make sure **N1 is selected** in the Machine Controls panel.
3. Use smaller jog increments as you approach the center.

---

## Center the Nozzle on the Fiducial

1. Align the nozzle tip directly over the center of the secondary fiducial.
2. Recommended jog increments for fine alignment:
    * **1 mm**
    * **0.1 mm**
    * **0.01 mm**
3. Position it so the fiducial appears evenly visible around the tip.

<img src="images/issues-4-n1-touching-secondary-fid.webp" width="70%">

---

## Capture the Offset

Once the nozzle is centered, click:

<img src="../primary-cal-fid-pos/images/accept-button.webp" width="13%">

OpenPnP will record the offset for **Nozzle N1** relative to the secondary fiducial.

---

## Complete the Calibration

Once the process finishes and the issue is marked as **Solved**, click:

<img src="../primary-cal-fid-pos/images/find-issues-and-solutions-button.webp" width="20%">

This will move to the next calibration step.

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
The top camera to nozzle tip offset has been calibrated on nozzle N1 for the primary and secondary fiducial. Let's continue by calibrating the nozzle N2 offset as well.
</div>

<a href="../n2-offset/" class="next-step">N2 Primary Offset →</a>

</div>