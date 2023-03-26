# OpenPnP Setup

## Actuator Setup

!!! note "Config Files from Release v3.0.5 or Later"
      If you've set up your LumenPnP using OpenPnP config files from release `v3.0.5` or later, you can skip this step; it's already been done for you.

1. Open OpenPnP.
2. Make a new Actuator titled `PhotonFeederData` and give it the following settings:
   ![PhotonFeederData actuator](img/photon-actuator.png)
3. Press Apply to save your changes.
4. Navigate to `Drivers > GcodeDriver`. Switch to the `Gcode` tab. Switch the `Head Mountable` dropdown to `Actuator: [No Head] PhotonFeederData`. Switch the `Setting` to `ACTUATOR_READ_COMMAND`. In the text box, paste in `M485 {Value}`.
   ![actuator read command for photon actuator](img/actuator-read-data.png)

5. Switch the `Setting` to `ACTUATOR_READ_REGEX`. In the text box, paste in `rs485-reply: (?<Value>.*)`
   ![actuator regex for photon actuator](img/photon-read-regex-data.png)

## Add Feeders

1. Power on your LumenPnP and connect to it.

2. Go to the “Feeders” Tab. Click the Plus to add a new feeder, and select `PhotonFeeder`.
   ![adding new photon feeder](img/new-photon-feeder.png)

3. Mount a feeder to your machine. It can be in any slot.
   ![mounting feeder](../4-mounting/img/mounting.gif)

4. Click the search button. OpenPnP will now scan for any feeders attached. This might take a minute!
   ![searching for photon feeders](img/photon-scan.png)

5. Once the search has completed, you should see the feeder you loaded on your rail appear in the Feeder table. The name will be the feeder's unique ID number, followed by the slot it's in.
   ![auto populated feeders](img/auto-populated-feeders.png)

6. Select a part from the drop down menu. (Any part will work, but OpenPnP requires a part to be selected before we can test.) Hit feed button shown below.
   ![feed command photon](img/feed-photon-feeder.png)

7. Now, you can set the pick position as you would with any other field in OpenPnP. There's also a field to choose the pitch of the parts in your tape.
   ![set photon pick position](img/pick-position.png)

8. Try to pick from the feeder using the pick button.

9. You should now be able to select the feeders as part of any job.

10. Move the feeder to a new slot. Click the `Find` button in that feeder's menu. You'll see the slot number update to reflect the feeder's new position. After you have positions set for all slots, OpenPnP will automatically go to the feeder's new location to pick when it detects a slot change.
