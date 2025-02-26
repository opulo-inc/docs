# Introduction

Welcome to the v4 LumenPnP Scratch-Build Guide!

!!! danger "SCRATCH BUILD ONLY"
    This page is just for folks **building a LumenPnP from scratch!** If you bought a LumenPnP from Opulo's website, instead go to the [regular docs](/semi-assembly-4-0/).

This guide is for folks that are interested in 1) building a LumenPnP from source, or 2) bought a parts or upgrade kit from Opulo.

You can buy parts kits and individual parts from Opulo, or you can source the parts yourself from the BoM.

!!! warning "NOT FOR BEGINNERS"
    It is not a simple process assembling a LumenPnP. Building one from scratch will likely require debugging, referencing documentation, and rolling with some errata. This guide also mostly references Opulo's internal work instructions, so you'll have to be comfortable operating off of those as a baseline.

## Pick a Version

As you build your machine, you'll need to ensure you're **building a specific version**. Pick **the most recent v4 LumenPnP Release** version number, and *stick to it*. This will be your new machine version. Even if a new release comes out while you're building, **don't change half way through**. Each machine version stands alone as a valid build, but things get messy when you start mixing and matching.

Pick the most recent release on [the Releases page](https://github.com/opulo-inc/lumenpnp/releases), write the version number down, and only use the files from that release!

## Using OHAI

[OHAI (Open Hardware Assembly Instructions)](https://ohai.opulo.io/) is Opulo's internal (but public facing) work instructions for machine assembly. These are *heavily* optimized for use by Opulo employees, but are the most up to date and accurate way to assemble the most recent version of the LumenPnP.

This guide uses OHAI for the bulk of the instructions on assembly for this reason. However, they also mention lots of jigs and fixtures that are only at Opulo Headquarters. These are **not needed** to assemble a LumenPnP, they just help us make lots of them! Each page of this guide will give you similar or alternative methods that work best for a home build, and any errata to be aware of when using OHAI for reference.

## Tools Needed

- Mallet
- Metric allen key set
- Superglue or Loctite 435
- 2.5mm drill bit
- 

## v3.1 / v3.2 ➡️ v4 Upgrades

If you're upgrading your v3.1 or v3.2 LumenPnP to v4, you'll first have to fully disassemble your machine (with the exception of your Y gantries; see next page for more details). The parts you'll reclaim from your machine are:

- 7x 600mm Aluminum Extrusion
- 2x Y gantry t-nut bars and linear rails
- 1x X gantry t-nut bars and linear rails
- Assembled front and back feeder rails
- Power Supply
- USB Cable
- All Stepper Motors
- Nozzle Tips, nozzles, and rotary couplers
- Leg Extensions
- GT2 Belt
- Staging Plates
- Ring Lights
- Idlers and Pulleys

For everything else, please find a place to recycle or use for a new project!

This guide assumes you bought the [upgrade kit](https://www.opulo.io/products/lumenpnp-parts-kit?variant=46268670935227) from Opulo.

kit contains:

- drag chain kit
- control box
- fastener kit bag
- camera kit (no cables)
- z limit and xy limit
- frame cable harness set
- feeder cable blade adapter

## Where this guide ends

Upon completing this guide, you'll have what arrives in a box from Opulo when folks purchase a LumenPnP v4. After completing this guide, move on to [the normal assembly process](/semi-assembly-4-0/) to put all the main parts of the machine together.

## Resources

A lot goes into building a LumenPnP. Although it's meant to be buildable by anyone, it's *optimized* for being built at Opulo headquarters. There are some resources that will be useful to you as you build your machine:

- [Discord](https://discordapp.com/invite/TCwy6De) - The community discord is super helpful for folks putting together a machine.
- [Machine Source](https://github.com/opulo-inc/lumenpnp) - When in doubt, go to the source! Github has every part of the machine design source, so any question can be answered by perusing the repository. We recommend referencing the files attached to your version number's release (the source for your version number is attached to the release as well)

### [Let's get printing ➡️](1-printing/)
