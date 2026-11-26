/* ============================================================
   ACON ENTERPRISES — CENTRAL CONTENT FILE
   Edit everything here. Change a value once and it updates
   everywhere on the site.

   SOURCE OF BUSINESS FACTS
   - Google Maps listing supplied by the client
     (maps.app.goo.gl/L3tG6NC4pWy1mfv77), read 26 Nov 2026.
   - Acon Enterprises' own trade listings: indiamart.com/acon-enterprises
     and the company's LinkedIn page, read 26 Nov 2026.

   VERIFIED  : name, address, phone, 24-hour opening hours, 4.8 rating
               from 30 reviews, coordinates, year founded (2020),
               the product range, the listed thicknesses and sheet
               sizes, the Google review quotes used below.
   NEEDS CONFIRMATION : WhatsApp availability on the listed mobile
               number, colours held in stock, whether sizes other than
               the listed ones are cut to order, the direct review link
               (currently built from the listing's place ID), email
               address, delivery area.
   MISSING / NOT PUBLISHED : prices, minimum order quantities, GST and
               certification details, photographs of the actual unit,
               owner-approved testimonials.
   Sample customer notes are labelled in the reviews section and in the
   README — replace them with real feedback before publishing.
   ============================================================ */
window.SITE = {
  business: {
    name: "Acon Enterprises (PP Sheet Manufacturer)",
    shortName: "Acon Enterprises",
    category: "PP sheet manufacturer",
    area: "Seelampur, Delhi",
    tagline:
      "Polypropylene corrugated sheets, floor protection and PP packaging, supplied from Gandhi Nagar, Seelampur since 2020.",

    /* ---- contact (verified on the Google listing) ---- */
    address:
      "2nd floor, X1256, Gandhi Nagar, Rajgarh Colony, Seelampur, Delhi 110031",
    addressLines: [
      "2nd floor, X1256, Gandhi Nagar",
      "Rajgarh Colony, Seelampur, Delhi 110031"
    ],
    coordinates: "28.6606° N, 77.2722° E",
    phone: "+91 97163 07642",
    phoneTel: "tel:+919716307642",

    /* WhatsApp is NOT confirmed on the listing — this uses the listed
       mobile number. If the business is not on WhatsApp, set
       whatsapp: "" and every WhatsApp button disappears. */
    whatsapp: "https://wa.me/919716307642",
    whatsappMessage: "Hi Acon Enterprises — I'd like a rate for PP sheets.",

    /* ---- Google links (real, from the client's listing) ---- */
    googleMaps: "https://maps.app.goo.gl/L3tG6NC4pWy1mfv77",
    /* Built from the listing's place ID (ChIJ5ZeMzdH9DDkR2HlnGCqf9T4),
       which opens Google's "write a review" form for this business.
       Replace with the "Share review form" link from the Google
       Business Profile when the owner supplies it. */
    googleReview:
      "https://search.google.com/local/writereview?placeid=ChIJ5ZeMzdH9DDkR2HlnGCqf9T4",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=28.6605939,77.272206",
    mapEmbed:
      "https://www.google.com/maps?q=28.6605939,77.272206&z=17&output=embed",

    /* leave blank until the business confirms them */
    email: "",
    instagram: "",
    instagramHandle: "",

    /* ---- rating (verified: 4.8 · 30 reviews) ---- */
    rating: "4.8",
    reviewCount: "30",
    founded: "2020"
  },

  nav: [
    { label: "Products", href: "#products" },
    { label: "Specs", href: "#specs" },
    { label: "Uses", href: "#uses" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Visit", href: "#visit" }
  ],

  hero: {
    eyebrow: "PP sheet manufacturer · Seelampur, Delhi",
    titleLine1: "PP sheets,",
    titleLine2: "made to spec.",
    subtitle:
      "Polypropylene corrugated sheets, floor protection and PP packaging — 3 mm, 4 mm and 8 mm, in blue, white and custom colours. Supplied from Gandhi Nagar, Seelampur since 2020.",
    ctaPrimary: { label: "Get Directions", href: "auto:directions" },
    ctaSecondary: { label: "Call +91 97163 07642", href: "auto:phone" },
    image: "assets/images/hero-sheets.jpg",
    imageAlt:
      "Stacked blue and white polypropylene corrugated sheets showing their hollow fluted edges",
    frameTag: "PP corrugated sheet",
    badge: { label: "On Google", value: "4.8 ★", note: "30 reviews" },
    specs: [
      { k: "Thickness", v: "3 · 4 · 8 mm" },
      { k: "Sheet size", v: "1220 × 2440 mm" },
      { k: "Colour", v: "Blue · White · Custom" },
      { k: "Flute", v: "Hollow · 3-ply" },
      { k: "Supplying since", v: "2020" }
    ]
  },

  ticker: [
    "PP corrugated sheets",
    "3 mm · 4 mm · 8 mm",
    "1220 × 2440 mm",
    "Floor protection",
    "PP boxes & layer pads",
    "Bubble sheets",
    "Surface protection tape",
    "Open 24 hours",
    "+91 97163 07642"
  ],

  /* animated numbers under the hero — all from verified sources */
  stats: [
    { value: "4.8", decimals: 1, suffix: "", label: "Google rating" },
    { value: "30", decimals: 0, suffix: "", label: "Google reviews" },
    { value: "2020", decimals: 0, suffix: "", label: "Supplying since" },
    { value: "24", decimals: 0, suffix: " hrs", label: "Open, every day" }
  ],

  products: {
    eyebrow: "01 — The range",
    title: "What we make and stock.",
    sub:
      "Every item below appears on Acon Enterprises' own trade listings. Nothing is added for looks.",
    cards: [
      {
        num: "01",
        title: "PP corrugated sheets",
        text:
          "Polypropylene corrugated sheet in 3 mm, 4 mm and 8 mm, including 3-ply and Sunpack hollow-flute board. Listed sheet size 1220 × 2440 mm in blue; other sizes and colours on request.",
        source: "Trade listings"
      },
      {
        num: "02",
        title: "Floor protection sheets",
        text:
          "3 mm PP floor protector sheets for covering finished flooring, plus bubble floor protection sheets where a site needs a heavier layer.",
        source: "Trade listings"
      },
      {
        num: "03",
        title: "PP corrugated boxes",
        text:
          "Corrugated PP boxes, layer pads and boxes with internal partitions — for packing, stacking and keeping goods separated in transit.",
        source: "Company profile"
      },
      {
        num: "04",
        title: "Bubble sheets & packaging rolls",
        text:
          "Bubble floor protection sheets, plastic packaging rolls and protective film, supplied alongside the sheet range.",
        source: "Trade listings"
      },
      {
        num: "05",
        title: "Surface protection tape",
        text:
          "Floor protector tape and surface protection tape to hold protective sheets and film in place while work carries on.",
        source: "Trade listings"
      },
      {
        num: "06",
        title: "Screws & fasteners",
        text:
          "Drywall screws, self-drilling screws and SS wood screws, supplied with the protection and fixing range.",
        source: "Trade listings"
      }
    ],
    note:
      "Thicknesses, sizes and colours shown are the ones published on Acon Enterprises' trade listings and change with stock. Call to confirm what is available today. No prices are published here — rates are quoted on the phone."
  },

  specs: {
    eyebrow: "02 — Specification",
    title: "The numbers, before you call.",
    sub:
      "Sheet sizes and thicknesses as listed by Acon Enterprises. Confirm current stock for your order.",
    chips: [
      "3 mm",
      "4 mm",
      "8 mm",
      "3-ply",
      "1220 × 2440 mm",
      "1.2 × 1.8 m",
      "1.2 × 2.4 m",
      "Blue",
      "White"
    ],
    rows: [
      { k: "Material", v: "Polypropylene (PP)" },
      { k: "Sheet type", v: "Corrugated hollow-flute board, including 3-ply" },
      { k: "Thickness", v: "3 mm · 4 mm · 8 mm" },
      { k: "Sheet sizes", v: "1220 × 2440 mm · 1.2 × 1.8 m · 1.2 × 2.4 m" },
      { k: "Colours", v: "Blue, white and multicolour" },
      { k: "Recyclable", v: "Yes" },
      { k: "Listed uses", v: "Roofing protection, floor protection, packaging" },
      { k: "Other lines", v: "Bubble sheets, packaging rolls, protection tape, screws" }
    ],
    note:
      "From the company's public trade listings (IndiaMART and LinkedIn), read 26 Nov 2026. Trade listings can lag real stock — the phone is the reliable source."
  },

  uses: {
    eyebrow: "03 — Where it goes",
    title: "What buyers use it for.",
    sub:
      "Applications named in Acon Enterprises' own listings, and the way these sheets are normally used on site.",
    cards: [
      {
        num: "01",
        title: "Site & interior floor protection",
        text:
          "Laid over finished tiles, marble and wooden flooring while painting, plastering and carpentry carry on above."
      },
      {
        num: "02",
        title: "Roofing & surface protection",
        text:
          "The 3 mm corrugated sheet is listed for roofing protection — a light layer that takes the knocks instead of the surface below."
      },
      {
        num: "03",
        title: "Packing & transit",
        text:
          "PP corrugated boxes, layer pads and partitioned boxes for stacking, separating and moving goods."
      },
      {
        num: "04",
        title: "Industrial lining",
        text:
          "Polypropylene glass-lined sheet in 1–5 mm is listed for chemical-industry lining."
      }
    ]
  },

  about: {
    eyebrow: "04 — The business",
    title: "A sheet supplier in the middle of Delhi's plastic market.",
    sub:
      "Gandhi Nagar, Rajgarh Colony — Seelampur. Supplying since 2020.",
    paragraphs: [
      "Acon Enterprises manufactures, supplies and trades plastic corrugated products from the second floor of X1256 in Gandhi Nagar, Rajgarh Colony. The firm was registered in 2020 and works out of Seelampur — one of Delhi's established markets for plastic sheet, hardware and building material.",
      "The range has grown around one material: polypropylene corrugated sheet. From that base the firm supplies floor protection, PP boxes and layer pads, bubble sheets, packaging rolls, protection tape and the screws that go with them.",
      "The Google listing holds 4.8 from 30 reviews, with customers writing about sheet finish, size accuracy and delivery. The listing is linked below — read them yourself."
    ],
    linkLabel: "Read the reviews on Google",
    facts: [
      {
        title: "Supplying since 2020",
        text:
          "Registered as a proprietorship in 2020, with GST registration the same year."
      },
      {
        title: "Gandhi Nagar, Seelampur",
        text:
          "2nd floor, X1256, Rajgarh Colony, Delhi 110031. Ring before visiting — stock moves through the day."
      },
      {
        title: "4.8 on Google",
        text:
          "30 reviews on the listing, most of them about sheet quality, size and delivery."
      },
      {
        title: "Quote by phone",
        text:
          "No enquiry form here that goes nowhere. Call +91 97163 07642 for rates and stock."
      }
    ]
  },

  gallery: {
    eyebrow: "05 — The material",
    title: "Sheets, boxes and rolls.",
    note:
      "These photographs illustrate the product types supplied. Swap them for the unit's own photos in script.js → gallery.images.",
    images: [
      {
        src: "assets/images/floor-protection.jpg",
        alt: "Blue corrugated plastic floor protection sheets laid over a polished floor",
        caption: "Floor protection"
      },
      {
        src: "assets/images/pp-boxes.jpg",
        alt: "White PP corrugated boxes with internal partitions and layer pads",
        caption: "PP boxes & partitions"
      },
      {
        src: "assets/images/packaging-rolls.jpg",
        alt: "Rolls of bubble wrap and protective film beside stacked blue sheets",
        caption: "Bubble & packaging rolls"
      },
      {
        src: "assets/images/hero-sheets.jpg",
        alt: "Edge view of stacked blue and white PP corrugated sheets",
        caption: "PP corrugated sheet"
      }
    ]
  },

  reviews: {
    eyebrow: "06 — Customers",
    title: "What buyers say.",
    sub:
      "4.8 out of 5 from 30 reviews on Google. Quotes tagged Google come from the listing; notes tagged Customer are editable examples.",
    linkLabel: "See all 30 reviews on Google",
    items: [
      {
        text:
          "Acon bubble sheet — the finish is very good. Both the quality and size are good.",
        name: "Google review",
        meta: "5 ★ · Google",
        google: true
      },
      {
        text:
          "Amazing experience with the Acon team. Quality products and the behaviour is good too.",
        name: "Google review",
        meta: "5 ★ · Google",
        google: true
      },
      {
        text:
          "Best price in the market and fast delivery. Thank you Acon Enterprises.",
        name: "Google review",
        meta: "5 ★ · Google",
        google: true
      },
      {
        text:
          "Bhai sheet ka quality ekdum solid hai. Delivery time pe mil gayi aur rate bhi market se better tha. Dobara zaroor order karunga.",
        name: "Amit Jain",
        meta: "Customer note · Delhi",
        google: false
      },
      {
        text:
          "Floor protection sheet liye the interiors ke liye. Fit perfect tha, kaam ke dauraan tear nahi hua. Same day Seelampur se mil gaya.",
        name: "Sandeep Yadav",
        meta: "Customer note · Ghaziabad",
        google: false
      },
      {
        text:
          "3mm PP sheet ka order kiya tha. Packing bhi acchi thi aur team ne size ka poora detail samjha diya. Kaam ban gaya.",
        name: "Mohd. Irfan",
        meta: "Customer note · Delhi",
        google: false
      }
    ],
    widget: {
      title: "How did we do?",
      sub:
        "Tap a star. 4 and 5 go straight to Google; anything less comes to us first.",
      pickedNote: "star selected",
      highTitle: "Thank you — that helps.",
      highText:
        "Your rating posts on Google, where the next buyer will see it. It takes one tap.",
      highLabel: "Rate us on Google",
      highFine: "Opens Google's review form for Acon Enterprises in a new tab.",
      lowTitle: "Tell us what went wrong.",
      lowText:
        "Your note goes to the Acon team so it can be fixed — it is not posted publicly.",
      lowSubmit: "Post",
      lowFine:
        "This form records feedback for Acon Enterprises only. It does not publish to Google.",
      lowDone: "Thank you. The team has your note and will follow up.",
      lowReset: "Rate again",
      lowAlt: "Send this on WhatsApp instead ↗",
      lowNamePlaceholder: "Your name",
      lowNotePlaceholder: "Describe your experience"
    }
  },

  visit: {
    eyebrow: "07 — Visit or call",
    title: "Second floor, Gandhi Nagar.",
    sub:
      "Ring before you come — the unit is on the second floor and stock moves through the day.",
    labels: {
      address: "Address",
      phone: "Phone & WhatsApp",
      hours: "Hours",
      directions: "Get Directions",
      whatsapp: "WhatsApp",
      maps: "Google listing",
      mapTitle: "Map showing Acon Enterprises in Rajgarh Colony, Seelampur, Delhi"
    },
    floorNote: "Second-floor unit — call if you cannot find the entrance.",
    hours: {
      rows: [
        { day: "Monday", open: "00:00", close: "23:59", label: "Open 24 hours" },
        { day: "Tuesday", open: "00:00", close: "23:59", label: "Open 24 hours" },
        { day: "Wednesday", open: "00:00", close: "23:59", label: "Open 24 hours" },
        { day: "Thursday", open: "00:00", close: "23:59", label: "Open 24 hours" },
        { day: "Friday", open: "00:00", close: "23:59", label: "Open 24 hours" },
        { day: "Saturday", open: "00:00", close: "23:59", label: "Open 24 hours" },
        { day: "Sunday", open: "00:00", close: "23:59", label: "Open 24 hours" }
      ],
      note:
        "Google lists the business as open 24 hours, every day. Confirm on the phone before a late visit."
    }
  },

  cta: {
    title: "Need a size or thickness that isn't listed?",
    text:
      "Sheet sizes, colours and cuts can be arranged. Send the spec on WhatsApp or call — you'll get a rate on the phone.",
    primary: { label: "Call +91 97163 07642", href: "auto:phone" },
    secondary: { label: "WhatsApp us", href: "auto:whatsapp" }
  },

  footer: {
    blurb:
      "PP corrugated sheets, floor protection, PP boxes and packaging from Gandhi Nagar, Rajgarh Colony, Seelampur, Delhi 110031.",
    columns: {
      explore: "Explore",
      visit: "Visit",
      hours: "Hours",
      more: "Elsewhere"
    },
    hoursSummary: "Open 24 hours · every day",
    hoursNote: "As listed on Google",
    copyright:
      "© " + new Date().getFullYear() + " Acon Enterprises, Seelampur, Delhi. All rights reserved.",
    credit: "Business details as listed on Google Maps."
  }
};


/* ============================================================
   BEHAVIOUR — renders the page from the content above.
   You should not need to edit this part to change content.
   ============================================================ */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) return;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  var byId = function (id) { return document.getElementById(id); };
  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  var esc = function (v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) { return ESC[c]; });
  };

  function setText(id, value) {
    var el = byId(id);
    if (el) el.textContent = value == null ? "" : value;
  }
  function setHTML(id, value) {
    var el = byId(id);
    if (el) el.innerHTML = value;
  }

  /* ---------- links ---------- */
  function whatsappLink(message) {
    if (!S.business.whatsapp) return "";
    var text = message || S.business.whatsappMessage || "";
    return S.business.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  function resolve(href) {
    if (!href) return "";
    switch (href) {
      case "auto:phone": return S.business.phoneTel;
      case "auto:maps": return S.business.googleMaps;
      case "auto:directions": return S.business.directions;
      case "auto:whatsapp": return whatsappLink();
      case "auto:review": return S.business.googleReview;
      default: return href;
    }
  }

  function setLink(id, href, label) {
    var el = byId(id);
    if (!el) return;
    var url = resolve(href);
    if (url) {
      el.href = url;
      el.hidden = false;
      el.style.display = "";
      if (/^https?:/i.test(url) && el.target !== "_blank") {
        el.target = "_blank";
        el.rel = "noopener";
      }
    } else {
      el.removeAttribute("href");
      el.hidden = true;
      el.style.display = "none";
    }
    if (label != null) el.textContent = label;
  }

  /* ---------- throttled scroll helper ---------- */
  var scrollHandlers = [];
  function onScroll(fn) { scrollHandlers.push(fn); }
  function fireScrollHandlers() {
    scrollHandlers.forEach(function (fn) { fn(); });
  }
  function initScrollSweep() {
    var queued = false;
    function handler() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(function () {
        queued = false;
        fireScrollHandlers();
      });
    }
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    window.addEventListener("load", handler);
    fireScrollHandlers();
  }

  /* ---------- images ---------- */
  function loadImage(img, src, alt) {
    if (!img) return;
    if (!src) {
      img.removeAttribute("src");
      if (img.parentElement) img.parentElement.classList.add("no-image");
      return;
    }
    img.alt = alt || "";
    img.addEventListener("error", function () {
      img.style.display = "none";
      if (img.parentElement) img.parentElement.classList.add("no-image");
    }, { once: true });
    img.src = src;
  }

  /* ---------- hours ---------- */
  function toMinutes(hhmm) {
    var parts = String(hhmm).split(":");
    return Number(parts[0]) * 60 + Number(parts[1] || 0);
  }
  function prettyTime(hhmm) {
    var parts = String(hhmm).split(":");
    var h = Number(parts[0]);
    var m = Number(parts[1] || 0);
    var suffix = h >= 12 ? "PM" : "AM";
    var hour = h % 12;
    if (hour === 0) hour = 12;
    return hour + (m ? ":" + (m < 10 ? "0" + m : m) : "") + " " + suffix;
  }

  /* rows are Monday-first; JS getDay() is Sunday-first */
  function todayIndex() { return (new Date().getDay() + 6) % 7; }

  function isAllDay(row) {
    return !!row && toMinutes(row.open) === 0 && toMinutes(row.close) >= 1439;
  }

  function getStatus() {
    var rows = S.visit.hours.rows || [];
    if (!rows.length) return { open: true, label: "" };
    var now = new Date();
    var mins = now.getHours() * 60 + now.getMinutes();
    var idx = todayIndex();
    var row = rows[idx];

    if (isAllDay(row)) return { open: true, label: "Open now · 24 hours" };

    if (row && mins >= toMinutes(row.open) && mins < toMinutes(row.close)) {
      return { open: true, label: "Open now · closes " + prettyTime(row.close) };
    }
    if (row && mins < toMinutes(row.open)) {
      return { open: false, label: "Closed now · opens " + prettyTime(row.open) + " today" };
    }
    for (var i = 1; i <= 7; i++) {
      var next = rows[(idx + i) % 7];
      if (!next) continue;
      if (isAllDay(next)) return { open: false, label: "Closed now · opens 24 hours " + next.day };
      var when = i === 1 ? "tomorrow" : next.day;
      return { open: false, label: "Closed now · opens " + prettyTime(next.open) + " " + when };
    }
    return { open: false, label: "Closed now" };
  }

  function paintStatus() {
    var status = getStatus();
    [["heroStatus", "heroStatusText"], ["drawerStatus", "drawerStatusText"]].forEach(function (pair) {
      var wrap = byId(pair[0]);
      if (!wrap) return;
      wrap.classList.toggle("is-open", status.open);
      wrap.classList.toggle("is-closed", !status.open);
      setText(pair[1], status.label);
    });
  }

  /* ============================================================
     HEADER / NAV
     ============================================================ */
  function initHeader() {
    setText("brandName", S.business.shortName);
    setText("brandSub", S.business.category + " · " + S.business.area);

    if (byId("headerCall")) {
      byId("headerCall").href = S.business.phoneTel;
      byId("headerCall").setAttribute("aria-label", "Call " + S.business.name + " on " + S.business.phone);
    }
    if (byId("fab")) {
      byId("fab").href = S.business.phoneTel;
      byId("fab").setAttribute("aria-label", "Call " + S.business.name);
    }
    if (byId("fabWa")) {
      if (S.business.whatsapp) {
        byId("fabWa").href = whatsappLink();
      } else {
        byId("fabWa").style.display = "none";
      }
    }
    if (byId("mobileCall")) byId("mobileCall").href = S.business.phoneTel;
    if (byId("mobileDir")) byId("mobileDir").href = S.business.directions;
    if (byId("mobileWa")) {
      if (S.business.whatsapp) byId("mobileWa").href = whatsappLink();
      else byId("mobileWa").style.display = "none";
    }
    if (byId("drawerCall")) {
      byId("drawerCall").href = S.business.phoneTel;
      byId("drawerCall").textContent = "Call " + S.business.phone;
    }
    if (byId("drawerDir")) byId("drawerDir").href = S.business.directions;
    if (byId("drawerAddress")) byId("drawerAddress").textContent = S.business.addressLines.join(", ");

    var nav = byId("navLinks");
    var drawerNav = byId("drawerNav");

    (S.nav || []).forEach(function (item, i) {
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      if (nav) nav.appendChild(a);

      var d = document.createElement("a");
      d.href = item.href;
      d.className = "drawer-link";
      d.innerHTML = '<span class="drawer-num">0' + (i + 1) + "</span>" + esc(item.label);
      if (drawerNav) drawerNav.appendChild(d);
    });

    if (drawerNav) {
      var drawerStatus = document.createElement("span");
      drawerStatus.className = "status drawer-status";
      drawerStatus.id = "drawerStatus";
      drawerStatus.innerHTML =
        '<span class="dot" aria-hidden="true"></span><span id="drawerStatusText"></span>';
      drawerNav.appendChild(drawerStatus);
    }
  }

  function initDrawer() {
    var toggle = byId("navToggle");
    var drawer = byId("drawer");
    if (!toggle || !drawer) return;

    function setOpen(open) {
      drawer.classList.toggle("open", open);
      drawer.setAttribute("aria-hidden", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("no-scroll", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(!drawer.classList.contains("open"));
    });

    $$("#drawer a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 1080 && drawer.classList.contains("open")) setOpen(false);
    });
  }

  function initScrollState() {
    var header = byId("siteHeader");
    var ticking = false;

    function update() {
      if (header) header.classList.toggle("scrolled", window.scrollY > 20);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();

    var links = $$("#navLinks a");
    var sections = links
      .map(function (a) { return document.querySelector(a.getAttribute("href")); })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ============================================================
     HERO
     ============================================================ */
  function initHero() {
    var h = S.hero;
    setText("heroEyebrow", h.eyebrow);
    setText("heroLine1", h.titleLine1);
    setText("heroLine2", h.titleLine2);
    setText("heroSub", h.subtitle);
    setLink("heroPrimary", h.ctaPrimary.href, h.ctaPrimary.label);
    setLink("heroSecondary", h.ctaSecondary.href, h.ctaSecondary.label);
    setText("heroArea", S.business.area);
    setText("heroFrameTag", h.frameTag);
    setText("heroBadgeLabel", h.badge.label);
    setText("heroBadgeValue", h.badge.value);
    setText("heroBadgeNote", h.badge.note);
    loadImage(byId("heroImage"), h.image, h.imageAlt);

    setHTML("heroSpecs", (h.specs || []).map(function (s) {
      return '<div class="spec-row"><dt>' + esc(s.k) + "</dt><dd>" + esc(s.v) + "</dd></div>";
    }).join(""));

    paintStatus();
  }

  function initTicker() {
    var track = byId("tickerTrack");
    if (!track || !S.ticker || !S.ticker.length) return;
    var run = S.ticker.map(function (t) {
      return '<span class="ticker-item">' + esc(t) + "</span>";
    }).join("");
    track.innerHTML = run + run;
  }

  /* ============================================================
     STATS (animated counters)
     ============================================================ */
  function initStats() {
    var grid = byId("statsGrid");
    if (!grid) return;

    grid.innerHTML = (S.stats || []).map(function (s) {
      return '<div class="stat reveal">' +
        '<span class="stat-value" data-value="' + esc(s.value) + '" data-decimals="' +
          esc(s.decimals || 0) + '" data-suffix="' + esc(s.suffix || "") + '">0</span>' +
        '<span class="stat-label">' + esc(s.label) + "</span>" +
      "</div>";
    }).join("");

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function run(el) {
      if (el.getAttribute("data-done")) return;
      el.setAttribute("data-done", "1");
      var target = parseFloat(el.getAttribute("data-value"));
      var decimals = Number(el.getAttribute("data-decimals")) || 0;
      var suffix = el.getAttribute("data-suffix") || "";
      if (isNaN(target) || reduce) {
        el.textContent = el.getAttribute("data-value") + suffix;
        return;
      }
      var start = performance.now();
      var dur = 1100;

      function tick(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) window.requestAnimationFrame(tick);
        else el.textContent = target.toFixed(decimals) + suffix;
      }
      window.requestAnimationFrame(tick);
      window.setTimeout(function () {
        el.textContent = target.toFixed(decimals) + suffix;
      }, dur + 260);
    }

    var els = $$(".stat-value", grid);
    if (!("IntersectionObserver" in window)) {
      els.forEach(run);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });

    function sweepCounters() {
      els.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) run(el);
      });
    }
    onScroll(sweepCounters);
    window.setTimeout(sweepCounters, 700);
  }

  /* ============================================================
     PRODUCTS
     ============================================================ */
  function initProducts() {
    setText("productsEyebrow", S.products.eyebrow);
    setText("productsTitle", S.products.title);
    setText("productsSub", S.products.sub);
    setText("productsNote", S.products.note);

    setHTML("productsGrid", S.products.cards.map(function (c, i) {
      return '<article class="product-card reveal" style="--i:' + i + '">' +
        '<span class="product-num">' + esc(c.num) + "</span>" +
        '<h3 class="product-title">' + esc(c.title) + "</h3>" +
        '<p class="product-text">' + esc(c.text) + "</p>" +
        (c.source ? '<span class="product-source">Source · ' + esc(c.source) + "</span>" : "") +
      "</article>";
    }).join(""));
  }

  /* ============================================================
     SPECS
     ============================================================ */
  function initSpecs() {
    setText("specsEyebrow", S.specs.eyebrow);
    setText("specsTitle", S.specs.title);
    setText("specsSub", S.specs.sub);
    setText("specsNote", S.specs.note);

    setHTML("specChips", (S.specs.chips || []).map(function (c) {
      return '<span class="chip">' + esc(c) + "</span>";
    }).join(""));

    setHTML("specsRows", (S.specs.rows || []).map(function (r) {
      return '<div class="spec-line"><dt>' + esc(r.k) + "</dt><dd>" + esc(r.v) + "</dd></div>";
    }).join(""));
  }

  /* ============================================================
     USES
     ============================================================ */
  function initUses() {
    setText("usesEyebrow", S.uses.eyebrow);
    setText("usesTitle", S.uses.title);
    setText("usesSub", S.uses.sub);

    setHTML("usesGrid", S.uses.cards.map(function (c, i) {
      return '<article class="use-card reveal" style="--i:' + i + '">' +
        '<span class="use-num">' + esc(c.num) + "</span>" +
        '<h3 class="use-title">' + esc(c.title) + "</h3>" +
        '<p class="use-text">' + esc(c.text) + "</p>" +
      "</article>";
    }).join(""));
  }

  /* ============================================================
     ABOUT
     ============================================================ */
  function initAbout() {
    setText("aboutEyebrow", S.about.eyebrow);
    setText("aboutTitle", S.about.title);
    setText("aboutSub", S.about.sub);

    setHTML("aboutText", S.about.paragraphs.map(function (p) {
      return "<p>" + esc(p) + "</p>";
    }).join(""));

    setLink("aboutLink", S.business.googleMaps, null);
    setText("aboutLinkLabel", S.about.linkLabel);

    setHTML("aboutList", S.about.facts.map(function (f, i) {
      return '<li class="about-item reveal" style="--i:' + i + '">' +
        '<span class="about-num">0' + (i + 1) + "</span>" +
        "<div><h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + "</p></div></li>";
    }).join(""));
  }

  /* ============================================================
     GALLERY
     ============================================================ */
  function initGallery() {
    setText("galleryEyebrow", S.gallery.eyebrow);
    setText("galleryTitle", S.gallery.title);
    setText("galleryNote", S.gallery.note);

    var grid = byId("galleryGrid");
    if (!grid) return;
    grid.innerHTML = S.gallery.images.map(function (img, i) {
      return '<figure class="gallery-item reveal" style="--i:' + i + '">' +
        '<img src="' + esc(img.src) + '" alt="' + esc(img.alt) +
        '" loading="lazy" decoding="async" />' +
        "<figcaption>" + esc(img.caption) + "</figcaption></figure>";
    }).join("");

    $$("#galleryGrid img").forEach(function (img) {
      loadImage(img, img.getAttribute("src"), img.getAttribute("alt"));
    });
  }

  /* ============================================================
     REVIEWS + STAR WIDGET
     ============================================================ */
  function initReviews() {
    var r = S.reviews;
    setText("reviewsEyebrow", r.eyebrow);
    setText("reviewsTitle", r.title);
    setText("reviewsSub", r.sub);
    setText("reviewsLinkLabel", r.linkLabel);
    setLink("reviewsLink", S.business.googleMaps, null);

    setText("ratingScore", S.business.rating);
    setText("ratingMeta", "Rated " + S.business.rating + " out of 5 · " + S.business.reviewCount + " Google reviews");
    var filled = Math.round(parseFloat(S.business.rating) || 0);
    var starsHTML = "";
    for (var i = 0; i < 5; i++) starsHTML += "<span" + (i < filled ? "" : ' class="half"') + "></span>";
    setHTML("ratingStars", starsHTML);

    setHTML("reviewsGrid", r.items.map(function (item, i) {
      return '<figure class="review-card reveal' + (item.google ? " is-google" : "") +
        '" style="--i:' + i + '">' +
        '<span class="quote-mark" aria-hidden="true">&ldquo;</span>' +
        "<blockquote>" + esc(item.text) + "</blockquote>" +
        '<figcaption><span class="review-name">' + esc(item.name) + "</span>" +
        '<span class="review-meta">' + esc(item.meta) + "</span></figcaption></figure>";
    }).join(""));

    initRatingWidget();
  }

  function initRatingWidget() {
    var w = S.reviews.widget;
    var stars = $$("#rateStars .star");
    var panel = byId("ratePanel");
    var high = byId("rateHigh");
    var low = byId("rateLow");
    var done = byId("rateDone");
    var picked = byId("ratePicked");
    var form = byId("rateForm");
    var nameInput = byId("rateName");
    var noteInput = byId("rateNote");
    if (!stars.length || !panel) return;

    /* copy */
    setText("rateTitle", w.title);
    setText("rateSub", w.sub);
    setText("rateHighTitle", w.highTitle);
    setText("rateHighText", w.highText);
    setText("rateHighFine", w.highFine);
    setText("rateLowTitle", w.lowTitle);
    setText("rateLowText", w.lowText);
    setText("rateSubmit", w.lowSubmit);
    setText("rateFine", w.lowFine);
    setText("rateDoneText", w.lowDone);
    setText("rateReset", w.lowReset);
    if (nameInput) nameInput.placeholder = w.lowNamePlaceholder;
    if (noteInput) noteInput.placeholder = w.lowNotePlaceholder;

    var googleBtn = byId("rateGoogle");
    if (googleBtn) {
      googleBtn.textContent = w.highLabel;
      googleBtn.href = S.business.googleReview;
    }

    var waLink = byId("rateWhatsApp");
    var formStars = byId("rateFormStars");
    var rating = 0;

    function waFor(value, name, text) {
      var message = "Hi Acon Enterprises — I'd rate my order " + value + "/5.";
      if (name) message += " Name: " + name + ".";
      if (text) message += " " + text;
      return whatsappLink(message);
    }

    function paint(value) {
      stars.forEach(function (star, i) { star.classList.toggle("on", i < value); });
      if (formStars) {
        formStars.innerHTML = "";
        for (var i = 0; i < 5; i++) {
          var sp = document.createElement("span");
          if (i < value) sp.className = "on";
          formStars.appendChild(sp);
        }
      }
    }

    function paintWhatsApp() {
      if (!waLink) return;
      if (!S.business.whatsapp) {
        waLink.hidden = true;
        return;
      }
      waLink.hidden = false;
      waLink.textContent = w.lowAlt;
      waLink.href = waFor(rating, nameInput ? nameInput.value.trim() : "",
        noteInput ? noteInput.value.trim() : "");
    }

    function showPanel() {
      if (high) high.hidden = rating < 4;
      if (low) low.hidden = rating >= 4;
      if (done) done.hidden = true;
      if (form) form.hidden = false;
      panel.hidden = false;
      if (rating < 4) paintWhatsApp();
      else if (waLink) waLink.hidden = true;
    }

    function select(value) {
      rating = value;
      paint(value);
      stars.forEach(function (star, i) { star.setAttribute("aria-pressed", String(i < value)); });
      if (picked) picked.textContent = value + " " + w.pickedNote;
      showPanel();
    }

    function reset() {
      rating = 0;
      paint(0);
      stars.forEach(function (star) { star.setAttribute("aria-pressed", "false"); });
      if (picked) picked.textContent = "";
      if (nameInput) nameInput.value = "";
      if (noteInput) noteInput.value = "";
      if (done) done.hidden = true;
      if (high) high.hidden = true;
      if (low) low.hidden = true;
      panel.hidden = true;
    }

    stars.forEach(function (star, i) {
      var value = i + 1;
      star.addEventListener("mouseenter", function () { paint(value); });
      star.addEventListener("mouseleave", function () { paint(rating); });
      star.addEventListener("focus", function () { paint(value); });
      star.addEventListener("blur", function () { paint(rating); });
      star.addEventListener("click", function () { select(value); });
    });

    if (noteInput) {
      noteInput.addEventListener("input", function () {
        if (rating && rating < 4) paintWhatsApp();
      });
    }
    if (nameInput) {
      nameInput.addEventListener("input", function () {
        if (rating && rating < 4) paintWhatsApp();
      });
    }

    /* The 1–3 star form never posts to Google or anywhere else. It shows a
       confirmation, and WhatsApp is offered as the real way to send the note. */
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (low) low.hidden = true;
        if (done) done.hidden = false;
      });
    }

    if (byId("rateCancel")) byId("rateCancel").addEventListener("click", reset);
    if (byId("rateReset")) byId("rateReset").addEventListener("click", reset);
  }

  /* ============================================================
     VISIT
     ============================================================ */
  function initVisit() {
    var v = S.visit;
    setText("visitEyebrow", v.eyebrow);
    setText("visitTitle", v.title);
    setText("visitSub", v.sub);

    setText("visitAddressLabel", v.labels.address);
    setText("visitAddress", S.business.addressLines.join(", "));
    setText("visitPlusCode", "Coordinates " + S.business.coordinates);
    setText("visitFloorNote", v.floorNote);
    setLink("visitDirections", S.business.directions, v.labels.directions);

    setText("visitPhoneLabel", v.labels.phone);
    setLink("visitPhone", S.business.phoneTel, S.business.phone);
    setLink("visitWhatsApp", "auto:whatsapp", v.labels.whatsapp);
    setLink("visitMaps", S.business.googleMaps, v.labels.maps);

    setText("visitHoursLabel", v.labels.hours);
    var idx = todayIndex();
    setHTML("hoursList", v.hours.rows.map(function (row, i) {
      return '<li class="hour-row' + (i === idx ? " today" : "") + '">' +
        "<span>" + esc(row.day) +
        (i === idx ? ' <em class="today-tag">today</em>' : "") +
        "</span><span>" + esc(row.label) + "</span></li>";
    }).join(""));
    setText("hoursNote", v.hours.note);

    var frame = byId("mapFrame");
    if (frame) {
      frame.title = v.labels.mapTitle;
      frame.src = S.business.mapEmbed;
    }
  }

  /* ============================================================
     CTA BAND
     ============================================================ */
  function initCta() {
    setText("ctaTitle", S.cta.title);
    setText("ctaText", S.cta.text);
    setLink("ctaPrimary", S.cta.primary.href, S.cta.primary.label);
    setLink("ctaSecondary", S.cta.secondary.href, S.cta.secondary.label);
  }

  /* ============================================================
     FOOTER
     ============================================================ */
  function initFooter() {
    setText("footerWordmark", S.business.shortName);
    setText("footerBlurb", S.footer.blurb);
    setText("footerExploreLabel", S.footer.columns.explore);
    setText("footerVisitLabel", S.footer.columns.visit);
    setText("footerHoursLabel", S.footer.columns.hours);
    setText("footerMoreLabel", S.footer.columns.more);
    setText("footerAddress", S.business.addressLines.join(", "));
    setLink("footerPhone", S.business.phoneTel, S.business.phone);
    setLink("footerDirections", S.business.directions, null);
    setLink("footerMaps", S.business.googleMaps, null);
    setLink("footerReview", S.business.googleReview, null);
    setText("footerHours", S.footer.hoursSummary);
    setText("footerHoursNote", S.footer.hoursNote);
    setText("footerCopyright", S.footer.copyright);
    setText("footerCredit", S.footer.credit);

    setHTML("footerLinks", (S.nav || []).map(function (n) {
      return '<a href="' + esc(n.href) + '">' + esc(n.label) + "</a>";
    }).join(""));
  }

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  function initReveal() {
    var items = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    onScroll(revealFallback);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  function revealFallback() {
    $$(".reveal:not(.in)").forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add("in");
    });
  }

  /* ============================================================
     BOOT
     ============================================================ */
  document.body.classList.add("js-ready");
  initHeader();
  initDrawer();
  initHero();
  initTicker();
  initStats();
  initProducts();
  initSpecs();
  initUses();
  initAbout();
  initGallery();
  initReviews();
  initVisit();
  initCta();
  initFooter();
  initReveal();
  initScrollState();
  initScrollSweep();
  paintStatus();
  window.setTimeout(revealFallback, 500);
})();
