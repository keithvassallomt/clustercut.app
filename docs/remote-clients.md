# Remote Clients

While ClusterCut is designed for local networks (LAN), you can connect devices across different subnets or over the internet using manual configuration.

## Manual Connections
If mdNS (auto-discovery) doesn't work—for example, over a VPN or complex network setup—you can add a peer manually. Let's go through a scenario.

The current device is working remotely. We're connected to the home/office network via VPN, however, launching ClusterCut does not detect any clusters.

![Remote Discovery](/remote_discovery.png)

From the **Nearby Clusters** area, click **Add Remote**. This will open a dialog asking you for an IP Address or CIDR range.

![Remote IP](/remote_ip.png)

If you know the IP address of any of the devices in the remote cluster, enter it here. Providing the remote device is not blocking port `4654`, ClusterCut will discover the remote cluster. 

If you do not know the IP address of any of the devices in the remote cluster, you can instead specify a CIDR range. For example, if you know that all devices in the remote cluster are on the `192.168.1.0/24` network, you can enter that here. ClusterCut will then attempt to discover all devices in that range.

::: warning CIDR Scanning
When specifying a CIDR range, ClusterCut needs to carry out a port scan on all devices in the range. This can be flagged as suspicious by some network security tools.
:::

If a remote cluster is found, it will appear in the **Nearby Clusters** area, just like a local cluster.

![Remote Cluster Found](/remote_cluster.png)

::: tip Remote Cluster Members
Until you connect to the remote clulster (via the PIN), you will only see one member in the remote cluster - the one you connected to. This is normal. Once you connect to the remote cluster, you will see all of its members.
:::

Connect the cluster as usual. Once connected, you can use ClusterCut as with any other cluster.

![Remote Cluster Connected](/remote_connected.png)

::: warning ClusterCut over Internet
ClusterCut is designed for Local Area Networks, or VPNs. That being said, if you forward port 4654 on your router to a device running ClusterCut (or use a device-specific IPv6 address), you can connect to your cluster from anywhere using your public IP address. Traffic is end-to-end encrypted, so it's safe to do so. This configuration, however, is not tested or supported.
:::