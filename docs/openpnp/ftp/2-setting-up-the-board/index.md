# Setting up the Board

## Mounting the FTP PCB

!!! info "Note"
    It is not required that you mount your FTP board in the exact same location as described below. If you follow these steps you will have a slightly easier time setting the location of the board in OpenPnP, but if you need to set up a board somewhere else on the staging plates, that is totally fine, too.

1. Loosely screw in the universal mounting components in the following locations:
     * Static Board Mount positioned diagonally, screwed into B28
     * Dynamic Board Mount positioned vertically, screwed into D28
     * Dynamic Board Mount positioned horizontally, screwed into B30
     * Board Support placed in E31
  ![Install the board mounting hardware](images/Install-board-mounting.jpg)

2. Cut strips of double-sided tape and apply them to the top of the FTP board. Do not cover the fiducial markers, but make sure that each of the pads are covered by tape. The double-sided tape lets the components stick to the board so that you can do a "mock" run of a placement job without dealing with solder paste.
  ![Apply double-sided tape to the board](images/Apply-tape-to-board.jpg)

3. Place the FTP board in the holders and push them so that they're snug against the sides of the board. The top edge of the board should line up with the ridge in the dynamic board mount's tab.
  ![Insert the FTP board](images/FTP-pcb-mounted.jpg)
  ![Board Mount Tab](images/board-mount-tab.png)

4. Tighten down the holders. You shouldn't be able to move the board except by pressing on the tab holding it in place.

5. If you installed your holders in this location, the bottom left corner of your FTP board should be located around `X328, Y94`.

## Finding the FTP Location

The next step is to set the physical location of the FTP board in OpenPNP. You'll start by setting an approximate location and then fine tune the location using vision. Once the location is set, you can run the job to pick and place components. You'll likely need to go through these steps a few times to tune the settings.

1. Navigate to the `Job` tab in the top-right pane.
  ![Switch to the Job Tab](images/Job-tab.png)

2. In the bottom-right pane, you'll see the `Placements` panel. Find the three elements with the IDs: `FID1`, `FID2`, and `FID3`. You can sort the list by `Part` to find them easily.
  ![Find each of the board fiducial markers](images/Select-board-fiducials.png)

3. For each of the three elements, go to the `Type` column, select where it says `Placement` and switch it to `Fiducial`. This tells OpenPnP that these three elements on the board are not components to be picked and placed, but fiducials to be scanned.
  ![Switch each fiducial component to fiducial type](images/Switch-to-fiducial-type.png)

4. Back in the top-right pane, double-click on the `X` and `Y` values of `0.000` and change them to `X328` and `Y94` respectively. This will be the rough location of the bottom-left corner of the FTP board.
  ![Set the XY coordinates of your board](images/Set-board-location-xy.png)

5. Get the Z axis coordinate used when setting up the feeders, subtract `0.10` from it, and enter the result into the `Z` coordinate for the board. Setting the `Z` slightly lower than the actual board height allows the spring-loaded nozzle holder to lightly press components into the board to make them stick.
  ![Set the Z coordinates of your board](images/Set-board-location-z.png)

6. Click the "Position Camera on Board" icon button and check that the center of the camera feed is very roughly lined up with the bottom-left corner of the FTP board.
  ![Move the top camera to the board](images/Position-camera-on-board.png)

7. In the lower-right pane, select one of the fiducials to highlight it.
  ![Highlight one fiducial](images/Select-one-fiducial.png)

8. Click the "Position Camera" icon button to move the top camera over the fiducial location.
  ![Move the top camera to one fiducial to check its location](images/Position-camera-to-fiducial.png)

9. The alignment will probably not be perfect. To fix this, click on the digital readout in the bottom right corner to zero your current position.
  ![Switch the digital readout to relative mode](images/Clear-digital-readout.png)

10. Then, move the tool head with the Jog buttons until the fiducial is centered in the reticle.
  ![Use the Jog buttons to position the camera directly above the fiducial](images/Manually-jog-to-fiducial.png)

11. Read the relative XY position you've moved your tool head, and add those values to the board's X and Y positions. Do **not** change the position of the fiducial itself in the lower-right pane list as that will throw off the rest of the placements. Only adjust the location of the board itself, not the components relative to each other.
  ![Get the reading on the digital readout and apply it to the board position](images/Apply-dro-offsets.png)

12. In the lower-right panel, select the other fiducial points in turn, and check their location with the "position camera" icon button.
  ![Move the top camera to one fiducial to check its location](images/Position-camera-to-fiducial.png)

13. If all the fiducials are close to the reticle center, you're ready to run a fiducial scan to get the exact location of your FTP board. If only the first fiducial is centered, your board is probably rotated (ie the bottom edge is not parallel with the X axis). You can still move on to the fiducial scan, but you may need to manually readjust the board so that it is straighter.

14. Click on the "Fiducial Scan for Location" button. This will automatically move the camera to each of the fiducial locations and use the camera to try to identify the center of the fiducial. If it can find all three, it will automatically update the position and rotation of the board relative to the LumenPnP gantry.
  ![Automatically set board location](images/Auto-check-board-fiducials.png)

15. If the fiducial check fails, here are some options for moving forward:
    1. You might need to rotate the FTP board to be more square to the LumenPnP motion system.
    2. You may need to adjust your [PCB Fiducial Vision Pipeline](../../vision-pipeline-adjustment/3-pcb-fiducial-pipeline.md).
    3. If you'd prefer, you can also fall back on manually defining the board's location using the "Multiple Placements" icon button.
      ![Use the board location from multiple placements button to manually set the board location and rotation](images/Board-location-from-multiple-placements-button.png)

16. To double-check the board's location, rerun the fiducial scan. It is also useful to select some of the other placement locations and move the camera to them as well to check that the camera is centered between the metal pads. If the camera is not lining up correctly, see [Troubleshooting](../../../misc/troubleshooting/symptoms/index.md) for help getting things more tightly set up.

## Placing Components

!!! danger "Home Your Machine"

    It is crucial that you home your machine before each job. The stepper motors in the LumenPnP de-power after being idle for a while, so rehoming ensures that the machine is aligned and positioned correctly for placement.

1. Make sure you've pulled back the protective tape cover on your feeders and that you have the correct nozzle installed.

2. It's time to place your first component. Press the "Single job step" icon button repeatedly until OpenPnP moves to pick up an LED, check it's orientation over the bottom camera, and then place it on the board.
  ![Start placing components](images/One-step-placement.png)

3. If the component was not picked up correctly, you will need to adjust your [feeder location or height](../../../misc/troubleshooting/solutions#incorrect-feeder-z-position).
4. If the component was not identified by the bottom camera correctly, you will likely need to adjust its [Part Identification Vision Pipeline](../../vision-pipeline-adjustment/5-part-identification-pipeline.md).
5. If the component did not stick to the FTP board, you should lower the FTP board's Z axis location (`0.10mm` increments are a good starting place).
6. If the component stuck to the FTP board but was not centered on placement location (on the metal pads), you will need to do some fine tuning. It is useful to place five or so components before attempting to diagnose exactly what's wrong with your placements.
7. Continue to click the "Single Job Step" to place the additional components (or click the "Play" icon button and pause the operation when you're ready.)

It is perfectly normal for your very first set of component placements to have some errors. There are several different sources of placement error that we can address, one at a time. It will take a little trial and error to get placements perfect. Go to the [Vision Pipeline Adjustment](../../vision-pipeline-adjustment/1-introduction.md) page for easy instructions.
