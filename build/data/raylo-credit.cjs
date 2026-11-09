// Raylo — Credit and Fraud Strategy (analytics). FCA-regulated device subscriptions.
// Decisioning logic, experiments on first-time customers, eligibility, monitoring, AI
// in analytics, SQL required, Python a strong plus.
//
// Not a crypto company and the JD does not say "crypto", so "digital assets" is used.
// Analytics evidence leads: experiments, performance drivers, monitoring, growth at flat
// cost. MRes mark shown (they ask for a strong analytical degree). Her rules: result-led,
// change in brackets, no filler, no keyword counts, page at least 85% full.
//
// Not claimed: credit risk, fraud, decisioning platforms, data warehouses, scorecards.
// See applications/raylo/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "raylo-credit",
  label: "Raylo — Credit and Fraud Strategy",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Analytical marketer working with SQL, Python and AI tools every day in regulated fintech and digital " +
    "assets, with a data-science research background. I design experiments, find what drives performance " +
    "and turn it into decisions, and I build my own monitoring and automation with Claude Code. I work " +
    "across Product, Engineering, Data and Compliance.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Cut UK CPI by 21.5% while installs rose 30.2% by designing and analysing 128 structured experiments across 26 markets, scaling 5 winning campaign groups and reallocating ~$21k away from 26 underperformers",
            "Increased user retention by 12% and grew cumulative trading volume from $100m to $500m (5x) in two months by investigating the drivers of churn on our perps product through research with active, inactive and churned users, then working with Product to change the in-app explainer",
            "Cut reporting time by ~10 hours a month by building automated performance reporting and monitoring with Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 paid search CPI by expanding paid search from 2 to 26 markets (13x) with country-level bid strategy",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading go-to-market for a new market and setting up a compliance review process with Legal",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%) and cutting paid social CPI from $25 to $6 (−76%)",
            "Increased email open rate by 10% by localising Iterable (CRM) communications into 24 languages with built-in APIs",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), and building an outreach list of 80 publishers with AI",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail products and 20 app-store storefronts in UK, US and EU markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the pages",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Analytics", text: "SQL, Python, R, experimental design, causal inference, statistical analysis, A/B testing, cohort and funnel analysis" },
        { label: "AI tools", text: "Claude Code, Cursor, MCP and API integrations, automated monitoring and reporting" },
        { label: "Data & BI", text: "Power BI, Streamlit, Excel, Microsoft Clarity" },
        { label: "Domain", text: "Lending product launch (Malaysia), regulated financial promotions (UK FinProm), consumer fintech" },
        { label: "Cross-functional", text: "Product, Engineering, Data Engineering, Security, Compliance and Legal, across UK, US, EU and Malaysia" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
