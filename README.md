# COLM 2026 · 非官方互動整理頁

把 [Conference on Language Modeling (COLM) 2026](https://colmweb.org/) 官網的內容,整理成**複合多區段、學術簡潔風、雙語、零 build** 的單頁互動網站。

> 🌐 **線上版(兩種設計,挑你喜歡的)**
> - **學術簡潔 · 複合多區段(主頁)** → <https://colm-info.peteraim.com/>
> - **`colm2026.html`(深紫 · 單檔設計)** → <https://colm-info.peteraim.com/colm2026.html>

COLM 是聚焦於「廣義語言建模」的學術會議,2026 年 10 月 6–9 日於**美國舊金山 Hilton Union Square** 舉行。本頁把官網的重要日期、徵稿主題、工作坊、組織成員、FAQ 與政策,整併成**一頁多區段**:hero 統計 → 關於 → 時間軸 → 主題 → 工作坊 → 組織 → FAQ → 指南/政策 → CTA,搭配 sticky 區段導覽與 scrollspy。

---

## ✨ 功能特色

- **🧱 複合多區段(composite)** — 一頁由 9 個區段依序組成,各區段用最適合的呈現:hero 數字、prose 長文、timeline 時間軸、cards 卡片格、accordion 手風琴、CTA。
- **🧭 sticky 區段導覽 + scrollspy** — 頂部自動生成各區段膠囊導覽,捲動時即時高亮當前區段、並把它捲進導覽視野。
- **🔢 hero 數字動畫** — 屆次 3、會議天數 4、工作坊 18、徵稿主題 17,進入視野時 count-up。
- **🪪 詳情視窗 + 官方外連** — 點任一卡片(主題 / 工作坊 / 組織 / 指南)開啟 dialog,內含**可點的官方連結**(工作坊網站、徵稿頁、講者個人首頁、官方文件),Esc 關閉、支援 `#slug` 深連結。
- **🌐 中英全頁切換** — 按語言鈕整頁(區段、卡片、導覽、`<title>`)即時重繪,不殘留另一語言。
- **🌗 深淺色切換** — 暖色淺色 / 暖色深色,選擇記在 `localStorage`。
- **🎞️ 捲動淡入** — minimalist 風格的輕微入場動畫(`IntersectionObserver`;無 JS 時內容照樣完整顯示)。
- **📐 學術簡潔視覺** — Newsreader serif 標題 + Hanken Grotesk 內文 + Noto Serif/Sans TC + Spline Sans Mono,暖灰單色、單一 slate accent、1px 細邊框、無漸層無重陰影。
- **🚀 零 build** — 純 HTML/CSS/JS,資料存成 `window.SITE_SECTIONS`,無框架、無打包,直接部署 GitHub Pages。

---

## 📂 內容結構

```
colm-info/
├── index.html          # 複合多區段主頁(composite 版型)
├── assets/
│   ├── styles.css      # MD3 基底 + 學術簡潔覆寫皮膚
│   └── app.js          # 區段渲染註冊表 + i18n + dialog + scrollspy + 捲動淡入
├── data/
│   └── data.js         # window.SITE_META + SITE_SECTIONS(9 區段,雙語)
├── colm2026.html       # 另一版獨立單檔設計(深紫 · Space Grotesk)
├── archive/
│   ├── v1/             # 第一版:gallery 卡片版型
│   ├── v2/             # 第二版:FAQ 知識庫手風琴
│   └── v3/             # 第三版:timeline 互動時間軸(工業風,單檔)
├── .nojekyll           # 讓 GitHub Pages 跳過 Jekyll
└── README.md
```

主頁 `data/data.js` 內含 9 個區段:**徵稿主題 17、工作坊 18、籌辦委員 12 + 理事 8、FAQ 15、指南/政策 11**,以及時間軸 11 個里程碑。資料以 `window.SITE_SECTIONS` 的 typed section-block 陣列定義(`type` 驅動渲染),每個可見字串皆為 `{ en, zh }` 雙語。

### 版本沿革(皆保留,可並列比較)

| 版本 | 版型 / 風格 | 位置 |
|------|------------|------|
| **v4(目前主頁)** | **composite** 複合多區段 · 學術簡潔 | [`/`](https://colm-info.peteraim.com/) |
| `colm2026.html` | 單檔 · 深紫 Space Grotesk 設計 | [`/colm2026.html`](https://colm-info.peteraim.com/colm2026.html) |
| v3 | **timeline** 互動時間軸 · 工業風 | [`/archive/v3/`](https://colm-info.peteraim.com/archive/v3/) |
| v2 | **faq** 知識庫手風琴 · 學術簡潔 | [`/archive/v2/`](https://colm-info.peteraim.com/archive/v2/) |
| v1 | **gallery** 卡片 + modal | [`/archive/v1/`](https://colm-info.peteraim.com/archive/v1/) |

### 資料來源

- 內容**改寫並整理自** COLM 官方網站 <https://colmweb.org/>(2026 年 5 月,涵蓋首頁與子頁面)。
- 雙語呈現;政策/規範以**官方英文為準**。委員姓名、單位、連結照官網原樣。

---

## 🛠️ 本機使用

純靜態,依專案慣例使用 `uv`:

```bash
uv run python -m http.server 4173   # 然後開 http://localhost:4173
```

或直接用瀏覽器打開 `index.html` / `colm2026.html`(`file://` 也能跑)。

### (選配)UX 測試

```bash
uv run --with playwright playwright install chromium
```

搭配自訂的 Playwright 腳本可跑基本檢查(頁面載入、雙語切換、深淺色模式、RWD 等)。

---

## 📝 聲明

本網站為**非官方、由社群製作**的 COLM 2026 整理頁,並非主辦單位官方產物。所有內容版權屬 **COLM 主辦單位**;**最新與權威資訊請以官方網站 [colmweb.org](https://colmweb.org/) 為準**。

零 build 靜態 HTML/CSS/JS。
