---
glightbox: false
---

# Debugging

This page is a central repository for debugging OpenPnP errors.

## Placement Errors

You might have found an inaccuracy or error when placing parts. This page address these errors, and how to go about fixing them. You might encounter a couple of these errors at once, so choose one to address before moving on.

::cards:: cols=3

- title: Random offset
  content: Parts are placed seemingly randomly.
  image: img/random-offset.webp
  url: random-offset.md

- title: Global offset
  content: Every part is shifted the same amount in X and Y
  image: img/global-offset.webp
  url: global-offset.md

- title: Nozzle offset
  content: All parts placed with a certain nozzle have offset
  image: img/nozzle-offset.webp
  url: nozzle-offset.md

- title: Part offset
  content: Parts have offset relative to part's orientation
  image: img/part-offset.webp
  url: part-offset.md

- title: Rotational offset
  content: Parts are placed with a consistent rotational offset
  image: img/rotational-offset.webp
  url: rotational-offset.md

- title: 90 degree offset
  content: Parts are rotated in increments of 90 degrees
  image: img/feeder-rotation.webp
  url: feeder-rotation.md

::/cards::

## Miscellaneous Errors

### Part not picking

![part fails picking](img/mispick.webp)

If the nozzle is not picking parts consistently, there are a few potential root causes:

- **The vacuum sensor threshold is too sensitive.** If you notice that your nozzle is attempting to pick a part, but seems to raise up too quickly, the vacuum sensor threshold value is incorrectly telling OpenPnP that it's successfully picked the part. This can be solved by [tuning your vacuum sensor threshold value](../calibration/10-vacuum-sensor/index.md).
- **The feeder Z position is set too high.** If the machine is told to pick a part slightly too high, the nozzle tip doesn't make a good seal on the part, and fails to pick. This is solved by adjusting the [feeder's height](../../feeders/7-setting-pick-position/setting-pick-position.md).
- **Lack of suction force from the nozzle tip.** Especially for the smallest N045 nozzle tip, some solder paste can get stuck in the tip, reducing suction force. If you cannot see a tiny circle of light shining through the tip when held up to a light, you might need to clean the tip with a thin wire and some isopropyl alcohol.

### Parts sticking

If you're having trouble getting the nozzle to release the part, there are a few potential root causes:

- **The board's Z position is set too high.** If the nozzle doesn't fully press the part into the solder paste, it won't help stick the part in position. Set the board's Z height a little lower to ensure the part is pushed into the paste properly.
- **The nozzle needs to be cleaned.** If solder paste gets onto the nozzle tip, it can stick to parts. Clean your nozzle tips using isopropyl alcohol and a thin enamel wire to clear out the opening.
- **Not enough dwell time.** If OpenPnP does not give the pneumatic lines enough time to equalize pressure before moving up after a placement, there might still be some latent vacuum in the lines causing the part to stick. [Disable vacuum sensing](../calibration/10-vacuum-sensor/index.md) and increase the "Place Dwell Time (ms)" on the "Configuration" tab for the relevant nozzle tip. (Vacuum sensing overrides any manually inputted dwell time.)

### "No result found" error

![no parts found error](../vision-pipeline-adjustment/images/no-parts-found.webp)

- If the component was not identified by the bottom camera correctly, you will likely need to adjust its [Part Identification Vision Pipeline](../vision-pipeline-adjustment/5-part-identification-pipeline.md).
