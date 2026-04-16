// ── DATA ──
const NEWS = [
  {
    id: 1,
    cat: "Politics",
    emoji: "🏛️",
    bg: "#FFF5F5",
    title:
      "Weekly governance review highlights new municipal policies for Lucknow",
    excerpt:
      "City council passes three landmark bills affecting waste management and public transport.",
    time: "15 Apr",
    tags: ["Weekly Feature", "Lucknow"],
  },
  {
    id: 2,
    cat: "Business",
    emoji: "💼",
    bg: "#EBF8FF",
    title:
      "Market watch: New openings, trade deals & investment surge in UP capital",
    excerpt:
      "Over 120 new businesses registered this week as FDI interest in Lucknow doubles.",
    time: "14 Apr",
    tags: ["Weekly Feature", "Economy"],
  },
  {
    id: 3,
    cat: "City",
    emoji: "🌆",
    bg: "#F0FFF4",
    title:
      "Gomti Riverfront Phase 3: New parks, cafes & cultural spaces unveiled",
    excerpt:
      "The much-awaited expansion adds 4km of walkable waterfront to the city landscape.",
    time: "14 Apr",
    tags: ["Infrastructure", "City Life"],
  },
  {
    id: 4,
    cat: "Education",
    emoji: "📚",
    bg: "#FAF5FF",
    title:
      "UP Board 2026 results: Record 86% pass rate; girls outperform boys statewide",
    excerpt:
      "Lucknow district emerges as top performer with 14 schools achieving 100% pass rate.",
    time: "13 Apr",
    tags: ["Education", "UP Board"],
  },
  {
    id: 5,
    cat: "Sports",
    emoji: "🏆",
    bg: "#FFFAF0",
    title:
      "LSG Season Preview: Batting lineup revamped for IPL 2026 campaign",
    excerpt:
      "Lucknow Super Giants confirm squad with three new international signings.",
    time: "13 Apr",
    tags: ["Cricket", "IPL"],
  },
  {
    id: 6,
    cat: "Technology",
    emoji: "💻",
    bg: "#E6FFFA",
    title:
      "Lucknow gets 5G smart traffic grid — first UP city to go fully connected",
    excerpt:
      "AI-powered signals to cut average commute time by 18 minutes across key corridors.",
    time: "12 Apr",
    tags: ["Smart City", "5G"],
  },
  {
    id: 7,
    cat: "Entertainment",
    emoji: "🎭",
    bg: "#FFF5F7",
    title:
      "Kathak Mahotsav 2026: 3-day cultural festival draws 40,000 visitors",
    excerpt:
      "The annual celebration of classical dance returns with international performers.",
    time: "12 Apr",
    tags: ["Culture", "Events"],
  },
  {
    id: 8,
    cat: "Community",
    emoji: "🤝",
    bg: "#F0FFF4",
    title:
      "Citizen volunteers plant 10,000 trees along Kanpur Road in single weekend",
    excerpt:
      "The Green Lucknow drive sets a new record, inspiring similar campaigns citywide.",
    time: "11 Apr",
    tags: ["Environment", "Community"],
  },
  {
    id: 9,
    cat: "Lucknow",
    emoji: "🏙️",
    bg: "#FFF3E2",
    title:
      "Heritage walk series spotlights forgotten architecture of old Lucknow",
    excerpt:
      "The tourism board launches eight curated routes through nawabi-era neighbourhoods.",
    time: "11 Apr",
    tags: ["Heritage", "Tourism"],
  },
  {
    id: 10,
    cat: "Politics",
    emoji: "🗳️",
    bg: "#FFF5F5",
    title:
      "State cabinet reshuffle: Three new ministers take charge of key portfolios",
    excerpt:
      "The reorganisation signals a renewed focus on urban development and digital services.",
    time: "10 Apr",
    tags: ["State Politics", "Cabinet"],
  },
  {
    id: 11,
    cat: "Business",
    emoji: "📈",
    bg: "#EBF8FF",
    title:
      "Startup hub opens in Vibhuti Khand, offering co-working & seed funding",
    excerpt:
      "The 50,000 sq ft space will host 200 startups with government-backed mentorship.",
    time: "10 Apr",
    tags: ["Startups", "Tech"],
  },
  {
    id: 12,
    cat: "Health",
    emoji: "🏥",
    bg: "#FFF0F0",
    title:
      "KGMU breakthrough: New treatment protocol for dengue shows 92% success",
    excerpt:
      "Researchers publish findings ahead of the annual monsoon dengue season.",
    time: "9 Apr",
    tags: ["Health", "Research"],
  },
];

function makeCard(n) {
  return `<div class="news-card">
    <div class="card-img-placeholder" style="background:linear-gradient(135deg,${n.bg},#fff)">${n.emoji}</div>
    <div class="card-body">
      <div class="card-meta"><span class="card-cat">${n.cat}</span><span class="card-time">${n.time}</span></div>
      <div class="card-title">${n.title}</div>
      <div class="card-excerpt">${n.excerpt}</div>
    </div>
    <div class="card-footer">${n.tags.map((t) => `<span class="card-tag">${t}</span>`).join("")}</div>
  </div>`;
}

// Populate grids
document.getElementById("homeGrid").innerHTML = NEWS.slice(0, 6)
  .map(makeCard)
  .join("");
document.getElementById("latestGrid").innerHTML =
  NEWS.map(makeCard).join("");
document.getElementById("catGrid").innerHTML =
  NEWS.map(makeCard).join("");

// ── NAVIGATION ──
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  const nav = document.getElementById("nav-" + id);
  if (nav) nav.classList.add("active");
  window.scrollTo(0, 0);
}

// ── LATEST FILTER ──
function filterLatest(cat, el) {
  document
    .querySelectorAll("#latestPills .cat-pill")
    .forEach((p) => p.classList.remove("active"));
  if (el) el.classList.add("active");
  const filtered =
    cat === "All"
      ? NEWS
      : NEWS.filter((n) => n.cat === cat || n.tags.includes(cat));
  document.getElementById("latestGrid").innerHTML = filtered.length
    ? filtered.map(makeCard).join("")
    : '<p style="color:var(--ink-muted);padding:20px">No stories found in this category this week.</p>';
}

// ── CATEGORIES FILTER ──
function filterCategory(cat) {
  showPage("categories");
  document.getElementById("catFilterTitle").textContent =
    cat + " Stories";
  const filtered = NEWS.filter(
    (n) => n.cat === cat || n.tags.includes(cat),
  );
  document.getElementById("catGrid").innerHTML = filtered.length
    ? filtered.map(makeCard).join("")
    : '<p style="color:var(--ink-muted);padding:20px">No stories found for this category.</p>';
}

// ── UPLOAD TYPE SELECT ──
function selectUploadType(el) {
  document
    .querySelectorAll(".upload-type")
    .forEach((u) => u.classList.remove("active"));
  el.classList.add("active");
}

// ── CLOCK ──
function updateClock() {
  const now = new Date();
  document.getElementById("live-clock").textContent =
    now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
}
updateClock();
setInterval(updateClock, 10000);

// ── SEARCH ──
function handleSearch(e) {
  if (e.key === "Enter") {
    const q = e.target.value.toLowerCase().trim();
    if (!q) return;
    const results = NEWS.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.cat.toLowerCase().includes(q) ||
        n.tags.some((t) => t.toLowerCase().includes(q)),
    );
    showPage("latest");
    document
      .querySelectorAll("#latestPills .cat-pill")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById("latestGrid").innerHTML = results.length
      ? results.map(makeCard).join("")
      : `<p style="color:var(--ink-muted);padding:20px">No results found for "<strong>${q}</strong>". Try a different term.</p>`;
    e.target.value = "";
  }
}

// ── LANGUAGE & TRANSLATION ──
let currentLanguage = localStorage.getItem("language") || "en";

const translations = {
  en: {
    "Search home...": "Search home...",
    हिंदी: "हिंदी",
    Home: "Home",
    "Latest News": "Latest News",
    "Categories ▾": "Categories ▾",
    "E-Paper": "E-Paper",
    "Highlight Article": "Highlight Article",
    "Upload Content": "Upload Content",
    "Contact Us": "Contact Us",
    "Reading from: Lucknow": "Reading from: Lucknow",
    "Weekly Newspaper": "Weekly Newspaper",
    "BREAKING NEWS": "BREAKING NEWS",
    "🏷 Highlight Article": "🏷 Highlight Article",
    "Lucknow This Week:": "Lucknow This Week:",
    "The stories, issues, and": "The stories, issues, and",
    "progress that matter most": "progress that matter most",
    "A modern weekly news experience built for readers who want clarity, credibility, and connection to the city they love.":
      "A modern weekly news experience built for readers who want clarity, credibility, and connection to the city they love.",
    "📰 Read Latest News": "📰 Read Latest News",
    "📄 View E-Paper": "📄 View E-Paper",
    "This Week's Cover Story": "This Week's Cover Story",
    "View all highlights →": "View all highlights →",
    "Cover Story · Politics": "Cover Story · Politics",
    "Lucknow's Infrastructure Revolution: Roads, Metro & Smart Grids Transforming Urban Life":
      "Lucknow's Infrastructure Revolution: Roads, Metro & Smart Grids Transforming Urban Life",
    "From the bustling corridors of Hazratganj to the expanding suburban zones, Lucknow is witnessing its most ambitious urban transformation yet. Our cover story this week traces the money, the politics, and the people behind the change.":
      "From the bustling corridors of Hazratganj to the expanding suburban zones, Lucknow is witnessing its most ambitious urban transformation yet. Our cover story this week traces the money, the politics, and the people behind the change.",
    "Read Full Story →": "Read Full Story →",
    "Latest from Lucknow": "Latest from Lucknow",
    "See all news →": "See all news →",
    "Weekly News Feed": "Weekly News Feed",
    "A dedicated page connected to the main website layout for browsing category-based news stories.":
      "A dedicated page connected to the main website layout for browsing category-based news stories.",
    All: "All",
    Lucknow: "Lucknow",
    Politics: "Politics",
    City: "City",
    Business: "Business",
    Education: "Education",
    Sports: "Sports",
    Entertainment: "Entertainment",
    Technology: "Technology",
    Community: "Community",
    "Browse by Category": "Browse by Category",
    "News Categories": "News Categories",
    "Explore stories organised by topic. Click any category to read curated weekly coverage.":
      "Explore stories organised by topic. Click any category to read curated weekly coverage.",
    "12 stories this week": "12 stories this week",
    "9 stories this week": "9 stories this week",
    "8 stories this week": "8 stories this week",
    Health: "Health",
  },
  hi: {
    "Search home...": "यहाँ खोजें...",
    हिंदी: "English",
    Home: "होम",
    "Latest News": "नवीनतम समाचार",
    "Categories ▾": "श्रेणियाँ ▾",
    "E-Paper": "ई-पेपर",
    "Highlight Article": "हाइलाइट आलेख",
    "Upload Content": "सामग्री अपलोड करें",
    "Contact Us": "संपर्क करें",
    "Reading from: Lucknow": "पढ़ रहे हैं: लखनऊ",
    "Weekly Newspaper": "साप्ताहिक समाचार पत्र",
    "BREAKING NEWS": "ताज़ा समाचार",
    "🏷 Highlight Article": "🏷 हाइलाइट आलेख",
    "Lucknow This Week:": "इस हफ़्ते लखनऊ:",
    "The stories, issues, and": "कहानियाँ, मुद्दे, और",
    "progress that matter most": "प्रगति जो सबसे महत्वपूर्ण है",
    "A modern weekly news experience built for readers who want clarity, credibility, and connection to the city they love.":
      "एक आधुनिक साप्ताहिक समाचार अनुभव जो उन पाठकों के लिए बनाया गया है जो स्पष्टता, विश्वासनीयता और अपने प्रिय शहर से जुड़ाव चाहते हैं।",
    "📰 Read Latest News": "📰 नवीनतम समाचार पढ़ें",
    "📄 View E-Paper": "📄 ई-पेपर देखें",
    "This Week's Cover Story": "इस सप्ताह की कवर स्टोरी",
    "View all highlights →": "सभी हाइलाइट देखें →",
    "Cover Story · Politics": "कवर स्टोरी · राजनीति",
    "Lucknow's Infrastructure Revolution: Roads, Metro & Smart Grids Transforming Urban Life":
      "लखनऊ की बुनियादी ढांचे में क्रांति: सड़कें, मेट्रो और स्मार्ट ग्रिड शहरी जीवन को बदल रहे हैं",
    "From the bustling corridors of Hazratganj to the expanding suburban zones, Lucknow is witnessing its most ambitious urban transformation yet. Our cover story this week traces the money, the politics, and the people behind the change.":
      "हजरतगंज की व्यस्त गलियों से लेकर विस्तारित उपनगरीय क्षेत्रों तक, लखनऊ अपने सबसे महत्वाकांक्षी शहरी रूपांतरण को देख रहा है। हमारी इस हफ़्ते की कवर स्टोरी परिवर्तन के पीछे की धन, राजनीति और लोगों का पता लगाती है।",
    "Read Full Story →": "संपूर्ण कहानी पढ़ें →",
    "Latest from Lucknow": "लखनऊ से नवीनतम",
    "See all news →": "सभी समाचार देखें →",
    "Weekly News Feed": "साप्ताहिक समाचार फीड",
    "A dedicated page connected to the main website layout for browsing category-based news stories.":
      "मुख्य वेबसाइट लेआउट से जुड़ा एक समर्पित पृष्ठ जो श्रेणी-आधारित समाचार कहानियों को ब्राउज़ करने के लिए है।",
    All: "सभी",
    Lucknow: "लखनऊ",
    Politics: "राजनीति",
    City: "शहर",
    Business: "व्यापार",
    Education: "शिक्षा",
    Sports: "खेल",
    Entertainment: "मनोरंजन",
    Technology: "तकनीक",
    Community: "समुदाय",
    "Browse by Category": "श्रेणी द्वारा ब्राउज़ करें",
    "News Categories": "समाचार श्रेणियाँ",
    "Explore stories organised by topic. Click any category to read curated weekly coverage.":
      "विषय के अनुसार आयोजित कहानियों का अन्वेषण करें। साप्ताहिक कवरेज पढ़ने के लिए किसी भी श्रेणी पर क्लिक करें।",
    "12 stories this week": "इस हफ़्ते 12 कहानियाँ",
    "9 stories this week": "इस हफ़्ते 9 कहानियाँ",
    "8 stories this week": "इस हफ़्ते 8 कहानियाँ",
    Health: "स्वास्थ्य",
  },
};

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  localStorage.setItem("language", currentLanguage);
  applyTranslations();
}

function applyTranslations() {
  const trans = translations[currentLanguage];
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });

  // Update button text
  const btn = document.querySelector(".hindi-btn");
  if (btn) {
    btn.textContent = currentLanguage === "hi" ? "English" : "हिंदी";
  }

  // Update input placeholder
  const search = document.getElementById("searchInput");
  if (search) {
    search.placeholder = trans["Search home..."] || "Search home...";
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;

  // If language is Hindi, add special styling
  if (currentLanguage === "hi") {
    document.body.style.fontFamily = "'Noto Sans Devanagari', sans-serif";
  } else {
    document.body.style.fontFamily = "'DM Sans', sans-serif";
  }
}

// Apply saved language on page load
applyTranslations();
