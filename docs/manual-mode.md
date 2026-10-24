# Manual Mode

By default, ClusterCut sends everything you copy to your other devices, and puts everything they send on your clipboard. If you'd rather decide what goes where, turn off **Automatic Send**, **Automatic Receive**, or both, in **Settings > Synchronization**. That's manual mode.

## Shortcuts

In manual mode, global shortcuts move things through the cluster. The send shortcuts appear in Settings when **Automatic Send** is off, and the receive shortcuts when **Automatic Receive** is off.

| Shortcut | Default | What it does |
| :--- | :--- | :--- |
| **Copy & Send** | `Ctrl+Alt+C` | Copies what's selected in the app you're using, and sends it. |
| **Cut & Send** | `Ctrl+Alt+X` | Cuts what's selected, and sends it. |
| **Send Clipboard** | `Ctrl+Alt+Shift+C` | Sends what's already on your clipboard. |
| **Receive & Paste** | `Ctrl+Alt+V` | Puts what you were sent on your clipboard, and pastes it into the app you're using. |
| **Receive Only** | `Ctrl+Alt+Shift+V` | Puts what you were sent on your clipboard, without pasting. |

On macOS, the defaults use `Cmd` and `Option` instead: `Cmd+Option+C` for Copy & Send, and so on.

![Manual mode shortcuts in Settings](/settings_shortcuts.png)

The screenshot is from Hyprland, with **Bind Keys in Hyprland** on. Elsewhere, Settings looks much the same without the Hyprland notes and switch:

-   **macOS**: the shortcuts show `⌘` in place of `Ctrl`. **Allow Key Presses** appears until ClusterCut has Accessibility access.
-   **Windows**: exactly as above, without the Hyprland parts.
-   **GNOME and KDE Plasma**: each shortcut shows the key your desktop assigned, and **Change** opens your desktop's shortcut settings. On KDE, **Allow Key Presses** appears until you've allowed it.

A manual send sends anything Automatic Send would: text, formatted text, images (large ones too) and files.

::: info Upgrading from 0.4
Before 0.5.0, `Ctrl+Alt+C` sent your clipboard and `Ctrl+Alt+V` applied what you'd received. Those two actions are now Send Clipboard and Receive Only, on the same keys with `Shift` added. If you were using the old defaults, ClusterCut moves them for you. A key you'd changed keeps doing what it did.
:::

## Copy & Send, Cut & Send and Receive & Paste

These three press keys for you, so you don't have to copy first and send after:

-   **Copy & Send** presses the app's copy key (`Ctrl+C`, or `Cmd+C` on macOS), waits for the copy, and sends it. If nothing was copied, because nothing was selected, a notification says so and nothing is sent.
-   **Cut & Send** does the same with the cut key.
-   **Receive & Paste** puts what you were sent on your clipboard, then presses the paste key.

In a terminal, ClusterCut presses the terminal's own copy and paste keys instead: `Ctrl+Shift+C` and `Ctrl+Shift+V` (`Ctrl+Insert` and `Shift+Insert` on Windows). Terminals can't cut, so Cut & Send copies there.

### What they need on your system

| System | What to do |
| :--- | :--- |
| **macOS** | Allow ClusterCut under **System Settings > Privacy & Security > Accessibility**. The **Allow** button next to **Allow Key Presses** in Settings brings up macOS's prompt. |
| **KDE Plasma** | KDE asks once whether ClusterCut may press keys: the first time you use one of these shortcuts, or when you click **Allow** next to **Allow Key Presses** in Settings. |
| **GNOME** | Version 4.2 or newer of the ClusterCut GNOME extension, which presses the keys for ClusterCut. It only presses copy, cut and paste, and only for ClusterCut. See [GNOME Quick Settings](/quick-access#gnome-quick-settings). |
| **Windows, Hyprland, X11** | Nothing to set up. |

On other Wayland desktops, such as Sway, ClusterCut can't press keys, so these three don't work. Send Clipboard and Receive Only still do, and Settings says so.

::: warning Apps running as administrator
Windows doesn't let one app press keys in another that's running as administrator. To use these shortcuts in such an app, ClusterCut has to run as administrator too.
:::

## Keep My Clipboard

Copy & Send and Cut & Send work through your clipboard, and Receive & Paste puts what you received on it. Turn on **Keep My Clipboard** in **Settings > Synchronization** and all three put back what was on your clipboard before, so sending or receiving doesn't replace it.

Text, formatted text, images and files come back. An app's own private formats (a spreadsheet's cell data, for example) don't. Receive & Paste gives the app half a second to read the paste before your clipboard goes back.

## Changing the keys

How you change a shortcut depends on your system.

### macOS, Windows and Linux on X11
Click the shortcut in Settings, then press the keys you want.

### GNOME and KDE Plasma
On Wayland, your desktop owns global shortcuts (GNOME 48 and newer, KDE Plasma 5.27 and newer). When you first turn off Automatic Send or Automatic Receive, the desktop asks you to confirm ClusterCut's shortcuts. Settings then shows the key the desktop assigned, and **Change**, where your desktop supports it, opens your desktop's own shortcut settings.

If you turned the request down, click **Ask Again** next to the shortcut in Settings.

### Hyprland
Hyprland doesn't assign keys to apps' shortcuts. You have two options:

-   Turn on **Bind Keys in Hyprland** in Settings. ClusterCut adds its binds while it runs, and removes them when it quits. Your config files are never edited. If a key is already bound in Hyprland, ClusterCut leaves it alone and Settings asks you to pick another.
-   Add the lines Settings shows to your Hyprland config.

### Other Wayland desktops
On desktops without the global shortcuts portal (Sway, or GNOME 47 and older), bind a key in your desktop's own settings to the command Settings shows. For example, for Copy & Send:

```bash
gdbus call --session --dest app.clustercut.clustercut --object-path /org/gnome/Shell/Extensions/ClusterCut --method app.clustercut.clustercut.CopySend
```

The other shortcuts use the same command with a different method at the end:

| Shortcut | Method |
| :--- | :--- |
| Copy & Send | `CopySend` |
| Cut & Send | `CutSend` |
| Send Clipboard | `ManualSend` |
| Receive & Paste | `ReceivePaste` |
| Receive Only | `ManualReceive` |

## The action button

In manual mode, ClusterCut also shows an action button in its main window whenever there's something to send or receive.

![Action Button](/settings_fab.png)

For example, with **Automatic Send** off, you can use the action button to send your clipboard to the cluster. It shows what's about to go first, including a preview of an image or the list of files.

![Manual Send](/settings_manual_send.png)
