# Calibrate backlash compensation for axis y

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-complete">Nozzle Offsets</div>
  <div class="progress-step progress-complete">Bottom Camera Calibration</div>
  <div class="progress-step progress-complete">X Backlash</div>
  <div class="progress-step progress-current">Y Backlash</div>
  <div class="progress-step">Precise Offsets</div>
  <div class="progress-step">Camera Settling</div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Calibrate backlash compensation for axis y.

<div class="solution-label">
Solution
</div>

Automatically calibrates the backlash compensation for y using the primary calibration fiducial.

</div>

---

## What This Step Does

This step measures backlash in the **Y axis** and allows OpenPnP to compensate for it automatically.

Once configured, this helps improve positioning accuracy when the machine changes direction.

---

## Start the Backlash Calibration

<img src="../primary-cal-fid-pos/images/accept-button.webp" width="13%"> 

Click accept to begin the calibration.

OpenPnP will automatically move the machine to the correct position and begin measuring backlash in the **Y axis**.

The machine will move back and forth in small increments and at different speeds while measuring the position of the fiducial.

The less stable your table is, the longer this step could take to complete.

Once the backlash compensation for Y is completed, OpenPnP will calculate the backlash value automatically.

---

<div class="good-to-know"><div class="good-to-know-title">
Good to Know
</div>

<div>
During this step the machine may move repeatedly in small increments along the Y axis.
</div>

<div>
This is normal and allows OpenPnP to measure the amount of mechanical play in the system.
</div>

<div>
Be aware that this can take a long time to complete.
</div>

</div>

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
Backlash Compensation has been calibrated and we can move on to Precise top camera to nozzle tip offset calibration.
</div>

<a href="../n1-offset-precise/" class="next-step">Precise N1 Offset →</a>

</div>