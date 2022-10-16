---
title: "Backlash Compensation"
linkTitle: "Backlash Compensation"
weight: 81
type: docs
description: >
  Calibrating Backlash Compensation
---

Now we can have OpenPnP run its automatic backlash compensation routine to make all head movements more accurate. Read the OpenPnP docs page about this step [here](https://github.com/openpnp/openpnp/wiki/Calibration-Solutions#calibrating-backlash-compensation).

1. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}
  
3. Click on `Axes > ReferenceControlerAxisX`.
  {{< container-image path="images/x-axis-tab.png" alt="Select the x-axis" >}}

4. Select the `Backlash Compensation` tab.
  {{< container-image path="images/backlash-compensation-x.png" alt="Select the backlash compensation tab" >}}

2. Next, click the `Calibrate now` button. The machine will go through a long routine (between 5-15 minutes) where it measures the machine's backlash, and determines the best settings to account for it.

3. When it's done, you'll see the output data from the calibration. We suggest selecting `OneSidedPositioning` for the Compensation Method, but experiment with the different options to see which gives you the best results.
  {{< container-image path="images/Screen Shot 2022-05-18 at 3.32.55 PM.png" alt="" >}}

4. Perform steps 1 - 3 but with the Y axis instead.

## Next Steps

Next is [Automatic Toolchanger Calibration.]({{< relref "auto-toolchanger" >}})
