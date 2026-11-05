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
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built automated reporting with Claude Code and MCP connectors and shipped it to production as a company-wide dashboard with Data Engineering and Security, saving the team ~10 hours a month",
            "Built API tools that localise Iterable (CRM) communications into 24 languages, increasing email open rate by 10%",
            "Built the company's first in-house AI UGC workflow after evaluating 6 AI model providers and two weeks of prompt engineering, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%) and cutting paid social CPI from $25 to $6 (−76%)",
            "Built MCP and API integrations and internal bots (deployed on fly.io) to remove repeat manual work across the marketing team, and own most of the team's AI tools",
            "Recreated outdated creator assets with AI video after the Earn rebrand, driving 600+ installs in the first 7 days",
            "Built an 80-publisher outreach list with AI after spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), sourcing 3 major high net worth clients",
            "Increased user retention by 12% by mapping why users churned through research with active, inactive and churned users before proposing a fix, then working with Product to change the in-app explainer",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing and promotional pages, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "AI building", text: "Claude Code, Cursor, MCP connectors, API integrations, internal bots and vibe-coded apps (deployed on fly.io), prompt engineering, LLM evaluation across 6 providers" },
        { label: "Data", text: "SQL, Python, R, Power BI, Streamlit, Excel, Microsoft Clarity" },
        { label: "Tools", text: "Iterable, Windsor.ai, Apple Search Ads, Google Ads, Meta, TikTok" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
