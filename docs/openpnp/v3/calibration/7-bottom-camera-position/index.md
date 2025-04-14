# Bottom Camera Position ([Video Guide](https://youtu.be/h3mtEQfGMlM?si=uyDBUttihPh80EQv&t=1580))

---

Now that we have precise alignment between the nozzle tips and the top camera, we can use the calibrated nozzle to set our bottom camera position.

1. **Open the Bottom Camera Settings**.
    * Navigate to `Machine Setup > Cameras > OpenPnpCaptureCamera Bottom`.<br/><br/>
     ![Select the bottom camera](images/select-bottom-camera-2.webp)
<br/><br/>

1. **Access the Position Tab**.
    * Click on the Position tab to begin setting the bottom camera’s location.<br/><br/>
     ![Select the position tab](images/bottom-camera-position.webp)
<br/><br/>

1. **Select Nozzle: N1**.
    * From the machine controls dropdown, select `Nozzle: N1 - N045 (Head:H1)`. This ensures the left nozzle is used for positioning.<br/><br/>
     ![Select nozzle from machine control dropdown](images/select-n1-machine-control-bottom.webp)
<br/><br/>

1. **Position Nozzle: N1 at Datum Board Height**.
    * Jog Nozzle: N1 (left toolhead) until it just barely touches the top surface of the datum board. This establishes a consistent Z-height reference.<br/><br/>
     ![Position the toolhead over the bottom camera](images/position-over-bottom-cam.webp)
<br/><br/>

1. **Align Nozzle Tip Over the Bottom Camera**.
    * Without changing the Z-height, jog the Nozzle: N1 (left toolhead) over the bottom camera and use OpenPnP’s viewfinder to center the nozzle tip in the image.<br/><br/>
     ![Position the toolhead over the bottom camera precisely](images/position-over-bottom-cam-precise.webp)
    !!! Tip "Fine-Tuning Focus"
        The bottom camera’s focus is pre-adjusted before shipping, but you can fine-tune it if needed. loosen the set-screw in the side and slightly rotate the bottom camera lens until the image appears sharp.
<br/><br/>

1. **Capture the Bottom Camera Position**.
    * Once the nozzle tip is sharp and centered, click the "Capture Toolhead Location" button to save the position.
    !!! note "Blurry or Pixelated?"
        If you are zoomed in very close to the nozzle tip, what may appear as blurriness could actually be pixelation. Try zooming out to check if this is the case.<br/><br/>
     ![Store the camera location](images/store-nozzle-location-bottom.webp)
<br/><br/>

1. **Apply and Save the Captured Nozzle Position**
    * Click `Apply` in the lower right corner to save the bottom camera position in OpenPnP.<br/><br/>
     ![Save the camera location](images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](images/save-config-small.webp)
<br/><br/>

---

## Next Steps

Next is [Nozzle Tip Calibration](../8-nozzle-tip-calibration/nozzle-tip-calibration.md).