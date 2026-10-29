// General purpose — crypto growth marketer. Not pruned to any one JD. Covers all seven
// contribution themes from the performance note, so it can be sent around.

const { name, contact, education } = require("./common.cjs");

module.exports = {
  slug: "crypto-growth-general",
  label: "General — Crypto Growth Marketer",
  name,
  contact,

  profile:
    "Crypto growth marketer with hands-on ownership of paid acquisition across five channels and 26 " +
    "markets, plus the creative, app-store and reporting systems behind it. Experience spans retail, " +
    "wealth and institutional products in a regulated environment, with a data-science research " +
    "background. Works hands-on: finds the problem, builds the fix, and cuts what does not earn its budget.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Blockchain.com, London, United Kingdom",
          dates: "May 2026 – Present",
          sub: "Growth Marketing Intern  |  Retail, Wealth and Institutional",
          bullets: [
            "Scaled paid search from 187 to 562 daily installs (~3x) while holding CPI flat at ~$1.50, expanding from 2 to 26 countries, 9 to 121 live campaigns and 47 to 2,597 keywords; grew the core US campaign from 178 to 373 installs/day",
            "Ran 128 structured campaign tests across 26 markets, identifying 5 scalable campaign groups and cutting 26 underperforming campaigns; reallocating ~$21k of test spend reduced CPI on GB campaigns by 21.5% while installs rose 30.2%",
            "Led creative strategy and production across 9 channels, delivering 30+ briefs and 40 ads, plus 50+ assets to 3 external acquisition partners",
            "Built an in-house AI UGC pipeline after evaluating 6 vendors, cutting production from ~2 hours to 30 minutes per asset and removing the team's dependence on creator-supplied assets",
            "Automated daily Apple Search Ads reporting after evaluating 4 approaches, cutting ~30 min/day of manual work, and partnered with Data Engineering, AI Engineering and Security to publish it as an internal Streamlit dashboard",
            "Owned app-store conversion across 20 storefronts and 20+ Custom Product Pages over 600+ keywords in 12 markets; shipped refreshed product pages with Front-End Engineering and reviewed regulated messaging across all retail products",
            "Supported Wealth and Institutional growth with customer research and prospecting: a segmented survey returning 114 responses at a 14% response rate, an outreach list of 80 crypto publishers and a database of 100 iGaming operators",
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
        { label: "Tracking & measurement", text: "Ad-account, conversion-tracking and campaign-structure setup; Apple Search Ads attribution; funnel and cohort analysis; experimental test design; survey design and segmentation; Power BI, Excel, Microsoft Clarity, Streamlit, R, Python, SQL" },
        { label: "Creative", text: "Creative briefing and direction, AI UGC production (avatar, voice, motion, video), agency and partner management, Figma, Photoshop" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
