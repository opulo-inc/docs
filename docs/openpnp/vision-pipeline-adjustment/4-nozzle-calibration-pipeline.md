
# Nozzle Calibration Pipeline

If you receive the error message `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold` when homing your LumenPnP, you likely need to adjust your nozzle tip calibration pipeline. Follow the steps below for a guide on the iterative approach. See also our [setup video](https://youtube.com/watch?v=CSnczX6VJ7M&si=EnSIkaIECMiOmarE&t=1875).
![Cant't find nozzle tip](images/too-many-vision-redirects.png){ loading=lazy }

## Position Nozzle Over Bottom Camera

1. Install a nozzle tip on your first toolhead. In this example we'll work with the N045 nozzle tip.
  ![Install the N045 nozzle](images/N045-nozzle-installed.png){ loading=lazy }

2. Click on the `Machine Setup` tab in the top right pane.
  ![Machine setup tab](images/Machine-Setup-Tab-3.png){ loading=lazy }

3. Click on the "Expand" checkbox to open all of the features about your machine.
  ![Expanding the Machine Config options](images/Expand-Checkbox-3.png){ loading=lazy }

4. Click on `Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1`
  ![Open the Nozzle N1 settings](images/select-nozzle-N1.png){ loading=lazy }

5. Click on the `Nozzle Tips` tab.
  ![Nozzle Tip Tab](images/nozzle-tip-tab.png){ loading=lazy }

6. Click the `Loaded?` checkbox for the nozzle you're tuning.
  ![Loaded Checkbox](images/loaded-checkbox.png){ loading=lazy }

7. Click on `Nozzle Tips > ReferenceNozzleTip N045` (or whichever nozzle you're tuning).
  ![Nozzle Tips Section](images/nozzle-tips-section.png){ loading=lazy }

8. Click on the `Calibration` tab.
  ![Calibration Tab](images/nozzle-tip-calibration.png){ loading=lazy }

9. Home your LumenPnP to make sure your toolhead's location is accurate. Ignore the `Nozzle tip calibration: not enough results from vision. Check pipeline and threshold` error if it appears.
  ![Home the machine](images/home-during-bottom-cam-pos.png){ loading=lazy }

10. Select the `Nozzle: N1 - N045 (Head:H1)` from the machine controls dropdown. (Or whichever tip you're tuning)
  ![Select nozzle from machine control dropdown](images/select-n1-machine-control-bottom.png){ loading=lazy }

11. Click the "Position tool over location" button to bring the left nozzle above the bottom camera.
  ![Position over Bottom Camera](images/position-over-bottom-camera.png){ loading=lazy }

12. Click on Pipeline `Edit`.
![Edit Pipeline Button](images/edit-tip-pipeline.png){ loading=lazy }

## Stage Breakdown

![Stage Breakdown](images/stage-breakdown.png){ loading=lazy }

1. Stages 0-4 pre-process the image from the camera to make the tip of the nozzle clearer. Their goal is to outline the tip of the nozzle on its own so that it's exact position can be calculated. Of these stages, #3, `Threshold` is the most useful to tune. (See below for details)
2. The Results stage, `DetectCirclesHough`, takes the highlighted nozzle tip and calculates it's exact location by fitting a perfect circle to the tip. It's important that this calculation be reliable and repeatable. It's also important not to have extra erroneous circles detected, which could throw off the nozzle tip calibration and lead to imprecise picking.
3. Stages 5-7 are for debugging and showing you visually the output of the Results Stage. The most useful stage here is the #6 `DrawCircles` stage. After adjusting a setting, review the `DrawCircles` stage and check if the fiducial has been correctly identified.

!!! Tip
    It may be helpful to pin the `DrawCircles` stage so you can see the results of the pipeline. This saves you having to click back and forth between stages while making adjustments.
    ![Pin Draw Circles](images/pin-draw-circles-nozzles.png){ loading=lazy }

## General Strategy

For the most reliable identification of nozzle tips, you should tune the vision pipeline so that it can identify the internal hole of the nozzle tip, not the edge of the nozzle tip.
![Nozzle Edge vs. Nozzle Hole](images/nozzle-hole-vs-nozzle-edge.png){ loading=lazy }

1. If there is more than one circle detected, then we need to more clearly distinguish the real nozzle tip.
2. If there is one circle, but it is not correctly drawn around the nozzle tip hole, then we need to more clearly distinguish the hole.
3. If there are no circles, we need to loosen the filtering to make the nozzle tip easier to identify.
4. If the image looks like the good one above, your pipeline is properly tuned. If you've still been getting failures when homing, you may need to slightly loosen the filtering.

You will need to take an iterative approach to tune your vision pipeline. Because your machine's cameras and lighting conditions are unique, there is unfortunately no one-size-fits-all solution here. Make small changes and track how they affect the identification of the tip of your nozzle.

!!! Note "Check the Debug Results"
    Unlike [homing fiducial tuning](2-homing-fiducial-pipeline.md), nozzle tip tuning needs to be able to identify the nozzle multiple times as it is rotated. This can make it slightly trickier to see the issues with your calibration pipeline. You may need to run a round of calibration and watch the results live to see which orientation of the toolhead gives the pipeline the most trouble. You can also increase the `Allowed Misdetects` option if you're getting good picking results, but homing still fails occasionally.
    ![Calibrate Tip Button](images/calibrate-button.png){ loading=lazy }

## Threshold Tuning

The `Threshold` stage is the most commonly edited stage. It turns the camera image into black and white, which starkly defines the tip of your nozzle. It is important that the inner hole of your nozzle is a clear white circle after this step. Raise or lower the `threshold` parameter as necessary until the image is precise. Note that the `invert` button is checked so that the nozzle tip hole is shown in white for the next steps.

* If the image is too dark, raise the `threshold` setting.
* If the image is too bright, lower the `threshold` setting.

![Threshold Comparison](images/threshold-comparison-3.png){ loading=lazy }

## DetectCirclesHough Tuning

`DetectCirclesHough` is the other commonly edited stage. You'll need to experiment with the following adjustments:

`param2` adjusts how likely the algorithm will be to detect a circle.

1. If there are no circles, lower the `param2` setting.
2. If there are too many circles, raise the `param2` setting.

![Param2 Comparison](images/param2-comparison.png){ loading=lazy }

Depending on your nozzle tip, may also need to adjust the `maxDiameter` setting.

1. Raise the `maxDiameter` setting if there are no circles detected at all after adjusting the other settings.
2. Lower the `maxDiameter` setting if very large circles are drawn around noise in the image.

![MaxDiameter Comparison](images/max-diameter-comparison.png){ loading=lazy }

## BlurMedian Tuning

`BlurMedian` can be useful if there are debris blocking the inner hole of your nozzle tip. That debris can cause the round silhouette of the hole to be interrupted and not be identified by the `DetectCirclesHough` stage. Use `BlurMedian` to remove artifacts in the photo, but don't blur so much that you significantly change the silhouette of the nozzle.

![BlurMedian Comparison](images/blurMedian-comparison.png){ loading=lazy }

1. Raise the `kernelSize` if the center of your nozzle tip doesn't make a perfect circle.
2. Lower the `kernelSize` if the center of your nozzle tip is distorted from too much blur.
