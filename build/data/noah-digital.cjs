// Noah — first dedicated digital marketing hire (B2B stablecoin payments).
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
            "Scaled paid search from 2 to 26 countries, 9 to 121 campaigns and 47 to 2,597 keywords, growing daily installs ~3x from 187 to 562 while holding CPI flat at ~$1.50",
            "Ran 128 structured campaign tests, scaling 5 winning campaign groups and cutting 26 underperformers, which cut UK CPI by 21.5% while installs rose 30.2%",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, working with B2B Product Marketing on Institutional and Wealth projects",
            "Sourced 3 major high net worth clients by identifying an acquisition opportunity during the MiCAR transition, building an 80-publisher contact list with AI and running the outreach",
            "Grew cumulative perps trading volume 5x, from $100m to $500m in two months, and user retention by 12% through voice-of-customer research with active, inactive and churned users",
            "Built the company's first in-house AI UGC workflow, delivering 100+ videos, lifting CTR from 0.4% to 1.15% and cutting paid social CPI from $25 to $6 (−76%); its Earn rebrand videos drove 600+ installs in the first week",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch, leading go-to-market across paid media, KOL, affiliate and referral channels",
            "Localised CRM communications into 24 languages with API tools, increasing email open rate by 10%",
            "Automated daily performance reporting with Claude Code and led its launch as a company-wide Streamlit dashboard with Data Engineering and Security, saving the team ~10 hours a month",
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
