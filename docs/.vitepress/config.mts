import { defineConfig } from "vitepress";

// 英文配置
const enConfig = {
  title: "NewbeePaste",
  description: "Real-time clipboard sync across devices",
  themeConfig: {
    nav: [
      { text: "Home", link: "/en" },
      { text: "Guide", link: "/en/guide/getting-started" },
      { text: "Features", link: "/en/guide/features" },
      { text: "Download", link: "/en/download" },
    ],
    sidebar: {
      "/en/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "Getting Started", link: "/en/guide/getting-started" },
            { text: "Core Features", link: "/en/guide/features" },
            { text: "Technical Highlights", link: "/en/guide/tech" },
          ],
        },
        {
          text: "User Guide",
          items: [
            { text: "Basic Usage", link: "/en/guide/basic-usage" },
            { text: "Advanced Features", link: "/en/guide/advanced" },
            { text: "FAQ", link: "/en/guide/faq" },
          ],
        },
      ],
    },
    footer: {
      message: "NewbeeHive",
      copyright: "Copyright © 2024-present NewbeePaste",
    },
  },
};

// 中文配置
const zhConfig = {
  title: "NewbeePaste",
  description: "多设备跨平台实时同步剪贴板工具",
  themeConfig: {
    nav: [
      { text: "主页", link: "/zh-cn" },
      { text: "指南", link: "/zh-cn/guide/getting-started" },
      { text: "功能", link: "/zh-cn/guide/features" },
      { text: "下载", link: "/zh-cn/download" },
    ],
    sidebar: {
      "/zh-cn/guide/": [
        {
          text: "介绍",
          items: [
            { text: "快速开始", link: "/zh-cn/guide/getting-started" },
            { text: "核心功能", link: "/zh-cn/guide/features" },
            { text: "技术特点", link: "/zh-cn/guide/tech" },
          ],
        },
        {
          text: "使用指南",
          items: [
            { text: "基础使用", link: "/zh-cn/guide/basic-usage" },
            { text: "高级功能", link: "/zh-cn/guide/advanced" },
            { text: "常见问题", link: "/zh-cn/guide/faq" },
          ],
        },
      ],
    },
    footer: {
      message: "NewbeeHive",
      copyright: "Copyright © 2024-present NewbeePaste",
    },
  },
};

// 繁體中文配置
const hkConfig = {
  title: "NewbeePaste",
  description: "多設備跨平台實時同步剪貼板工具",
  themeConfig: {
    nav: [
      { text: "主頁", link: "/zh-hk" },
      { text: "指南", link: "/zh-hk/guide/getting-started" },
      { text: "功能", link: "/zh-hk/guide/features" },
      { text: "下載", link: "/zh-hk/download" },
    ],
    sidebar: {
      "/zh-hk/guide/": [
        {
          text: "介紹",
          items: [
            { text: "快速開始", link: "/zh-hk/guide/getting-started" },
            { text: "核心功能", link: "/zh-hk/guide/features" },
            { text: "技術特點", link: "/zh-hk/guide/tech" },
          ],
        },
        {
          text: "使用指南",
          items: [
            { text: "基礎使用", link: "/zh-hk/guide/basic-usage" },
            { text: "高級功能", link: "/zh-hk/guide/advanced" },
            { text: "常見問題", link: "/zh-hk/guide/faq" },
          ],
        },
      ],
    },
    footer: {
      message: "NewbeeHive",
      copyright: "Copyright © 2024-present NewbeePaste",
    },
  },
};

// 配置导出
export default defineConfig({
  // 多语言配置
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/en",
      ...enConfig,
    },
    "zh-cn": {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh-cn/",
      ...zhConfig,
    },
    "zh-hk": {
      label: "繁體中文",
      lang: "zh-HK",
      link: "/zh-hk/",
      ...hkConfig,
    },
  },
  sitemap: {
    hostname: "https://www.nbhive.com",
  },
  themeConfig: {
    logo: "/logo.png",
  },
  appearance: {

  }
});
