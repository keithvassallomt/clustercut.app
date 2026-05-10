# What is ClusterCut?

**ClusterCut** is a secure, local-first clipboard synchronization tool designed for power users who work across multiple devices.

## Why ClusterCut?

Unlike other clipboard tools, ClusterCut is designed with **privacy** and **local networks** in mind.

-   **Zero Cloud**: Your data never leaves your local network. It is peer-to-peer.
-   **End-to-End Encrypted**: All traffic between your devices is protected by mutual TLS with certificate pinning — only the peers you have explicitly paired with can decrypt it.
-   **Cross-Platform**: Seamlessly sync between macOS, Windows, and Linux.
-   **No Servers**: ClusterCut creates a mesh network from devices in your cluster - you don't need to leave a computer always running.

## How it works

ClusterCut uses **mdNS (Multicast DNS)** to discover other devices running ClusterCut on your local network. Each device creates a cluster with a name and PIN. Other devices can join the cluster by selecting the cluster and entering the PIN.

Once a cluster contains at least two devices, you can start copying and pasting. ClusterCut handles plain text, formatted (rich) text, images, and files:

1.  ClusterCut detects the clipboard change.
2.  It sends the payload to your trusted cluster peers over an authenticated, encrypted connection.
3.  Peers receive the payload and update their local clipboard.

ClusterCut automatically transfers small files (you can control how large) to other devices. When you copy a large file, other devices receive a notification and can download when required.
