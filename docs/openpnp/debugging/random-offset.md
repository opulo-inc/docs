# Random offset

![random offsets and rotations](img/random-offset.png){: style="width:60%;margin-left:10%;"}

If your parts are being placed with seemingly random offsets and rotations, there are couple potential root causes:

## The board's Z position is too high

If the nozzle isn't pushing the part into the board, it's dropping a short distance onto the board, and not being placed accurately. Lower the board's Z axis location in `0.10mm` increments until you see that the nozzle tip is just barely pushing into the board.

## The part's height value is too large

If OpenPnP thinks the part is taller than it is, it'll try to place the part too high up, even if the board Z position is correct. Select the relevant part in the `Parts` tab and lower the height value to be accurate.

## Lack of suction force from the nozzle tip

If your nozzle is correctly pushing the part into the board and you're still getting a seemingly random offset, it's likely a lack of suction on the nozzle tip. When the LumenPnP head moves, the part will still stay attached to the nozzle tip, but can rotate and shift because it isn't being held onto the nozzle tip with enough force. We call this shifting "pirouetting." There are two potential solves:

- Use a larger nozzle tip for that part. The larger the nozzle tip diameter, the more suction force the part is held with.
- Especially for the smallest N045 nozzle tip, some solder paste can get stuck in the tip, reducing suction force. If you cannot see a tiny circle of light shining through the tip when held up to a light, you might need to clean the tip with a thin wire and some isopropyl alcohol.
