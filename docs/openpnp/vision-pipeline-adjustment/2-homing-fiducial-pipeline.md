# Homing Fiducials Pipeline

If you receive the error message `FIDUCIAL-HOME no matches found` when homing your LumenPnP, you likely need to adjust your homing vision pipeline. Follow the steps below for a guide on the iterative approach. See also our [setup video](https://youtube.com/watch?v=CSnczX6VJ7M&si=EnSIkaIECMiOmarE&t=1210).
![Cant't find homing fiducial](images/Cant-find-homing-fiducial.png)

## Open the Pipeline

1. Click on the `Machine Setup` tab in the top right pane.
  ![Machine Setup Tab](images/Machine-Setup-Tab-3.png)

2. Click on the "Expand" checkbox if necessary.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png)

3. Click on `Heads > ReferenceHead H1`.
  ![Reviewing the ReferenceHead options](images/Select-Reference-Head-H1.png)

4. Click on the "Position Camera over location" icon button show below. This will move the top camera to where your datum board is mounted.
  ![Position top camera over homing fiducial](images/Position-camera-over-homing-fiducial.png)

5. Confirm that your top camera is positioned exactly over the homing fiducial.
  ![Center the homing fiducial in the camera view](images/Homing-fiducial-centered.png)

6. Adjust the exposure of your camera image as mentioned in the [Homing Fiducial Section](../calibration/4-homing-fiducial/index.md#double-check-camera-exposure).

7. Go to the `Vision` tab.
  ![Switch to the vision tab](images/vision-tab.png)

8. Select on `FiducialVision` from the type dropdown.
  ![Select fiducial vision](images/fiducial-vision-dropdown.png)

9. Select `- Default Machine Fiducial Locator -` from the pipeline list.
  ![Select the default pipeline](images/select-default-fiducial-vision.png)

10. Click on Pipeline `Edit`.
  ![Edit the pipeline](images/edit-pipeline.png)

## Check the debug results

1. Click on the `DrawCircles` stage.
  ![Click on the DrawCircles stage](images/draw-circles-stage.png)

2. The main view will show a circle if OpenPnP was able to identify what it thinks is the homing fiducial.
    1. If there are more than one circle, then we need to more clearly distinguish the real homing fiducial.
    2. If there is one circle, but it is not correctly drawn around the homing fiducial, then we need to more clearly distinguish the homing fiducial.
    3. If there are no circles, we need to loosen the filtering to make the real homing fiducial easier to identify.
    4. If the image looks like the good one above, your pipeline is properly tuned. If you've still been getting failures when homing, you may need to slightly loosen the filtering.

## Adjust Pipeline

1. Click on the `Threshold` stage
  ![Select the threshold stage](images/threshold-stage.png)

2. Raise or lower the `threshold` parameter as necessary until the image is precise.
    1. If the image is too black, raise the `threshold` setting.
    2. If the image is too bright, lower the `threshold` setting.

3. Click on the `DrawCircles` stage and check if the fiducial has been correctly identified.
  ![Click on the DrawCircles stage](images/draw-circles-stage.png)

4. If not, pin the view of the `DrawCircles` stage.
  ![Pin the DrawCircles view](images/pin-draw-circles.png)

5. Click on the `DetectCirclesHough` stage.
  ![Select the detect circles stage](images/detect-circles-stage.png)

6. Raise or lower the `param2` parameter as necessary until the correct number of circles are identified.
    1. If there are no circles, lower the `param2` setting.
    2. If there are too many circles, raise the `param2` setting.
<!-- TODO: Photo shop image -->
## Review Pipeline Output

1. When the fiducial is correctly identified, close the pipeline editor.
  ![Close the pipeline editor](images/close-pipeline-editor.png)

2. When prompted, save the edits you've made.
  ![Save the changes to the pipeline](images/save-pipeline-changes.png)

3. Try homing the machine to see if it can identify the homing fiducial.
  ![Home the machine](images/home-machine-from-vision.png)

4. If you receive the same `FIDUCIAL-HOME no matches found` error, you'll need to keep tuning your pipeline. Go back to [Check  the debug results](#check-the-debug-results)
  ![Cant't find homing fiducial](images/Cant-find-homing-fiducial.png)
