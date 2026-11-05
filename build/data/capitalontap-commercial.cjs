// Capital on Tap — Commercial Strategy Manager (Growth team, reports to Head of UK
// Growth). Analyst, strategist and operator: new channels, unit economics, recommendations
// turned into operational reality. Excel strong, SQL and Looker a bonus. 2–5 years at a
// strategy consultancy or fast-paced start-up. 2:1 or above.
//
// Not a crypto company, so "digital assets" is used. Commercial evidence leads: budget
// reallocation, market and channel expansion, opportunities spotted and executed. MRes
// mark shown. Her rules: result-led, change in brackets, no filler, page at least 85%.
//
// Not claimed: consulting, Looker, unit-economics modelling of a product change. See
// applications/capitalontap/jd-read-commercial.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "capitalontap-commercial",
  label: "Capital on Tap — Commercial Strategy Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth analyst and operator in regulated fintech and digital assets, working across 26 markets. I " +
    "turn commercial questions into analysis, recommend what to do, and then make it happen myself, from " +
    "opening new channels and markets to building the reporting behind them. Strong in Excel, SQL and " +
    "Python, with a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Cut UK CPI by 21.5% while installs rose 30.2% by analysing 128 structured tests across 26 markets and reallocating ~$21k from 26 underperforming campaigns to 5 scalable campaign groups",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 paid search CPI by expanding paid search from 2 to 26 markets (13x) with country-level bid strategy",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by building the go-to-market for a new market, from channel assessment to KOL, affiliate and referral partnerships and a compliance review with Legal",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), and turning it into an outreach channel of 80 publishers built with AI",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by investigating the drivers of churn with active, inactive and churned users and working with Product on the fix",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting paid social CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days of the yield product relaunch",
            "Saved the team ~10 hours a month by automating daily performance reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
            "Increased email open rate by 10% by localising Iterable (CRM) communications into 24 languages with built-in APIs",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail products and 20 app-store storefronts in UK, US and EU markets",
            "Delivered 30+ creative briefs and 40 ads across 9 channels, and directed 50+ assets to 3 external acquisition partners across multiple markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Excel, Power BI and Microsoft Clarity and rebuilding the pages",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Commercial analysis", text: "Unit economics (CPI, CAC, ROAS), budget allocation, channel and new-market assessment, experiment design, funnel and cohort analysis" },
        { label: "Data", text: "Excel, SQL, Python, R, Power BI, Streamlit, Microsoft Clarity" },
        { label: "AI & automation", text: "Claude Code, Cursor, MCP and API integrations, automated reporting" },
        { label: "Cross-functional", text: "Product, Engineering, Data Engineering, Compliance and Legal, across UK, US, EU and Malaysia" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
