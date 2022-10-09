---
title: "Connecting to Your Machine"
linkTitle: "Connecting to Your Machine"
weight: 9
type: docs
description: >
  Getting set up and connected to your LumenPnP using OpenPnP
---

Awesome! Now we've got OpenPnP installed on your computer, and we've got the default configuration loaded up. Our next step is getting connected to the machine and getting familiar with OpenPnP's UI.

1. Connect your machine to your computer using the included USB cable, and open OpenPnP on your computer. You should now see the OpenPnP UI:

{{< container-image path="images/openpnp-ui.png" alt="" >}}

## Com Port and Baud Rate

Before connecting to the machine, you need to set which USB port to use for communication in OpenPnP.

1. Click on the `Machine Setup` tab
  {{< container-image path="images/Machine-Setup-Tab.png" alt="Selecting the Machine setup tab from the main screen" >}}

2. Click on the "Expand" checkbox to open all of the features.
  {{< container-image path="images/Expand-Checkbox.png" alt="Expanding the Machine Config options" >}}

4. Under `Drivers` click on `GcodeDriver GcodeDriver`
  {{< container-image path="images/SelectGcodeDriver.png" alt="Reviewing the GcodeDriver options" >}}
  
5. Below the list of machine settings you'll find the details of the GcodeDriver. In the `Configuration` tab, check the `Baud` and `Port` settings.

   1. The `Baud` should be `115200`
   2. On Windows, the `Port` should be in the format: `COM2`.
   3. On Mac, the `Port` should be in the format: `cu.usbmodem<a-lot-of-numbers>`
   4. On Linux, the `Port` should be in the format: `ttyACM0`.
  {{< container-image path="images/Check COM Port and Baud Rate.png" alt="Changing the Port and Baud Rate" >}}

{{% alert color="info" title="Port Not Found" %}}
If your machine's port does not show up in the drop down, check that your USB cable is plugged in to both your computer and the LumenPnP. Also check that the motherboard is powered on. If you still cannot find the port, try pressing the reset button on the motherboard and closing and reopening OpenPnP.
{{% /alert %}}

## Bottom Camera Config

Now we'll set up the cameras. The big red "X" in the camera views means that OpenPnP doesn't know where to find the webcam feed. OpenPnP needs to know which webcam is which.

{{% alert color="warning" title="Camera Connection Issues (v2 Hardware)" %}}
The LumenPnP motherboard in `v2` machines have a built in USB hub and USB ports for you to plug the two webcams into. This arrangement may not be compatible with your computer. Some computers use higher quality USB hubs, which can handle the bandwidth required to stream video from both webcams at once over a single USB port. From reports we've gotten from users, it seems that *many* computer manufactures do **not** include good enough USB hubs. In these cases, one or both of the USB webcams will fail to show up in the configuration list below. If this is the case, you will need to plug at least one of the webcams directly into your computer via a separate USB port. Occasionally this can cause the webcam's name to be incorrect, but you'll still be able to select it from the drop-down list with a little trial and error.
{{% /alert %}}

6. Again, navigate to the `Machine Setup` tab
7. Again, click the "Expand" checkbox if necessary
8. Under `Cameras` click on `OpenPnpCaptureCamera Bottom`
  {{< container-image path="images/Bottom Camera Config.png" alt="Finding the Bottom Camera Settings" >}}

9. In the lower detail pane, switch to the `Device Settings` tab
  {{< container-image path="images/Bottom-camera-device-settings.png" alt="Switching to the camera device settings" >}}

10. In the `Device` drop-down, choose `PnP Bottom Camera (PnP Bottom Camera)`
  {{< container-image path="images/Bottom-camera-select-device.png" alt="Selecting the correct device for the Bottom Camera" >}}

11. In the `Format` drop-down, choose the `1280x720 10fps` setting

12. Click the "Apply" button in the bottom right
  {{< container-image path="images/Bottom Camera Apply.png" alt="Saving changes to the Bottom Camera Config" >}}

## Top Camera Config

13. Again, navigate to the `Machine Setup` tab
14. Again, click the "Expand" checkbox if necessary
15. Navigate to `Heads > ReferenceHead H1 > Cameras > OpenPnPCaptureCamera Top`
  {{< container-image path="images/Top-camera-settings.png" alt="Finding the Top Camera Settings" >}}

16. In the lower detail pane, switch to the `Device Settings` tab
  {{< container-image path="images/Top-camera-device-settings.png" alt="Switching to the camera device settings" >}}

17. In the `Device` drop-down, choose `PnP Bottom Camera (PnP Top Camera)`
  {{< container-image path="images/Bottom-camera-select-device.png" alt="Selecting the correct device for the Bottom Camera" >}}

18. In the `Format` drop-down, choose the `1280x720 10fps` setting

19. Click the "Apply" button in the bottom right
  {{< container-image path="images/Top Camera Apply.png" alt="Saving changes to the Top Camera Config" >}}

20. To check that both cameras are working now, select your preferred view option in the top left `Cameras` section. The Camera feeds should update automatically. If you only see a black image but the red `X` has disappeared, it's likely that your camera is connected properly, but just has its exposure set too low. We'll address this in a later step. Remember to remove the plastic lens covers from each camera, too.
  {{< container-image path="images/Both-cameras-working.png" alt="Both cameras showing live outputs." >}}

## Connecting to the LumenPnP
<!-- TODO: Better screenshot -->
21. Click the green power button in the Machine Controls section of the UI to connect to your machine.
  {{< container-image path="images/Screen Shot 2022-05-17 at 4.14.47 PM.png" alt="" >}}
  <!-- TODO: do you need to hit the power button for your cameras to show up, or should they show up like what we explained in step 20?? -->
22. The power button should turn red, and OpenPnP has connected to your machine. You should also see both webcam feeds as shown below. (If you don't see any, or just one, under the `Cameras` section, select the `Show All Horizontal` option from the dropdown.)
  {{< container-image path="images/Screen Shot 2022-05-17 at 4.16.20 PM.png" alt="" >}}

23. Save your OpenPnP settings with `File > Save Configuration`.
