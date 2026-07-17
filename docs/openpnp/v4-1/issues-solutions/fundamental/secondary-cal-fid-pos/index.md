# Secondary calibration fiducial position & initial camera calibration

<div class="progress-container">
  <div class="progress-step progress-complete">Primary Calibration</div>
  <div class="progress-step progress-current">Secondary Calibration</div>
  <div class="progress-step">Nozzle Offsets</div>
  <div class="progress-step">Bottom Camera Calibration</div>
  <div class="progress-step">Precise Offsets</div>
  <div class="progress-step">Camera Settling</div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Secondary calibration fiducial position and initial camera calibration

<div class="solution-label">
Solution
</div>

Move the camera over the secondary calibration fiducial and capture its position.

</div>

<img src="../images/task-02-secondary-cal-fid-position.webp" width="100%">

---

## What This Step Does

This step records the position of the **secondary fiducial** on the staging plate.

By measuring two known fiducials, OpenPnP can determine the **orientation and scale** of the staging plate relative to the machine.

---

## Move the Camera Over the Secondary Fiducial

Use the **Machine Controls** to jog the top camera over the secondary fiducial.

Use smaller jog increments as you approach the center.

<img src="../../../preflight/homing-prep/images/home-machine-controls.webp" width="40%">

---

## Detect the Fiducial

Adjust the **Feature Diameter** setting.

You can either:

* Manually adjust the diameter
* Enter a specific value
* Use the **automatic scan tool**

During the scan:

* A **dotted red circle** begins small
* <img src="images/issues-2-red-dotted-circle.webp" width="40%">
* The circle gradually grows larger
* When a circle is detected it becomes **solid green**
* <img src="images/issues-2-green-solid-circle.webp" width="40%">
* The system continues scanning for a better match until it completes and gives us it's **best guess** at the circle.
* Adjust the feature diameter up and down to confirm the circle is correct for the primary fiducial.

---

<div class="good-to-know">

<div class="good-to-know-title">
Good to Know
</div>

The automatic scan often finds a good starting point, but it can occasionally detect the wrong circle.

Always visually confirm the green circle matches the fiducial before continuing.

</div>

---

## Accept the Calibration

Once the circle correctly matches the fiducial, click:

<img src="../primary-cal-fid-pos/images/accept-button.webp" width="13%">

OpenPnP will briefly jog around the fiducial to calculate its position.

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
You've captured the secondary calibration fiducial's position, as well as the primary's. We'll continue by calibrating the Nozzle N1's offset to the top camera.
</div>

<a href="../n1-offset/" class="next-step">Nozzle N1 Offset →</a>

</div>