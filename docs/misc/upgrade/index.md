---
description: Instructions for Upgrading the LumenPnP
---
# Upgrade to v4

v4 has enough changes from the previous release that it's most effective to fully disassemble your current LumenPnP. There are effectively no subassemblies that have not be updated in some way, so a full rebuild is the fastest way to get your machine upgraded.

We highly recommend **picking a version**. Select a [release](https://github.com/opulo-inc/lumenpnp/releases) starting with `v4` from the LumenPnP Github page and stick to it!

All upgrade parts available on the [Opulo Web Store](https://www.opulo.io/collections/parts) are suited to upgrading to v4.<br><br/>

---

## Parts

When determining if you have the right parts, always reference the BOM. This is attached to each release. Download the zip file, unzip it, and open the HTML page with your browser. Make sure you have purchased all the parts needed, or already have them from disassembling your old build.

You'll have to print parts as well. There are printing instructions in the BOM file. When upgrading an existing machine to v4, it might be tempting to only reprint a subset of the parts. While some of the parts might be compatible or at least similar, we recommend reprinting everything, because every new release of the machine might have changed something. It's just a bit over a kilogram of plastic for a LumenPnP, so it's not much more material to ensure parity with the version you're building to.

If you have questions, please don't hesitate to [reach out](https://www.opulo.io/pages/contact-support).<br><br/>

**V3.1 / V3.2 ➡️ v4 Upgrades (WIP)**

If you're upgrading your v3.1 or v3.2 LumenPnP to v4, you'll first have to fully disassemble your machine (with the exception of your Y gantries. You can technically get away with not reprinting the front and back legs. Although there are some quality of life improvements in these files, it can save you from having to fully disassemble your Y gantries. Only the y-gantry print itself needs to be reprinted for v4). The parts you'll reclaim from your machine are:

* 7x 600mm Aluminum Extrusion
* 2x Y gantry t-nut bars and linear rails
* 1x X gantry t-nut bars and linear rails
* Assembled front and back feeder rails
* Power Supply
* USB Cable
* All Stepper Motors
* Nozzle Tips, nozzles, and rotary couplers
* Leg Extensions
* GT2 Belt
* Staging Plates
* Ring Lights
* Idlers and Pulleys

For everything else, please find a place to recycle or use for a new project!

Below is a tentative list of what you'll need for the upgrade, before Opulo has an official upgrade kit for sale:

* [v4 Drag Chain Kit](https://www.opulo.io/products/lumenpnp-drag-chain-assembly-kit)
* [Control Box](https://www.opulo.io/products/lumenpnp-control-box)
* [v4 Fastener Kit](https://www.opulo.io/products/lumenpnp-v4-diy-fastener-kit)
* [v4 Camera Kit](https://www.opulo.io/products/lumenpnp-v4-camera-set?variant=46315988746427)
* [v4 Endstop Set](https://www.opulo.io/products/lumenpnp-endstop-set)
* [v4 Frame Cable Harness Set](https://www.opulo.io/products/lumenpnp-frame-cable-harness-set)
* [Feeder Cable Adapter (lets you use your v3 feeder slots with the v4 control box)](https://www.opulo.io/products/feeder-cable-adapter)<br><br/>

---

## Build

With your parts and tools collected, dive into building! We *highly* recommend opening the [FreeCAD model of the LumenPnP](https://github.com/opulo-inc/lumenpnp/blob/main/pnp/cad/assembly.FCStd) for reference as you build.

The best place to start from is [this OHAI page](https://ohai.opulo.io/lumen/x-gantry/). Note that OHAI is written as internal assembly instructions for Opulo employees. It will reference jigs, tools, and other specifics that you might not have. This is the currently most accurate guide for upgrading your machine until dedicated build instructions are written.

If you have questions, please don't hesitate to [reach out](https://www.opulo.io/pages/contact-support) and we'll be happy to help!
