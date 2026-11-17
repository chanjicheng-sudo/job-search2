// Act — Social, Community and Paid Marketing (AI-first consumer mobile app).
// Not crypto, so "digital assets". UGC and creators lead, then paid acquisition, tests,
// launches, partnerships, international reach, AI. Title: Graduate Growth Marketing
// Manager. Not claimed: organic social audience growth, community management (Reddit,
// HN, Discord), YouTube or Instagram. See applications/act/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "act-growth",
  label: "Act — Social, Community and Paid Marketing",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a consumer mobile app, running paid acquisition across Meta, TikTok, Google, X " +
    "and Apple Search Ads in 26 markets, alongside UGC campaigns and creator and KOL partnerships. I " +
    "launch campaigns, track engagement, conversion and acquisition cost, and scale what works. I build " +
    "with AI every day, using Claude Code, MCP connectors and AI video tools, so I understand AI products " +
    "as both a user and a builder.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding paid user acquisition from 2 to 26 markets and from 9 to 121 campaigns (13x)",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests across 26 markets, scaling the 5 winning campaign groups and cutting 26 underperformers",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by running the launch campaign through KOL, influencer, affiliate and referral partnerships",
            "Sourced 3 major high net worth clients by spotting a regulatory shift in Europe and building an outreach list of 80 publishers with AI for media partnerships",
            "Increased user retention by 12% by researching why active, inactive and churned users dropped off, then working with Product to rework the in-app explainer and help page",
            "Refreshed App Store and Google Play listings across 20 storefronts and built 20+ Custom Product Pages for 12 markets to lift organic and paid conversion",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) campaigns into 24 languages for international markets",
            "Cut reporting time by ~10 hours a month by building automated campaign tracking with Claude Code and MCP connectors, shipped as a company-wide dashboard",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing pages from funnel analysis in Power BI, Excel and Microsoft Clarity",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Paid & social", text: "Paid advertising and social media advertising on Meta, TikTok, Google, X, LinkedIn and Apple Search Ads, budgets, audience targeting and optimisation, social content for paid campaigns, launch campaigns, organic app store growth (ASO)" },
        { label: "UGC & creators", text: "UGC campaigns, AI UGC production, creator, KOL and influencer partnerships, media and publisher outreach" },
        { label: "Measurement & analytics", text: "Engagement, conversion, acquisition cost (CAC/CPI) and ROI tracking, A/B testing, Power BI, Microsoft Clarity, automated dashboards" },
        { label: "AI", text: "Claude Code, Cursor, MCP connectors, AI video and voice tools, prompt engineering" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
