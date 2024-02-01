# OpenPnP Install

OpenPnP is a piece of open source software designed to control pick and place machines. It supports a wide range of machines, with many features found in high-end commercial software. You can find out more about it [here](https://openpnp.org/).

![OpenPnP Logo](img/openpnp-logo.png)

## Recommended Hardware

OpenPnP is designed to run on many different kinds of host computers. However, USB drivers and internal USB hub bandwith can vary between computers. We recommend using a Lenovo Thinkpad T470 running Ubuntu 20.04 LTS or Ubuntu 22.04 LTS for known good connectivity with your cameras, exposure control, and serial communication.

## Install

**Please use the OpenPnP version we link to in the instructions below.** OpenPnP has many frequent updates, and some of them change or remove functionality. Keeping to our recommended version (2023-04-05 release) ensures that things work correctly and that this documentation is accurate for you. Also, this version has support for the LumenPnP feeders.

**We highly recommend using Ubuntu Linux as the OS for running OpenPnP due to how well it handles communication with the cameras.**

### Linux ([Ubuntu Install Guide](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview))

1. Download and install OpenPnP for Linux. Use the version here to ensure OpenPnP works with the LumenPnP Feeders: ([Download .deb](https://openpnp.s3-us-west-2.amazonaws.com/test/2023-04-05_08-24-36.0aa4ae8/OpenPnP-linux-test.deb))([Download .tar.gz](https://openpnp.s3-us-west-2.amazonaws.com/test/2023-04-05_08-24-36.0aa4ae8/OpenPnP-unix-test.tar.gz))

!!! danger "Linux Users"
    Linux requires two quick configuration steps to allow OpenPnP to run:

    1. In order for OpenPnP to communicate to the machine, the user must be added to the `dialout` group. This can be done by entering `sudo adduser [USERNAME] dialout` (where `[USERNAME]` is the user you're logged in as) into terminal and restarting the computer.
    2. OpenPnP requires that Java is installed. This can easily be done by entering `sudo apt-get install default-jdk` into terminal.

    Note that if Java is not installed, OpenPnP will fail silently when you attempt to start by clicking on the icon.

1. Open OpenPnP and make sure it loads fully. Doing this will make sure that OpenPnP puts a configuration folder on your computer that we'll need in the next step.

1. Close OpenPnP.

### Windows

1. Download and install OpenPnP for Windows. Use the version here to ensure OpenPnP works with the LumenPnP Feeders: ([Download 32 Bit .exe](https://openpnp.s3-us-west-2.amazonaws.com/test/2023-04-05_08-24-36.0aa4ae8/OpenPnP-windows-x32-test.exe)) ([Download 64 Bit .exe](https://openpnp.s3-us-west-2.amazonaws.com/test/2023-04-05_08-24-36.0aa4ae8/OpenPnP-windows-x64-test.exe))

2. Open OpenPnP and make sure it loads fully. Doing this will make sure that OpenPnP puts a configuration folder on your computer that we'll need in the next step.

3. Close OpenPnP.

### MacOS

1. Download and install OpenPnP for Mac. Use the version here to ensure OpenPnP works with the LumenPnP Feeders: ([Download .dmg](https://openpnp.s3-us-west-2.amazonaws.com/test/2023-04-05_08-24-36.0aa4ae8/OpenPnP-macos-test.dmg))

    !!! danger "Mac Users"
        Because of [a bug with how OpenPnP signs their releases](https://github.com/openpnp/openpnp/issues/1559), Mac users with ARM processors might experience a crash on boot, or not be able to access the cameras. You can still run OpenPnP by navigating to `Applications -> OpenPnP` and right clicking on the OpenPnP app and selecting "Show Package Contents":
        ![Show package contents on the openpnp app](img/opnp-show-package-contents.png)
        Then navigate to `Contents -> MacOS` and double click on `JavaApplicationStub` to run OpenPnP.
        ![clicking on javaapplicationstub](img/boot-opnp-java-stub.png)

1. Open OpenPnP and make sure it loads fully. Doing this will make sure that OpenPnP puts a configuration folder on your computer that we'll need in the next step.

1. Close OpenPnP.

## Next Step

Let's [import configuration files.](../import-config//index.md)
