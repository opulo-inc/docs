---
title: "Backlash Compensation"
linkTitle: "Backlash Compensation"
weight: 81
type: docs
description: >
  Calibrating Backlash Compensation
---

Semi-assembled (v3) LumenPnP machines should have only a limited amount of backlash in each axis and the default machine configuration in OpenPnP should account for it. This step is optional, and only necessary if you are still having issues with backlash. Read the OpenPnP docs page about this step [here](https://github.com/openpnp/openpnp/wiki/Calibration-Solutions#calibrating-backlash-compensation).

## Set Up Acceleration Control

1. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

3. Select `GcodeDriver GcodeDriver` from the list.
  {{< container-image path="images/gcode-driver.png" alt="Select the gcode driver" >}}

4. Switch to the `gcode` tab.
  {{< container-image path="images/gcode-tab.png" alt="Select the gcode gcode-tab" >}}

5. Select `MOVE_TO_COMMAND` in the setting drop-down.
  {{< container-image path="images/move-to-command.png" alt="Select the move_to_command option" >}}

5. Paste the following into the large text box:

  ```gcode
  {Acceleration:M204 S%.2f}
  G1 {X:X%.4f} {Y:Y%.4f} {Z:Z%.4f} {A:A%.4f} {B:B%.4f} {FeedRate:F%.2f} ; move to target
  ```

  {{< container-image path="images/new-move-to-command.png" alt="Replace the move-to command" >}}

6. Click `Apply` to save your changes.
  {{< container-image path="images/apply-move-to-command.png" alt="save the move-to command" >}}

7. Switch to the `Driver Settings` tab.
  {{< container-image path="images/driver-settings-tab.png" alt="switch to driver settings tab" >}}

8. Change the Motion Control Type to `ConstantAcceleration`. Note that you may want to change this back to `ToolpathFeedRate` when you're done running the backlash calibration.
  {{< container-image path="images/constant-acceleration.png" alt="switch to constant acceleration" >}}

9. Click `Apply` to save your changes.
  {{< container-image path="images/save-driver-settings-changes.png" alt="save the driver settings" >}}
  
## Running The Calibration

10. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

11. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}
  
12. Click on `Axes > ReferenceControlerAxisX`.
  {{< container-image path="images/x-axis-tab.png" alt="Select the x-axis" >}}

13. Select the `Backlash Compensation` tab.
  {{< container-image path="images/backlash-compensation-x.png" alt="Select the backlash compensation tab" >}}

14. Next, click the `Calibrate now` button. The machine will go through a long routine (between 5-15 minutes) where it measures the machine's backlash, and determines the best settings to account for it.

15. When it's done, you'll see the output data from the calibration. We suggest selecting `OneSidedPositioning` for the Compensation Method, but experiment with the different options to see which gives you the best results.
  {{< container-image path="images/backlash results.png" alt="results of the backlash calibration" >}}

16. Restart from step 10 with the Y axis instead.

## Next Steps

Next is [Automatic Toolchanger Calibration.]({{< relref "auto-toolchanger" >}})
