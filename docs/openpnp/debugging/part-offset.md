# Part offset

![parts placed offset relative to the part's orientation](img/part-offset.png){: style="width:60%;margin-left:10%;"}

If parts are placed offset **relative to the orientation of the footprint**, there are a couple potential root causes:

- **The vision pipeline is inaccurate**. When OpenPnP processes the bottom vision image of a component on a nozzle, it's identifying the part's boundaries and uses that information to place it accurately. If OpenPnP incorrectly finds the boundaries of your part, it will place it inaccurately as well. This usually happens because the nozzle tip is visible by the bottom camera, and OpenPnP incorrectly thinks it's part of the component on the tip. To fix this:
    -  Lower your bottom camera's exposure according to [the instructions for nozzle tip calibration](/openpnp/calibration/8-nozzle-tip-calibration/nozzle-tip-calibration/).
    -  [Adjust your bottom vision pipeline](/openpnp/vision-pipeline-adjustment/5-part-identification-pipeline/) to make sure OpenPnP is correctly finding your component.
