// Mastercard — Manager, Localization & Transformation (Signals & Localization Readiness).
// Market intelligence, regulatory signals, KPI dashboards, thought leadership.
//
// A strategy and analytics role, so signal-to-decision evidence leads (MiCAR, Malaysia
// regulation research), then dashboards, localisation and multi-market work. The MRes
// mark is shown because analytical rigour is what is being bought. Her rules: result-led,
// change in brackets, no filler, no keyword counts, simple skills lines.
//
// Not claimed: newsletters or thought-leadership writing, geopolitics, payments-network
// strategy, management. See applications/mastercard/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "mastercard-localization",
  label: "Mastercard — Manager, Localization & Transformation",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Data-driven marketer working across 26 markets in regulated fintech, with a data-science research " +
    "background. I turn market and regulatory signals into business decisions, build the dashboards and " +
    "datasets behind them, and localise strategy for each market. I work with Compliance, Legal, Product " +
    "and Engineering, and speak English, Mandarin, Cantonese and Malay.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), and turning that signal into an outreach programme to 80 publishers built with AI",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by researching Malaysia's digital asset regulations, leading a localised go-to-market and establishing a compliance review process for the new market",
            "Cut reporting time by ~10 hours a month by building automated daily performance reporting with Claude Code and MCP connectors, and led its launch as a company-wide Streamlit dashboard with Data Engineering and Security",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 CPI by expanding paid search from 2 to 26 markets (13x) with country-level strategy",
            "Increased email open rate by 10% by localising CRM communications in Iterable into 24 languages with built-in APIs",
            "Increased user retention by 12% and grew perps trading volume from $100m to $500m (5x) in two months by leading customer research with active, inactive and churned users and turning the findings into product changes",
            "Generated 20+ active leads for Institutional business development by building and curating a 100-operator prospect database",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests across 26 countries and reallocating budget from 26 underperforming campaigns",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail products and 20 app-store storefronts in UK, US and EU markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing and promotional pages, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
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
        { label: "Market intelligence", text: "Regulatory and market signal monitoring (MiCAR, Malaysia), competitor research, market entry analysis, dataset building and curation" },
        { label: "Data & dashboards", text: "Excel, Power BI, Streamlit, SQL, Python, R, experimental design, causal inference, statistical analysis" },
        { label: "Localisation", text: "Multi-market strategy across 26 markets, content localisation in 24 languages, regulated messaging across UK, US, EU and Malaysia" },
        { label: "AI & automation", text: "Claude Code, Cursor, MCP and API integrations, automated reporting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
