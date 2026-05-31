# COLM 2026 · 非官方知識庫

把 [Conference on Language Modeling (COLM) 2026](https://colmweb.org/) 官網的所有內容,整理成一個**可搜尋、可篩選、雙語、可深連結的「知識庫手風琴」**純靜態單頁網站。

> 🌐 **線上版**:<https://tingwei161803.github.io/colm-info/>

COLM 是聚焦於「廣義語言建模」的學術會議,2026 年 10 月 6–9 日於**美國舊金山 Hilton Union Square** 舉行。本站把官網十多個頁面(關於、重要日期、徵稿、各類指南與政策、工作坊、組織成員、FAQ)整併成一頁,以**分類分組的手風琴(accordion)**呈現:點任一標題即展開答案,搜尋一個框找到所有資訊。

---

## ✨ 功能特色

- **📖 知識庫手風琴** — 79 筆條目依 7 大類分組,點擊展開/收合;右上「全部展開」一鍵攤開。
- **🔎 全文搜尋(跨語)** — 不論畫面是中文或英文,搜尋 `ethics`、`Cornell`、`tokenization`、`海報`、`利益衝突` 都即時命中(同時索引中英文 + 連結文字)。
- **🏷️ 分類篩選** — 關於 / 重要日期 / 徵稿 / 指南與政策 / 工作坊 / 組織成員 / FAQ。
- **🧩 結構化答案** — 答案支援小標、條列、時間軸與**可點擊的相關連結**(OpenReview、範本、各工作坊網站、委員個人頁等)。
- **🌐 中英全頁切換** — 一鍵把整頁(標題、答案、介面)在繁中與英文間切換,無文字殘留。
- **🌗 深淺色切換** — 暖色編輯風的淺色與石墨深色,選擇記在 `localStorage`。
- **🔗 深連結** — 每筆都有 `#slug` 錨點,可直接分享(例:`#call-for-papers`、`#main-track-timeline`、`#p-yoav-artzi`),開啟時自動展開並捲動定位。
- **📱 響應式 + 無障礙** — 手機 375px 無水平溢出;手風琴使用 `aria-expanded` / `role=region`,鍵盤可操作。
- **🚀 零 build** — 純 HTML / CSS / JS,無打包工具、無框架,直接部署到 GitHub Pages。

---

## 📂 內容結構

```
colm-info/
├── index.html          # 單頁:版面、SEO/OG/JSON-LD(FAQPage)、hero、搜尋、手風琴
├── assets/
│   ├── styles.css      # minimalist 編輯風 + 暖色深淺色 token(純 CSS)
│   └── app.js          # 狀態機、分組手風琴、跨語搜尋、雙語、結構化答案渲染、深連結
├── data/
│   └── data.js         # window.SITE_QA(79 筆雙語)+ SITE_CATEGORIES + SITE_META
├── archive/
│   └── v1/             # 第一版(gallery 卡片版型)封存,可獨立瀏覽
├── .nojekyll           # 讓 GitHub Pages 跳過 Jekyll
└── README.md
```

資料層 `data/data.js` 共 **79 筆**:關於 5、重要日期 2、徵稿 2、指南與政策 7、工作坊 18、組織成員 20、FAQ 25。每筆是 `{ slug, category, q:{en,zh}, a:{en,zh}, meta?, links? }`。答案中以 `### 小標`、`• 條列`、空行分段標記結構,由 `app.js` 安全渲染(全程 `escapeHtml`)。

### 版本

- **目前版本(root)**:FAQ 知識庫手風琴版型。
- **archive/v1/**:第一版 gallery 卡片版型(卡片 grid + modal 詳情),保留封存,可於 `/colm-info/archive/v1/` 瀏覽。

### 資料來源

- 全部內容萃取自 **COLM 官方網站 <https://colmweb.org/>**(2026 年 5 月擷取),涵蓋 index 與全部 15 個 2026 子頁面。
- 英文側忠實重現官網文字;中文側為**忠實翻譯**。政策文件(行為準則、倫理準則、利益衝突等)**以官方英文為準**。
- 委員/理事姓名、單位、連結照官網原樣呈現(例:官網寫 `Subhi Goel`,即照此呈現)。

---

## 🛠️ 本機使用

純靜態網站,依專案慣例使用 `uv`:

```bash
uv run python -m http.server 4173
# 然後開 http://localhost:4173
```

或直接用瀏覽器打開 `index.html`(`file://` 也能跑,資料是 `window.*` 全域變數,無需 `fetch`)。

### (選配)跑 UX 測試

```bash
uv run --with playwright playwright install chromium     # 首次
uv run --with playwright python <lazy-data2web>/scripts/verify.py --dir .
```

---

## 📝 聲明

本網站為**非官方、由社群製作**的 COLM 2026 資訊鏡像,並非 COLM 主辦單位官方產物。所有內容版權屬於 **COLM 主辦單位**;**最新與權威資訊請以官方網站 [colmweb.org](https://colmweb.org/) 為準**。若有出入,以官網為準。

以 lazy-data2web 工作流製作 · 零 build 靜態 HTML/CSS/JS。
