# Software Setup

To enable feeder functionality, you'll need to updated both your LumenPnP's firmware, and OpenPnP.

## Update OpenPnP

Make sure you're running XXX Version of OpenPnP or later
<!-- TODO: Get correct OpenPnP version -->

## Update LumenPnP Firmware

!!! danger
    Note that the firmware we're going to install only works on REV04 LumenPnP motherboards, which came with the LumenPnP v3 semi-assembled machine. If you had the older "BYOP" LumenPnP v2 kits, you have a REV03 LumenPnP motherboard.
<!-- TODO: What about rev 3 motherboards? Can they use feeders? -->

1. Download the latest LumenPnP Motherboard firmware here.  <!-- TODO: GET LINK TO CORRRECT FIRMWARE -->
2. Follow the instructions for [updating your LumenPnP motherboard's firmware](../../byop/motherboard/update-firmware/index.md).
3. Open OpenPnP
4. Connect to your LumenPnP.
5. Go to the GCode console.
6. Enter `M485 1234` and press enter.
7. If you receive `M485: Command not found`, you need to reinstall your motherboard's firmware. If not, you're good to go! (Any other error message is acceptable)

## Update Feeder Floors

### Flashing a Pre-Compiled Binary (via UART)

1. Download the firmware image from this google drive folder, called firmware.bin.
2. Download and install the STM32CubeProgrammer application, found here. If you don’t want to sign up for their newsletter, I attached the Mac and Windows downloads in this folder as well.
3. Connect the included USB to UART dongle to your computer.
4. Open the application, scan for new ports, select the port that represents the USB to UART bridge, and make sure all the other settings match the picture below (including selecting UART next to the connect button).

5. Hold down the BOOT button located here on the feeder:

6. While holding the BOOT button, insert the pins of the UART bridge into the through holes on the feeder as shown in the picture below. You can rest it on the table as shown to ensure there is a bit of pressure holding the pins into the plated pads. The feeder does not need to be mounted on a rail for this step; it can be powered by the programmer!
NOTE when this happens, you might notice the peel motor spins slowly. This is expected, and something we’ve eliminated in the next revision of feeders.

7. Click the green connect button in STM32CubeProgrammer.
8. Once connected, click the “Download” icon on the left, then select the provided firmware.bin file.
Ensure that the “Start address” is 0x08000000. You can check any of the checkboxes, but the first two will take much longer to program. Click Start Programming.
Wait until the software prompts that the firmware has been downloaded successfully. You may disconnect the UART bridge from the feeder.

### Compiling From Source (via SWD)

1. If you haven’t already, install VSCode on your machine.
2. If you haven’t already, install PlatformIO into VSCode.
3. Clone the Photon repository, which contains the feeder firmware.
4. Open the photon/photon folder in VSCode, and edit the platformio.ini file.
5. If you’re using a Black Magic Probe to flash the feeder, uncomment the line: `;upload_protocol = blackmagic`
6. If you’re using a JLink Segger to flash the feeder, uncomment the line: `;upload_protocol = jlink`
7. Save the file.
8. With the feeder powered and mounted on a feeder floor, plug your programmer into the SWD header on the back of the feeder.
9. Upload the firmware using the arrow button in the blue toolbar along the bottom of the VSCode window.
10. When complete, you should see your feeder’s LEDs all flash a couple times, indicating a successful programming and reboot.
