# Nozzle N1 offsets for the primary fiducial

<div class="progress-container">
  <div class="progress-step progress-complete">Fiducial Calibrations</div>
  <div class="progress-step progress-current">N1 Primary Offsets</div>
  <div class="progress-step">N1 Secondary Offsets</div>
  <div class="progress-step">N2 Primary Offsets</div>
  <div class="progress-step">Bottom Camera Calibration</div>
  <div class="progress-step">Backlash</div>
  <div class="progress-step">Precise Offsets</div>
  <div class="progress-step">Camera Settling</div>
</div>

---

<div class="issue-solution">

<div class="issue-label">
Issue
</div>

Nozzle N1 offsets for the primary fiducial.

<div class="solution-label">
Solution
</div>

Move the nozzle N1 to the primary calibration fiducial and capture its offsets.

</div>

---

## What This Step Does

This step measures the position of **Nozzle N1 relative to the top camera**.

By capturing the center of the primary fiducial using the nozzle, OpenPnP learns how the nozzle is positioned relative to the camera.

This relationship allows the machine to accurately place parts later.

---

## Move Nozzle N1 Over the Primary Fiducial

1. Use the **Machine Controls** to move **Nozzle N1** over the primary calibration fiducial.
2. Make sure **N1 is the selected nozzle** in the Machine Controls panel.
3. Use smaller jog increments as you approach the center of the fiducial.

---

## Center the Nozzle on the Fiducial

1. Position the nozzle tip directly over the center of the primary fiducial.
2. Use smaller movement increments such as:
    * **1 mm**
    * **0.1 mm**
    * **0.01 mm**

This will help you precisely align the nozzle.

* <img src="../../../../v4/calibration/6-nozzle-offset/images/05-nozzle-tip-n045-touching-homing-fid-center.webp" width="60%">

This is a very important calibration. It is worth taking the time to make sure it is precise.

<div class="pro-tip">

<div class="pro-tip-title">
Record your Z Height Coordinates
</div>

Keep note of the Z height  when the nozzle is touching the primary fiducial. <div>Use the green DRO (Digital Read Out) that displays the nozzles current coordinates.</div> <img src="images/issues-3-dro.webp" width="40%"><div> It is located in the very bottom right corner of OpenPnP.<div> Keep record of that Z height. You'll need it during the bottom camera calibration.

</div>

</div>

</div>

---

<div class="good-to-know">

<div class="good-to-know-title">
Good to Know
</div>

The nozzle tip itself will obscure the fiducial when centered.

Align the nozzle so the fiducial appears evenly visible around the tip by looking from the front and the side.

</div>

---

## Capture the Offset

Once the nozzle is centered over the fiducial, click:

<img src="../primary-cal-fid-pos/images/accept-button.webp" width="13%">

OpenPnP will record the nozzle offset relative to the camera.

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
The top camera to nozzle tip offset has been calibrated for the primary fiducial. Next, let's calibrate the Secondary fiducial with nozzle N1.
</div>

<a href="../n1-offset-secondary/" class="next-step">N1 Secondary Offset →</a>

</div>