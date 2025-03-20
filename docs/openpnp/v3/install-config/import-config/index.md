---
title: "Importing Config Files"
linkTitle: "Importing Config Files"
weight: 1
type: docs
description: >
  Install OpenPNP and import default config
---

# Import Configuration ([Video Guide](https://youtu.be/DUt_FHVjnwY?si=TI5k7xmZR0c6S1o4&t=236))

To use OpenPnP with the LumenPnP, you will need to tell the software about your machine's capabilities, such as its size, how many cameras it has, etc. We've done the basic work for you and put together a starting set of configuration files that will describe your LumenPnP. To use our defaults, follow the instructions below.

## Linux

1. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

2. Select the **most recent release**.

3. Download the `LumenPnP-Config-vX.X.X.zip` file attached to that release under "Assets", and unzip it.

4. Inside the unzipped folder are the two configuration files you need: `machine.xml` and `vision-settings.xml`.

5. To install these files in OpenPnP, you'll need to find its configuration folder. In the Ubuntu file manager (Nautilus), press `CTRL` + `H` to show hidden files, or go to the `View` menu and check `Show Hidden Files`.

6. Next, navigate to: `/home/[username]/.openpnp2`.

7. Double check that OpenPnP is closed.

8. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

9. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components and vision libraries.

## Windows

1. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

2. Select the **most recent release**.

3. Download the `LumenPnP-Config-vX.X.X.zip` file attached to that release under "Assets", and unzip it.

4. Inside the unzipped folder are the two configuration files you need: `machine.xml` and `vision-settings.xml`.

5. To install these files in OpenPnP, you'll need to find its configuration folder. First, follow [these instructions](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2) to show hidden folders in Windows Explorer.

6. Navigate to:
    - On Windows Vista and newer: `C:\Users\[username]\.openpnp2`.
    - On Windows XP and older: `C:\Documents and Settings\[username]\.openpnp2`.

7. Double-check that OpenPnP is closed.

8. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

9. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components and vision libraries.

## MacOS

1. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

2. Select the **most recent release**.

3. Download the `LumenPnP-Config-vX.X.X.zip` file attached to that release under "Assets", and unzip it.

4. Inside the unzipped folder are the two configuration files you need: `machine.xml` and `vision-settings.xml`.

5. To install these files in OpenPnP, you'll need to find its configuration folder. First, follow [these instructions](https://www.macworld.com/article/671158/how-to-show-hidden-files-on-a-mac.html) to show hidden folders in Finder.

6. Next, navigate to: `/Users/[username]/.openpnp2`.

7. Double check that OpenPnP is closed.

8. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

9. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components and vision libraries.

## Next Steps

The next step is [calibration](../../calibration/index.md).
