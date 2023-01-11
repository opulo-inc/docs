---
title: "Backlash Compensation"
linkTitle: "Backlash Compensation"
weight: 81
type: docs
description: >
  Calibrating Backlash Compensation
---

Semi-assembled (v3) LumenPnP machines should have only a limited amount of backlash in each axis and the default machine configuration in OpenPnP will typically account for it. This step is optional, and only necessary if you are still having issues with backlash. Read the OpenPnP docs page about automatic backlash compensation [here](https://github.com/openpnp/openpnp/wiki/Calibration-Solutions#calibrating-backlash-compensation).

## Set Up Acceleration Control

1. Click on the `Machine Setup` tab in the top right pane.
  ![](images/Machine-Setup-Tab-3.png)

2. Click on the "Expand" checkbox if necessary.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

3. Select `GcodeDriver GcodeDriver` from the list.
  ![Select the gcode driver](images/gcode-driver.png)

4. Switch to the `gcode` tab.
  ![Select the gcode gcode-tab](images/gcode-tab.png)

5. Select `MOVE_TO_COMMAND` in the setting drop-down.
  ![Select the move_to_command option](images/move-to-command.png)

6. Paste the following into the large text box:
  
    ```
    {Acceleration:M204 S%.2f}
    G1 {X:X%.4f} {Y:Y%.4f} {Z:Z%.4f} {A:A%.4f} {B:B%.4f} {FeedRate:F%.2f} ; move to target
    ```
  ![Replace the move-to command](images/new-move-to-command.png)

7. Click `Apply` to save your changes.
  ![save the move-to command](images/apply-move-to-command.png)

1. Switch to the `Driver Settings` tab.
  ![switch to driver settings tab](images/driver-settings-tab.png)

1. Change the Motion Control Type to `ConstantAcceleration`. Note that you may want to change this back to `ToolpathFeedRate` when you're done running the backlash calibration.
  ![switch to constant acceleration](images/constant-acceleration.png)

1.  Click `Apply` to save your changes.
  ![save the driver settings](images/save-driver-settings-changes.png)
  
## Running The Calibration

11. Click on the `Machine Setup` tab in the top right pane.
  ![](images/Machine-Setup-Tab-3.png)

12. Click on the "Expand" if necessary.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)
  
13. Click on `Axes > ReferenceControllerAxisX`.
  ![Select the x-axis](images/x-axis-tab.png)

14. Select the `Backlash Compensation` tab.
  ![Select the backlash compensation tab](images/backlash-compensation-x.png)

15. Next, click the `Calibrate now` button. The machine will go through a long routine (between 5-15 minutes) where it measures the machine's backlash, and determines the best settings to account for it.

16. When it's done, you'll see the output data from the calibration. We suggest selecting `OneSidedPositioning` for the Compensation Method, but experiment with the different options to see which gives you the best results.
  ![results of the backlash calibration](images/backlash results.png)

17. Restart from step 10 with the Y axis selected.

## Next Steps

Next is [Automatic Toolchanger Calibration.](../auto-toolchanger/index.md)
