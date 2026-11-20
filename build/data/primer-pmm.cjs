// Primer — Product Marketing Manager, Partners (payments orchestration, B2B SaaS).
// Builds the partner marketing engine: partner feature positioning and messaging, partner
// ecosystem campaigns, persona and journey work, adoption reporting, briefs, enablement.
//
// "Crypto" kept at her request (Primer is backed by Solana). Launch and partner work leads,
// then insight-to-messaging, relaunch, B2B pipeline. Briefs bullet dropped at her request. FinProm
// dropped (JD does not mention compliance). ATS: JD terms where her record supports them.
//
// Not claimed: B2B SaaS, payments product, two-sided marketplace. See
// applications/primer/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "primer-pmm",
  label: "Primer — Product Marketing Manager, Partners",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Product marketer in fintech and crypto, owning go-to-market launches, positioning and " +
    "partner campaigns across retail, wealth and institutional products in 26 markets. I turn customer " +
    "research into messaging, write the briefs and enablement material, and report on adoption with " +
    "dashboards I build myself. I use AI to solve marketing problems, whether improving current " +
    "workflows or opening new acquisition funnels, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by owning the go-to-market end to end, from positioning, brand and tone to KOL, affiliate and referral partner campaigns, with Legal and a new compliance review process",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by turning research with active, inactive and churned users into an always-on product and risk explainer and a reworked help page with Product",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database with the Senior B2B Product Marketing Manager",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCAR, and building an outreach list of 80 crypto publishers with AI",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages, adapting each message by market",
            "Cut reporting time by ~10 hours a month by building automated performance reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured messaging and creative tests across 26 markets and scaling 5 winning campaign groups",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rewriting and rebuilding landing pages from funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Product marketing", text: "Go-to-market launches, product positioning, value propositions and messaging, partner marketing and enablement, campaign briefs, persona and customer journey mapping, competitive analysis" },
        { label: "Insight & reporting", text: "Market insights and customer research, adoption, engagement and activation reporting, funnel and cohort analysis, A/B testing, SQL, Python, Power BI" },
        { label: "AI & tools", text: "Claude Code, Cursor, MCP and API integrations, Iterable, Figma, Canva, Photoshop, Google Ads, Meta, LinkedIn, X" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
