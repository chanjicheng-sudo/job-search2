// Allica Bank — Growth Manager (activation, engagement, BRA customer journey). SME bank.
// Not crypto, so "digital assets". Root cause of disengagement leads, then tools other
// teams adopt, experimentation, ambiguity and alignment, lifecycle, B2B. Problem-solving
// framing. Title: Graduate Growth Marketing Manager.
//
// Not claimed: hands-on SQL on large datasets, SME banking, scoring frameworks,
// leadership presentations. See applications/allica/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "allica-growth",
  label: "Allica Bank — Growth Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer in fintech and digital assets who finds out why customers stall and builds what " +
    "moves them forward, across retail, wealth and institutional products in 26 markets. I analyse " +
    "customer behaviour by cohort and funnel stage, run experiments, and turn root causes into tools and " +
    "processes other teams adopt, working across Product, Data, Sales and Legal. I use AI to solve " +
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
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by finding the root cause of disengagement through research with active, inactive and churned user cohorts, then working with Product to rework the in-app explainer and help page",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Cut reporting time by ~10 hours a month by building automated performance reporting with Claude Code and MCP connectors, then aligning Data Engineering and Security to ship it as a company-wide dashboard other teams rely on",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running an experimentation pipeline of 128 structured tests across 26 markets, prioritising and scaling the 5 winning campaign groups",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading a new-market launch with no precedent on my own initiative, aligning Legal on a new compliance review process",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) lifecycle communications into 24 languages",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database with the Senior B2B Product Marketing Manager",
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding Apple Search Ads from 2 to 26 markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding where customers stalled through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the customer journey",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Growth & lifecycle", text: "Customer journey and lifecycle analysis, onboarding, activation, engagement, product usage and retention, cohort analysis, root-cause analysis, customer research and insights, engagement metrics" },
        { label: "Experimentation", text: "Hypothesis-led problem solving, experimental design, A/B testing and optimisation, test prioritisation, data-driven, evidence-led recommendations, stakeholder alignment across Product, Data, Sales and Legal" },
        { label: "Data & systems", text: "Analytics (Power BI, Excel, Microsoft Clarity), Iterable (CRM), automation with Claude Code and MCP connectors, API integrations, dashboards, SQL and Python from research" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
