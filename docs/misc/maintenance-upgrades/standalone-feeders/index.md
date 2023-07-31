<!-- markdownlint-disable-file MD031-->
# Standalone Feeder Control

The default method of communicating with Opulo Feeders is through the LumenPnP motherboard. If you have a different PnP machine but would like to use Opulo Feeders, pick up a [LumenPnP motherboard](https://opulo.io/products/lumenpnp-pcb-kit), a [Slot Harness Kit](https://opulo.io/products/slot-harness-kit), and you'll be able to connect directly to them.

If you'd like to accomplish this a different way, there are a few options.

!!! danger "Help"
    This is not the standard way of communicating with the Photon feeders! As Photon gets more adoption, and boards are designed around communicating with them specifically, this will become more common practice. But for now, this method of talking with feeders will require a bit of debugging and trial & error. If you have trouble, hop into our [Discord server](https://discordapp.com/invite/TCwy6De) and see if someone has a solution!

## Lumen Emulation

By emulating the LumenPnP motherboard, you can communicate with feeders in the intended method using different hardware. You will need:

- [STM32F407 Dev Board](https://www.amazon.com/s?k=stm32f407)
- [RS-485 Transceiver](https://www.sparkfun.com/products/10124)

Following the [motherboard's schematic](https://github.com/opulo-inc/lumenpnp/tree/main/pnp/pcb/mobo), connect the RS-485 serial port connections on the STM32 dev board to the transceiver. Load Marlin onto the dev board in the factory recommended method (likely either DFU or via SWD). You'll need to provide your own 24v bus to power the feeders. Connect the output of the transceiver and 24v power supply to the input of the [Slot Harness Kit](https://opulo.io/products/slot-harness-kit).

This method allows you to interface with the feeders using the standard method in OpenPnP. Aside from setting up a second serial port for communicating with feeders, all other configuration should be the same.

## USB <-> RS-485 Dongle (Untested)

This method uses a [USB <-> RS-485 adapter](https://www.amazon.com/s?k=usb+rs485) to communicate with the feeders. Communicating directly with the RS-485 bus has been done for debugging, but not for regular communication during a job. This will require some tinkering to get going, including changing the regex for feeder communication in OpenPnP.