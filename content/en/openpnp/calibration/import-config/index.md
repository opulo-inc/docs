---
title: "Importing Config Files"
linkTitle: "Importing Config Files"
weight: 1
type: docs
description: >
  Install OpenPNP and import default config
---

To use OpenPnP with the LumenPnP, you will need to tell the software about your machine's capabilities, such as it's size, how many cameras it has, etc. We've done the basic work for you and put together a starting set of configuration files that will describe your Lumen. The first thing we'll do is to place them where OpenPnP can use them. This is different depending on what type of computer you're going to be using to run OpenPnP.

## Windows

1. Download OpenPnP 2.0 for Windows [here](https://openpnp.org/downloads/) (probably the 64 bit installer).

2. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

3. Find the latest release that is compatible with your hardware. Any release starting with Version `2` is compatible with both the "Print your own parts kit" and the upcoming V3 kit.

4. Download the `Source Code (zip)` for that release.

5. Unzip the source code.

6. Navigate to the `openPnP` folder inside and find the three configuration files you need: `machine.xml`, `packages.xml`, and `parts.xml`.

7. To install these files in OpenPnP, you'll need to find its configuration folder. First, follow [these instructions](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2) to show hidden folders in Windows Explorer.

8. Next, navigate to:
   1. On Windows Vista and above: `C:\Users\[username]\.openpnp2`.
   2. On Windows 2000, XP and 2003: `C:\Documents and Settings\[username]\.openpnp2`.
  
9. Double-check that OpenPnP is closed

10. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, and `parts.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

11. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components library.

## MacOS

1. Download OpenPnP 2.0 for Mac [here](https://openpnp.org/downloads/).

2. Go to the [LumenPnP Releases Page](https://github.com/opulo-inc/lumenpnp/releases).

3. Find the latest release that is compatible with your hardware. Any release starting with Version `2` is compatible with both the "Print your own parts kit" and the upcoming V3 kit.

4. Download the `Source Code (zip)` for that release.

5. Unzip the source code.

6. Navigate to the `openPnP` folder inside and find the three configuration files you need: `machine.xml`, `packages.xml`, and `parts.xml`.

7. To install these files in OpenPnP, you'll need to find its configuration folder. Note you may need to follow [these instructions](https://www.macworld.com/article/671158/how-to-show-hidden-files-on-a-mac.html) to show hidden folders in Finder.

8. Next, navigate to: `/Users/[username]/.openpnp2`.
  
9. Double-check that OpenPnP is closed

10. In the `.openpnp2` folder you'll find the currently used configuration files, `machine.xml`, `packages.xml`, and `parts.xml`. It is a good idea to copy these somewhere as backup whenever you make changes like this.

11. Copy the configuration files from the LumenPnP source files into `.openpnp2` and overwrite the old configuration files. Note that if you've already been using OpenPnP, you may want to only replace your `machine.xml` file, as the other files will overwrite your existing components library.
