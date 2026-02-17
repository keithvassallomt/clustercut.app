# Troubleshooting

Common issues and how to fix them.

## Devices not seeing each other
-   **Firewall**: Make sure your firewall is allowing ClusterCut to communicate.
    -   **Windows**: Allow "ClusterCut.exe" on Private networks.
    -   **macOS**: Allow incoming connections.
    -   **Linux**: Allow UDP traffic on port `5353` (mdNS) and TCP traffic on port `4654`.
-   **Network**: Ensure all devices are on the same Wi-Fi/Ethernet network.
-   **Version**: Ensure all devices are running the same version of ClusterCut. You can see the version you're running at the bottom of the **Settings** screen.

## Clipboard not syncing
-   Check if **Auto Send** and **Auto Receive** are enabled in settings.
-   If you're trying to download a file which exceeds the auto download size, ensure you download the file first (from the **History** screen) before attempting to paste. 

## Other Issues
If you encounter any other issues, please check for solutions or ask a question on the [GitHub Issues](https://github.com/keithvassallomt/ClusterCut/issues) page.
