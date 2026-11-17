// Aave Labs — Growth Marketer (Marketing team, reports to SVP Marketing).
//
// Built on Jessie's current CV structure: title first, company and scope on the sub-line,
// dense inline skills block. Bullets ordered against the JD's own list: acquisition,
// experiments across paid and organic, funnels and landing pages, lifecycle, referrals
// and partnerships, then reporting.
//
// Aave's consumer product is an iOS-first stablecoin savings app, so the Apple Search Ads
// and App Store work, which was the least-wanted channel for Plasma, is the most relevant
// thing on the page here. Paid social figures are labelled as paid social so the $25 to $6
// CPI cannot be read against the ~$1.50 paid search CPI.
//
// Not claimed: a referral programme she has run (the Malaysia work covers referral
// channels, in flight), Mixpanel or Amplitude, any MMP. See applications/aave/jd-read.md.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "aave-growth",
  label: "Aave Labs — Growth Marketer",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer for consumer crypto and fintech apps, running paid acquisition across 5 channels " +
    "and 26 markets in a regulated environment. I design and run structured tests across search, " +
    "social, app-store pages and CRM, and build the AI creative and reporting workflows that let a lean " +
    "team test at volume. Data-science research background in experimental design. Multilingual, " +
    "currently developing go-to-market for a loans product in Malaysia.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Scaled paid search from 187 to 562 daily installs (~3x) at a flat ~$1.50 CPI, expanding from 2 to 26 countries, 9 to 121 live campaigns and 47 to 2,597 keywords",
            "Ran 128 structured campaign tests, identifying 5 scalable campaign groups and cutting 26 underperforming campaigns; reallocating ~$21k of test spend cut GB CPI by 21.5% while GB installs rose 30.2%",
            "Built an AI UGC production workflow for paid social, delivering 100+ video assets across TikTok and Google Ads; paid social CPI fell from $25 to $6, CTR rose from 0.4% to 1.15% and production time fell 75%",
            "Tested 20+ Custom Product Pages across 12 markets and 600+ keywords, and led App Store and Google Play content refreshes across 20 storefronts",
            "Implemented API tools to translate CRM communications into local languages, increasing email open rate by 10%",
            "Built and activated an outreach channel of 80 crypto publishers that sourced 3 major Wealth clients; directed 50+ creative assets to 3 external acquisition partners",
            "Developing go-to-market for a loans product in Malaysia across paid opportunity assessment, brand and tone, and KOL, affiliate and referral channels",
            "Automated daily Apple Search Ads reporting, cutting ~30 min/day of manual work, and partnered with Data Engineering, AI Engineering and Security to publish it as an internal Streamlit dashboard",
            "Reviewed regulated customer-facing messaging across all retail products and shipped refreshed Personal and Earn pages with Front-End Engineering across jurisdictions",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity; +5% funnel progression",
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output; led weekly Compliance reviews of regulated consumer-finance messaging",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "Acquisition", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn; ASO and Custom Product Pages; international campaign structure; budget allocation; KOL, affiliate and publisher partnerships" },
        { label: "Experimentation & analytics", text: "A/B and structured test design, funnel and cohort analysis, landing page testing, ad-account, conversion-tracking and campaign-structure setup, Apple Search Ads attribution, Power BI, Excel, Microsoft Clarity, Streamlit, R, Python, SQL" },
        { label: "Lifecycle & creative", text: "CRM localisation, creative briefing and direction, AI UGC production (avatar, voice, motion, video), automation with Claude Code and Cursor, Figma, Photoshop" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
