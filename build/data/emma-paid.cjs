// Emma — Performance Marketing, paid social (subscription app). London, office 5 days.
// Not crypto, so "digital assets". Paid social creative leads (AI UGC, full results), then
// scaling, A/B tests, full-cycle creative (JD asks for it, so briefs stay), tracking and
// automation, then retention and CRM. Title: Graduate Growth Marketing Manager.
//
// Not claimed: Google App Campaigns specifically, MMP or SKAN, subscription metrics.
// See applications/emma/jd-read-paid.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "emma-paid",
  label: "Emma — Performance Marketing (paid social)",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Performance marketer at a consumer mobile fintech app, running paid acquisition across Meta, TikTok, Apple " +
    "Search Ads and Google in 26 markets, with a focus on scaling high-performing creative. I run A/B " +
    "tests, make data-driven creative decisions, and automate tracking and reporting with Claude Code and " +
    "MCP connectors. I use AI to solve marketing problems, whether improving current workflows or opening " +
    "new acquisition funnels.",

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
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by scaling Apple Search Ads from 2 to 26 markets and from 9 to 121 campaigns (13x)",
            "Grew the core US branded campaign from 178 to 373 installs a day (~2.1x) while monitoring and optimising 121 live campaigns daily across 26 markets",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured A/B tests, scaling the 5 winning campaign groups and cutting 26 underperformers",
            "Delivered 100+ AI video assets for paid social on TikTok, Meta and Google, and 30+ creative briefs and 40 ads across 9 channels, using performance data to guide creative development",
            "Cut reporting time by ~10 hours a month by automating campaign reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard, and set up ad accounts and conversion tracking across Meta, TikTok, Google and X",
            "Increased user retention by 12% by researching why active, inactive and churned users dropped off our perps product, then working with Product to rework the in-app explainer and help page",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages, keeping brand messaging consistent across markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing pages from funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Paid acquisition", text: "Performance marketing, paid social and social media advertising (Meta, TikTok), Apple Search Ads, Google Ads, X, LinkedIn, campaign management, bidding, budget allocation, scaling high-performing creative" },
        { label: "Creative", text: "Full-cycle creative production, AI UGC, creative briefs, creative testing, copywriting, Canva, Figma, Photoshop" },
        { label: "Data & automation", text: "A/B testing, digital data analytics, conversion tracking, Apple Search Ads attribution, reporting automation with Claude Code and MCP connectors, Power BI, Microsoft Clarity, Excel" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
