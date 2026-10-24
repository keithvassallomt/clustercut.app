# Clipboard History

ClusterCut maintains a secure, local history of your clipboard activity, allowing you to quickly access previously copied items.

## How it works
Every time you copy text, formatted text, an image, or a file on any device in a cluster, that item you copied will appear in the History screen on all devices in the Cluster. 

<video src="/adding_to_history.mp4" autoplay loop muted playsinline class="w-auto h-auto rounded-lg shadow-md"></video>

::: info History Security
History only lasts while ClusterCut runs: quitting clears it. It's also deleted from your device once it leaves the cluster.
:::

The history shows you whether you sent or received an item, and if received it shows you which device sent it. Different content types are easy to recognise at a glance:

-   **Images** appear as a thumbnail with their dimensions and file size.
-   **Formatted (rich) text** is tagged with a *Rich · HTML, RTF* badge so you can see formatting was carried across.

::: info Rich text on Linux X11
On Linux X11 sessions, formatted text arrives as plain text. Wayland, Windows, and macOS preserve full formatting.
:::

## How long History is kept
By default, History keeps your 50 most recent items until ClusterCut quits. You can change both in [Settings](/settings#general):

-   **Keep History**: 15 minutes, 1 hour, 1 day, 1 week, or until ClusterCut quits. Items older than that leave History on their own.
-   **Keep At Most**: from 10 to 500 items. When History is full, the oldest item goes to make room.

Set **Keep History** to **Off** and ClusterCut keeps no History at all. The History screen says so, and nothing you copy or receive is kept there.

## Managing History
Once an item is in the history, you have a few options (depending on the type of item, and whether you sent or received it).

| Icon | Action |
| :--- | :--- |
| ![Copy](/history_copy.png) | Copy the item to your clipboard, without sending it to others in the cluster |
| ![Delete](/history_delete.png) | Delete the item, and its stored content, from the history **of all devices in the cluster** |
| ![Download](/history_download.png) | Download this file |
| ![Send](/history_send.png) | Send the item to others in the cluster |

**Clear History** empties History on this device, and deletes the stored content along with it, including large items waiting in ClusterCut's temporary folder.

