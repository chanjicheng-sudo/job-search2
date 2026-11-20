// Bleap — Operations Manager (remote). MiCA-authorised fintech, supervised by Latvijas
// Banka. Generalist operations: root-cause problems, automate processes, launch markets.
//
// The JD uses "crypto", so "crypto" stays. Root cause and fix leads, then automation,
// launches from scratch and data. MRes mark shown (they ask for a STEM degree). Her
// rules: result-led, change in brackets, no filler, no keyword counts, simple skills.
//
// See applications/bleap/jd-read.md for the STEM-degree and remote-location questions.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "bleap-ops",
  label: "Bleap — Operations Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Problem solver in regulated fintech and crypto, working across 26 markets with Product, Engineering " +
    "and Compliance. I find the root cause, fix it, and automate what should not be done by hand, using " +
    "SQL, Python and AI tools like Claude Code. I bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Increased user retention by 12% by root-causing churn on our perps product through research with active, inactive and churned users, then working with Product to make the in-app explainer persistent and rework the help page",
            "Cut reporting time by ~10 hours a month by replacing manual reporting with automation built in Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
            "Increased email open rate by 10% by automating localisation of Iterable (CRM) communications into 24 languages with built-in APIs",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by building the go-to-market for a new market from scratch, including a compliance review process with Legal",
            "Cut production time by 75% and lifted CTR from 0.4% to 1.15% (+188%) by replacing reliance on external creators with the company's first in-house AI UGC workflow",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests across 26 markets, finding 26 underperforming campaigns and reallocating ~$21k of budget",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCA, and building an outreach list of 80 crypto publishers with AI",
            "Reviewed regulated messaging across all retail products with Compliance in UK, US and EU markets, and supported the rollout of the UK FinProm approval process",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 CPI by expanding paid search from 2 to 26 markets (13x) with country-level bid and creative strategy",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the pages",
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
        { label: "Operations", text: "Root-cause analysis, process design and documentation, automation, new market launches, compliance processes (UK FinProm, MiCA, Malaysia)" },
        { label: "Technical", text: "SQL, Python, R, APIs and MCP integrations, Claude Code, Cursor, Streamlit, Power BI, Excel" },
        { label: "Tools", text: "Iterable, Microsoft Clarity, Appfollow, Apple Search Ads, Google Ads, Meta, TikTok" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
