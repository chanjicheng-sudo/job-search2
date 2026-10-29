// BVNK (Mastercard) — Product Marketing Manager. London / NYC.
//
// Built on the base CV she pasted in October 2026, keeping her wording where a bullet
// carries over, in the same register as the Kraken and Plasma variants: verb, what,
// numbers. No explanatory subclauses, no reasoning inside a bullet, no [ADD:] annotations
// in the document. Gaps are tracked in applications/bvnk/jd-read.md and OPEN-QUESTIONS.md.
//
// Bullets follow the JD's four sections in order: Customer Insights, Customer
// Communications, Product Adoption Campaigns, then Enablement & Systems. Paid work
// closes the role in two lines. It is the least relevant thing she does for this req.
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
    "Fintech/crypto marketer with hands-on experience across customer research, regulated customer " +
    "communications and go-to-market, covering retail, wealth and institutional products in 26 markets. " +
    "I use AI to solve go-to-market problems, building the automation, reporting, MCP and API " +
    "integrations and internal bots the team runs on. Experienced in working with Compliance, Product " +
    "and Engineering in a regulated environment, with a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built an outreach channel of 80 crypto publishers for high net worth client acquisition that sourced 3 major clients, plus a 100-operator database for institutional business development",
            "Supported Retail, Wealth and Institutional customer research and prospecting, including a survey across 3 customer segments returning 114 responses",
            "Implemented API tools to translate CRM communications into local languages, increasing email open rate by 10%",
            "Developed and reviewed regulated customer-facing messaging across all retail products and 20 app-store storefronts in UK, US and EU markets",
            "Developing go-to-market for the loans product in Malaysia, covering competitor review, brand and tone, and KOL, affiliate and referral partnerships",
            "Automated daily paid media channels reporting with Claude Code, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Built MCP and API integrations and internal bots to remove repeat manual work across the team",
            "Developed an AI-powered UGC production workflow, delivering 100+ video assets across TikTok and Google Ads, increasing CTR from 0.4% to 1.15% (+188%), reducing CPI from $25 to $6 (−76%), and cutting production time by 75%",
            "Ran 128 structured campaign tests across 26 countries, identifying 5 scalable campaign groups and reallocating budget away from 26 underperforming campaigns",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
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
        { label: "AI & automation", text: "Automation workflows (Claude Code, Cursor), MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), AI UGC workflow design (avatar, voice, motion, video), tools: Runway, Jitter, Gemini, Seedance, Wan, Seeaudio, ElevenLabs" },
        { label: "Research & insight", text: "Survey design and segmentation, customer research and prospecting, competitor research (Appfollow), funnel and cohort analysis, experimental test design, Power BI, Excel, Microsoft Clarity, R, Python, SQL" },
        { label: "Go-to-market", text: "Market entry planning, positioning and messaging, brand and tone, CRM and localised customer communications, app-store content, KOL, affiliate and referral partnerships, regulated messaging review with Compliance" },
        { label: "Creative & paid media", text: "Creative briefing and direction, agency and partner management, Figma, Photoshop, Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
