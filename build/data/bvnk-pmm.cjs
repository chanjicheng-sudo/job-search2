// BVNK (Mastercard) — Product Marketing Manager, sales enablement.
//
// Rebuilt from the documented structure rather than restored byte-for-byte. The order is
// inverted from every other variant: Institutional research and B2B prospecting lead,
// the Malaysia go-to-market project is second, the two automation builds follow,
// compliance fifth, and paid acquisition is a single closing line. For this JD paid is
// the least relevant thing she does.
//
// Honest assessment of this application is in applications/bvnk/jd-read.md. The req asks
// for sales enablement experience she does not have, at a $180–210K band, in a discipline
// (B2B enterprise PMM) with almost no overlap with B2C paid acquisition. The document is
// as strong as the material allows; the material is the problem.

const { name, contact, education } = require("./common.cjs");

module.exports = {
  slug: "bvnk-pmm",
  label: "BVNK — Product Marketing Manager",
  name,
  contact,

  profile:
    "Marketer working across Retail, Wealth and Institutional products at a crypto and stablecoin " +
    "business, with a structured, systems-thinking approach and a data-science research background. " +
    "Builds the systems rather than only the content: customer research programmes, AI and " +
    "automation workflows that remove manual work, and regulated messaging cleared with Compliance. " +
    "Multilingual, currently developing a market-entry plan for a new product line in Malaysia.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Blockchain.com, London, United Kingdom",
          dates: "May 2026 – Present",
          sub: "Growth Marketing Intern  |  Retail, Wealth and Institutional",
          bullets: [
            "Designed and ran a segmented customer research programme across 3 customer segments, returning 114 completed responses at a 14% response rate, and turned the findings into positioning and campaign priorities",
            "Supported Institutional and Wealth business development with segmented prospect research: a database of 100 iGaming operators for Institutional outreach and an activated list of 80 crypto publishers for Wealth acquisition",
            "Developing the go-to-market plan for the loans product in Malaysia: market and competitor review, brand and tone, paid channel opportunity assessment, and KOL, affiliate and referral partnerships. [ADD: partner count approached, or a launch date — this currently reads as activity rather than progress]",
            "Automated daily performance reporting after evaluating 4 implementation approaches, cutting ~30 min/day of manual work, and partnered with Marketing, Web3, Data Engineering, AI Engineering and Security to publish it as an internal Streamlit dashboard",
            "Built an in-house AI production workflow after evaluating 6 model providers, cutting asset production from ~2 hours to 30 minutes and establishing a capability the team did not previously have",
            "Owned customer-facing content standards across 20 app-store storefronts and reviewed regulated messaging across all retail products with Compliance, covering UK, US and EU jurisdictions",
            "Ran paid acquisition across 5 channels and 26 markets, scaling from 187 to 562 daily installs (~3x) at flat ~$1.50 CPI using 128 structured tests to direct budget",
          ],
        },
        {
          org: "Malaberg, London, United Kingdom",
          dates: "Feb 2025 – Apr 2026",
          sub: "Performance Marketer",
          bullets: [
            "Led weekly content reviews with Compliance, setting the standard for regulated consumer-finance messaging across every customer-facing channel",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output",
            "Ran funnel and lifecycle analysis in Power BI, Excel and Microsoft Clarity, then rebuilt the pages responsible; daily conversions rose from 10 to 50+ (5x) with +5% funnel progression",
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Research & insight", text: "Survey design and segmentation; customer interviews; competitor and market review; funnel and cohort analysis; experimental test design; Power BI, Excel, Microsoft Clarity, SQL, R, Python" },
        { label: "Automation & AI", text: "Automated reporting pipelines; AI production workflows and prompt engineering; evaluation of 6 model providers; Streamlit. [ADD: n8n — explicitly named in the JD and learnable in a weekend. Build something small with it and this line answers their requirement with work rather than willingness]" },
        { label: "Go-to-market", text: "Market entry planning, brand and tone, positioning and messaging, app-store and customer-facing content, KOL, affiliate and referral partnerships, regulated messaging review with Compliance" },
        { label: "Channels", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn; international campaign structure across 26 markets" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
