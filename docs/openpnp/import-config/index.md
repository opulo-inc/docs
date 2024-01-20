---
title: "Importing Config Files"
linkTitle: "Importing Config Files"
weight: 1
type: docs
description: >
  Install OpenPNP and import default config
---

To use OpenPnP with the LumenPnP, you will need to tell the software about your machine's capabilities, such as it's size, how many cameras it has, etc. We've done the basic work for you and put together a starting set of configuration files that will describe your LumenPnP. To use our defaults, follow the instructions below.

## Linux

1. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

2. Find the latest release that is compatible with your hardware.
    1. If your machine's version begins with `v2`, pick the most recent release starting with `v2`.
    2. If your machine's version begins with `v3`, pick the most recent release starting with `v3`.

3. Download the `LumenPnP-Config-vX.X.X.zip` file for that release, and unzip it.

    !!! info "Older Releases"
        Older releases have the OpenPnP configuration files in the source. If you can't find the OpenPnP config zip in the release, download the `Source Code` from the release, unzip, and open the `openpnp` folder.

4. Inside you'll find the four configuration files you need: `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`.

5. To install these files in OpenPnP, you'll need to find its configuration folder. In the Ubuntu file manager (Nautilus), press `CTRL` + `H` to show hidden files, or go to the `View` menu and check `Show Hidden Files`.

6. Next, navigate to: `/home/[username]/.openpnp2`.
  
7. Double check that OpenPnP is closed.

8. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

9.  Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components and vision libraries.

## Windows

1. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

2. Find the latest release that is compatible with your hardware.
    1. If your machine's version begins with `v2`, pick the most recent release starting with `v2`.
    2. If your machine's version begins with `v3`, pick the most recent release starting with `v3`.

3. Download the `LumenPnP-Config-vX.X.X.zip` file for that release, and unzip it.

    !!! info "Older Releases"
        Older releases have the OpenPnP configuration files in the source. If you can't find the OpenPnP config zip in the release, download the `Source Code` from the release, unzip, and open the `openpnp` folder. If you have a v2 LumenPnP kit, you can get your `vision-settings.xml` from the [`3.0.0`](https://github.com/opulo-inc/lumenpnp/releases/tag/v3.0.0) release or later, as it wasn't a part of earlier configuration packages.

4. Inside you'll find the four configuration files you need: `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`.

5. To install these files in OpenPnP, you'll need to find its configuration folder. First, follow [these instructions](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2) to show hidden folders in Windows Explorer.

6. Navigate to:
    - On Windows Vista and newer: `C:\Users\[username]\.openpnp2`.
    - On Windows XP and older: `C:\Documents and Settings\[username]\.openpnp2`.
  
7. Double-check that OpenPnP is closed.

8. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

9. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components and vision libraries.

## MacOS

1. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

2. Find the latest release that is compatible with your hardware.
    1. If your machine's version begins with `v2`, pick the most recent release starting with `v2`.
    2. If your machine's version begins with `v3`, pick the most recent release starting with `v3`.

3. Download the `LumenPnP-Config-vX.X.X.zip` file for that release, and unzip it.

    !!! info "Older Releases"
        Older releases have the OpenPnP configuration files in the source. If you can't find the OpenPnP config zip in the release, download the `Source Code` from the release, unzip, and open the `openpnp` folder.

4. Inside you'll find the four configuration files you need: `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`.

5. To install these files in OpenPnP, you'll need to find its configuration folder. First, follow [these instructions](https://www.macworld.com/article/671158/how-to-show-hidden-files-on-a-mac.html) to show hidden folders in Finder.

6. Next, navigate to: `/Users/[username]/.openpnp2`.
  
7. Double check that OpenPnP is closed.

8. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

9. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components and vision libraries.

## Next Steps

Our next step is to dive into [calibration](../calibration/index.md).
