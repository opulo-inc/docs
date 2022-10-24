---
title: "Automatic Toolchanger Calibration"
linkTitle: "Automatic Toolchanger Calibration"
weight: 90
type: docs
description: >
  Calibrating automatic toolchanger movements
---

Throughout the course of a job, you will find that you need multiple different size nozzle tips to pick different sized parts. You can always have OpenPnP prompt you to do this manually, but there's a feature for automatic nozzle swapping that can just do it for you! In this optional step, we'll set it up. Perform the following steps for each of the nozzle tips you'd like to enable it for. We recommend reading the [OpenPnP Wiki page](https://github.com/openpnp/openpnp/wiki/Nozzle-Tip-Changer) about this as well.

1. Insert the labeled nozzle tips into the holder in their respective labeled slots.
  {{< container-image path="images/inserted-nozzles.png" alt="Nozzles inserted into the nozzle holder" >}}

2. Apply some lubricant to the end of your nozzle holder with the lubrication packet included with your nozzles. It helps to insert the nozzle holder into all of the nozzle tips multiple times in order to break in the rubber O-rings, and lubricate the inside of the nozzle tips.
  {{< container-image path="images/apply-super-lube.png" alt="applying super lube to the nozzle holder" >}}

3. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

3. Select the nozzle you're working with, ex: `Nozzle Tips > ReferenceNozzleTipN045`
  {{< container-image path="images/select-nozzle-tip.png" alt="Select nozzle tip" >}}

4. Select the `Tool Changer` tab.
  {{< container-image path="images/tool-changer-tab.png" alt="the tool changer tab" >}}

## Capturing Positions

Now we can start capturing positions. The way automatic nozzle changing works is by replaying four position commands either forward or backward, to either load or unload a nozzle tip, respectively. We're going to start with the last position, because it's easiest for getting our Z height correct.

5. Install the N045 nozzle onto the tool head
  {{< container-image path="images/N045-nozzle-installed.png" alt="Install the N045 nozzle" >}}

6. Jog the nozzle until it is directly in front of the N045 slot in the tool changer.
  {{< container-image path="images/toolhead-position-approx.png" alt="nozzle positioned in front of slot" >}}

7. Adjust the Z height until it's clear it'll slide into the rack.
  {{< container-image path="images/tool-z-position.png" alt="nozzle aligned with changer" >}}

8. Double-check the toolhead is in the Y axis so that only a X movement would be necessary to slot it into place.

9. Capture the nozzle position for the `Last Location`.
  {{< container-image path="images/last-tool-position.png" alt="set the last tool position" >}}

10. Move the nozzle into the slot by jogging the X axis only in 0.1mm increments. Now we're going to slowly jog the nozzle tip into the nozzle rack. The nozzle tip will fit completely into place. Try to ensure there's no lateral strain on the nozzle holder.
  {{< container-image path="images/position-3-nozzle.png" alt="the nozzle seated into the slot" >}}

11. Capture the `Third Location` nozzle position.
  {{< container-image path="images/3rd-tool-position.png" alt="set the 3rd tool position" >}}

12. The next position is for making sure that the nozzle tip is completely seated on the CP40 holder during insertion. Jog the Z axis down two millimeters. This is not a hard and fast value, if you find that a larger or smaller value gets the nozzle tip seated completely, feel free to use that value instead. The spring in the CP40 holder will take up these few millimeters.
  {{< container-image path="images/2nd-position-nozzle.png" alt="the nozzle pressed into the toolhead" >}}

13. Capture the `Second Location` nozzle position.
  {{< container-image path="images/2nd-tool-position.png" alt="set the 2rd tool position" >}}

14. Now jog the Z axis up 30 millimeters. This is the clearance position where the nozzle holder is getting ready for the plunge.
  {{< container-image path="images/position-1-tool-change.png" alt="toolhead positioned over the nozzle" >}}

15. Capture the `First Location` nozzle position.
  {{< container-image path="images/1st-tool-position.png" alt="the nozzle pressed into the toolhead" >}}

16. You can now play through the positions by clicking on the "move nozzle to position" buttons in order. Tune any values in the fields as necessary to ensure you get a clean and straight insertion.
  {{< container-image path="images/replay-tool-change.png" alt="buttons for playing through the tool change" >}}

17. Apply the changes to the tool changing positions.
  {{< container-image path="images/apply-tool-changing-positions.png" alt="save the tool changing positions" >}}

18. Repeat the above steps for each of the nozzles you're using. See also the ["Cloning Settings" section in the OpenPnP docs](https://github.com/openpnp/openpnp/wiki/Nozzle-Tip-Changer#cloning-settings).

## Enable Automatic Tool Changing

Now that your positions are set, you can enable automatic tool changing in OpenPnP.

19. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

20. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

21. Select `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`.
  {{< container-image path="images/reference-nozzle-1.png" alt="Select reference nozzle 1" >}}

22. Switch to the `Tool Changer` tab.
  {{< container-image path="images/nozzle-tool-changer-tab.png" alt="nozzle tool changer tab" >}}

23. Check the `Automatic Tool Changer Enabled?` box.
  {{< container-image path="images/enable-auto-tool-change.png" alt="enable auto tool change" >}}

24. Click `Apply` to save your changes.
  {{< container-image path="images/apply-tool-changer-n1.png" alt="save changes" >}}

25. Select `Heads > ReferenceHead H2 > Nozzles > ReferenceNozzle N2`.
  {{< container-image path="images/reference-nozzle-2.png" alt="Select reference nozzle 2" >}}

26. Switch to the `Tool Changer` tab.
  {{< container-image path="images/nozzle-tool-changer-tab-n2.png" alt="nozzle tool changer tab" >}}

27. Check the `Automatic Tool Changer Enabled?` box.
  {{< container-image path="images/enable-auto-tool-change-n2.png" alt="enable auto tool change" >}}

28. Click `Apply` to save your changes.
  {{< container-image path="images/apply-tool-changer-n2.png" alt="save changes" >}}
