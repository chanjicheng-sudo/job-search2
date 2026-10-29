// FlexTrade Systems — Marketing (demand generation and product marketing), London.
// B2B trading technology for buy- and sell-side institutions.
//
// Bullets are built on her own wording and number format. At her request the CV leads
// with problems she identified and solved with AI, then B2B results.
// Every bullet is result-led with an active verb, at her request: result, then "by"
// and the action.
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
            "Increased CTR from 0.4% to 1.15% (+188%) and reduced CPI from $25 to $6 (−76%) by building an AI video (UGC) production workflow to replace exhausted creator content, delivering 100+ video assets and cutting production time by 75%",
            "Drove 600+ installs in the first week of the Earn relaunch by recreating outdated creator assets with AI video after the rebrand",
            "Sourced 3 major high net worth clients by spotting an acquisition opportunity during the transition to MiCAR, the EU's crypto regulation, and building an 80-publisher contact list with AI",
            "Eliminated 30 min/day of manual reporting by automating paid media reporting with Claude Code, Cursor and MCP connectors, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Increased email open rate by 10% by automating localisation of CRM communications into 24 languages with built-in CRM APIs",
            "Grew cumulative perpetual futures trading volume from $100m to $500m (5x) in two months and increased user retention by 12% by introducing a product explainer after voice-of-customer research showed churned users did not understand the product",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, partnering with B2B Product Marketing on Institutional and Wealth projects",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by running go-to-market across paid media, affiliate and referral channels and establishing a compliance review process for the new market",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 CPI by expanding paid search from 2 to 26 markets (13x) with country-level bid and creative strategy",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Sustained 120% ROAS on £50k+ monthly paid budget with full accountability for efficiency",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Marketing", text: "Demand generation, lead generation, product marketing, go-to-market, marketing planning, digital campaign management, email marketing, content creation, budget management" },
        { label: "Tools", text: "Google Ads, LinkedIn Ads, Meta, TikTok, Adobe Creative Cloud (Photoshop), Figma, Microsoft Office (Excel), Power BI, Microsoft Clarity" },
        { label: "AI & data", text: "Claude Code, Cursor, MCP and API integrations, AI content production, dashboards, SQL, Python, R" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
