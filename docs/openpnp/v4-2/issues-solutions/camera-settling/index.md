---
zoduki: true
---

# Configure Camera Settling for Top & Bottom Camera

## Configure Top & Bottom Camera Settling

### Step 1: Configure Top Camera Settling

Camera settling allows OpenPnP to wait for the camera image to stabilize before capturing it. Rather than leaving it at a set amount, we can optimize the settle time to make sure we are not wasting time.

* After clicking **Find Issues & Solutions** in the previous step, locate and select **Use an adaptive camera settling method**, identified for the **Top Camera**. {color=blue}
  <img src="../../../v4-1/issues-solutions/fundamental/images/task-11-adaptive-camera-settling-top.webp"/>
* Click **Accept** to automatically configure the top camera's settling method. {color=green}
* OpenPnP will perform the configuration automatically. This usually takes only a few seconds. {color=green}
  <img src="images/camera-settling-top-accept-button.webp"/>
* Once the calibration finishes, confirm that **Use an adaptive camera settling method (top)** is marked **Solved**. {color=purple}
  <img src="images/camera-settling-top-solved.webp"/>
* Click **Find Issues & Solutions** to refresh the task list. {color=yellow}
  <img src="images/camera-settling-top-find-i-and-s.webp"/>

### Step 2: Configure Bottom Camera Settling

* Once the top camera task is marked **Solved**, click **Find Issues & Solutions** to refresh the list. {color=blue}
* Locate and select the next **Use an adaptive camera settling method** task, identified for the **Bottom Camera**. {color=blue}
  <img src="../../../v4-1/issues-solutions/fundamental/images/task-12-adaptive-camera-settling-bottom.webp"/>
* Click **Accept** to automatically configure the bottom camera's settling method. {color=green}
* Allow OpenPnP to complete the process, which should only take a few seconds. {color=green}
  <img src="images/camera-settling-bottom-accept-button.webp"/>
* Once the calibration finishes, confirm that **Use an adaptive camera settling method (top)** is marked **Solved**. {color=purple}
  <img src="images/camera-settling-bottom-solved.webp"/>
* Click **Find Issues & Solutions** to refresh the task list. {color=yellow}
  <img src="images/camera-settling-bottom-find-i-and-s.webp"/>

### Step 3: Issues & Solutions Essential Tasks Complete

!!! success "Camera Settling Configured"
    Both cameras now have their settling methods configured.

    The next step is setting your homing method and is very important.

* Continue to set up your homing method and nozzle runout.
  <img src="../../preflight/connect-cameras/images/step-complete.webp"/>

<a href="../homing-method-and-runout/" class="next-step">Set Homing Method and Nozzle Runout →</a>