# Validation Calibration

<div class="progress-container">
  <div class="progress-step progress-complete">Preflight</div>
  <div class="progress-step progress-complete">I&S Calibration</div>
  <div class="progress-step progress-current">Validation</div>
</div>

---

## Test Bottom Vision

1. **Pick a component**.
    * In the `Feeders` tab, select the feeder and click the `Feed and pick` button as seen in the photo below. This will have the machine pick a resistor.
<br/><br/>

1. **Test alignment**.
    * Switch to the `Parts` tab, select the part you just picked and click the "Test Alignment" button.<br/><br/>
     ![test bottom vision](../../v4/ftp/3-test-run/images/test-bottom-vision.webp)
<br/><br/>

1. **Verify the bottom vision output**.
    * Watch the bottom camera feed. A red rectangle should outline the component perfectly before disappearing once the part has been checked. 
    * If the rectangle is misaligned on the part, adjust your [part identification pipeline](../../v4/vision-pipeline-adjustment/5-part-identification-pipeline.md) before proceeding.<br/><br/>
     ![bottom vision output](../../v4/ftp/3-test-run/images/bottom-vision-detection.webp)
<br/><br/>

1. **Recycle component**.
    * Once part identification is confirmed to be working, switch to the `Special` Tab in the `Machine Controls` pane.<br/><br/>
     ![Switch to the special tab](../../v4/ftp/3-test-run/images/Special-tab.webp)<br/><br/>
    * Click the `Recycle` button to instruct the LumenPnP to recycle the picked component.<br/><br/>
     ![Recycle the component you've picked up](../../v4/ftp/3-test-run/images/Recycle-component.webp)
<br/><br/>

---

## Step Through the Job

!!! danger "Home Your Machine"

    It is crucial that you home your LumenPnP before starting each job. The stepper motors in the LumenPnP de-power and lose position after being idle for a while. Rehoming ensures accurate placement again.

1. **Start Placing Components**.
    * Ensure the `Check Fids?` box in the `Job` tab is checked before proceeding.
    * Click the green `Play` button. This initiates fiducial calibration. **Once it is done checking the fiducials, click `Pause`**.
    * You can now use the yellow `Single job step` button, located beside the `Play` button, to proceed through the job one step at a time to ensure everything is going smoothly.
    * The LumenPnP will step through picking a component, align it using the bottom camera, and place it on the board.
    * Step through until a few parts are populated.<br/><br/>
     ![Start placing components](../../v4/ftp/3-test-run/images/One-step-placement.webp)<br/><br/>