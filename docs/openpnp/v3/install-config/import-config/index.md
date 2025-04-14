---
title: "Importing V3 Config Files"
linkTitle: "Importing V3 Config Files"
weight: 1
type: docs
description: >
  Install the correct version of OpenPNP and import into OpenPnP the LumenPnP V3 config files
---

# Importing V3 Configuration Files ([Video Guide](https://youtu.be/DUt_FHVjnwY?si=TI5k7xmZR0c6S1o4&t=236))

**To properly use OpenPnP with the LumenPnP V3**, you need to configure the software with your machine's specifications, such as size, camera setup, and other essential settings. To simplify this, we provide a set of pre-configured files. Follow the steps below to import them correctly.

---

## General Instructions

We will be doing the following steps for the OS you have chosen.

* Ensure OpenPnP is fully closed before proceeding.

* Download the latest V3 Config Files from the Software Updates Page.

* Extract the contents of the downloaded .zip file to a location you can easily access.

* Backup your current configuration files before replacing them.

* Follow the OS-specific instructions below to locate and replace the necessary configuration files.

---

## Linux Instructions

1. Before continuing, **it is imperative to ensure OpenPnP is not running** and fully closed.

1. Download the zipped OpenPnP V3 Config Files for the `LumenPnP V3` by going to the [Software Updates Page](../../../../software-updates/index.md) and returning to this page after.
    * ![V3 Config Files Download](img/v3-config-download.webp)

1. Unzip the V3 config files to a location you will remember, while confirming it contains a `machine.xml` and a `vision-settings.xml`.

1. Locate OpenPnP’s hidden configuration folder (.openpnp2)
    * Open Ubuntu's file manager, named **(Nautilus)**
    * Navigate to /home/[username]/ (depending on your setup, you may not have a /[username]/ folder. In this case, stay in /home/)
    * Press `CTRL` + `H` to reveal hidden folders. (Alternatively, go to the `View` menu and **select Show Hidden Files**.)
    * There should now be additional folders and files that are visible within the folder you are viewing.
    * Locate and open the `.openpnp2` folder that is now visible.

1. In the `.openpnp2` folder, backup the existing files `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml` by copying them to a safe location.

1. **Replace** the old `machine.xml` and `vision-settings.xml` files in the `.openpnp2` folder with the new `machine.xml` and `vision-settings.xml` files you unzipped earlier.

---

## Windows Instructions

1. Before continuing, **it is imperative to ensure OpenPnP is not running** and fully closed.

1. Download the zipped OpenPnP V3 Config Files for the `LumenPnP V3` by going to the [Software Updates Page](../../../../software-updates/index.md) and returning to this page after.
    * ![V3 Config Files Download](img/v3-config-download.webp)

1. Unzip the V3 config files to a location you will remember, while confirming it contains a `machine.xml` and a `vision-settings.xml`.

1. Locate OpenPnP’s hidden configuration folder (.openpnp2)
    * **Enable hidden files** by following [these instructions](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2).
    * Navigate to:
        * Windows Vista or Newer: `C:\Users\[username]\.openpnp2`
        * Windows XP or Older: `C:\Documents and Settings\[username]\.openpnp2`
    * Locate and open the `.openpnp2` folder that is now visible.

1. In the `.openpnp2` folder, backup the existing files `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml` by copying them to a safe location.

1. **Replace** the old `machine.xml` and `vision-settings.xml` files in the `.openpnp2` folder with the new `machine.xml` and `vision-settings.xml` files you unzipped earlier.

---

## MacOS Instructions

1. Before continuing, **it is imperative to ensure OpenPnP is not running** and fully closed.

1. Download the zipped OpenPnP V3 Config Files for the `LumenPnP V3` by going to the [Software Updates Page](../../../../software-updates/index.md) and returning to this page after.
    * ![V3 Config Files Download](img/v3-config-download.webp)

1. Unzip the V3 config files to a location you will remember, while confirming it contains a `machine.xml` and a `vision-settings.xml`.

1. Locate OpenPnP’s hidden configuration folder (.openpnp2)
    * Open Finder and navigate to /Users/[username]/.
    * Reveal hidden files by following [these instructions](https://www.macworld.com/article/671158/how-to-show-hidden-files-on-a-mac.html).
    * There should now be additional folders and files that are visible within the folder you are viewing.
    * Locate and open the `.openpnp2` folder that is now visible.

1. In the `.openpnp2` folder, backup the existing files `machine.xml`, `packages.xml`, `parts.xml`, and `vision-settings.xml` by copying them to a safe location.

1. **Replace** the old `machine.xml` and `vision-settings.xml` files in the `.openpnp2` folder with the new `machine.xml` and `vision-settings.xml` files you unzipped earlier.

---

## Next Steps

The next step is [calibration](../../calibration/index.md).