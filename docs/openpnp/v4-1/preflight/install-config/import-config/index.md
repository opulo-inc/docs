# Importing the Configuration Files for Your LumenPnP 4.1

<div class="progress-container">
  <div class="progress-step progress-current">Install & Import</div>
  <div class="progress-step">Connect</div>
  <div class="progress-step">Homing</div>
  <div class="progress-step">Nozzle Tips</div>
  <div class="progress-step">Calibration Prep</div>
  <div class="progress-step">OpenPnP Overview</div>
</div>

---

## Download the Opulo Configuration Files

Download the configuration files for LumenPnP 4.1:

<a href="install-config/install-openpnp/" class="download-button">Download Config Files</a>

1. Unzip the download. You should find two files:
    * `machine.xml`
    * `vision-settings.xml`
2. These will replace the default OpenPnP configuration files that go by the same name.

---

## Close OpenPnP Completely

<div class="stop-if"> <div class="stop-if-title"> Stop If </div>

OpenPnP cannot be running for the next steps.

Editing configuration files while OpenPnP is open can easily corrupt the files and cause unknown errors.

Make sure OpenPnP is fully closed before continuing.

</div>

---

## Locate the `.openpnp2` Folder

OpenPnP stores its configuration files in a hidden folder named: `.openpnp2`

**Linux (Ubuntu)**

1. Open your `Home` folder
2. Press `Ctrl + H` to show hidden files
3. Locate and open the `.openpnp2` folder

<img src="images/importing-config--openpnp2-folder.webp" width="70%">

**Windows**

1. Open File Explorer
2. Click View
3. Enable Hidden items
4. Navigate to: `C:\Users\[your username]\.openpnp2`

---

## Replace the Configuration Files

Inside the .openpnp2 folder you will find several XML files.

1. Locate these two files:
    * machine.xml
    * vision-settings.xml
1. Replace them with the two files you downloaded earlier.
    * They should have the same name.
    * Copy and paste the files into the `.openpnp2` folder
    * It will prompt you to overwrite the current files. Allow it to do so.

<img src="images/import-config-copy-to-openpnp2.webp" width="65%">

<div class="good-to-know"> <div class="good-to-know-title"> Good to Know </div>

These files configure how OpenPnP communicates with the LumenPnP hardware and vision system.
Replacing them ensures OpenPnP starts with the correct machine configuration.

</div>

---

## Verify the Configuration Loaded

1. Start OpenPnP
    * Allow it to fully load
    * Confirm the main interface opens normally
1. If OpenPnP launches successfully, the configuration files were imported correctly.

---

<div class="next-step-container">

<div class="next-step-title">
Next Step
</div>

<div class="next-step-description">
You've installed the correct Opulo provided config files in the .openpnp2 folder, and have confirmed they have loaded correctly. Next is to Establish a connection with your LumenPnP.
</div>

<a href="../../connect/connect-lumen/" class="next-step">Conenct LumenPnP →</a>

</div>