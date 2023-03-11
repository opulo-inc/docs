# Software Setup

3rd: Marlin Update
Flashing a Pre-Compiled Binary (REV04 Motherboards)
A new version of Marlin is required to talk to feeders successfully. This version adds in a new M command: M485. Please flash the marlin-rev04-rs485.bin file in this folder onto your motherboard. For firmware flashing instructions, please see this section of the Opulo docs.

You can confirm that this worked successfully if you can send `M485 1234` to Marlin over serial, and it does not give you a “M485: Command not found” error. Any other errors are ok!
Flashing a Pre-Compiled Binary (REV03 Motherboards)
A new version of Marlin is required to talk to feeders successfully. This version adds in a new M command: M485. Please flash the marlin-rev03-rs485.bin file in this folder onto your motherboard. For firmware flashing instructions, please see this section of the Opulo docs.

You can confirm that this worked successfully if you can send `M485 1234` to Marlin over serial, and it does not give you a “M485: Command not found” error. Any other errors are ok!



## HI Gabe

the next header is openpnp setup

the instructions for doing this are under the header `4th: OpenPnP Setup` in the beta setup doc (with pictures and everything, just needs to be dropped in here)
