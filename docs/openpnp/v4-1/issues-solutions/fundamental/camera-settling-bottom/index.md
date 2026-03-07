# Use an adaptive (bottom) camera settling method

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">Nozzle Offsets</div>
  <div class="progress-step progress-complete">Bottom Camera Calibration</div>
  <div class="progress-step progress-complete">Backlash</div>
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

Now that you've completed the precise nozzle tip offset calibrations, you're done with the initial Issues and Solutions Setup. Do not do any other I&S Steps until we properly validate the FTP Board. We want to ensure that we are "building on solid ground" before adding additional things.

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">Nozzle Offsets</div>
  <div class="progress-step progress-complete">Bottom Camera Calibration</div>
  <div class="progress-step progress-complete">Backlash</div>
  <div class="progress-step progress-complete">Precise Offset N1</div>
  <div class="progress-step progress-complete">Precise Offset N2</div>
  <div class="progress-step progress-complete">Camera Settling</div>
</div>

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
You have completed the fundamental calibration Steps! Now, we need to validate that the machine is properly calibrated and placing parts in a controlled environment. We'll use the FTP board to accomplish this.
</div>

<a href="../../../controlled-validation-test/introduction/" class="next-step">Validation Test →</a>

</div>