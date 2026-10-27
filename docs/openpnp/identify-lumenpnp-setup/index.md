
# Identify Your LumenPnP

Different LumenPnP versions require different configuration files. Select the machine that matches your physical setup to continue.

!!! info "Not sure which version you have?"
    You don't need to know your LumenPnP's version number. Compare the **bottom camera location, fiducials, and drag chain design** in the images below to identify your machine.

<div class="grid cards lumenpnp-selection-cards" markdown>

-   **Left-Side Bottom Camera**

    <span class="lumenpnp-version">LumenPnP V4.2</span>

    ![LumenPnP with a left-side bottom camera](../images/4-2-staging-plate-off-center-cam.webp)

    **Identifying features:**

    - Bottom camera on the **left side**
    - Two fiducials on **one shared mount**
    - Built-in calibration disc storage

    <a href="../v4-2/preflight/import-config/" class="lumenpnp-select-button">Select This Setup →</a>

-   **Centered Camera, Two Fiducials**

    <span class="lumenpnp-version">LumenPnP V4.1 / Upgraded V4.0</span>

    ![LumenPnP with a centered bottom camera and two fiducials](../images/4-1-staging-plate-with-both-fiducials.webp)

    **Identifying features:**

    - Bottom camera is **centered**
    - Primary fiducial on the datum board
    - Secondary fiducial across from the datum board

    <a href="../v4-1/preflight/install-config/import-config/" class="lumenpnp-select-button">Select This Setup →</a>

-   **Centered Camera, One Fiducial**

    <span class="lumenpnp-version">LumenPnP V4.0</span>

    ![LumenPnP with a centered bottom camera and one fiducial](../images/4-0-staging-plate.webp)

    **Identifying features:**

    - Bottom camera is **centered**
    - One fiducial on the datum board
    - No secondary fiducial installed

    <a href="../v4/install-config/import-config/" class="lumenpnp-select-button">Select This Setup →</a>

-   **Original Drag Chain Design**

    <span class="lumenpnp-version">LumenPnP V3.2 and Earlier</span>

    ![Older LumenPnP with one drag chain running to the machine head](../images/3-x-drag-chain-identifier.webp)

    **Identifying features:**

    - Single drag chain extending to the machine head
    - Different cable routing than V4 machines
    - Uses older configuration files

    <a href="../../misc/import-config/" class="lumenpnp-select-button">Select Older Setup →</a>

</div>

!!! warning "Why choosing the correct setup matters"
    Each machine layout requires compatible configuration files for its camera positions, calibration references, and machine settings. **V3.2 and earlier machines cannot use V4 configuration files.**
