---
aside: false
---

<script setup>
import { ref, onMounted } from 'vue'

const releaseInfo = ref({
  windows: { version: '', size: 0, url: '' },
  macos: { version: '', size: 0, url: '' }
})

onMounted(async () => {
  try {
    const response = await fetch('https://releases.czbrcj.cn/api/v1/release/paste/latest')
    const data = await response.json()
    releaseInfo.value = data
  } catch (error) {
    console.error('Failed to fetch version info:', error)
  }
})

// Function to format file size
const formatSize = (bytes) => {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}
</script>

## Choose Your Platform

<div class="download-cards">
  <div class="download-card">
    <img src="/icons/windows.svg" alt="Windows" class="os-icon">
    <h3>Windows Version</h3>
    <div class="version-info">
      <span>Latest Version: v{{ releaseInfo.windows.version }}</span>
      <span>Size: {{ formatSize(releaseInfo.windows.size) }}</span>
    </div>
    <ul class="requirements-list">
      <li>Windows 10 and above</li>
      <li>Supports x86/x64 systems</li>
      <li>Auto-update</li>
    </ul>
    <a :href="releaseInfo.windows.url" class="download-button">
      Download for Windows
    </a>
  </div>

  <div class="download-card">
    <img src="/icons/macos.svg" alt="macOS" class="os-icon">
    <h3>macOS Version</h3>
    <div class="version-info">
      <span>Latest Version: v{{ releaseInfo.macos.version }}</span>
      <span>Size: {{ formatSize(releaseInfo.macos.size) }}</span>
    </div>
    <ul class="requirements-list">
      <li>macOS 10.14 and above</li>
      <li>Supports Apple Silicon/Intel</li>
      <li>Auto-update</li>
    </ul>
    <a :href="releaseInfo.macos.url" class="download-button">
      Download for macOS
    </a>
  </div>
</div>

## System Requirements

<div class="requirements-card">
  <h3>Windows Requirements</h3>
  <ul class="requirements-list">
    <li>Windows 10 or higher</li>
    <li>Minimum 4GB RAM</li>
    <li>200MB available disk space</li>
    <li>Internet connection required for sync features</li>
  </ul>
</div>

<div class="requirements-card">
  <h3>macOS Requirements</h3>
  <ul class="requirements-list">
    <li>macOS 10.14 or higher</li>
    <li>Minimum 4GB RAM</li>
    <li>200MB available disk space</li>
    <li>Internet connection required for sync features</li>
  </ul>
</div>

::: warning Security Notice
Please download NewbeePaste only from official sources to ensure security. All download links use HTTPS encrypted transmission.
:::
