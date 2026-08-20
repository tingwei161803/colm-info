/* =========================================================================
   COLM 2026 · app.js  (vanilla, zero-build)
   Reads:
     window.SITE_DATA       -> [{ slug, category, title:{en,zh}, summary:{en,zh},
                                  meta?, overview?, sections?, timeline?, links?, url?, note? }]
     window.SITE_CATEGORIES -> [{ key, en, zh }]
     window.SITE_META       -> { deadlines:[{iso, label:{en,zh}}], ... }
   See references/data-schema.md for the canonical contract.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- data ---------- */
  var DATA = Array.isArray(window.SITE_DATA) ? window.SITE_DATA : [];
  var CATS = Array.isArray(window.SITE_CATEGORIES) ? window.SITE_CATEGORIES : [];
  var META = window.SITE_META || {};

  /* ---------- i18n strings (UI chrome only — content lives in SITE_DATA) ---------- */
  var I18N = {
    en: {
      brand: "COLM 2026",
      search: "Search dates, policies, people…",
      empty: "No results. Try another keyword or filter.",
      all: "All",
      "hero.eyebrow": "Conference on Language Modeling",
      "hero.sub": "A community for researchers understanding, improving, and critiquing language-model technology.",
      "hero.venue": "Hilton Union Square, San Francisco",
      "hero.dateline": "October 6–9, 2026",
      "hero.note": "Unofficial, searchable mirror of colmweb.org — all content belongs to the COLM Organization.",
      "footer.tagline": "An unofficial, community-built mirror of COLM 2026.",
      "footer.source": "Source",
      "footer.built": "Static, no build step.",
      count_one: "1 entry",
      count_many: "{n} entries",
      links: "Links",
      timeline: "Timeline",
      visit: "Open link",
      cd_label: "Next deadline",
      cd_today: "today",
      cd_tomorrow: "tomorrow",
      cd_days: "in {n} days",
      cd_passed: "Submissions closed · see you in San Francisco"
    },
    zh: {
      brand: "COLM 2026",
      search: "搜尋日期、政策、人員⋯⋯",
      empty: "沒有結果。換個關鍵字或篩選條件試試。",
      all: "全部",
      "hero.eyebrow": "語言建模研討會",
      "hero.sub": "一個讓研究者理解、改進並反思語言模型技術的社群。",
      "hero.venue": "Hilton Union Square,舊金山",
      "hero.dateline": "2026 年 10 月 6–9 日",
      "hero.note": "colmweb.org 的非官方、可搜尋鏡像 —— 所有內容版權屬於 COLM 主辦單位。",
      "footer.tagline": "由社群打造的 COLM 2026 非官方鏡像。",
      "footer.source": "資料來源",
      "footer.built": "純靜態,無建置流程。",
      count_one: "1 筆",
      count_many: "{n} 筆",
      links: "相關連結",
      timeline: "時間軸",
      visit: "開啟連結",
      cd_label: "下個截止日",
      cd_today: "就是今天",
      cd_tomorrow: "就在明天",
      cd_days: "還有 {n} 天",
      cd_passed: "投稿已截止 · 舊金山見"
    }
  };

  /* ---------- global state ---------- */
  var state = {
    lang:   localStorage.getItem("lang")  || "en",
    theme:  localStorage.getItem("theme") || "light",
    search: "",
    category: "all"
  };

  /* ---------- dom refs ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var grid       = $("grid");
  var empty      = $("empty");
  var chips      = $("chips");
  var countEl    = $("count");
  var searchEl   = $("searchInput");
  var dialog     = $("dialog");
  var dialogBody = $("dialogBody");

  var visible = [];          // current filtered list — drives dialog keyboard nav
  var io = null;             // IntersectionObserver for scroll-entry

  /* ---------- helpers ---------- */
  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key] || (I18N.en[key] || key); }
  function tl(key, n) { return ui(key).replace("{n}", n); }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }
  function catLabel(id) {
    var c = CATS.find(function (x) { return x.key === id; });
    return c ? (c[state.lang] || c.en || c.zh || id) : id;
  }
  function catClass(id) { return "cat-" + String(id).replace(/[^a-z0-9_-]/gi, ""); }

  // search across BOTH languages so a query matches regardless of display language
  function bothLang(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return (obj.en || "") + " " + (obj.zh || "");
  }
  function matches(item) {
    if (state.category !== "all" && item.category !== state.category) return false;
    if (!state.search) return true;
    var q = state.search.toLowerCase();
    var hay = [
      bothLang(item.title), bothLang(item.summary), bothLang(item.meta), bothLang(item.overview),
      (item.tags || []).join(" "), item.category || "",
      // include section + timeline text (both languages) so deep content is searchable
      (item.sections || []).map(function (s) {
        var listTxt = s.list ? ((s.list.en || []).join(" ") + " " + (s.list.zh || []).join(" ")) : "";
        return bothLang(s.heading) + " " + bothLang(s.body) + " " + listTxt;
      }).join(" "),
      (item.timeline || []).map(function (d) { return bothLang(d.label) + " " + bothLang(d.date); }).join(" ")
    ].join(" ").toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  /* ---------- render: filter and paint cards ---------- */
  function render() {
    visible = DATA.filter(matches);
    if (io) io.disconnect();
    grid.innerHTML = "";

    visible.forEach(function (item, i) {
      var card = document.createElement("article");
      card.className = "card";
      card.tabIndex = 0;
      card.dataset.slug = item.slug;
      card.style.setProperty("--index", i);

      var metaLine = t(item.meta)
        ? '<p class="card__meta">' + escapeHtml(t(item.meta)) + "</p>" : "";
      var tags = (item.tags || []).slice(0, 4).map(function (tg) {
        return '<span class="tag">' + escapeHtml(tg) + "</span>";
      }).join("");

      card.innerHTML =
        '<span class="card__cat ' + catClass(item.category) + '">' + escapeHtml(catLabel(item.category)) + "</span>" +
        '<h3 class="card__title">' + escapeHtml(t(item.title)) + "</h3>" +
        metaLine +
        '<p class="card__summary">' + escapeHtml(t(item.summary)) + "</p>" +
        (tags ? '<div class="card__tags">' + tags + "</div>" : "");

      card.addEventListener("click", function () { openDialog(item.slug); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDialog(item.slug); }
      });
      grid.appendChild(card);
    });

    empty.hidden = visible.length !== 0;
    empty.textContent = ui("empty");
    countEl.textContent = visible.length === 1
      ? ui("count_one") : tl("count_many", visible.length);

    revealCards();
  }

  /* scroll-entry: fade cards in as they enter the viewport (minimalist motion) */
  function revealCards() {
    var cards = grid.querySelectorAll(".card");
    if (!("IntersectionObserver" in window)) {
      cards.forEach(function (c) { c.classList.add("is-in"); });
      return;
    }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = parseInt(e.target.style.getPropertyValue("--index"), 10) || 0;
          e.target.style.transitionDelay = Math.min(idx, 8) * 45 + "ms";
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    cards.forEach(function (c) { io.observe(c); });
  }

  /* ---------- chips ---------- */
  function buildChips() {
    chips.innerHTML = "";
    var ids = ["all"].concat(CATS.length
      ? CATS.map(function (c) { return c.key; })
      : unique(DATA.map(function (d) { return d.category; }).filter(Boolean)));

    ids.forEach(function (id) {
      var btn = document.createElement("button");
      btn.className = "chip";
      btn.type = "button";
      btn.dataset.cat = id;
      var lbl = id === "all" ? ui("all") : catLabel(id);
      btn.textContent = lbl;
      btn.setAttribute("aria-label", lbl);
      btn.setAttribute("aria-pressed", String(state.category === id));
      btn.addEventListener("click", function () {
        state.category = id;
        syncChips();
        render();
      });
      chips.appendChild(btn);
    });
  }
  function syncChips() {
    [].forEach.call(chips.children, function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.cat === state.category));
    });
  }
  function unique(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }

  /* ---------- detail dialog rendering ---------- */
  function paragraphs(text) {
    return String(text).split(/\n{2,}/).map(function (p) {
      return "<p>" + escapeHtml(p.trim()).replace(/\n/g, "<br>") + "</p>";
    }).join("");
  }
  function renderList(list) {
    var arr = list[state.lang] || list.en || list.zh || [];
    var ordered = list.ordered;
    var items = arr.map(function (x) { return "<li>" + escapeHtml(x) + "</li>"; }).join("");
    return ordered ? "<ol>" + items + "</ol>" : "<ul>" + items + "</ul>";
  }
  function renderTimeline(tlItems) {
    var today = startOfToday();
    var nextMarked = false;
    var rows = tlItems.map(function (d) {
      var cls = "";
      if (d.iso) {
        var dt = new Date(d.iso + "T23:59:59");
        if (dt < today) cls = "is-past";
        else if (!nextMarked) { cls = "is-next"; nextMarked = true; }
      }
      return '<li class="' + cls + '">' +
        '<span class="timeline__date">' + escapeHtml(t(d.date)) + "</span>" +
        '<span class="timeline__label">' + escapeHtml(t(d.label)) + "</span></li>";
    }).join("");
    return '<h3>' + escapeHtml(ui("timeline")) + '</h3><ul class="timeline">' + rows + "</ul>";
  }

  function openDialog(slug) {
    var item = DATA.find(function (d) { return d.slug === slug; });
    if (!item) return;

    var html = '<span class="detail__cat ' + catClass(item.category) + '">' + escapeHtml(catLabel(item.category)) + "</span>";
    html += '<h2 class="detail__title">' + escapeHtml(t(item.title)) + "</h2>";
    if (t(item.meta)) html += '<p class="detail__meta">' + escapeHtml(t(item.meta)) + "</p>";
    if (t(item.overview)) html += '<div class="detail__overview">' + paragraphs(t(item.overview)) + "</div>";

    if (Array.isArray(item.timeline) && item.timeline.length) {
      html += '<div class="detail__section">' + renderTimeline(item.timeline) + "</div>";
    }

    (item.sections || []).forEach(function (s) {
      html += '<div class="detail__section">';
      if (t(s.heading)) html += "<h3>" + escapeHtml(t(s.heading)) + "</h3>";
      if (t(s.body)) html += paragraphs(t(s.body));
      if (s.list) html += renderList(s.list);
      html += "</div>";
    });

    var links = (item.links || []).slice();
    if (item.url) links.unshift({ label: { en: ui("visit"), zh: ui("visit") }, url: item.url });
    if (links.length) {
      html += '<div class="detail__links">';
      links.forEach(function (lk) {
        html += '<a class="detail__link" href="' + escapeHtml(lk.url) + '" target="_blank" rel="noopener">' +
          '<span class="material-symbols-rounded">open_in_new</span>' +
          '<span class="detail__link-txt">' + escapeHtml(t(lk.label) || lk.url) + "</span></a>";
      });
      html += "</div>";
    }

    if (t(item.note)) html += '<div class="detail__note">' + escapeHtml(t(item.note)) + "</div>";

    dialogBody.innerHTML = html;
    dialogBody.scrollTop = 0;
    if (!dialog.open) dialog.showModal();
    if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
  }
  function closeDialog() {
    if (dialog.open) dialog.close();
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  }
  function navBy(delta) {
    var slug = location.hash.slice(1);
    var idx = visible.findIndex(function (d) { return d.slug === slug; });
    if (idx === -1) return;
    var next = visible[(idx + delta + visible.length) % visible.length];
    if (next) openDialog(next.slug);
  }

  /* ---------- theme + lang ---------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = $("themeIcon");
    if (icon) icon.textContent = state.theme === "dark" ? "light_mode" : "dark_mode";
    localStorage.setItem("theme", state.theme);
  }
  function applyLang() {
    document.documentElement.setAttribute("lang", state.lang);
    localStorage.setItem("lang", state.lang);
    var label = $("langLabel");
    if (label) label.textContent = state.lang === "en" ? "中" : "EN";
    document.title = state.lang === "en"
      ? "COLM 2026 · Conference on Language Modeling"
      : "COLM 2026 · 語言建模研討會";
    // translate every chrome string marked with data-i18n
    [].forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var key = el.getAttribute("data-i18n");
      var val = ui(key);
      if (val == null) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, val);
      else el.textContent = val;
    });
  }

  /* =========================================================================
     ★ YOUR CONTRIBUTION — hero countdown logic
     -------------------------------------------------------------------------
     pickNextDeadline() decides WHICH milestone the hero highlights and HOW the
     remaining time reads. It shapes the first thing every visitor sees, so the
     product call is yours:
       • Which date counts as "next"? (first future deadline? skip past ones?)
       • A range like the rebuttal period (May 22–Jun 8) — is its END the date
         that matters, or its START?
       • When every deadline has passed, show nothing, or a closing message?

     `deadlines` is window.SITE_META.deadlines: [{ iso:"YYYY-MM-DD", label:{en,zh} }]
     `now` is a Date (start of today). Return one of:
       • null                              -> hide the countdown entirely
       • { label:{en,zh}, days:<int>=0> }  -> show "label — in N days / today / tomorrow"
       • { passed:true }                   -> show the cd_passed message

     The baseline below works (first future deadline, whole-day diff). Tweak it to
     taste — e.g. surface the SECOND-nearest once a deadline is <24h away, or add
     an "urgent" flag under 3 days that you style differently.
     ========================================================================= */
  function pickNextDeadline(deadlines, now) {
    if (!Array.isArray(deadlines) || !deadlines.length) return null;
    var upcoming = deadlines
      .filter(function (d) { return d.iso; })
      .map(function (d) { return { label: d.label, when: new Date(d.iso + "T23:59:59") }; })
      .filter(function (d) { return d.when >= now; })
      .sort(function (a, b) { return a.when - b.when; });
    if (!upcoming.length) return { passed: true };
    var next = upcoming[0];
    var days = Math.round((next.when - now) / 86400000);
    return { label: next.label, days: days };
  }
  /* ----------------------- end of your contribution ----------------------- */

  function startOfToday() {
    var n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }
  function renderCountdown() {
    var box = $("countdown");
    if (!box) return;
    var res = pickNextDeadline(META.deadlines, startOfToday());
    if (!res) { box.hidden = true; return; }
    box.hidden = false;
    var labelEl = $("countdownLabel");
    var valueEl = $("countdownValue");
    if (res.passed) {
      labelEl.textContent = "";
      valueEl.textContent = ui("cd_passed");
      return;
    }
    labelEl.textContent = ui("cd_label") + ": " + t(res.label);
    var phrase = res.days <= 0 ? ui("cd_today")
      : res.days === 1 ? ui("cd_tomorrow")
      : tl("cd_days", res.days);
    valueEl.textContent = phrase;
  }

  /* ---------- GitHub star count (public API, no auth) ---------- */
  function loadStars() {
    var el = $("ghStar");
    if (!el) return;
    var repo = el.dataset.repo;
    if (!repo || repo.indexOf("{{") === 0) return;
    fetch("https://api.github.com/repos/" + repo)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) {
        if (j && typeof j.stargazers_count === "number") {
          $("ghStarCount").textContent = formatStars(j.stargazers_count);
        }
      })
      .catch(function () { /* offline / rate-limited: leave placeholder */ });
  }
  function formatStars(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  /* ---------- event wiring ---------- */
  function wire() {
    searchEl.addEventListener("input", function (e) {
      state.search = e.target.value.trim();
      render();
    });
    $("themeToggle").addEventListener("click", function () {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });
    $("langToggle").addEventListener("click", function () {
      state.lang = state.lang === "en" ? "zh" : "en";
      applyLang();           // chrome
      buildChips();          // chip labels
      syncChips();
      render();              // all card content
      renderCountdown();     // hero countdown
      var open = location.hash.slice(1);
      if (dialog.open && open) openDialog(open);  // re-render open dialog
    });
    $("dialogClose").addEventListener("click", closeDialog);
    $("navPrev").addEventListener("click", function () { navBy(-1); });
    $("navNext").addEventListener("click", function () { navBy(1); });

    dialog.addEventListener("click", function (e) { if (e.target === dialog) closeDialog(); });
    dialog.addEventListener("close", function () {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
    });
    document.addEventListener("keydown", function (e) {
      if (!dialog.open) return;
      if (e.key === "ArrowRight") navBy(1);
      else if (e.key === "ArrowLeft") navBy(-1);
    });
    window.addEventListener("hashchange", syncFromHash);
  }

  function syncFromHash() {
    var slug = location.hash.slice(1);
    if (slug && DATA.some(function (d) { return d.slug === slug; })) openDialog(slug);
    else if (!slug && dialog.open) dialog.close();
  }

  /* ---------- init ---------- */
  function init() {
    applyTheme();
    applyLang();
    buildChips();
    render();
    renderCountdown();
    wire();
    loadStars();
    syncFromHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
