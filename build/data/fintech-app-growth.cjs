// General — Growth Marketing at a mobile-app fintech (not tied to one job ad).
// Not crypto-native by default, so "digital assets". App growth leads: acquisition,
// creative (AI UGC, full results), testing, retention, CRM, then launch and reporting.
// Title: Graduate Growth Marketing Manager (fixed-term), never "intern".

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "fintech-app-growth",
  label: "General — Growth Marketing, mobile-app fintech",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a consumer fintech app, driving acquisition, activation and retention across " +
    "Apple Search Ads, Meta, TikTok, Google and CRM in 26 markets. I launch, test and scale campaigns " +
    "end to end, and turn customer research into product changes that keep users. I use AI to solve " +
    "marketing problems, whether improving current workflows or opening new acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding Apple Search Ads from 2 to 26 markets and from 9 to 121 campaigns (13x), with country-level bidding and creative strategy",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests across 26 markets, scaling the 5 winning campaign groups and reallocating ~$21k from 26 underperformers",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by researching why active, inactive and churned users dropped off, then working with Product to rework the in-app explainer and help page",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by running the go-to-market end to end, from positioning to KOL, affiliate and referral partnerships",
            "Cut reporting time by ~10 hours a month by building automated performance reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
            "Refreshed App Store and Google Play listings across 20 storefronts and built 20+ Custom Product Pages for 12 markets to lift organic and paid conversion",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing pages from funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Growth", text: "User acquisition, activation and retention, A/B testing and experimentation, funnel and cohort analysis, ASO and Custom Product Pages, lifecycle and CRM marketing, referral and affiliate partnerships" },
        { label: "Channels", text: "Apple Search Ads, Meta, TikTok, Google Ads, X, LinkedIn, Iterable (email)" },
        { label: "AI & data", text: "Claude Code, Cursor, MCP connectors, API integrations, AI UGC production, automated dashboards, Power BI, Microsoft Clarity, Excel" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
