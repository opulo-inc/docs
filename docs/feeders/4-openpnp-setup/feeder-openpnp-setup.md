# Firmware Update

## Setup Feeder Data

1. Open OpenPnP, and make sure you have logs set to “TRACE” under the Log tab.
2. Make a new Actuator titled `PhotonFeederData` and give it the following settings:
   1. Driver: `GcodeDriver`
   2. Name: `PhotoFeederData`
   3. Machine Coordination > Before Actuation? `Checked`
   4. Machine Coordination > After Actuation? `Not Checked`
   5. Machine Coordination > Before Read? `Checked`
   6. Value Type: `String`
   7. ON Value: leave blank
   8. OFF Value: leave blank
   9. Actuation > Enabled: `AssumeUnknown`
   10. Actuation > Homed: `LeaveAsIs`
   11. Actuation > Disabled: `LeaveAsIs`
   12. Index: `0`
3. Press Apply to save your changes.
4. Navigate to `Drivers > GcodeDriver`.
5. Switch to the `Gcode` tab.
6. Switch the `Head Mountable` dropdown to `Actuator: [No Head] PhotonFeederData`.
7. Switch the `Setting` to `ACTUATOR_READ_COMMAND`.
8. In the text box, paste in `M485 {Value}`.
9. Switch the `Setting` to `ACTUATOR_READ_REGEX`.
10. In the text box, paste in `rs485-reply: (?<Value>.*)`

## Add Feeders

1. Connect to your machine.
2. Go to the “Feeders” Tab.
3. Click the Plus to add a new feeder, and select `PhotonFeeder`.
4. Click the search button, and wait. It will take a minute or two!
5. Once the search has completed, you should see the three feeders you loaded on your rail appear in the Feeder table. Their names will be their UUIDs, followed by the slot they’re in.
6. Set slot locations for all three <!-- TODO: Instructions for finding the slot location -->
7. Set the part offset to `0`
8. Pick a part for each feeder. (Any part will work, but OpenPnP requires a part to be selected before we can test feeder operation)
9. Click the “Feed” button and make sure all three feeders perform a feed.
10. You should now be able to select these feeders as part of any job.
