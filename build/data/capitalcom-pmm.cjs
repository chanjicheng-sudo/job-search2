// Capital.com — Senior Product Marketing Manager. Retail trading platform (CFDs).
//
// Rebuilt Nov 2026 with her rules: result-led, change in brackets, no filler, no keyword
// counts, most relevant first, simple skills lines. Perps leads: derivatives, trader
// insight and a product change, which is the JD's first responsibility.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "capitalcom-pmm",
  label: "Capital.com — Senior Product Marketing Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Fintech/digital asset marketer working across go-to-market, positioning and product adoption for trading, " +
    "lending and yield products in 26 markets. I solve marketing problems with AI, and pull my own analysis " +
    "in Claude Code and Cursor. I work directly with Product, Compliance and creative teams on regulated " +
    "messaging across UK, US and EU markets, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Grew cumulative perps trading volume from $100m to $500m (5x) in two months and increased user retention by 12% by leading voice-of-customer research with active, inactive and churned traders and making the product and risk explainer persistent",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading its go-to-market across competitor review, positioning, brand and tone, and influencer, affiliate and referral partnerships, and establishing a compliance review process for the new market",
            "Drove 600+ installs in the first 7 days of the yield product relaunch by recreating outdated creator assets with AI video after the rebrand",
            "Cut UK acquisition cost by 21.5% while volume rose 30.2% by running 128 structured messaging tests across 26 countries and scaling 5 winning campaign groups",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCAR and building an 80-publisher contact list with AI",
            "Increased CTR from 0.4% to 1.15% (+188%) and cut production time by 75% by building the company's first in-house AI content production workflow, delivering 100+ video assets from 30+ creative briefs",
            "Increased email open rate by 10% by localising CRM communications into 24 languages with built-in CRM APIs",
            "Saved the team ~10 hours a month by automating daily performance reporting with Claude Code and MCP connectors, and led its launch as a company-wide Streamlit dashboard with Data Engineering and Security",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Product marketing", text: "Go-to-market, product launches, positioning and messaging architecture, product adoption, competitive and market intelligence, onboarding and in-app messaging, lifecycle and CRM" },
        { label: "Trading & compliance", text: "Derivatives (perpetual futures), retail investment products, financial promotions (UK FinProm, Adclear), multi-jurisdiction messaging (UK, US, EU, Malaysia)" },
        { label: "AI & data", text: "Claude Code, Cursor, MCP and API integrations, AI content production, dashboards (Streamlit), Power BI, SQL, Python, R, A/B testing, cohort analysis" },
        { label: "Creative", text: "Creative briefing and direction, brand and tone, agency and partner management, Figma, Photoshop" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
