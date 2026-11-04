# FTP Test Board Validation

You've finished calibrating your LumenPnP! Before assembling your own PCB designs, we'll verify the machine's performance using the supplied **FTP test board**.

Think of this like printing a test page before an important document. It gives us a consistent way to check that the machine is picking, aligning, and placing components accurately.

!!! danger "Before proceeding"
    If you've just finished the OpenPnP calibration process, verify that your homing method is set to `ResetToFiducialLocation`.

    This allows OpenPnP to use the calibration fiducial as a reference when homing, which is important for accurate placement of small components such as 0402s.

![Opulo FTP test PCB](../../v4-1/controlled-validation-test/introduction/images/ftp-top.webp){ width="420" }

---


<style>
.ftp-comparison {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.2rem 0;
}

.ftp-card {
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid;
}

.ftp-card h3 {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
}

.ftp-card p {
  margin: 0.6rem 0 0;
}

.ftp-known {
  background: rgba(46, 160, 90, 0.07);
  border-color: rgba(46, 160, 90, 0.3);
}

.ftp-unknown {
  background: rgba(210, 150, 35, 0.07);
  border-color: rgba(210, 150, 35, 0.3);
}

.ftp-takeaway {
  background: rgba(80, 130, 200, 0.08);
  border-left: 4px solid #5082c8;
  padding: 1rem 1.2rem;
  border-radius: 6px;
  margin-top: 1rem;
}

@media (max-width: 650px) {
  .ftp-comparison {
    grid-template-columns: 1fr;
  }
}
</style>

## Why Use the FTP Test Board?

<div class="ftp-comparison">

  <div class="ftp-card ftp-known">
    <h3>✓ FTP Test Board</h3>
    <strong>Known, tested starting point</strong>
    <p>Its board layout, placement files, and components have already been tested and confirmed to work together.</p>
    <p>Starting with a proven setup allows us to focus on verifying the machine's calibration and placement accuracy.</p>
  </div>

  <div class="ftp-card ftp-unknown">
    <h3>Your Own PCB</h3>
    <strong>Introduces unknown variables</strong>
    <p>Your own PCB design introduces variables that haven't been validated yet, such as board origin, rotation, CAD export settings, and component definitions.</p>
    <p>If something goes wrong, it becomes harder to determine whether the issue is with calibration or the PCB setup.</p>
  </div>

</div>

<div class="ftp-takeaway">
  <strong>Start with what we know works.</strong>
  <p>By validating with the FTP board first, you can confirm your LumenPnP is working correctly before introducing the unknowns of your own designs.</p>
</div>

---

## What We'll Do

We'll prepare the FTP board, configure its placement data, and get the machine ready for a test job.

<div class="grid cards" markdown>

-   **1. Mount the FTP PCB**

    ---

    Install the mounting hardware, apply double-sided tape, and securely mount the board to the staging plates.

-   **2. Import the Board**

    ---

    Download the placement file, create the board in OpenPnP, and configure the components.

-   **3. Locate the Board**

    ---

    Set the board's position and height, then use its fiducials to refine alignment.

-   **4. Prepare the Job**

    ---

    Configure the remaining placements and save the job for the upcoming test.

</div>

!!! info "What's included?"

    You'll use the supplied FTP PCB and test components along with the placement file provided in this guide.

    No solder paste is required. We'll use double-sided tape to hold the test components in place.

---

## What Does a Successful Test Look Like?

Once the FTP job is running, we'll check that the machine can consistently pick and accurately place components.

<div class="grid cards" markdown>

-   **Accurate Positioning**

    ---

    Components land on their intended pads without noticeable offset.

-   **Correct Orientation**

    ---

    Components are properly centered and rotated during placement.

-   **Repeatable Results**

    ---

    The machine consistently places components in the correct locations.

</div>

!!! tip "Why validate now?"
    If something isn't working correctly, it's much easier to troubleshoot with a known test board than with a custom PCB.

    We'll use the results to identify anything that may need further adjustment before moving on to your own designs.

---

## After Validation

Once the FTP test job is successful, you'll have a verified starting point for assembling your own PCBs.

You'll be ready to import your own board designs, load their placement files, and begin setting up your own components and feeders.

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
Let's prepare the FTP board and configure it in OpenPnP.
</div>

<a href="../validation/board-validation/" class="next-step">FTP Board Setup →</a>

</div>
