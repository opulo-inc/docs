---
title: "Connecting to Your Machine"
linkTitle: "Connecting to Your Machine"
weight: 9
type: docs
description: >
  Getting set up and connected to your LumenPnP using OpenPnP
---

Awesome! Now we've got OpenPnP installed on your computer, and we've got the default configuration loaded up. Our next step is getting connected to the machine and getting familiar with OpenPnP's UI.

1. Connect your LumenPnP to your computer using the included USB cable

2. Open OpenPnP on your computer. You should now see the OpenPnP UI:
  {{< container-image path="images/openpnp-ui.png" alt="OpenPnP's basic UI" >}}

## Com Port and Baud Rate

Before connecting to the LumenPnP, you need to set which USB port to use for communication in OpenPnP.

3. Click on the `Machine Setup` tab.
  {{< container-image path="images/Machine-Setup-Tab.png" alt="Selecting the Machine setup tab from the main screen" >}}

4. Click on the "Expand" checkbox to open all of the features.
  {{< container-image path="images/Expand-Checkbox.png" alt="Expanding the Machine Config options" >}}

5. Under `Drivers` click on `GcodeDriver GcodeDriver`. Below the list of machine settings you'll find the details of the GcodeDriver.
  {{< container-image path="images/SelectGcodeDriver.png" alt="Reviewing the GcodeDriver options" >}}
  
6. In the `Configuration` tab, check the `Baud` and `Port` settings.
   1. Set the `Baud` to `115200`
   2. On Windows, Set the `Port` to the option in the format: `COM2`.
   3. On Mac, Set the `Port` to the option in the format: `cu.usbmodem<a-lot-of-numbers>`
   4. On Linux, Set the `Port` to the option in the format: `ttyACM0`.
  {{< container-image path="images/Check COM Port and Baud Rate.png" alt="Changing the Port and Baud Rate" >}}
  {{< alert color="info" title="Port Not Found" >}}
  If your machine's port does not show up in the drop down, check that your USB cable is plugged in to both your computer and the LumenPnP. Also check that the motherboard is powered on. If you still cannot find the port, try pressing the reset button on the motherboard and closing and reopening OpenPnP.
  {{< /alert >}}

7. Click `Apply` in the lower right corner to save your changes.
  {{< container-image path="images/apply-machine-config.png" alt="Apply baud rate and port" >}}

## Bottom Camera Config

Now we'll set up the cameras. The big red "X" in the camera views means that OpenPnP isn't receiving the webcam feed. We'll specify which webcam is which.

{{< alert color="warning" title="Camera Connection Issues (v2 Hardware)" >}}
Because the motherboard in v2 LumenPnP kit machines has a built in USB hub you can plug both of the webcams into the motherboard, and then connect the motherboard to your computer with a single one USB cable. This keeps cables tidy, but it sends a lot of data through one single USB port on your computer.

Unfortunately, from reports we've gotten from users, it seems that not all computer manufacturers include high-quality internal USB hubs. The lower quality hubs included in these computers can't handle the bandwidth requirements of two webcams plus the motherboard all on a single USB port. If this is the case for your computer, one or both of the webcams will be missing from the configuration list in OpenPnP or any other camera application.

If you have this problem, you will need to plug at least one of the webcams directly into your computer via a separate USB port. Occasionally this can cause the webcam's name to be incorrect, but you'll still be able to select it from the drop-down list with a little trial and error.
{{< /alert >}}

8. In the top-left corner, change the camera view to one of the "Show All" options. You should then see two camera feeds that are black, and have red X's on them.
  {{< container-image path="images/switch-camera-display.png" alt="show both camera feeds" >}}

9. Again, navigate to the `Machine Setup` tab.
10. Again, click the "Expand" checkbox if necessary.
11. Click on `Cameras > OpenPnpCaptureCamera Bottom`.
  {{< container-image path="images/Bottom Camera Config.png" alt="Finding the Bottom Camera Settings" >}}

12. In the lower detail pane, switch to the `Device Settings` tab.
  {{< container-image path="images/Bottom-camera-device-settings.png" alt="Switching to the camera device settings" >}}

13. In the `Device` drop-down, choose `PnP Bottom Camera`.
  {{< container-image path="images/Bottom-camera-select-device.png" alt="Selecting the correct device for the Bottom Camera" >}}

14. In the `Format` drop-down, choose the `1280x720 10fps` setting.
  {{< container-image path="images/Bottom resolution.png" alt="setting bottom camera resolution" >}}

15. Click the `Apply` button in the bottom right. You should then see the camera display start showing the feed from the camera, or at least see the red X disappear. We'll fix the exposure next.
  {{< container-image path="images/Bottom Camera Apply.png" alt="Saving changes to the Bottom Camera Config" >}}
  {{< container-image path="images/Bottom-camera-on.png" alt="Bottom camera is now on" >}}

16. Adjust the exposure to make the camera feed more reasonable. On some computers, you can toggle Automatic Exposure on, and then back off again to set it correctly. Do not keep auto exposure turned on. You can come back to adjust the exposure later at any time.
  {{< container-image path="images/adjust-exposure.png" alt="Adjust exposure" >}}

## Top Camera Config

17. Again, navigate to the `Machine Setup` tab.
18. Again, click the "Expand" checkbox if necessary.
19. Navigate to `Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`.
  {{< container-image path="images/Top-camera-settings.png" alt="Finding the Top Camera Settings" >}}

20. In the lower detail pane, switch to the `Device Settings` tab.
  {{< container-image path="images/Top-camera-device-settings.png" alt="Switching to the camera device settings" >}}

21. In the `Device` drop-down, choose `PnP Top Camera`.
  {{< container-image path="images/Top-camera-select-device.png" alt="Selecting the correct device for the Bottom Camera" >}}

22. In the `Format` drop-down, choose the `1280x720 10fps` setting.
  {{< container-image path="images/Top resolution.png" alt="setting top camera resolution" >}}

23. Click the `Apply` button in the bottom right. You should then see the camera display start showing the feed from the camera, or at least see the red X disappear.
  {{< container-image path="images/Top Camera Apply.png" alt="Saving changes to the Top Camera Config" >}}

24. Adjust the exposure to make the camera feed more reasonable. Both cameras should now be working.
  {{< container-image path="images/adjust-exposure-2.png" alt="Adjust exposure" >}}

## Connecting to the LumenPnP

25. Click the green power button in the Machine Controls section of the UI to connect to your machine.
  {{< container-image path="images/connect-to-machine-power-button.png" alt="Connect to the LumenPnP" >}}

26. The power button will turn red when OpenPnP has connected to your machine. If this doesn't work, check your [port and baud rate]({{< relref "#com-port-and-baud-rate" >}}).
  {{< container-image path="images/connected-to-machine.png" alt="having successfully connected to the LumenPnP and cameras" >}}

27. Save your OpenPnP settings with `File > Save Configuration`.
  {{< container-image path="images/save-configuration.png" alt="saving the machine config" >}}

## Next Steps

Next, we'll work on the the camera's [Fisheye Calibration.]({{< relref "camera-fisheye-cal" >}})
