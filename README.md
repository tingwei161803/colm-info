# COLM 2026 · 非官方互動整理頁

把 [Conference on Language Modeling (COLM) 2026](https://colmweb.org/) 官網的內容,整理成一個**以時間軸為主、工業/學術風格、雙語、零 build** 的單頁互動網站。

> 🌐 **線上版**:<https://tingwei161803.github.io/colm-info/>

COLM 是聚焦於「廣義語言模型」的學術會議,2026 年 10 月 6–9 日於**美國舊金山 Hilton Union Square** 舉行。本頁把官網的重要時程、工作坊、徵稿主題、組織成員、FAQ 與政策整併成一頁,**以時間軸開場**、一個搜尋框篩選全站。

---

## ✨ 功能特色

- **🗓️ 即時狀態時間軸** — 11 個關鍵里程碑(投稿開放→摘要→完整論文→答辯→錄取→會議),狀態(已結束 / 進行中 / 下一步 / 尚未開始)**相對今天即時計算**,進行中與下一個會以紅色標示。
- **🔎 全站搜尋** — 一個搜尋框同時篩選時間軸、工作坊、主題、人員、FAQ、指南;沒有命中的區塊與導覽會自動隱藏。
- **🧭 章節導覽 + scroll-spy** — 6 區(時程 / 工作坊 / 主題 / 組織 / FAQ / 指南),捲動時自動高亮當前章節。
- **🪪 詳情視窗** — 點時間軸任一事件開啟 dialog,可用 ← / → 切換、Esc 關閉,並支援 `#slug` 深連結。
- **🌐 中英全頁切換** + **🌗 深淺色切換**(Swiss-print 淺色 / tactical 深色),選擇記在 `localStorage`。
- **📐 工業/學術視覺** — Archivo + IBM Plex Mono + Noto Sans TC、紅色 accent、點陣網格背景、硬邊框格線。
- **🚀 零 build · 單檔** — 全部 HTML/CSS/JS/資料內嵌於 `index.html`,無框架、無打包,直接部署 GitHub Pages。

---

## 📂 內容結構

```
colm-info/
├── index.html          # 單檔站:版面 + CSS + 資料 + app 全內嵌(timeline 版型)
├── archive/
│   ├── v1/             # 第一版:gallery 卡片版型(多檔)
│   └── v2/             # 第二版:FAQ 知識庫手風琴版型(多檔)
├── .nojekyll           # 讓 GitHub Pages 跳過 Jekyll
└── README.md
```

目前的 `index.html` 內含:時間軸事件 11、工作坊 18、徵稿主題 17、籌辦委員 12、理事 8、FAQ 15、指南/政策 10。資料以 `SITE_EVENTS / SITE_WORKSHOPS / SITE_TOPICS / SITE_ORGANIZERS / SITE_BOARD / SITE_FAQ / SITE_GUIDES` 等全域陣列定義,皆為 `{ en, zh }` 雙語。

### 版本沿革(三種版型,皆保留)

| 版本 | 版型 | 位置 |
|------|------|------|
| v3(目前) | **timeline** 互動時間軸 · 工業風 | `/`(root) |
| v2 | **faq** 知識庫手風琴 · 學術簡潔 | [`/archive/v2/`](https://tingwei161803.github.io/colm-info/archive/v2/) |
| v1 | **gallery** 卡片 + modal | [`/archive/v1/`](https://tingwei161803.github.io/colm-info/archive/v1/) |

### 資料來源

- 內容**改寫並整理自** COLM 官方網站 <https://colmweb.org/>(2026 年 5 月,涵蓋首頁與子頁面)。
- 雙語呈現;政策/規範以**官方英文為準**。委員姓名、單位、連結照官網原樣。

---

## 🛠️ 本機使用

純靜態,依專案慣例使用 `uv`:

```bash
uv run python -m http.server 4173   # 然後開 http://localhost:4173
```

或直接用瀏覽器打開 `index.html`(`file://` 也能跑)。

### (選配)UX 測試

```bash
uv run --with playwright playwright install chromium
uv run --with playwright python <lazy-data2web>/scripts/verify.py --dir .
```

---

## 📝 聲明

本網站為**非官方、由社群製作**的 COLM 2026 整理頁,並非主辦單位官方產物。所有內容版權屬 **COLM 主辦單位**;**最新與權威資訊請以官方網站 [colmweb.org](https://colmweb.org/) 為準**。

以 lazy-data2web 工作流製作 · 零 build 靜態 HTML/CSS/JS。
