// BVNK (Mastercard) — Product Marketing Manager. London / NYC.
//
// Built on the base CV she pasted in October 2026, keeping her wording where a bullet
// carries over, in the same register as the Kraken and Plasma variants: verb, what,
// numbers. No explanatory subclauses, no reasoning inside a bullet, no [ADD:] annotations
// in the document. Gaps are tracked in applications/bvnk/jd-read.md and OPEN-QUESTIONS.md.
//
// Bullets run strongest first, not in the JD's section order. The FinProm rollout leads
// because it is third-party credited and maps to the JD's compliant-comms ask. The
// survey is left off entirely: 114 responses is activity with no outcome, and she
// rejected it as an opening line.
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
    "Fintech/crypto marketer owning regulated customer communications, client acquisition and " +
    "go-to-market across retail, wealth and institutional products in 26 markets. I use AI to solve " +
    "go-to-market problems, and build the automation, reporting, MCP and API integrations and internal " +
    "bots the team runs on. I work directly with Compliance, Legal, Product and Engineering in a " +
    "regulated environment, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            { text: "Converted 4 clients onto the loans product in Malaysia, shaping its go-to-market across competitor review, brand and tone, and KOL, affiliate and referral partnerships", bold: true },
            "Sourced 3 major high net worth clients by building an outreach channel of 80 crypto publishers",
            "Increased email open rate by 10% by implementing API tools that translate CRM communications into local languages",
            "Built the company's first in-house AI UGC production workflow, delivering 100+ video assets across TikTok and Google Ads, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and production time by 75%",
            "Automated daily paid media reporting with Claude Code and led its launch as a company-wide Streamlit dashboard with Data Engineering and Security, saving the team ~10 hours a month",
            "Cut UK cost per install by 21.5% while growing installs 30.2%, running 128 structured messaging tests across 26 countries and scaling 5 winning campaign groups",
            "Led app-store content across 20 storefronts and relaunched the Personal and Earn product pages with Front-End Engineering, shipping 20+ Custom Product Pages across 12 markets and 600+ keywords, all cleared through Compliance",
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
        { label: "Go-to-market", text: "Market entry planning, positioning and messaging, brand and tone, CRM and localised customer communications, app-store content, KOL, affiliate and referral partnerships, financial promotions approval (UK FinProm, Adclear)" },
        { label: "Creative & paid media", text: "Creative briefing and direction, agency and partner management, Figma, Photoshop, Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
