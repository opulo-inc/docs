<!-- markdownlint-disable-file MD046 -->
# Update LumenPnP Firmware

All motherboards come pre-flashed with firmware from Opulo and should work out of the box without these steps. If you need to update your LumenPnP's firmware, this guide will help you do so.

Update your LumenPnP's motherboard using the [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) software by ST.

1. Download the latest [precompiled firmware](/software-updates/) `.bin` file for your machine version.

2. Download and install [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html).

    !!! note "Linux Users"
        If you're using Linux, you'll need to [do a couple steps](https://wiki.somlabs.com/index.php/Installing_STM32CubeProgrammer_on_Ubuntu_18.04) before programming.

3. Open STM32CubeProgrammer.
4. Select `USB` from the connection type dropdown on the right.
    ![USB Connection drop down](images/usb-connection.webp)
5. Click on the download tab in the sidebar.
    ![Switch to the download tab](images/download-tab.webp)

6. Attach the LumenPnP Motherboard to your computer with the included USB cable.

7. Boot your motherboard into DFU Mode
    1. Press and hold the `BOOT` button
    2. Press the `Reset` button and hold for 10 seconds
    3. Release the `Reset` button and wait for 10 seconds
    4. Release the `BOOT` button
  ![Boot and Reset buttons on the motherboard](images/IMG_0749.webp)

    !!! info "NOTE"
        If you have a hard time getting your board to enter DFU mode, instead try unplugging both USB and the barrel jack, holding the 'BOOT' button, plugging in USB and the barrel jack, waiting 10 seconds, then releasing the `BOOT` button.

        If you're on Windows, try uninstalling STM32CubeProgrammer and reinstalling. This will also reinstall the USB drivers which can fix connection issues.

1. Click the refresh button in the `Port` line to detect the motherboard's port.
    ![Refresh button](images/refresh-button.webp)

2. Select the newly discovered USB port from the `Port` dropdown menu.
    ![Select USB Port](images/select-port.webp)

3.  Double-check the other fields on the right match the image above:
    1. `PID: 0xdf11`
    2. `VID: 0x0483`
    3. `Read Unprotect (MCU): Unchecked`
    4. `TZEN Regression (MCU): Unchecked`

4.  Click the green `Connect` button to connect to the motherboard.
    ![Connect to Motherboard button](images/connect-to-motherboard.webp)

5. Delete all the flash on the chip by clicking the "Full Chip Erase" button.
    ![full chip earse button](images/full-chip-erase.webp)

    !!! info "This might take a while"
        Erasing all the flash on the chip takes a few minutes. Wait until you see a confirmation pop-up that the process is complete before continuing.

6.  Click the `Browse` button and select the firmware image you downloaded earlier.
    ![Click the browse button](images/browse-for-binary.webp)

7.  Click the `Start Programming` button to upload the firmware to the motherboard.
    ![Start Programming the motherboard](images/start-programming.webp)

8.  Wait until the confirmation pop-up appears that the process has completed.
    ![Upload finished](images/upload-done.webp)

9.  Press the `reset` button on the motherboard to reboot it.

10. The machine should show up as a COM/Serial Port on your PC now, and you should be able to access it via OpenPNP. If it doesn't, press the Reset button on the board again, or power-cycle the machine *after the flashing is completed*.

## Compile Marlin (For Developers)

As of this writing (April 2025) the LumenPnP dev team is waiting for an official 2.1.3 Marlin release. Because of how the configuration files are structured and updated with the project, we're building firmware out of a branch until the official release occurs. If you have questions about versions and compiling, please join the [LumenPnP Discord Server](https://discordapp.com/invite/TCwy6De) and we'll help you get it built correctly.

### Environment Setup and Compiling

1. Download the `rev05` branch in the `sphawes/Marlin` fork of Marlin, found [here](https://github.com/sphawes/Marlin/tree/rev05).
2. Install [VSCode][vscode] and its [PlatformIO extension][pIO].
3. Open Marlin firmware's folder in VSCode.

    ![](images/base.webp)

4. Replace the `Configuration.h` and `Configuration_adv.h` files in the `Marlin/Marlin` folder with config files of the same name in any of the config folders located in the `Marlin/Marlin` folder.
5. Select the board you're compiling for. This can be selected by clicking the "env:???????? (marlin)" text in the bottom menu bar, typing the name of the board in the search bar, and clicking the board you want.

    ![](images/click-env.webp)
    ![](images/select-env.webp)

6. Test compiling. this can be done by clicking the checkbox in the bottom icon menu.

    ![](images/compile.webp)

7. After you have Marlin compiling, begin making your edits. Many changes can be done in the `Configuration.h` and `Configuration_adv.h` files, especially for wide body mods, default acceleration and speeds, switching to endstops, and other basic config changes.

### Uploading

1. Attach the LumenPnP Motherboard to your computer with the included USB cable (USB C to A for Motherboard 3.0, or USB B to A for Motherboard 4.0).
2. Boot your motherboard into DFU Mode
    1. Press and hold the `BOOT` button
    2. Press the `Reset` button and hold for 10 seconds
    3. Release the `Reset` button and wait for 10 seconds
    4. Release the `BOOT` button
    ![Boot and Reset buttons on the motherboard](images/IMG_0749.webp)

    !!! info "NOTE"
        If you have a hard time getting your board to enter DFU mode, instead try powering off the machine entirely, holding the 'BOOT' button, plugging in power, waiting 10 seconds, then release the `BOOT` button.

3. Upload firmware to the board.
    1. via PlatformIO:

        ![Upload button in PlatformIO](images/vscode_marlin_env.webp)

    1. via `dfu-util` command line utility. PlatformIO puts the built binary in `Marlin/.pio/build/BOARD_NAME/firmware.bin`.

        ```shell
        dfu-util -d 0x0483:0xdf11 -s 0x08000000:leave -a 0 -D ~/path/to/firmware.bin
        ```

    1. via STM32CubeProgrammer (process shown above)

4. When finished, press the reset button on the motherboard to boot the new firmware.

5. The machine should show up as a COM/Serial Port on your PC now, and you should be able to access it via OpenPNP. If it doesn't, press the Reset button on the board, or power-cycle the machine *after the flashing is completed*.

## Troubleshooting

If you aren't able to upload, you can check to see if your motherboard is booting into DFU mode correctly:

* Windows:

  ![Device Manager](images/dfu_mode_device_manager.webp)

* Mac/Linux:

  ![lsusb output](images/linux_lsusb_bootloader.webp)

Also, reference [the Marlin instructions for uploading](https://marlinfw.org/docs/basics/install_platformio.html).

[abmvs]: https://marketplace.visualstudio.com/items?itemName=MarlinFirmware.auto-build
[marlin-docs]: https://marlinfw.org/docs/basics/auto_build_marlin.html
[marlin-config]: https://github.com/MarlinFirmware/Configurations/tree/import-2.1.x/config/examples/Opulo/Lumen_REV4
[marlin]: https://github.com/sphawes/Marlin/tree/feeder-safety
[vscode]: https://code.visualstudio.com/
[pIO]: https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide
