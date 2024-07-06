# Calibration - Introduction

## What you'll learn

This guide is focused on performing basic calibration for your LumenPnP. Specifically it will test the motion system, and calibrate the cameras so that they can identify objects and apply offsets to the toolhead for precise part picking and placing. These steps are usually only necessary when first setting up a LumenPnP for the first time.

Pick and place machines are complicated, and require lots of calibration to work correctly. Also, OpenPnP is a large piece of software, and can take time to learn. Please note that the process of learning the software and getting your machine calibrated can take many hours, and that time should be set aside for getting everything honed in.

We provide these docs, the walkthrough video, and default configuration files to make the process as straightforward as possible, but if you notice things that we can be doing to make the process easier, please do not hesitate to let us know by making a [Github Issue](https://github.com/opulo-inc/docs/issues).

!!! danger "Important"
    It is important that you complete these calibration steps **in order**. Each calibration step relies on the steps that come before, so it's imperative that you complete them in the order we have them listed.

## Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/h3mtEQfGMlM?si=iJdkwnZp_Jxw0jCX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Different calibration methods

OpenPnP has a feature called `Issues and Solutions` that tries to identify calibration tasks that need performing. Some users have reported success using this tool, but is incongruent with the rest of these calibration steps and provided configuration files. This documentation is aimed specifically at using the provided configuration files. **We highly recommend using the provided configuration files and following this documentation.** If you choose to use the `Issues and Solutions` tool instead, we recommend using the [OpenPnP Wiki](https://github.com/openpnp/openpnp/wiki) for reference.

If you'd like to start from scratch with your setup, community member Qwertymodo has posted a [very helpful video](https://www.youtube.com/watch?v=vuFalyzcCZA) showing his process of doing calibration on his machine from scratch. This video is now a bit out of date, but can be helpful in seeing how OpenPnP operates.

## **What you'll need**

- A LumenPnP with the mechanical and electrical build completed.
- A smooth, flat surface to operate your machine on. The LumenPnP should **always** be used on a flat surface.

## **Next Steps**

First, we'll [connect to your machine](2-connect-to-machine/index.md).
