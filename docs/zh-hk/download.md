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
    console.error('獲取版本信息失敗:', error)
  }
})

// 格式化文件大小的函數
const formatSize = (bytes) => {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}
</script>

## 選擇您的平台

<div class="download-cards">
  <div class="download-card">
    <img src="/icons/windows.svg" alt="Windows" class="os-icon">
    <h3>Windows 版本</h3>
    <div class="version-info">
      <span>最新版本：v{{ releaseInfo.windows.version }}</span>
      <span>大小：{{ formatSize(releaseInfo.windows.size) }}</span>
    </div>
    <ul class="requirements-list">
      <li>支援 Windows 10 及以上系統</li>
      <li>支援 x86/x64 系統</li>
      <li>自動更新</li>
    </ul>
    <a :href="releaseInfo.windows.url" class="download-button">
      下載 Windows 版本
    </a>
  </div>

  <div class="download-card">
    <img src="/icons/macos.svg" alt="macOS" class="os-icon">
    <h3>macOS 版本</h3>
    <div class="version-info">
      <span>最新版本：v{{ releaseInfo.macos.version }}</span>
      <span>大小：{{ formatSize(releaseInfo.macos.size) }}</span>
    </div>
    <ul class="requirements-list">
      <li>支援 macOS 10.14 及以上系統</li>
      <li>支援 Apple Silicon/Intel</li>
      <li>自動更新</li>
    </ul>
    <a :href="releaseInfo.macos.url" class="download-button">
      下載 macOS 版本
    </a>
  </div>
</div>

## 系統要求

<div class="requirements-card">
  <h3>Windows 系統要求</h3>
  <ul class="requirements-list">
    <li>Windows 10 或更高版本</li>
    <li>最少 4GB 記憶體</li>
    <li>200MB 可用硬碟空間</li>
    <li>需要網絡連接以使用同步功能</li>
  </ul>
</div>

<div class="requirements-card">
  <h3>macOS 系統要求</h3>
  <ul class="requirements-list">
    <li>macOS 10.14 或更高版本</li>
    <li>最少 4GB 記憶體</li>
    <li>200MB 可用硬碟空間</li>
    <li>需要網絡連接以使用同步功能</li>
  </ul>
</div>

::: warning 安全提示
請務必從官方渠道下載 NewbeePaste 以確保安全。所有下載連結均使用 HTTPS 加密傳輸。
:::
