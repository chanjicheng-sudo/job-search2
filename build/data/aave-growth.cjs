// Aave Labs — Growth Marketer (consumer products for lending, credit and savings).
// Crypto-native, so "crypto". Acquisition and experiments lead, then paid social
// creative (AI UGC, full results), retention, lifecycle, referrals and partnerships
// (Malaysia crypto lending, relevant to Aave), reporting. Title: Graduate Growth
// Marketing Manager. See applications/aave/jd-read-growth.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "aave-growth",
  label: "Aave Labs — Growth Marketer",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a consumer crypto and fintech app, driving user acquisition, activation and retention across " +
    "paid social, search, lifecycle, referrals and partnerships in 26 markets. I design and run " +
    "experiments, decide fast what to keep, kill or scale, and turn user research into product changes. " +
    "I use AI to solve marketing problems, whether improving current workflows or opening new " +
    "acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by turning research on why active, inactive and churned users dropped off into hypotheses and insights, then working with Product to rework the in-app explainer and help page",
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by scaling search acquisition (Apple Search Ads) from 2 to 26 markets and from 9 to 121 campaigns (13x)",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured A/B tests across 26 markets, then scaling the 5 winning campaign groups and killing 26 underperformers",
            "Converted 4 high net worth clients onto the crypto lending product in Malaysia within 1 month of launch by running referral, affiliate and KOL partnerships and community outreach for a new market",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) lifecycle communications into 24 languages",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCAR, and building an outreach list of 80 crypto publishers with AI",
            "Cut reporting time by ~10 hours a month by building automated performance tracking and reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing pages from funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Drove 120% ROAS on £50k+ monthly paid budget",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Growth", text: "User acquisition, activation, retention and engagement, growth campaigns, data-driven, test-and-learn experiments and A/B testing, funnel and landing page optimisation, referral programs, partnerships and communities, KPIs and reporting" },
        { label: "Channels", text: "Paid social (Meta, TikTok, X, LinkedIn), search (Apple Search Ads, Google Ads), organic (ASO, Custom Product Pages), email and lifecycle (Iterable)" },
        { label: "Crypto", text: "Crypto exchange products (perps, lending, yield), DeFi and onchain concepts, MiCAR, UK FinProm" },
        { label: "Data & AI", text: "Analytics (Power BI, Microsoft Clarity, Excel), Claude Code, Cursor, MCP connectors, AI UGC, automated dashboards" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
