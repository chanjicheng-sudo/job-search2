// Noah — first dedicated digital marketing hire (B2B stablecoin payments).
//
// Blockchain.com bullets are her own edit, kept verbatim, plus the Earn rebrand line
// (bullet 2) in her format.
//
// A growth generalist role: website and CRO, SEO/AEO, social, HubSpot, funnel, paid and
// ABM, content, measurement. Closer to her core than the PMM roles, so paid scaling and
// testing lead, with pipeline-shaped results (Institutional leads, HNW clients) next.
//
// Not claimed, because not on record: X paid campaigns, HubSpot, SEO/AEO, social content.
// Listed in applications/noah/jd-read.md for interview prep.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "noah-digital",
  label: "Noah — Digital Marketing",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer specialising in paid acquisition, conversion and the data and AI systems behind " +
    "them, across 9 channels and 26 markets in regulated crypto. I build rather than delegate: campaigns, " +
    "landing pages, dashboards and automation, using Claude Code and Cursor every day. I have worked " +
    "across retail, wealth and institutional products, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Developed an AI-powered UGC production workflow, delivering 100+ video assets across TikTok and Google Ads, increasing CTR from 0.4% to 1.15% (+188%), reducing CPI from $25 to $6 (−76%), and cutting production time by 75%",
            "Recreated the Earn product creative with AI UGC after the Earn rebrand, driving 600+ installs in the first week after relaunch",
            "Automated daily paid media channels reporting with Claude Code, Cursor and MCP connectors, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Grew cumulative perps trading volume 5x from $100m to $500m in two months, and increased user retention by 12% through voice-of-customer research with active, inactive and churned users",
            "Reduced CPI on UK campaigns by 21.5% while installs increased 30.2%, and scaled the core US campaign to 3x daily users acquired through CPP and SKAG testing and optimization",
            "Built an outreach channel of 80 crypto publishers for high net worth client acquisition that sourced 3 major clients",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch, running go-to-market across paid media, KOL, affiliate and referral channels",
            "Localised CRM communications into 24 languages with API tools, increasing email open rate by 10%",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity, increased funnel progression by 5%",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30 min to almost immediate output",
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "Paid & growth", text: "LinkedIn, Google Ads, Meta, TikTok, Apple Search Ads, international campaign structure, keyword strategy, creative testing, bidding and budget allocation, account-based prospecting" },
        { label: "Website & funnel", text: "Landing page and conversion optimisation, funnel mapping and analysis, Microsoft Clarity, Figma, Photoshop, app-store and product page content" },
        { label: "CRM & measurement", text: "CRM localisation and email, automated dashboards (Streamlit), Power BI, Excel, SQL, Python, R, structured test design, cohort analysis" },
        { label: "AI & automation", text: "Claude Code, Cursor, MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), AI UGC production, tools: Runway, Jitter, Gemini, ElevenLabs" },
        { label: "Content & creative", text: "Creative strategy and briefing, 30+ briefs across 9 channels, agency and partner management, brand and tone" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
