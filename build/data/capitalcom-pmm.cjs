// Capital.com — Senior Product Marketing Manager. Retail trading platform (CFDs).
//
// Built from her final BVNK CV, re-weighted for a retail broker. The perps work leads:
// perps are derivatives, the JD's nice-to-have, and the research-to-product-change loop
// is the JD's first responsibility. Multi-jurisdiction regulated messaging gets its own
// bullet because the JD names UK, Cyprus, Australia and the UAE.
//
// Institutional leads are dropped: no bearing on a retail broker. Bullets in her
// register: result first, no subclause reasoning.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "capitalcom-pmm",
  label: "Capital.com — Senior Product Marketing Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Fintech/crypto marketer owning go-to-market, messaging and product adoption for trading, lending " +
    "and earn products across 26 markets. I start from user research and trading data, and use Claude " +
    "Code and Cursor to pull my own analysis and build the automation the team runs on. I work directly " +
    "with Product, Compliance, Legal and creative teams on regulated messaging across UK, US and EU " +
    "markets, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Grew cumulative perps trading volume 5x, from $100m to $500m in two months, and user retention by 12% by surveying active, inactive and churned traders and adding a perps and risk explainer to the product",
            "Drove 600+ installs in the first week of the Earn rebrand by recreating the creator assets under the new brand with an AI UGC workflow, cutting production time per video by 75%",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch, leading its go-to-market across competitor review, brand and tone, and KOL, affiliate and referral partnerships, and establishing a compliance review process for the new market",
            "Kept product messaging consistent across 26 markets, 20 app-store storefronts and 20+ Custom Product Pages in 12 markets, reviewing regulated copy for UK, US and EU with Compliance and helping roll out the UK FinProm approval process",
            "Sourced 3 major high net worth clients by identifying an acquisition opportunity during the MiCAR transition, building an 80-publisher contact list with AI and running the outreach",
            "Delivered 30+ creative briefs and 40 ads across 9 channels, and directed 50+ assets to 3 external partners across multiple markets",
            "Tested product messaging across 26 countries through 128 structured tests, scaling 5 winning campaign groups and cutting UK acquisition cost by 21.5% while volume rose 30.2%",
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
            "Managed £50k+ monthly paid budget, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "Product marketing", text: "Go-to-market and launch planning, positioning and messaging architecture, competitive and market intelligence, onboarding, lifecycle and CRM communications, product page and app-store content, multi-jurisdiction regulated messaging (UK FinProm, Adclear), derivatives (perps)" },
        { label: "Data & insight", text: "Analysis in Claude Code and Cursor, survey design and segmentation, funnel and cohort analysis, structured test design, competitor research (Appfollow), Power BI, Excel, Microsoft Clarity, R, Python, SQL" },
        { label: "AI & automation", text: "Automation workflows, MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), AI content workflow design, tools: Runway, Jitter, Gemini, ElevenLabs" },
        { label: "Creative & brand", text: "Creative briefing and direction, brand and tone, agency and partner management, Figma, Photoshop, Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
