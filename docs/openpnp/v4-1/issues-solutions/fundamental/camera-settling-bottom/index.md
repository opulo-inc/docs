# Use an adaptive (bottom) camera settling method

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">Nozzle Offsets</div>
  <div class="progress-step progress-complete">Bottom Camera Calibration</div>
  <div class="progress-step progress-complete">Precise Offset N1</div>
  <div class="progress-step progress-complete">Precise Offset N2</div>
  <div class="progress-step progress-current">Camera Settling</div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Use an adaptive camera settling method (Bottom Camera).

<div class="solution-label">
Solution
</div>

Set a suitable camera settling method automatically.

</div>

<img src="../images/task-12-adaptive-camera-settling-bottom.webp" width="100%">

---

## What This Step Does

When the machine moves, small vibrations can cause the camera image to shift slightly before stabilizing.

Adaptive settling allows OpenPnP to automatically determine when the camera image has stabilized before capturing an image.

This improves detection accuracy and helps prevent blurry or inconsistent vision results.

---

## Enable Adaptive Settling

<img src="../primary-cal-fid-pos/images/accept-button.webp" width="13%">

Click accept to apply the recommended configuration.

OpenPnP will enable **adaptive camera settling** for the top camera.

No manual adjustments are required.

---

## Complete the Calibration

Once the process finishes and the issue is marked as **Solved**, click:

<img src="../primary-cal-fid-pos/images/find-issues-and-solutions-button.webp" width="20%">

---

## Calibration Complete

Now that you've completed the precise nozzle tip offset calibrations, you are done with the initial Issues and Solutions Setup. Do not do any other I&S Steps until you properly validate the FTP Board by placing components accurately on it. The FTP board gives you a known good position file and PCB to use before using your own position files and PCBs, which gives you a known working state to validate the machines calibration. Before validating the calibration with the FTP board, **we need to confirm your homing is set up properly after calibration has been completed.**

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">Nozzle Offsets</div>
  <div class="progress-step progress-complete">Bottom Camera Calibration</div>
  <div class="progress-step progress-complete">Precise Offset N1</div>
  <div class="progress-step progress-complete">Precise Offset N2</div>
  <div class="progress-step progress-complete">Camera Settling</div>
</div>

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
You have completed the fundamental calibration steps! Next, we'll verify and fine tune the homing process to ensure it performs correctly whenever the machine is homed. After that, we'll use the FTP Board to validate that the machine is properly calibrated and can accurately place components in a controlled environment.
</div>

<a href="../../../prepare-for-homing" class="next-step">Prepare for Homing →</a>

</div>