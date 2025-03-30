# Advanced Features of NewbeePaste

This chapter introduces the advanced features of NewbeePaste, helping you unlock powerful clipboard management capabilities.

## Data Preview and Details

When you select a record in the NewbeePaste main window, press the `Spacebar` to quickly view its advanced details.

- **Plain Text/Code:** Displays the full text content with code syntax highlighting.
- **Images:** Shows a preview of the image.
- **Files:** Displays basic file information (name, size, type).
- **Special Formats:**
  - **JSON:** Formats and highlights JSON data for easier reading.
  - **SVG:** Directly renders SVG images for preview.
  - **HTML/RTF:** Attempts to render rich text effects.

This allows you to quickly confirm the details of complex content without needing to paste it elsewhere.

## Text Selection and Quick Translation

NewbeePaste includes a convenient translation feature with multiple trigger methods:

1. **Text Selection Translation:** Select the text you want to translate in any application, then press the shortcut `Alt + D` (customizable) to quickly get the translation result and details.
2. **Clipboard Translation:** Open the NewbeePaste main window, select a text record, and press the `T` key to translate the selected record.

::: tip Translation Privacy Notice
The translation feature requires sending the selected text via HTTPS encryption to third-party translation service APIs (e.g., Google Translate, DeepL, depending on your settings or provider). Only the content you explicitly request to translate will be sent. NewbeePaste does not send any other data.
:::

## Real-Time Cross-Device Synchronization

This is one of NewbeePaste's core advantages. Simply log in to the same NewbeePaste account on multiple devices (Windows, macOS):

- **Automatic Sync:** Any content (text, images, files) copied on one device will be automatically synced to all other logged-in devices in near real-time.
- **Seamless Experience:** Copy on Device A and paste directly on Device B without manual transfers.

### Offline Sync Support

Even if one of your devices is temporarily offline:

- **Local Storage:** Content copied during offline periods is securely stored locally.
- **Auto Catch-Up:** Once the device reconnects to the internet, it will automatically sync offline records to the cloud and fetch the latest records from the cloud, ensuring data consistency across all devices.

## Device Management

Easily manage all devices logged into your NewbeePaste account via the settings interface:

- **Location:** Go to `Settings` -> `Account & Sync` -> `Device Management`.
- **View Devices:** List all currently logged-in devices, their names (customizable), operating systems, and last active times.
- **Online Status:** Clearly see which devices are currently online.
- **Remote Logout:** If you lose a device or need to force logout on a specific device, select the device and click the "Logout" button. The device will need to log in again to resume syncing.

## Data Security and Encryption

We prioritize your data security and privacy:

- **Local Encryption:** All clipboard history stored on your local device is encrypted, making it difficult to access even if the device is compromised.
- **Cloud Encryption:** Data synced to the cloud server is also stored with strong encryption measures.
- **Transmission Encryption:** Data transmission between devices and the server is fully encrypted using SSL/TLS to prevent eavesdropping or tampering during transfer.

## Advanced File Sync Settings

While file synchronization is automatic, you can fine-tune the settings:

- **Storage Space Management:** View used cloud sync space in `Settings` -> `Storage`.
- **Size Limits:** Set the maximum size for files to be automatically synced (e.g., by default, files larger than 100MB are not synced) to avoid excessive bandwidth and storage usage.
- **Type Filtering:** (Planned feature) Selectively sync specific file types or exclude certain types.
- **Manual Cleanup:** Manually clear cloud sync history files to free up space.

## Custom Shortcuts

To accommodate different user habits, NewbeePaste offers extensive shortcut customization options:

- **Global Shortcuts:**
  - Customize the shortcut to `Open Main Window` (default: `Alt + V`).
  - Set shortcuts for `Quick Paste Last Item` or `Selective Paste`.
  - Configure the shortcut for `Quick Search`.
- **In-Window Operation Shortcuts:**
  - Customize shortcuts for `Copy Selected Item`, `Delete Item`, `Pin/Unpin Item`, `Move Up/Down`, and more.

You can find all configurable options in `Settings` -> `Shortcuts`.

## Theme and Interface Customization

Personalize the appearance of NewbeePaste:

- **Theme Modes:**
  - `Follow System`: Automatically switch between light/dark mode based on your operating system settings.
  - `Light Mode`: Always use the light interface.
  - `Dark Mode`: Always use the dark interface.
- **Interface Adjustments:** (Some features may be rolled out gradually)
  - Adjust the `Transparency` of the main window (frosted glass effect).
  - Modify the `Primary Color` of the interface.
  - Customize the `Font Size` of the list.

## Privacy Protection and Filtering

In addition to encryption, you can protect privacy through rules:

- **Sensitive Content Filtering:** Set keywords in `Settings` -> `Content Filtering`. Clipboard records containing these keywords will **not** be automatically synced to the cloud (but will still be saved locally unless you set local exclusion rules). This is useful for sensitive information like passwords or private keys.
- **Application Exclusion:** (Planned feature) Exclude certain applications so that content copied within them is not recorded by Paste.

## Advanced Search Features

Quickly locate historical records:

- **Content Type Filtering:** Search only for text, images, or files.
- **Time Range Filtering:** Find content copied within a specific date range.
- **Regular Expressions:** Use `regular expressions` for more complex and precise pattern matching searches.
- **Search History:** Automatically save your recent search queries for easy reuse.

::: tip Explore Settings
Most of the advanced features above can be found in the **Settings** panel. Spend some time exploring the settings to make Paste better fit your personal workflow.
:::

::: warning Account and Network
Please note that advanced features like cross-device sync, device management, and cloud backup require you to log in to your Newbee account and maintain a network connection.
:::
