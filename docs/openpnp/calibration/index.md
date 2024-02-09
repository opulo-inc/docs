# Calibration - Introduction

## **What you'll learn**

This guide is focused on performing basic calibration for your LumenPnP. Specifically it will test the motion system, and calibrate the cameras so that they can identify objects and apply offsets to the toolhead for precise part picking and placing. These steps are usually only necessary when first setting up a LumenPnP for the first time.

Pick and place machines are complicated, and require lots of calibration to work correctly. Also, OpenPnP is a large piece of software, and can take time to learn. Please note that the process of learning the software and getting your machine calibrated can take many hours, and that time should be set aside for getting everything honed in.

We provide these docs, the walkthrough video, and default configuration files to make the process as straightforward as possible, but if you notice things that we can be doing to make the process easier, please do not hesitate to let us know by making a [Github Issue](https://github.com/opulo-inc/docs/issues).

!!! danger "Important"
    It is important that you complete these calibration steps **in order**. Each calibration step relies on the steps that come before, so it's imperative that you complete them in the order we have them listed.

If you'd like to start from scratch with your setup, community member Qwertymodo has posted a [very helpful video](https://www.youtube.com/watch?v=vuFalyzcCZA) showing his process of doing calibration on his machine from scratch.

## **Walkthrough Video**

This walkthrough video shows the entire calibration process starting from stock configuration. We highly recommend watching the video along with walking through the docs on this site when setting up your machine.

!!! danger "This video is for an old version"
        This video is for an older version of the LumenPnP. **Always reference the docs before the video**. The video is just meant to serve as a visual aid, but the written documentation should always be ground truth.

<div class="video-wrapper">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CSnczX6VJ7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## **What you'll need**

- A LumenPnP with the mechanical and electrical build completed.
- Read through the [OpenPnP Wiki](https://github.com/openpnp/openpnp/wiki/User-Manual). It'll be super important to getting going with your machine. **These docs are meant to augment the OpenPnP docs, not replace them.**

## **Next Steps**

First, we'll [connect to your machine](2-connect-to-machine/index.md).
