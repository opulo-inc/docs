---
title: "Nozzle Offset Calibration"
linkTitle: "Nozzle Offset Calibration"
weight: 60
type: docs
description: >
  Calibrating the offset of the nozzle from the top camera
---

Now we need to tell OpenPnP how far the nozzles are away from the center point of the top camera. There are multiple strategies you can use to calculate this. One way is to use OpenPnP's built in Offset Wizard. You can read the OpenPnP docs about this step [here][def].

{{< alert color="info" title="Tip" >}}
  OpenPnP has some new methods of calibration using a secondary fiducial at a different Z height, and a small piece of paper. If you'd like to explore this method of calibration, you can find the OpenPnP docs about this process [here](https://github.com/openpnp/openpnp/wiki/Calibration-Solutions#calibrating-precision-camera-to-nozzle-offsets). This process requires [making and installing a calibration rig](https://github.com/openpnp/openpnp/wiki/Vision-Solutions#calibration-rig), [3D Units per Pixel calibration](https://github.com/openpnp/openpnp/wiki/3D-Units-per-Pixel), and [Advanced Camera Calibration](https://github.com/openpnp/openpnp/wiki/Advanced-Camera-Calibration).
{{< /alert >}}

1. Install an N045 nozzle on the left toolhead.
  {{< container-image path="images/N045-nozzle-installed.png" alt="Install the N045 nozzle" >}}

2. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

3. Click on `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`
  {{< container-image path="images/select-nozzle-N1.png" alt="Open the Nozzle N1 settings" >}}

4. Click on the `Offset Wizard` tab.
  {{< container-image path="images/offset-wizard-n1.png" alt="Offset wizard settings" >}}
  
5. Confirm that the `Include Z?` checkbox is unchecked.
  {{< container-image path="images/include-z-unchecked-n1.png" alt="do not use the include z checkbox" >}}

6. Read the instructions that OpenPnP provides in this window. This guide will use the homing fiducial as the starting point, instead of using putty or flour. But those are valid strategies as well if you'd prefer them.

7. Select the `Nozzle: N1 - N045 (Head:H1)` from the machine controls dropdown.
  {{< container-image path="images/select-n1-machine-control.png" alt="Select nozzle from machine control dropdown" >}}
<!-- TODO: we need to turn on one-sided positioning by default, my jogging was not precise -->
8. Jog the nozzle so that it is just barely touching the datum board, and perfectly centered over the homing fiducial. We recommend looking for the shiny edge of the gold fiducial poking out from under the nozzle tip to determine if you've centered it correctly.
  {{< container-image path="images/jog-controls-nozzle-offset.png" alt="Jog controls" >}}
  {{< container-image path="images/PXL_20220519_181926227.jpg" alt="Nozzle almost touching homing fiducial" >}}
  {{< container-image path="images/PXL_20220519_181952658.jpg" alt="Nozzle touching the homing fiducial" >}}

9. Click `Store nozzle mark position`. Do not navigate away from the `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1` tab while running the wizard.
  {{< container-image path="images/store-nozzle-position.png" alt="Store the nozzle's position" >}}

10. Raise the nozzle off the datum board.
  {{< container-image path="images/z-axis-jog.png" alt="raise the z-axis" >}}

11. Jog the X and Y axes to bring the top camera directly centered over the homing fiducial. Again, do not switch away from the Offset Wizard tab.
  {{< container-image path="images/jog-xy-nozzle-offset.png" alt="bring the top camera over the homing fiducial" >}}

12. After centering the homing fiducial in the top camera view, click `Calculate nozzle offset`.
  {{< container-image path="images/calculate-nozzle-offset.png" alt="calculate the nozzle offset" >}}

13. Click `Apply` to save the nozzle offset change.
  {{< container-image path="images/apply-nozzle-offset.png" alt="click the apply button" >}}

14. If you have a v3, semi-assembled LumenPnP, start again from step 1 to calibrate your right nozzle. Place the nozzle on your right toolhead, and use tab `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2`.

## Next Steps

Next is [Bottom Camera Position.]({{< relref "bottom-camera-position" >}})

[def]: https://github.com/openpnp/openpnp/wiki/Setup-and-Calibration%3A-Nozzle-Setup#head-offsets
