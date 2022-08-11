---
title: "Setting up the FTP Board"
linkTitle: "Setting up the FTP Board"
weight: 3
type: docs
description: >
  Setting up the FTP Board
---

Note: it is not required that you mount your FTP board in the exact same location as described below. If you follow these steps you will have a slightly easier time setting the location of the board in OpenPnP, but if you need to set up a board somewhere else on the staging plates, that is totally fine, too.

## Securing the FTP Board

1. Loosely screw in the universal mounting components in the following locations:
   1. A tabbed holder in $$
   2. A flat holder diagonally in $$
   3. A flat holder horizontally in $$

2. Cut strips of double-sided tape and apply them to the top of the FTP board. Do not cover the fiducial markers, but make sure that each of the pads are covered by tape. This will let us mock placing components without using messy solder paste.

3. Place the FTP board in the holders and push them so that they're snug against the sides of the board.

4. Tighten down the holders. You shouldn't be able to move the board except by pressing on the tab holding it in place.

5. If you installed your holders in this location, the bottom left corner of your FTP board should be located around XXXX YYYY.

## Finding the FTP Board Location

We need to tell OpenPnP where the FTP board is in the LumenPnP. First we'll give it an approximate location, then we'll fine tune it, and then it'll be time to pick and place components and fine-tune the calibration.

6. Navigate to the `Job` tab in the  top-right pane.
7. In the bottom-right pane, you'll see the `Placements` panel. Find the three elements with the IDs: `FID1`, `FID2`, and `FID3`. You can sort the list by `Part` to find them easily.
8. For each of the three elements, go to the `Type` column, select where it says `Placement` and switch it to `Fiducial`. This tells OpenPnP that these three elements on the board are not components to be picked and placed, but fiducials to be scanned.
9. Back in the top-right pane, double-click on the `X` and `Y` values of `0.000` and change them to `XXXX` and `YYYY` respectively. This will be the rough location of the bottom-left corner of the FTP board.
10. Get the Z axis coordinate you used for your feeders, subtract `0.10` from it, and enter the result into the `Z` coordinate to the value you used for the feeders. Note that the nozzle holder on your tool head is spring loaded, so we will be gently pressing components into the board to make them stick.
11. Click the "Position Camera on Board" icon button and check that the center of the camera feed is very roughly lined up with the bottom-left corner of the FTP board.
12. In the lower-right pane, select one of the fiducials to highlight it.
13. Click the "Position Camera" icon button to move the top camera over the fiducial location.
14. The alignment will probably not be perfect. To fix this, click on the digital readout in the bottom right corner to zero your current position.
15. Then, move the tool head until the fiducial is centered in the reticle.
16. Read the relative XY position you've moved your tool head, and add those values to the board's X and Y positions.
17. In the lower-right panel, select the other fiducial points in turn, and check their location with the "position camera" icon button.
18. If all the fiducials are close to the reticle center, you're ready to run a fiducial scan to get the exact location of your FTP board. If only the first fiducial is centered, your board is probably rotated (ie the bottom edge is not parallel with the X direction). You can still move on to the fiducial scan, but you may need to manually readjust the board so that it is straighter.
19. Click on the "Fiducial Scan for Location" button. This will automatically move the camera to each of the fiducial locations and use the camera to try to identify the center of the fiducial. If it can find all three, it will automatically update the position and rotation of the board relative to the LumenPnP gantry.
20. If the fiducial check fails, here are some options for moving forward:
    1. You might need to rotate the FTP board to be more square to the LumenPnP motion system.
    1. You may need to adjust your vision pipeline.
    2. If you'd prefer, you can also fall back on manually defining the board's location.
21. To double-check the board's location, you can repeat step 17. It is also useful to select some of the other placement locations and move the camera to them as well to check that the camera is centered between the metal pads. If the camera is not lining up correctly, see Troubleshooting for help getting things more tightly set up.

## Placing Components

22. Make sure you've pulled back the protective tape cover on your feeders and that you have the correct nozzle installed.
23. It's time to place your first component. Press the "Single Job step" icon button repeatedly until OpenPnP moves to pick up an LED, check it's orientation over the bottom camera, and then places it on the board.
24. If the component was not picked up correctly, you will need to adjust your feeder location or height.
25. If the component was not identified by the bottom camera correctly, you will likely need to adjust its vision pipeline.
26. If the component did not stick to the FTP board, you should lower the FTP board's Z axis location (0.10mm increments is a good starting place).
27. If the component stuck to the FTP board but was not centered on placement location (on the metal pads), you will need to do some fine tuning. It is useful to place five or so components before attempting to diagnose exactly what's wrong with your placements.
28. Continue to click the "Single Job Step" to place the additional components (or click the "Play" icon button and pause the operation when you're ready.)

It is perfectly normal for your very first set of component placements to have some errors. There are several different sources of placement error that we can address, one at a time. It will take a little trial and error to get placements perfect. Go to the Troubleshooting page for easy instructions.