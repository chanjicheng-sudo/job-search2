// Capital on Tap — AI enablement / automation role (embedded AI builder). SME fintech,
// London, 3 days in the office. Builds MCPs, plugins, agentic workflows and automations
// inside teams, trains them, measured on weekly active users and impact.
//
// Not a crypto company and the JD does not say "crypto", so "digital assets" is used.
// AI-built work leads and bullets open with the AI action, as for Odin. MRes mark shown.
//
// Not claimed: n8n, Zapier, workshops or training delivered, written documentation,
// weekly-active-user tracking. See applications/capitalontap/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "capitalontap-ai",
  label: "Capital on Tap — AI enablement",
  name: "JESSIE CHAN",
  contact,

  profile:
    "AI builder in regulated fintech and digital assets. I find where a team loses time, build the fix " +
    "myself with Claude Code, Cursor, MCPs and APIs, and ship it to production with Engineering and " +
    "Security. I own most of the AI tools in my marketing team, and bring a data-science research " +
    "background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built MCP connectors, API integrations and internal bots, including automated reporting shipped to production as a company-wide dashboard with Data Engineering and Security, saving the team ~10 hours a month",
            "Built API tools that localise Iterable (CRM) communications into 24 languages, increasing email open rate by 10%",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days of the yield product relaunch",
            "Built an 80-publisher outreach list with AI after spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), sourcing 3 major high net worth clients",
            "Increased user retention by 12% by mapping why users churned through research with active, inactive and churned users before proposing a fix, then working with Product to change the in-app explainer",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by building the go-to-market and a compliance review process for a new market from scratch",
            "Cut UK CPI by 21.5% while installs rose 30.2% by analysing 128 structured tests across 26 markets and reallocating budget away from 26 underperforming campaigns",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, working with B2B Product Marketing",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 paid search CPI by expanding paid search from 2 to 26 markets (13x) with country-level bid and creative strategy",
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
        { label: "AI building", text: "Claude Code, Cursor, MCP connectors, API integrations, internal bots and vibe-coded apps, prompt engineering" },
        { label: "Data", text: "SQL, Python, R, Power BI, Streamlit, Excel, Microsoft Clarity" },
        { label: "Tools", text: "Iterable, Windsor.ai, Apple Search Ads, Google Ads, Meta, TikTok" },
        { label: "Cross-functional", text: "Product, Engineering, Data Engineering, Security, Compliance and Legal" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
