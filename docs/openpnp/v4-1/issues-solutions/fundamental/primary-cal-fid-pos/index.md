# Primary calibration fiducial position & initial camera calibration

<div class="progress-container">
  <div class="progress-step progress-current">Primary Calibration</div>
  <div class="progress-step">Secondary Calibration</div>
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

Primary calibration fiducial position and initial camera calibration.

<div class="solution-label">
Solution
</div>

Move the camera over the primary calibration fiducial and capture its position.

</div>

<img src="../images/task-01-primary-cal-fid-position.webp" width="100%">

---

## Dismiss These Unneeded Steps

First, before starting the Issues and Solutions calibration, if you happen to see these unneeded steps, Do not complete them.

The unneeded steps are already set to what they should be for the LumenPnP with our configuration files you imported.

If you see these steps, make sure to dismiss them.

**Dynamic Safe Z for N1**

* If this pops up, dismiss this step and do not do anything on this page.
* After, click the “Find Issues $ Solutions” button to refresh the list

**Dynamic Safe Z for N2**

* If this pops up, dismiss this step and do not do anything on this page.
* After, click the “Find Issues $ Solutions” button to refresh the list

---

## What This Step Does

This step tells OpenPnP where the **primary fiducial** is located on the staging plate.  
This fiducial is also used later as the machine's **homing reference point**.

---

## Move the Camera Over the Fiducial

Use the **Machine Controls** to jog the top camera over the primary fiducial.

Use smaller jog increments as you approach the center.

<img src="../../../preflight/homing-prep/images/home-machine-controls.webp" width="40%">

---

## Detect the Fiducial

Adjust the **Feature Diameter** setting.

You can:

* Manually adjust the diameter
* Enter a value
* Use the **automatic scan**

During scanning:

* A **red dotted circle** grows larger
* <img src="images/issues-1-red-dotted-circle.webp" width="40%">
* If a circle is detected it becomes **solid green**
* <img src="images/issues-1-green-solid-circle.webp" width="40%">
* The system continues scanning for a better match until it completes and gives us it's **best guess** at the circle.
* Adjust the feature diameter up and down to confirm the circle is correct for the primary fiducial.

<div class="good-to-know">

<div class="good-to-know-title">
Good to Know
</div>

The automatic scan often finds a good starting point but it is not always perfect.  
Visually confirm the circle matches the fiducial before accepting.

</div>

---

## Accept the Calibration

Once the circle correctly matches the fiducial, click:

<img src="images/accept-button.webp" width="13%">

OpenPnP will move around the fiducial briefly to calculate its position.

---

## Complete the Calibration

Once the process finishes and the issue is marked as **Solved**, click:

<img src="images/find-issues-and-solutions-button.webp" width="20%">

This will refresh the Issues and Solutions list and move to the next calibration step.

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
You've captured the primary calibration fiducial's position. Now let's do the same for the secondary calibration fiducial's position.
</div>

<a href="../secondary-cal-fid-pos/" class="next-step">Capture Secondary Position →</a>

</div>