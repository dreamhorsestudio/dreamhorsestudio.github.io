/* DreamHorseStudio 应用数据（来源：Google Play 开发者页面） */

const DEVELOPER_URL = "https://play.google.com/store/apps/developer?id=DreamHorseStudio";
const ICON_SUFFIX = "=w200-h200"; // Google Play 图标尺寸参数，使用 w200-h200 避免 429 限流

const apps = [
  {
    id: "com.nick.novel.bookreader",
    name: "簡閱小說 - 男生女生小說閱讀器 - 總裁豪門/都市生活熱門小說",
    shortName: "简阅小说",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 4.8,
    downloads: "5,000+",
    contentRating: "16+",
    icon: "https://play-lh.googleusercontent.com/cUgtQk6rv4dwZKlLAMsOs_09CI7ZgFvw4sCVoU3ETCIIvKYz1Tx7G71T_R6vdu7zDaF_Dp2Ut0C83irh17nBIA",
    localIcon: "applogo1.png",
    shortDesc: "真正的正版小说看书软件！海量小说库，阅读软件中的小说王！万本精品热门小说尽情畅读，您值得拥有的追书神器！",
    features: [
      "热门榜单 + 每日推荐精彩好书",
      "实时热搜即搜即看，急速更新",
      "护眼模式、多种翻页效果",
      "支持繁/简体切换",
    ],
    books: "玄幻、都市、现言、总裁、快穿、推理、系统、重生、校园、军事、官场、灵异、历史、出版、科幻等海量类型小说。",
  },
  {
    id: "com.nick.novel.superreader",
    name: "超级小说 - 海量热门畅销小说库 - 热门小说尽情看",
    shortName: "超级小说",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 4.9,
    downloads: "5,000+",
    contentRating: "16+",
    icon: "https://play-lh.googleusercontent.com/Dq3_C66iEYSnC95iYo8GgklmLE9CLf18taIcT0IAXcA_Y-rYl3cFGRqcFNA0lF2UgsXIs3QzK_inUG4whh_7wQ",
    localIcon: "applogo2.png",
    shortDesc: "永久海量畅读！拥有海量小说库，阅读软件中的小说王！万本精品热门小说尽情阅读，您值得拥有的追书神器！",
    features: [
      "超全收录，万部原创小说应有尽有",
      "每日推荐，实时更新",
      "护眼模式、多种翻页效果",
      "支持繁简切换",
    ],
    books: "言情小说、穿越小说、霸道总裁、宫斗小说、玄幻修真、历史军事、科幻灵异、恐怖悬疑等，男女生都爱的小说大全。",
  },
  {
    id: "com.nick.novel.wuxia01",
    name: "中華經典歷史小說合集: 閱讀國學古文典籍的電子書",
    shortName: "中华经典历史小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "100+",
    contentRating: "7+",
    icon: "https://play-lh.googleusercontent.com/QEhgM6VDEjghTgoV8HW1qu-QZ4253de7cXKxdckFT2O-kw0o4h_lT7a34vZHSyb28gf2ja8TRU7PWai3Nx2_",
    localIcon: "applogo5.png",
    shortDesc: "鉴赏国学古文典籍全集，体验中华传统文化！",
    features: [
      "自动记录阅读位置，无需手动操作",
      "多种阅读配色方案、夜间模式、背景切换",
      "繁简切换，亮度/行距/页边距灵活调整",
      "流畅翻页，精致排版",
    ],
    books: "大明王朝1566、三国演义、隋唐演义、中国大历史、万历十五年、红楼梦、康熙大帝、曾国藩等历史书籍。",
  },
  {
    id: "com.nick.novel.wuxia02",
    name: "古龍武俠小說合集 - 武侠世界 - 快意江湖",
    shortName: "古龙武侠小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "500+",
    contentRating: "3+",
    icon: "https://play-lh.googleusercontent.com/eMQACLgwCwn_9UrokncN0VlWlH2SxY8BkT7Lzv5YNiXyhEMJCDbXjqm38L0fQ-klYIMTV_m71fxSV3Xiw9KG9r4",
    localIcon: "applogo6.png",
    shortDesc: "阅读古龙武侠小说合集，感受武侠世界的快意江湖。",
    features: [
      "百余部古龙武侠作品一次收录",
      "自动记录阅读位置、夜间模式",
      "繁简切换，亮度/字体可调",
      "一次下载，永久免费离线阅读",
    ],
    books: "楚留香系列、陆小凤系列、绝代双骄、三少爷的剑、天涯明月刀、萧十一郎、圆月弯刀、武林外史、边城浪子、流星·蝴蝶·剑、多情剑客无情剑等百余部作品。",
  },
  {
    id: "com.nick.novel.wuxia06",
    name: "黃易武俠小說合集 - 武侠世界 - 快意江湖",
    shortName: "黄易武侠小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "500+",
    contentRating: "16+",
    icon: "https://play-lh.googleusercontent.com/kH6EaIErc-SgwINh3WDB5wJfW4cmTaJyqoVHZePtFrT3bRHt19R5hOqgclW9vbtbP7-EJbmBQ6kD4yyWYac8GeY",
    localIcon: "applogo10.png",
    shortDesc: "黄易，武侠大师，快意江湖。",
    features: [
      "武侠 + 科幻，进入黄易的宏大世界",
      "完整目录、音量键翻页",
      "繁简切换，亮度/字体可调，多种翻页效果",
      "无需登录注册，永久免费离线阅读",
    ],
    books: "寻秦记、大唐双龙传、边荒传说、破碎虚空、翻云覆雨、星际浪子、超级战士、龙神、乌金血剑、幽灵船等多部经典作品。",
  },
  {
    id: "com.nick.novel.wuxia10",
    name: "還珠樓主武俠小說合集-民國武俠小說-武俠世界-快意江湖",
    shortName: "还珠楼主武侠小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "100+",
    contentRating: "3+",
    icon: "https://play-lh.googleusercontent.com/N2nm5wVpr5fRSWgfJSAcWh8P4VI8eHJTMumfkFGUEHqqX7Fi2UlGrkQeYeXAT5CyrS1LXMzY23vUS_HX1WtHRg",
    localIcon: "applogo14.png",
    shortDesc: "武侠宗师，江湖再见。内置还珠楼主武侠小说合集，感受武侠江湖的快意恩仇。",
    features: [
      "民国武侠宗师经典合集",
      "完整目录、背景多选、音量键翻页",
      "繁简切换，亮度/字体可调",
      "无需登录注册，永久免费离线阅读",
    ],
    books: "蜀山剑侠传、青城十九侠、峨眉七矮、云海争奇记、北海屠龙记、龙山四友、蛮荒侠隐、柳湖侠隐、岳飞传等多部作品。",
  },
  {
    id: "com.nick.novel.wuxia09",
    name: "雲中嶽武俠小說合集-臺灣武俠小說-武俠世界-快意江湖",
    shortName: "云中岳武侠小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "100+",
    contentRating: "3+",
    icon: "https://play-lh.googleusercontent.com/oCdqe4KGp-CwtOdh05NexiVp3p_oYI2hqljtn7S4q65zSK_MZjroAgetXiEU_nHw2sm7OlV3MdJrwHXCWmmwSQ",
    localIcon: "applogo13.png",
    shortDesc: "武侠宗师，江湖再见。内置云中岳武侠小说合集，感受武侠江湖的快意恩仇。",
    features: [
      "台湾武侠小说名家合集",
      "完整目录、音量键翻页",
      "繁简切换，多种阅读背景",
      "一次下载，永久免费离线阅读",
    ],
    books: "魔剑惊龙、绝代枭雄、霸海风云、碧血江南、冷面刀客、大刺客、剑海情涛、八荒龙蛇、草莽芳华等多部作品。",
  },
  {
    id: "com.nick.novel.wuxia11",
    name: "余華經典小說合集-直面人世萬般浮沈",
    shortName: "余华经典小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "1+",
    contentRating: "3+",
    icon: "https://play-lh.googleusercontent.com/6Mb3Zphu6hrRwbUlpflH_nYqo3EN95MEnPtGVf8BTWe5mtn1IgVVGlzr6DBEUUFg9LLm8uQ22cVspDIPIlc_",
    localIcon: "applogo15.png",
    shortDesc: "文学大师，笔写众生。内置余华全部经典小说合集，体会文字之下生命的韧性与人世沧桑！",
    features: [
      "余华全部经典作品收录",
      "自动记录阅读位置",
      "多种阅读配色、夜间模式",
      "繁简一键切换",
    ],
    books: "活着、许三观卖血记、兄弟、在细雨中呼喊、河边的错误、世事如烟、鲜血梅花、古典爱情、十八岁出门远行等全部经典作品。",
  },
  {
    id: "com.nick.novel.wuxia05",
    name: "岑凱倫言情小說合集-港台言情小说女王",
    shortName: "岑凯伦言情小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "500+",
    contentRating: "16+",
    icon: "https://play-lh.googleusercontent.com/jbqKYHveccQ9XdyRnh_Xhn6yitR5bZORUWelcqjBX4JwRGPOzdpx4uLtUF26qfPZ0QB1UjAuWit3U5ZAv5eqtg",
    localIcon: "applogo9.png",
    shortDesc: "岑凯伦言情小说合集-港台言情小说女王。",
    features: [
      "港台言情小说女王经典合集",
      "完整目录、音量键翻页",
      "繁简切换，亮度/字体可调",
      "一次下载，永久免费离线阅读",
    ],
    books: "八月樱桃、豪门奇谭、水晶、蝴蝶梦、金冠天使、邻家的女孩、白马王子、永恒的琥珀、爱如春风、再生缘等多部爱情作品。",
  },
  {
    id: "com.nick.novel.wuxia07",
    name: "古靈言情小說合集-臺灣愛情-小說-霸道總裁-豪門總裁",
    shortName: "古灵言情小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "500+",
    contentRating: "12+",
    icon: "https://play-lh.googleusercontent.com/Ej23o1P9sKBdr1MBv7xjtsjMHVPJdIWi2U_BNtFmwgG-CBQ2ffvTOd8q-NEgn-L9SKUKrdJIkjKA8g_s2fdqHiA",
    localIcon: "applogo11.png",
    shortDesc: "古灵言情小说合集，感受台湾言情小说女王的爱情世界。",
    features: [
      "台湾言情小说女王全系列收录",
      "完整目录、音量键翻页",
      "繁简切换，多种阅读主题",
      "一次下载，永久免费离线阅读",
    ],
    books: "一家都是宝系列、出嫁从夫系列、恋爱三部曲、恶魔物语系列、神偷系列、心电感应系列、情丝泪、爱情密码系列等多部言情作品。",
  },
  {
    id: "com.nick.novel.wuxia08",
    name: "席娟言情小說合集-臺灣愛情小說-霸道總裁-豪門總裁",
    shortName: "席娟言情小说合集",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "100+",
    contentRating: "12+",
    icon: "https://play-lh.googleusercontent.com/glf0uWA8CWvmRW60z6G6PU1ZXXjIH_8j7B4WgFPuRCOSP788Ey6QHnIm7uXVqJ5-zA69ohcFWWDa9UpZmkp8-Q",
    localIcon: "applogo12.png",
    shortDesc: "席娟言情小说合集，感受台湾言情小说女王的爱情世界。",
    features: [
      "席娟经典言情作品合集",
      "完整目录、音量键翻页",
      "繁简切换，多种阅读主题",
      "一次下载，永久免费离线阅读",
    ],
    books: "上错花轿嫁对郎、交错时光的爱恋、点绛唇、最好别爱我、珠玉在侧、红袖招、抢来的新娘、墨莲、凉夏校园纪事等多部经典作品。",
  },
  {
    id: "com.nick.novel.wuxia03",
    name: "古典文學小說閱讀｜古代傳奇言情小說書庫",
    shortName: "古典文学小说阅读",
    category: "novel",
    categoryLabel: "图书与工具书",
    rating: 0,
    downloads: "100+",
    contentRating: "12+",
    icon: "https://play-lh.googleusercontent.com/k80inbIKgUk1q8tzZi3qK_S4wVJQPXiJ22m4fUrXTsncjzFXwUkKzEY6ih8ftjdGRmQlewEXkfcnnES8oLhlNg",
    localIcon: "applogo7.png",
    shortDesc: "专业繁体小说阅读器，收录经典古典传奇文学，支援多种阅读设定，享受沉浸式阅读体验。",
    features: [
      "汇集中国古代经典传奇与言情文学",
      "完整章节目录快速跳转",
      "多种护眼阅读背景主题",
      "音量键翻页、繁简一键切换、多样翻页动画",
    ],
    books: "八美图、品花宝鉴、飞花艳想、金瓶梅、九尾龟、剪灯新话、灯草和尚、隋炀帝艳史等流传久远的古典小说。",
  },
  {
    id: "com.viewer.simple.sample",
    name: "SimplePDF - PDF Reader Viewer",
    shortName: "SimplePDF 阅读器",
    category: "tool",
    categoryLabel: "工具",
    detailUrl: "tools.html",
    rating: 0,
    downloads: "500+",
    contentRating: "3+",
    icon: "https://play-lh.googleusercontent.com/ZJZyWShcFlGaGnayQQBxVSUWG62lPX4AQl8V_KtbvpJINe8RMo1iGsm1oYegZHOvWYPjuG3P0lrdi6o5BELNJw",
    localIcon: "applogo3.png",
    shortDesc: "快速免费的PDF阅读器，可查看、缩放和管理所有PDF文件。",
    features: [
      "即时打开本地、邮件或云端的 PDF 文件",
      "流畅缩放、滚动与全文搜索",
      "轻量级应用，占用存储空间少",
      "离线使用，简洁无广告，安全私密",
    ],
    books: "",
  },
  {
    id: "com.nick.location666",
    name: "GPS测试工具 - GNSS、北斗信号查看器",
    shortName: "GPS测试工具",
    category: "tool",
    categoryLabel: "工具",
    detailUrl: "tools.html",
    rating: 0,
    downloads: "1,000+",
    contentRating: "3+",
    icon: "https://play-lh.googleusercontent.com/J8AHjrUDy6bp6WP6_gqYCJ-mP2P7emsLbuVNk-PUKDV7JVQzLsbXFD_z1DgQDSVUJw7W_SebLuqtelHT_oKiiqo",
    localIcon: "applogo4.png",
    shortDesc: "测试GPS、BDS信号，查看GNSS卫星、北斗卫星、指南针、速度、NMEA与坐标。",
    features: [
      "支持 GPS / GLONASS / GALILEO / SBAS / 北斗 / QZSS 六大卫星系统",
      "实时查看卫星数量与信号强度",
      "当前速度、航向、海拔与坐标显示",
      "内置指南针、本地/UTC 时间、NMEA 数据查看与保存",
    ],
    books: "",
  },
];

/* ============ 展示顺序 ============ */
/* 古龙、黄易、岑凯伦置顶；简阅小说、超级小说置于末尾 */
const ORDER = [
  "com.nick.novel.wuxia02", // 古龙武侠小说合集
  "com.nick.novel.wuxia06", // 黄易武侠小说合集
  "com.nick.novel.wuxia05", // 岑凯伦言情小说合集
  "com.nick.novel.wuxia01", // 中华经典历史小说合集
  "com.nick.novel.wuxia10", // 还珠楼主武侠小说合集
  "com.nick.novel.wuxia09", // 云中岳武侠小说合集
  "com.nick.novel.wuxia11", // 余华经典小说合集
  "com.nick.novel.wuxia07", // 古灵言情小说合集
  "com.nick.novel.wuxia08", // 席娟言情小说合集
  "com.nick.novel.wuxia03", // 古典文学小说阅读
  "com.viewer.simple.sample", // SimplePDF
  "com.nick.location666", // GPS测试工具
  "com.nick.novel.bookreader", // 简阅小说（末尾）
  "com.nick.novel.superreader", // 超级小说（末尾）
];

function sortedApps() {
  return ORDER.map((id) => apps.find((a) => a.id === id)).filter(Boolean);
}

/* 下载量少于 5000 的应用，展示时下载次数 ×10 */
function displayDownloads(app) {
  const num = parseInt(app.downloads.replace(/[^0-9]/g, ""), 10);
  if (!Number.isNaN(num) && num < 5000) {
    return (num * 10).toLocaleString("en-US") + "+";
  }
  return app.downloads;
}

/* ============ 渲染应用卡片 ============ */
const appGrid = document.getElementById("appGrid");
const playUrl = (app) => `https://play.google.com/store/apps/details?id=${app.id}`;
const iconUrl = (app) => app.localIcon ? `icons/${app.localIcon}` : app.icon + ICON_SUFFIX;
const categoryLabelOf = (app) => t(app.category === "novel" ? "category.books" : "category.tools");

/* 繁体模式下，应用名称/简介/功能/书目自动转繁体；英文等其他语言保持原样 */
const tr = (text) =>
  typeof getCurrentLang === "function" && getCurrentLang() === "zh-TW" && typeof toTraditional === "function"
    ? toTraditional(text)
    : text;

function ratingText(app) {
  return app.rating > 0 ? `<span class="rating-badge">★ ${app.rating.toFixed(1)}</span>` : "";
}

function renderApps(filter = "all") {
  const all = sortedApps();
  const list = filter === "all" ? all : all.filter((a) => a.category === filter);
  appGrid.innerHTML = list
    .map(
      (app, i) => `
    <article class="app-card" data-id="${app.id}" style="animation-delay:${i * 0.05}s" tabindex="0" role="button" aria-label="${t("common.viewDetails")} ${tr(app.shortName)}">
      <div class="card-top">
        <img class="app-icon" src="${iconUrl(app)}" alt="${tr(app.shortName)}" loading="lazy"
             onerror="this.onerror=null;this.src='${app.icon}'">
        <div class="card-title-wrap">
          <h3 class="app-name">${tr(app.shortName)}</h3>
          <p class="app-category">${categoryLabelOf(app)} ${ratingText(app)}</p>
        </div>
      </div>
      <p class="app-desc">${tr(app.shortDesc)}</p>
      <div class="card-foot">
        <span class="app-downloads">⬇ ${displayDownloads(app)} ${t("common.downloads")}</span>
        <span class="card-cta">${t("common.details")}</span>
      </div>
    </article>`
    )
    .join("");
}

/* ============ 分类筛选 ============ */
const filters = document.getElementById("filters");
let currentFilter = "all";
filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderApps(currentFilter);
});

/* ============ 详情弹窗 ============ */
const backdrop = document.getElementById("modalBackdrop");
const $ = (id) => document.getElementById(id);
let openApp = null;

function openModal(app) {
  openApp = app;
  $("modalIcon").src = iconUrl(app);
  $("modalIcon").onerror = function () { this.onerror = null; this.src = app.icon; };
  $("modalTitle").textContent = tr(app.name);
  $("modalDesc").textContent = tr(app.shortDesc);
  $("modalPlayBtn").href = playUrl(app);

  const chips = [
    `<span class="m-chip">📂 ${categoryLabelOf(app)}</span>`,
    `<span class="m-chip">⬇ ${displayDownloads(app)} ${t("common.downloads")}</span>`,
    `<span class="m-chip">👤 ${t("common.contentRating")} ${app.contentRating}</span>`,
  ];
  if (app.rating > 0) chips.unshift(`<span class="m-chip hl">★ ${app.rating.toFixed(1)} ${t("common.rating")}</span>`);
  $("modalChips").innerHTML = chips.join("");

  $("modalFeatures").innerHTML = app.features.map((f) => `<li>${tr(f)}</li>`).join("");
  $("modalFeaturesBlock").style.display = app.features.length ? "" : "none";

  const booksEl = $("modalBooks");
  booksEl.textContent = tr(app.books);
  $("modalBooksBlock").style.display = app.books ? "" : "none";

  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  openApp = null;
  backdrop.hidden = true;
  document.body.style.overflow = "";
}

appGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".app-card");
  if (!card) return;
  const app = apps.find((a) => a.id === card.dataset.id);
  if (app && app.detailUrl) { window.location.href = app.detailUrl; return; }
  if (app) openModal(app);
});

appGrid.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest(".app-card");
  if (!card) return;
  e.preventDefault();
  const app = apps.find((a) => a.id === card.dataset.id);
  if (app && app.detailUrl) { window.location.href = app.detailUrl; return; }
  if (app) openModal(app);
});

$("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !backdrop.hidden) closeModal();
});

/* ============ 主推应用轮播 ============ */
const FEATURED_IDS = [
  "com.nick.location666", // GPS测试工具
  "com.nick.novel.wuxia02", // 古龙武侠小说合集
  "com.nick.novel.wuxia07", // 古灵言情小说合集
];

const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const featuredApps = FEATURED_IDS.map((id) => apps.find((a) => a.id === id)).filter(Boolean);
let currentSlide = 0;
let slideTimer = null;
let carouselHovered = false;

function renderCarousel() {
  carouselTrack.innerHTML = featuredApps
    .map(
      (app) => `
    <div class="slide">
      <div class="slide-inner">
        <img class="slide-icon" src="${iconUrl(app)}" alt="${tr(app.shortName)}" loading="lazy"
             onerror="this.onerror=null;this.src='${app.icon}'">
        <div class="slide-body">
          <span class="slide-badge">${t("slide.badge")}</span>
          <h3 class="slide-name">${tr(app.shortName)}</h3>
          <p class="slide-desc">${tr(app.shortDesc)}</p>
          <div class="slide-meta">
            <span>⬇ ${displayDownloads(app)} ${t("common.downloads")}</span>
            ${
              app.rating > 0
                ? `<span class="slide-rating">★ ${app.rating.toFixed(1)} ${t("common.rating")}</span>`
                : `<span>📂 ${categoryLabelOf(app)}</span>`
            }
          </div>
          <div class="slide-actions">
            <button class="btn btn-slide-detail" data-featured-id="${app.id}">${t("common.viewDetails")}</button>
            <a class="btn btn-slide-play" href="${playUrl(app)}" target="_blank" rel="noopener">${t("common.getPlay")}</a>
          </div>
        </div>
      </div>
    </div>`
    )
    .join("");
  carouselDots.innerHTML = featuredApps
    .map((_, i) => `<button class="carousel-dot${i === 0 ? " active" : ""}" data-slide="${i}" aria-label="切换到第 ${i + 1} 张"></button>`)
    .join("");
}

function goToSlide(index) {
  currentSlide = (index + featuredApps.length) % featuredApps.length;
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  carouselDots.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}

function startAutoplay() {
  stopAutoplay();
  slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

function stopAutoplay() {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
}

document.getElementById("prevSlide").addEventListener("click", () => {
  goToSlide(currentSlide - 1);
  if (!carouselHovered) startAutoplay();
});

document.getElementById("nextSlide").addEventListener("click", () => {
  goToSlide(currentSlide + 1);
  if (!carouselHovered) startAutoplay();
});

carouselDots.addEventListener("click", (e) => {
  const dot = e.target.closest(".carousel-dot");
  if (!dot) return;
  goToSlide(Number(dot.dataset.slide));
  if (!carouselHovered) startAutoplay();
});

/* 鼠标悬停时暂停自动播放 */
const carouselEl = document.querySelector(".carousel");
carouselEl.addEventListener("mouseenter", () => {
  carouselHovered = true;
  stopAutoplay();
});
carouselEl.addEventListener("mouseleave", () => {
  carouselHovered = false;
  startAutoplay();
});

/* 移动端滑动切换 */
let touchStartX = 0;
carouselEl.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  stopAutoplay();
}, { passive: true });
carouselEl.addEventListener("touchend", (e) => {
  const delta = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 50) goToSlide(currentSlide + (delta < 0 ? 1 : -1));
  startAutoplay();
}, { passive: true });

/* 轮播卡片「查看详情」复用详情弹窗 */
carouselTrack.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-featured-id]");
  if (!btn) return;
  const app = apps.find((a) => a.id === btn.dataset.featuredId);
  if (app) openModal(app);
});

renderCarousel();
startAutoplay();

/* ============ 语言切换：重新渲染动态内容 ============ */
document.addEventListener("langchange", () => {
  renderApps(currentFilter);
  renderCarousel();
  if (openApp) openModal(openApp);
});

/* ============ 初始化 ============ */
document.getElementById("year").textContent = new Date().getFullYear();
renderApps();
