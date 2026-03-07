# Use an adaptive (top) camera settling method

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

Use an adaptive camera settling method. (Top Camera)

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

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
With the Top camera Settling calculated, we'll move on to calibrating the adaptive camera settling method for the bottom camera.
</div>

<a href="../camera-settling-bottom/" class="next-step">Bottom Camera Settling→</a>

</div>
