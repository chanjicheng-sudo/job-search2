// FlexTrade Systems — Marketing (demand generation and product marketing), London.
// B2B trading technology for buy- and sell-side institutions.
//
// Bullets are built on her own wording and number format. At her request the CV leads
// with problems she identified and solved with AI, then B2B results.
//
// Not claimed, because not on record: social media management, Mailchimp, Salesforce,
// Canva, Zoom Sessions, intent monitoring tools. See applications/flextrade/jd-read.md.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "flextrade-marketing",
  label: "FlexTrade — Marketing (demand gen and product marketing)",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Fintech/crypto marketer who finds the problem first, then solves it with AI. Working across demand " +
    "generation and product marketing for retail, wealth and institutional products in 26 markets, I have " +
    "used AI to replace manual creative production, reporting and localisation, and to open new client " +
    "channels. I work closely with Sales, Product and Compliance, and bring a data-science research " +
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
            "Identified that reliance on real creators was exhausting ad creative and built an AI-powered UGC production workflow, delivering 100+ video assets across TikTok and Google Ads, increasing CTR from 0.4% to 1.15% (+188%), reducing CPI from $25 to $6 (−76%), and cutting production time by 75%",
            "Solved outdated creator assets after the Earn rebrand by recreating them with AI UGC, driving 600+ installs in the first week after relaunch",
            "Spotted a high net worth acquisition opportunity during the MiCAR transition and built an 80-publisher contact list with AI, sourcing 3 major clients",
            "Replaced 30 min/day of manual paid media reporting with automation built in Claude Code, Cursor and MCP connectors, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Automated localisation of CRM communications into 24 languages with built-in CRM APIs, increasing email open rate by 10%",
            "Found through voice-of-customer research that users churned because they did not understand perps, and introduced an explainer that increased user retention by 12% as cumulative trading volume grew from $100m to $500m (5x) in two months",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, working with B2B Product Marketing on Institutional and Wealth projects",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch, running go-to-market across paid media, affiliate and referral channels, and establishing a compliance review process for the new market",
            "Led international expansion of paid search, increasing markets from 2 to 26 (13x), live campaigns from 9 to 121 (13x) and keywords from 47 to 2,597 (55x) with country-level bid and creative strategy",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30 min to almost immediate output",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity, increased funnel progression by 5%",
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "AI & automation", text: "Claude Code, Cursor, MCP and API integrations (Windsor.ai), vibe-coded apps and bots" },
        { label: "Demand generation", text: "Lead generation and prospect databases, account-based outreach, paid media (Google Ads, LinkedIn, Meta, TikTok, Apple Search Ads), email and CRM communications, campaign budgets and tracking" },
        { label: "Product marketing", text: "Go-to-market and regional launch planning, positioning and messaging, voice-of-customer research, competitor research, regulated messaging review with Compliance (UK FinProm)" },
        { label: "Content & creative", text: "Creative briefing and direction, agency and partner management, Figma, Photoshop, AI video production, landing pages" },
        { label: "Measurement", text: "Dashboards (Streamlit, Power BI), funnel and cohort analysis, structured test design, Excel, Microsoft Clarity, SQL, Python, R" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
