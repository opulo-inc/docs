# Issues & Solutions Calibration Overview

## **Follow This Guide Alongside Issues & Solutions**

Issues & Solutions explains the steps generically, but it does not always include every preparation step required for the LumenPnP. Some pages may ask you to change another setting before continuing, such as reducing the machine speed to 50% for the precise nozzle calibrations. Read the complete guide page in our docs before clicking `Accept` in Issues & Solutions.

You should also get into the habit of leveling the nozzle tips before jogging across the machine during calibration. Leveling the nozzles only means you're raising them to a safe height and helps prevent collisions with the feeders, datum board, discard been or PCB.

---

## What Does the Issues & Solutions Calibration Actually Do?

Calibration is not a single adjustment. It is a series of measurements that teaches OpenPnP how the LumenPnP, cameras, nozzles, and physical reference points relate to each other.

During calibration, OpenPnP will learn:

* Where the primary and secondary calibration fiducials are located
* Where each nozzle is located relative to the top camera
* Where the bottom camera is located
* How each nozzle tip behaves as it rotates
* Which physical reference should be used when homing the machine

Each measurement builds on the ones completed before it. An inaccurate measurement early in the process can affect the calibration steps that follow it.

<div class="good-to-know">
<div class="good-to-know-title">
Good to Know
</div>

Take your time when centering a camera, nozzle tip, or detected circle.

If a step is completed with an incorrect position or detection, reopen and repeat it before continuing whenever possible.

In rare cases, an incorrect calibration may require reloading the original configuration files and beginning the calibration process again.

</div>

---

## Why We Run Only Specific Calibration Steps

OpenPnP supports many different types of pick-and-place machines. Because of this, Issues & Solutions may display tasks that are useful for other machines but are unnecessary for the LumenPnP.

The LumenPnP is designed and configured to use a specific calibration process. Complete only the tasks included in this guide.

### Understanding Issues & Solutions

Issues & Solutions displays three types of tasks:

* **Fundamental:** OpenPnP considers this part of its standard machine setup. Complete only the Fundamental tasks included in this guide.
* **Suggestion:** An optional change that OpenPnP believes may improve the configuration. Do not complete these unless this guide specifically directs you to.
* **Error:** A possible configuration or machine problem. Some errors may appear temporarily during setup, but errors involving connection, movement, homing, or vision should be investigated before continuing.

<img src="../../../v4-1/preflight/images/issues-and-solutions-severity.webp" width="15%" alt="Issues and Solutions severity types">

<div class="stop-if">
<div class="stop-if-title">
Follow Only the Steps in This Guide
</div>

Complete only the Issues & Solutions tasks specifically included in this guide.

Additional Suggestions may change machine settings or create calibration data that conflicts with the LumenPnP configuration.

If an error affects connection, movement, homing, or camera detection, stop and correct the problem before continuing.

</div>

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
Start Issues & Solutions (I&S)
</div>

<a href="../../issues-solutions/primary-cal-fid-pos/" class="next-step">Issues & Solutions →</a>

</div>