// BVNK (Mastercard) — Product Marketing Manager. London / NYC.
//
// Written in Jessie's own register, matching the Kraken and Plasma variants: verb, what,
// numbers. No explanatory subclauses, no reasoning inside a bullet, no [ADD:] annotations
// in the document. Gaps are tracked in applications/bvnk/jd-read.md and OPEN-QUESTIONS.md.
//
// Bullets follow the JD's four sections in order: Customer Insights, Customer
// Communications, Product Adoption Campaigns, then Enablement & Systems. Paid acquisition
// compresses to one closing line. It is the least relevant thing she does for this req.
//
// "Stablecoin" is deliberately not claimed. Nothing in the performance note is
// stablecoin-specific work, and BVNK will probe it.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "bvnk-pmm",
  label: "BVNK — Product Marketing Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Crypto marketer working across retail, wealth and institutional products, focused on customer " +
    "research, regulated customer communications and AI automation. I have run research across 3 " +
    "customer segments, written and reviewed customer-facing messaging with Compliance across UK, US " +
    "and EU markets, and built the reporting and automation workflows the team runs on. I use Claude " +
    "Code and Cursor daily and build MCP and API integrations. Data-science research background, " +
    "working in 4 languages.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Designed and ran a customer survey across 3 customer segments, returning 114 responses at a 14% response rate",
            "Sourced 3 major Wealth clients through an outreach channel of 80 crypto publishers, and built a 100-operator database for Institutional business development",
            "Implemented API tools to translate CRM communications into local languages, increasing email open rate by 10%",
            "Developed and reviewed regulated customer-facing messaging across all retail products and 20 app-store storefronts in UK, US and EU markets",
            "Partnered with Front-End Engineering to ship refreshed Personal and Earn product pages across jurisdictions",
            "Developing go-to-market for the loans product in Malaysia, covering competitor review, brand and tone, and KOL, affiliate and referral partnerships",
            "Automated daily reporting with Claude Code and Cursor, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Built MCP and API integrations and internal bots to remove repeat manual work across the team",
            "Developed an AI-powered UGC production workflow, delivering 100+ video assets and cutting production time by 75%",
            "Ran 128 structured campaign tests across 26 markets, reallocating budget away from 26 underperforming campaigns",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Managed £50k+ monthly paid budget managing ads and conversion funnels, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "AI & automation", text: "Automation workflows (Claude Code, Cursor), MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), prompt engineering, evaluation of 6 model providers, AI UGC workflow design, tools: Runway, Jitter, Gemini, ElevenLabs" },
        { label: "Customer insight", text: "Survey design and segmentation, customer and competitor research (Appfollow), funnel and cohort analysis, structured test design, Power BI, Excel, Microsoft Clarity, R, Python, SQL" },
        { label: "Go-to-market", text: "Market entry planning, positioning and messaging, brand and tone, CRM and localised customer communications, product page and app-store content, KOL, affiliate and referral partnerships" },
        { label: "Cross-functional", text: "Regulated messaging review with Compliance, delivery with Front-End Engineering, Data Engineering and Security, multi-market delivery across UK, US and EU" },
        { label: "Marketing workflows", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn, creative briefing and direction, Figma, Photoshop" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
