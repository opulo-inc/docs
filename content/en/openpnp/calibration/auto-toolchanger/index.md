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
  {{< container-image path="images/inserted-nozzles.png" alt="Nozzles inserted into the nozzle holder" >}}

2. Apply some lubricant to the end of your nozzle holder with the lubrication packet included with your nozzles. This is important for repeatably fully attaching the nozzles without damaging the rubber O-rings around the holder.
  {{< container-image path="images/apply-super-lube.png" alt="applying super lube to the nozzle holder" >}}

3. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

4. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

5. Select the nozzle you're working with. For example: `Nozzle Tips > ReferenceNozzleTipN045`
  {{< container-image path="images/select-nozzle-tip.png" alt="Select nozzle tip" >}}

6. Select the `Tool Changer` tab.
  {{< container-image path="images/tool-changer-tab.png" alt="the tool changer tab" >}}

## Capturing Positions

Now we can start capturing positions. Automatic nozzle changing works by replaying four position commands either forward or backward to load or unload a nozzle tip, respectively. We're going to start with the last position, because it's easiest for getting our Z height correct. Note that the instructions below are for the N045 nozzle tip, but you should use whichever tip you're setting up.

{{< alert color="warning" title="Warning" >}}
Be careful not to crash your nozzle tip or toolhead into any of the components mounted on your staging plate, especially the nozzle holder. Be especially careful if you have high amounts of backlash compensation, which can cause your tool head to move in unexpected directions when jogging to eliminate backlash. Be aware of your machine's Safe Z axis settings as well, as they can cause the tool head to raise between moves to avoid crashing, which may actually be undesirable here.
{{< /alert >}}

7. Install the N045 nozzle onto the tool head by hand.
  {{< container-image path="images/N045-nozzle-installed.png" alt="Install the N045 nozzle" >}}

8. Jog the nozzle until it is directly in front of the N045 slot in the tool changer.
  {{< container-image path="images/toolhead-position-approx.png" alt="nozzle positioned in front of slot" >}}

9. Adjust the Z height until it's clear it'll slide into the rack.
  {{< container-image path="images/tool-z-position.png" alt="nozzle aligned with changer" >}}

10. Double-check the toolhead is aligned with the slot in the Y axis so that only a X movement would be necessary to slot it into place. It may be a good idea to test-fit the nozzle into the slot by jogging the X axis only.

11. Capture the nozzle position for the `Last Location`.
  {{< container-image path="images/last-tool-position.png" alt="set the last tool position" >}}

12. Move the nozzle into the slot by jogging the X axis in 0.1mm increments. Try to ensure there's no lateral strain on the nozzle holder in the Y axis. Continue until the nozzle is fully slotted into the nozzle holder.
  {{< container-image path="images/position-3-nozzle.png" alt="the nozzle seated into the slot" >}}

13. Capture the `Third Location` nozzle position.
  {{< container-image path="images/3rd-tool-position.png" alt="set the 3rd tool position" >}}

14. The next position is for making sure that the nozzle tip is completely seated on the CP40 holder during insertion. Jog the Z axis down approximately two millimeters. The spring in the CP40 holder will take up these few millimeters to avoid damage to the tool head. You may find that a larger or smaller movement gets the nozzle tip seated completely, so feel free to experiment.
  {{< container-image path="images/2nd-position-nozzle.png" alt="the nozzle pressed into the toolhead" >}}

15. Capture the `Second Location` nozzle position.
  {{< container-image path="images/2nd-tool-position.png" alt="set the 2rd tool position" >}}

16. Now jog the Z axis up 30 millimeters. This is the clearance position where the nozzle holder is getting ready for the plunge.
  {{< container-image path="images/position-1-tool-change.png" alt="toolhead positioned over the nozzle" >}}

17. Capture the `First Location` nozzle position.
  {{< container-image path="images/1st-tool-position.png" alt="the nozzle pressed into the toolhead" >}}

18. You can now play through the positions by clicking on the "move nozzle to position" buttons in order. Tune any values in the fields as necessary to ensure you get a clean and straight insertion.
  {{< container-image path="images/replay-tool-change.png" alt="buttons for playing through the tool change" >}}

19. Apply the changes to the tool changing positions.
  {{< container-image path="images/apply-tool-changing-positions.png" alt="save the tool changing positions" >}}

20. Repeat the above steps for each of the nozzles you're using. See also the ["Cloning Settings" section in the OpenPnP docs](https://github.com/openpnp/openpnp/wiki/Nozzle-Tip-Changer#cloning-settings).

## Enable Automatic Tool Changing

Now that your positions are set, you can enable automatic tool changing in OpenPnP.

21. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

22. Click on the "Expand" checkbox if necessary.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

23. Select `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
  {{< container-image path="images/reference-nozzle-1.png" alt="Select reference nozzle 1" >}}

24. Switch to the `Tool Changer` tab.
  {{< container-image path="images/nozzle-tool-changer-tab.png" alt="nozzle tool changer tab" >}}

25. Check the `Automatic Tool Changer Enabled?` box.
  {{< container-image path="images/enable-auto-tool-change.png" alt="enable auto tool change" >}}

26. Click `Apply` to save your changes.
  {{< container-image path="images/apply-tool-changer-n1.png" alt="save changes" >}}

27. Select `Heads > ReferenceHead H2 > Nozzles > ReferenceNozzle N2`.
  {{< container-image path="images/reference-nozzle-2.png" alt="Select reference nozzle 2" >}}

28. Switch to the `Tool Changer` tab.
  {{< container-image path="images/nozzle-tool-changer-tab-n2.png" alt="nozzle tool changer tab" >}}

29. Check the `Automatic Tool Changer Enabled?` box.
  {{< container-image path="images/enable-auto-tool-change-n2.png" alt="enable auto tool change" >}}

30. Click `Apply` to save your changes.
  {{< container-image path="images/apply-tool-changer-n2.png" alt="save changes" >}}

## Next Steps

Next is [the FTP.]({{< relref "ftp" >}})
