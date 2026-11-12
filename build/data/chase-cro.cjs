// Chase UK (J.P. Morgan) — Conversion Rate Optimisation Manager (web and app stores).
// Not crypto, so "digital assets". App store pages and experiments lead, then hypotheses
// from research, web page work, AI creative, monitoring, regulated messaging (JD: highly
// regulated industry). Title: Graduate Growth Marketing Manager.
//
// Not claimed: CMS or CRO testing platforms, JIRA, web SEO, AIO.
// See applications/chase/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "chase-cro",
  label: "Chase UK — Conversion Rate Optimisation Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a consumer fintech app, focused on conversion across web, App Store and Google " +
    "Play in 26 markets. I build evidence-based hypotheses from qualitative and quantitative research, run " +
    "experiments at pace, and manage Custom Product Pages and store listings aligned to acquisition " +
    "campaigns, in a highly regulated industry. I use AI to solve marketing problems, whether improving " +
    "current workflows or opening new acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding Apple Search Ads from 2 to 26 markets and building 20+ Custom Product Pages for 12 markets aligned to each campaign",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured experiments on keywords, bids, creative and Custom Product Pages, prioritising and scaling the 5 winning campaign groups",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by turning qualitative and quantitative research with active, inactive and churned users into hypotheses, then working with Product to rework the in-app explainer and help page",
            "Refreshed App Store and Google Play store listings across 20 storefronts, and partnered with Front-End Engineering to deliver refreshed Personal and yield product web pages across jurisdictions",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Cut reporting time by ~10 hours a month by building automated performance monitoring and reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging and app store content across all retail products in UK, US and EU markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing pages from funnel analysis and session recordings in Microsoft Clarity, Power BI and Excel",
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
        { label: "CRO & experimentation", text: "Conversion rate optimisation, A/B testing, hypothesis-led experimentation, experiment roadmap and prioritisation, website optimisation, landing page and customer journey optimisation, customer acquisition" },
        { label: "App stores", text: "Custom Product Pages, App Store and Google Play store listings, app store search optimisation (ASO), Apple Search Ads" },
        { label: "Analytics & tools", text: "Microsoft Clarity, Power BI, Excel, funnel analysis, page performance metrics, data analysis and insight generation, qualitative and quantitative research, Claude Code, MCP connectors, Figma, Photoshop" },
        { label: "Ways of working", text: "Cross-functional work with Product, Front-End Engineering, Data and Compliance, stakeholder management, commercial focus on acquisition cost and ROAS" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
