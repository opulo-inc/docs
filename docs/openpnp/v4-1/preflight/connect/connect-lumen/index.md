# Establish a Connection to Your LumenPnP

<div class="progress-container">
  <div class="progress-step progress-complete">Install & Import</div>
  <div class="progress-step progress-current">Connect LumenPnP</div>
  <div class="progress-step">Connect Cameras</div>  
  <div class="progress-step">Homing</div>
  <div class="progress-step">Nozzle Tips</div>
  <div class="progress-step">Calibration Prep</div>
  <div class="progress-step">OpenPnP Overview</div>
</div>

---

## Power On the Machine

1. Before connecting, **make sure the LumenPnP is powered on.**
    * The controller board should already be connected to your computer via USB.

---

## Select the Serial Port

1. Launch OpenPnP
2. Locate the `Machine Setup` tab
3. In the top pane, `Machine Setup > Drivers > GcodeDriver > Configuration`
4. Find the `Port` dropdown
5. Select the available serial port
    * Typical port names for **Linux**: `/dev/ttyACM0` (or some other number other than 0)
    * Typical port names for **Windows**: `COM3, COM4, COM5, etc.`

![connect to openpnp](../../../../v4/calibration/2-connect-to-machine/images/05-choose-serial-port-gif.gif)

---

## Connect to the Machine

1. Click the green power button in the Machine Controls panel.
2. If the connection is successful:
    * The machine will enable
    * The Home icon will turn yellow
    * The green power button is now red
3. This indicates OpenPnP is now communicating with the LumenPnP.

![connect to openpnp](../../../../v4/calibration/2-connect-to-machine/images/08-click-power-button.gif)

---

<div class="stop-if"> <div class="stop-if-title"> Stop If </div>

You do not see any available serial ports in the dropdown.

This usually means the machine is not detected by your computer.
Check the USB cable and confirm the machine is powered on.

</div>

**If the Machine Does Not Connect**

1. Check the following:
    * The machine power supply is turned on
    * The USB cable is connected
    * The correct serial port is selected
    * No other software is using the serial port
2. Restarting OpenPnP can also help refresh the available ports.

<div class="pro-tip"> <div class="pro-tip-title"> Pro Tip </div>

If you unplug and reconnect the USB cable, the correct serial port will usually be the new device that appears in the list.

</div>

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
Now that you've established a connection with the LumenPnP, we can connect and set up the top and bottom cameras.
</div>

<a href="../../connect/connect-cameras/" class="next-step">Conenct Cameras →</a>

</div>