/* =============================================================================
   PRODUCTS LIBRARY  —  The Teacher Mom Edit
   Paid digital products. Independent of resources.js.

   HOW TO ADD A NEW PRODUCT
   1. Copy the example below.
   2. Paste it at the bottom of the PRODUCTS list (before the closing ]; ).
   3. Fill in your details. Keep the commas exactly as shown.
   4. Save the file. The website updates itself.

   NOTES
   - coverImage / previewImages are paths relative to the site root.
   - systems = System pages this product should also appear on.
     Leave as [] if it does not belong on a System page.
   - featured: true can be used to highlight a product on Shop.
   ============================================================================= */

var PRODUCTS = [

  {
    id: "calmer-home-7-tools",
    slug: "7-tools-calmer-home",
    title: "7 Tools That Actually Make Life Easier",
    subtitle: "Simple systems for less chaos, more calm.",
    shortDescription: "Seven practical systems that reduce daily chaos and help children build independence — built from classroom experience and real-life parenting.",
    fullDescription: "A 32-page guide with seven systems you can set up once and use every day. Each tool includes what it is, what the research says, a teacher insight, and how to use it at home. Also includes printable visuals, routine cards, checklists, reflection tools, a feelings visual, and a research reference page.",
    price: 9.99,
    currency: "CAD",
    type: "Digital PDF Guide",
    fileFormat: "PDF · 32 pages · US Letter · print-ready",
    audience: "Parents",
    whoItsFor: "Parents of children roughly ages 2–7 who want less daily chaos without adding another routine to manage.",
    coverImage: "7-tools/cover.jpg",
    previewImages: ["7-tools/preview-01.jpg", "7-tools/preview-02.jpg", "7-tools/preview-03.jpg"],
    features: ["The 20-Minute Reset Bin", "Visual Routine Cards", "Snack Prep Box (5-Minute Setup)", "The \"One-Touch\" Clean-Up Rule", "Quiet Time Kit (No Screens Needed)", "The \"Help Me Help You\" System", "End-of-Day 10-Minute Reset"],
    systems: ["save-time-daily", "better-routines", "home-organization", "calm-after-school", "school-readiness"],
    tags: ["routines", "organization", "regulation", "independence", "executive-function"],
    gumroadUrl: "", /* TODO — add Gumroad product URL */
    featured: true
  },
  {
    id: "class-jobs-system",
    slug: "class-jobs-system",
    title: "Class Jobs System",
    subtitle: "A simple classroom system for building responsibility and independence.",
    shortDescription: "A ready-to-print class jobs set with illustrated cards, a banner, and name cards — everything needed to run classroom jobs from day one.",
    fullDescription: "Fourteen illustrated job cards, a Class Jobs banner, and blank student name cards, plus a user's guide covering setup, how to introduce each job, rotation options, and classroom management tips. Designed so young learners can recognize their responsibility before they can confidently read the job title.",
    price: 6.99,
    currency: "CAD",
    type: "Digital Classroom Resource",
    fileFormat: "PDF · 17 pages · US Letter · print-ready",
    audience: "Teachers",
    whoItsFor: "Grades K–3 and primary classrooms using visual management to build student independence.",
    coverImage: "class-jobs/cover.jpg",
    previewImages: ["class-jobs/preview-01.jpg", "class-jobs/preview-02.jpg"],
    features: ["User's Guide", "14 illustrated classroom job cards", "Class Jobs banner", "Printable student name cards", "Setup instructions", "Rotation options", "Classroom management tips"],
    systems: [],
    tags: ["classroom", "teacher-resources", "independence", "responsibility", "classroom-management"],
    gumroadUrl: "", /* TODO — add Gumroad product URL */
    featured: false
  }
];
