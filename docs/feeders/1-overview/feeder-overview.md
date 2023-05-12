# Overview

This is the Opulo 8mm Feeder:

![hero image of feeder8](img/with-arm-with-glow.png)

The 8mm feeder is an open source SMT component tape feeder that can reliably feed components as small as 0402. It is designed to work with a LumenPnP Pick and Place Machine, but can mount onto any 20mm X 20mm v-slot extrusion. The source can be found [here](https://github.com/opulo-inc/feeder).

The feeder uses the open source [Photon feeder controller firmware](https://github.com/photonfirmware/photon), and talks the Photon protocol over RS-485 to any Marlin host with RS-485 support.

You can fit up to 50x 8mm Feeders on the front and back rail of your LumenPnP when using two staging plates.

![2 plates with 50 feeders](img/2plates-50feeders.png)

If you'd like to add a third staging plate, you can fit 25x 8mm Feeders on the front rail of your LumenPnP.

![3 plates with 25 feeders](img/3plates-25feeders.png)

## Parts of the Feeder

=== "Pick Window"
    ![Pick Window](img/pick-window.JPG)

=== "Buttons"
    ![Buttons](img/buttons.JPG)

=== "Status Light"
    ![Status Light](img/indicator-light.JPG)

=== "Peel Gears"
    ![Peel Gears](img/peel-gears.JPG)

=== "Release Lever"
    ![Release Lever](img/locking-arm.JPG)

## Feeder Buttons

=== "Feeding"
    Tapping the forward button will make the feeder feed forward 4mm. Tapping the backward button makes the feeder feed backwards 4mm.
    ![gif of tapping forward button, feeding tape](img/feed-forward.gif)
    ![gif of tapping backwards button, feeding tape](img/feed-backward.gif)

=== "Driving Tape"
    Pressing and holding the forward or backward button will drive the tape at full speed.
    ![press hold forward, tape drives forward](img/drive-forward.gif)
    ![press hold backward, tape drives backward](img/drive-backward.gif)

=== "Changing Drive Mode"
    Pressing and holding both buttons at the same time will make the light flash blue. This toggles the feeder from driving tape with long presses, to peeling film with long presses. Press and hold both buttons again to switch back.
    ![press and hold both buttons, blue light](img/change-modes.gif)

=== "Peeling Film"
    When in Peel mode, press and hold the forward and backwards buttons to peel or unpeel film.
    ![press hold forward, peel film](img/peel.gif)
    ![press hold backward, unpeel film](img/unpeel.gif)

## Help

If you get stuck, please don't hesitate to send us an email at support@opulo.io, or use our [support form](https://opulo.io/pages/contact-support).

If you find that there's something unclear in this documentation, please [submit a ticket on Github](https://github.com/opulo-inc/docs) about it! You can also file an issue using the link in the upper right of any page on this site. We're trying to make this as clear and understandable as possible, so every issue you tag helps us make it better for everyone else. You can also check out the [Discord server](https://discordapp.com/invite/TCwy6De) and ask questions to the community.

## Next steps

Before using the feeders, you'll [install the slot harness](../2-install-harness/installing-the-slot-harness.md).
