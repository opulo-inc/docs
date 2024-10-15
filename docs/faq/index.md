# FAQ

## I need help with my LumenPnP

No worries! Reach out on our [support page](https://www.opulo.io/pages/contact-support) and we'll get you up and running!

## Why are the LumenPnP and Feeder designed the way they are?

We've written up our design decisions for the [LumenPnP](https://github.com/opulo-inc/lumenpnp/blob/main/DESIGN_DECISIONS.md) and the [Feeder](https://github.com/opulo-inc/feeder/blob/main/DESIGN_DECISIONS.md) in their repositories.

## What firmware is running on the feeders?

The LumenPnP feeders run open source called Photon. Photon is also the name of the protocol that Marlin uses to communicate with the bus of feeders using RS-485. You can find out more information about Photon in its [repository](https://github.com/photonfirmware/photon).

## Which Marlin branch should I build from?

The LumenPnP is currently running a version of Marlin with new features that support communication with Photon feeders. This version has not yet been merged into mainline Marlin. If you'd like to compile your own firmware, pull from the [Marlin branch with feeder support](https://github.com/sphawes/Marlin/tree/feeder-safety).

## Should I build or buy a LumenPnP?

It depends! If you are looking to have a blast putting together a desktop fabrication machine, then go for the build! It's a lot of work to put one together from scratch. It can take many, many hours to source all the parts and assemble the machine.

If you're just looking to have a tool that'll help you build your boards, buying a machine might be a better fit, as it's up and running in under an hour. You can pick one up [here](https://www.opulo.io/products/lumenpnp).

## How do I build one?

Everything you need to build the LumenPnP is attached to each release. In each release you'll find all source material, STLs for 3D printing, firmware, and a full annotated Bill of Materials with purchase links. Go to the [most recent release in the Github repository](https://github.com/opulo-inc/lumenpnp/releases) and everything you need is attached as an asset.

Some parts in the Bill of Materials are difficult to source. These components are [available to purchase](https://www.opulo.io/collections/parts) if you don't want to find them yourself.

Opulo keeps all of its internal assembly instructions [public and available](https://ohai.opulo.io/), which is a helpful resource when building your own. Note that this documentation is meant for technicians at Opulo, so it references jigs and tools that you might not have.

If you're trying to program your feeder slots, there's a utility in the [LumenPnP Debug Tool](https://debug.opulo.io/) that will let you program them using a single feeder.

## Can you update the repo?

Opulo's source repositories are updated continuously. All work is pushed on a daily basis to the relevant feature branch. If you don't see updates in the repo, it's likely you're looking in `main` and the changes are in another branch.
