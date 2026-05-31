/* =========================================================================
   lazy-data2web · app.js · FAQ / accordion layout  (vanilla, no build)
   Reads:
     window.SITE_META       -> { title:{en,zh}, subtitle:{en,zh} }
     window.SITE_CATEGORIES -> [{ key, en, zh }]            (optional)
     window.SITE_QA         -> [{ slug, category?, q:{en,zh}, a:{en,zh} }]
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- data ---------- */
  var META = window.SITE_META || {};
  var CATS = Array.isArray(window.SITE_CATEGORIES) ? window.SITE_CATEGORIES : [];
  var QA   = Array.isArray(window.SITE_QA) ? window.SITE_QA : [];

  /* ---------- sandbox-safe localStorage ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  /* ---------- i18n strings (UI chrome only) ---------- */
  var I18N = {
    en: { brand: "COLM 2026", search: "Search dates, policies, people…", empty: "No matching entries. Try another keyword or filter.",
          all: "All", expandAll: "Expand all", collapseAll: "Collapse all",
          count: "{n} entries", countOne: "1 entry",
          links: "Links", eyebrow: "Conference on Language Modeling · Knowledge Base", "footer.source": "Source",
          footer: "Unofficial mirror of colmweb.org · built with lazy-data2web · static, no build step." },
    zh: { brand: "COLM 2026", search: "搜尋日期、政策、人員⋯⋯", empty: "沒有符合的項目。換個關鍵字或篩選條件試試。",
          all: "全部", expandAll: "全部展開", collapseAll: "全部收合",
          count: "{n} 筆", countOne: "1 筆",
          links: "相關連結", eyebrow: "語言建模研討會 · 知識庫", "footer.source": "資料來源",
          footer: "colmweb.org 非官方鏡像 · 以 lazy-data2web 建置 · 純靜態,無建置流程。" }
  };

  /* ---------- global state ---------- */
  var state = {
    lang:   lsGet("lang")  || "zh",
    theme:  lsGet("theme") || "light",
    search: "",
    category: "all",
    open: {}          // slug -> bool, which answers are expanded
  };

  /* ---------- dom refs ---------- */
  var $ = function (id) { return document.getElementById(id); };
  var faqEl     = $("faq");
  var empty     = $("empty");
  var chips     = $("chips");
  var searchEl  = $("searchInput");
  var countEl   = $("count");
  var expandBtn = $("expandAll");

  var visible = [];   // current filtered list

  /* ---------- helpers ---------- */
  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[state.lang] || obj.en || obj.zh || "";
  }
  function ui(key) { return (I18N[state.lang] || I18N.en)[key]; }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function catLabel(id) {
    var c = CATS.find(function (x) { return x.key === id; });
    return c ? (c[state.lang] || c.en || c.zh || id) : id;
  }
  function unique(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }

  function bothLang(o) {
    if (o == null) return "";
    if (typeof o === "string") return o;
    return (o.en || "") + " " + (o.zh || "");
  }
  function matches(item) {
    if (state.category !== "all" && item.category !== state.category) return false;
    if (!state.search) return true;
    var q = state.search.toLowerCase();
    // search BOTH languages + meta + link labels so a query matches regardless of display language
    var hay = [
      bothLang(item.q), bothLang(item.a), bothLang(item.meta), item.category || "",
      (item.links || []).map(function (l) { return bothLang(l.label) + " " + (l.url || ""); }).join(" ")
    ].join(" ").toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  /* ---------- rich answer renderer (### heading / • bullet / blank-line paragraph + links) ---------- */
  function renderAnswer(item) {
    var html = "";
    if (t(item.meta)) html += '<p class="faq-a__meta">' + escapeHtml(t(item.meta)) + "</p>";
    String(t(item.a)).split(/\n{2,}/).forEach(function (block) {
      block = block.replace(/\s+$/, "");
      if (!block.trim()) return;
      if (block.indexOf("### ") === 0) {
        html += "<h4>" + escapeHtml(block.slice(4).trim()) + "</h4>";
        return;
      }
      var lines = block.split(/\n/);
      var allBullets = lines.every(function (l) { return l.trim().indexOf("•") === 0; });
      if (allBullets) {
        html += "<ul>" + lines.map(function (l) {
          return "<li>" + escapeHtml(l.trim().replace(/^•\s*/, "")) + "</li>";
        }).join("") + "</ul>";
      } else {
        html += "<p>" + escapeHtml(block).replace(/\n/g, "<br>") + "</p>";
      }
    });
    if (Array.isArray(item.links) && item.links.length) {
      html += '<div class="faq-a__links">';
      item.links.forEach(function (lk) {
        html += '<a class="faq-a__link" href="' + escapeHtml(lk.url) + '" target="_blank" rel="noopener">' +
          '<span class="material-symbols-rounded" aria-hidden="true">open_in_new</span>' +
          '<span>' + escapeHtml(t(lk.label) || lk.url) + "</span></a>";
      });
      html += "</div>";
    }
    return html;
  }

  /* ---------- render: filter then paint accordion ---------- */
  function render() {
    visible = QA.filter(matches);
    faqEl.innerHTML = "";

    // group by category when categories are defined; else a single flat list
    if (CATS.length) {
      CATS.forEach(function (cat) {
        var items = visible.filter(function (it) { return it.category === cat.key; });
        if (!items.length) return;
        var group = document.createElement("section");
        group.className = "faq__group";
        var h = document.createElement("h2");
        h.className = "faq__group-title";
        h.textContent = catLabel(cat.key);
        group.appendChild(h);
        items.forEach(function (it) { group.appendChild(buildItem(it)); });
        faqEl.appendChild(group);
      });
      // items with an unknown / missing category fall into an "other" bucket
      var orphan = visible.filter(function (it) {
        return !CATS.some(function (c) { return c.key === it.category; });
      });
      if (orphan.length) {
        var g = document.createElement("section");
        g.className = "faq__group";
        orphan.forEach(function (it) { g.appendChild(buildItem(it)); });
        faqEl.appendChild(g);
      }
    } else {
      var g2 = document.createElement("section");
      g2.className = "faq__group";
      visible.forEach(function (it) { g2.appendChild(buildItem(it)); });
      faqEl.appendChild(g2);
    }

    empty.hidden = visible.length !== 0;
    empty.textContent = ui("empty");
    updateCount();
    syncExpandBtn();
  }

  function buildItem(item) {
    var isOpen = !!state.open[item.slug];
    var wrap = document.createElement("article");
    wrap.className = "faq-item card";
    wrap.id = item.slug;
    wrap.dataset.item = item.slug;
    wrap.dataset.slug = item.slug;
    wrap.dataset.open = String(isOpen);

    var panelId = "panel-" + item.slug;
    var btnId = "q-" + item.slug;

    var btn = document.createElement("button");
    btn.className = "faq-q";
    btn.type = "button";
    btn.id = btnId;
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.setAttribute("aria-controls", panelId);
    btn.innerHTML =
      '<span class="faq-q__text">' + escapeHtml(t(item.q)) + "</span>" +
      '<span class="material-symbols-rounded faq-q__icon" aria-hidden="true">expand_more</span>';

    var panel = document.createElement("div");
    panel.className = "faq-a";
    panel.id = panelId;
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", btnId);
    panel.innerHTML = '<div class="faq-a__inner"><div class="faq-a__content">' + renderAnswer(item) + "</div></div>";

    btn.addEventListener("click", function () { toggle(item.slug); });

    wrap.appendChild(btn);
    wrap.appendChild(panel);
    return wrap;
  }

  function toggle(slug, force) {
    var next = (typeof force === "boolean") ? force : !state.open[slug];
    state.open[slug] = next;
    var wrap = document.getElementById(slug);
    if (wrap) {
      wrap.dataset.open = String(next);
      var btn = wrap.querySelector(".faq-q");
      if (btn) btn.setAttribute("aria-expanded", String(next));
    }
    syncExpandBtn();
  }

  function updateCount() {
    var n = visible.length;
    countEl.textContent = n === 1 ? ui("countOne") : ui("count").replace("{n}", n);
  }

  /* ---------- expand / collapse all ---------- */
  function allOpen() {
    return visible.length > 0 && visible.every(function (it) { return state.open[it.slug]; });
  }
  function syncExpandBtn() {
    var open = allOpen();
    var label = expandBtn.querySelector("[data-i18n]");
    var icon = expandBtn.querySelector(".material-symbols-rounded");
    var key = open ? "collapseAll" : "expandAll";
    if (label) { label.setAttribute("data-i18n", key); label.textContent = ui(key); }
    if (icon) icon.textContent = open ? "unfold_less" : "unfold_more";
  }

  /* ---------- chips ---------- */
  function buildChips() {
    chips.innerHTML = "";
    var ids = CATS.length
      ? CATS.map(function (c) { return c.key; })
      : unique(QA.map(function (d) { return d.category; }).filter(Boolean));
    if (!ids.length) return;     // no categories: hide the chip row entirely
    ids = ["all"].concat(ids);

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

  /* ---------- theme + lang ---------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    var icon = $("themeIcon");
    if (icon) icon.textContent = state.theme === "dark" ? "light_mode" : "dark_mode";
    lsSet("theme", state.theme);
  }
  function applyLang() {
    document.documentElement.setAttribute("lang", state.lang);
    lsSet("lang", state.lang);
    var label = $("langLabel");
    if (label) label.textContent = state.lang === "en" ? "EN" : "中";
    // hero
    var ht = $("heroTitle"), hs = $("heroSubtitle");
    if (ht) ht.textContent = t(META.title);
    if (hs) hs.textContent = t(META.subtitle);
    document.title = t(META.title) || document.title;
    // translate chrome marked with data-i18n
    [].forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var key = el.getAttribute("data-i18n");
      if (!I18N[state.lang] || I18N[state.lang][key] == null) return;
      // skip the brand placeholder if it was never substituted
      if (key === "brand" && I18N[state.lang][key].indexOf("{{") === 0) return;
      var attr = el.getAttribute("data-i18n-attr");
      if (attr) el.setAttribute(attr, ui(key));
      else el.textContent = ui(key);
    });
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
      .catch(function () { /* offline / rate-limited */ });
  }
  function formatStars(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  }

  /* ---------- deep link ---------- */
  function syncFromHash() {
    var slug = location.hash.slice(1);
    if (!slug) return;
    if (!QA.some(function (d) { return d.slug === slug; })) return;
    // clear any active filter/search so the target is guaranteed visible
    if (state.search) { state.search = ""; searchEl.value = ""; }
    state.category = "all";
    syncChips();
    state.open[slug] = true;
    render();
    var el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      var btn = el.querySelector(".faq-q");
      if (btn) btn.focus({ preventScroll: true });
    }
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
      applyLang();
      buildChips();
      render();           // re-render questions + answers (incl. expanded) in new lang
    });
    expandBtn.addEventListener("click", function () {
      var open = !allOpen();
      visible.forEach(function (it) { toggle(it.slug, open); });
    });
    window.addEventListener("hashchange", syncFromHash);
  }

  /* ---------- init ---------- */
  function init() {
    applyTheme();
    applyLang();
    buildChips();
    render();
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
