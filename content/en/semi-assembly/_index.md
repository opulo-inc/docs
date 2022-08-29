---
title: "LumenPnP Semi Assembly"
linkTitle: "LumenPnP Semi Assembly"
weight: 5
type: docs
resources:
- src: "**.png"
- src: "**.jpg"
menu:
  main:
    weight: 5
---

These are assembly instructions for the **Semi-Assembled** LumenPnP. If you're looking for the instructions for the Kit, you can find them by clicking "LumenPnP Kit Assembly" above.

## What is the LumenPnP?

The LumenPnP is an open source Pick and Place project led by [Opulo](https://www.opulo.io/). The LumenPnP is designed to be low cost and suited towards [mid-scale manufacturing](http://stephenhawes.com/level-2-manufacturing/).

{{< container-image path="semi-hero.png" alt="hero image of LumenPnP" >}}

The LumenPnP is capable of placing parts as small as 0402, with support for down to 0603. It is currently set up to use strip feeders, but development around active, powered feeders is ongoing.

It is completely open source and hackable. The main controller has three AUX ports, allowing anyone to add on peripherals or communicate with other machines.

{{% alert color="danger" title="WARNING" %}}
This documentation corresponds with a specific machine **Build Number**. The Build Number represents what hardware and 3D printed parts your machine has. If you're building a Semi-Assembled LumenPnP, **you have a v3 machine, and these docs are for you!** You should see "v3" on the pamphlet that was included in your kit. If you see "v2" on your pamphlet, click on "LumenPnP Kit Assembly" in the menu bar above for instructions for your machine.

{{% /alert %}}

## READ BEFORE STARTING

### Machine Orientation and Terminology

Throughout this guide we'll be referring to different orientations and directions of the machine as "left, right, front, back, up, and down." In general, these words are in reference to the typical view of the machine, facing it directly, as shown below.

{{< container-image path="semi-hero-head-on.png" alt="hero image of LumenPnP" >}}

We'll also refer to putting the machine "back on its haunches." This refers to a feature of the LumenPnP where it can be lifted up by the front rail and let to rest upright on its back feet. This orientation is tremendously helpful for installing things to the staging plate and plugging things into the motherboard. Whenever putting your machine back, make sure the Y gantry is pushed all the way to the back of the machine to prevent backdriving the Y stepper motor driver.

### Help

If you find that there's something unclear in this documentation, please [submit a ticket on Github](https://github.com/opulo-inc/docs) about it! You can also file an issue using the link in the upper right of any page on this site. We're trying to make this as clear and understandable as possible, so every issue you tag helps us make it better for everyone else. You can also check out the [Discord server](https://discordapp.com/invite/TCwy6De) and ask questions to the community.

### Timing

Expect assembly to take about **one hour**.

### Tools Needed

* M2 Allen Wrench (Long, ball-end)
* M2.5 Allen Wrench (Long, ball-end)
* M3 Allen Wrench (Long, ball-end)
* M4 Allen Wrench (Long, ball-end)
* Small Phillips Screwdriver
* Small Flathead Screwdriver
* Flush Cutters

## Next steps

Let's dive in! The first step is [unpacking your machine]({{< relref "unpacking" >}}).