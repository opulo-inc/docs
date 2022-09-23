---
title: "Bottom Camera Position"
linkTitle: "Bottom Camera Position"
weight: 70
type: docs
description: >
  Setting the position of your bottom camera
---

Now that we know the offset from the top camera to the nozzle, we can use the nozzle to set our bottom camera position.

1. Make sure that you have the N1 nozzle selected from the drop down beneath the camera view in OpenPnP.
   
{{< alert color="warning" title="Bottom Camera Z Position: v2 and v3 Differences" >}}
For `v2` machines with only one nozzle, we have the bottom camera Z height that we lift the nozzle to for vision operations set to 61mm. This is very high up and lets us see very large parts, but if a second nozzle is installed, it can cause collisions.

For `v3` machines (that come with two nozzles), we've dropped the camera a bit lower beneath the Staging Plate, and the height for bottom camera vision operations is 31.5mm. This ensures we can see large parts while preventing collisions with a second nozzle.

Make sure your bottom camera Z position is set correctly based on your version number.
{{< /alert >}}

2. Select the bottom camera in the device tree. Click on the `Position` menu tab. Click on the icon with the red nozzle in blue circle (shown below) to jog the nozzle to the bottom camera position. 
{{< container-image path="images/Screen Shot 2022-05-19 at 2.53.57 PM.png" alt="" >}} 

2. The left nozzle will now move to be pretty close to the bottom camera inspection location, but it likely won't be exact. It's also possible that the tip of the nozzle is not in focus from the fisheye calibration step; adjust the bottom camera focus by turning the lens until the nozzle tip is sharp and in focus. 
{{< container-image path="images/Screen Shot 2022-05-19 at 3.04.16 PM.png" alt="" >}}


1. Jog the nozzle to be perfectly centered over the bottom camera, and click on the blue nozzle icon to capture the position (see image below). Your bottom camera position is now saved!

{{< container-image path="images/Screen Shot 2022-05-19 at 3.02.58 PM.png" alt="" >}}
{{< container-image path="images/capture.png" alt="" >}}


