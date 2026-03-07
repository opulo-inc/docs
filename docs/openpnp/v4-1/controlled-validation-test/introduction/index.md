# Validation Calibration Introduction

<div class="progress-container">
  <div class="progress-step progress-current">FTP Board Prep</div>
  <div class="progress-step">Feeder Setup</div>
  <div class="progress-step">Job Validation</div>
</div>

---

## Validate Using the FTP Test Board First

Before assembling your own design, we will run a validation calibration test using our supplied FTP test board, components, and placement files.

Think of It Like a Printer Test Page. Before printing an important document, you run a test page. The FTP test board serves the same purpose.

### Why Not Use Your Own Board First?

**Your personal design introduces additional variables**:

* Custom board origin
* Rotation differences
* Position file formatting
* Layer alignment
* Part library definitions

**If something appears incorrect, it becomes unclear whether the issue is**:

* Machine calibration
* File formatting
* CAD export settings
* Part definitions

### What the FTP Test Board Does

The FTP test board is a known-good reference.

**We provide**:

* The physical PCB
* The board file
* The position file
* components

This allows us to isolate machine behavior from design variables.

**If the test board places correctly, you know**:

* Your calibration is correct
* Vision alignment is working
* Offsets are accurate
* Backlash compensation is functioning<br><br/>

---

## Validation Success

**After successfully validating the FTP test job**:

* Components align cleanly with the proper pads
* Parts are centered and rotated correctly
* Placement is repeatable

If anything looks off during this stage, we want to address it now while variables are controlled.<br><br/>

---

## After Validation

**Once the FTP test board is successful, you are ready to**:

* Import your own board
* Load your own position file
* Begin assembling your designs

The benefit of taking the time to do this is that you are no longer guessing, and are starting from a verified, calibrated point.<br><br/>

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
Let's start with preparing the FTP Board on the staging plate.
</div>

<a href="../board-validation/" class="next-step">FTP Board Prep →</a>

</div>