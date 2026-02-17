# Getting Started

Ready to start syncing your clipboard securely? Follow this guide to get ClusterCut up and running on your devices.

## Installation

### macOS
1.  Download the `.dmg` file from the [Downloads](/downloads) page.
2.  Drag **ClusterCut** to your Applications folder.
3.  Open the app. You may need to approve the first launch in System Settings > Privacy & Security.

### Windows
1.  Download the `.exe` installer from the [Downloads](/downloads) page.
2.  Run the installer and follow the on-screen instructions.

### Linux
We recommend installing via Flathub:

[![Get it on Flathub](/flathub.svg)](https://flathub.org)

Or via terminal:


```bash
flatpak install flathub com.keithvassallo.clustercut
```

Distribution-specific pacakges (`.deb` and `.rpm`) are also available from the [Downloads](/downloads) page. 

## First Launch

When you launch ClusterCut on your first device (Let's call this **Device 1**), you'll be shown a cluster name (`My Cluster`) and PIN (`Cluster PIN`). These are the details you'll need for other devices to join your cluster.

![Launched on device 1](/launch_device_1.png)

From another device, launch ClusterCut. This device will also have a cluster name and PIN (Let's call this **Device 2**). However, assuming both devices are on the same network, you'll also see the cluster created by **Device 1** in the `Nearby Clusters` area.

![Launched on device 2](/launch_device_2.png)

To join the cluster, select the cluster created by **Device 1**, click `Join` and enter the PIN (`Cluster PIN`).

![Device 2 joining cluster](/device_2_join_cluster.png)

Assuming the PIN is correct, **Device 2** will now be added to the cluster. The `My Cluster` area shows a list of devices in the current cluster.

![Device 2 joined cluster](/device_2_joined_cluster.png)

You can now copy text on **Device 1** and paste it on **Device 2**, and vice versa!

![Device 1 copying](/device_1_copy.png)

![Device 2 pasting](/device_2_paste.png)
