/* Shared renderer for System pages and the Freebies grid.
   Reads RESOURCES from resources.js. No build step. */

(function () {
  var CREAM = "#FAF6F1";
  var SAGE = "#7A8C6E";
  var INK = "#2C2416";
  var BODY = "#4A3F35";
  var OAT = "#F0EBE4";

  var SYSTEM_META = {
    "save-time-daily": {
      title: "Save Time Daily",
      intro: "Simple shortcuts and practical systems that save time, reduce mental load and make busy family days easier.",
      thingsHeading: "Things That Save Me Time"
    },
    "better-routines": {
      title: "Better Routines",
      intro: "Simple routines and visual systems that help kids know what comes next — with less reminding from you.",
      thingsHeading: "Things That Help Our Routines"
    },
    "calm-after-school": {
      title: "Calm After-School Chaos",
      intro: "Teacher-informed transition systems that help kids decompress so afternoons and evenings feel calmer.",
      thingsHeading: "Things That Help"
    },
    "home-organization": {
      title: "Home Organization",
      intro: "Practical organization systems for real family life — easier to use, easier to maintain and easier to reset.",
      thingsHeading: "Organization Finds I Actually Use"
    },
    "school-readiness": {
      title: "School Readiness",
      intro: "Practical ways to build the confidence, independence and everyday skills children need for school.",
      thingsHeading: "Things That Help"
    },
    "mom-reset": {
      title: "Mom Reset Systems",
      intro: "Simple reset and planning systems that help you clear the mental clutter and feel ready for the week ahead.",
      thingsHeading: "Things That Help"
    }
  };

  var IDEAS_TYPES = ["Article", "Activity", "Quick Tip"];
  var THINGS_TYPES = ["Amazon Find", "Product"];
  var MORE_TYPES = ["Guide", "Video"];

  function bySort(a, b) {
    return (a.sortOrder || 0) - (b.sortOrder || 0);
  }

  function published() {
    return (typeof RESOURCES === "undefined" ? [] : RESOURCES).filter(function (r) {
      return r.published;
    });
  }

  function inSystem(list, slug) {
    return list.filter(function (r) {
      if (r.primarySystem === slug) return true;
      return (r.systems || []).indexOf(slug) !== -1;
    }).sort(bySort);
  }

  function defaultCta(r) {
    if (r.ctaLabel) return r.ctaLabel;
    switch (r.resourceType) {
      case "Free Printable": return "Download Free";
      case "Article":
      case "Quick Tip": return "Read More";
      case "Activity": return "Try This";
      case "Guide": return "View Guide";
      case "Amazon Find":
      case "Product": return "Shop the Find";
      default: return "View Resource";
    }
  }

  function cardHref(r) {
    if (r.resourceType === "Amazon Find" || r.resourceType === "Product") {
      return r.affiliateURL || r.destinationURL || "#";
    }
    return r.destinationURL || "#";
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCard(r) {
    var href = cardHref(r);
    var isShop = r.resourceType === "Amazon Find" || r.resourceType === "Product";
    var extra = isShop ? ' target="_blank" rel="noopener sponsored"' : "";
    var badge = r.priceType === "free" ? '<span class="res-badge">Free</span>' : "";
    var img = r.image
      ? '<img class="card-thumb" src="' + escapeHtml(r.image) + '" alt="' + escapeHtml(r.title) + '" />'
      : '<div class="card-thumb card-thumb-empty"></div>';
    return (
      '<article class="guide-card res-card">' +
        img +
        '<div class="guide-card-body">' +
          '<div class="res-meta"><span class="res-type">' + escapeHtml(r.resourceType) + "</span>" + badge + "</div>" +
          "<h3>" + escapeHtml(r.title) + "</h3>" +
          "<p>" + escapeHtml(r.shortDescription) + "</p>" +
          '<a class="card-btn" href="' + escapeHtml(href) + '"' + extra + ">" + escapeHtml(defaultCta(r)) + "</a>" +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid(items) {
    if (!items.length) return "";
    return '<div class="guides-grid res-grid">' + items.map(renderCard).join("") + "</div>";
  }

  function renderSection(title, items, extraTop) {
    if (!items.length) return "";
    return (
      '<section class="res-section">' +
        (extraTop || "") +
        "<h2>" + escapeHtml(title) + "</h2>" +
        renderGrid(items) +
      "</section>"
    );
  }

  function navHtml(active) {
    function link(href, label, key) {
      var cls = key === active ? ' class="active"' : "";
      return "<li><a href=\"" + href + "\"" + cls + ">" + label + "</a></li>";
    }
    return (
      '<nav>' +
        '<a href="index.html" class="nav-logo">The Teacher Mom <span>Edit</span></a>' +
        "<ul class=\"nav-links\">" +
          link("about.html", "About") +
          link("index.html#systems", "Systems") +
          link("quiet-truths.html", "Quiet Truths", "quiet-truths") +
          link("index.html#shop", "Shop") +
          link("favorites.html", "Favorites") +
          link("blog/index.html", "Blog") +
          link("freebies.html", "Freebies", "freebies") +
          '<li><a href="freebies.html" class="nav-cta">Free Guide</a></li>' +
        "</ul>" +
      "</nav>"
    );
  }

  function footerHtml() {
    return (
      "<footer>" +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<span class="footer-logo">The Teacher Mom <span>Edit</span></span>' +
            "<p>Calm systems for busy moms. Teacher-approved tools, mom-tested routines, and honest product recommendations — because your home deserves to breathe again.</p>" +
          "</div>" +
          '<div class="footer-col"><h4>Explore</h4><ul>' +
            '<li><a href="index.html">Home</a></li>' +
            '<li><a href="about.html">About</a></li>' +
            '<li><a href="blog/index.html">Blog</a></li>' +
            '<li><a href="freebies.html">Freebies</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h4>Systems</h4><ul>' +
            '<li><a href="save-time-daily.html">Save Time Daily</a></li>' +
            '<li><a href="better-routines.html">Better Routines</a></li>' +
            '<li><a href="calm-after-school.html">Calm After-School</a></li>' +
            '<li><a href="home-organization.html">Home Organization</a></li>' +
            '<li><a href="school-readiness.html">School Readiness</a></li>' +
            '<li><a href="mom-reset.html">Mom Reset</a></li>' +
          "</ul></div>" +
          '<div class="footer-col"><h4>Legal</h4><ul>' +
            '<li><a href="disclosure.html">Affiliate Disclosure</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-bottom">' +
          "<span>© 2026 The Teacher Mom Edit. Made with love and a strong cup of tea.</span>" +
          '<div class="footer-legal"><a href="disclosure.html">Full disclosure</a></div>' +
        "</div>" +
      "</footer>"
    );
  }

  function attachKitSource(slug) {
    var tries = 0;
    var timer = setInterval(function () {
      var form = document.querySelector('form.formkit-form, form[action*="kit.com"], form[action*="convertkit.com"]');
      if (form && !form.querySelector('[name="fields[source_system]"]')) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "fields[source_system]";
        input.value = slug;
        form.appendChild(input);
      }
      if (form || ++tries > 40) clearInterval(timer);
    }, 250);
  }

  function pageCss() {
    return (
      "*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}" +
      "body{background:" + CREAM + ";color:" + BODY + ";font-family:'Jost',sans-serif;line-height:1.6;}" +
      "nav{position:sticky;top:0;z-index:100;background:" + CREAM + ";border-bottom:1px solid rgba(44,36,22,0.1);display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:64px;}" +
      ".nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:" + INK + ";text-decoration:none;}" +
      ".nav-logo span{color:" + SAGE + ";font-style:italic;}" +
      ".nav-links{display:flex;align-items:center;gap:36px;list-style:none;}" +
      ".nav-links a{font-size:0.72rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:" + INK + ";text-decoration:none;}" +
      ".nav-links a:hover,.nav-links a.active{color:" + SAGE + ";}" +
      ".nav-cta{background:" + INK + ";color:#fff !important;padding:10px 20px;border-radius:100px;}" +
      ".page-header{padding:72px 48px 32px;max-width:760px;margin:0 auto;text-align:center;}" +
      ".page-tag{font-size:0.7rem;font-weight:500;letter-spacing:0.16em;text-transform:uppercase;color:" + SAGE + ";display:block;margin-bottom:16px;}" +
      ".page-header h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.4rem,5vw,3.6rem);font-weight:600;line-height:1.15;color:" + INK + ";margin-bottom:16px;}" +
      ".page-header p{font-size:1rem;color:" + BODY + ";max-width:520px;margin:0 auto;}" +
      ".res-section{padding:24px 48px 48px;max-width:1100px;margin:0 auto;}" +
      ".res-section h2{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:600;color:" + INK + ";margin-bottom:24px;}" +
      ".guides-grid,.res-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}" +
      ".guide-card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(44,36,22,0.07);display:flex;flex-direction:column;}" +
      ".card-thumb{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:" + OAT + ";}" +
      ".guide-card-body{padding:18px 20px 20px;display:flex;flex-direction:column;flex:1;}" +
      ".res-meta{display:flex;align-items:center;gap:8px;margin-bottom:8px;}" +
      ".res-type{font-size:0.68rem;letter-spacing:0.12em;text-transform:uppercase;color:" + SAGE + ";font-weight:500;}" +
      ".res-badge{font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;background:" + OAT + ";color:" + BODY + ";padding:3px 8px;border-radius:100px;font-weight:500;}" +
      ".guide-card-body h3{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:600;color:" + INK + ";margin-bottom:6px;line-height:1.3;}" +
      ".guide-card-body p{font-size:0.82rem;color:" + BODY + ";line-height:1.5;margin-bottom:14px;flex:1;}" +
      ".card-btn{display:block;background:" + SAGE + ";color:#fff;font-family:'Jost',sans-serif;font-size:0.75rem;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;padding:10px 18px;border-radius:100px;border:none;text-decoration:none;text-align:center;}" +
      ".card-btn:hover{background:" + INK + ";}" +
      ".affiliate-note{font-family:'Jost',sans-serif;font-weight:400;font-size:0.82rem;color:" + BODY + ";margin:0 0 20px;max-width:720px;line-height:1.6;}" +
      ".affiliate-note a{color:" + SAGE + ";}" +
      ".empty-note{text-align:center;padding:12px 48px 8px;max-width:640px;margin:0 auto;color:" + BODY + ";}" +
      ".res-kit{padding:24px 48px 96px;max-width:560px;margin:0 auto;}" +
      "footer{background:" + INK + ";color:rgba(255,255,255,0.75);padding:64px 48px 32px;}" +
      ".footer-top{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:48px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,0.1);}" +
      ".footer-logo{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:12px;display:block;}" +
      ".footer-logo span{color:" + SAGE + ";font-style:italic;}" +
      ".footer-brand p{font-size:0.82rem;line-height:1.7;color:rgba(255,255,255,0.6);max-width:240px;}" +
      ".footer-col h4{font-size:0.68rem;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.45);margin-bottom:16px;}" +
      ".footer-col ul{list-style:none;}" +
      ".footer-col ul li{margin-bottom:10px;}" +
      ".footer-col a{color:rgba(255,255,255,0.7);text-decoration:none;font-size:0.85rem;}" +
      ".footer-bottom{display:flex;align-items:center;justify-content:space-between;padding-top:28px;font-size:0.78rem;color:rgba(255,255,255,0.4);flex-wrap:wrap;gap:12px;}" +
      ".footer-bottom a{color:rgba(255,255,255,0.4);text-decoration:none;}" +
      "@media(max-width:900px){.guides-grid,.res-grid{grid-template-columns:repeat(2,1fr);}}" +
      "@media(max-width:768px){nav{padding:0 20px;}.nav-links{gap:16px;}.nav-links li:not(:last-child):not(:nth-last-child(2)){display:none;}.page-header,.res-section,.res-kit,.empty-note{padding-left:24px;padding-right:24px;}footer{padding:48px 24px 24px;}.footer-top{grid-template-columns:1fr 1fr;}}" +
      "@media(max-width:640px){.guides-grid,.res-grid{grid-template-columns:1fr;}.footer-top{grid-template-columns:1fr;}}"
    );
  }

  function renderSystemPage(slug) {
    var meta = SYSTEM_META[slug];
    if (!meta) return;
    var style = document.createElement("style");
    style.textContent = pageCss();
    document.head.appendChild(style);

    var all = inSystem(published(), slug);
    var startHere = all.filter(function (r) { return r.featured; });
    var freeTools = all.filter(function (r) { return r.resourceType === "Free Printable"; });
    var ideas = all.filter(function (r) { return IDEAS_TYPES.indexOf(r.resourceType) !== -1; });
    var things = all.filter(function (r) { return THINGS_TYPES.indexOf(r.resourceType) !== -1; });
    var more = all.filter(function (r) {
      return MORE_TYPES.indexOf(r.resourceType) !== -1 || (r.priceType === "paid" && THINGS_TYPES.indexOf(r.resourceType) === -1 && r.resourceType !== "Free Printable" && IDEAS_TYPES.indexOf(r.resourceType) === -1);
    });

    var disclosure =
      '<p class="affiliate-note">Some links below are affiliate links. If you buy through them, I may earn a small commission at no extra cost to you. I only share things I actually use in my home or classroom. <a href="/disclosure.html">Full disclosure</a></p>';

    document.body.insertAdjacentHTML(
      "afterbegin",
      navHtml(slug) +
        '<header class="page-header">' +
          '<span class="page-tag">A System for Mom Life</span>' +
          "<h1>" + escapeHtml(meta.title) + "</h1>" +
          "<p>" + escapeHtml(meta.intro) + "</p>" +
        "</header>" +
        '<main id="system-main"></main>' +
        footerHtml()
    );

    var main = document.getElementById("system-main");
    var shown = {};
    function take(list) {
      return list.filter(function (r) {
        if (shown[r.id]) return false;
        shown[r.id] = true;
        return true;
      });
    }

    var body = "";
    body += renderSection("Start Here", take(startHere));
    body += renderSection("Free Tools", take(freeTools));
    body += renderSection("Ideas + Strategies", take(ideas));
    var thingsLeft = take(things);
    body += renderSection(meta.thingsHeading, thingsLeft, thingsLeft.length ? disclosure : "");
    body += renderSection("More Resources", take(more));

    if (!all.length) {
      body += '<p class="empty-note">I\'m building this section right now. Join the list and I\'ll send you the first resources as soon as they\'re ready.</p>';
    }

    body += '<section class="res-kit" id="email-capture"></section>';
    main.innerHTML = body;

    var kitWrap = document.getElementById("email-capture");
    var hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "fields[source_system]";
    hidden.value = slug;
    kitWrap.appendChild(hidden);
    var kitScript = document.createElement("script");
    kitScript.async = true;
    kitScript.setAttribute("data-uid", "ebf0ec6d80");
    kitScript.src = "https://teachermomedit.kit.com/ebf0ec6d80/index.js";
    kitWrap.appendChild(kitScript);
    attachKitSource(slug);
  }

  function renderFreebiesGrid() {
    var grid = document.querySelector(".guides-grid");
    if (!grid) return;
    var items = published().filter(function (r) {
      return r.resourceType === "Free Printable";
    }).sort(bySort);

    grid.innerHTML = "";
    items.forEach(function (r) {
      var preview = r.previewImage || r.image;
      var card = document.createElement("div");
      card.className = "guide-card";
      card.innerHTML =
        '<img class="card-thumb" src="' + escapeHtml(r.image) + '" alt="' + escapeHtml(r.title) + '" />' +
        '<div class="guide-card-body">' +
          "<h3>" + escapeHtml(r.title) + "</h3>" +
          "<p>" + escapeHtml(r.shortDescription) + "</p>" +
          '<button type="button" class="card-btn">Download Free</button>' +
        "</div>";
      function open() {
        if (typeof openPreview === "function") {
          openPreview(preview, r.title, r.shortDescription);
        }
      }
      card.querySelector(".card-thumb").addEventListener("click", open);
      card.querySelector(".card-btn").addEventListener("click", open);
      grid.appendChild(card);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.CURRENT_SYSTEM) {
      renderSystemPage(window.CURRENT_SYSTEM);
    }
    if (window.CURRENT_PAGE === "freebies") {
      renderFreebiesGrid();
    }
  });
})();
