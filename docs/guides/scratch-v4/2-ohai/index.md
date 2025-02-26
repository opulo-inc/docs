# OHAI Guidance

## X Gantry

Follow the OHAI instructions for assembling the X Gantry:

### [OHAI X Gantry Assembly Instructions](https://ohai.opulo.io/lumen/x-gantry/)

### X Gantry OHAI Errata

- All torque spec references
    - If you have a torque driver, it's great to use the spec recommended, but you should also be just fine tightening things down very well in general.
- Check `top-camera` focus
    - You can skip this step. We focus every camera before shipping them out, and you can fine tune the actual focus on the machine after it's been assembled
    - v4 cameras also do not have a screw for focusing, there's a locking grease used to hold the focus, so you can just turn the lens with a bit of force
- Prepare NEMA-17-stepper-motor for x-linear-axis
    - Don't bother with the jig; it's approximately 10mm between the pulley and the motor front face, and it's easy to adjust the pulley position after you have the belt run and tensioned as well.
    - Don't worry about the torque spec either; it's good to have one, but tightening it down really well (without stripping) will also work alright.
- Install x-idler-mount onto alu-extrusion
    - Don't worry about the jig used to set spacing; modern v4 CAD actually has this spacing built into the `x-idler-mount` and the `x-motor-mount` inner faces, so as long as you push them all the way onto the extrusion, your spacing should be correct.
- Install linear-rail-525mm
    - The spacing jig is not necessary; a visual check of the rail being centered is plenty.
- Prepare NEMA-17-stepper-motor for z-axis
    - similar as the instructions for the X gantry pulley: just mount it on with a small gap, and adjust the precise position when you can visually align it with the opposite pulley
- Install toolhead components
    - The jig for tightening the nozzle and rotary coupler on is not necessary. Two wrenches can get the job done easily.
- Gundam test x-gantry
    - Ignore this step. This is an automated QC check we perform on the line, but you'll be able to test these things after your machine is fully assembled.

## Y Gantries

Follow the OHAI instructions for assembling the left and right Y Gantries.

!!! warning "v3.1/v3.2 Upgrade"
    You do not *technically* need to fully rebuild your Y gantries if you're updgrading from a v3.1 or v3.2. If you only swap out for new `y-gantry` prints, the rest can be left alone. That being said, we recommend reprinting these parts and fully reassembling them from scratch to stay in parity with your version number.

### [OHAI Y Gantry Assembly Instructions](https://ohai.opulo.io/lumen/y-gantry/)

### Y Gantry OHAI Errata

- All torque spec references
    - If you have a torque driver, it's great to use the spec recommended, but you should also be just fine tightening things down very well in general.
- Arbor press operations
    - An awl or screwdriver along with a few gentle taps with a mallet is helpful for setting nuts into prints, no arbor press needed.
- Prepare y-gantry stepper motor
    - similar as the instructions for the X gantry pulley: just mount it on with a small gap, and adjust the precise position when you can visually align it with the belt path through the extrusion after assembly
- Install linear-rail-550mm
    - The spacing jig is not necessary; a visual check of the rail being centered is plenty.


## Feeder Rails

Follow the OHAI instructions for assembling the front and back feeder rails.

!!! warning "v3.1/v3.2 Upgrade"
    You don't need to do this step at all if you're upgrading, but you should attach the `feeder cable adapter` to your original feeder cable harness so it can plug into your new motherboard!

### [OHAI Feeder Rail Assembly Instructions](https://ohai.opulo.io/lumen/feeder-rail/)

### Feeder Rail OHAI Errata

- Without the jig
    - the jig shown in this section is total overkill for just making one machine. It's much easier to just attach all right angle brackets to the extrusion on a flat surface, ensuring flushness at every step.
    - When mounting the blades to the rail, just ensure that when both rails are mounted, there is equal distance from the edge of the extrusion to either side of the bay of blades. They just need to be in the center of the rail.

## Drag Chain

Follow the OHAI instructions for assembling the drag chain:

### [OHAI Drag Chain Assembly Instructions](https://ohai.opulo.io/lumen/feeder-rail/)

### Drag Chain OHAI Errata

This section relies **heavily** on a custom jig at Opulo HQ. For broad direction of what cables go in which chain, with which orientation, the OHAI page is great.

For spacing of the cables within the chain, a rough approximation based on the images will get you plenty close, as it's not hard to shift and adjust them a bit when they're already on the machine. We use the jig to make it repeatable and consistent for the customer, but it's not worth trying to make a similar set up for just one machine, especially when it's fairly easy to shift them within the chain after assembly.

## Staging Plate

Follow the OHAI instructions for assembling the staging plate:

### [OHAI Staging Plate Assembly Instructions](https://ohai.opulo.io/lumen/staging-plate/)

### Staging Plate OHAI Errata

- Lots of photos of prints in this section are out of date. The bottom camera mount looks different in v4.
- Focus the bottom-camera
    - You don't have to do this step. We pre-focus cameras before shipping them out, and you'll fine tune focus on your machine after fully assembled anyway.
- QC Checklist
    - You can ignore the Google form! This is only for machines being shipped by Opulo.
