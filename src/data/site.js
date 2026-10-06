// Single source of truth for site content. Copy follows the Karyera Plus
// Website Content & UI Specification (Draft v1). Nothing here should be stated
// as fact unless it was supplied as verified by the client.

export const COMPANY = {
  name: "Karyera Plus",
  tagline: "Connecting skilled people with employers across Europe.",
  office: {
    line1: "220 The Vale",
    line2: "London, England",
    postcode: "NW11 8SR",
    full: "220 The Vale, London, England, NW11 8SR",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=220+The+Vale+London+NW11+8SR",
    embedUrl:
      "https://maps.google.com/maps?q=220%20The%20Vale%2C%20London%20NW11%208SR&z=15&output=embed",
  },
  email: "help@karyeraplus.top",
  sourceRegions: "Asia, the Middle East, and Africa",
  socials: {
    facebook: "https://www.facebook.com/KayeraPlus",
    instagram: "https://www.instagram.com/karyeraplus01/",
    youtube: "https://www.youtube.com/@KaryeraPlus01",
    x: "https://x.com/KaryeraPlus01",
    linkedin: "https://www.linkedin.com/company/karyera-plus/",
    pinterest: "https://www.pinterest.com/karyeraplusb2b/",
  },
};

// FormSubmit endpoint, using the random alias FormSubmit issued for
// help@karyeraplus.top so the address isn't exposed in the HTML.
export const FORM_ENDPOINT =
  "https://formsubmit.co/28337a231d88954724597d15c65585cc";

// Set when the legal pages are published, e.g. "1 October 2026".
export const LEGAL_LAST_UPDATED = null;

// Placement footprint, in the rotated order used by the scrolling banner so
// no single country reads as "first" or primary.
export const COUNTRIES_TICKER = [
  "United Kingdom", "Germany", "Poland", "Romania", "Netherlands", "Spain",
  "Italy", "Serbia", "Czech Republic", "Croatia", "Austria", "Sweden",
  "Ireland", "Ukraine", "France", "Hungary", "Switzerland", "Portugal",
  "Belgium", "Greece", "Denmark", "Finland", "Norway", "Slovakia", "Bulgaria",
  "Georgia", "Kazakhstan", "Moldova", "Armenia", "Azerbaijan", "Lithuania",
  "Latvia", "Estonia", "Luxembourg", "Malta", "Cyprus", "Iceland",
  "Montenegro", "North Macedonia", "Bosnia and Herzegovina", "Albania",
  "Belarus", "Slovenia",
];

export const COUNTRIES = [...COUNTRIES_TICKER].sort((a, b) =>
  a.localeCompare(b)
);

export const COUNTRY_COUNT = COUNTRIES.length;

export const SERVICES = [
  {
    slug: "recruitment-mediation",
    name: "Recruitment Mediation",
    icon: "handshake",
    card: "We identify and introduce qualified candidates directly to your business; you manage the employment relationship.",
    summary:
      "We source, screen, and introduce candidates for your open roles. Once you make an offer, the worker becomes your direct employee — with our support through onboarding and documentation.",
    heroTitle: "We Introduce. You Employ.",
    body: [
      "Karyera Plus identifies, screens, and introduces candidates for your open roles. Once you make an offer, the worker becomes your direct employee — you manage the employment relationship from day one, with our support through onboarding and documentation.",
    ],
    bestFor:
      "Businesses wanting long-term hires who become part of their permanent team directly.",
    cta: { label: "Submit a Vacancy", to: "/employers#submit-vacancy" },
    image: "/images/site/service-mediation.jpg",
  },
  {
    slug: "staffing-manpower-supply",
    name: "Staffing / Manpower Supply",
    icon: "team",
    card: "We employ the worker and supply their labour to you on a flexible, managed basis.",
    summary:
      "Karyera Plus remains the formal employer, handling contracts, payroll administration, and compliance, while the worker carries out their role under your day-to-day direction.",
    heroTitle: "We Employ. You Manage the Work.",
    body: [
      "Under our staffing model, Karyera Plus remains the formal employer, handling contracts, payroll administration, and compliance — while the worker carries out their role under your day-to-day direction.",
      "This model suits seasonal demand, project-based work, or businesses that prefer to avoid direct employment administration for international hires.",
    ],
    bestFor:
      "Seasonal peaks, fixed-term projects, or a lower-administration route to international staff.",
    cta: { label: "Discuss Staffing Needs", to: "/contact?enquiry=staffing" },
    image: "/images/site/service-staffing.jpg",
  },
  {
    slug: "candidate-screening",
    name: "Candidate Screening",
    icon: "shield",
    card: "Independent verification of documentation, qualifications, and work history before any introduction is made.",
    summary:
      "Document verification — identification, right-to-work eligibility, and role-relevant qualifications — before you're introduced. Also available as a standalone service for candidates you've found yourself.",
    heroTitle: "Verified Before You Ever See Their CV.",
    body: [
      "Every candidate we put forward has been through document verification — identification, right-to-work eligibility, and role-relevant qualifications or experience — before you're introduced.",
      "This can also be offered as a standalone service for candidates you've already identified yourself.",
    ],
    bestFor:
      "Employers who want independent verification of candidates sourced through their own channels, or as a standard part of any placement through us.",
    cta: {
      label: "Request Screening Support",
      to: "/contact?enquiry=screening",
    },
    image: "/images/site/service-screening.jpg",
  },
];

export const SECTORS = [
  {
    slug: "construction",
    name: "Construction",
    icon: "hardhat",
    roles: "General labourers, skilled tradespeople, site operatives",
    line: "Site teams from general labour to skilled trades.",
    intro:
      "Construction projects depend on dependable site teams arriving when the programme needs them. We recruit for general labouring through to skilled trades, checking each candidate's documentation and relevant trade experience before any introduction.",
    image: "/images/site/sector-construction.jpg",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    roles:
      "Production line workers, machine operatives, warehouse-adjacent roles",
    line: "Production, machine operation, and line support.",
    intro:
      "Manufacturing roles reward consistency and attention to process. We source production line workers and machine operatives, and support warehouse-adjacent roles that keep output moving.",
    image: "/images/site/sector-manufacturing.jpg",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "kitchen",
    roles: "Kitchen staff, housekeeping, food & beverage service",
    line: "Kitchen, housekeeping, and front-of-house service.",
    intro:
      "Hotels, restaurants, and catering operations need people who can step into a busy service. We recruit kitchen staff, housekeeping teams, and food & beverage service workers for both seasonal and year-round demand.",
    image: "/images/site/sector-hospitality.jpg",
  },
  {
    slug: "logistics-transport",
    name: "Logistics & Transport",
    icon: "truck",
    roles: "Warehouse operatives, drivers (where locally licensed), loaders",
    line: "Warehouse operatives, loaders, and licensed drivers.",
    intro:
      "Distribution and transport depend on reliable people at every step. We recruit warehouse operatives and loaders, and drivers where they hold the licence required in your country.",
    image: "/images/site/sector-logistics.jpg",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: "plant",
    roles: "Seasonal and year-round farm labour",
    line: "Seasonal and year-round farm labour.",
    intro:
      "Farms and growers often need people on a tight, weather-driven timeline. We recruit for both seasonal harvest periods and year-round farm work.",
    image: "/images/site/sector-agriculture.jpg",
  },
  {
    slug: "cleaning-facilities",
    name: "Cleaning & Facilities",
    icon: "broom",
    roles: "Commercial cleaning, facilities support",
    line: "Commercial cleaning and facilities support.",
    intro:
      "Well-run buildings rely on consistent cleaning and facilities teams. We recruit commercial cleaners and facilities support staff for ongoing contracts.",
    image: "/images/site/sector-cleaning.jpg",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Requirement Call",
    text: "We discuss the role, required skills, timeline, and any country-specific considerations.",
  },
  {
    title: "Sourcing",
    text: "We identify suitable candidates from our networks across Asia, the Middle East, and Africa.",
  },
  {
    title: "Screening",
    text: "Document verification, right-to-work checks, and skills/experience confirmation.",
  },
  {
    title: "Shortlist & Interview",
    text: "You review a shortlist and interview directly (video or in person).",
  },
  {
    title: "Offer & Compliance",
    text: "We support contract issuance and the relevant visa/work-permit documentation for your country.",
  },
  {
    title: "Onboarding",
    text: "Travel and arrival support, with a point of contact through the candidate's first weeks in role.",
  },
];

export const PROCESS_TEASER = [
  "Tell us your requirement",
  "We source and screen candidates",
  "You interview and select",
  "We manage placement and onboarding",
];

export const FAQS = [
  {
    q: "How does Karyera Plus source candidates?",
    a: "We recruit from established networks across Asia, the Middle East, and Africa, matching candidates to verified employer vacancies across our European footprint.",
  },
  {
    q: "What's the difference between Recruitment Mediation and Staffing Supply?",
    a: "Under Mediation, the candidate becomes your direct employee once placed. Under Staffing Supply, Karyera Plus remains the employer and supplies the worker's labour to you on a managed basis.",
  },
  {
    q: "Which countries do you place workers in?",
    a: `We place candidates with employers across our full European operating footprint, spanning ${COUNTRY_COUNT} countries from the United Kingdom and Ireland through Central and Eastern Europe to the Caucasus.`,
  },
  {
    q: "Which sectors do you recruit for?",
    a: "Construction, manufacturing, hospitality, logistics & transport, agriculture, and cleaning & facilities. See our Industries We Serve page for the roles within each.",
  },
  {
    q: "Can I use your screening service for candidates I've found myself?",
    a: "Yes. Candidate Screening is part of every placement through us, and can also be offered as a standalone service for candidates you've identified through your own channels.",
  },
  {
    q: "What do candidates need to register?",
    a: "A valid passport or ID, relevant qualification documents, and work history references. We verify these before matching you to live roles.",
  },
];

export const BLOG_CATEGORIES = [
  "For Employers",
  "For Candidates",
  "Regulation & Compliance",
  "Sector Guides",
];

// Template entries — suggested starting topics, not yet written. Replace with
// real posts (add `date` and `href`) once topics and authors are confirmed.
export const BLOG_POSTS = [
  {
    title: "Right to Work Checks: What UK & EU Employers Need to Know",
    category: "Regulation & Compliance",
    excerpt:
      "A practical overview of the document checks employers carry out before an international hire starts work, and where a recruitment partner fits in.",
  },
  {
    title: "Recruitment Mediation vs. Staffing Supply: Which Fits Your Business",
    category: "For Employers",
    excerpt:
      "Direct employment or a managed staffing arrangement? How the two models differ, and the situations each one suits best.",
  },
  {
    title: "Seasonal Hiring Across Europe: A Planning Timeline",
    category: "Sector Guides",
    excerpt:
      "Working back from your peak season: when to brief, screen, and onboard international workers so they arrive on time.",
  },
];
