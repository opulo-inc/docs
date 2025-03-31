# Bottom Camera Position ([Video Guide](https://youtu.be/h3mtEQfGMlM?si=uyDBUttihPh80EQv&t=1580))

Now that we know the offset from the top camera to the nozzle, we can use the nozzle to set our bottom camera position.

1. Navigate to `Machine Setup > Cameras > OpenPnpCaptureCamera Bottom`.

    ![Select the bottom camera](images/select-bottom-camera-2.webp)

1. Click on the `Position` tab.

    ![Select the position tab](images/bottom-camera-position.webp)

2. Select the `Nozzle: N1` from the machine controls dropdown.

    ![Select nozzle from machine control dropdown](images/select-n1-machine-control-bottom.webp)

## v4

LumenPnP v4 is designed to have the bottom camera focused at the same height as the datum board. We'll set the bottom camera position and adjust focus using the datum board.

3. Jog N1 until it's just barely touching the top surface of the datum board. It doesn't matter exactly where, we just want to move to the Z position of the datum board for setting the bottom camera position.

    ![](images/n1-at-datum-height.webp)

1. While keeping the Z position the same, jog the camera over the bottom camera. Using the viewfinder in OpenPnP, center the nozzle tip in the image.

    ![](images/n1-datum-height-over-cam.webp)

    !!! warning "If the nozzle tip is blurry"

        If your nozzle tip is blurry when at this position, rotate the lens in the camera until the tip of the nozzle is sharp and in focus.

2.  With the nozzle tip sharp and in focus, click the "Capture Toolhead Location" button to capture the bottom camera position.
    ![Store the camera location](images/store-nozzle-location-bottom.webp)

3.  Click the `Apply` button to save the new camera position.

    ![Save the camera location](images/apply-bottom-cam-pos.webp)

## v3

LumenPnP v3 is designed to have the bottom camera focused at the nozzles when they're level (with a Z position of 31.5).

1. Click the "Home" button in OpenPnP to home your machine. This will make the nozzles level.
2. Jog the left nozzle (N1) above the bottom camera and centered in the image **without adjusting the Z position**.

    !!! warning "If the nozzle tip is blurry"

        If your nozzle tip is blurry when at this position, rotate the lens in the camera until the tip of the nozzle is sharp and in focus.

        ![](images/position-over-bottom-cam-precise.webp)

2.  With the nozzle tip sharp and in focus, click the "Capture Toolhead Location" button to capture the bottom camera position.
    ![Store the camera location](images/store-nozzle-location-bottom.webp)

3.  Click the `Apply` button to save the new camera position.

    ![Save the camera location](images/apply-bottom-cam-pos.webp)



## Next Steps

Next is [Nozzle Tip Calibration](../8-nozzle-tip-calibration/nozzle-tip-calibration.md).
