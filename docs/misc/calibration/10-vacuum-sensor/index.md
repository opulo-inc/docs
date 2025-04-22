# Vacuum Part Detection

![](../../calibration/img/lumenpnp-v3-docs-logo-small.png)

When picking up parts with the LumenPnP, it’s important to verify that a part has been successfully picked. While the bottom camera can confirm this visually, using the LumenPnP's vacuum sensors provides a faster way to detect a successful pick.

---

## How Vacuum Part Detection Works

When a part is picked up, it seals the nozzle opening, causing an increase in vacuum pressure within the pneumatic line. This change in pressure is measured by the vacuum sensors, and OpenPnP uses this data to determine whether a part has been successfully picked. With the nozzle tip covered, **if the vacuum sensor value falls within the Vacuum Range low and high values, OpenPnP considers the part "picked"**.

Each nozzle has a different vacuum reading due to variations in nozzle tip size. **The exact numbers aren’t critical as long as you understand how to set the high and low values correctly and adjust them accordingly**.
<br/><br/>

!!! note "Disabling Vacuum Detection is an Option"
    **Vacuum Part detection is not required to use the LumenPnP** because the bottom camera checks for a part before placing anyway. If you'd like to disable this feature, it's just a matter of setting "**Measurement Method**" to "**None**" on the relevant nozzle tip. **Don't forget to `Apply` your settings and save your configuration before moving on**. `Machine Setup > Nozzle Tips > Reference Nozzle Tip N## > Part detection tab > Measurement Method > None`

     ![](../../../openpnp/v4/calibration/10-vacuum-sensor/images/turn-off-vacuum-sensing.gif)
<br/><br/>

---

## Setting Up Vacuum Part Detection for Nozzle: N1

1. **Select the correct nozzle to control**.
    * In the bottom left of OpenPnP, select `Nozzle: N1 - N045 (Head:H1)` from the **machine controls** dropdown.<br/><br/>
     ![Select nozzle: N1 from machine control dropdown](../../../openpnp/v4/calibration/10-vacuum-sensor/images/01-switch-to-nozzle-n1.webp)
<br/><br/>

1. **Confirm the correct nozzle tip is installed**.
    * Ensure that the `N045` nozzle tip is securely attached to **Nozzle: N1 (left toolhead)**.
<br/><br/>

1. **Position Nozzle: N1 for Accurate Readings**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom > Position tab`
    * Click the `Position the tool over the center of the location` button.
    * This brings the `nozzle: N1` to the **same Z height as the datum board**, ensuring more consistent readings for the following steps.<br/><br/>
     ![Navigate to Positions tab](../../../openpnp/v4/calibration/10-vacuum-sensor/images/02-position-nozzle-over-bottom-n1.webp)
<br/><br/>

1. **Open the Part Detection Settings**.
    * Navigate to `Machine Setup > Nozzle Tips > ReferenceNozzleTip N045 > Part Detection`.<br/><br/>
     ![Enabling part detection](../../../openpnp/v4/calibration/10-vacuum-sensor/images/03-n045-part-detection-tab.webp)
<br/><br/>

1. **Measure the Vacuum Pressure**.
    * In `Machine Controls`, navigate to the `Actuators` tab.
    * Select `H1:VAC1` to open the vacuum pressure window.
    * Click `On` to activate the pump and valve. <br/><br/>
     ![Turn on punp](../../../openpnp/v4/calibration/10-vacuum-sensor/images/04-turn-on-pump.gif) <br/><br/>
    * Click `Read`. A value will appear in the `Read Value box`. This represents the vacuum pressure when the Nozzle: N1 is **uncovered**.
    * **Take note of this number**. We will need it later.<br/><br/>
     ![actuator control](../../../openpnp/v4/calibration/10-vacuum-sensor/images/05-read-vacuum-sensor-n045.webp)
<br/><br/>

1. **Measure the Vacuum Pressure with a Sealed Nozzle**.
    * Cover the nozzle tip completely with your fingertip.
    * Click `Read` again. This represents the vacuum pressure when a part is picked, or "**covered**".<br/><br/>
     ![Turn on punp](../../../openpnp/v4/calibration/10-vacuum-sensor/images/06-reading-with-finger-covering-n045.webp)<br/><br/>
    * **Take note of the new value**. We will also need it later.
    * Click `Off` to deactivate the pump and valve.
    * Close the `H1:VAC1` vacuum pressure window.
<br/><br/>

1. **Calculate the Detection Threshold**.
    * **Find the midpoint** between the uncovered and covered values. For example:
        * Uncovered: **220**
        * Covered: **200**
        * Midpoint: **210** → Enter this as the `High Value`.<br/><br/>
     ![entering vac threshold value for n045](../../../openpnp/v4/calibration/10-vacuum-sensor/images/07-enter-in-high-value-field-n045.webp)<br/><br/>
    * Enter the calculated midpoint value into the **Vacuum Range** `High Value` field for the **N045** nozzle tip.
    * Ensure the `Low Value` is at least **10-20 units lower** than the "Midpoint" reading. The default low value is **220**, but if your readings are close to this number (like the example above), you may need to lower it further to avoid false detections. If your Midpoint value is **210**, setting the `Low Value` to **190 (or lower)** is a good starting point.<br/><br/>
         ![entering vac threshold low value for n045](../../../openpnp/v4/calibration/10-vacuum-sensor/images/08-lower-low-value-if-needed.webp)<br/><br/>

    !!! caution
        The difference between uncovered and covered readings may be small, but **even a single-digit change can indicate a successful pick**. Nozzle sizes affect these readings, so expect variations between nozzles.
<br/><br/>
1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes to the **N045** nozzle tip.<br/><br/>
     ![apply](../../../openpnp/v4/calibration/2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../../../openpnp/v4/calibration/2-connect-to-machine/images/save-config.webp)<br/><br/>

---

## Setting Up Vacuum Part Detection for Nozzle: N2

1. **Select the correct nozzle to control**.
    * In the bottom left of OpenPnP, select `Nozzle: N2 - N24 (Head:H1)` from the **machine controls** dropdown.<br/><br/>
     ![Select nozzle: N2 from machine control dropdown](../../../openpnp/v4/calibration/10-vacuum-sensor/images/09-select-nozzle-n2.webp)
<br/><br/>

1. **Confirm the correct nozzle tip is installed**.
    * Ensure that the `N24` nozzle tip is securely attached to **Nozzle: N2(right toolhead)**.
<br/><br/>

1. **Position Nozzle: N2 for Accurate Readings**.
    * Navigate to `Machine Setup > Cameras > OpenPnPCaptureCamera Bottom > Position tab`
    * Click the `Position the tool over the center of the location` button.<br/><br/>
     ![Position the nozzle to be bove the bottom camera](../../../openpnp/v4/calibration/10-vacuum-sensor/images/10-position-nozzle-over-bottom-cam-n2.webp)<br/><br/>
    * This brings the `Nozzle: N2` to the **same Z height as the datum board**, ensuring more consistent readings for the following steps.
<br/><br/>

1. **Open the Part Detection tab**.
    * Navigate to `Machine Setup > Nozzle Tips > ReferenceNozzleTip N24 > Part Detection`.<br/><br/>
     ![Enabling part detection](../../../openpnp/v4/calibration/10-vacuum-sensor/images/11-n24-part-detection-tab.webp)
<br/><br/>

1. **Measure the Vacuum Pressure**.
    * In `Machine Controls`, navigate to the `Actuators` tab.
    * Select `H1:VAC2` to open the vacuum pressure window.
    * Click `On` to activate the pump and valve.<br/><br/>
     ![Activate the Pump and Valve](../../../openpnp/v4/calibration/10-vacuum-sensor/images/12-turn-on-h1-vac2.gif)<br/><br/>
    * Click `Read`. A value will appear in the `Read Value box`. This represents the vacuum pressure when Nozzle: N2 is **uncovered**.
    * **Take note of this number**. We will need it later.<br/><br/>
     ![vac1 actuator](../../../openpnp/v4/calibration/10-vacuum-sensor/images/13-n24-reading-open.webp)
<br/><br/>

1. **Measure the Vacuum Pressure with a Sealed Nozzle**.
    * Cover the nozzle tip completely with your fingertip.
    * Click `Read` again. This represents the vacuum pressure when a part is picked, or "**covered**".<br/><br/>
     ![Vacuum Pump Reading for N24](../../../openpnp/v4/calibration/10-vacuum-sensor/images/14-n24-reading-covered.webp)<br/><br/>
    * **Take note of the new value**. We will also need it later.
    * Click `Off` to deactivate the pump and valve.
    * Close the `H1:VAC2` vacuum pressure window.
<br/><br/>

1. **Calculate the Detection Threshold**.
    1. **Find the midpoint** between the uncovered and covered values. For example:
        * Uncovered: **230**
        * Covered: **200**
        * Midpoint: **215** → Enter this as the `High Value`.<br/><br/>
         ![entering vac threshold value for n24](../../../openpnp/v4/calibration/10-vacuum-sensor/images/15-enter-high-value-for-n24.webp)<br/><br/>
    * Enter the calculated midpoint value into the **Vacuum Range** `High Value` field for the **N24** nozzle tip.
    * Ensure the `Low Value` is at least **10-20 units lower** than the "Midpoint" reading. The default low value is **220**, but if your readings are close to this number(like the example above), you may need to lower it further to avoid false detections. If your Midpoint value is **215**, setting the `Low Value` to **195 (or lower)** is a good starting point.<br/><br/>
      ![entering vac threshold value for n045](../../../openpnp/v4/calibration/10-vacuum-sensor/images/16-enter-low-value-for-n24.webp)<br/><br/>

    !!! caution "Don't forget"
        The difference between uncovered and covered readings may be small, but **even a single-digit change can indicate a successful pick**. Nozzle sizes affect these readings, so expect variations between nozzles.

1. **Apply and Save**
    * Click `Apply` in the lower right corner to save your changes to the **N24** nozzle tip.<br/><br/>
     ![apply](../../../openpnp/v4/calibration/2-connect-to-machine/images/apply-button.webp)<br/><br/>
    * Save your OpenPnP configuration now. `File > Save Configuration`.<br/><br/>
      ![Save your config now](../../../openpnp/v4/calibration/2-connect-to-machine/images/save-config.webp)<br/><br/>

---

## For LumenPnP v2 Machines Only

**Skip this section if you are not setting up a LumenPnP V2**.

!!! note "v2 Interposers"
    If you have a v2 machine, please [check if you have interposer boards installed](../../../guides/rev3-vac-interposer/index.md).

1. Select your GcodeDriver, then under the Gcode tab, select the `H1 VAC1` actuator, and select the `ACTUATOR_READ_COMMAND` setting.

2. Make sure the following Gcode is present in the field:

    ```gcode
    M3426 G2 C1 I1 A110
    ```

    !!! note "Sensor Address"
        In the above code snippet, the line `M3426 G4 C1 I1 A110` uses `A110` to specify which sensor to read from. Due to the way the sensors are programmed by their manufacturer, the address of the sensor can vary. If `A110` doesn't work for you, try testing each binary value from `0` to `7` (eg `000`, `001`, `010` etc) to see which address is correct for your sensors.

3. With the same `H1 VAC1` actuator selected, now choose the `ACTUATOR_READ_REGEX` setting, and make sure the following is present in the field below:

    ```regex
    ^.*V:(?<Value>\d+).*
    ```

4. Select your GcodeDriver, then under the Gcode tab, select the `H1 VAC2` actuator, and select the `ACTUATOR_READ_COMMAND` setting. Make sure the following Gcode is present in the field:

    ```gcode
    M3426 G2 C2 I1 A110
    ```

5. With the same `H1 VAC2` actuator selected, now choose the `ACTUATOR_READ_REGEX` setting, and make sure the following is present in the field below:

    ```regex
    ^.*V:(?<Value>\d+).*
    ```

---

## Next Steps

Next is [Running Your First Job](../../../openpnp/v4/ftp/index.md).