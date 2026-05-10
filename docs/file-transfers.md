# File Transfers

ClusterCut allows you to securely transfer files between your devices with a single click.

::: info Clipboard images
This page covers transferring **files** that you've copied in your file manager. **Images copied from inside an app** (browser right-click → "Copy Image", screenshot tools, etc.) sync as clipboard items — no setup needed. Small images sync inline; large ones automatically use the same transfer pipe described below, with the same auto-download limit.
:::

## Sending small files
Start by copying the file you want to send to the clipboard on your source device (using your system's file manager).

![Copy file](/copy_file.png)

As soon as ClusterCut detects the file on the clipboard, it will automatically transfer it to other devices in the cluster.

::: info Size Limit
Only files up to a certain size are transferred automatically. You can configure the size in the [Settings](/settings) screen, the default is `50MB`.
:::

You can now paste the file on any other device in the cluster.

![Paste file](/paste_file.png)

## Sending large files
To prevent flooding your network with large files, ClusterCut will notify other devices in the cluster when you copy a large file. Other devices can then choose to download the file when required. 

![Copying a large file](/copy_large_file.png)

Here, we've copied a large file on one device. Another device receives a notification that a file is available for download. 

![Large file notification](/large_file_notification.png)

Clicking the notification will open the [History](/history) page, showing the file that is available for download. 

![File in history](/file_in_history.png)

You can now download the file on the other device.

![Download large file](/download_large_file.png)

Once the file has downloaded, you can paste it anywhere on your computer. 

<video src="/paste_large_file.mp4" autoplay loop muted playsinline class="w-auto h-auto rounded-lg shadow-md"></video>

### File compression
For large text, code, logs, and other compressible files, ClusterCut can compress them before sending to speed up transfers. This is off by default — to enable it, open Settings → File Transfer and toggle **Compress File Transfers** on.

You don't need to choose which files to compress. ClusterCut handles that automatically: small files, images, videos, archives, and office documents are sent as-is, since they're either too small to benefit or already compressed.

::: warning Compatibility
File transfer compression is only supported on ClusterCut 0.2.3 and later. If you send a compressed file to a device running an older version, it will arrive corrupt. Before turning this on, make sure every device in your cluster is running 0.2.3 or later.
:::


