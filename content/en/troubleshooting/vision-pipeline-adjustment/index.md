---
title: "Vision Pipeline Adjustment"
linkTitle: "Vision Pipeline Adjustment"
weight: 3
type: docs
description: >
  Vision Pipeline Adjustment
---

Computer vision is one of the most important and complicated elements of a Pick and place machine, and the LumenPnP is no different. Vision is used in four main places:

1. Finding your homing fiducial
2. Finding the fiducial marks on your PCBs
3. Finding the tips of your nozzles, and
4. Confirming and orienting the parts the machine has picked up.

We've included good settings in the [default machine configuration]({{< relref "import-config" >}}) to get you started, but you will likely need to tune the settings for your exact needs depending on the ambient light in your room, the settings you used when [configuring your cameras]({{< relref "connect-to-machine#bottom-camera-config" >}}), and the kinds of components you're placing. This page is to get you set up to place components for your [FTP]({{< relref "FTP" >}}), and learn the basics of how adjusting computer vision works. For more information, we highly recommend reading the [OpenPnP documentation](https://github.com/openpnp/openpnp/wiki/Bottom-Vision).

## Intro to Vision Tuning

### Computer Vision Basics

Computer vision used in OpenPnP takes photos from your top or bottom camera, and then passes it through a "Pipeline" of steps to identify what is in the image. Steps fall into a few categories:

1. Manipulating the photo to make it easier for the computer to identify parts of the photo. For example: xxx
2. Identifying certain elements of the photo. For example: xxx
3. Showing you more information on the screen so that you can build, debug, and tweak the pipeline. For example xxx

Because each of these kinds of steps live together in the pipeline, it can be a little confusing at first figuring out what each step does and why they're included in the pipeline.

Each step of the pipeline has "parameters" that control its function. For example, the XXXXexportdebug step will ask you for a file path on your computer to use when saving a debug image. Another more typical example is the Threshold step, which will use a Threshold parameter to pick which parts of your image will become white, and which will become black. For normal use we expect that you should be able to just tune the parameters for the steps in the default pipeline, rather than add new steps.

### Pipeline Organization

As of the OCTOBERORWHATEVER update, OpenPnP added the "Vision" tab in the Machine Configuration section. This lets you define multiple pipelines for different kinds of computer vision operations. This lets you handle identification of different PCB components differently if you're not able to build a single pipeline to accomidate them all. This adds more functionality, but can be confusing when getting started. In general we recommend having four main pipelines to get started (when doing the FTP and beyond):

1. Finding your homing fiducial (Top Camera)
2. Finding the fiducial marks on your PCBs (Top Camera)
3. Finding the tips of your nozzles (Bottom Camera)
4. Confirming and orienting the parts the machine has picked up. (Bottom Camera)

Number 4 above is the one that you might expand when you move on to placing more complicated components. Note also that this "Vision" tab is brand new in OpenPnP, and so guidance here is subject to change as the new feature gets refined in future OpenPnP releases.

### Pipeline Editing View

The pipeline editing view has several sections and features you should know about to make your tuning go more smoothly.

<!-- TODO: image of pipeline yay -->

1. The list of steps. Click on a step to show it's results in the main view, and show its parameters in the editing section
2. The main view. This shows the result of the currently highlighted step unless a particular step is pinned (see #4)
3. Step output. This shows error messages if there's a problem with your step or pipeline.
4. Step settings. This lets you change the settings for the highlighted step.
5. Pin Image. This lets you keep the results of the currently selected step on on main view, even if you highlight another step. Use this to pin a debugging step so that you can quickly see the results of changes to a step you're editing.

### Default Pipeline Strategy
<!-- TODO: colorcode the steps to mark them as manipulation, debug, or identification. Probably have a screenshot and have it in text below, as text in a screenshot is bad man-->

## Top Camera Vision Pipeline

### Homing Fiducials

If you find that the machine is having a hard time finding the homing fiducial, you might need to edit the Vision Pipeline for it. The iterative strategy here is:

1. Open the Pipeline
2. Check the current output and identify the problem that is causing homing to fail
3. Adjust the stage settings to change the pipeline output
4. Review the new pipeline output
5. Return to step 2 as necessary

#### Open the Pipeline

6. Click on the `Machine Setup` tab in the top right pane.
  {{< container-image path="images/Machine-Setup-Tab-3.png" alt="Selecting the Machine setup tab from the main screen" >}}

7. Click on the "Expand" checkbox to open all of the features about your machine.
  {{< container-image path="images/Expand-Checkbox-3.png" alt="Expanding the Machine Config options" >}}

8. Click on `Heads > ReferenceHead H1`
  {{< container-image path="images/Select-reference-head-H1.png" alt="Reviewing the ReferenceHead options" >}}

9. Click on the "Position Camera over location" icon button show below. This will move the top camera to where your datum board is mounted.
   {{< container-image path="images/Position-camera-over-homing-fiducial.png" alt="Position top camera over homing fiducial" >}}

10. Confirm that your top camera is positioned exactly over the homing fiducial.
   {{< container-image path="images/Homing-fiducial-centered.png" alt="Center the homing fiducial in the camera view" >}}

11. Adjust the exposure of your camera image as mentioned in the [Homing Fiducial Section]({{< relref "homing-fiducial#double-check-camera-exposure" >}})

12. Go to the `Vision` tab.
   {{< container-image path="images/vision-tab.png" alt="Switch to the vision tab" >}}

13. Select on FiducialVision from the type dropdown.
   {{< container-image path="images/fiducial-vision-dropdown.png" alt="Select fiducial vision" >}}

14. Select `- Default Machine Fiducial Locator -` from the pipeline list.
   {{< container-image path="images/select-default-fiducial-vision.png" alt="Select the default pipeline" >}}

15. Click on Pipeline `Edit`.
   {{< container-image path="images/edit-pipeline.png" alt="Edit the pipeline" >}}

#### Check the debug results

16. Click on the `DrawCircles` stage.
   {{< container-image path="images/draw-circles-stage.png" alt="Click on the DrawCircles stage" >}}

17. The main view will show if OpenPnP was able to identify what it thinks is the homing fiducial.
    1. If there are more than one circle, then we need to more clearly distinguish the real homing fiducial.
    2. If there is one circle, but it is not correctly drawn around the homing fiducial, then we need to more clearly distinguish the homing fiducial.
    3. If there are no circles, we need to loosen the filtering to make the real homing fiducial easier to identify.
    4. If the image looks like the good one below, your pipeline is properly tuned. If you've still been getting failures when homing, you may need to slightly loosen the filtering.

#### Adjust Pipeline

18. Click on the `Threshold` stage
   {{< container-image path="images/threshold-stage.png" alt="Select the threshold stage" >}}

19. Raise or lower the `threshold` parameter as necessary until the image is precise.
    1. If the image is too black, raise the threshold setting.
    2. If the image is too bright, lower the threshold setting.
   <!-- {{< container-image path="images/detect-circles-stage.png" alt="Home the machine" >}} -->
<!-- Photo shop image -->

20. Click on the `DrawCircles` stage and check if the fiducial has been correctly identified.
   {{< container-image path="images/draw-circles-stage.png" alt="Click on the DrawCircles stage" >}}

21. If not, pin the view of the `DrawCircles` stage.
   {{< container-image path="images/pin-draw-circles.png" alt="Pin the DrawCircles view" >}}

22. Click on the `DetectCirclesHough` stage.
   {{< container-image path="images/detect-circles-stage.png" alt="Select the detect circles stage" >}}

23. Raise or lower the `param2` parameter as necessary until the correct number of circles are identified.
    1. If there are no circles, lower the param2 setting.
    2. If there are too many circles, raise the param2 setting.
   <!-- {{< container-image path="images/detect-circles-stage.png" alt="XXX" >}} -->
<!-- Photo shop image -->
#### Review Pipeline Output

24. When the fiducial is correctly identified, close the pipeline editor.
   {{< container-image path="images/close-pipeline-editor.png" alt="Close the pipeline editor" >}}

25. When prompted, save the edits you've made.
   {{< container-image path="images/save-pipeline-changes.png" alt="Save the changes to the pipeline" >}}

26. Try homing the machine to see if it can identify the homing fiducial.
   {{< container-image path="images/home-machine-from-vision.png" alt="Home the machine" >}}

### PCB Fiducials
<!-- TODO: Link -->
See the Homing fiducial section above for guidance.

## Bottom Camera Vision Pipeline

### Nozzles

1. Go to the `Machine Setup` tab
2. Click on the Expand button if necessary
3. Click on `Toolhead 1`
4. Click on "Position on homing fiducial"
5. Adjust the exposure of your camera image as mentioned in other steps...

### Part Recognition

These steps are for basic components like EEEE-type resistors and LEDs. More complicated components may need different settings.

1. Go to the `Machine Setup` tab
2. Click on the Expand button if necessary
3. Click on `Toolhead 1`
4. Click on "Position on homing fiducial"
5. Adjust the exposure of your camera image as mentioned in other steps...
