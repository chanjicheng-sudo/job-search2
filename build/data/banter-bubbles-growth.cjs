// Crypto Banter — Growth Marketing Manager, Banter Bubbles (app users to verified
// exchange signups). Crypto-native, so "crypto".
//
// AI UGC leads (her call, Nov 2026), then conversion and funnel evidence, then partners (affiliate, referral, KOL) and
// regulation across regions, traffic, experiments, creator-led content, lifecycle, briefs
// (JD asks for briefing designers), FinProm (JD asks for compliance limits).
//
// Not claimed: GA4, Mixpanel, Amplitude, push or in-app tools, KYC funnels, 3+ years.
// See applications/banter-bubbles/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "banter-bubbles-growth",
  label: "Crypto Banter — Growth Marketing Manager, Banter Bubbles",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a crypto exchange app, working across retail, wealth and institutional products " +
    "in the UK, US and EU. I find where users drop off, run the experiments that fix it, and write the " +
    "copy and briefs behind them. I use AI to solve marketing problems, whether improving current " +
    "workflows or opening new acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by researching why active, inactive and churned users dropped off, then working with Product to rework the in-app explainer and help page",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by running KOL, affiliate and referral partnerships and setting up a compliance review process for a new market",
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding Apple Search Ads from 2 to 26 markets with country-level bid and creative strategy",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured A/B tests across 26 markets and scaling the 5 winning campaign groups",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Delivered 30+ creative briefs and 40 ads across 9 channels including X and TikTok, and directed 50+ assets to 3 external acquisition partners",
            "Cut reporting time by ~10 hours a month by building automated performance reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail crypto products in UK, US and EU markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the journey",
            "Drove 120% ROAS on £50k+ monthly paid budget",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Growth & funnel", text: "Funnel analysis and drop-off fixes, A/B testing and growth experiments, activation and retention, CAC and cohort reporting, affiliate, referral and KOL partnerships" },
        { label: "Crypto & compliance", text: "Crypto exchange products (perps, lending, yield), UK FinProm, MiCAR, new-market compliance review across UK, US, EU and Malaysia" },
        { label: "Channels & content", text: "Apple Search Ads, Google Ads, Meta, TikTok, X, LinkedIn, Iterable (CRM), copywriting, creative briefs, AI UGC, Canva, Figma" },
        { label: "Data & AI", text: "Power BI, Microsoft Clarity, Excel, Claude Code, Cursor, MCP connectors, Streamlit dashboards" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
