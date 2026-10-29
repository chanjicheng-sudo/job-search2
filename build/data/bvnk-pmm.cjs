// BVNK (Mastercard) — Product Marketing Manager. London / NYC.
//
// Built on the base CV she pasted in October 2026, keeping her wording where a bullet
// carries over, in the same register as the Kraken and Plasma variants: verb, what,
// numbers. No explanatory subclauses, no reasoning inside a bullet, no [ADD:] annotations
// in the document. Gaps are tracked in applications/bvnk/jd-read.md and OPEN-QUESTIONS.md.
//
// Bullets run strongest first, not in the JD's section order. The FinProm rollout leads
// because it is third-party credited and maps to the JD's compliant-comms ask. The
// survey is back mid-list with a placeholder for what it changed. Without that outcome
// it should come off again. Never lead with it.
//
// Paid acquisition metrics (CPI, installs) are kept out of the wording where possible:
// BVNK sells B2B, and those terms read as a performance marketer.
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
    "Fintech/crypto marketer owning go-to-market, regulated customer communications and product " +
    "adoption across retail, wealth and institutional products in 26 markets. I use AI to solve " +
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
            { text: "Converted 4 clients onto the loans product in Malaysia, developing its go-to-market across competitor review, brand and tone, and KOL, affiliate and referral partnerships, and establishing a compliance review process for the new market", bold: true },
            "Sourced 3 major high net worth clients by identifying an acquisition opportunity during the MiCAR transition, building an 80-publisher contact list with AI and running the outreach",
            "Grew cumulative perps trading volume 5x, from $100m to $500m in two months, with voice-of-customer research surveying active, inactive and churned users to improve product experience",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, working with B2B Product Marketing on Institutional and Wealth projects",
            "Localised CRM communications into 24 languages with API tools, increasing email open rate by 10%",
            "Tested product messaging across 26 countries through 128 structured tests, scaling 5 winning campaign groups and cutting UK acquisition cost by 21.5% while volume rose 30.2%",
            "Automated daily performance reporting with Claude Code and led its launch as a company-wide Streamlit dashboard with Data Engineering and Security, saving the team ~10 hours a month",
            "Built the company's first in-house AI content production workflow, delivering 100+ video assets, cutting production time by 75% and lifting CTR by 188%",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Led weekly Compliance reviews of all customer-facing consumer-finance messaging across channels",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI and Microsoft Clarity",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30 min to almost immediate output",
            "Managed £50k+ monthly budget with full accountability for efficiency, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "Product marketing", text: "Go-to-market and launch planning, positioning and messaging, competitive analysis, lifecycle and CRM communications, product page and app-store content, KOL, affiliate and referral partnerships, financial promotions approval (UK FinProm, Adclear)" },
        { label: "Customer insight", text: "Survey design and segmentation, customer and competitor research (Appfollow), funnel and cohort analysis, structured test design, Power BI, Excel, Microsoft Clarity, R, Python, SQL" },
        { label: "AI & automation", text: "Automation workflows (Claude Code, Cursor), MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), AI content workflow design, tools: Runway, Jitter, Gemini, ElevenLabs" },
        { label: "Creative & channels", text: "Creative briefing and direction, agency and partner management, Figma, Photoshop, Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
