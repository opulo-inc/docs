---
title: "Automatic Toolchanger Calibration"
linkTitle: "Automatic Toolchanger Calibration"
weight: 90
type: docs
description: >
  Calibrating automatic toolchanger movements
---

Throughout the course of a job, you will find that you need multiple different size nozzle tips to pick different sized components. By default OpenPnP will pause a job and wait for you to manually change a nozzle tip, but it can be more efficient to set up automatic tool changing. Perform the following optional steps for each of the nozzle tips you'll be switching between. We recommend reading the [OpenPnP Wiki page](https://github.com/openpnp/openpnp/wiki/Nozzle-Tip-Changer) about this as well.

1. Insert the labeled nozzle tips into the holder in their respectively labeled slots.
  ![Nozzle Tips inserted into holder](images/inserted-nozzles.png)

2. Apply some lubricant to the end of your nozzle holder with the lubrication packet included with your nozzles. This is important for repeatably fully attaching the nozzles without damaging the rubber O-rings around the holder.
  ![Apply Lubricant to holder](images/apply-super-lube.png)

3. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

4. Click on the "Expand" checkbox to open all of the features about your machine.
  ![Machine Setup Tab expanded](images/Expand-Checkbox-3.png)

5. Select the nozzle you're working with. For example: `Nozzle Tips > ReferenceNozzleTipN045`
  ![Nozzle Tip information](images/select-nozzle-tip.png)

6. Select the `Tool Changer` tab.
  ![Nozzle Changer Tab](images/tool-changer-tab.png)

## Capturing Positions

Now we can start capturing positions. Automatic nozzle changing works by replaying four position commands either forward or backward to load or unload a nozzle tip, respectively. We're going to start with the last position, because it's easiest for getting our Z height correct. Note that the instructions below are for the N045 nozzle tip, but you should use whichever tip you're setting up.

!!! danger "Warning"
    Be careful not to crash your nozzle tip or toolhead into any of the components mounted on your staging plate, especially the nozzle holder. Be especially careful if you have high amounts of backlash compensation, which can cause your tool head to move in unexpected directions when jogging to eliminate backlash. Be aware of your machine's Safe Z axis settings as well, as they can cause the tool head to raise between moves to avoid crashing, which may actually be undesirable here.

1. Install the N045 nozzle onto the tool head by hand.
  ![Nozzle Tip installed](images/N045-nozzle-installed.png)

2. Jog the nozzle until it is directly in front of the N045 slot in the tool changer.
  ![Toolhead in front of tool changer](images/toolhead-position-approx.png)

3. Adjust the Z height until it's clear it'll slide into the rack.
  ![Nozzle tip aligned at correct Z height](images/tool-z-position.png)

4. Double-check the toolhead is aligned with the slot in the Y axis so that only a X movement would be necessary to slot it into place. It may be a good idea to test-fit the nozzle into the slot by jogging the X axis only.

5. Capture the nozzle position for the `Last Location`.
  ![OpenPnP capture nozzle position](images/last-tool-position.png)

6. Move the nozzle into the slot by jogging the X axis in 0.1mm increments. Try to ensure there's no lateral strain on the nozzle holder in the Y axis. Continue until the nozzle is fully slotted into the nozzle holder.
  ![Nozzle tip inserted into changer](images/position-3-nozzle.png)

7. Capture the `Third Location` nozzle position.
  ![OpenPnP capture nozzle position](images/3rd-tool-position.png)

8. The next position is for making sure that the nozzle tip is completely seated on the CP40 holder during insertion. Jog the Z axis down approximately two millimeters. The spring in the CP40 holder will take up these few millimeters to avoid damage to the tool head. You may find that a larger or smaller movement gets the nozzle tip seated completely, so feel free to experiment.
  ![Nozzle Tip in second position](images/2nd-position-nozzle.png)

9. Capture the `Second Location` nozzle position.
  ![OpenPnP capture nozzle position](images/2nd-tool-position.png)

10. Now jog the Z axis up 30 millimeters. This is the clearance position where the nozzle holder is getting ready for the plunge.
  ![Nozzle tip removed](images/position-1-tool-change.png)

11. Capture the `First Location` nozzle position.
  ![OpenPnP capture nozzle position](images/1st-tool-position.png)

12. You can now play through the positions by clicking on the "move nozzle to position" buttons in order. Tune any values in the fields as necessary to ensure you get a clean and straight insertion.
  ![Replay tool change motions](images/replay-tool-change.png)

13. Apply the changes to the tool changing positions.
  ![Apply changes](images/apply-tool-changing-positions.png)

14. Repeat the above steps for each of the nozzles you're using. See also the ["Cloning Settings" section in the OpenPnP docs](https://github.com/openpnp/openpnp/wiki/Nozzle-Tip-Changer#cloning-settings).

## Enable Automatic Tool Changing

Now that your positions are set, you can enable automatic tool changing in OpenPnP.

1. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

2. Click on the "Expand" checkbox if necessary.
  ![Machine Setup Tab](images/Expand-Checkbox-3.png)

3. Select `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
  ![Machine Setup > ReferenceNozzle N1](images/reference-nozzle-1.png)

4. Switch to the `Tool Changer` tab.
  ![Tool Changer Tab](images/nozzle-tool-changer-tab.png)

5. Check the `Automatic Tool Changer Enabled?` box.
  ![Enable Tool Changer](images/enable-auto-tool-change.png)

6. Click `Apply` to save your changes.
  ![Apply Changes](images/apply-tool-changer-n1.png)

7. Select `Heads > ReferenceHead H2 > Nozzles > ReferenceNozzle N2`.
  ![Machine Setup > ReferenceNozzle N2](images/reference-nozzle-2.png)

8. Switch to the `Tool Changer` tab.
  ![Tool Changer Tab](images/nozzle-tool-changer-tab-n2.png)

9. Check the `Automatic Tool Changer Enabled?` box.
  ![Enable Tool Changer](images/enable-auto-tool-change-n2.png)

10. Click `Apply` to save your changes.
  ![Apply Settings](images/apply-tool-changer-n2.png)

## Next Steps

Next is [the FTP](../../ftp/index.md).
