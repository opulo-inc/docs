# Board Validation

<div class="progress-container">
  <div class="progress-step progress-current">FTP Board Prep</div>
  <div class="progress-step">Feeder Setup</div>
  <div class="progress-step">Job Validation</div>
</div>

---

The first step in starting the FTP PCB is physically mounting the FTP PCB onto the LumenPnP's staging plates.

---

## Mounting the FTP PCB

1. **Loosely screw in the universal mounting components in the following locations on the staging plates**.
    * Static Board Mount positioned diagonally, screwed into B26
    * Dynamic Board Mount positioned vertically, screwed into D26
    * Dynamic Board Mount positioned horizontally, screwed into B28
    * Board Support placed in E29<br/><br/>
     ![Install the board mounting hardware](../../../v4/ftp/1-board-setup/images/ftp-mounting-positions.webp)
<br/><br/>

1. **Apply double-sided tape to the FTP PCB**.
    * Place four strips between the two white horizontal lines on the FTP board.
    * Avoid covering fiducial markers (used for calibration).
    * The tape holds the components onto the PCB without using solder paste, making testing easier.<br/><br/>
     ![Apply double-sided tape to the board](../../../v4/ftp/1-board-setup/images/Apply-tape-to-board.webp)
<br/><br/>

1. **Place the PCB board into the mounts**.
    * Place the FTP board in the board mounts and push them so that they're snug against the sides of the board.
    * The top edge of the board should line up with the ridge in the dynamic board mount's tab.
    * Gently press the board against the mounts while slightly bending back the dynamic mount tab. This allows the PCB to slip past the tabs hump to lock into place.
    * Once in place, the board should fit snugly with no noticeable movement or wiggle to speak of.<br/><br/>
     ![Insert the FTP board](../../../v4/ftp/1-board-setup/images/mountedftp.webp)
<br/><br/>

1. **Tighten the mounting hardware**.
    * Once the board is positioned correctly, tighten the mounts. You shouldn't be able to easily move the board except when pressing on the dynamic board mount tab.

---

## Importing the Position File

1. **Download the FTP board position file**.

<a href="https://github.com/opulo-inc/lumenpnp/releases/download/v4.1.0/ftp-top.pos" class="download-button">Download ftp-top.pos</a>

1. **Create a New Board in OpenPnP**.
    * Navigate to the `Boards` tab.
    * Click the green "plus" icon (+) and select "Create New Board."<br/><br/>
     ![Job Tab](../../../v4/ftp/1-board-setup/images/create-new-board.webp)<br/><br/>
    * When the save window pops up, save it as `ftp.board.xml` on your computer<br/><br/>
     ![save board](../../../v4/ftp/1-board-setup/images/save-as-ftp.webp)
<br/><br/>

1. **Import the Position data**.
    * From the "Boards" tab, select the newly created board and click `File > Import Placements > KiCAD .pos`<br/><br/>
     ![Start importing the board](../../../v4/ftp/1-board-setup/images/import-from-boards-tab.webp)<br/><br/>
    * Select the `ftp-top.pos` file you downloaded earlier as the "**Top File (.pos)**".
    * Enable the `Assign Parts` checkbox.
    * Enable the `Create Missing Parts` checkbox.
    * Click `Import` to load component placements.\<3> <br/><br/>
     ![Fill out the board import dialog](../../../v4/ftp/1-board-setup/images/Board-import-dialog.webp)
<br/><br/>

1. **Set Part Height**.
    * We need to tell OpenPnP how tall the part is so it can take that into consideration when picking that part.
    * In the `Parts` tab, find `R_0603_1608_Metric-R_Small`.
    * Find the `Height` column and change the height value from `0.0` to `0.5`mm by double-clicking the cell.
    * Failing to set a part height will cause an error to pop up when trying to pick a part, so ensure you apply and save your changes after you are done. <br/><br/>
     ![Set the part height](../../../v4/ftp/1-board-setup/images/set-height.webp)
<br/><br/>

1. **Save your job file**.
    * Go to `File > Save Job As` and save your FTP job.
    * A pop-up window will appear asking if you want to save your changes to the ftp.board.xml. Select `Yes`.<br/><br/>
     ![Save Job As](../../../v4/ftp/1-board-setup/images/Save-job-as.webp)
<br/><br/>

---

## Finding the FTP Board's Location

Next, OpenPnP needs to know exactly where the board is. We will find and set the physical location of the FTP board.

1. **Add the board to the job**.
    * Navigate to the `Job` tab in the top-right pane.<br/><br/>
     ![Switch to the Job Tab](../../../v4/ftp/1-board-setup/images/Job-tab.webp)<br/><br/>
    * Click the green "plus" icon (+)
    * Select "**Existing board**" and choose the previously created board, named ftp.board.xml.
    * Click `OK` to add ftp.board.xml to the **Job** tab.
<br/><br/>

1. **Identify Fiducial Markers**.
    * In the bottom-right pane, you'll see the `Placements` panel. Locate the fiducials, `FID1`, `FID2`, and `FID3`, within there. You can sort the list by `Part` to find them easily.
    * Change their Type from `Placement` to `Fiducial` so OpenPnP recognizes them as reference points adn not actual components.<br/><br/>
     ![Find each of the board fiducial markers](../../../v4/ftp/1-board-setup/images/Select-board-fiducials.webp)
     ![Switch each fiducial component to fiducial type](../../../v4/ftp/1-board-setup/images/Switch-to-fiducial-type.webp)
<br/><br/>

1. **Home the LumenPnP**.
    * Level the nozzles to prevent collisions before homing.
    * Perform a homing of the LumenPnP to ensure that fiducial detection and nozzle tip calibration finish successfully for the `N1` and `N2` nozzles without errors.
<br/><br/>

1. **Set the Board’s Origin**.
    * Move the top camera so that it's centered on the bottom-left corner of the PCB.<br/><br/>
     ![Set the XY coordinates of your board](../../../v4/ftp/1-board-setup/images/capture-ftp-position.webp)<br/><br/>
    * Select the **board** in the `Job` tab and click `Capture Camera Position` to save the current camera position and set the board's origin point.
<br/><br/>

1. **Set the Board’s Height**.
    * Jog the N1 Nozzle so that it's just barely touching the top surface of the FTP PCB. 
    * Enter the current Z position (visible in the green bar in the bottom right of the UI) into the board's `Z position` field.
    * In Machine Controls, click the letter `P` between the Z up/down arrows to “**Park**” the nozzle at a safe height to prevent unwanted collisions.<br/><br/>
     ![Set the Z coordinates of your board](../../../v4/ftp/1-board-setup/images/Set-board-location-z.webp)
<br/><br/>

1. **Run a Fiducial Scan**.
    * Click on the `Fiducial Scan` button to automatically align the board. The machine will move to the fiducial locations and use the camera to identify the center of the fiducial. Then, it calculates and adjusts for any angular offset.<br/><br/>
     ![Automatically set board location](../../../v4/ftp/1-board-setup/images/Auto-check-board-fiducials.webp)<br/><br/>
    * If the fiducial check fails for any reason, check out our instructions for adjusting the [PCB fiducial vision pipeline](../../../v4/vision-pipeline-adjustment/3-pcb-fiducial-pipeline.md).
<br/><br/>

1. **Verify Alignment**.
    * To confirm that the fiducial calibration was successful, select any placement in the `Placements` table and select the `jog camera to position` button. If the center of the camera is perfectly centered on the footprint, your fiducial calibration was successful.<br/><br/>
     ![position cam to fid](../../../v4/ftp/1-board-setup/images/Position-camera-to-fiducial.webp)
<br/><br/>

---

## Disable the LED components in job

Disabling components on a board is a helpful feature in OpenPnP for DNP (Do Not Populate) parts, alternate parts, or other irregularities. We'll disable the LEDs in this job as an example.

1. **Steps to Disable Components**.
    * Click on the first placement in the "Job" tab with the LED part assigned to it.<br/><br/>
     ![first led](../../../v4/ftp/1-board-setup/images/select-first-led.webp)<br/><br/>
    * Scroll down and find the last placement with the LED part assigned to it. Hold SHIFT and select the last LED placement to highlight all of them.<br/><br/>
     ![last led](../../../v4/ftp/1-board-setup/images/select-last-led.webp)<br/><br/>
<br/><br/>

1. **Disable the LEDs**.
    * Right click the selected parts, and choose `Set Enabled > Disabled`.
    * These parts will no longer be populated in the job.<br/><br/>
     ![disable](../../../v4/ftp/1-board-setup/images/disable-led.webp)
<br/><br/>

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
Now that the doublesided tape has been applied, the mounting hardware installed, and the FTP board has been mounted ot the staging plate, we're ready to se up a feeder to pick from.
</div>

<a href="../choose-your-feeder/" class="next-step">Feeder Prep →</a>

</div>