# Setting Pick Position

Now that you've loaded a component into the feeder, we'll fine-tune the feeder's position in OpenPnP and test picking a component.

1. Re-home your LumenPnP if necessary to make sure its position is accurate.

    ![Home the LumenPnP](../5-openpnp-setup/img/home-machine.webp)

2. In the `Feeders` tab, select your feeder from the list.

    ![Select Feeder from list](img/select-feeder-from-list.webp)

3. Press `Find` to update which slot its installed in.

    ![Find Feeder Button](img/find-feeder.webp)

4. Position the camera over the the feeder's location.

    ![Position Camera over Feeder](img/position-camera-over-feeder.webp)

5. Press The "Feed" button to make sure the feeder is working, and the tape is indexed properly.

    ![Feed Button with Tape](img/feed-button-2.webp)

6. Use the camera view to precisely target the center of the **pocket in the tape** for one of the components.

    ![Center slot in feeder](img/center-component-in-feeder.webp)

7. Press the "Capture Camera Location" to save the camera's position to the **Part Offset** settings.

    ![Capture Part Offset from Camera](img/capture-camera-offset.webp)

8. Enter `14mm` into the feeder's Z position to ensure the nozzle tip does not crash into the tape.

    ![Rough Z Location should be 14mm or more](img/rough-z-location.webp)

9.  Select the correct toolhead you'll be using to pick this component from the `Machine Controls` dropdown.

    ![Activate correct toolhead](img/activate-toolhead.webp)

10. Position your tool over the **Part Offset** location. Your nozzle tip should be hovering above the component. If the nozzle is not aligned correctly, you should adjust your [nozzle offset](../../openpnp/calibration/6-nozzle-offset/index.md).

    ![Position Nozzle over Part Offset](img/position-nozzle-over-offset.webp)

11. Use the `Jog` controls to lower the nozzle tip until it is just touching the component in the slot.

    ![Jog Nozzle Z-axis](img/jog-nozzle-z.webp)

12. Save the z-axis height with the "Capture Tool Location" button.

    ![Capture Tool Z Offset](img/capture-tool-z.webp)

13. Click `Apply` to save the settings.

    ![Apply Feeder Offset](img/apply-feeder-offset.webp)

14. Jog your machine away from the feeder.

    ![Jog Machine](img/jog-machine-away.webp)

15. Use the "Pick" button to test picking the component. If it isn't picked appropriately you may need to tune the Part Offset, especially the Z-axis.

    ![Pick Component Button](img/pick-component.webp)

16. Click the `Discard` button under `Machine Controls -> Special` to discard the part.

17. Repeat this tuning with each of your feeders.

!!! danger "Maintaining feeder position"
    After setting your pick position, we recommend keeping the feeders and machine powered. Powering down the machine can result in a slight change in position which could require resetting the pick position.

## Next Steps

If you came here from the FTP documentation, your next step is [running a test job](../../openpnp/ftp/3-test-run/index.md).
