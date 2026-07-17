# Calibrate backlash compensation for axis x (Optional)

<div class="progress-container">
  <div class="progress-step progress-current">X Backlash </div>
  <div class="progress-step">Y Backlash </div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Calibrate backlash compensation for axis x.

<div class="solution-label">
Solution
</div>

Automatically calibrates the backlash compensation for x using the primary calibration fiducial.

</div>

<img src="../../fundamental/images/task-07-backlash-comp-x.webp" width="100%">

---

These steps are optional, but if you want to run this for X and Y, and you see improvements, please let us know at https://support.opulo.io

These steps can take up to 15 mins each to complete.

---

## What This Step Does

This step measures backlash in the X axis and configures OpenPnP's built in backlash compensation. The LumenPnP should rarely need this, as it uses one-sided positioning to minimize the effects of backlash during normal operation.

Only perform this step when troubleshooting positioning accuracy issues. If backlash compensation produces a noticeable improvement, it may indicate loose belts or another mechanical issue that should be corrected.

---

## Start the Backlash Calibration

<img src="../../fundamental/primary-cal-fid-pos/images/accept-button.webp" width="13%"> 

Click accept to begin the calibration.

OpenPnP will automatically move the machine to the correct position and begin measuring backlash in the **X axis**.

The machine will move back and forth in small increments and at different speeds while measuring the position of the fiducial.

The less stable your table is, the longer this step could take to complete.

Once the backlash compensation for X is completed, OpenPnP will calculate the backlash value automatically.

---

<div class="good-to-know">

<div class="good-to-know-title">
Good to Know
</div>

<div>
During this step the machine may move repeatedly in small increments along the X axis.
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

<img src="../../fundamental/primary-cal-fid-pos/images/find-issues-and-solutions-button.webp" width="20%">

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
Now that backlash compensation has been calibrated for the X-Axis, let's calibrate backlash compensation for the Y-Axis.
</div>

<a href="../y-backlash/" class="next-step">Y-Axis Backlash →</a>

</div>