/* =========================================================================
   COLM 2026 · data/data.js  — plain globals, no modules, loaded before app.js.
   Faithful, bilingual (en / zh-Hant) mirror of https://colmweb.org content.
   Content © the COLM Organization; this is an unofficial community rebuild.
   The English side reproduces the official site; the 中文 side is a faithful
   translation provided for accessibility (English remains authoritative for
   the policy documents).
   ========================================================================= */

/* ---------- filter categories (chips) ---------- */
window.SITE_CATEGORIES = [
  { key: "about",     en: "About",            zh: "關於" },
  { key: "dates",     en: "Key Dates",        zh: "重要日期" },
  { key: "calls",     en: "Calls",            zh: "徵稿" },
  { key: "guides",    en: "Guides & Policies", zh: "指南與政策" },
  { key: "workshops", en: "Workshops",        zh: "工作坊" },
  { key: "people",    en: "Organizers",       zh: "組織成員" },
  { key: "faq",       en: "FAQ",              zh: "常見問題" }
];

/* ---------- site meta: hero countdown reads SITE_META.deadlines ---------- */
window.SITE_META = {
  conference: {
    startISO: "2026-10-06",
    endISO: "2026-10-09",
    venue: { en: "Hilton Union Square, San Francisco, USA", zh: "美國舊金山 Hilton Union Square" }
  },
  deadlines: [
    { iso: "2026-03-26", label: { en: "Abstract deadline",                 zh: "摘要截止" } },
    { iso: "2026-03-31", label: { en: "Full paper submission deadline",    zh: "完整論文投稿截止" } },
    { iso: "2026-04-14", label: { en: "Workshop proposal deadline",        zh: "工作坊提案截止" } },
    { iso: "2026-05-12", label: { en: "Workshop proposal notifications",   zh: "工作坊提案通知" } },
    { iso: "2026-06-08", label: { en: "Rebuttal period ends",              zh: "回覆討論期結束" } },
    { iso: "2026-06-23", label: { en: "Workshop contributions (suggested)", zh: "工作坊投稿(建議)截止" } },
    { iso: "2026-07-08", label: { en: "Decision notifications",            zh: "錄取結果通知" } },
    { iso: "2026-07-24", label: { en: "Workshop accept/reject (mandatory)", zh: "工作坊錄取/婉拒(必達)通知" } },
    { iso: "2026-10-06", label: { en: "COLM 2026 begins",                  zh: "COLM 2026 開幕" } }
  ]
};

/* ====================================================================== */
/*  ABOUT                                                                  */
/* ====================================================================== */
var ABOUT = [
  {
    slug: "about-colm",
    category: "about",
    title:   { en: "What is COLM?", zh: "什麼是 COLM?" },
    summary: { en: "An academic venue focused on the study of language modeling, broadly defined.",
               zh: "一個聚焦於廣義語言建模研究的學術會議。" },
    tags: ["mission", "language modeling", "community"],
    overview: {
      en: "The leap in general-purpose capabilities from language models is a landmark in the development of Artificial Intelligence. The nature of this technology has led to a different set of research questions than are the typical focus of related venues. COLM is an academic venue focused on the study of language modeling, broadly defined, with the goal of creating a community of researchers with expertise in different disciplines, focused on understanding, improving, and critiquing the development of LM technology.",
      zh: "語言模型在通用能力上的躍進,是人工智慧發展的一個里程碑。這項技術的本質,衍生出一組與相關會議慣常聚焦不同的研究問題。COLM 是一個聚焦於「廣義語言建模」研究的學術會議,目標是建立一個跨領域專長的研究者社群,專注於理解、改進並批判性地檢視語言模型技術的發展。"
    },
    sections: [
      { heading: { en: "How do you pronounce COLM?", zh: "COLM 怎麼念?" },
        body: { en: "It is pronounced like \"Collum\", based on the Irish name Colm. It means dove 🕊️.",
                zh: "發音類似「Collum」,源自愛爾蘭名字 Colm,意思是鴿子 🕊️。" } }
    ],
    note: { en: "Unofficial mirror — see colmweb.org for the authoritative version.",
            zh: "非官方鏡像 —— 權威版本請見 colmweb.org。" }
  },
  {
    slug: "venue-and-format",
    category: "about",
    title:   { en: "Venue & Conference Format", zh: "會議地點與形式" },
    summary: { en: "Hilton Union Square, San Francisco · Oct 6–9, 2026 · single-track + a workshop day.",
               zh: "舊金山 Hilton Union Square · 2026/10/6–9 · 單軌議程 + 一天工作坊。" },
    tags: ["venue", "san francisco", "schedule"],
    overview: {
      en: "COLM 2026 will take place at the Hilton Union Square in San Francisco, USA from October 6–9, 2026. The conference will be a three-day single-track event with a mix of invited talks, oral paper presentations, and poster sessions. The fourth day will be dedicated to workshops.",
      zh: "COLM 2026 將於 2026 年 10 月 6 日至 9 日在美國舊金山的 Hilton Union Square 舉行。會議為期三天、採單軌形式,內容包含特邀演講、口頭論文報告與海報展示;第四天則專屬於工作坊。" },
    sections: [
      { heading: { en: "At a glance", zh: "重點摘要" },
        list: { ordered: false,
          en: ["Main conference: October 6–8, 2026", "Workshops: October 9, 2026", "Single-track program (invited talks, orals, posters)", "In-person only — no virtual attendance option"],
          zh: ["主會議:2026 年 10 月 6–8 日", "工作坊:2026 年 10 月 9 日", "單軌議程(特邀演講、口頭報告、海報)", "僅限實體出席 —— 不提供線上參與"] } }
    ]
  },
  {
    slug: "stay-connected",
    category: "about",
    title:   { en: "Announcements & Archives", zh: "公告與歷屆存檔" },
    summary: { en: "Join the mailing list, follow on Bluesky / X, and browse past editions.",
               zh: "加入郵件清單、追蹤 Bluesky / X,並瀏覽歷屆會議存檔。" },
    tags: ["mailing list", "social", "2024", "2025"],
    overview: {
      en: "To receive announcements from COLM, sign up to the mailing list, or follow COLM on Bluesky or X. Past editions are archived online.",
      zh: "想收到 COLM 的公告,請加入郵件清單,或在 Bluesky 或 X 上追蹤 COLM。歷屆會議皆有線上存檔。" },
    links: [
      { label: { en: "Mailing list (Google Groups)", zh: "郵件清單(Google Groups)" }, url: "https://groups.google.com/g/colm-announcements" },
      { label: { en: "COLM on Bluesky", zh: "COLM 的 Bluesky" }, url: "https://bsky.app/profile/colmweb.org" },
      { label: { en: "COLM on X", zh: "COLM 的 X" }, url: "https://x.com/COLM_conf" },
      { label: { en: "COLM 2025 archive", zh: "COLM 2025 存檔" }, url: "https://colmweb.org/2025/" },
      { label: { en: "COLM 2024 archive", zh: "COLM 2024 存檔" }, url: "https://colmweb.org/2024/" }
    ]
  },
  {
    slug: "sponsorship",
    category: "about",
    title:   { en: "Sponsorship", zh: "贊助" },
    summary: { en: "COLM is actively looking for sponsors. Reach out to the Organizational Chair.",
               zh: "COLM 正積極尋找贊助者,歡迎聯絡組織主席。" },
    tags: ["sponsor", "contact"],
    overview: {
      en: "If you are interested in sponsoring COLM, please reach out to the COLM Organizational Chair. We are actively looking for sponsors for the event.",
      zh: "若您有意贊助 COLM,請聯絡 COLM 組織主席。我們正積極為本次活動尋找贊助者。" },
    links: [ { label: { en: "Email chris.brown@aicons.org", zh: "寄信給 chris.brown@aicons.org" }, url: "mailto:chris.brown@aicons.org" } ]
  },
  {
    slug: "gptzero-partnership",
    category: "about",
    title:   { en: "GPTZero Partnership", zh: "與 GPTZero 合作" },
    summary: { en: "COLM partnered with GPTZero to check for hallucinated references and substantially AI-generated papers.",
               zh: "COLM 與 GPTZero 合作,於審稿中檢查虛構引用與大幅由 AI 生成的論文。" },
    tags: ["integrity", "ai detection", "review"],
    overview: {
      en: "COLM partnered with GPTZero to check for hallucinated references and substantially AI-generated papers in its review of submitted papers.",
      zh: "COLM 與 GPTZero 合作,在審查投稿論文的過程中,檢查虛構的參考文獻以及大幅由 AI 生成的論文。" }
  }
];

/* ====================================================================== */
/*  KEY DATES                                                              */
/* ====================================================================== */
var DATES = [
  {
    slug: "main-track-timeline",
    category: "dates",
    title:   { en: "Main Track Timeline", zh: "主議程時間軸" },
    meta:    { en: "All deadlines 23:59 AoE (anywhere on earth)", zh: "所有截止時間為 23:59 AoE(地球任一處)" },
    summary: { en: "Abstracts Mar 26 · full papers Mar 31 · rebuttal May 22–Jun 8 · decisions Jul 8.",
               zh: "摘要 3/26 · 完整論文 3/31 · 回覆期 5/22–6/8 · 結果 7/8。" },
    tags: ["deadlines", "submission", "rebuttal"],
    timeline: [
      { iso: "2026-03-26", date: { en: "Thu, Mar 26, 2026", zh: "2026/03/26(四)" }, label: { en: "Abstract deadline", zh: "摘要截止" } },
      { iso: "2026-03-31", date: { en: "Tue, Mar 31, 2026", zh: "2026/03/31(二)" }, label: { en: "Full paper submission deadline", zh: "完整論文投稿截止" } },
      { iso: "2026-06-08", date: { en: "May 22 – Jun 8, 2026", zh: "2026/05/22 – 06/08" }, label: { en: "Rebuttal period", zh: "回覆討論期" } },
      { iso: "2026-07-08", date: { en: "Jul 8, 2026", zh: "2026/07/08" }, label: { en: "Decision notifications", zh: "錄取結果通知" } },
      { iso: "2026-10-06", date: { en: "Oct 6–9, 2026", zh: "2026/10/06–09" }, label: { en: "Conference dates", zh: "會議日期" } }
    ],
    note: { en: "AoE notation: a deadline has not passed until the time has passed everywhere on earth.",
            zh: "AoE 表示法:只要地球上任何一處還沒到截止時間,就算尚未截止。" }
  },
  {
    slug: "workshop-timeline",
    category: "dates",
    title:   { en: "Workshop Proposal Timeline", zh: "工作坊提案時間軸" },
    meta:    { en: "All deadlines 23:59 AoE", zh: "所有截止時間為 23:59 AoE" },
    summary: { en: "Proposals Apr 14 · decisions May 12 · contributions Jun 23 / Jul 24 · workshops Oct 9.",
               zh: "提案 4/14 · 結果 5/12 · 投稿 6/23 / 7/24 · 工作坊日 10/9。" },
    tags: ["workshops", "deadlines", "proposals"],
    timeline: [
      { iso: "2026-04-14", date: { en: "Apr 14, 2026", zh: "2026/04/14" }, label: { en: "Workshop proposal deadline", zh: "工作坊提案截止" } },
      { iso: "2026-05-12", date: { en: "May 12, 2026", zh: "2026/05/12" }, label: { en: "Proposal decision notifications", zh: "提案結果通知" } },
      { iso: "2026-06-23", date: { en: "Jun 23, 2026", zh: "2026/06/23" }, label: { en: "Suggested submission deadline for workshop contributions", zh: "工作坊投稿建議截止日" } },
      { iso: "2026-07-24", date: { en: "Jul 24, 2026", zh: "2026/07/24" }, label: { en: "Mandatory accept/reject notification for contributions", zh: "投稿錄取/婉拒必達通知" } },
      { iso: "2026-10-09", date: { en: "Oct 9, 2026", zh: "2026/10/09" }, label: { en: "Workshops day at COLM", zh: "COLM 工作坊日" } }
    ]
  }
];

/* ====================================================================== */
/*  CALLS                                                                  */
/* ====================================================================== */
var CALLS = [
  {
    slug: "call-for-papers",
    category: "calls",
    title:   { en: "Call for Papers", zh: "論文徵稿(Call for Papers)" },
    meta:    { en: "Questions: colm-pcs@googlegroups.com", zh: "提問:colm-pcs@googlegroups.com" },
    summary: { en: "Submissions to the 3rd COLM. 9-page limit, double-blind, OpenReview. Broad LM scope.",
               zh: "第三屆 COLM 徵稿。正文 9 頁上限、雙盲、OpenReview,廣義語言模型主題。" },
    tags: ["cfp", "openreview", "double-blind", "submission"],
    overview: {
      en: "We invite submissions to the 3rd Conference on Language Modeling (COLM). We consider the term \"language model\" in the broadest way. All deadlines are 23:59 AoE.\n\nSubmissions open on OpenReview in February 2026.",
      zh: "誠摯邀請投稿至第三屆語言建模研討會(COLM)。我們以最廣義的方式理解「語言模型」一詞。所有截止時間為 23:59 AoE。\n\n投稿系統將於 2026 年 2 月在 OpenReview 開放。" },
    sections: [
      { heading: { en: "Scope & Topics (non-exhaustive)", zh: "主題範圍(非窮舉)" },
        list: { ordered: true,
          en: [
            "All about training: fine-tuning, instruction-tuning, RL, prompt tuning, in-context learning",
            "All about data: data for pre-training, post-training, and other training stages",
            "All about evaluation: benchmarks, simulation environments, scalable oversight, protocols & metrics, human/machine evaluation, bias/equity/misuse",
            "All about safety: security, privacy, misinformation, adversarial attacks & defenses",
            "Science of LMs: scaling laws, limitations, emergent capabilities, interpretability, training dynamics, grokking, learning theory",
            "Compute-efficient LMs: distillation, compression, quantization, sample- & memory-efficient methods",
            "Engineering for large LMs: distributed training & inference, training dynamics, optimization instability",
            "Learning algorithms: SFT/RL, unlearning, meta-learning, model mixing, continual learning",
            "Inference algorithms: decoding, reasoning, search, planning",
            "Human mind, brain, philosophy, law & LMs: cognitive science, neuroscience, linguistics, legal perspectives",
            "LMs with tools and code: tool/API integration, LM-driven software engineering",
            "LMs for everyone: multilinguality, dialects, low-resource & vernacular languages, value pluralism, fairness",
            "LMs and the world: factuality, retrieval-augmented LMs, knowledge models, commonsense, theory of mind, world models",
            "Multimodal LMs: perception, audio, time series, and other modalities",
            "LMs and embodiment: perception, action, and robotics",
            "LMs and interactions: conversation, interactive learning, multi-agent learning",
            "LMs on diverse domains & novel applications: medicine, education, science, and beyond"
          ],
          zh: [
            "訓練相關:微調、指令微調、強化學習、提示微調、脈絡內學習",
            "資料相關:預訓練、後訓練及其他訓練階段的各類資料",
            "評估相關:基準(靜態與動態)、模擬環境、可擴展監督、評估協定與指標、人類/機器評估、偏誤/公平/濫用評估",
            "安全相關:資安、隱私、錯假訊息、對抗攻擊與防禦",
            "語言模型科學:擴展律、根本限制、湧現能力、可解釋性、訓練動態、grokking、學習理論",
            "計算高效的語言模型:蒸餾、壓縮、量化、樣本與記憶體高效方法",
            "大型語言模型工程:不同硬體上的分散式訓練與推論、訓練動態、最佳化不穩定性",
            "學習演算法:SFT/RL、遺忘學習、元學習、模型混合、持續學習",
            "推論演算法:解碼、推理、搜尋、規劃",
            "心智、大腦、哲學、法律與語言模型:認知科學、神經科學、語言學、心理語言學、哲學與法律觀點",
            "結合工具與程式的語言模型:工具與 API 整合、由語言模型驅動的軟體工程",
            "屬於每個人的語言模型:多語言、方言、低資源與本土語言、多元文化、價值多元、公平",
            "語言模型與世界:事實性、檢索增強、知識模型、常識推理、心智理論、語用、世界模型",
            "多模態語言模型:多模態、感知、音訊、時間序列等模態的推理與生成",
            "語言模型與具身:感知、行動與機器人",
            "語言模型與互動:對話、互動式學習、多智能體學習",
            "跨領域與新穎應用:醫療、教育、科學等"
          ] } },
      { heading: { en: "Review Process", zh: "審查流程" },
        body: { en: "Submissions are double-blind: reviewers and ACs cannot see author names, and authors cannot see reviewer/AC names. Submissions must not contain acknowledgments or any link (e.g., GitHub) that reveals authors' identity. OpenReview manages submissions; reviews and responses are not initially public and are visible only to the assigned program committee. Comments are not solicited from the general public during reviewing. Accepted papers and their reviews are made public after decisions; rejected or withdrawn papers, discussions, and metadata are not published. Anyone submitting must have an up-to-date OpenReview profile by the abstract deadline — this is critical for handling conflicts of interest. The program includes oral presentations and posters of accepted papers.",
                zh: "投稿採雙盲:審稿人與領域主席看不到作者姓名,作者也看不到審稿人與領域主席姓名。投稿不得包含致謝或任何會洩漏作者身分的連結(如 GitHub)。投稿由 OpenReview 管理;審稿意見與作者回覆起初不公開,僅指派的議程委員可見;審稿期間不向大眾徵求意見。錄取論文及其審稿意見將於決議後公開;被拒或撤回的論文、討論與相關後設資料則不公開。所有投稿者須在摘要截止前備妥最新的 OpenReview 個人檔案 —— 這對正確處理利益衝突至關重要。議程包含錄取論文的口頭報告與海報。" } },
      { heading: { en: "Ethics Review", zh: "倫理審查" },
        body: { en: "Reviewers and ACs may flag submissions for ethics review. Flagged submissions are sent to an ethics review committee for comments, which are considered by the primary reviewers and AC and are visible to authors, who may respond. Ethics reviewers cannot reject papers, but in extreme cases papers may be rejected by the program chairs on ethical grounds, regardless of scientific quality.",
                zh: "審稿人與領域主席可將投稿標記送交倫理審查。被標記的投稿會送交倫理審查委員會提供意見;這些意見將由主審與領域主席納入考量,並對作者可見、作者可回覆。倫理審查人無權拒稿,但在極端情況下,議程主席可基於倫理理由拒絕論文,無論其科學品質如何。" } },
      { heading: { en: "Paper Length & Template", zh: "論文長度與範本" },
        body: { en: "Strict upper limit of 9 pages of main text, with unlimited additional pages for citations. Appendices (after the bibliography) are unlimited but reviewers are not required to read them. Optional ethics statement, reproducibility statement, and acknowledgment each do not count toward the page limit but should not exceed 1 page each. Authors must follow the template's formatting directives (fonts, title formatting, margins). Use the LaTeX style files for COLM 2026.",
                zh: "正文嚴格上限為 9 頁,參考文獻可不限頁數另計。參考文獻之後的附錄可不限頁數,但審稿人不一定會閱讀。選填的倫理聲明、可重現性聲明與致謝各自不計入頁數上限,但每項不應超過 1 頁。作者須遵守範本的格式規定(字體、標題格式、邊界)。請使用 COLM 2026 的 LaTeX 範本。" } },
      { heading: { en: "Reciprocal Reviewing", zh: "互惠審稿(Reciprocal Reviewing)" },
        body: { en: "Two requirements: a per-submission requirement (each submission contributes a reviewer; multiple submissions cannot share the same reciprocal reviewer unless all other authors do not qualify or serve in other roles), and a per-reviewer requirement (any author with 4 or more submissions is automatically added to the reviewer pool, unless already on the program committee or COLM organization). The submission form lets submitters designate an author to fulfill the per-submission requirement or indicate an exemption. See the FAQ for the rationale.",
                zh: "包含兩項要求:其一是「每篇投稿」要求(每篇投稿須提供一位審稿人;除非其他作者皆不符資格或擔任其他角色,否則多篇投稿不能共用同一位互惠審稿人);其二是「每位審稿人」要求(任何作者若有 4 篇以上投稿,將自動納入審稿人庫,除非已是議程委員或 COLM 組織成員)。投稿表單可讓投稿者指定一位作者履行「每篇投稿」要求,或標示豁免。理由請見常見問題。" } },
      { heading: { en: "Policy on the use of Large Language Models", zh: "大型語言模型使用政策" },
        body: { en: "COLM 2026 adopts the ICLR 2026 LLM Usage Policy, modified to not require disclosure for minor assistance in writing or code.\n\nMust be disclosed: using an LLM to originate research ideas; to write original content (including references); to generate data or plots; for evaluation. In reviewing, ANY use of an LLM must be disclosed, cosmetic or not.\n\nOkay not to disclose: automated grammar-checking; asking an LLM to fix typos in a paragraph; programming with a tool like CoPilot or Cursor.\n\nAuthors and reviewers are ultimately responsible for their contributions and must not make false or misleading claims, fabricate or falsify data, or misrepresent results. (Consistent with arXiv's LLM-use policy, used at COLM 2025.)",
                zh: "COLM 2026 採用 ICLR 2026 的大型語言模型使用政策,並修改為:寫作或程式實作上的輕微協助不需揭露。\n\n須揭露:用 LLM 發想研究點子;撰寫論文原創內容(含參考文獻);生成資料或圖表;用於評估。在審稿中,任何 LLM 的使用都須揭露,不論是否只是潤飾。\n\n可不揭露:自動文法檢查;請 LLM 修正段落中的錯字;使用 CoPilot 或 Cursor 等工具寫程式。\n\n作者與審稿人最終須為自己的貢獻負責,不得做出不實或誤導的主張、捏造或竄改資料、或曲解結果。(與 COLM 2025 採用的 arXiv LLM 使用政策一致。)" } },
      { heading: { en: "Caps & Double Submission", zh: "投稿上限與重複投稿" },
        body: { en: "No single person can be an author on more than 25 submissions. Full papers submitted to COLM (after the abstract deadline) cannot be under review for another archival venue simultaneously. If a paper was submitted to another venue (e.g., ICML), it must be withdrawn before the COLM full-paper deadline; to submit elsewhere after COLM, withdraw from COLM first. Concurrent submissions to non-archival workshops (without proceedings) do not count as double submissions.",
                zh: "任何一人最多只能是 25 篇投稿的作者。摘要截止後進入審查的 COLM 完整論文,不得同時在其他存檔型會議審查中。若論文曾投至其他會議(如 ICML),須在 COLM 完整論文截止前撤回;若想在 COLM 之後投至他處,須先自 COLM 撤回。同時投稿至非存檔型(無論文集)的工作坊不算重複投稿。" } }
    ],
    links: [
      { label: { en: "OpenReview submission group", zh: "OpenReview 投稿群組" }, url: "https://openreview.net/group?id=colmweb.org/COLM/2026/Conference" },
      { label: { en: "LaTeX style files (COLM 2026)", zh: "LaTeX 範本(COLM 2026)" }, url: "https://github.com/COLM-org/Template/releases/tag/2026" },
      { label: { en: "Reciprocal reviewing FAQ", zh: "互惠審稿常見問題" }, url: "https://colmweb.org/faq.html" }
    ]
  },
  {
    slug: "call-for-workshops",
    category: "calls",
    title:   { en: "Call for Workshops", zh: "工作坊徵案(Call for Workshops)" },
    meta:    { en: "Questions: colm-workshops@googlegroups.com", zh: "提問:colm-workshops@googlegroups.com" },
    summary: { en: "Proposals for workshops on Oct 9. ~18 slots, 7–9 hours each. Up to 2-page proposal.",
               zh: "徵求 10/9 舉辦的工作坊提案。約 18 個名額、每場 7–9 小時,提案至多 2 頁。" },
    tags: ["cfw", "workshops", "proposal"],
    overview: {
      en: "We invite proposals for workshops to be held in tandem with the 3rd Conference on Language Modeling (COLM). Workshops cover topics that intersect and expand upon the COLM call for papers. All deadlines are 23:59 AoE.",
      zh: "誠摯邀請提交與第三屆語言建模研討會(COLM)同期舉辦的工作坊提案。工作坊主題應與 COLM 論文徵稿交集並加以延伸。所有截止時間為 23:59 AoE。" },
    sections: [
      { heading: { en: "Scope — two primary purposes", zh: "範圍 —— 兩大主要目的" },
        list: { ordered: true,
          en: ["Building new communities and connections — preferring emerging areas over already well-represented topics; broad enough to draw a meaningful audience; not centered on a single lab.",
               "Opportunities for junior researchers and underrepresented groups — including unconventional ways to solicit and highlight their work."],
          zh: ["建立新社群與連結 —— 相較於主會議已充分涵蓋的主題,更傾向新興研究領域;範圍須夠廣以吸引足量參與者;不應以單一研究者或實驗室為核心。",
               "為新進研究者與弱勢群體提供機會 —— 包含以(可能非傳統的)方式徵集並彰顯他們的工作。"] } },
      { heading: { en: "Logistics", zh: "後勤安排" },
        body: { en: "All workshops take place on October 9, 2026 (the last day) and are 7–9 hours long. We anticipate hosting approximately 18 workshops.\n\nProvided: a limited number of complimentary registrations for organizers, attendees, or invited speakers.\n\nNot provided: funding for workshops, and streaming services.\n\nRole restrictions: organizers cannot be invited speakers at their own workshop (they may moderate); workshop co-chairs cannot be invited speakers at any workshop or organize any workshop.",
                zh: "所有工作坊於 2026 年 10 月 9 日(最後一天)舉行,每場 7–9 小時,預計舉辦約 18 場。\n\n提供:給主辦者、與會者或受邀講者的少量免費註冊名額。\n\n不提供:工作坊經費,以及直播串流服務。\n\n角色限制:主辦者不得擔任自家工作坊的受邀講者(可主持討論);工作坊共同主席不得擔任任何工作坊的受邀講者,也不得擔任任何工作坊的主辦者。" } },
      { heading: { en: "Proposal format (≤ 2 pages + bios/refs)", zh: "提案格式(≤ 2 頁,另加簡歷與參考文獻)" },
        body: { en: "Up to two pages of proposal plus unlimited pages for organizer bios and references. No specific template, but must be legible (e.g., 11pt+, 1-inch margins, single spacing). Suggested contents: title; description (scope, importance/timeliness, community-building, support for junior/underrepresented researchers, expected attendance); if soliciting submissions, the submission format, reviewing procedure (incl. conflict handling), management system (OpenReview recommended) and timeline (workshop papers are non-archival); schedule outline incl. tentatively-agreed speakers; past related workshops and a post-mortem if applicable; optional technical requirements; organizer bios (~1 paragraph each, affiliations and emails); references.",
                zh: "提案至多 2 頁,主辦者簡歷與參考文獻則不限頁數。無指定範本,但須清晰易讀(如 11 點字以上、1 吋邊界、單行間距)。建議內容:標題;描述(範圍、重要性與時效性、如何建立社群、如何支持新進與弱勢研究者、預期參與人數);若徵稿,須說明投稿格式、審查流程(含利益衝突處理)、稿件管理系統(建議 OpenReview)與時程(工作坊論文為非存檔);議程大綱含已暫定的講者;相關過往工作坊與(如適用)檢討;選填的技術需求;每位主辦者約一段的簡歷(含單位與電子郵件);參考文獻。" } },
      { heading: { en: "Reviewing", zh: "審查方式" },
        body: { en: "Workshop co-chairs review all submissions (soliciting non-conflicted expert reviewers where a conflict arises). Beyond the Scope goals, priority is given to a diverse set of topics; the team's experience, invited speakers' relevance/quality, and diversity (organizers, speakers, attendees) are considered. Highly overlapping high-quality proposals may be asked to merge.",
                zh: "工作坊共同主席審查所有提案(若有利益衝突,則延請無利益衝突的專家審查)。除了「範圍」所列目標,亦優先考量主題的多樣性;並會考量團隊經驗、受邀講者的相關性與品質,以及在主辦團隊、講者與預期與會者各層面的多元性。若多份高品質提案主題高度重疊,可能會被要求合併。" } }
    ],
    links: [
      { label: { en: "Submit a proposal (Google Form)", zh: "提交提案(Google 表單)" }, url: "https://forms.gle/8w9JmbrWZzxVWt166" }
    ]
  }
];

/* ====================================================================== */
/*  GUIDES & POLICIES                                                      */
/* ====================================================================== */
var GUIDES = [
  {
    slug: "submission-instructions",
    category: "guides",
    title:   { en: "Submission Instructions", zh: "投稿須知" },
    summary: { en: "Key reminders: abstract by Mar 26, double-submission rules, the template, LLM disclosure.",
               zh: "重點提醒:摘要於 3/26 前繳交、重複投稿規則、使用範本、LLM 揭露。" },
    tags: ["submission", "template", "deadline"],
    overview: {
      en: "Please see the Call for Papers for full instructions. A few key reminders are highlighted here.",
      zh: "完整說明請見論文徵稿(CFP),此處僅重點提醒幾項。" },
    sections: [
      { heading: { en: "Submit an abstract by March 26 AoE (11:59pm UTC-12)", zh: "於 3/26 AoE(UTC-12 晚上 11:59)前繳交摘要" },
        body: { en: "Submit an abstract by the abstract deadline; uploading a PDF at this time is optional. All authors must have complete OpenReview profiles with up-to-date affiliation information to enable conflict checks. After this deadline you may make minor changes to the title/abstract, but not major ones — major changes are grounds for desk rejection, because AC and reviewer assignment begins once abstracts are in.",
                zh: "請在摘要截止前繳交摘要;此時上傳 PDF 為選填。所有作者須備妥完整且單位資訊最新的 OpenReview 個人檔案,以便進行利益衝突檢查。截止後可對標題/摘要做小幅修改,但不可大幅更動 —— 大幅更動將構成直接退稿的理由,因為摘要繳交後即開始指派領域主席與審稿人。" } },
      { heading: { en: "Follow the double-submission policy", zh: "遵守重複投稿政策" },
        body: { en: "By the full-paper deadline (March 31) your paper must not be under review for other archival venues. It must not be under review for ICML (withdraw by March 31 to submit to COLM); it must not be committed to ACL (commitment counts as under review); and it cannot be submitted elsewhere while under review for COLM.",
                zh: "在完整論文截止日(3/31)前,您的論文不得在其他存檔型會議審查中。不得在 ICML 審查中(須於 3/31 前撤回才能投 COLM);不得已 commit 至 ACL(commit 視為審查中);在 COLM 審查期間也不得投至他處。" } },
      { heading: { en: "Follow the template", zh: "使用指定範本" },
        body: { en: "COLM uses a distinct template from other venues. Be careful if resubmitting: ensure conformity to the template and that imported packages don't alter its parameters.",
                zh: "COLM 使用與其他會議不同的範本。若是改投,請特別小心:確保符合範本,且匯入的套件未更動範本參數。" } },
      { heading: { en: "Disclose use of LLMs (per the CFP policy)", zh: "依 CFP 政策揭露 LLM 使用" },
        body: { en: "Must be disclosed: using an LLM to originate research ideas, to write original content (including references), to generate data or plots, or for evaluation. Okay not to disclose: automated grammar-checking, fixing typos in a paragraph, programming with CoPilot/Cursor. Use of LLMs in a way that undermines a paper's scientific credibility leads to rejection — hallucinated content casts doubt on the entire paper. Reviewers must disclose any LLM use and fully stand behind their reviews.",
                zh: "須揭露:用 LLM 發想研究點子、撰寫原創內容(含參考文獻)、生成資料或圖表、或用於評估。可不揭露:自動文法檢查、修正段落錯字、用 CoPilot/Cursor 寫程式。若 LLM 的使用方式損及論文的科學可信度,將導致退稿 —— 虛構內容會使整篇論文的主張受到質疑。審稿人須揭露任何 LLM 使用,並完全為其審稿內容負責。" } }
    ],
    links: [ { label: { en: "LaTeX style files (COLM 2026)", zh: "LaTeX 範本(COLM 2026)" }, url: "https://github.com/COLM-org/Template/releases/tag/2026" } ]
  },
  {
    slug: "author-guide",
    category: "guides",
    title:   { en: "Author Guide", zh: "作者指南" },
    summary: { en: "Genuine abstracts, code/data supplementary, generative-AI guidance, ethics statement, reproducibility.",
               zh: "真實摘要、程式/資料補充材料、生成式 AI 指引、倫理聲明、可重現性。" },
    tags: ["authors", "ethics", "reproducibility", "supplementary"],
    overview: {
      en: "Authors submit paper abstracts by the abstract deadline and full papers by the full-paper deadline (see the dates page), via OpenReview. Deadlines are final — no accommodations for missing them. Submit genuine, informative abstracts that reflect the full submission; placeholder or duplicate abstracts will be removed, since abstracts assign the AC and reviewers before the final deadline. Substantial changes to title/abstract after the deadline undermine assignment and cannot be accommodated.",
      zh: "作者須於摘要截止前繳交摘要、於完整論文截止前繳交完整論文(見日期頁),皆透過 OpenReview。截止日為最終期限 —— 錯過不予通融。請繳交真實、具資訊量且能反映完整投稿的摘要;佔位或重複的摘要將被移除,因為摘要用於在最終截止前指派領域主席與審稿人。截止後對標題/摘要的大幅更動會破壞指派,且無法通融。" },
    sections: [
      { heading: { en: "Source code & data submission", zh: "程式碼與資料繳交" },
        body: { en: "Code and data may be uploaded as supplementary material to aid replicability. Reviewers are encouraged but not required to review it. All supplementary code/data must be self-contained and zipped into a single file (max 50 MB) or downloadable via an anonymous URL. Supplementary material is visible to reviewers during and after review — ensure everything is anonymized.",
                zh: "可將程式碼與資料作為補充材料上傳,以利重現。鼓勵但不強制審稿人審閱。所有補充程式/資料須自成一體並壓縮為單一檔案(上限 50 MB),或以匿名網址提供下載。補充材料於審查期間與之後對審稿人可見 —— 請確保全數匿名化。" } },
      { heading: { en: "Generative AI tools", zh: "生成式 AI 工具" },
        body: { en: "COLM follows arXiv's guidelines on the use of generative AI tools, including large language models.",
                zh: "COLM 在生成式 AI 工具(含大型語言模型)的使用上,遵循 arXiv 的指引。" } },
      { heading: { en: "Code of Ethics & ethics statement", zh: "倫理準則與倫理聲明" },
        body: { en: "All authors must read and adhere to the COLM Code of Ethics and explicitly acknowledge it during submission. Reviewers may raise potential violations; authors may discuss potential issues as a separate section (not counted against the page limit). Potential violations encountered during review or public discussion should be raised privately to the paper's Area Chair via OpenReview. An optional one-page Ethics Statement (a stub is in the style file) does not count toward the page limit.",
                zh: "所有作者須閱讀並遵守 COLM 倫理準則,並於投稿時明確確認。審稿人可提出潛在違規;作者可於獨立章節討論潛在問題(不計入頁數上限)。審查或公開討論中遇到的潛在違規,應透過 OpenReview 私訊該論文的領域主席提出。選填的一頁倫理聲明(範本內已含區塊)不計入頁數上限。" } },
      { heading: { en: "Reproducibility", zh: "可重現性" },
        body: { en: "COLM values reproducible work. Include in the appendix/supplementary anything that helps others reproduce it: exact software versions, hyperparameters, assumptions and complete proofs, full descriptions of data-processing steps, etc.",
                zh: "COLM 重視可重現的研究。請在附錄/補充材料中提供有助他人重現的內容:確切的軟體版本、超參數、假設與完整證明、資料處理步驟的完整描述等。" } }
    ]
  },
  {
    slug: "code-of-conduct",
    category: "guides",
    title:   { en: "Code of Conduct", zh: "行為準則" },
    meta:    { en: "Updated October 13, 2023 · adapted from the ICLR Code of Conduct", zh: "2023/10/13 更新 · 改編自 ICLR 行為準則" },
    summary: { en: "A harassment-free experience for all participants, on-site and online. Report concerns to the COLM PCs.",
               zh: "為所有與會者(現場與線上)提供免於騷擾的環境。如有疑慮請通報 COLM 議程主席。" },
    tags: ["conduct", "harassment", "inclusion", "reporting"],
    overview: {
      en: "COLM utilizes the ICLR Code of Conduct, restated here.",
      zh: "COLM 採用 ICLR 行為準則,於此重申。" },
    sections: [
      { heading: { en: "Why", zh: "為何" },
        body: { en: "The open exchange of ideas, the freedom of thought and expression, and respectful scientific debate are central to the goals of this conference on language modeling; this requires a community and an environment that recognizes and respects the inherent worth of every person.",
                zh: "思想的自由交流、思考與表達的自由,以及尊重的科學辯論,是本語言建模研討會目標的核心;這需要一個能認知並尊重每個人固有價值的社群與環境。" } },
      { heading: { en: "Who", zh: "對象" },
        body: { en: "All participants — attendees, organizers, reviewers, speakers, sponsors, and volunteers at our conference, workshops, and conference-sponsored social events — are required to agree with this Code of Conduct both during the event and on official communication channels, including social media. Organizers will enforce this code, and we expect cooperation from all participants to help ensure a safe and productive environment for everybody.",
                zh: "所有參與者 —— 與會者、主辦者、審稿人、講者、贊助者,以及會議、工作坊與會議贊助社交活動的志工 —— 在活動期間及官方溝通管道(含社群媒體)上,皆須同意本行為準則。主辦者將執行本準則,並期望所有參與者配合,以共同確保每個人都安全且有成效的環境。" } },
      { heading: { en: "Scope", zh: "範圍" },
        body: { en: "The conference commits to an experience free from harassment, bullying, discrimination, and retaliation. This includes offensive comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), politics, technology choices, or any other personal characteristics. Bullying, intimidation, personal attacks, harassment, sustained disruption of talks, and behavior that interferes with another participant's full participation will not be tolerated — including sexual harassment, stalking, following, harassing photography/recording, inappropriate physical contact, unwelcome sexual attention, public vulgar exchanges, and diminutive characterizations.\n\nThis extends to any format, including virtual forms and any online tools related to the conference (OpenReview comments, chat/Q&A tools, live streams, etc.). Trolling, inappropriate imagery, offensive language, unwarranted DMs, and extending such behavior to related tools are not allowed. Doxxing or revealing personal information to target any participant will not be tolerated.\n\nSponsors are equally subject to this code and must not use sexual, racial, or otherwise offensive materials, or create a sexualized environment.",
                zh: "本會議承諾提供免於騷擾、霸凌、歧視與報復的體驗。這包含涉及性別、性別認同與表達、年齡、性傾向、身心障礙、外貌、體型、種族、族裔、宗教(或無宗教)、政治、技術選擇或任何其他個人特徵的冒犯性言論。霸凌、恐嚇、人身攻擊、騷擾、持續干擾演講,以及妨礙他人充分參與的行為,皆不被容忍 —— 包含性騷擾、跟蹤、尾隨、騷擾性的拍照/錄影、不當肢體接觸、不受歡迎的性關注、公開的粗俗言語往來,以及貶抑性的稱呼。\n\n上述適用於任何形式,包含虛擬形式與任何與會議相關的線上工具(OpenReview 留言、聊天/問答工具、直播等)。不允許酸民行為、不當圖像、冒犯性言語、無端私訊,以及將此類行為延伸至相關工具。對任何參與者進行人肉搜索或揭露個人資訊以針對之,皆不被容忍。\n\n贊助者同樣受本準則約束,不得使用具性、種族或其他冒犯性質的素材,或營造性化的環境。" } },
      { heading: { en: "Outcomes", zh: "處置" },
        body: { en: "Participants asked to stop any such behavior are expected to comply immediately. Organizers may take any action they deem appropriate, including a formal or informal warning, expulsion (physical or by terminating access codes) with no refund, barring from future conferences, reporting to the offender's institution or funding agencies, or reporting to local law enforcement. \"Just joking\" is not accepted; behavior can be harassing without intent to offend. If action is taken, an appeals process will be available.",
                zh: "被要求停止此類行為的參與者應立即配合。主辦者可採取其認為適當的任何措施,包含正式或非正式警告、驅逐(實體驅逐或終止存取碼)且不退費、禁止參加未來會議、向違規者所屬機構或資助單位通報,或向當地執法機關通報。「只是開玩笑」不被接受;即使無冒犯意圖,行為仍可能構成騷擾。若採取措施,將提供申訴程序。" } },
      { heading: { en: "Reporting", zh: "通報" },
        body: { en: "If you have concerns related to your inclusion at the conference, observe someone else's difficulties, or have any other inclusion-related concerns, please email the COLM PCs. For online events and tools, there are options to directly report specific chat/text comments. Complaints are handled with discretion. Reports made during the conference are responded to within 24 hours; those at other times in less than two weeks. We are eager to help participants contact help services, escort them to a safe location, or otherwise assist those experiencing harassment.",
                zh: "若您對自身於會議中的參與有疑慮、目睹他人遭遇困難,或有任何其他與融入相關的顧慮,請寄信給 COLM 議程主席(PCs)。對於線上活動與工具,亦可直接檢舉特定的聊天/文字留言。所有投訴將審慎處理。會議期間提出的通報會在 24 小時內回應;其他時間提出者則在兩週內回應。我們樂於協助參與者聯繫求助服務、護送至安全地點,或以其他方式協助遭受騷擾者。" } }
    ],
    note: { en: "English is authoritative. Report concerns to the COLM PCs (colm-pcs@googlegroups.com).",
            zh: "以英文版為準。如有疑慮請通報 COLM 議程主席(colm-pcs@googlegroups.com)。" }
  },
  {
    slug: "code-of-ethics",
    category: "guides",
    title:   { en: "Code of Ethics", zh: "倫理準則" },
    meta:    { en: "Last reviewed March 2024 · utilizes the ICLR Code of Ethics", zh: "2024 年 3 月最後檢視 · 採用 ICLR 倫理準則" },
    summary: { en: "General ethical principles for all contributors: contribute to well-being, avoid harm, be honest, fair, and protect privacy.",
               zh: "適用所有貢獻者的一般倫理原則:促進福祉、避免傷害、誠實、公平並保護隱私。" },
    tags: ["ethics", "responsible research", "principles"],
    overview: {
      en: "COLM is committed to promoting good conduct and a reflexive, responsible approach to research and its applications, especially regarding language modeling, machine learning, and AI. This Code provides general ethical principles for individual researchers and organizations that carry out, fund, host, or are otherwise involved in research. It is not prescriptive but a set of principles to guide ethical, responsible research, and applies to all contributors — reviewers, authors, speakers, organizers, sponsors, and attendees.",
      zh: "COLM 致力於促進良好行為,以及對研究及其應用採取自省且負責任的態度,尤其是與語言建模、機器學習與人工智慧相關者。本準則為從事、資助、主辦或以其他方式涉入研究的個別研究者與組織,提供一般倫理原則。它並非硬性規定,而是引導合乎倫理、負責任研究的一組原則,適用於所有貢獻者 —— 審稿人、作者、講者、主辦者、贊助者與與會者。" },
    sections: [
      { heading: { en: "The eight general ethical principles", zh: "八項一般倫理原則" },
        list: { ordered: false,
          en: ["Contribute to society and to human well-being", "Uphold high standards of scientific excellence", "Avoid harm", "Be honest, trustworthy and transparent", "Be fair and take action to avoid discrimination", "Respect the work required to produce new ideas and artefacts", "Respect privacy", "Honor confidentiality"],
          zh: ["促進社會與人類福祉", "堅守高標準的科學卓越", "避免傷害", "誠實、值得信賴且透明", "公平並採取行動避免歧視", "尊重產生新想法與成果所需的努力", "尊重隱私", "恪守保密"] } },
      { heading: { en: "Contribute to society & human well-being", zh: "促進社會與人類福祉" },
        body: { en: "Acknowledge that all people globally are stakeholders in computing and use our skills for the benefit of society and the natural environment. Research should minimize negative consequences (health, safety, security, privacy), considering many socio-economic factors and geographies. When groups' interests conflict, the needs of the less advantaged should receive increased priority. Consider whether results respect diversity, are used responsibly, meet social needs, and are broadly accessible.",
                zh: "認知全球所有人都是計算的利害關係人,並運用我們的技能造福社會與自然環境。研究應將負面後果(健康、安全、資安、隱私)降到最低,並考量多元的社經因素與地域。當不同群體利益衝突時,應更優先顧及弱勢者的需求。請思考研究成果是否尊重多元、是否被負責任地使用、是否滿足社會需求,以及是否能被廣泛取用。" } },
      { heading: { en: "Uphold high standards of scientific excellence", zh: "堅守高標準的科學卓越" },
        body: { en: "Strive for excellence and disseminate work of the highest quality, with open enquiry, rigor, integrity, and collaboration. Report findings accurately and honestly; do not make deliberately false or misleading claims, fabricate or falsify data, or misrepresent results. Present methods and results transparently and reproducibly. Where human subjects are involved (e.g., annotators), assess and report the need for ethical approvals. Acknowledge all contributions and comply with IP, publication, and authorship agreements.",
                zh: "追求卓越並傳播最高品質的工作,秉持開放探究、嚴謹、誠信與協作。準確且誠實地呈報結果;不刻意做出不實或誤導的主張、不捏造或竄改資料、不曲解結果。以透明且可重現的方式呈現方法與結果。涉及人類受試者時(如標註者),應評估並呈報是否需倫理審查核准。承認所有貢獻,並遵守智慧財產、出版與作者身分的相關約定。" } },
      { heading: { en: "Avoid harm", zh: "避免傷害" },
        body: { en: "\"Harm\" means negative consequences; even well-intended actions may cause it. When harm is unintended, those responsible must undo or mitigate it as far as possible, beginning with engaging domain experts and the communities the research serves and carefully considering impacts on all affected. When harm is intentional to a system, ensure it is ethically justified. Consider harm to the natural environment in both producing and applying research. Carefully analyze consequences of data aggregation and emergent system properties, and report signs of system risks that might cause harm.",
                zh: "「傷害」指負面後果;即使出於善意的行動也可能造成傷害。當傷害非出於本意時,責任者須盡可能消除或減輕,並先從與領域專家及研究所服務的社群互動著手,審慎考量對所有受影響者的衝擊。當傷害是系統的有意部分時,須確保其在倫理上站得住腳。在研究的產生與應用兩端,皆須考量對自然環境的傷害。審慎分析資料聚合的後果與系統的湧現特性,並呈報任何可能造成傷害的系統風險徵兆。" } },
      { heading: { en: "Be honest, trustworthy & transparent", zh: "誠實、值得信賴且透明" },
        body: { en: "Be honest about qualifications and limitations in competence. Fully disclose pertinent system capabilities, limitations, and potential problems to appropriate parties, including any party that may deploy the system. Be open about circumstances that might cause real or perceived conflicts of interest or undermine independent judgment, including funding sources. Do not misrepresent competing or related work, or an organization's policies or procedures.",
                zh: "誠實面對自身資格與能力上的限制。向適當對象(包含任何可能部署該系統者)充分揭露系統的相關能力、限制與潛在問題。對於可能造成真實或被認為的利益衝突、或損及獨立判斷的情況(包含資金來源),應坦誠以對。不得曲解競爭或相關的工作,或一個組織的政策與程序。" } },
      { heading: { en: "Be fair & avoid discrimination", zh: "公平並避免歧視" },
        body: { en: "Guided by equality, tolerance, respect, and justice (the Code of Conduct adds detail). Fairness requires avenues for redress of grievances even after careful processes. Foster fair participation of all people, including underrepresented groups, in research and at the conference. Technologies and practices should be as inclusive and accessible as possible; take action to avoid systems that disenfranchise or oppress people.",
                zh: "以平等、包容、尊重與正義為指引(行為準則有更詳細說明)。即使經過審慎流程,公平仍要求提供申訴與救濟的管道。在研究與會議中促進所有人的公平參與,包含弱勢群體。技術與做法應盡可能具包容性與可及性;並採取行動避免造成剝奪權利或壓迫他人的系統。" } },
      { heading: { en: "Respect the work behind new ideas & artifacts", zh: "尊重新想法與成果背後的努力" },
        body: { en: "Show respect for colleagues, research participants, society, ecosystems, cultural heritage, and the environment. Those who expend effort creating ideas, inventions, and artifacts should expect value and credit. Credit creators and respect copyrights, patents, trade secrets, license agreements, and other protections of authors' work.",
                zh: "尊重同儕、研究參與者、社會、生態系、文化遺產與環境。投入心力創造想法、發明與成果者,理應獲得價值與肯定。應給予創作者應有的署名與肯定,並尊重著作權、專利、營業秘密、授權協議及其他保護作者工作的方式。" } },
      { heading: { en: "Respect privacy", zh: "尊重隱私" },
        body: { en: "Be familiar with definitions and forms of privacy and the rights/responsibilities tied to collecting and using personal information. Use data consistently with its licenses and only for legitimate ends, without violating individuals' or groups' rights. Ethical considerations supersede technical legality (avoid ethics shirking): prevent re-identification of anonymized data, avoid unauthorized or non-consensual collection, ensure data accuracy and provenance, and protect against unauthorized access or accidental disclosure. Collect data under appropriate ethical approvals and acknowledge them.",
                zh: "熟悉隱私的各種定義與形式,以及蒐集與使用個人資料所伴隨的權利與責任。依資料授權使用資料,且僅用於正當目的,不侵犯個人或群體的權利。倫理考量優先於技術上的合法性(避免「規避倫理」):防止匿名資料被重新識別、避免未經授權或未經同意的蒐集、確保資料的準確性與來源可追溯,並防範未經授權的存取或意外洩露。在適當的倫理核准下蒐集資料,並予以註明。" } },
      { heading: { en: "Honor confidentiality", zh: "恪守保密" },
        body: { en: "Researchers and reviewers are often entrusted with confidential information (trade secrets, client data, non-public strategies, financial information, research data, pre-publication articles, patent applications). Protect confidentiality except where it is evidence of a violation of law, organizational regulations, or this Code — in which case disclose only to appropriate authorities, considering whether disclosure is consistent with the Code.",
                zh: "研究者與審稿人常被託付機密資訊(營業秘密、客戶資料、未公開策略、財務資訊、研究資料、尚未發表的文章、專利申請)。除非該資訊本身即為違法、違反組織規定或違反本準則的證據,否則應予保密 —— 即便如此,也僅應向適當的主管機關揭露,並審慎考量該揭露是否符合本準則。" } },
      { heading: { en: "Concerns & remediation", zh: "疑慮與補救" },
        body: { en: "Read alongside the Code of Conduct. Concerns may be raised about any conduct or contribution contravening this Code. Where ethical concerns arise during review or scientific exchange, this Code is an additional basis for remediation. COLM reserves the right to reject and refuse the presentation of any work found to violate these guidelines, at any point. Processes for raising concerns are described in the Call for Papers / Author Guide and the Code of Conduct.",
                zh: "應與行為準則一併閱讀。對於任何違反本準則的行為或貢獻,皆可提出疑慮。當倫理疑慮於審查或科學交流中出現時,本準則可作為補救的額外依據。COLM 保留隨時拒絕、並拒絕展示任何被認定違反本指引之工作的權利。提出疑慮的程序載於論文徵稿/作者指南與行為準則中。" } }
    ],
    note: { en: "Abbreviated, faithful rendering of a long policy. English is authoritative; see colmweb.org/CoE.html for the full text and reference links.",
            zh: "本為長篇政策的忠實精要呈現。以英文版為準;完整內容與參考連結見 colmweb.org/CoE.html。" }
  },
  {
    slug: "conflict-of-interest-policy",
    category: "guides",
    title:   { en: "Conflict of Interest Policy", zh: "利益衝突政策" },
    meta:    { en: "Updated for COLM 2026 · contact colm-pcs@googlegroups.com", zh: "為 COLM 2026 更新 · 聯絡 colm-pcs@googlegroups.com" },
    summary: { en: "Declare domain conflicts (Education & Career History) and personal conflicts (Advisors & Other Relations) on OpenReview.",
               zh: "在 OpenReview 申報領域衝突(學經歷)與個人衝突(指導與其他關係)。" },
    tags: ["coi", "openreview", "conflicts"],
    overview: {
      en: "This defines what constitutes a conflict of interest for the COLM review process (updated for COLM 2026). Authors, co-authors, reviewers, and area chairs must create or update their OpenReview profile and declare two types of conflicts — domain conflicts and personal conflicts — by filling out the appropriate profile sections.",
      zh: "本文件界定 COLM 審查流程中何謂利益衝突(已為 COLM 2026 更新)。作者、共同作者、審稿人與領域主席,須建立或更新其 OpenReview 個人檔案,並透過填寫對應欄位申報兩類衝突 —— 領域衝突與個人衝突。" },
    sections: [
      { heading: { en: "Domain conflicts (Education & Career History)", zh: "領域衝突(學經歷)" },
        body: { en: "Ensure this section accurately represents your domain conflicts for at least the last three years. For current/recent collaborations and internships, generally use personal conflicts instead. Use domain conflicts judiciously, for genuine institutional conflicts. Your Education & Career History is public on OpenReview. When you enter a domain conflict, none of your submissions are visible to reviewers/ACs/SACs who entered the same domain conflict, using only the last three years of history.",
                zh: "請確保此欄位準確反映您至少近三年的領域衝突。對於目前/近期的合作與實習,一般應改用個人衝突。請審慎使用領域衝突,僅用於與機構間真實存在的利益衝突。您的學經歷在 OpenReview 上為公開。當您填入某項領域衝突,您的投稿將不會對同樣填入該領域衝突的審稿人/領域主席/資深領域主席可見;此僅採計近三年的學經歷。" } },
      { heading: { en: "Personal conflicts (Advisors & Other Relations)", zh: "個人衝突(指導與其他關係)" },
        body: { en: "The following are personal conflicts: family or close personal relationship; PhD advisee/advisor relationship; current, frequent, or recent collaboration (within the past three years). For a conflict not covered above that would still compromise fairness, you may mark it hidden by setting visibility to \"COLM XXXX Program Chairs\". If program chairs doubt a conflict's validity, they may confidentially inquire into its nature. Profiles persist across conferences, but other venues may differ. Any attempt to impact reviewer assignment via false declarations may result in rejection without review. Questions: contact the program chairs at colm-pcs@googlegroups.com.",
                zh: "以下屬個人衝突:家人或親密的私人關係;博士指導/受指導關係;目前、頻繁或近期(過去三年內)的合作。對於上述未涵蓋、但仍會損及公平性的衝突,您可將其可見性設為「COLM XXXX 議程主席」以隱藏之。若議程主席對某項衝突的真實性有疑,可機密地查詢其性質。個人檔案在各會議間延續,但其他會議的政策可能不同。任何以不實申報影響審稿人指派的企圖,可能導致未經審查即遭退稿。如有疑問,請聯絡議程主席 colm-pcs@googlegroups.com。" } }
    ],
    links: [ { label: { en: "Email program chairs", zh: "寄信給議程主席" }, url: "mailto:colm-pcs@googlegroups.com" } ]
  },
  {
    slug: "review-guidelines",
    category: "guides",
    title:   { en: "Review Guidelines", zh: "審稿指南" },
    summary: { en: "Weigh papers across multiple dimensions, not mechanical measures. Weakness in one area is not an automatic reject.",
               zh: "從多個面向衡量論文,而非機械式評分。某面向較弱不應自動構成退稿。" },
    tags: ["reviewing", "program committee", "quality"],
    overview: {
      en: "Thank you for being part of the COLM program committee! We aim for a technically deep, exciting, forward-looking, insightful, and impactful program. Thoughtfully consider each paper and avoid simply applying mechanistic measures of quality. Papers can excel along several dimensions; few excel along all. Our job is to weigh contributions across dimensions to identify the best work.",
      zh: "感謝您加入 COLM 議程委員會!我們追求一個技術紮實、令人興奮、具前瞻性、富洞見且具影響力的議程。請用心審視每篇論文,避免僅套用機械式的品質衡量。論文可在多個面向出色;鮮有論文在所有面向都出色。我們的任務是權衡各面向的貢獻,挑選出最佳的工作。" },
    sections: [
      { heading: { en: "Empiricism, Data, and Evaluation", zh: "實證、資料與評估" },
        body: { en: "A strong empirical foundation increases the likelihood the approach generalizes beyond the paper. Strong work uses data that is as natural as possible, strong experimental design, and evaluation metrics shown to measure what they claim.",
                zh: "扎實的實證基礎能提高該方法在論文之外仍可泛化的可能性。出色的工作會使用盡可能自然的資料、嚴謹的實驗設計,以及已被證明能衡量其所宣稱事物的評估指標。" } },
      { heading: { en: "Technological Impact", zh: "技術影響力" },
        body: { en: "Our field benefits enormously from work that demonstrates impact through technology, software, data, or artifacts. Excellent work here provides high-quality, thoughtfully designed, well-packaged resources that enable future impactful work.",
                zh: "我們的領域極大受惠於透過技術、軟體、資料或成果展現影響力的工作。在此面向出色的工作,會提供高品質、設計周到、封裝完善的資源,使未來具影響力的工作得以開展。" } },
      { heading: { en: "Ambition, Vision, Forward-outlook", zh: "企圖、願景與前瞻" },
        body: { en: "Progress is driven both by gradual development and big ambitious leaps. Work beyond current research boundaries carries risk but is critical. Standout work looks beyond currently studied problems, or extends them in significant ways.",
                zh: "進步同時來自漸進的技術發展與大膽的躍進。超越當前研究邊界的工作雖有風險,卻至關重要。傑出的工作會放眼當前所研究問題之外,或以重要的方式加以延伸。" } },
      { heading: { en: "Understanding Depth, Principled Approach", zh: "理解深度與原理導向" },
        body: { en: "Our goal is not only to build methods and artifacts but to understand both the methods and natural language. Excellent work deepens understanding — e.g., via a principled approach to modeling and learning, or careful and deep analysis.",
                zh: "我們的目標不只是打造方法與成果,也要理解所用的方法以及我們研究的自然語言。出色的工作能深化理解 —— 例如以原理導向的方式進行建模與學習,或進行細緻且深入的分析。" } },
      { heading: { en: "Clarity, Honesty, and Trust", zh: "清晰、誠實與信任" },
        body: { en: "The paper is a main artifact of the work; the highest standards of scientific reporting are key to quality. Our field is read broadly and shapes perceptions of nascent technologies. Standout work is written clearly, gives a measured and balanced presentation, and releases research materials as much as possible.",
                zh: "論文是這份工作的主要產物;最高標準的科學呈報是品質的關鍵。我們的領域被廣泛閱讀,並形塑外界對新興技術的認知。傑出的工作會書寫清晰、呈現得有分寸且平衡,並盡可能釋出研究材料。" } },
      { heading: { en: "Weighing the dimensions", zh: "如何權衡各面向" },
        body: { en: "Excellence in any aspect is already a significant contribution, and weakness in some aspects cannot be an immediate reason to reject — e.g., robust empirical studies are hard for extremely ambitious scenarios, and accepting such honest, clearly-limited work is a worthwhile risk. (Next-word prediction was long viewed as low-impact, yet the principled approach paid off.) Inversely, even great strength in one dimension is not a panacea: a forward-looking vision that is very weak elsewhere may add little beyond a compelling story.\n\nFinally, take into account that most researchers do not have access to large-scale compute. Limiting research to well-resourced labs stifles innovation; some small-scale results won't hold at scale, but some will — and they won't make it unless the program committee bets on them.",
                zh: "在任一面向出色就已是重要貢獻,而某些面向較弱不應立即構成退稿理由 —— 例如,對極具企圖心的情境而言,嚴謹的實證研究本就困難,接受這類誠實且明確說明限制的工作,是值得承擔的風險。(下一個字預測曾長期被視為影響力不大,但其原理導向最終證明了價值。)反之,即使在某面向極為突出,也非萬靈丹:一個前瞻願景若在其他面向都很薄弱,除了動人的故事外,可能貢獻有限。\n\n最後,請考量大多數研究者並無大規模算力。將研究侷限於資源充足的實驗室會扼殺創新;有些小規模結果在放大後不成立,但有些會成立 —— 而除非議程委員會願意為它們下注,否則它們不會出線。" } }
    ]
  },
  {
    slug: "ac-guidelines",
    category: "guides",
    title:   { en: "Area Chair Guidelines", zh: "領域主席指南" },
    meta:    { en: "Adapted from the NeurIPS 2024 AC Guidelines", zh: "改編自 NeurIPS 2024 領域主席指南" },
    summary: { en: "ACs ensure quality reviews and good discussion, make initial decisions, and write metareviews.",
               zh: "領域主席負責確保高品質審稿與良好討論、做出初步決定,並撰寫綜合評審。" },
    tags: ["area chair", "metareview", "reviewing"],
    overview: {
      en: "Thank you for agreeing to serve on the program committee of COLM 2026! As an area chair (AC), your job is to ensure that all assigned submissions have high-quality reviews and good discussions; you become familiar with their technical contents and make the initial acceptance decisions. For OpenReview issues, contact info@openreview.net; otherwise contact the program chairs at colm-pcs@googlegroups.com. Consult the dates page for the timeline.",
      zh: "感謝您同意擔任 COLM 2026 議程委員!身為領域主席(AC),您的職責是確保所有指派的投稿都有高品質的審稿與良好的討論;您須熟悉其技術內容並做出初步錄取決定。OpenReview 相關問題請聯絡 info@openreview.net;其他問題請聯絡議程主席 colm-pcs@googlegroups.com。時程請參閱日期頁。" },
    sections: [
      { heading: { en: "Main tasks", zh: "主要任務" },
        list: { ordered: true,
          en: [
            "Preparation: keep your OpenReview email accurate (most emails come from noreply@openreview.net; check spam), update your profile, review the Code of Conduct and COI policy, and familiarize yourself with the reviewer guidelines.",
            "Paper assignments: there is no AC bidding — papers are assigned automatically by the matching algorithm. We handle a very large number of submissions, so flexibility is appreciated.",
            "Modify reviewer assignments: ensure every submission has suitable, trustworthy reviewers with diverse opinions; invest time before reviewing starts; you can keep inviting reviewers afterward (they must agree to each paper).",
            "Ensure quality reviews: send courteous reminders, replace reviewers who can't deliver, ask for improvements to substandard reviews, get extra reviews if needed, and flag questionable papers for ethics review.",
            "Discuss with reviewers and authors: after author responses, initiate and lead an OpenReview discussion, keep it respectful, steer it to critical aspects, ensure reviewers respond to author responses; restrict comment visibility as appropriate.",
            "Write metareviews: this is the last discussion phase; be on time; explain your decision; your comments should augment the reviews and explain how reviews, responses, and discussion led to it; you may dismiss clearly low-quality reviews.",
            "Discuss accept/reject decisions with the PCs, especially borderline cases and recommendations that go against the reviewers."
          ],
          zh: [
            "準備:保持 OpenReview 電子郵件正確(多數信件來自 noreply@openreview.net,記得查看垃圾信)、更新個人檔案、檢視行為準則與利益衝突政策,並熟悉審稿指南。",
            "論文指派:不採領域主席競標 —— 論文由媒合演算法自動指派。我們處理極大量的投稿,感謝您的彈性配合。",
            "調整審稿人指派:確保每篇投稿都有合適、可信且意見多元的審稿人;在審稿開始前多花點時間;之後仍可持續邀請審稿人(他們須對每篇論文同意受邀)。",
            "確保審稿品質:有禮地催稿、替換無法完成的審稿人、要求改善品質不足的審稿、必要時取得額外審稿,並將有疑慮的論文標記送倫理審查。",
            "與審稿人和作者討論:作者回覆後,於 OpenReview 發起並主持討論,維持互相尊重,引導至關鍵爭點,確保審稿人回應作者意見;並依需要限制留言的可見對象。",
            "撰寫綜合評審(metareview):此為討論的最後階段;請準時;說明您的決定;您的評語應補充審稿意見,並說明審稿、回覆與討論如何導出該決定;對於明顯低品質的審稿可予以排除。",
            "與議程主席討論錄取/退稿決定,尤其是邊界案例,以及與審稿人意見相左的建議。"
          ] } }
    ],
    links: [ { label: { en: "Modify reviewer assignments (OpenReview docs)", zh: "調整審稿人指派(OpenReview 文件)" }, url: "https://docs.openreview.net/how-to-guides/paper-matching-and-assignment/how-to-modify-reviewer-assignments-as-an-area-chair" } ]
  }
];

/* ====================================================================== */
/*  WORKSHOPS — all on October 9, 2026                                     */
/* ====================================================================== */
function ws(slug, en, zh, sumZh, tags, site, cfp) {
  var links = [{ label: { en: "Workshop website", zh: "工作坊網站" }, url: site }];
  if (cfp) links.push({ label: { en: "Call for papers", zh: "徵稿頁面" }, url: cfp });
  return {
    slug: slug, category: "workshops",
    title: { en: en, zh: zh || en },
    meta: { en: "Workshop · October 9, 2026", zh: "工作坊 · 2026/10/09" },
    summary: { en: "A COLM 2026 workshop. See the website and call for papers.", zh: sumZh },
    tags: tags, links: links
  };
}
var WORKSHOPS = [
  ws("ws-efficient-reasoning", "Workshop on Efficient Reasoning", "高效推理工作坊",
     "聚焦讓語言模型推理更省算力、更高效的方法。", ["reasoning", "efficiency"],
     "https://wdlctc.github.io/efficient-reasoning-2026/", "https://wdlctc.github.io/efficient-reasoning-2026/#call"),
  ws("ws-agent-behavior", "Workshop on Agent Behavior", "智能體行為工作坊",
     "探討 AI 智能體的行為、評估與分析。", ["agents", "behavior"],
     "https://www.aiagentbehavior.com", "https://www.aiagentbehavior.com/#submissions"),
  ws("ws-lifelong-agent", "The 2nd Workshop on Lifelong Agent: Learning, Aligning, Evolving", "第二屆終身智能體工作坊:學習、對齊、演化",
     "終身學習智能體的持續學習、對齊與演化。", ["agents", "lifelong learning"],
     "https://lifelongagent.github.io/", "https://lifelongagent.github.io/#submissions"),
  ws("ws-nonar-lm", "Non-Autoregressive Language Models for Fast and Flexible Text Generation", "非自回歸語言模型:快速且彈性的文本生成",
     "非自回歸語言模型,實現更快、更彈性的文本生成。", ["non-autoregressive", "generation"],
     "https://pengzhangzhi.github.io/NonAR-LM/", "https://pengzhangzhi.github.io/NonAR-LM/cfp"),
  ws("ws-actionable-interp", "Actionable Interpretability", "可付諸行動的可解釋性",
     "讓可解釋性研究能實際指引模型改進與決策。", ["interpretability"],
     "https://actionable-interpretability.github.io/", "https://actionable-interpretability.github.io/cfp/"),
  ws("ws-science-fm", "Workshop on Scientific Understanding of Foundation Models", "基礎模型的科學理解工作坊",
     "以科學方法理解基礎模型的運作與性質。", ["foundation models", "science"],
     "https://science-ai-2026.github.io", "https://science-ai-2026.github.io/#cfp"),
  ws("ws-genai4world", "Generative AI for the World: Globalizing Tasks, Evaluations, and Systems", "生成式 AI 為世界:任務、評估與系統的全球化",
     "推動生成式 AI 任務、評估與系統的全球化與在地化。", ["global", "evaluation"],
     "https://sites.google.com/view/genai4world/", "https://sites.google.com/view/genai4world/call-for-papers"),
  ws("ws-tokenization", "Second Tokenization Workshop", "第二屆斷詞(Tokenization)工作坊",
     "斷詞與詞元化方法及其對模型的影響。", ["tokenization"],
     "https://tokenization-workshop.github.io/", "https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/TokShop"),
  ws("ws-advml-cotma", "AdvML-Frontiers × CoTMA: From Model Security to Compositional Threats in Multi-Agent AI", "AdvML-Frontiers × CoTMA:從模型安全到多智能體 AI 的組合式威脅",
     "對抗式機器學習與多智能體系統的安全威脅。", ["security", "adversarial", "multi-agent"],
     "https://advml-frontier.github.io/", "https://advml-frontier.github.io/"),
  ws("ws-daih-healthcare", "LLM/VLM Deployment Opportunities and Risks in Healthcare", "醫療場域中 LLM/VLM 部署的機會與風險",
     "醫療領域部署 LLM/VLM 的機會、風險與挑戰。", ["healthcare", "deployment"],
     "https://daih2026.github.io/", "https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/DAIH#tab-recent-activity"),
  ws("ws-social-sim", "Social Sim'26: Fidelity in Applications", "Social Sim'26:應用中的擬真度",
     "以語言模型進行社會模擬時的擬真度與應用。", ["social simulation"],
     "https://sites.google.com/view/social-sims-with-llms", "https://sites.google.com/view/social-sims-with-llms/call-for-papers"),
  ws("ws-context-window", "Context Beyond the Window: Persistent Knowledge in Language Models", "超越脈絡視窗:語言模型中的持久知識",
     "脈絡視窗之外的持久知識與長期記憶。", ["long context", "memory"],
     "https://context-beyond-window.github.io/", "https://context-beyond-window.github.io/#cfp"),
  ws("ws-ai-measurement", "AI Measurement Science: Toward Rigorous AI Evaluation", "AI 量測科學:邁向嚴謹的 AI 評估",
     "建立嚴謹、科學化的 AI 評估與量測方法。", ["evaluation", "measurement"],
     "https://aimslab.stanford.edu/workshop", "https://aimslab.stanford.edu/workshop"),
  ws("ws-haips-privacy", "2nd Workshop on Human-Centered Privacy and Security for Language Models", "第二屆以人為本的語言模型隱私與安全工作坊",
     "以人為本看待語言模型的隱私與資安。", ["privacy", "security"],
     "https://haips.com", "https://haips.com/#cfp"),
  ws("ws-situated-embodied", "Learning from Situated and Embodied Interaction", "從情境與具身互動中學習",
     "情境化與具身互動中的學習。", ["embodiment", "interaction"],
     "https://learning-situated-interaction.github.io/", "https://learning-situated-interaction.github.io/#call-for-papers"),
  ws("ws-moss-small-scale", "Methods and Opportunities at Small Scale (MOSS)", "小規模下的方法與機會(MOSS)",
     "小規模設定下的研究方法與機會。", ["small scale", "methods"],
     "https://sites.google.com/view/moss-colm-2026/", "https://sites.google.com/view/moss-colm-2026/call-for-papers?authuser=0"),
  ws("ws-redata", "Workshop on Responsibly Enabling Data for Foundation Models", "為基礎模型負責任地提供資料工作坊",
     "以負責任的方式為基礎模型準備與提供資料。", ["data", "responsibility"],
     "https://re-data-colm2026.github.io/", "https://re-data-colm2026.github.io/#"),
  ws("ws-lm4sci", "LM4Sci 2.0: Language Models for Scientific Discovery", "LM4Sci 2.0:用於科學發現的語言模型",
     "運用語言模型推動科學發現。", ["science", "discovery"],
     "https://lm4sci.github.io/", "https://lm4sci.github.io/docs/2026/call-for-papers")
];

/* ====================================================================== */
/*  ORGANIZERS & BOARD                                                     */
/* ====================================================================== */
function person(slug, name, roleEn, roleZh, aff, web, twitter) {
  var links = [];
  if (web) links.push({ label: { en: "Website", zh: "個人網站" }, url: web });
  if (twitter) links.push({ label: { en: "Twitter / X", zh: "Twitter / X" }, url: twitter });
  return {
    slug: slug, category: "people",
    title: { en: name, zh: name },
    meta: { en: roleEn, zh: roleZh },
    summary: { en: aff, zh: aff },
    tags: [roleEn].concat(aff.split(/[\/,]| and /).map(function (s) { return s.trim(); }).filter(Boolean)),
    links: links
  };
}
var PEOPLE = [
  person("p-yoav-artzi", "Yoav Artzi", "General Chair", "大會主席", "Cornell University / Google DeepMind", "https://yoavartzi.com/", null),
  person("p-greg-durrett", "Greg Durrett", "Senior Program Chair", "資深議程主席", "New York University", "https://gregdurrett.github.io/", null),
  person("p-aviral-kumar", "Aviral Kumar", "Program Chair", "議程主席", "CMU", "https://aviralkumar2907.github.io/", null),
  person("p-yulia-tsvetkov", "Yulia Tsvetkov", "Program Chair", "議程主席", "UW", "https://homes.cs.washington.edu/~yuliats/", null),
  person("p-yoon-kim", "Yoon Kim", "Program Chair", "議程主席", "MIT", "https://people.csail.mit.edu/yoonkim/", null),
  person("p-robert-hawkins", "Robert Hawkins", "Workshop Chair", "工作坊主席", "Stanford University", "https://rdhawkins.com/", null),
  person("p-subhi-goel", "Subhi Goel", "Workshop Chair", "工作坊主席", "UPenn", "https://www.surbhigoel.com/", null),
  person("p-robin-jia", "Robin Jia", "Community and Accessibility Chair", "社群與無障礙主席", "USC", "https://robinjia.github.io/", null),
  person("p-anjalie-field", "Anjalie Field", "Community and Accessibility Chair", "社群與無障礙主席", "JHU", "https://anjalief.github.io/", null),
  person("p-angelina-wang", "Angelina Wang", "Ethics Chair", "倫理主席", "Cornell University", "https://angelina-wang.github.io/", null),
  person("p-vered-shwartz", "Vered Shwartz", "Ethics Chair", "倫理主席", "UBC", "https://www.cs.ubc.ca/~vshwartz/", null),
  person("p-chris-brown", "Chris Brown", "Organizational Chair", "組織主席", "AICONS", "mailto:chris.brown@aicons.org", null),
  person("b-yejin-choi", "Yejin Choi", "Board Member", "理事會成員", "University of Washington, NVIDIA", "https://homes.cs.washington.edu/~yejin/", "https://twitter.com/YejinChoinka"),
  person("b-denny-zhou", "Denny Zhou", "Board Member", "理事會成員", "Google DeepMind", "https://dennyzhou.github.io/", "https://twitter.com/denny_zhou"),
  person("b-danqi-chen", "Danqi Chen", "Board Member", "理事會成員", "Princeton", "https://www.cs.princeton.edu/~danqic/", "https://twitter.com/danqi_chen"),
  person("b-angela-fan", "Angela Fan", "Board Member", "理事會成員", "Meta", "https://ai.meta.com/people/angela-fan/", null),
  person("b-alice-oh", "Alice Oh", "Board Member", "理事會成員", "KAIST", "https://aliceoh9.github.io/", "https://twitter.com/aliceoh"),
  person("b-yoav-artzi-board", "Yoav Artzi", "Board Member", "理事會成員", "Cornell Tech, ASAPP", "https://yoavartzi.com/", "https://twitter.com/yoavartzi"),
  person("b-alexander-rush", "Alexander Rush", "Board Member", "理事會成員", "Cornell University / Anysphere", "https://rush-nlp.com/", "https://twitter.com/srush_nlp"),
  person("b-dipanjan-das", "Dipanjan Das", "Board Member", "理事會成員", "Google DeepMind", "https://www.dipanjandas.com/", "https://twitter.com/dipanjand")
];

/* ====================================================================== */
/*  FAQ                                                                    */
/* ====================================================================== */
function faq(slug, qEn, qZh, aEn, aZh, tags) {
  return {
    slug: slug, category: "faq",
    title: { en: qEn, zh: qZh },
    summary: { en: aEn.length > 130 ? aEn.slice(0, 127) + "…" : aEn,
               zh: aZh.length > 60 ? aZh.slice(0, 58) + "…" : aZh },
    tags: tags || ["faq"],
    overview: { en: aEn, zh: aZh }
  };
}
var FAQ = [
  faq("faq-poster-dimensions", "What are the poster dimensions?", "海報尺寸是多少?",
    "The poster size is 36in (H) x 72in (W).",
    "海報尺寸為 36 吋(高)× 72 吋(寬)。", ["poster"]),
  faq("faq-poster-or-oral", "Are papers presented as posters or oral presentations?", "論文是以海報還是口頭方式報告?",
    "All papers will be presented as posters. A small number of papers will be selected for oral presentations. We will notify the authors of papers selected for oral presentations around mid September.",
    "所有論文都會以海報形式展示。少數論文會獲選進行口頭報告;我們約於 9 月中旬通知獲選口頭報告的作者。", ["poster", "oral"]),
  faq("faq-cannot-attend", "Can I send a poster to be printed, or present remotely?", "我能寄海報請你們代印代掛,或遠端報告嗎?",
    "We are sorry, but COLM cannot place your poster for you in the poster session — it is not within the conference's capacity and does not result in a meaningful presentation. Submission entails the responsibility of all authors to present in person, which (as an in-person-only conference) means attendance and travel. If absolutely necessary, we recommend identifying a colleague who is attending and willing to present on your behalf (COLM cannot assist with this).",
    "很抱歉,COLM 無法代您在海報展示時段擺放海報 —— 這超出會議的能量,也無法達成有意義的呈現。投稿即代表所有作者有責任親自報告;由於 COLM 僅限實體舉行,這意味著出席與差旅。若萬不得已,建議找一位將出席且願意代您報告的同事(COLM 無法協助安排)。", ["attendance", "poster"]),
  faq("faq-reciprocal-reviewing", "What is the reciprocal reviewing requirement?", "什麼是互惠審稿要求?",
    "There are two reciprocal reviewing requirements: a 'per-submission' requirement and a 'per-reviewer' requirement. The submission form lets submitters designate an author to fulfill the per-submission requirement, or indicate an exemption. Multiple submissions cannot share the same reciprocal reviewer unless all other authors do not qualify or serve in other roles. Any author with 4 or more submissions is automatically added to the reviewer pool unless already on the program committee or COLM organization. COLM is fairly new, so we lack reliable estimates of reviewing need; reciprocal reviewing lets us scale the committee with the number of submissions.",
    "互惠審稿有兩項要求:「每篇投稿」要求與「每位審稿人」要求。投稿表單可讓投稿者指定一位作者履行「每篇投稿」要求,或標示豁免。除非其他作者皆不符資格或擔任其他角色,否則多篇投稿不能共用同一位互惠審稿人。任何作者若有 4 篇以上投稿,將自動納入審稿人庫,除非已是議程委員或 COLM 組織成員。COLM 還很新,我們對審稿需求尚無可靠估計;互惠審稿讓我們能隨投稿量擴充審稿團隊。", ["reviewing", "reciprocal"]),
  faq("faq-exempt-reciprocal", "How can a paper be exempt from reciprocal reviewing?", "論文如何豁免互惠審稿?",
    "To be exempt, a paper must have at least one author who is a member of the COLM program committee with no reduced quota (i.e., as a reviewer, AC, or PC) at the time of submission. Alternatively, a paper may be exempt if all authors are unqualified to review for COLM.",
    "若要豁免,論文須在投稿時至少有一位作者是 COLM 議程委員、且未享有縮減配額(亦即擔任審稿人、領域主席或議程主席)。或者,若所有作者皆不符合擔任 COLM 審稿人的資格,該論文也可豁免。", ["reviewing", "reciprocal"]),
  faq("faq-reviewer-qualifications", "What are the qualifications required to review for COLM?", "擔任 COLM 審稿人需要什麼資格?",
    "Reviewers must have research experience equivalent to a second-year graduate student in machine learning or a related field. They must have been a primary author on at least two peer-reviewed conference or journal papers in a related venue (e.g., ACL, NAACL, EMNLP, ICML, NeurIPS, ICLR, JMLR, TMLR, CVPR, ICCV — not exhaustive).",
    "審稿人須具備相當於機器學習或相關領域研究所二年級的研究經驗,並曾在相關會議或期刊(如 ACL、NAACL、EMNLP、ICML、NeurIPS、ICLR、JMLR、TMLR、CVPR、ICCV,非窮舉)擔任至少兩篇同儕審查論文的主要作者。", ["reviewing"]),
  faq("faq-reviewing-load", "What is the expected reviewing load?", "預期的審稿量是多少?",
    "We expect a reviewing load of up to 5 papers per reviewer.",
    "我們預期每位審稿人最多審 5 篇論文。", ["reviewing"]),
  faq("faq-edit-submission", "Can I edit the submission between the abstract and full paper deadlines?", "在摘要與完整論文截止之間,我可以編輯投稿嗎?",
    "All fields remain editable until the full paper submission deadline. However, we recommend keeping edits to a minimum, and only necessary ones, to minimize disruptions to the program committee's work.",
    "在完整論文截止前,所有欄位都可編輯。但建議將修改降到最低、僅做必要更動,以減少對議程委員會工作的干擾。", ["submission"]),
  faq("faq-extra-page-camera-ready", "Will COLM allow an extra page for the camera ready?", "正式稿(camera ready)可以多一頁嗎?",
    "Yes, COLM will allow authors of accepted papers to add an extra page to the camera ready to add content following the reviewers' and AC's feedback.",
    "可以。COLM 允許錄取論文的作者在正式稿增加一頁,以補充因應審稿人與領域主席意見的內容。", ["camera ready"]),
  faq("faq-double-submission", "Can I submit to COLM while under review for ARR/ICML/NeurIPS/etc.?", "在 ARR/ICML/NeurIPS 等審查期間,我能投 COLM 嗎?",
    "We are sorry, but COLM does not allow double submissions. All papers under the ARR process, regardless of stage, are considered under submission to ARR and cannot be submitted to COLM.",
    "很抱歉,COLM 不允許重複投稿。所有在 ARR 流程中的論文,無論處於哪個階段,皆視為投稿於 ARR,因此不能投 COLM。", ["double submission"]),
  faq("faq-submission-open", "When does COLM submission open?", "COLM 何時開放投稿?",
    "See the dates page. Submissions open on OpenReview in February 2026.",
    "請見日期頁。投稿系統於 2026 年 2 月在 OpenReview 開放。", ["submission", "dates"]),
  faq("faq-preprint-policy", "What is the COLM preprint policy?", "COLM 的預印本政策為何?",
    "COLM uses the following policy, adapted from NeurIPS: Non-anonymous preprints (on arXiv, social media, websites, etc.) are permitted. We recommend indicating \"preprint\" rather than the \"final\" option in the template. Reviewers are instructed not to actively look for such preprints, but encountering them does not constitute a conflict of interest. Authors may submit work already available as a preprint (e.g., on arXiv) without citing it; however, previously published papers by the authors on related topics must be cited (with adequate anonymization to preserve double-blind reviewing).",
    "COLM 採用改編自 NeurIPS 的政策:允許非匿名預印本(arXiv、社群媒體、網站等)。建議在範本中標示為「preprint」而非「final」。審稿人會被指示不要主動搜尋這類預印本,但若無意間看到也不構成利益衝突。作者可投稿已以預印本形式發布(如在 arXiv 上)的工作而不引用它;但作者先前在相關主題上已發表的論文則必須引用(並做適當匿名化以維持雙盲審查)。", ["preprint", "policy"]),
  faq("faq-short-paper-track", "Will COLM have a short paper track?", "COLM 會有短論文軌嗎?",
    "COLM 2026 will not have a separate track for short papers. We appreciate the value of short papers, but for the time being we are not supporting this submission track.",
    "COLM 2026 不會設獨立的短論文軌。我們肯定短論文的價值,但目前暫不支援此投稿軌。", ["tracks"]),
  faq("faq-position-papers", "Will COLM accept position papers?", "COLM 收立場論文(position paper)嗎?",
    "COLM does not have a separate track, reviewing, or call for position papers for the 2026 call.",
    "2026 年的徵稿中,COLM 沒有針對立場論文的獨立軌、審查或徵稿。", ["tracks"]),
  faq("faq-survey-papers", "Will COLM accept survey papers?", "COLM 收綜述論文(survey)嗎?",
    "We don't have a special track for survey papers. If you wish, you can submit a survey paper and we will route it to the appropriate area chairs and reviewers.",
    "我們沒有綜述論文的專屬軌。若您願意,可投稿綜述論文,我們會將其導向適當的領域主席與審稿人。", ["tracks"]),
  faq("faq-add-remove-author", "Can I add/remove an author for the camera ready?", "正式稿可以增刪作者嗎?",
    "We are sorry, but this is not possible. Authorship information was used to compute conflicts of interest during reviewing. Adding or removing authors endangers the integrity of the reviewing process.",
    "很抱歉,這不可行。作者資訊在審稿期間用於計算利益衝突;增刪作者會危及審稿流程的完整性。", ["authorship", "camera ready"]),
  faq("faq-how-sponsor", "How can I help sponsor the conference?", "我要如何贊助這場會議?",
    "We are actively looking for sponsors for the event. Please contact chris.brown@aicons.org if you are interested.",
    "我們正積極為活動尋找贊助者。若有意願,請聯絡 chris.brown@aicons.org。", ["sponsor"]),
  faq("faq-archival", "Is COLM an archival conference?", "COLM 是存檔型(archival)會議嗎?",
    "Yes, COLM is an archival venue. You may submit to non-archival venues in addition to COLM, but not to archival venues.",
    "是的,COLM 是存檔型會議。除 COLM 外,您可同時投稿非存檔型會議,但不能投其他存檔型會議。", ["archival"]),
  faq("faq-conference-structure", "What will the conference structure be like?", "會議的結構是怎樣的?",
    "The conference will be single-track with invited speakers, oral presentations, and poster sessions. COLM 2026 will also include one day for workshops.",
    "會議為單軌形式,包含特邀講者、口頭報告與海報展示。COLM 2026 另含一天工作坊。", ["format"]),
  faq("faq-virtual-option", "Will COLM have a virtual option?", "COLM 有線上參與選項嗎?",
    "COLM is an in-person conference only, and is unable to provide a virtual attendance option.",
    "COLM 僅為實體會議,無法提供線上參與選項。", ["attendance", "format"]),
  faq("faq-visa-invitation", "How can I get an invitation letter for a visa?", "我要如何取得簽證用的邀請函?",
    "Upon registration, you will be able to download an invitation letter.",
    "完成註冊後,您就能下載邀請函。", ["visa", "registration"]),
  faq("faq-no-author-attend", "What if no author of an accepted paper can attend (visa, etc.)?", "若錄取論文沒有任何作者能出席(簽證等因素)怎麼辦?",
    "We are making significant efforts so that all authors can attend, including early registration to start the visa process in advance and travel grants. If no author can attend, we will allow the paper to be presented by a colleague — we believe this is not ideal, so use it only if all other options are exhausted. COLM is in-person only and all papers must be presented in person. If all options are truly exhausted, authors can contact the PCs to work out a solution, but only after demonstrating good-faith efforts to attend.",
    "我們正盡力讓所有作者都能出席,包括提供提早註冊以儘早啟動簽證流程,以及差旅補助。若沒有任何作者能出席,我們會允許由同事代為報告 —— 但我們認為這並非理想做法,因此僅在所有其他選項都用盡時才使用。COLM 僅限實體,所有論文都必須親自報告。若所有選項確實都用盡,作者可聯絡議程主席尋求解決方案,但須先以及時且可佐證的方式展現出席的誠意與努力。", ["attendance", "visa"]),
  faq("faq-author-registration", "Is there an author registration requirement?", "有作者註冊要求嗎?",
    "At least one author of each accepted paper must register for the main conference (workshop registration does not satisfy this requirement).",
    "每篇錄取論文至少須有一位作者註冊主會議(工作坊註冊不符合此要求)。", ["registration"]),
  faq("faq-student-rate", "I'm a postdoc / just graduated — do I qualify for the student rate?", "我是博士後/剛畢業,符合學生票資格嗎?",
    "If you are a recently graduated student publishing under your student affiliation, then you should register as a Student.",
    "若您是最近畢業、且以學生身分單位發表的學生,則應以「學生」身分註冊。", ["registration"]),
  faq("faq-pronounce", "How do you pronounce COLM?", "COLM 怎麼發音?",
    "It is pronounced like \"Collum\", based on the Irish name Colm. It means dove 🕊️.",
    "發音類似「Collum」,源自愛爾蘭名字 Colm,意思是鴿子 🕊️。", ["name"])
];

/* ---------- assemble (order = display order) ---------- */
window.SITE_DATA = ABOUT
  .concat(DATES)
  .concat(CALLS)
  .concat(GUIDES)
  .concat(WORKSHOPS)
  .concat(PEOPLE)
  .concat(FAQ);
