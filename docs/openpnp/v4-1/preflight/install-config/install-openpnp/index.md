# **Installing OpenPnP 2.6**

<div class="progress-container">
  <div class="progress-step progress-current">Install & Import</div>
  <div class="progress-step">Connect</div>
  <div class="progress-step">Homing</div>
  <div class="progress-step">Nozzle Tips</div>
  <div class="progress-step">Calibration Prep</div>
  <div class="progress-step">OpenPnP Overview</div>
</div>

---

![openpnp-logo](../../../../v4/install-config/install/img/openpnp-logo.webp)

We support the latest stable OpenPnP release and recommend installing that version. Download Link is supplied below:

---

## **Linux (Ubuntu)**

<div class="pro-tip">

<div class="pro-tip-title">
Linux Recommended
</div>

Ubuntu Linux provides reliable USB communication with the LumenPnP and cameras. This is the platform we test on.

</div>

1. **Download OpenPnP for Linux**

<a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-linux-main.deb" class="download-button">Download OpenPnP (.deb)</a>

<a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-unix-main.tar.gz" class="download-button">Download OpenPnP (.tar.gz)</a>

If you do not already have Ubuntu installed, follow the official guide: [Install Ubuntu Desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)

To properly setup OpenPnP for Linux use:

1. Install Java

2. OpenPnP requires Java to run:

```
sudo apt-get install openjdk-17-jdk
```

Add your user to the dialout group

1. This allows OpenPnP to communicate with the machine:

```
    sudo adduser [USERNAME] dialout
```

Replace [USERNAME] with your Linux username, then restart the computer.<br><br/>

<div class="good-to-know">

<div class="good-to-know-title">
Launch and Close OpenPnP
</div>

For OpenPnP to generate the files and folders we need in the next section, we must first launch OpenPnP once. Then, we must close the program before tampering with the configuration files.

</div>

---

## **Windows**

(Supported but Not Recommended)

1. **Download OpenPnP for Windows**

<a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-windows-x64-main.exe" class="download-button">Download OpenPnP (64-bit)</a>

<a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-windows-x32-main.exe" class="download-button">Download OpenPnP (32-bit)</a>

<div class="good-to-know">

<div class="good-to-know-title">
Launch and Close OpenPnP
</div>

For OpenPnP to generate the files and folders we need in the next section, we must first launch OpenPnP once. Then, we must close the program before tampering with the configuration files.

</div>

---

!!! warning "MacOS Not Supported"
OpenPnP no longer supports MacOS with the latest release. If you are currently using a Mac, you will need to switch to Linux or Windows.

---

<div class="pro-tip">

<div class="pro-title">
Recommended Computer and Operating System
</div>

For reliable camera connectivity and exposure control, we recommend using a Lenovo ThinkPad running Ubuntu 22.04 LTS.

</div>

---

## Next Step

OpenPnP is now installed and has created its configuration folder. This means it is ready for importing our configuration files. Click below to continue.

<a href="../import-config/" class="next-step">Import Configuration Files →</a>