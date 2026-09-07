/* Quiet Truths — curated swipeable collections.
   Independent of resources.js.

   To add a collection or quote, edit quietTruthCollections only.
   Do not change the rendering functions below.

   quotes[].text:
   - Wrap a word in *asterisks* to italicize it.
   - Use a blank line (\n\n) to start a new paragraph. */

const quietTruthCollections = [
  {
    id: "calm-regulation",
    label: "CALM + REGULATION",
    coverTitle: "10 Things to Remember\nWhen Your Child\nIs Having a Hard Time",
    background: "#5C6B4A",
    textColor: "#FAF6F1",
    closingLine: "If afternoons are the hardest part of your day, this one is for you.",
    closingLinkText: "The After School Reset Guide",
    closingUrl: "https://teachermomedit.kit.com/6ec4655d12",
    quotes: [
      {
        id: "cr-1",
        text: "Children do not always need more *activities*.\n\nSometimes they need a *slower* home, a *calmer* adult, and one moment where they feel *noticed*."
      },
      {
        id: "cr-2",
        text: "Before children can listen well, focus well, or learn well, they need to feel *calm* enough to be there."
      },
      {
        id: "cr-3",
        text: "A *calm* morning changes more than the schedule.\n\nIt changes how a child carries themselves all day."
      },
      {
        id: "cr-4",
        text: "Behaviour is communication.\n\nYour child is not giving you a hard time. They are *having* a hard time."
      },
      {
        id: "cr-5",
        text: "Your *calm* is not a small thing.\n\nIt is the *intervention*."
      },
      {
        id: "cr-6",
        text: "A child who is never allowed to *finish* a feeling learns to bury it instead."
      },
      {
        id: "cr-7",
        text: "You are their *frontal lobe* until theirs grows in."
      },
      {
        id: "cr-8",
        text: "\"You're fine\" ends the conversation.\n\n\"I can see that felt *big*\" continues it."
      },
      {
        id: "cr-9",
        text: "What a child needs after a hard day is not a *report*.\n\nIt is a *seat* beside you."
      },
      {
        id: "cr-10",
        text: "Children *borrow* our calm before they can build their own."
      }
    ]
  },
  {
    id: "connection-belonging",
    label: "CONNECTION + BELONGING",
    coverTitle: "9 Reminders About\nThe Power of\nConnection",
    background: "#7A6558",
    textColor: "#FAF6F1",
    closingLine: "Five minutes at bedtime does more than most of the day.",
    closingLinkText: "The Bedtime Connection Ritual Guide",
    closingUrl: "https://teachermomedit.kit.com/0c31c858f7",
    quotes: [
      { id: "cb-1", text: "Children *open up* more when they feel less *pressure* to perform." },
      { id: "cb-2", text: "After school, *connection* first.\n\nQuestions later." },
      { id: "cb-3", text: "Children fall apart in front of the person they trust most not to *leave*." },
      { id: "cb-4", text: "Children know the difference between being *loved* and being *enjoyed*." },
      { id: "cb-5", text: "A child who feels *liked* will try harder than a child who only feels managed." },
      { id: "cb-6", text: "Children who leave home feeling *noticed* walk differently all day." },
      { id: "cb-7", text: "Two minutes of *full* attention does more than an hour of half attention." },
      { id: "cb-8", text: "A child who is listened to becomes a child who *listens*." },
      { id: "cb-9", text: "Say one true thing about *who they are* — not what they did." }
    ]
  },
  {
    id: "confidence-growth",
    label: "CONFIDENCE + GROWTH",
    coverTitle: "7 Things That Build\nReal Confidence\nIn Kids",
    background: "#5F6B45",
    textColor: "#FAF6F1",
    closingLine: "Frustration is a skill, and it can be practised.",
    closingLinkText: "The Frustration Tolerance Activity Guide",
    closingUrl: "https://teachermomedit.kit.com/f3dff0fac1",
    quotes: [
      { id: "cg-1", text: "A child who feels *safe* making *mistakes* will learn faster than a child who feels *pressure* to get it right." },
      { id: "cg-2", text: "\"You're so smart\" teaches performance.\n\n\"You worked hard at that\" teaches *persistence*." },
      { id: "cg-3", text: "\"I don't know\" closes a door.\n\n\"I don't know *yet*\" leaves it open." },
      { id: "cg-4", text: "Wait a beat before you rescue.\n\nThat pause says: *I believe you can.*" },
      { id: "cg-5", text: "Say your mistake out loud.\n\nName it calmly.\n\nMove on.\n\nThat is the *model* they keep." },
      { id: "cg-6", text: "Struggle is not a sign that a child is not *capable*.\n\nIt is a sign they are *learning*." },
      { id: "cg-7", text: "Consistency feels *uncomfortable* long before it feels easy." }
    ]
  },
  {
    id: "routines-independence",
    label: "ROUTINES + INDEPENDENCE",
    coverTitle: "6 Things That Help\nChildren Become\nMore Independent",
    background: "#6E5F4E",
    textColor: "#FAF6F1",
    closingLine: "A calmer morning is mostly a matter of sequence.",
    closingLinkText: "The Calm Morning Checklist",
    closingUrl: "https://teachermomedit.kit.com/5191e32fdb",
    quotes: [
      { id: "ri-1", text: "Predictability, not perfection.\n\nThat sameness is what a child calls *safety*." },
      { id: "ri-2", text: "Chores are not punishment.\n\nThey are the earliest form of *independence*." },
      { id: "ri-3", text: "Small, safe surprises at home build a child who can handle a *changed* plan at school." },
      { id: "ri-4", text: "Routines hold the memory so a tired brain does not have to." },
      { id: "ri-5", text: "A child who has practised being away from you learns something important:\n\n*you come back*." },
      { id: "ri-6", text: "Compromise at home becomes cooperation at *school*." }
    ]
  },
  {
    id: "words-communication",
    label: "WORDS + COMMUNICATION",
    coverTitle: "5 Things Your Child\nNeeds to Hear\nMore Often",
    background: "#55685C",
    textColor: "#FAF6F1",
    closingLine: "Small swaps in everyday language, printed and ready.",
    closingLinkText: "The Growth Mindset Phrases Cheat Sheet",
    closingUrl: "https://teachermomedit.kit.com/8d8c768600",
    quotes: [
      { id: "wc-1", text: "The *words* we use at home often become the *voice* our children hear at school." },
      { id: "wc-2", text: "Children learn the words they hear.\n\nGive them *good* ones." },
      { id: "wc-3", text: "The question is not:\n\n\"why are they doing this to me.\"\n\nIt is:\n\n\"what are they *telling* me.\"" },
      { id: "wc-4", text: "Ask a smaller question.\n\nA small door is easier to open than a *big* one." },
      { id: "wc-5", text: "Some children go quiet long before they fall behind.\n\nQuiet is *information*." }
    ]
  },
  {
    id: "learning-curiosity",
    label: "LEARNING + CURIOSITY",
    coverTitle: "8 Things We Forget\nAbout How Children\nReally Learn",
    background: "#4E6354",
    textColor: "#FAF6F1",
    closingLine: "Learning that looks nothing like a worksheet.",
    closingLinkText: "The Screen-Free Family Activity List",
    closingUrl: "https://teachermomedit.kit.com/fcf272c0c3",
    quotes: [
      { id: "lc-1", text: "The child who asks \"what happens next?\" is already becoming a *reader*." },
      { id: "lc-2", text: "Movement is not the enemy of focus.\n\nIt is what *makes* focus possible." },
      { id: "lc-3", text: "Reading aloud is never wasted time.\n\nNot even on the nights it feels *pointless*." },
      { id: "lc-4", text: "When a child teaches it back to you, they *own* it." },
      { id: "lc-5", text: "Play with rules is listening practice in *disguise*." },
      { id: "lc-6", text: "The most powerful thing you can give your child's learning is your own *curiosity*." },
      { id: "lc-7", text: "Boredom is not a problem to solve.\n\nIt is where *attention* is built." },
      { id: "lc-8", text: "Time outside is not time away from learning.\n\nIt *is* learning." }
    ]
  },
  {
    id: "school-home",
    label: "SCHOOL + HOME",
    coverTitle: "5 Things That Matter\nMore Than Being\n\"Ready\" for School",
    background: "#5E5648",
    textColor: "#FAF6F1",
    closingLine: "What educators actually look for before September.",
    closingLinkText: "The Kindergarten Readiness Checklist",
    closingUrl: "https://teachermomedit.kit.com/ba8c2149af",
    quotes: [
      { id: "sh-1", text: "*Emotional readiness* matters *more* than knowing every letter, number, or worksheet answer." },
      { id: "sh-2", text: "Every \"don't forget\" is a small worry handed to your child before the bell *rings*." },
      { id: "sh-3", text: "The kindness practised behind closed doors is the kindness they carry into every *classroom*." },
      { id: "sh-4", text: "Keep the teacher an *ally*, never a threat." },
      { id: "sh-5", text: "You are your child's first and most *important* teacher." }
    ]
  }
];

(function () {
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatItalic(str) {
    return escapeHtml(str).replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function formatMultiline(str) {
    return formatItalic(str)
      .split(/\n\n/)
      .map(function (para) {
        return "<p>" + para.replace(/\n/g, "<br>") + "</p>";
      })
      .join("");
  }

  function quoteSizeClass(text) {
    var n = String(text || "").replace(/\*/g, "").length;
    if (n < 90) return "qt-quote-lg";
    if (n < 160) return "qt-quote-md";
    return "qt-quote-sm";
  }

  function cardStyle(collection) {
    return ' style="background:' + escapeHtml(collection.background) + ";color:" + escapeHtml(collection.textColor) + ';"';
  }

  function renderCoverCard(collection) {
    return (
      '<article class="qt-slide qt-cover"' + cardStyle(collection) + ">" +
        '<div class="qt-slide-inner">' +
          '<span class="qt-label">' + escapeHtml(collection.label) + "</span>" +
          '<h3 class="qt-cover-title">' + formatItalic(collection.coverTitle).replace(/\n/g, "<br>") + "</h3>" +
        "</div>" +
      "</article>"
    );
  }

  function renderQuoteCard(quote, collection) {
    return (
      '<article class="qt-slide qt-quote ' + quoteSizeClass(quote.text) + '"' + cardStyle(collection) + ">" +
        '<div class="qt-slide-inner">' +
          '<div class="qt-quote-text">' + formatMultiline(quote.text) + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderClosingCard(collection) {
    return (
      '<article class="qt-slide qt-closing"' + cardStyle(collection) + ">" +
        '<div class="qt-slide-inner">' +
          '<p class="qt-closing-line">' + formatItalic(collection.closingLine) + "</p>" +
          '<a class="qt-closing-link" href="' + escapeHtml(collection.closingUrl) + '" target="_blank" rel="noopener">' +
            escapeHtml(collection.closingLinkText) + " →" +
          "</a>" +
        "</div>" +
      "</article>"
    );
  }

  function renderDots(totalSlides) {
    var dots = "";
    var i;
    for (i = 0; i < totalSlides; i++) {
      dots +=
        '<button class="qt-dot' + (i === 0 ? " is-active" : "") + '" type="button" data-index="' + i + '"' +
          ' aria-label="Go to slide ' + (i + 1) + ' of ' + totalSlides + '"' +
          (i === 0 ? ' aria-current="true"' : "") +
        "></button>";
    }
    return (
      '<div class="qt-dots" role="tablist" aria-label="Slides">' +
        dots +
      "</div>"
    );
  }

  function renderNavigation() {
    return (
      '<div class="qt-controls">' +
        '<button class="qt-arrow qt-prev" type="button" aria-label="Previous slide">←</button>' +
        '<button class="qt-arrow qt-next" type="button" aria-label="Next slide">→</button>' +
      "</div>"
    );
  }

  function renderCarousel(collection) {
    var slides = [renderCoverCard(collection)]
      .concat((collection.quotes || []).map(function (quote) {
        return renderQuoteCard(quote, collection);
      }))
      .concat([renderClosingCard(collection)]);

    return (
      '<div class="qt-carousel" data-collection="' + escapeHtml(collection.id) + '">' +
        '<div class="qt-viewport">' +
          '<div class="qt-track" tabindex="0" role="region" aria-label="' + escapeHtml(collection.label) + '">' +
            slides.join("") +
          "</div>" +
          renderDots(slides.length) +
        "</div>" +
        renderNavigation() +
      "</div>"
    );
  }

  function renderGridCard(collection) {
    return (
      '<article class="qt-grid-item">' +
        '<p class="qt-grid-cat">' + escapeHtml(collection.label) + "</p>" +
        '<button type="button" class="qt-grid-card" data-id="' + escapeHtml(collection.id) + '" aria-label="' + escapeHtml(collection.label) + '"' + cardStyle(collection) + ">" +
          '<span class="qt-grid-title">' + formatItalic(collection.coverTitle).replace(/\n/g, "<br>") + "</span>" +
          '<span class="qt-cover-arrow" aria-hidden="true">→</span>' +
        "</button>" +
      "</article>"
    );
  }

  function renderGrid() {
    return (
      '<div class="qt-grid">' +
        quietTruthCollections.map(renderGridCard).join("") +
      "</div>"
    );
  }

  function renderOverlay() {
    return (
      '<div class="qt-overlay" id="qt-overlay" hidden>' +
        '<div class="qt-overlay-inner">' +
          '<button type="button" class="qt-overlay-close" aria-label="Close collection">✕</button>' +
          '<div class="qt-overlay-stage"></div>' +
        "</div>" +
      "</div>"
    );
  }

  function renderIntro() {
    return (
      '<header class="qt-intro">' +
        "<h1>Quiet Truths</h1>" +
        "<p>Small reminders about childhood, connection, learning, and the moments that matter.</p>" +
      "</header>"
    );
  }

  function slideStep(track) {
    var slide = track.querySelector(".qt-slide");
    if (!slide) return 0;
    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap) || 0;
    return slide.getBoundingClientRect().width + gap;
  }

  function currentIndex(track) {
    var step = slideStep(track);
    if (!step) return 0;
    return Math.max(0, Math.round(track.scrollLeft / step));
  }

  function bindCarousel(carousel) {
    var track = carousel.querySelector(".qt-track");
    var prev = carousel.querySelector(".qt-prev");
    var next = carousel.querySelector(".qt-next");
    var dots = carousel.querySelectorAll(".qt-dot");
    var slides = carousel.querySelectorAll(".qt-slide");
    var total = slides.length;
    var reduced = prefersReducedMotion();

    function update() {
      var index = Math.min(currentIndex(track), total - 1);
      if (prev) prev.disabled = index <= 0;
      if (next) next.disabled = index >= total - 1;
      Array.prototype.forEach.call(dots, function (dot, i) {
        var active = i === index;
        dot.classList.toggle("is-active", active);
        if (active) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    }

    function goTo(index) {
      var step = slideStep(track);
      track.scrollTo({
        left: Math.max(0, Math.min(index, total - 1)) * step,
        behavior: reduced ? "auto" : "smooth"
      });
    }

    function go(dir) {
      goTo(currentIndex(track) + dir);
    }

    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });
    Array.prototype.forEach.call(dots, function (dot) {
      dot.addEventListener("click", function () {
        goTo(parseInt(dot.getAttribute("data-index"), 10) || 0);
      });
    });

    track.addEventListener("scroll", update, { passive: true });
    track.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
    });

    window.addEventListener("resize", update);
    update();
  }

  function closeOverlay() {
    var overlay = document.getElementById("qt-overlay");
    if (!overlay) return;
    overlay.hidden = true;
    overlay.querySelector(".qt-overlay-stage").innerHTML = "";
    document.body.style.overflow = "";
  }

  function openCollection(id) {
    var collection = null;
    quietTruthCollections.forEach(function (item) {
      if (item.id === id) collection = item;
    });
    if (!collection) return;

    var overlay = document.getElementById("qt-overlay");
    var stage = overlay.querySelector(".qt-overlay-stage");
    stage.innerHTML = renderCarousel(collection);
    bindCarousel(stage.querySelector(".qt-carousel"));
    overlay.hidden = false;
    document.body.style.overflow = "hidden";

    var track = stage.querySelector(".qt-track");
    if (track) track.focus();
  }

  function bindGrid(root) {
    root.querySelector(".qt-grid").addEventListener("click", function (event) {
      var card = event.target.closest(".qt-grid-card");
      if (!card) return;
      openCollection(card.getAttribute("data-id"));
    });

    var overlay = document.getElementById("qt-overlay");
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeOverlay();
    });
    overlay.querySelector(".qt-overlay-close").addEventListener("click", closeOverlay);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay && !overlay.hidden) closeOverlay();
    });
  }

  function bindNav() {
    var btn = document.querySelector(".hamburger");
    var links = document.querySelector(".nav-links");
    if (btn && links) {
      btn.addEventListener("click", function () {
        links.classList.toggle("open");
      });
    }
  }

  function renderQuietTruthsPage(root) {
    if (!root) return;
    root.innerHTML = renderIntro() + renderGrid() + renderOverlay();
    bindGrid(root);
    bindNav();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderQuietTruthsPage(document.getElementById("quiet-truths-root"));
  });
})();
