---
zoduki: true
---

# Home Your LumenPnP & Install Nozzle Tips

Before beginning calibration, we'll home your LumenPnP and install the two nozzle tips used during setup.

## Home Your LumenPnP

### Step 1: Level the Nozzles

Before homing, make sure the nozzles has enough clearance to move safely.

* Confirm that both nozzles are raised and clear of anything they could collide with.
   <img src="images/homing-roughly-level-nozzles.webp"/>
* You can adjust the nozzles height by using Z-axis jog controls
   <img src="images/homing-level-nozzles.webp"/>
* If the nozzle's Z-height is not moving when you using the controls, check if **Camera: Top** is selected in the dropdown at the top of Machine Controls, and change it to **Nozzle: N1**.
   <img src="images/homing-ensure-n1-selected-in-machine-controls.webp"/>

### Step 2: Home the Machine

* In the bottom-left **Machine Controls** panel, locate the **Home button** directly above the Power button. {color=yellow}
<img src="images/homing-locate-home-button.webp"/>
* Click the **Home button** to initiate homing. {color=purple}
* Allow the LumenPnP to complete its homing sequence. {color=purple}
* The machine head should move to the **front-left corner** and remain there once homing is finished. {color=purple}
   !!! info "Why Does the Machine Stay at the Front Left?"
       This is expected! Your LumenPnP is using its initial homing configuration.

       Later, during Issues and Solutions, we'll configure the additional calibration and homing procedures.
<img src="images/homing-first-time-no-nozzle-tips.webp"/>

## Install Your Nozzle Tips

### Step 3: Identify and Prepare the Nozzle Tips

* Find the lubrication that was supplied with your LumenPnP and apply a light, even coating to the nozzles. {color=purple}
    <img src="images/nozzle-tips-apply-super-lube.webp"/>
* Locate the nozzle tip rack supplied with your LumenPnP. {color=yellow}
    <img src="images/nozzle-tips-nozzle-rack.webp"/>
* Identify the **N08** nozzle tip, located second from the left. {color=green}
    <img src="images/nozzle-tips-rack-n08.webp"/>
* Identify the **N045** nozzle tip, located on the far left of the rack. {color=blue}
    <img src="images/nozzle-tips-rack-n045.webp"/>
*      <table class="nozzle-pairing-table">
       <thead>
         <tr>
           <th>Nozzle</th>
           <th>Nozzle Tip</th>
         </tr>
       </thead>
       <tbody>
         <tr class="nozzle-n1">
           <td><strong>N1</strong></td>
           <td><strong>N08</strong></td>
         </tr>
         <tr class="nozzle-n2">
           <td><strong>N2</strong></td>
           <td><strong>N045</strong></td>
         </tr>
       </tbody>
     </table>

### Step 4: Install N08 on Nozzle N1

We'll start by installing the N08 nozzle tip on N1 (left nozzle).

* Navigate to **Machine Setup > Heads > ReferenceHead H1 > Nozzles > ReferenceNozzle N1**, and select the **Nozzle Tips** tab {color=green}
* Use the N08 row's `loaded?` checkbox to assign **N08 to N1**. {color=green}
    <img src="images/nozzle-tips-n1-n08-loaded-checkbox.webp"/>
* OpenPnP will display a confirmation message,disguised as an error message, asking you to install the nozzle tip. {color=orange}
    <img src="images/nozzle-tips-false-error-message.webp"/>
* Carefully install **N08 onto nozzle N1**. Make sure the tip is fully seated. {color=purple}
* Make sure the nozzle tips can slide on and off smoothly without excessive force. {color=purple}
* Once the nozzle tip is properly installed, confirm the message in OpenPnP. {color=purple}
    <img src="images/nozzle-tips-install-n08-on-n1-video.webp"/>

!!! info "The Error Message Is Normal"
    When assigning a nozzle tip, OpenPnP displays a message that looks like an error.

    **This is not an error.** OpenPnP has paused to let you manually install the requested nozzle tip.

    Only confirm the message once the correct nozzle tip is installed.

### Step 5: Install N045 on Nozzle N2

Now we'll repeat the process for N2.

* Navigate to nozzle N2, **Nozzles > ReferenceNozzle N2**, and select the **Nozzle Tips** tab if not already selected {color=blue}
* Use the N045 row's `loaded?` checkbox to assign **N045 to N2**. {color=blue}
    <img src="images/nozzle-tips-n2-n045-loaded-checkbox.webp"/>
* OpenPnP will display a confirmation message,disguised as an error message, asking you to install the nozzle tip. {color=orange}
    <img src="images/nozzle-tips-n2-false-error-message.webp"/>
* Carefully install **N045 onto nozzle N1**. Make sure the tip is fully seated, and click **OK** for the message in OpenPnP. {color=purple}
    <img src="images/nozzle-tips-install-n045-on-n2-video.webp"/>

### Next Steps

!!! success "Homing and Nozzle Tips Complete"
    With your nozzle tips installed on the LumenPnP, we're ready to begin the calibration process.<br></br>
    **Next, click the Issues & Solutions tab towards the top right of OpenPnP.**<br></br>
    Then, click the button below:
    <img src="../connect-cameras/images/step-complete.webp"/>

<a href="../calibration-philosophy/" class="next-step">Next: Calibration Overview →</a>