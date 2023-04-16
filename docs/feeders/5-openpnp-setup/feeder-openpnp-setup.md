# OpenPnP Setup
<!-- 
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
-->

Both the feeder slots, and the Photon Feeders themselves have unique identifiers that OpenPnP will use to keep your components organized easily. Even if you rearrange your feeders, OpenPnP will remember which component was loaded onto it. And since OpenPnP will remember where each feeder slot is located, the picking location will already be set for you!

To get started the first time with your new feeders, you'll need to attach them all to your LumenPnP, and let OpenPnP scan them to save their information.

## Finding Feeders

You'll need to do these steps whenever you have brand new feeders.

1. Power on your LumenPnP and connect to it in OpenPnP as usual.

2. Click on the `Feeders` tab.
  ![Machine Setup Tab](img/feeders-tab.png)

3. Click the plus to add a new feeder,
   ![Add a feeder](img/add-feeder.png)

4. Select `PhotonFeeder`.
   ![adding new photon feeder](img/add-photon-feeder.png)

5. Mount all of your new feeders to your machine. They can be in any slot.
   ![mounting feeder](../4-mounting/img/mounting.gif)

6. Click the `Search` button. OpenPnP will now scan for any feeders attached. This will take a minute, and you'll see the progress showing which slots have feeders in them.
   ![search button for photon feeders](img/search-for-feeders.png)
   ![searching for photon feeders](img/feeder-search-progress.png)

7. Once the search has completed, each physically inserted feeder will be listed. The name will be the feeder's unique ID number, followed by the slot it's in. In this example, there are two feeders inserted.
   ![auto populated feeders](img/identified-feeders.png)

## Test Setup

To finish setting up your new feeders, we need to mark where they're located on your LumenPnP. As mentioned above, the locations of each feeder slot will be saved and reused, so you shouldn't need to do this every time you remove and replace a feeder.

1. Home your LumenPnP
   ![Home the machine](img/home-machine.png)

2. Use the machine controls to position your camera over the feeder. This will be more precise later after you load components into the feeder, so a rough estimate is fine for now.
   ![Move the machine](img/move-machine.png)

3. Save the rough feeder position with the "Capture Camera Location" button. For now, save it for both the `Slot Location` and `Part Offset`.
   ![Capture Camera Location](img/rough-camera-location.png)

4. Click `Apply` to save your changes.
   ![Apply Feeder Changes](img/apply-changes.png)

5. Select a part from the drop down menu.
   ![Assign a part to your feeder](img/assign-part.png)

6. Press the feed button to test that the feeder responds to the LumenPnP.
   ![Test Feed](img/feed-button.png)

## Next Steps

You'll need to fine-tune the position of the pick location—especially the z-height. This is easiest with [tape loaded into the feeder](../6-loading-tape/loading-tape.md).

!!! tip "Moving Feeders"
      If you remove a feeder from your machine and reinsert it into another feeder slot, you'll need to tell OpenPnP to update its location. To do this, click the `Find` button in that feeder's menu. You'll see the slot number update to reflect the feeder's new slot, and its location will update accordingly!
      ![Find new feeder location](img/find-feeder-slot.png)
