// Moonfare — Growth / CRM and lifecycle associate. Private-markets investing platform,
// London, 4 days in the office. Reports to Naomi, the Growth Lead.
//
// Not a crypto company, so "digital assets" is used. CRM, market-by-market compliance
// segmentation and investor-facing results lead. FinProm kept: the JD centres on
// compliance rules by market. Her rules: result-led, change in brackets, no filler,
// relevant bullets only, page around 80%+.
//
// Not claimed: abandonment flows, email delivery calendars, events, Salesforce or a
// marketing-automation platform beyond Iterable. See applications/moonfare/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "moonfare-crm",
  label: "Moonfare — Growth (CRM and lifecycle)",
  name: "JESSIE CHAN",
  contact,

  profile:
    "CRM and growth marketer in regulated fintech and digital assets, working across 26 markets. I build " +
    "communications and audiences that respect each market's rules, test what works, and use AI to " +
    "automate routine work. I have worked with high net worth and institutional clients, handed leads to " +
    "business development, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Increased email open rate by 10% by localising Iterable (CRM) communications into 24 languages with built-in APIs",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), and building an outreach list of 80 publishers with AI",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading go-to-market across KOL, affiliate and referral partnerships and setting up a compliance review process with Legal for the new market",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail products and 20 app-store storefronts in UK, US and EU markets",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by researching why active, inactive and churned users dropped off and working with Product on the in-app explainer",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests across 26 markets and reallocating budget away from 26 underperforming campaigns",
            "Saved the team ~10 hours a month by automating daily performance reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard with Data Engineering and Security",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%) and driving 600+ installs in the first 7 days of the yield product relaunch",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the pages",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "CRM & lifecycle", text: "Iterable (CRM), email campaigns, audience segmentation by market, localisation, retention and reactivation research" },
        { label: "Compliance", text: "Financial promotions (UK FinProm, Adclear), regulated messaging across UK, US, EU and Malaysia, compliance review processes" },
        { label: "Analytics", text: "A/B testing, funnel and cohort analysis, SQL, Python, Power BI, Excel" },
        { label: "Paid & AI tools", text: "LinkedIn Ads, Google Ads, Claude Code, Cursor, MCP and API integrations" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
