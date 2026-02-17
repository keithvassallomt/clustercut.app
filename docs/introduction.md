# What is ClusterCut?

**ClusterCut** is a secure, local-first clipboard synchronization tool designed for power users who work across multiple devices.

## Why ClusterCut?

Unlike other clipboard tools, ClusterCut is designed with **privacy** and **local networks** in mind.

-   **Zero Cloud**: Your data never leaves your local network. It is peer-to-peer.
-   **End-to-End Encrypted**: All clipboard data is encrypted using AES-256 before it leaves your device.
-   **Cross-Platform**: Seamlessly sync between macOS, Windows, and Linux.
-   **No Servers**: ClusterCut creates a mesh network from devices in your cluster - you don't need to leave a computer always running.

## How it works

ClusterCut uses **mdNS (Multicast DNS)** to discover other devices running ClusterCut on your local network. Each device creates a cluster with a name and PIN. Other devices can join the cluster by selecting the cluster and entering the PIN.

Once a cluster contains at least two devices, you can start copying and pasting. When you copy text, an image, or any other type of file:

1.  ClusterCut detects the clipboard change.
2.  It encrypts the payload.
3.  It broadcasts the encrypted payload to your trusted cluster peers.
4.  Peers receive, decrypt, and update their local clipboard.

ClusterCut automatically transfers small files (you can control how large) to other devices. When you copy a large file, other devices receive a notification and can download when required.
