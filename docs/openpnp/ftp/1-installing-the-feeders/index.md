---
title: "Installing the Feeders"
linkTitle: "Installing the Feeders"
weight: 2
type: docs
description: >
 Getting the feeders ready for automatic picking
---

The FTP PCB has two different types of components that need to be placed: resistors and LEDs. Each will need its own feeder so that the LumenPnP can pick each type of component.

## Import Board

1. Download the FTP board design. It's in the `LumenPnP_PCBs.zip` artifact on the [latest major release.](https://github.com/opulo-inc/lumenpnp/releases/)

2. Navigate to the `Job` tab in the top right.
  ![Job Tab](images/Job-tab.png)

3. Click that "Add" Icon button to add a new board and select `New Board`. Save the board in the same directory as the job.
  ![Add a new board to the job](images/Add-new-board.png)

4. Click on the newly-created board in the list to select it.
  ![Select the board to import the design](images/Select-board.png)

5. Go to `File > Import Board > KiCAD .pos`
  ![Start importing the board](images/Import-board-file-menu.png)
6. In the Import popup:
       1. Select the `ftp-top.pos` file you downloaded earlier as the Top File
       2. Enable the `Assign Parts` checkbox.
       3. Enable the `Create Missing Parts` checkbox.
       4. Click `Import`

     ![Fill out the board import dialog](images/Board-import-dialog.png)

7. In the `Parts` tab on the top right, find the lines for the newly created components: `LED_0603_1608Metric-LED_Small` and `R_0603_1608_Metric-R_Small`. Set their Height values to `0.5`mm by double-clicking the cell.
  ![Set the part height](images/set-height.png)

8. Go to `File > Save Job As` and save your FTP job.
  ![Save Job As](images/Save-job-as.png)

## Installing the N045 Nozzle

1. Grease the nozzle holder before installing the N045 nozzle.
  ![Grease the nozzle holder before installing the N045 nozzle](images/Install-nozzle-grease.jpg)

2. Install your N045 nozzle onto the nozzle holder.
  ![Install the N045 nozzle](images/Install-nozzle-nozzle.jpg)

3. Wipe off any excess grease.
  ![Wipe excess grease from the nozzle holder](images/Install-nozzle-wipe.jpg)

4. Go to the `Machine Setup` tab in OpenPnP.
  ![Switch to the Machine Setup Tab](images/Machine-setup-tab.png)

5. Navigate to `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
  ![Select Nozzle N1](images/Reference-nozzle-n1.png)

6. In the lower-right pane, switch to the `Nozzle Tips` tab.
  ![Switch to the nozzle tips tab](images/Nozzle-tips-tab.png)

7. For row `N045`, check both the `Compatible` and `Loaded` checkboxes. If you haven't set up automatic nozzle changing, you will receive a popup saying that you're required to manually load the nozzle on the toolhead.
  ![Load Nozzle N045](images/Load-nozzle-n045.png)

8. Go to the `Packages` tab in the top-right pane.
  ![Switch to the Packages Tab](images/Packages-tab.png)

9. Select `LED_0603_1608Metric` from the list.
  ![Select the LED package](images/Select-led-package.png)

10. In the lower-right pane, you'll be in the `Nozzle Tips` tab. Click the `Compatible` on the `N045` row.
  ![Mark compatible with N045 nozzle](images/Select-led-nozzle-tips.png)

11. Similarly, select `R_0603_1608Metric` from the Package list.
  ![Select the resistor package](images/Select-resistor-package.png)

12. And click the `Compatible` checkbox on the `N045` row.
  ![Mark compatible with N045 nozzle](images/Select-resistor-nozzle-tips.png)

13. Under the bottom-left `Machine Controls` pane, select `Nozzle: N1 - N045 (Head:H1)` to enable the left toolhead.
  ![Select Nozzle N1](images/Enable-nozzle-n1.png)

## Attach Feeders

!!! Note "Powered Feeders"
    If you purchased any [8mm Photon Feeders](https://opulo.io/products/8mm-feeder) and would prefer to use them for your FTP, follow the steps for **[setting them up](../../../feeders/1-overview/feeder-overview.md)** now, and then you'll come back to this guide to finish preparing for the FTP by [setting up the board](../index.md).

1. Use two M3x10 button head screws and two M3 wingnuts to secure the printed tray feeder through onto the staging plate using holes: C15 and E15.
  ![Install the feeder to the staging plate](images/Feeder-installed-with-screws.jpg)

2. For each component, cut a strip of component tape off the reel about 125mm long.

3. Slide the Resistors into the left-most tray feeder, and the LEDs the adjacent tray.

4. In OpenPnP, connect to your LumenPnP and home it.
  ![Connect to your LumenPnP and home it](images/Connect-and-home.png)

## Add Feeders

1. Navigate to the `Feeders` tab in the top-right pane.
  ![Switch to the feeders list](images/Feeders-tab.png)

2. Click on the "Add Feeder" icon button.
  ![Start adding a new feeder](images/Add-feeder-button.png)

3. Select `ReferenceTrayFeeder` and click `Accept`.
  ![Select and add a new reference tray feeder](images/Select-referenceTrayFeeder.png)

4. In the lower-right panel, you'll be in the `Configuration` tab. Change the `Part` to be `R_0603_1608Metric-R_Small`.
  ![Assign the resistor to the tray feeder](images/Change-feeder-part.png)

5. Set the `Y` `Offset` to `-4`. This is the space between components on the tape.
  ![Set feeder offset](images/Set-feeder-offset.png)

6. Set the `Y` `Tray Count` to `30`. This is the number of components available on the feeder before it needs to be manually moved forward.
  ![Set the feeder tray count](images/Set-tray-count.png)

7. Set the Pick location to: `X=45`, `Y=175`, `Z=20` as a starting point.
  ![Set the starting location for the left feeder](images/Set-left-pick-location.png)

8. Click on the "Position Camera" icon button to move the top camera roughly over the left feeder.
  ![Move the top camera over the left feeder's approximate location](images/Position-camera-over-feeder.png)

9. Position the center of the top camera feed over the center of the top-most slot holding a resistor in the tray. You can drag the reticle in the camera feed, or use the jog buttons.
  ![Manually move closer to the correct feeder location](images/Position-over-feeder-start-rough.png)

10. Zoom in on the camera feed and *precisely* position the center of the reticle over the center of the slot holding the resistor. The resistor itself may not be perfectly centered, that is fine.
  ![Manually move closer to the correct feeder location](images/Position-over-feeder-start-precise.png)

11. Click the "Capture Camera Location" icon button to save the XY position of the start of the feeder.
  ![Save the current camera position as the start place for the feeder](images/Capture-camera-position-feeder.png)

12. Click `Apply` to save the feeder settings
  ![Save feeder settings](images/Save-feeder-settings.png)

13. Click the `Enable` checkbox in the feeder list.
  ![Enable the feeder so that it is used](images/Enable-feeder.png)

14. Do the same procedure again for the LED feeder. You'll assign the part `LED_0603_1608Metric-LED_Small` to the new feeder.

## Fine-tuning feeder height

1. Navigate to the `Feeders` tab in the top-right pane.
  ![Switch to the feeders list](images/Feeders-tab.png)

2. Click on the "Position Nozzle" icon button to bring the nozzle over the feeder.
  ![Position the nozzle over the feeder](images/Position-nozzle-over-feeder.png)

3. Use the Jog controls to lower the Z axis until the nozzle is touching the surface of the plastic tape cover.
  ![Use the jog controls to position the nozzle over the feeder](images/Z-jog-controls.png)
  ![Position the nozzle over the feeder](images/Nozzle-position-far.jpg)
  ![Position the nozzle over the feeder](images/Nozzle-position-close.jpg)

4. Click on the "Capture Nozzle" icon button to save the new Z height of the feeder.
  ![Save the nozzle position](images/Capture-nozzle-position-feeder.png)

5. Jog the XY gantry away from the feeder.
  ![Move the Tool Head away from the feeder](images/XY-jog-controls.png)

6. Remove the tape cover from the feeder.
7. Click the "Pick" icon button to pick a component from the feeder. If the component is picked up properly, your Z-height is correct. If not, you should:
  ![Pick from the feeder](images/Pick-from-feeder.png)
    1. Lower the Z height of the feeder by `0.1mm`
    2. Press Apply to save the change
    3. Home the machine
    4. Try picking a component from the feeder again.

8. After you've successfully picked a component, in the machine `Machine Controls` pane, switch to the `Special` Tab.
  ![Switch to the special tab](images/Special-tab.png)

9. Recycle the component you've successfully picked up
  ![Recycle the component you've picked up](images/Recycle-component.png)

10. Copy the final Z height, select the other feeder, paste it for the other feeder, and press `Apply`
  ![Apply the z height from the first feeder to the second one](images/Copy-and-paste-z-height.png)

11. Test picking a component from the other feeder
  ![Pick from the feeder](images/Pick-from-feeder.png)

## Next Steps

Next is [Setting Up The Board.](../2-setting-up-the-board/index.md)
