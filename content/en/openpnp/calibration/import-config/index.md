---
title: "Importing Config Files"
linkTitle: "Importing Config Files"
weight: 1
type: docs
description: >
  Install OpenPNP and import default config
---

To use OpenPnP with the LumenPnP, you will need to tell the software about your machine's capabilities, such as it's size, how many cameras it has, etc. We've done the basic work for you and put together a starting set of configuration files that will describe your Lumen. To use our defaults, follow the instructions below.

If you'd like to start from scratch with your setup, community member Qwertymodo has posted a [very helpful video](https://www.youtube.com/watch?v=vuFalyzcCZA) showing his process of doing calibration on his machine from scratch. It's a great place to start if you want to do all the setup yourself.

## Windows

1. Download OpenPnP 2.0 for Windows [here](https://openpnp.org/downloads/) (probably the 64 bit installer).

2. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

3. Find the latest release that is compatible with your hardware. If your machine's version begins with `v2`, pick the most recent release starting with `v2`. If your machine's version begins with `v3`, pick the most recent release starting with `v3`.

4. Download the `Source Code (zip)` for that release.

5. Unzip the source code.

6. Navigate to the `openPnP` folder inside and find the four configuration files you need: `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`.

7. To install these files in OpenPnP, you'll need to find its configuration folder. First, follow [these instructions](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2) to show hidden folders in Windows Explorer.

8. Next, navigate to:
   1. On Windows Vista and newer: `C:\Users\[username]\.openpnp2`.
   2. On Windows XP and older: `C:\Documents and Settings\[username]\.openpnp2`.
  
9. Double-check that OpenPnP is closed

10. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

11. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components library.

## MacOS

1. Download OpenPnP 2.0 for Mac [here](https://openpnp.org/downloads/).

2. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

3. Find the latest release that is compatible with your hardware. If your machine's version begins with `v2`, pick the most recent release starting with `v2`. If your machine's version begins with `v3`, pick the most recent release starting with `v3`.

4. Download the `Source Code (zip)` for that release.

5. Unzip the source code.

6. Navigate to the `openPnP` folder inside and find the four configuration files you need: `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`.

7. To install these files in OpenPnP, you'll need to find its configuration folder. Note you may need to follow [these instructions](https://www.macworld.com/article/671158/how-to-show-hidden-files-on-a-mac.html) to show hidden folders in Finder.

8. Next, navigate to: `/Users/[username]/.openpnp2`.
  
9. Double check that OpenPnP is closed.

10. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

11. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components library.

Our next step is to [Connect To The Machine.]({{< relref "connect-to-machine" >}})
