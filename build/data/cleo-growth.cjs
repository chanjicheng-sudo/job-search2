// Cleo — Growth Marketing Manager, Performance (programmatic and affiliate). Fintech app.
// Not crypto, so "digital assets". Leads with AI UGC (live on programmatic), then scaling and
// cutting on the numbers, partners (affiliate/KOL/referral, LAPTOP renegotiation, reward
// hunters = traffic quality), creative tests into briefs, reporting automation, ROAS.
// Not claimed: DSP buying, AppsFlyer/SKAN, Impact.com, SQL, incrementality tests.
// See applications/cleo/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "cleo-growth",
  label: "Cleo — Growth Marketing Manager (programmatic and affiliate)",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a consumer mobile finance app, running paid acquisition across Apple Search Ads, " +
    "Google, Meta, TikTok, X and programmatic, and partner channels including affiliates, KOLs and referrals, " +
    "across the UK, US, EU and Africa. I optimise for CPI and user quality, run structured tests, make budget " +
    "calls backed by numbers, and automate reporting with Claude Code and MCP connectors. I use AI to solve " +
    "marketing problems, whether improving current workflows or opening new acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built the company's first in-house AI UGC workflow in 2 weeks, now live across every paid platform including programmatic, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product",
            "Grew daily installs from 200+ to 800+ (~4x) by scaling Apple Search Ads from 2 to 26 markets and from 9 to 121 campaigns (13x), monitoring and optimising every campaign daily against CPI targets",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests on keywords, bids, creative and pages, scaling the 5 winning campaign groups and cutting 26 underperformers",
            "Converted 4 high net worth clients within 1 month of launching crypto loans in Malaysia by building the KOL, affiliate and referral partner mix",
            "Took over a $600,000 digital asset rewards campaign at three days' notice, re-planning wave 2 after reward hunters claimed and sold rewards, and negotiating a new start date and lower volume with the partner",
            "Ran creative tests across 9 channels through 30+ creative briefs and 40 ads, and supplied 50+ assets to 3 external acquisition partners, feeding results into each next brief",
            "Cut reporting time by ~10 hours a month by automating campaign reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard, and set up ad accounts and conversion tracking across Meta, TikTok, Google and X",
            "Increased user retention by 12% by surveying active, inactive and churned users of our perps product and turning the findings into product changes",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Lifted landing page CTR by 20%, conversion rate by 25% and average order value by 16% then a further 10% by redesigning the funnel in a trusted editorial style",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Paid acquisition", text: "Performance marketing, Apple Search Ads, Google Ads, Meta, TikTok, X, LinkedIn, programmatic creative, bidding, daily budgets and pacing, CPA and CPI targets, conversion optimisation" },
        { label: "Partners", text: "Affiliate, KOL, creator and referral partnerships, partner negotiation, partner creative delivery, reward and promotion campaigns, traffic quality" },
        { label: "Measurement", text: "Unit economics (CPA, CPI, ROAS), user quality, creative and A/B testing, test design, channel reporting, anomaly checks, commercial recommendations to scale or pause, Apple Search Ads attribution, conversion tracking, Power BI, Excel" },
        { label: "AI & automation", text: "Claude Code, MCP connectors, automated reporting, AI UGC workflows" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
