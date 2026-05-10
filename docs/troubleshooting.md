# Troubleshooting

Common issues and how to fix them.

## Devices not seeing each other
-   **Firewall**: Make sure your firewall is allowing ClusterCut to communicate.
    -   **Windows**: Allow "ClusterCut.exe" on Private networks.
    -   **macOS**: Allow incoming connections.
    -   **Linux**: Allow UDP traffic on port `5353` (mdNS), plus both UDP and TCP traffic on port `4654`.
-   **Network**: Ensure all devices are on the same Wi-Fi/Ethernet network.
-   **Version**: Ensure all devices are running the same version of ClusterCut. You can see the version you're running at the bottom of the **Settings** screen.

::: warning Mixing 0.3.0 with older versions
ClusterCut 0.3.0 changes the way devices talk to each other and **cannot communicate with peers running 0.2.x or earlier**. Older peers appear with a yellow warning triangle in the cluster view, and sending to them will prompt you to upgrade them. Make sure every device in your cluster is on 0.3.0 or later, and re-pair them after upgrading.
:::

## Clipboard not syncing
-   Check if **Auto Send** and **Auto Receive** are enabled in settings.
-   If you're trying to download a file which exceeds the auto download size, ensure you download the file first (from the **History** screen) before attempting to paste. 

## Other Issues
If you encounter any other issues, please check for solutions or ask a question on the [GitHub Issues](https://github.com/keithvassallomt/ClusterCut/issues) page.
