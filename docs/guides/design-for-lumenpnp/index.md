# Design for LumenPnP

While the LumenPnP is capable of populating the vast majority of PCBs, there are general design guidelines that will help make population as smooth and automated as possible.

All machine capabilities can also be found in the v3.1 [brochure](https://cdn.shopify.com/s/files/1/0570/4256/7355/files/LumenPnP-v3.1-brochure.pdf?v=1698263482).

Also be sure to check out the [Midscale Website](https://midscale.io/) for information and resources for midscale manufacturing.

## Components

The LumenPnP can support up to 50 automated 8mm or 12mm feeders. This means you can have **up to 50 unique components in feeders** provided they come in 8mm and 12mm tape. When using strip feeders, it's possible to populate up to **79 unique components** on one machine.

LumenPnP v3.1+ Component Support:

- Minimum part size: **0402**
- Minimum lead pitch: **0.4mm**
- Max part weight: **25 grams** (N75 Nozzle tip)
- Max part height: **20mm**
- Down to **BGA 0.8mm** pitch
- Powered feeders: **8mm** and **12mm** tape width
- Strip feeders: **8mm, 12mm, 16mm, 24mm, 32mm, 44mm+** tape width

While it's impossible to list every IC and component package that the LumenPnP is able to populate, the dimensions above are good guidelines for checking a specific package.

## PCB

When designing the board, be sure to keep the PCB's dimensions under **225mm x 400mm**. If you are panelizing your PCB, be sure to keep the resultant dimensions of the panel smaller than this dimension as well. Note that this dimension assumes a third staging plate has been mounted to your machine.

It's also important to make sure that your PCB has [fiducials](https://en.wikipedia.org/wiki/Fiducial_marker#Printed_circuit_boards) to allow the LumenPnP to find your PCB in space for accurate population. We recommend using a **1mm diameter fiducial with at least a 2mm diameter soldermask opening**. This gives OpenPnP an easier time identifying the fiducial with machine vision. In KiCAD, this footprint is called `Fiducial:Fiducial_1mm_Mask2mm`.

We recommend adding **three fiducials** located at the **outside edges** of your board, ideally as far away from each other as possible. The farther at the edges you place them, the more accurate the fiducial calibration should be.

### Panelizing

Putting multiple boards into a **panel** of boards can help increase efficiency when using a pick and place machine by reducing the number of times you need to run a job. [KiKit](https://github.com/yaqwsx/KiKit) is a great tool for automatically panelizing your KiCAD PCBs, but it's possible to do it [manually as well](https://youtu.be/JMQgIM53zQM?si=e1Lw3Dab6k9kS6iE&t=6).

### Double Sided PCBs

The LumenPnP is capable of populating double-sided PCBs. There are a few things to consider if you'd like to do this:

- When populating the first side of the PCB, be sure to use **higher temperature solder paste**. After reflow, when stenciling the second side of the PCB, use a **lower temperature solder paste**. When reflowing for the second time at a lower temperature, the first side will not liquify and the parts will stay soldered on. It is possible to do this with one type of solder paste, but you're relying on only surface tension to retain the parts on the first side.
- All PCB mounting features used on the LumenPnP will have to accomodate components on the back side. When populating the second side of your board, the universal PCB mounting fixtures will have to be placed strategically as to not interfere with components already mounted on the first side of the board. Your stenciling solution, and reflow oven will also have to account for these parts already being populated.

### `Built With LumenPnP` Footprint

If you're using the LumenPnP to populate your PCBs, feel free to add the "Built With" mark on your PCB. KiCAD footprint files can be found [here](https://github.com/opulo-inc/lumenpnp/tree/main/lib/kicad/built-with-lumenpnp.pretty).

![built with mark](img/build-with-lumenpnp-stamp.webp)
