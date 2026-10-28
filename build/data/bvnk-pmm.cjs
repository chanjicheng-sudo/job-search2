// BVNK (Mastercard) — Product Marketing Manager, sales enablement. London / NYC.
//
// Built on Jessie's own CV structure: title first, company and scope on the sub-line,
// dense inline skills block. Content reordered against the JD's four sections, which run
// Customer Insights, Customer Communications, Product Adoption Campaigns, and
// Enablement & Systems. Paid acquisition compresses to one closing line; for this req it
// is the least relevant thing she does.
//
// The gap this document cannot close is sales enablement itself. See
// applications/bvnk/jd-read.md.
//
// AppsFlyer is deliberately absent. It is mobile attribution for a B2C app and has no
// bearing on B2B enterprise PMM, so dropping it costs nothing here and sidesteps a claim
// that has not been confirmed.

const { name, contact, education } = require("./common.cjs");

module.exports = {
  slug: "bvnk-pmm",
  label: "BVNK — Product Marketing Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Crypto and stablecoin marketer across retail, wealth and institutional products, working in a " +
    "regulated environment with Compliance, Product and Engineering. I use AI to solve go-to-market " +
    "problems, building the automation, reporting and research workflows teams run on rather than " +
    "one-off content. Hands-on with customer research, segmentation and competitive analysis, with a " +
    "data-science research background. Multilingual, currently developing market entry for a new " +
    "product line in Malaysia.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Designed and ran a segmented customer research programme across 3 customer segments, returning 114 responses, and turned the findings into positioning and campaign priorities",
            "Built an outreach channel of 80 crypto publishers for high net worth client acquisition that sourced 3 major clients, plus a 100-operator database for institutional business development",
            "Automated daily reporting with Claude Code, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard; built MCP and API integrations and internal bots to remove repeat manual work across the team",
            "Developing go-to-market for the loans product in Malaysia: market and competitor review, brand and tone, channel opportunity assessment, and KOL, affiliate and referral partnerships",
            "Set customer-facing content standards across 20 app-store storefronts and reviewed regulated messaging across all retail products with Compliance, covering UK, US and EU jurisdictions",
            "Built an AI-powered UGC production workflow from scratch, delivering 100+ video assets and cutting production time by 75%, establishing an in-house capability the team did not previously have",
            "Ran paid acquisition across 5 channels and 26 markets, using 128 structured tests to direct budget and cut CPI on UK campaigns by 21.5% while installs increased 30.2%",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Led weekly content reviews with Compliance, setting the standard for regulated consumer-finance messaging across every customer-facing channel",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30 min to almost immediate output",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity, increasing funnel progression by 5%",
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
        { label: "Research & insight", text: "Survey design and segmentation, customer research programmes, competitor research (Appfollow), funnel and cohort analysis, experimental test design, Power BI, Excel, Microsoft Clarity, R, Python, SQL" },
        { label: "Go-to-market", text: "Market entry planning, positioning and messaging, brand and tone, customer-facing and app-store content, KOL, affiliate and referral partnerships, regulated messaging review with Legal and Compliance" },
        { label: "Creative", text: "Creative briefing and direction, AI UGC production, agency and partner management, Figma, Photoshop" },
        { label: "Paid media", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn, ASO and Custom Product Page, international campaign structure, creative testing and budget allocation" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
