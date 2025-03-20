---
title: "Vision Pipeline Adjustment"
linkTitle: "Vision Pipeline Adjustment"
weight: 3
type: docs
description: >
  Vision Pipeline Adjustment
---
# Vision Pipeline Adjustment

Computer vision is one of the most crucial and complex components of a pick-and-place machine. It plays a key role in four primary tasks:

- [Finding the homing fiducial (Top Camera)](2-homing-fiducial-pipeline.md)
- [Identifying PCB fiducials (Top Camera)](3-pcb-fiducial-pipeline.md)
- [Calibrating Nozzle Tips (Bottom Camera)](4-nozzle-calibration-pipeline.md)
- [Calibrating component position (Bottom Camera)](5-part-identification-pipeline.md)

The default vision settings provided in the configuration files are optimized for general use. But, due to variations in lighting conditions, component shapes, and other environmental factors, you may need to fine-tune them for optimal performance.

---

## Tutorial Video

This video walks you through the process of calibrating vision for the LumenPnP. Each page in this section has a link to the relevant timestamp of the video.

<!-- markdownlint-disable MD033 -->
<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RVMS6vJzJyU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Ambient light

!!! caution
    Machine vision is highly sensitive to lighting conditions. We recommend maintaining consistent lighting in the workspace where the LumenPnP operates. Changes in ambient light may require readjustments to your vision settings.

---

## Understanding Computer Vision in OpenPnP

The computer vision system in OpenPnP captures images from the top or bottom camera and processes them through a "Pipeline" consisting of multiple stages. These stages fall into three main categories:

1. **Image Processing**: Modifies the image to make it easier for the computer to identify parts of the photo for better recognition. For example: `Threshold`, which converts an image to stark black and white.
2. **Feature Detection**: Identifies specific elements in the image. For example: `DetectCirclesHough`, which detects circular shapes.
3. **Visualize and Debug**: Vision overlays helpful markers to assist with your pipeline tuning by debugging, and tweaking it. For example: `DrawCircles`, which highlights detected circles on the image.

Each stage has adjustable "parameters" that fine-tune its function. For instance, the `Threshold` stage applies a brightness cutoff to differentiate objects from the background. Adjusting its `threshold` parameter changes the brightness level at which this separation occurs.

![Threshold comparison](images/threshold-comparison-general.webp)

For more advanced adjustments, you can add or remove processing stages in the pipeline. **We do not recommend doing this**.

---

## Pipeline Editing View

The pipeline editing view has several sections and features:

1. **Stage List**: Displays all stages in the pipeline. Click on a stage to view its results in the main display and modify its parameters.
2. **Main view**: Shows the output of the currently selected stage unless a specific stage is pinned (see #5).
3. **Stage output**: Displays error messages if there's a problem with your stage or pipeline.
4. **Stage Settings**: Allows you to change the settings for the selected stage.
5. **Pin Image**:. Locks a specific stage’s results in the main view, even when selecting other stages. This is useful for monitoring the impact of changes to a debugging stage in real time.

![Pipeline Editing View](images/pipeline-organization.webp)
