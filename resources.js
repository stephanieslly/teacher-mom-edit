/* =============================================================================
   RESOURCES LIBRARY  —  The Teacher Mom Edit
   This is the master list of everything on the website.

   HOW TO ADD A NEW RESOURCE
   1. Copy the example below.
   2. Paste it at the bottom of the RESOURCES list (before the closing ]; ).
   3. Fill in your details. Keep the commas exactly as shown.
   4. Save the file. The website updates itself.

   THREE LAYERS (do not mix these up)
   - primarySystem / systems  = the PROBLEM this helps solve
     Choose from: save-time-daily, better-routines, calm-after-school,
     home-organization, school-readiness, mom-reset
   - tags                     = the TOPIC (any words you like)
   - resourceType             = the FORMAT (what it is)

   resourceType options:
   Free Printable | Article | Activity | Guide | Quick Tip | Amazon Find | Product | Video

   priceType: "free"  (shows a Free badge)  or  "paid"

   EXAMPLE — copy this, then change the values:

   {
     id: "calm-morning-basket",
     title: "The Calm Morning Basket",
     slug: "calm-morning-basket",
     shortDescription: "A simple morning setup that gets kids started without you hovering.",
     image: "your-image.jpg",
     resourceType: "Amazon Find",
     primarySystem: "save-time-daily",
     systems: ["save-time-daily", "better-routines"],
     tags: ["mornings", "independence"],
     destinationURL: "https://www.amazon.com/your-link",
     affiliateURL: "https://www.amazon.com/your-affiliate-link",
     priceType: "paid",
     keyword: "BASKET",
     ctaLabel: "Shop the Find",
     featured: false,
     published: true,
     publishDate: "2026-08-20",
     sortOrder: 20
   },

   NOTES
   - primarySystem = the main System page this belongs on.
   - systems = every System page it should also appear on (include the primary one).
   - keyword = the Instagram comment word that delivers this resource (READY, PHRASES, RESET…).
   - For a Free Printable: resourceType: "Free Printable" and priceType: "free"
   - For an Amazon item: resourceType: "Amazon Find" and put the shop link in affiliateURL
     (you can repeat it in destinationURL).
   - featured: true puts it in the "Start Here" row on its System pages.
   - published: false hides it everywhere until you are ready.
   ============================================================================= */

var RESOURCES = [

  /* ---------- FREE PRINTABLES (from the Freebies page) ---------- */

  {
    id: "kindergarten-readiness-checklist",
    title: "Kindergarten Readiness Checklist",
    slug: "kindergarten-readiness-checklist",
    shortDescription: "What educators actually look for before September — beyond letters and numbers.",
    image: "kindergarten_readiness_checklist_thumbnail.png",
    previewImage: "Previews/kindergarten Readiness Checklist Preview.png",
    resourceType: "Free Printable",
    primarySystem: "school-readiness",
    systems: ["school-readiness"],
    tags: ["kindergarten", "back to school", "confidence"],
    destinationURL: "Kindergarten_Readiness_Checklist.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "READY",
    ctaLabel: "Download Free",
    featured: true,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 1
  },
  {
    id: "calm-school-morning-checklist",
    title: "Calm School Morning Checklist",
    slug: "calm-school-morning-checklist",
    shortDescription: "Simple routines for smoother, more peaceful school mornings.",
    image: "calm_school_morning_checklist_thumbnail.png",
    previewImage: "Previews/Calm School Preview.png",
    resourceType: "Free Printable",
    primarySystem: "better-routines",
    systems: ["better-routines", "save-time-daily"],
    tags: ["mornings", "school", "visual schedule"],
    destinationURL: "Calm_School_Morning_Checklist.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "MORNING",
    ctaLabel: "Download Free",
    featured: true,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 2
  },
  {
    id: "after-school-reset-guide",
    title: "After School Reset Guide",
    slug: "after-school-reset-guide",
    shortDescription: "A simple flow to help your child transition from school to home.",
    image: "after_school_reset_guide_thumbnail.png",
    previewImage: "Previews/AfterSchool Reset preview.png",
    resourceType: "Free Printable",
    primarySystem: "calm-after-school",
    systems: ["calm-after-school", "better-routines"],
    tags: ["after school", "transitions", "evenings"],
    destinationURL: "After_School_Reset_Guide.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "RESET",
    ctaLabel: "Download Free",
    featured: true,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 3
  },
  {
    id: "bedtime-connection-ritual-guide",
    title: "Bedtime Connection Ritual Guide",
    slug: "bedtime-connection-ritual-guide",
    shortDescription: "5 minutes before lights out to end the day with connection.",
    image: "bedtime_connection_ritual_guide_thumbnail.png",
    previewImage: "Previews/Bedtime Connection Preview.png",
    resourceType: "Free Printable",
    primarySystem: "better-routines",
    systems: ["better-routines"],
    tags: ["bedtime", "connection", "evenings"],
    destinationURL: "Bedtime_Connection_Ritual_Guide.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "BEDTIME",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 4
  },
  {
    id: "growth-mindset-phrases-cheat-sheet",
    title: "Growth Mindset Phrases Cheat Sheet",
    slug: "growth-mindset-phrases-cheat-sheet",
    shortDescription: "What to say instead — simple swaps that build resilience and confidence.",
    image: "growth_mindset_phrases_cheat_sheet_thumbnail.png",
    previewImage: "Previews/Growth Mindset Preview.png",
    resourceType: "Free Printable",
    primarySystem: "school-readiness",
    systems: ["school-readiness"],
    tags: ["language", "confidence", "resilience"],
    destinationURL: "Growth_Mindset_Phrases_Cheat_Sheet.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "PHRASES",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 5
  },
  {
    id: "frustration-tolerance-activity-guide",
    title: "Frustration Tolerance Activity Guide",
    slug: "frustration-tolerance-activity-guide",
    shortDescription: "Simple activities to build your child's frustration tolerance at home.",
    image: "frustration_tolerance_activity_guide_thumbnail.png",
    previewImage: "Previews/Frustration tolerance Preview.png",
    resourceType: "Free Printable",
    primarySystem: "school-readiness",
    systems: ["school-readiness"],
    tags: ["emotions", "independence", "activities"],
    destinationURL: "Frustration_Tolerance_Activity_Guide.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "CALM",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 6
  },
  {
    id: "conversation-starters",
    title: "Conversation Starters",
    slug: "conversation-starters",
    shortDescription: "Questions beyond \"How was school?\" — for dinner, the car, and bedtime.",
    image: "conversation_starters_thumbnail.png",
    previewImage: "Previews/Conversation_Starter_Preview.png",
    resourceType: "Free Printable",
    primarySystem: "school-readiness",
    systems: ["school-readiness", "calm-after-school"],
    tags: ["communication", "connection", "after school"],
    destinationURL: "Conversation_Starters.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "TALK",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 7
  },
  {
    id: "fine-motor-skills-activity-list",
    title: "Fine Motor Skills Activity List",
    slug: "fine-motor-skills-activity-list",
    shortDescription: "Everyday activities that build your child's hand strength and coordination at home.",
    image: "fine_motor_skills_activity_list_thumbnail.png",
    previewImage: "Previews/Fine Motor Skills Preview.png",
    resourceType: "Free Printable",
    primarySystem: "school-readiness",
    systems: ["school-readiness"],
    tags: ["fine motor", "play", "kindergarten"],
    destinationURL: "Fine_Motor_Skills_Activity_List.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "MOTOR",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 8
  },
  {
    id: "back-to-school-anxiety-guide",
    title: "Back to School Anxiety Guide",
    slug: "back-to-school-anxiety-guide",
    shortDescription: "What to look for, what to say, and when to get more support.",
    image: "back_to_school_anxiety_guide_thumbnail.png",
    previewImage: "Previews/Back to school Anxiety preview.png",
    resourceType: "Free Printable",
    primarySystem: "school-readiness",
    systems: ["school-readiness"],
    tags: ["anxiety", "back to school", "emotions"],
    destinationURL: "Back_to_School_Anxiety_Guide.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "BRAVE",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 9
  },
  {
    /* NOT CONFIDENTLY CATEGORIZED
       Screen-free family play does not clearly map to one of the six Systems.
       It still appears on the Freebies page (Free Printable).
       Add a primarySystem later if you want it on a System page. */
    id: "screen-free-family-activity-list",
    title: "Screen-Free Family Activity List",
    slug: "screen-free-family-activity-list",
    shortDescription: "Simple ideas to connect, play, and recharge without a screen.",
    image: "screen_free_family_activity_list_thumbnail.png",
    previewImage: "Previews/Screen Free Preview.png",
    resourceType: "Free Printable",
    primarySystem: "",
    systems: [],
    tags: ["play", "family time", "screen free"],
    destinationURL: "Screen_Free_Family_Activity_List.pdf",
    affiliateURL: "",
    priceType: "free",
    keyword: "PLAY",
    ctaLabel: "Download Free",
    featured: false,
    published: true,
    publishDate: "2026-05-22",
    sortOrder: 10
  },

  /* ---------- ARTICLES (existing blog posts I could categorize) ---------- */

  {
    id: "drop-zone-front-door",
    title: "The Drop Zone Every Family Needs by the Front Door",
    slug: "drop-zone-front-door",
    shortDescription: "One simple system that ends the morning hunt for shoes, bags, and everything else.",
    image: "istockphoto-1446556818-612x612.webp",
    resourceType: "Article",
    primarySystem: "home-organization",
    systems: ["home-organization", "save-time-daily"],
    tags: ["entryway", "mornings", "clutter"],
    destinationURL: "blog-drop-zone.html",
    affiliateURL: "",
    priceType: "free",
    keyword: "",
    ctaLabel: "Read More",
    featured: true,
    published: true,
    publishDate: "2026-05-29",
    sortOrder: 11
  },
  {
    id: "after-school-meltdowns",
    title: "Why Your Child Melts Down After School — and What Actually Helps",
    slug: "after-school-meltdowns",
    shortDescription: "Your child holds it together all day, then falls apart the second they get home. Here's why it makes sense — and what actually helps.",
    image: "premium_photo-1663100091589-3606b27215fc.avif",
    resourceType: "Article",
    primarySystem: "calm-after-school",
    systems: ["calm-after-school"],
    tags: ["after school", "big feelings", "transitions"],
    destinationURL: "blog-after-school-meltdowns.html",
    affiliateURL: "",
    priceType: "free",
    keyword: "",
    ctaLabel: "Read More",
    featured: false,
    published: true,
    publishDate: "2026-05-29",
    sortOrder: 12
  },
  {
    id: "evening-reset",
    title: "The 10-Minute Evening Reset That Changed My Mornings",
    slug: "evening-reset",
    shortDescription: "A short evening tidy that makes the next morning feel lighter.",
    image: "photo-1475609471617-0ef53b59cff5.avif",
    resourceType: "Article",
    primarySystem: "better-routines",
    systems: ["better-routines", "save-time-daily", "mom-reset"],
    tags: ["evenings", "mornings", "reset"],
    destinationURL: "blog-evening-reset.html",
    affiliateURL: "",
    priceType: "free",
    keyword: "",
    ctaLabel: "Read More",
    featured: false,
    published: true,
    publishDate: "2026-05-29",
    sortOrder: 13
  },
  {
    id: "teacher-transitions",
    title: "What Teachers Know About Transitions (That Most Parents Don't)",
    slug: "teacher-transitions",
    shortDescription: "Transitions look ordinary — but they're one of the hardest parts of a child's day. Here's what teachers do differently.",
    image: "premium_photo-1726812105319-02545df9a60c.avif",
    resourceType: "Article",
    primarySystem: "better-routines",
    systems: ["better-routines", "calm-after-school"],
    tags: ["transitions", "teacher tips", "routines"],
    destinationURL: "blog-transitions.html",
    affiliateURL: "",
    priceType: "free",
    keyword: "",
    ctaLabel: "Read More",
    featured: false,
    published: true,
    publishDate: "2026-05-29",
    sortOrder: 14
  },

  /* NOT ADDED — could not confidently categorize into a System:
     - Why Your Child Saves Their Worst Behaviour for You (blog-worst-behaviour.html)
     - What to Do When Your Toddler Wants You Every 5 Seconds (blog-toddler-wants-you.html)
     Add them later with a primarySystem if they belong on a System page. */

  {
    id: "diaper-caddy-organizer",
    title: "Diaper Caddy Organizer",
    slug: "diaper-caddy-organizer",
    shortDescription: "The morning basket that ended our shoe-and-mitten scramble. One caddy by the door holds everything that leaves the house — so nobody is hunting for anything at 8:10.",
    image: "https://m.media-amazon.com/images/I/81sg53CmSBL._AC_SL1500_.jpg",
    resourceType: "Amazon Find",
    primarySystem: "home-organization",
    systems: ["home-organization", "save-time-daily"],
    tags: ["organization", "mornings", "clutter"],
    destinationURL: "https://amzn.to/3OWvedP",
    affiliateURL: "https://amzn.to/3OWvedP",
    priceType: "paid",
    keyword: "",
    ctaLabel: "Shop the Find",
    featured: false,
    published: true,
    publishDate: "2026-08-20",
    sortOrder: 15
  },
  {
    id: "magna-tiles-travel-set",
    title: "Magna-Tiles Travel Set",
    slug: "magna-tiles-travel-set",
    shortDescription: "Open-ended, no instructions, no right answer — which is exactly why it works for a decompressing brain. My kids will build with these for thirty minutes without needing me.",
    image: "https://m.media-amazon.com/images/I/71FIJWtTIbL._AC_SL1500_.jpg",
    resourceType: "Amazon Find",
    primarySystem: "calm-after-school",
    systems: ["calm-after-school", "mom-reset"],
    tags: ["independent play", "quiet time", "after school"],
    destinationURL: "https://amzn.to/4udKCl6",
    affiliateURL: "https://amzn.to/4udKCl6",
    priceType: "paid",
    keyword: "",
    ctaLabel: "Shop the Find",
    featured: false,
    published: true,
    publishDate: "2026-08-20",
    sortOrder: 16
  },
  {
    id: "melissa-doug-floor-puzzle",
    title: "Melissa & Doug Race Around the World Floor Puzzle",
    slug: "melissa-doug-floor-puzzle",
    shortDescription: "Floor puzzles build the visual discrimination and spatial reasoning kindergarten teachers look for — and the big pieces mean small hands can actually succeed at it.",
    image: "https://m.media-amazon.com/images/I/81yo0fylQbL._AC_SL1500_.jpg",
    resourceType: "Amazon Find",
    primarySystem: "school-readiness",
    systems: ["school-readiness", "calm-after-school"],
    tags: ["kindergarten", "fine motor", "problem solving"],
    destinationURL: "https://amzn.to/4fhhuoO",
    affiliateURL: "https://amzn.to/4fhhuoO",
    priceType: "paid",
    keyword: "",
    ctaLabel: "Shop the Find",
    featured: false,
    published: true,
    publishDate: "2026-08-20",
    sortOrder: 17
  },
  {
    id: "snackle-box",
    title: "8-Compartment Snackle Box",
    slug: "snackle-box",
    shortDescription: "Fill it Sunday, open it every afternoon. Kids serve themselves the second they walk in — which buys you the twenty quiet minutes their nervous system needs before homework.",
    image: "https://m.media-amazon.com/images/I/81gLPl5pbnL._AC_SL1500_.jpg",
    resourceType: "Amazon Find",
    primarySystem: "save-time-daily",
    systems: ["save-time-daily", "calm-after-school"],
    tags: ["snacks", "after school", "prep ahead"],
    destinationURL: "https://amzn.to/3QFndup",
    affiliateURL: "https://amzn.to/3QFndup",
    priceType: "paid",
    keyword: "",
    ctaLabel: "Shop the Find",
    featured: false,
    published: true,
    publishDate: "2026-08-20",
    sortOrder: 18
  },
  {
    id: "omiebox-bento",
    title: "OmieBox Insulated Bento Lunch Box",
    slug: "omiebox-bento",
    shortDescription: "The insulated well means one hot item without a separate thermos to pack, wash, and lose. Fewer containers is fewer decisions at 7am.",
    image: "https://m.media-amazon.com/images/I/71XU5Dsr%2BML._AC_SL1500_.jpg",
    resourceType: "Amazon Find",
    primarySystem: "save-time-daily",
    systems: ["save-time-daily", "better-routines"],
    tags: ["lunches", "mornings", "prep ahead"],
    destinationURL: "https://amzn.to/4ffp2sc",
    affiliateURL: "https://amzn.to/4ffp2sc",
    priceType: "paid",
    keyword: "",
    ctaLabel: "Shop the Find",
    featured: false,
    published: true,
    publishDate: "2026-08-20",
    sortOrder: 19
  },
  {
    id: "silicone-marker-holders",
    title: "Silicone Marker Holders",
    slug: "silicone-marker-holders",
    shortDescription: "Each marker stays with its own cap, so you're not picking lids up off the floor — and an empty slot tells you exactly which colour went missing.",
    image: "https://m.media-amazon.com/images/I/61ZQRF-rbOL._AC_SL1500_.jpg",
    resourceType: "Amazon Find",
    primarySystem: "home-organization",
    systems: ["home-organization", "save-time-daily"],
    tags: ["organization", "art supplies", "markers"],
    destinationURL: "https://amzn.to/4xkHdD9",
    affiliateURL: "https://amzn.to/4xkHdD9",
    priceType: "paid",
    keyword: "",
    ctaLabel: "Shop the Find",
    featured: false,
    published: true,
    publishDate: "2026-08-24",
    sortOrder: 20
  }
];
