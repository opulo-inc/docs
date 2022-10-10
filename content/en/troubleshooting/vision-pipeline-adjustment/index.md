---
title: "Vision Pipeline Adjustment"
linkTitle: "Vision Pipeline Adjustment"
weight: 3
type: docs
description: >
  Vision Pipeline Adjustment
---

## Top Camera Vision Pipeline

1. If you find that the machine is having a hard time finding the homing fiducial, you might need to edit the Vision Pipeline for it. You can do that by going to the `Machine Setup` tab, and selecting `Fiducial Locator` under `Vision`. Click the `Edit` button to adjust the computer vision settings.
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.22.00 PM.png" alt="" >}}

2. There is quite a bit to tuning a vision pipeline, and you should take a look at the [OpenPnP documentation](https://github.com/openpnp/openpnp/wiki/Bottom-Vision). But there are a few things you can pretty easily tweak to get up and running. First, let's check out what the vision pipeline *thinks* it's seeing. In the window that just popped up, click on the row with "DrawCircles" in the Stage column. The image will show you every circle detected from the pipeline, as shown below. If there is more than one, or if the one shown is not perfectly hugging the fiducial, there are tweaks to be made. The image below shows a correctly tuned pipeline, with a single circle encircling the fiducial.
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.41.29 PM.png" alt="" >}}

3. The first variable to address is the threshold value. To access these settings, click on the row with "Threshold" under the Stage column. If the threshold is too low, then we won't be isolating the area around the fiducial enough. A too low of a threshold value will look like the image below:
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.25.13 PM.png" alt="" >}}
   Raise the value until the fiducial is a clean, solid circle, as shown below:
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.25.59 PM.png" alt="" >}}

4. Next, we can check and see how many circles the pipeline is finding. We want it to only be finding one, and have it hug the fiducial exactly. Click on the row with "DetectCirclesHough" in the Stage column. In the image below, you can see from the list in the bottom right that two circles have been detected. We can solve this by adjusting "param2" and bumping the value up. The lower the value, the more circles are detected. If the diameter of the circles detected is incorrect, adjust the maxDiameter and minDiameter settings.
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.26.48 PM.png" alt="" >}}
   With a higher value in the "param2" field, we only detect a single circle.
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.27.08 PM.png" alt="" >}}

5. Lastly, you can confirm that the changes result in accurate fiducial detection. Once again click on the row with "DrawCircles" in the Stage column. The image will show you every circle detected from the pipeline. Confirm there is only one, and it is perfectly hugging the fiducial as shown below.
   {{< container-image path="images/Screen Shot 2022-05-18 at 2.41.29 PM.png" alt="" >}}

6. Exit out of the pipeline editing UI, save your changes, and try to home again. With your vision pipeline tuned, the machine should find the homing fiducial on your machine and center the crosshair of the top camera on it.

7. It is likely that the machine will move to the wrong place and not be able to identify the homing fiducial. If this happens, OpenPnP will give an error popup that says `FIDUCIAL-HOME no matches found`. This is normal, as it means you'll need to fine-tune the location that OpenPnP moves the LumenPnP to in order to find the homing fiducial. You'll also note that the home icon will turn yellow, as the LumenPnP has homed to the end stops, but hasn't completed the full homing routine.
   {{< container-image path="images/Cant-find-homing-fiducial.png" alt="A first attempt at homing the LumenPnP" >}}

{{< alert color="info" title="Note" >}}
Once your machine succeeds in finding the homing fiducial, the homing procedure will continue, and will try to detect a nozzle on your toolhead. This will fail, and you will receive the error: `Nozzle tip calibration: too many vision misdetects. Check pipeline and threshold.` This is expected, and if you see this you can move onto [MM/Pixel calibration]({{< relref "mm-per-pixel" >}}).
{{< /alert >}}

## Bottom Camera Vision Pipeline: Nozzles

If the bottom vision pipeline for your part is not set up correctly, it might find the outline of the part to be larger, smaller, or offset from what it actually is, causing an incorrect placement. The [homing fiducial vision calibration]({{< relref "homing-fiducial" >}}) is helpful for seeing how to tune a vision pipeline, but also check out OpenPnP's [bottom vision wiki page](https://github.com/openpnp/openpnp/wiki/Bottom-Vision) to help tune your pipeline.

## Bottom Camera Vision Pipeline: Part Recognition
