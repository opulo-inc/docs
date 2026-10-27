
# Install OpenPnP 2.6

<div class="openpnp-intro" markdown>

![OpenPnP Logo](../v4/install-config/install/img/openpnp-logo.webp){ .openpnp-logo }

OpenPnP is the software used to control your LumenPnP. Before beginning calibration, you'll need to install OpenPnP and prepare it for your machine.

This guide uses **OpenPnP 2.6**, the version recommended by Opulo.

</div>

## 1. Download OpenPnP

Choose your computer's operating system below.

<div class="grid cards openpnp-download-cards" markdown>

-   <span class="openpnp-platform-title">Ubuntu Linux</span>

    <span class="openpnp-status recommended">★ Recommended</span>

    Ubuntu Linux provides reliable USB communication with the LumenPnP and its cameras. This is the operating system Opulo uses for testing.

    **Choose your download:**

    <a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-linux-main.deb" class="openpnp-download-primary">↓ Download for Ubuntu (.deb)</a>

    <a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-unix-main.tar.gz" class="openpnp-download-secondary">Alternative: Download .tar.gz</a>

    <span class="openpnp-card-footnote">For Ubuntu, we recommend the .deb installer.</span>

-   <span class="openpnp-platform-title">Windows</span>

    <span class="openpnp-status supported">Supported</span>

    Windows is supported as an alternative, although Ubuntu Linux is recommended for the most consistent experience.

    **Choose your download:**

    <a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-windows-x64-main.exe" class="openpnp-download-primary">↓ Download for Windows (64-bit)</a>

    <a href="https://s3-us-west-2.amazonaws.com/openpnp/OpenPnP-windows-x32-main.exe" class="openpnp-download-secondary">Alternative: Download 32-bit</a>

    <span class="openpnp-card-footnote">Most modern Windows computers use the 64-bit installer.</span>

</div>

!!! warning "Using macOS?"
    macOS is not supported by Opulo for this calibration guide. We recommend using Ubuntu Linux or Windows for your LumenPnP setup.

## 2. Prepare Your Computer

=== "Ubuntu Linux"

    After downloading OpenPnP, complete these two steps to prepare Ubuntu for your LumenPnP.

    **A. Install Java**

    Open a terminal and run:

    ```bash
    sudo apt-get update
    sudo apt-get install openjdk-17-jdk
    ```

    **B. Allow USB Communication**

    Add your user account to the `dialout` group so OpenPnP can communicate with your LumenPnP:

    ```bash
    sudo usermod -aG dialout "$USER"
    ```

    **Restart your computer** after running this command so the permission change takes effect.

    !!! info "New to Ubuntu?"
        If Ubuntu is not already installed, follow the [official Ubuntu installation guide](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview).

=== "Windows"

    Run the downloaded OpenPnP installer and follow the on-screen instructions.

    Once installed, OpenPnP should be available from the Windows Start menu.

    No additional serial-port permission changes are normally required.

## 3. Launch OpenPnP Once

<div class="openpnp-first-launch" markdown>

**Before moving on, OpenPnP needs to create its configuration files.**

Follow these steps:

1. **Launch OpenPnP** and allow the application to load completely.
2. **Allow OpenPnP to initialize** and create its default configuration files.
3. **Completely close OpenPnP** before continuing to the next section.

!!! warning "Important"
    OpenPnP must be completely closed before importing the LumenPnP configuration files. Leaving it open could cause your new settings to be overwritten when the program exits.

</div>

<div class="openpnp-complete" markdown>

**Ready for the next step?**

Once you've installed, launched, and closed OpenPnP, you're ready to configure it for your specific LumenPnP.

</div>

## Next: Identify Your LumenPnP

Different versions of the LumenPnP require different configuration files. The next page will help you identify your machine using visual features, such as its bottom camera location, fiducials, and drag chain design.

<div class="openpnp-next" markdown>

**Continue to machine identification**

<a href="../identify-lumenpnp-setup/" class="next-step">Choose Your LumenPnP Setup →</a>

</div>