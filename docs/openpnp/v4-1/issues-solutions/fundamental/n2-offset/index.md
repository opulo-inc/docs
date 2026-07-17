# Nozzle N2 offsets for the primary fiducial

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">N1 Primary Offsets</div>
  <div class="progress-step progress-complete">N1 Secondary Offsets</div>
  <div class="progress-step progress-current">N2 Primary Offsets</div>
  <div class="progress-step">Bottom Camera Calibration</div>
  <div class="progress-step">Precise Offsets</div>
  <div class="progress-step">Camera Settling</div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Nozzle N2 offsets for the primary fiducial.

<div class="solution-label">
Solution
</div>

Move the nozzle N2 to the primary calibration fiducial and capture its offsets.

</div>

<img src="../images/task-05-n2-offset-primary-fid.webp" width="100%">

---

## What This Step Does

This step measures the position of **Nozzle N2 relative to the top camera**.

By capturing the center of the primary fiducial using the nozzle tip, OpenPnP learns how the second nozzle is positioned relative to the camera.

This allows the LumenPnP to accurately place parts using either nozzle.

---

## Select Nozzle N2

1. In the **Machine Controls** panel, change the selected nozzle to **N2**.
2. Once selected, the jog controls will move Nozzle N2 instead of Nozzle N1.

<img src="images/issues-5-machine-controls-select-n2.webp" width="50%">

---

## Move Nozzle N2 Over the Primary Fiducial

1. Once you get to this offset, OpenPnP is smart enough to know that we are needing to jog the Nozzle N2, and automatically selects it for us.
2. Use the **Machine Controls** to jog **Nozzle N2** over the primary calibration fiducial.
3. Use smaller jog increments as you approach the center of the fiducial.

---

## Center the Nozzle on the Fiducial

Position the nozzle tip directly over the center of the primary fiducial.

<img src="images/issues-5-n2-touching-primary-fid.webp" width="70%">

This will help you precisely align the nozzle.

This is a very important calibration. It is worth taking the time to make sure it is precise.

---

## Capture the Offset

Once the nozzle is centered over the fiducial, click:

<img src="../primary-cal-fid-pos/images/accept-button.webp" width="13%">

OpenPnP will record the offset for **Nozzle N2**.

---

With both nozzle offsets captured, OpenPnP now understands how the nozzles relate to the top camera.

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
All nozzle offsets have been calibrated. Now lets set the bottom camera position.
</div>

<a href="../bottom-cam-pos/" class="next-step">Bottom Camera Calibration</a>

</div>