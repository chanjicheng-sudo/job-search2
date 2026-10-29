// FlexTrade Systems — Marketing (demand generation and product marketing), London.
// B2B trading technology for buy- and sell-side institutions.
//
// Bullets are her own wording from her latest BVNK, Noah and Plasma edits. Ordered for a
// B2B demand-gen role: institutional leads and client wins first, then regional GTM,
// client engagement, content, campaigns and metrics.
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
    "Fintech/crypto marketer working across demand generation and product marketing for retail, wealth " +
    "and institutional products in 26 markets. I plan and run campaigns myself, from paid media and " +
    "email to content and landing pages, and work closely with Sales, Product and Compliance. I use AI " +
    "and automation to ship faster, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, working with B2B Product Marketing on Institutional and Wealth projects",
            "Built an outreach channel of 80 crypto publishers for high net worth client acquisition that sourced 3 major clients",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch, running go-to-market across paid media, affiliate and referral channels, and establishing a compliance review process for the new market",
            "Grew cumulative perps trading volume from $100m to $500m in two months, and increased user retention by 12% through voice-of-customer research with active, inactive and churned users",
            "Developed an AI-powered UGC production workflow, delivering 100+ video assets across TikTok and Google Ads, increasing CTR from 0.4% to 1.15% (+188%), reducing CPI from $25 to $6 (−76%), and cutting production time by 75%",
            "Led international expansion of paid search from 2 to 26 countries, scaling 9 to 121 live campaigns and 47 to 2,597 keywords with country-level bid and creative strategy",
            "Implemented built-in API in CRM tools to localise communications into 24 languages, increasing email open rate by 10%",
            "Automated daily paid media channels reporting with Claude Code, Cursor and MCP connectors, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity, increased funnel progression by 5%",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30 min to almost immediate output",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "Demand generation", text: "Lead generation and prospect databases, account-based outreach, paid media (Google Ads, LinkedIn, Meta, TikTok, Apple Search Ads), email and CRM communications, campaign budgets and tracking" },
        { label: "Product marketing", text: "Go-to-market and regional launch planning, positioning and messaging, voice-of-customer research, competitor research, regulated messaging review with Compliance (UK FinProm)" },
        { label: "Content & creative", text: "Creative briefing and direction, agency and partner management, Figma, Photoshop, AI video production, landing pages" },
        { label: "Measurement", text: "Dashboards (Streamlit, Power BI), funnel and cohort analysis, structured test design, Excel, Microsoft Clarity, SQL, Python, R" },
        { label: "AI & automation", text: "Claude Code, Cursor, MCP and API integrations (Windsor.ai), vibe-coded apps and bots" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
