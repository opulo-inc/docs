# 90 degree offset

![parts rotated 90 degrees from their intended rotation](img/feeder-rotation.webp){: style="width:60%;margin-left:10%;"}

If some of your parts are placed with a 90 or 180 degree offset, there are a couple potential root causes:

## The feeder's rotation value needs adjustment

When setting the position of a feeder, the rotation value you enter is equal to the initial rotation angle that the part is picked at. Adjust the `Rotation` field for the feeder of the part you notice is being placed incorrectly in increments of 90 degrees.

## The part's vision pipeline needs adjustment

If your rotation offset is consistently 90 or 180 degrees this is less likely, but it could still worth [adjusting that part's vision pipeline](/openpnp/vision-pipeline-adjustment/5-part-identification-pipeline/).
