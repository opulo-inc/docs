# Semi Assembly (v3.1)

These are assembly instructions for the **Semi-Assembled** LumenPnP. If you're looking for the instructions for the "BYOP" bring-your-own-printer kit, you can find them [here](../byop/index.md).

## What is the LumenPnP?

The LumenPnP is an open source Pick and Place project led by [Opulo](https://www.opulo.io/). The LumenPnP is designed to be low cost and suited towards [mid-scale manufacturing](http://stephenhawes.com/level-2-manufacturing/).

![hero image of LumenPnP](3_1.webp)

The LumenPnP is an ongoing project. The current version, V3, can reliably place components as small as 0402 using 8mm [powered feeders](https://opulo.io/products/8mm-feeder) and/or 3D printed strip feeders.

The LumenPnP is completely open source and has an active community with ongoing mechanical, electrical, and software modifications.

It is completely open source and hackable. The main controller has three AUX ports, allowing anyone to add on peripherals or communicate with other machines.

!!! danger "Warning"
    This documentation corresponds with a specific machine **Version Number**. The Version Number represents what version of hardware your machine has. If you're building a Semi-Assembled LumenPnP, **you have a v3.1.0+ machine, and these docs are for you!** You should see "v3.1.X" on the pamphlet that was included in your kit. If you see "v2" on your pamphlet, use [these instructions](../byop/index.md) for your machine. If you see "v3.0.X" on your pamphlet, use [these instructions](../semi-assembly/index.md).

## Before you begin

### Machine Orientation and Terminology

Throughout this guide we'll be referring to different orientations and directions of the machine as "left, right, front, back, up, and down." In general, these words are in reference to the typical view of the machine, facing it directly, as shown below.

![hero image of LumenPnP](3_1.webp)

We'll also refer to putting the machine "back on its haunches." This refers to a feature of the LumenPnP where it can be lifted up by the front rail and let to rest upright on its back feet. This orientation is tremendously helpful for installing things to the staging plate and plugging things into the motherboard. Whenever putting your machine back, make sure the Y gantry is pushed all the way to the back of the machine to prevent backdriving the Y stepper motor driver.

### Usage

Make sure to keep the LumenPnP in a cool, dry environment. Do NOT expose to warm environments or direct sunlight for prolonged periods of time.  Use on a flat, stable surface.

### Help

If you find that there's something unclear in this documentation, please [submit a ticket on Github](https://github.com/opulo-inc/docs) about it! You can also file an issue using the link in the upper right of any page on this site. We're trying to make this as clear and understandable as possible, so every issue you tag helps us make it better for everyone else. You can also check out the [Discord server](https://discordapp.com/invite/TCwy6De) and ask questions to the community.

### Timing

Expect assembly to take about **50 minutes**.

### You'll Need

* Your packaged Semi-Assembled LumenPnP
* A clear, smooth, flat tabletop for assembly
* A computer
* The ability to plug in three high-bandwidth USB-A ports - Your computer will need to communicate with both the data stream that controls the machine, along with two webcam feeds. It might be possible to handle all of this data through one USB port on your computer with an external USB hub, but you might find you need to plug into a few different ports on your computer, depending on the hardware you have.

## Next steps

Let's dive in! The first step is [unboxing your machine](unboxing-3-1/index.md).
