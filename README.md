# Acon Enterprises (PP Sheet Manufacturer) — website

A single-page website for **Acon Enterprises**, a polypropylene (PP) corrugated
sheet manufacturer and supplier at Gandhi Nagar, Rajgarh Colony, Seelampur,
Delhi 110031.

```
acon-enterprises/
├─ index.html              page structure (you rarely need to touch this)
├─ style.css               colours, fonts, spacing, layout
├─ script.js               ★ ALL editable content — text, contact details, images
├─ assets/
│  ├─ images/              photographs used on the site
│  └─ icons/               (empty — the favicon is inline in index.html)
└─ README.md               this file
```

---

## 1. Run the website

Open `index.html` in a browser, or serve the folder:

```bash
cd acon-enterprises
python -m http.server 5173
# then open http://localhost:5173
```

There is no build step and nothing to install. Uploading the folder to GitHub
Pages (or any static host) works as-is, because `index.html` sits in the root.

---

## 2. The one file you edit: `script.js`

Everything you might want to change lives in the `window.SITE = { … }` block at
the top of `script.js`. Change a value once and it updates **everywhere** — the
header, hero, contact section, footer, WhatsApp buttons and floating buttons all
read from the same place.

### Business details that appear in several places

| What to change | Where (in `script.js`) |
| --- | --- |
| Business name | `business.name`, `business.shortName` |
| Address (header, contact, footer) | `business.address` and `business.addressLines` |
| Phone number (every button) | `business.phone` and `business.phoneTel` |
| WhatsApp number | `business.whatsapp` (set to `""` to remove every WhatsApp button) |
| Google listing / directions / map | `business.googleMaps`, `business.directions`, `business.mapEmbed` |
| Google review link (4–5 star path) | `business.googleReview` |
| Google rating shown | `business.rating`, `business.reviewCount` |
| Opening hours | `visit.hours.rows` (plus `footer.hoursSummary`) |

Phone number example — change **both** lines:

```js
phone: "+91 97163 07642",
phoneTel: "tel:+919716307642",   // same number, no spaces, with country code
```

### Text on the page

| Section | Where |
| --- | --- |
| Menu labels | `nav` |
| Hero headline, sub-line, buttons | `hero` |
| The scrolling strip | `ticker` |
| Numbers under the hero | `stats` |
| Product cards | `products.cards` |
| Specification table and chips | `specs.rows`, `specs.chips` |
| "What buyers use it for" | `uses.cards` |
| About paragraphs and facts | `about` |
| Gallery captions | `gallery.images` |
| Review quotes | `reviews.items` |
| Star-widget wording | `reviews.widget` |
| Contact section labels | `visit.labels` |
| Blue call-to-action band | `cta` |
| Footer | `footer` |

---

## 3. Images

All photographs are listed in `gallery.images` (and `hero.image` for the big one
at the top). Each entry has three fields:

```js
{
  src: "assets/images/floor-protection.jpg",
  alt: "Blue corrugated plastic floor protection sheets laid over a polished floor",
  caption: "Floor protection"
}
```

* **Replace a photo** — drop your file into `assets/images/` and change `src`.
* **Add a photo** — copy a whole `{ … }` block and paste it after the last one.
* **Remove a photo** — delete its `{ … }` block. The grid re-flows; no gaps or
  broken-image icons are left behind.
* **Reorder** — move blocks up or down in the list.
* **Alt text** — always describe the picture in `alt`; it is read by screen
  readers and by Google.
* Keep images around 1200–1600 px wide and under ~300 KB so the site stays fast.

The current photographs illustrate the product types supplied. Replace them with
photos of the actual unit and stock when the client supplies them.

---

## 4. Add, remove or reorder sections

Sections are plain blocks in `index.html`, in this order:

```
hero → ticker → stats → products → specs → uses → about → gallery → reviews → visit → cta → footer
```

* **Remove a section** — delete its `<section …> … </section>` block from
  `index.html`, and remove its link from `nav` in `script.js`. Nothing else
  depends on it.
* **Reorder** — cut a `<section>` block and paste it where you want it. Keep the
  `id` (for example `id="specs"`) so the menu link still works.
* **Duplicate** — copy a block, give it a new `id`, and point a new `nav` entry
  at `#that-id`.
* **Add a new product card** — add a `{ num, title, text, source }` object to
  `products.cards`. Numbering, layout and animation are automatic.

---

## 5. Colours, fonts, spacing and animation

Open `style.css` — everything global is in the `:root` block at the top.

```css
--ink: #0c0f12;      /* dark sections and text */
--paper: #f7f5f0;    /* light background */
--blue: #1546c9;     /* buttons, links, accents */
--amber: #d9921c;    /* rating badge, selected stars */
--ff-display: "Archivo", …;       /* headings */
--ff-body: "Inter Tight", …;      /* paragraphs */
--ff-mono: "IBM Plex Mono", …;    /* small labels and specs */
--max: 1240px;                    /* content width */
--section-y: clamp(62px, 8vw, 118px);  /* space between sections */
--radius: 3px;                    /* corner roundness */
```

Changing `--blue` once re-colours every button, link, hover state and the
call-to-action band. To change a typeface, edit the `--ff-*` values **and** the
Google Fonts `<link>` in `index.html`.

Animations (scroll reveal, counters, marquee, hover lifts) are all CSS-driven and
automatically switch off for visitors who have "reduce motion" enabled.

---

## 6. The star review widget

* **4 or 5 stars** → a button opens the business's real Google review form
  (`business.googleReview`) in a new tab.
* **1, 2 or 3 stars** → a Google-style feedback form appears. It does **not**
  publish anything to Google; it shows a thank-you and offers a WhatsApp link so
  the note can actually reach the team.

The Google review URL is built from the listing's place ID
(`ChIJ5ZeMzdH9DDkR2HlnGCqf9T4`). If the owner supplies the official "share review
form" link from their Google Business Profile, paste it into
`business.googleReview` and both the widget and the footer link update.

---

## 7. Business information — where it came from

Read on **26 November 2026**.

### Verified

| Detail | Value | Source |
| --- | --- | --- |
| Name | Acon Enterprises (PP Sheet Manufacturer) | Google Maps listing |
| Category | Plastic products supplier / PP sheet manufacturer | Google Maps listing |
| Address | 2nd floor, X1256, Gandhi Nagar, Rajgarh Colony, Seelampur, Delhi 110031 | Google Maps listing |
| Phone | +91 97163 07642 | Google Maps listing, LinkedIn |
| Hours | Open 24 hours, all seven days | Google Maps listing |
| Rating | 4.8 out of 5 from 30 reviews | Google Maps listing |
| Coordinates | 28.6605939, 77.272206 | Google Maps listing |
| Established | 2020 | IndiaMART, LinkedIn |
| Product range | PP corrugated sheets, floor protection sheets, bubble sheets, PP boxes, layer pads, boxes with partitions, packaging rolls, surface protection tape, screws | IndiaMART company page, LinkedIn |
| Thicknesses | 3 mm, 4 mm, 8 mm, 3-ply | IndiaMART product listings |
| Sheet sizes | 1220 × 2440 mm, 1.2 × 1.8 m, 1.2 × 2.4 m | IndiaMART product listings |
| Colours | Blue, white, multicolour | IndiaMART product listings |
| Listed uses | Roofing protection, floor protection, chemical-industry lining | IndiaMART product listings |

### Needs confirmation from the owner

* WhatsApp on the listed mobile number (the site assumes yes).
* Colours and sizes actually held in stock today.
* Whether custom sizes are cut to order.
* Email address, Instagram/other social profiles, delivery area.
* The official Google "share review form" link.
* Real customer photographs of the unit and stock.

### Deliberately not published

* **Prices** — rates are quoted on the phone. Trade-listing prices change often
  and would be wrong within weeks.
* **Minimum order quantities, certifications, awards, project names.**
* **Owner names** — not confirmed for publication.
* **Fabricated reviews** — the three quotes tagged "Google" are from the public
  listing. The three notes tagged "Customer" (Amit Jain, Sandeep Yadav, Mohd.
  Irfan) are **sample content written in Hinglish for layout purposes**. They are
  not real customers. Replace them with genuine feedback, or delete those three
  blocks from `reviews.items`, before publishing.

### Links used

* Google listing — <https://maps.app.goo.gl/L3tG6NC4pWy1mfv77>
* Directions — built from the listing coordinates
* Map embed — built from the listing coordinates
* Google review form — built from the listing place ID

---

## 8. What is functional

* Mobile menu, sticky header, scroll-spy navigation, smooth scrolling.
* Every phone button opens the dialler; every WhatsApp button opens a chat with
  a pre-filled message; every directions button opens Google Maps.
* Star widget: 4–5 stars → Google review form; 1–3 stars → feedback form.
* Embedded Google map, opening-hours list with today highlighted, live
  open/closed status.
* Scroll-reveal animations, animated counters, reduced-motion support.

There is **no enquiry form** — the business has no confirmed submission
destination, so the site sends people to the phone and WhatsApp instead.
