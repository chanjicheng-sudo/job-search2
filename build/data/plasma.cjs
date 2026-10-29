// Plasma — Growth / Paid Acquisition (consumer crypto app, London, £100–150K).
//
// Jessie's own final edit, kept verbatim. Three items were flagged and not actioned:
// "setup from scratch" in Skills now contradicts the "partnered with" reporting bullet,
// "stablecoin" appears nowhere although Plasma is a stablecoin business, and "Owns" sits
// against an Intern title with no fixed term shown. See OPEN-QUESTIONS.md.

const { name, contact, education } = require("./common.cjs");

module.exports = {
  slug: "plasma",
  label: "Plasma — Growth / Paid Acquisition",
  name,
  contact,

  profile:
    "Growth marketer specialising in paid user acquisition for consumer finance apps, with a " +
    "data-science research background. Owns five channels across 26 markets at a crypto app, and " +
    "built the in-house AI UGC production and automated reporting the function now runs on. Works " +
    "hands-on: writes the briefs, runs the tests, and cuts the campaigns that don't earn their budget.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Blockchain.com, London, United Kingdom",
          dates: "May 2026 – Present",
          sub: "Growth Marketing Intern  |  Retail, Wealth and Institutional",
          bullets: [
            "Ran 128 structured campaign tests across 26 markets, identifying 5 scalable campaign groups and reallocating budget away from 26 underperforming campaigns. ~$21k of test spend reallocated reducing CPI of GB campaigns by 21.5% while installs increased 30.2%",
            "Scaled paid acquisition from 187 to 562 daily installs (~3x) while holding CPI flat at ~$1.50 and grew the core US campaign from 178 to 373 installs/day",
            "Led international expansion of paid search from 2 to 26 countries, scaling 9 to 121 live campaigns and 47 to 2,597 keywords with country-level bid and creative strategy",
            "Built an in-house AI UGC pipeline after evaluating 6 vendors, cutting creative production from ~2 hours to 30 minutes per asset; delivered 30+ briefs and 40 ads across 9 channels, plus 50+ assets to 3 external partners",
            "Owned app-store conversion across 20 storefronts and 20+ Custom Product Pages over 600+ keywords; shipped refreshed product pages with Front-End Engineering and reviewed regulated messaging across all retail products",
            "Automated daily Apple Search Ads reporting after evaluating 4 approaches, cutting ~30 min/day of manual work, and partnered with Data Engineering, AI Engineering and Security to publish it as an internal dashboard",
          ],
        },
        {
          org: "Malaberg, London, United Kingdom",
          dates: "Feb 2025 – Apr 2026",
          sub: "Performance Marketer",
          bullets: [
            "Managed £50k+ monthly paid budget, sustaining 120% ROAS",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity; +5% funnel progression",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output; led weekly Compliance reviews to ship regulated consumer-finance messaging",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Paid media", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn; ASO and Custom Product Pages; international campaign structure; creative testing and budget allocation" },
        { label: "Tracking & measurement", text: "Ad-account, conversion-tracking and campaign-structure setup from scratch; Apple Search Ads attribution; funnel and cohort analysis; experimental test design; Power BI, Excel, Microsoft Clarity, Streamlit, R, Python, SQL" },
        { label: "Creative", text: "Creative briefing and direction, AI UGC production (avatar, voice, motion, video), Figma, Photoshop" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
