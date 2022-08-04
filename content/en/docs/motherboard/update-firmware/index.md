---
title: "Update the Firmware"
linkTitle: "Update the Firmware"
weight: 30
description: >
  Flash Marlin onto the motherboard.
---

**This step is optional.** Your motherboard comes with a correct build of Marlin pre-installed, but if you'd like to update the firmware or change settings, this will help you do so!

## Using the Auto Build Marlin VSCode Extension

> Note that the currently linked-to Marlin version is `bugfix-2.1.x`. Building an older version of Marlin with the recommended config files won't work. If you are unsure whether a previously-downloaded local version of Marlin is the newest one, redownloading it is the safest choice.

1. Download the [latest Marlin firmware](https://github.com/MarlinFirmware/Marlin/archive/refs/heads/bugfix-2.1.x.zip) and unzip it.
2. Install [VSCode](https://code.visualstudio.com/) and its [PlatformIO extension](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide).
3. Open Marlin firmware's folder on VSCode.
4. Grab Marlin configuration files ([Configuration.h](https://raw.githubusercontent.com/MarlinFirmware/Configurations/bugfix-2.1.x/config/examples/Opulo/Lumen_REV3/Configuration.h) and [Configuration_adv.h](https://raw.githubusercontent.com/MarlinFirmware/Configurations/bugfix-2.1.x/config/examples/Opulo/Lumen_REV3/Configuration_adv.h)) and replace the files in the Marlin/Marlin folder with those new ones.
5. Install the Auto Build Marlin plugin using this [Marlin Documentation page](https://marlinfw.org/docs/basics/auto_build_marlin.html), or download it directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MarlinFirmware.auto-build).
6. Try to build Marlin using the build button with the hammer icon as shown below:

{{< container-image path="images/marlin-auto-build-ui.PNG" alt="Marlin auto-build UI" >}}

7. If this is successful, attach the LumenPnP Mobo to your computer with the USB cable. If it isn't, this might help:
    * Check the error messages for configuration errors and fix them, or replace it with the default config
    * If this fails, check that your config file version is the same as your Marlin version (e.g. a bugfix-2.0.x config file won't work in a bugfix-2.1.x)
    * When in doubt, re-downlaod Marlin and the configuration files from the links above

8. Boot your motherboard into DFU Mode
    1. Press and hold the `BOOT` button
    2. Press the Reset button and hold for 10 seconds
    3. Release the Reset button and wait for 10 seconds
    4. Release the `BOOT` button
  {{< container-image path="images/IMG_0749.JPG" alt="BOOT and RESET buttons" >}}

> If you have a hard time getting your board to enter DFU mode, instead try powering off the machine entirely, holding the 'BOOT' button, plugging in power, waiting 10 seconds, then release the `BOOT` button.

9. Flash the Motherboard using `dfu-util` by running the command `dfu-util -D ./.pio/build/Opulo_Lumen_REV3/firmware.bin -s 0x08000000 -a 0` in the integrated terminal in the root of the repository.  {{< container-image path="images/vscode-dfu-util-integrated-terminal.png" alt="integrated terminal in VSCode with DFU-Util command" >}}

10. Wait for the process to finish.

11. Press Reset on the board, or power-cycle the machine *after the flashing is completed*. Now it should show up as a COM/Serial Port on your PC:

- Windows:
  {{< container-image path="images/STM32_COM_port_connected.png" alt="STM32 shows up as a COM/Serial Port" >}}
- Mac/Linux:
  {{< container-image path="images/linux_lsusb.png" alt="STM32 shows up on lsusb" >}}


> Note that flashing the firmware using the Auto Build Marlin Plugin might work, but seems error-prone for most people. Therefore, if you want to try it, you can, but using `dfu-util` is generally a better idea.
> If you're absolutely sure that ABM is the way to go, do this:
>
> 1. Boot your motherboard into DFU Mode
>    1. Press and hold the `BOOT` button
>    2. Press the Reset button and hold for 10 seconds
>    3. Release the Reset button and wait for 10 seconds
>    4. Release the `BOOT` button
>  {{< container-image path="images/IMG_0749.JPG" alt="BOOT and RESET buttons" >}}
> 2. Now, press the upload button in ABM as shown below:
> {{< container-image path="images/marlin-auto-build-ui.PNG" alt="Marlin auto-build UI" >}}
> 3. Wait for the process to finish
> 4. Continue with step 11

 


## Manually Configuring PlatformIO

1. Download the [latest Marlin firmware](https://github.com/MarlinFirmware/Marlin/archive/refs/heads/bugfix-2.0.x.zip) and unzip it.
2. Install [VSCode](https://code.visualstudio.com/) and its [PlatformIO extension](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide)
3. Open Marlin firmware's folder on VSCode
4. Grab Marlin configuration files ([Configuration.h](https://github.com/MarlinFirmware/Configurations/raw/bugfix-2.0.x/config/examples/Index/REV_03/Configuration.h) and [Configuration_adv.h](https://github.com/MarlinFirmware/Configurations/raw/bugfix-2.0.x/config/examples/Index/REV_03/Configuration_adv.h)) and replace the files in the Marlin/Marlin folder with those new ones.


6. Attach the LumenPnP Mobo to your computer with the USB cable.

7. Boot your motherboard into DFU Mode
    1. Press and hold the `BOOT` button
    2. Press the Reset button and hold for 10 seconds
    3. Release the Reset button and wait for 10 seconds
    4. Release the `BOOT` button
  {{< container-image path="images/IMG_0749.JPG" alt="BOOT and RESET buttons" >}}

> If you have a hard time getting your board to enter DFU mode, instead try powering off the machine entirely, holding the 'BOOT' button, plugging in power, waiting 10 seconds, then release the `BOOT` button.

8. Upload firmware to the board via PlatformIO:
  {{< container-image path="images/vscode_marlin_env.png" alt="Upload firmware via PIO" >}}

9. Wait for the process to finish:
  {{< container-image path="images/PIO_upload_done.png" alt="PIO firmware upload done" >}}

11.  Press Reset on the board, or power-cycle the machine *after the flashing is completed*. Now it should show up as a COM/Serial Port on your PC:

- Windows:
  {{< container-image path="images/STM32_COM_port_connected.png" alt="STM32 shows up as a COM/Serial Port" >}}
- Mac/Linux:
  {{< container-image path="images/linux_lsusb.png" alt="STM32 shows up on lsusb" >}}



## Flashing Factory Firmware

If you've put new firmware on your motherboard, but just want to get back to the firmware that your machine was flashed with, check the release for your build number and download the .bin firmware file attached to it. Put your board into DFU mode as described above, connect to your computer, and flash the binary to the board using the following command:

```shell
dfu-util -D ~/path/to/firmware.bin -s 0x08000000 -a 0
```

## Troubleshooting

If you aren't able to upload, you can check to see if your motherboard is booting into DFU mode correctly:

- Windows:
  {{< container-image path="images/dfu_mode_device_manager.png" alt="STM32 in DFU mode in Device Manager" >}}

- Mac/Linux:
  {{< container-image path="images/linux_lsusb_bootloader.png" alt="STM32 in DFU mode in lsusb" >}}

Also, reference [the Marlin instructions for uploading](https://marlinfw.org/docs/basics/install_platformio.html). Be sure to use `bugfix-2.0.x` if uploading using these instructions.

### Alternative Method (Not Recommended)

This method requires an ST-Link (V2 Clone or equivalent). Additionally you need the software  [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) by ST. This method is a bit more involved and takes longer than just using the DFU mode.

1. Compile (build) the project normally with PIO
2. This generates a .bin-file that contains the firmware
3. Connect your board to your ST-Link through the SWD header on board
4. Start STM32CubeProgrammer
5. Connect to the MCU:
  {{< container-image path="images/connect_STM_to_programmer.png" alt="Connecting to the STM programmer" >}}

6. Click on **Open file** and navigate to the **firmware.bin** file in *PROJECT_DIRECTORY/.pio/build/STM32F407VE_black*
  {{< container-image path="images/open_firmware_bin_file.png" alt="Opening the compiled firmware file" >}}

7. Click on **Download**. This will flash the SMT32F4 with the provided firmware
  {{< container-image path="images/start_firmware_download.png" alt="Downloading (flashing) the firmware" >}}

8. Done! Now you just have to disconnect the ST-Link and press the reset button on the board.

## Next steps

Continue to [wiring and pneumatics]({{< relref "wiring-and-pneumatics" >}}).
