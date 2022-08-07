---
title: "Installing the Feeders"
linkTitle: "Installing the Feeders"
weight: 2
type: docs
description: >
  Securing the FTP Board
---

The FTP PCB has two components that we'll be placing: Resistors and LEDs. Each will need its own feeder so that the LumenPnP can pick each type of component. We'll be using the printed tray feeders.

## Attach Feeders

1. Use four M3x10 screws and four M3 nuts to secure the printed tray feeder through onto the staging plate using holes: XX YY ZZ CC.

2. For each component, cut a strip of component tape off the reel about 125mm long.

3. Slide the Resistors into the left-most tray feeder, and the LEDs the adjacent tray.

4. In OpenPnP, connect to your LumenPnP and home it.

## Import Board

5. Download the FTP board design here.
6. Go to `File > Save Job As` and save your FTP job.
  {{< container-image path="images/Save-job-as.png" alt="Save Job As" >}}

7. Navigate to the `Job` tab in the top right.
  {{< container-image path="images/Job-tab.png" alt="Job Tab" >}}

7. Click that "Add" Icon button to add a new board and select `New Board`. Save the board wherever you'd like near the job file.
  {{< container-image path="images/Add-new-board.png" alt="Add a new board to the job" >}}

8. Click on the newly-created board in the list to select it.
  {{< container-image path="images/Select-board.png" alt="Select the board to import the design" >}}

9. Go to `File > Import Board > KiCAD .pos`
  {{< container-image path="images/Import-board-file-menu.png" alt="Start importing the board" >}}
10. In the Import popup:
    1. Select the `ftp-top.pos` file you downloaded earlier as the Top File
    2. Enable the `Assign Parts` checkbox.
    3. Enable the `Create Missing Parts` checkbox.
    4. Click `Import`
  {{< container-image path="images/Board-import-dialog.png" alt="Fill out the board import dialog" >}}

## Add Feeders

11. Navigate to the `Feeders` tab in the top-right pane.
  {{< container-image path="images/Feeders-tab.png" alt="Switch to the feeders list" >}}
12. Click on the "Add Feeder" icon button.
  {{< container-image path="images/Add-feeder-button.png" alt="Start adding a new feeder" >}}
13. Select `ReferenceTrayFeeder` and click `Accept`.
  {{< container-image path="images/Select-referenceTrayFeeder.png" alt="Select and add a new reference tray feeder" >}}
14. In the lower-right panel, you'll be in the `Configuration` tab. Change the `Part` to be `R_0603_1608Metric-R_Small`.
  {{< container-image path="images/Change-feeder-part.png" alt="Assign the resistor to the tray feeder" >}}
15. Set the `Y` `Offset` to `-4`. This is the space between components on the feeder.
  {{< container-image path="images/Set-feeder-offset.png" alt="Set feeder offset" >}}
16. Set the `Y` `Tray Count` to `30`. This is the number of components available on the feeder before it needs to be manually moved forward.
  {{< container-image path="images/Set-tray-count.png" alt="Set the feeder tray count" >}}
17. Set the Pick location to: `X=45`, `Y=175`, `Z=20` as a starting point.
  {{< container-image path="images/Set-left-pick-location.png" alt="Set the starting location for the left feeder" >}}
16. Click on the "Position Camera" icon button to move the top camera roughly over the left feeder.
  {{< container-image path="images/Position-camera-over-feeder.png" alt="Move the top camera over the left feeder's approximate location" >}}
17. Position the center of the top camera feed over the center of the top-most slot holding a resistor in the tray. You can drag the reticle in the camera feed, or use the jog buttons.
  {{< container-image path="images/Position-over-feeder-start-rough.png" alt="Manually move closer to the correct feeder location" >}}
18. Zoom in on the camera feed and *precisely* position the center of the reticle over the center of the slot holding the resistor. The resistor itself may not be perfectly centered, that is fine.
  {{< container-image path="images/Position-over-feeder-start-precise.png" alt="Manually move closer to the correct feeder location" >}}
19. Click the "Capture Camera Location" icon button to save the XY position of the start of the feeder.
  {{< container-image path="images/Capture-camera-position-feeder.png" alt="Save the current camera position as the start place for the feeder" >}}
20. Click `Apply` to save the feeder settings
  {{< container-image path="images/Save-feeder-settings.png" alt="Save feeder settings" >}}
21. Click the `Enable` checkbox in the feeder list.
  {{< container-image path="images/Enable-feeder.png" alt="Enable the feeder so that it is used" >}}
22. Do the same procedure again for the LED feeder. You'll assign the part `LED_0603_1608Metric-LED_Small` to the new feeder.

## Installing the N045 Nozzle

23. Install a N045 nozzle on your toolhead.
24. Go to the `Machine Setup` tab in OpenPnP.
25. Navigate to `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
26. In the lower-right pane, switch to the `Nozzle Tips` tab.
27. For row `N045`, check both the `Compatible` and `Loaded` checkboxes.
28. Go to the `Packages` tab in the top-right pane.
29. Select `LED_0603_1608Metric` from the list.
30. In the lower-right pane, you'll be in the `Nozzle Tips` tab. Click the `Compatible` on the `N045` row.
29. Similarly, select `R_0603_1608Metric` from the Package list.
30. And click the `Compatible` on the `N045` row.
31. Under the bottom-left `Machine Controls` pane, select `Nozzle: N1 - N045 (Head:H1)` to enable the left toolhead.

## Fine-tuning feeder height

31. Click on the "Position Nozzle" icon button to bring the nozzle over the feeder.
32. Use the Jog controls to lower the Z axis until the nozzle is touching the surface of the plastic tape cover.
33. Click on the "Capture Nozzle" icon button to save the new Z height of the feeder.
34. Jog the XY gantry away from the feeder.
35. Remove the tape cover from the feeder.
36. Pick the component from the feeder. If the component is picked up properly, your Z-height is correct. If not, you should
    1. Lower the Z height of the feeder by `0.1mm`
    2. Press Apply to save the change
    3. Home the machine
    4. Try picking a component from the feeder again.
37. Recycle the component you've successfully picked up
38. Copy the final Z height to the other feeder
39. Test picking a component from the other feeder
40. Save the new Z height for both feeders.
