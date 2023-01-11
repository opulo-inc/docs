---
title: "Vision Pipeline Adjustment"
linkTitle: "Vision Pipeline Adjustment"
weight: 3
type: docs
description: >
  Vision Pipeline Adjustment
---

Computer vision is one of the most important and complicated elements of a pick and place machine, and the LumenPnP is no different. Vision is used in four main places:

1. Finding your homing fiducial
2. Finding the fiducial marks on your PCBs
3. Finding the tips of your nozzles, and
4. Confirming and orienting the parts the machine has picked up.

We've included good settings in the [default machine configuration](../../../openpnp/calibration/import-config/index.md) to get you started, but you will likely need to tune the settings for your exact needs depending on the ambient light in your room, the settings you used when [configuring your cameras](../../../openpnp/calibration/connect-to-machine/index.md#bottom-camera-config), and the kinds of components you're placing. This page is to get you set up to place components for your [FTP](../../../openpnp/ftp/index.md), and learn the basics of how adjusting computer vision works. For more information, we highly recommend reading the [OpenPnP documentation](https://github.com/openpnp/openpnp/wiki/Bottom-Vision).

## Intro to Vision Tuning

### Computer Vision Basics

Computer vision used in OpenPnP takes photos from your top or bottom camera and passes them through a "Pipeline" of stages to identify what is in the image. Stages fall into a few categories:

1. Manipulating the photo to make it easier for the computer to identify parts of the photo. For example: `Threshold`.
2. Identifying certain elements of the photo. For example: `DetectCirclesHough`.
3. Showing you more information on the screen so that you can build, debug, and tweak the pipeline. For example: `DrawCircles`.

Because each of these kinds of stages live together in the pipeline, it can be a little confusing trying to decode how each stage works and what they're for.

Each stage of the pipeline has "parameters" that control its function. For example, the `ImageWriteDebug` step will ask you for parts of a file name to use when saving a debug image. Another more typical example is the `Threshold` stage, which will use a `threshold` parameter to pick which parts of your image will become white, and which will become black.

When editing your vision pipeline, you should be able to start with simply tuning the parameters for the stages in the default pipeline. As you get more experienced, and if you're setting up more complicated placement jobs, you may need to add more stages to the pipeline to fine tune it for your needs.

### Pipeline Organization

As of the `2022-08-01_18-07-09.2a36a8d` update, OpenPnP added the "Vision" tab in the Machine Configuration section, which lets you create more specific pipelines for unique scenarios.  Now you can define multiple specific pipelines to handle identification of different PCB components differently if you're not able to build a single pipeline to accommodate them all. This adds more functionality, but can be confusing when getting started. In general we recommend having four main pipelines to get started (when doing the FTP and beyond):

1. Finding your homing fiducial (Top Camera)
2. Finding the fiducial marks on your PCBs (Top Camera)
3. Finding the tips of your nozzles (Bottom Camera)
4. Confirming and orienting the parts the machine has picked up. (Bottom Camera)

Number 4 above is the one that you might expand when you move on to placing more complicated components. Note also that this "Vision" tab is brand new in OpenPnP, and so guidance here is subject to change as the new feature gets refined in future OpenPnP releases.

### Pipeline Editing View

The pipeline editing view has several sections and features you should know about to make your tuning go more smoothly.

1. The list of stages. Click on a stage to show it's results in the main view, and show its parameters in the stage settings.
2. The main view. This shows the result of the currently selected stage unless a particular stage is pinned (see #5).
3. Stage output. This shows error messages if there's a problem with your stage or pipeline.
4. Stage settings. This lets you change the settings for the selected stage.
5. Pin Image. This lets you keep the results of the currently selected stage on on main view, even if you select another stage. Use this to pin a debugging stage so that you can quickly see the results of changes to a stage you're editing.

## Top Camera Vision Pipeline

### Homing Fiducials

If you find that the machine is having a hard time finding the homing fiducial, you might need to edit the Vision Pipeline. The iterative strategy here is:

1. Open the Pipeline.
2. Check the current output and identify the problem that is causing homing to fail.
3. Adjust the stage settings to change the pipeline output.
4. Review the new pipeline output.
5. Return to step 2 as necessary.

#### Open the Pipeline

1. Click on the `Machine Setup` tab in the top right pane.
  ![](images/Machine-Setup-Tab-3.png)

2. Click on the "Expand" checkbox if necessary.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

3. Click on `Heads > ReferenceHead H1`.
  ![Reviewing the ReferenceHead options](images/Select-reference-head-H1.png)

4. Click on the "Position Camera over location" icon button show below. This will move the top camera to where your datum board is mounted.
  ![Position top camera over homing fiducial](images/Position-camera-over-homing-fiducial.png)

5. Confirm that your top camera is positioned exactly over the homing fiducial.
  ![Center the homing fiducial in the camera view](images/Homing-fiducial-centered.png)

1. Adjust the exposure of your camera image as mentioned in the [Homing Fiducial Section](../../../openpnp/calibration/homing-fiducial/index.md#double-check-camera-exposure).

2. Go to the `Vision` tab.
  ![Switch to the vision tab](images/vision-tab.png)

1. Select on `FiducialVision` from the type dropdown.
  ![Select fiducial vision](images/fiducial-vision-dropdown.png)

1. Select `- Default Machine Fiducial Locator -` from the pipeline list.
  ![Select the default pipeline](images/select-default-fiducial-vision.png)

1.  Click on Pipeline `Edit`.
  ![Edit the pipeline](images/edit-pipeline.png)

#### Check the debug results

11. Click on the `DrawCircles` stage.
  ![Click on the DrawCircles stage](images/draw-circles-stage.png)

12. The main view will show a circle if OpenPnP was able to identify what it thinks is the homing fiducial.
    1. If there are more than one circle, then we need to more clearly distinguish the real homing fiducial.
    2. If there is one circle, but it is not correctly drawn around the homing fiducial, then we need to more clearly distinguish the homing fiducial.
    3. If there are no circles, we need to loosen the filtering to make the real homing fiducial easier to identify.
    4. If the image looks like the good one above, your pipeline is properly tuned. If you've still been getting failures when homing, you may need to slightly loosen the filtering.

#### Adjust Pipeline

13. Click on the `Threshold` stage
  ![Select the threshold stage](images/threshold-stage.png)

14. Raise or lower the `threshold` parameter as necessary until the image is precise.
    1. If the image is too black, raise the `threshold` setting.
    2. If the image is too bright, lower the `threshold` setting.
   <!-- ![](images/detect-circles-stage.png) -->

15. Click on the `DrawCircles` stage and check if the fiducial has been correctly identified.
  ![Click on the DrawCircles stage](images/draw-circles-stage.png)

1.  If not, pin the view of the `DrawCircles` stage.
  ![Pin the DrawCircles view](images/pin-draw-circles.png)

1.  Click on the `DetectCirclesHough` stage.
  ![Select the detect circles stage](images/detect-circles-stage.png)

1.  Raise or lower the `param2` parameter as necessary until the correct number of circles are identified.
    1. If there are no circles, lower the `param2` setting.
    2. If there are too many circles, raise the `param2` setting.
<!-- TODO: Photo shop image -->
#### Review Pipeline Output

1.  When the fiducial is correctly identified, close the pipeline editor.
  ![Close the pipeline editor](images/close-pipeline-editor.png)

1.  When prompted, save the edits you've made.
  ![Save the changes to the pipeline](images/save-pipeline-changes.png)

1.  Try homing the machine to see if it can identify the homing fiducial.
  ![Home the machine](images/home-machine-from-vision.png)

### PCB Fiducials

1. Go to the `Vision` tab.
   ![Switch to the vision tab](images/vision-tab.png)

2. Select on `FiducialVision` from the type dropdown.
   ![Select fiducial vision](images/fiducial-vision-dropdown.png)

3. Select `FIDUCIAL-1X2` from the pipeline list. <!-- TODO: images are wrong here -->
   ![Select the default pipeline](images/select-default-fiducial-vision.png)

4. Click on Pipeline `Edit`.
   ![Edit the pipeline](images/edit-pipeline.png)

5. Continue with the same procedure as the [Homing fiducial](#check-the-debug-results) section above.
<!-- needs photos and more
## Bottom Camera Vision Pipeline

### Nozzles

1. Go to the `Vision` tab.
   ![](images/vision-tab.png)

2. Select on `BottomVision` from the type dropdown.
   ![](images/fiducial-vision-dropdown.png)

3. Select `- Default Machine Bottom Vision -` from the pipeline list.
   ![](images/select-default-fiducial-vision.png)

4. Click on Pipeline `Edit`.
   ![](images/edit-pipeline.png)

### Part Recognition

1. Go to the `Vision` tab.
   ![](images/vision-tab.png)

2. Select on `BottomVision` from the type dropdown.
   ![](images/fiducial-vision-dropdown.png)

3. Select `- Default Machine Bottom Vision -` from the pipeline list.
   ![](images/select-default-fiducial-vision.png)

4. Click on Pipeline `Edit`.
   ![](images/edit-pipeline.png) -->
