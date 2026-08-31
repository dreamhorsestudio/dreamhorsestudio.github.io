/* ============ i18n 多语言支持 ============ */
/* 简体中文 / 繁体中文 / English，默认简体中文 */

const DEFAULT_LANG = "zh-CN";
const STORAGE_KEY = "dhs-lang";

const LANGS = [
  { code: "zh-CN", label: "简体中文", short: "简" },
  { code: "zh-TW", label: "繁體中文", short: "繁" },
  { code: "en", label: "English", short: "EN" },
];

const I18N = {
  "zh-CN": {
    "page.title": "DreamHorseStudio - Google Play 应用合集",
    "lang.switch": "切换语言",
    "hero.tag": "Google Play 官方开发者",
    "hero.sub1": "专注中文阅读与实用工具 · 武侠经典 / 名家小说合集 / 海量热门网文 / 效率工具",
    "hero.sub2": "一次下载，免费畅读，用心做好每一款应用",
    "hero.stat1": "款应用",
    "hero.stat2": "大类别",
    "hero.stat3": "用户好评",
    "hero.cta": "访问 Google Play 开发者主页 →",
    "featured.title": "🌟 主推应用",
    "apps.title": "全部应用",
    "filter.all": "全部",
    "filter.novel": "📚 小说阅读",
    "filter.tool": "🛠️ 实用工具",
    "modal.features": "✨ 核心功能",
    "modal.books": "📖 内置好书",
    "modal.play": "前往 Google Play 下载",
    "footer.text": "所有应用均可在 Google Play 免费下载",
    "footer.link": "Google Play 开发者主页",
    "slide.badge": "🔥 主打推荐",
    "common.details": "查看详情 →",
    "common.viewDetails": "查看详情",
    "common.getPlay": "获取 Google Play",
    "common.downloads": "次下载",
    "common.rating": "好评",
    "common.contentRating": "内容分级",
    "category.books": "图书与工具书",
    "category.tools": "工具",
  },
  "zh-TW": {
    "page.title": "DreamHorseStudio - Google Play 應用合集",
    "lang.switch": "切換語言",
    "hero.tag": "Google Play 官方開發者",
    "hero.sub1": "專注中文閱讀與實用工具 · 武俠經典 / 名家小說合集 / 海量熱門網文 / 效率工具",
    "hero.sub2": "一次下載，免費暢讀，用心做好每一款應用",
    "hero.stat1": "款應用",
    "hero.stat2": "大類別",
    "hero.stat3": "用戶好評",
    "hero.cta": "前往 Google Play 開發者主頁 →",
    "featured.title": "🌟 主推應用",
    "apps.title": "全部應用",
    "filter.all": "全部",
    "filter.novel": "📚 小說閱讀",
    "filter.tool": "🛠️ 實用工具",
    "modal.features": "✨ 核心功能",
    "modal.books": "📖 內置好書",
    "modal.play": "前往 Google Play 下載",
    "footer.text": "所有應用均可在 Google Play 免費下載",
    "footer.link": "Google Play 開發者主頁",
    "slide.badge": "🔥 主打推薦",
    "common.details": "查看詳情 →",
    "common.viewDetails": "查看詳情",
    "common.getPlay": "取得 Google Play",
    "common.downloads": "次下載",
    "common.rating": "好評",
    "common.contentRating": "內容分級",
    "category.books": "圖書與工具書",
    "category.tools": "工具",
  },
  en: {
    "page.title": "DreamHorseStudio - Google Play Apps",
    "lang.switch": "Switch language",
    "hero.tag": "Official Google Play Developer",
    "hero.sub1": "Chinese reading & utility apps · Wuxia classics / Author collections / Web novels / Tools",
    "hero.sub2": "Download once, read for free — every app crafted with care",
    "hero.stat1": "Apps",
    "hero.stat2": "Categories",
    "hero.stat3": "User Rating",
    "hero.cta": "Visit our Google Play Developer Page →",
    "featured.title": "🌟 Featured Apps",
    "apps.title": "All Apps",
    "filter.all": "All",
    "filter.novel": "📚 Books & Reading",
    "filter.tool": "🛠️ Tools",
    "modal.features": "✨ Key Features",
    "modal.books": "📖 Built-in Books",
    "modal.play": "Get it on Google Play",
    "footer.text": "All apps are free to download on Google Play",
    "footer.link": "Google Play Developer Page",
    "slide.badge": "🔥 Top Pick",
    "common.details": "Details →",
    "common.viewDetails": "View Details",
    "common.getPlay": "Get it on Google Play",
    "common.downloads": "downloads",
    "common.rating": "rating",
    "common.contentRating": "Rated",
    "category.books": "Books & Reference",
    "category.tools": "Tools",
  },
};

/* 语言探测：手动选择 > 浏览器语言 > 默认简体中文 */
function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
  } catch (e) {
    /* localStorage 不可用时忽略 */
  }
  const langs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage || ""];
  for (const full of langs) {
    const l = String(full).toLowerCase();
    if (l.startsWith("zh")) {
      /* zh-TW / zh-HK / zh-Hant → 繁体；其余中文 → 简体 */
      if (l.startsWith("zh-tw") || l.startsWith("zh-hk") || l.includes("hant")) return "zh-TW";
      return "zh-CN";
    }
    if (l.startsWith("en")) return "en";
  }
  return DEFAULT_LANG;
}

let currentLang = detectLang();

function getCurrentLang() {
  return currentLang;
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N[DEFAULT_LANG][key] || key;
}

function applyLang() {
  document.documentElement.lang = currentLang === "zh-TW" ? "zh-Hant" : currentLang;
  document.title = t("page.title");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
  updateLangSwitcher();
}

function setLang(lang) {
  if (!I18N[lang]) lang = DEFAULT_LANG;
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* 忽略持久化失败 */
  }
  applyLang();
  /* 通知动态渲染部分（应用卡片/轮播/弹窗）重新渲染 */
  document.dispatchEvent(new CustomEvent("langchange"));
}

/* ============ 语言切换器交互 ============ */
function updateLangSwitcher() {
  const btnLabel = document.getElementById("langLabel");
  const menu = document.getElementById("langMenu");
  if (!btnLabel || !menu) return;
  const meta = LANGS.find((l) => l.code === currentLang);
  btnLabel.textContent = meta ? meta.short : "简";
  menu.querySelectorAll("li").forEach((li) => {
    li.classList.toggle("active", li.dataset.lang === currentLang);
  });
}

function initLangSwitcher() {
  const switcher = document.getElementById("langSwitcher");
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  if (!switcher || !btn || !menu) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
  });

  menu.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-lang]");
    if (!li) return;
    menu.hidden = true;
    if (li.dataset.lang !== currentLang) setLang(li.dataset.lang);
  });

  /* 点击外部 / ESC 关闭菜单 */
  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) menu.hidden = true;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") menu.hidden = true;
  });
}

initLangSwitcher();
applyLang();
