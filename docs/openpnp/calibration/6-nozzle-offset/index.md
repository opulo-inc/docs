---
title: "Nozzle Offset Calibration"
linkTitle: "Nozzle Offset Calibration"
weight: 60
type: docs
description: >
  Calibrating the offset of the nozzle from the top camera
---

Now we need to tell OpenPnP how far the nozzles are away from the center point of the top camera. There are multiple strategies you can use to calculate this. One way is to use OpenPnP's built in Offset Wizard. You can read the OpenPnP docs about this step [here](https://github.com/openpnp/openpnp/wiki/Setup-and-Calibration_Nozzle-Setup). See also our [setup video](https://youtube.com/watch?v=CSnczX6VJ7M&si=EnSIkaIECMiOmarE&t=1600).

!!! info "Tip"
    OpenPnP has some new methods of calibration using a secondary fiducial at a different Z height, and a small piece of paper. If you'd like to explore this method of calibration, you can find the OpenPnP docs about this process [here](https://github.com/openpnp/openpnp/wiki/Calibration-Solutions#calibrating-precision-camera-to-nozzle-offsets). This process requires [making and installing a calibration rig](https://github.com/openpnp/openpnp/wiki/Vision-Solutions#calibration-rig), [3D Units per Pixel calibration](https://github.com/openpnp/openpnp/wiki/3D-Units-per-Pixel), and [Advanced Camera Calibration](https://github.com/openpnp/openpnp/wiki/Advanced-Camera-Calibration).

1. Install an N045 nozzle on the left toolhead.
  ![Install the N045 nozzle](images/N045-nozzle-installed.png)

2. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

3. Click on the "Expand" checkbox to open all of the features about your machine.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

4. Click on `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`
  ![Open the Nozzle N1 settings](images/select-nozzle-N1.png)

5. Click on the `Offset Wizard` tab.
  ![Offset wizard settings](images/offset-wizard-n1.png)
  
6. Confirm that the `Include Z?` checkbox is unchecked.
  ![do not use the include z checkbox](images/include-z-unchecked-n1.png)

7. Read the instructions that OpenPnP provides in this window. This guide will use the homing fiducial as the starting point, instead of using putty or flour. But those are valid strategies as well if you'd prefer them.

8. Select the `Nozzle: N1 - N045 (Head:H1)` from the machine controls dropdown.
  ![Select nozzle from machine control dropdown](images/select-n1-machine-control.png)

9. Jog the nozzle so that it is just barely touching the datum board, and perfectly centered over the homing fiducial. We recommend looking for the shiny edge of the gold fiducial poking out from under the nozzle tip to determine if you've centered it correctly.
  ![Jog controls](images/jog-controls-nozzle-offset.png)
  ![Nozzle almost touching homing fiducial](images/PXL_20220519_181926227.jpg)
  ![Nozzle touching the homing fiducial](images/PXL_20220519_181952658.jpg)

10. Click `Store nozzle mark position`. Do not navigate away from the `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1` tab while running the wizard.
  ![Store the nozzle's position](images/store-nozzle-position.png)

11. Raise the nozzle off the datum board.
  ![raise the z-axis](images/z-axis-jog.png)

12. Jog the X and Y axes to bring the top camera directly centered over the homing fiducial. Again, do not switch away from the Offset Wizard tab.
  ![bring the top camera over the homing fiducial](images/jog-xy-nozzle-offset.png)

13. After centering the homing fiducial in the top camera view, click `Calculate nozzle offset`.
  ![calculate the nozzle offset](images/calculate-nozzle-offset.png)

14. Click `Apply` to save the nozzle offset change.
  ![click the apply button](images/apply-nozzle-offset.png)

15. If you have a v3 semi-assembled LumenPnP machine, start again from step 1 to calibrate your right nozzle. Place the nozzle on your right toolhead, and use `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N2` section.

## Next Steps

Next is [Bottom Camera Position](../7-bottom-camera-position/index.md).
