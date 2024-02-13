---
title: "Vision Pipeline Adjustment"
linkTitle: "Vision Pipeline Adjustment"
weight: 3
type: docs
description: >
  Vision Pipeline Adjustment
---

Computer vision is one of the most important and complicated elements of a pick and place machine, and the LumenPnP is no different. Vision is used in four main places:

1. [Finding your homing fiducial (Top Camera)](2-homing-fiducial-pipeline.md)
2. [Finding the fiducial marks on your PCBs (Top Camera)](3-pcb-fiducial-pipeline.md)
3. [Finding the tips of your nozzles (Bottom Camera)](4-nozzle-calibration-pipeline.md)
4. [Confirming and orienting the parts the machine has picked up. (Bottom Camera)](5-part-identification-pipeline.md)

We've included good settings in the [default machine configuration](../import-config/index.md) to get you started, but you will likely need to tune the settings for your exact needs depending on the ambient light in your room, the settings you used when [configuring your cameras](../calibration/2-connect-to-machine/index.md#bottom-camera-config), and the kinds of components you're placing. This page is to get you set up to place components for your [FTP](../ftp/index.md), and learn the basics of how adjusting computer vision works.

**For more information, we highly recommend reading the [OpenPnP documentation](https://github.com/openpnp/openpnp/wiki/Bottom-Vision).**

## Computer Vision Basics

Computer vision used in OpenPnP takes photos from your top or bottom camera and passes them through a "Pipeline" of stages to identify what is in the image. Stages fall into a few categories:

1. Manipulating the photo to make it easier for the computer to identify parts of the photo. For example: `Threshold`.
2. Identifying certain elements of the photo. For example: `DetectCirclesHough`.
3. Showing you more information on the screen so that you can build, debug, and tweak the pipeline. For example: `DrawCircles`.

You will need to fine-tune each stage to adjust how it works by changing its "parameters." For example, the `Threshold` stage takes in the photo from your camera (or the previous stage in the pipeline) and turns it into stark black and white. It uses a `threshold` parameter to pick the brightness level where the distinction is made.

![Threshold comparison](images/threshold-comparison-general.png)

For more complicated changes to your pipeline can also add and remove stages. But this shouldn't be necessary for most people.

## Pipeline Organization

As of the `2022-08-01_18-07-09.2a36a8d` update, OpenPnP added the "Vision" tab in the Machine Configuration section, which lets you create more specific pipelines for unique scenarios. Now you can define multiple specific pipelines to handle identification of different PCB components differently for better performance. This adds more functionality, but can be confusing when getting started. In general we recommend having one pipeline for each of the four different use cases listed above. As you get more sophisticated with your placements, you'll probably want to create more specialized pipelines for [part identification.](5-part-identification-pipeline.md)

## Pipeline Editing View

The pipeline editing view has several sections and features you should know about to make your tuning go more smoothly.

1. The list of stages. Click on a stage to show it's results in the main view, and show its parameters in the stage settings.
2. The main view. This shows the result of the currently selected stage unless a particular stage is pinned (see #5).
3. Stage output. This shows error messages if there's a problem with your stage or pipeline.
4. Stage settings. This lets you change the settings for the selected stage.
5. Pin Image. This lets you keep the results of the currently selected stage on on main view, even if you select another stage. Use this to pin a debugging stage so that you can quickly see the results of changes to a stage you're editing.

![Pipeline Editing View](images/pipeline-organization.png)

## Editing Strategy

Here's a brief example of the typical iterative workflow for adjusting your vision pipelines:

1. Open the Pipeline.
2. Check the current output and identify the problem that is causing homing to fail.
3. Adjust the stage settings to change the pipeline output.
4. Review the new pipeline output.
5. Return to step 2 as necessary.

!!! Note
    Anytime the lighting conditions around your LumenPnP or your camera settings change you may need to adjust your vision pipelines.
