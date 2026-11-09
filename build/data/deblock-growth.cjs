// Deblock — Growth: performance analysis and special projects (reports to ExCo and VP
// Marketing). On-chain neobank, MiCA licensed. The JD says "digital assets", so the CV
// does too, and "MiCA" (their term).
//
// Performance analysis leads (channel and cohort measurement, insight to iteration), then
// agentic workflows, retention, special projects end to end, commercial returns. Her
// rules: result-led, change in brackets, no filler, full AI UGC results.
//
// Not claimed: AppsFlyer, Adjust or any MMP, community building, 3+ years, French.
// See applications/deblock/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "deblock-growth",
  label: "Deblock — Growth",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer in fintech and digital assets who owns the numbers behind every initiative. I " +
    "measure CAC, conversion and retention by channel and cohort, turn the results into next week's " +
    "decisions, and run projects end to end, from building the list to the post-mortem. I work hands-on " +
    "in SQL, Python and spreadsheets, build agentic workflows with Claude Code and MCP, and bring a " +
    "data-science research background that helps me tell a real effect from noise.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Cut UK CPI by 21.5% while installs rose 30.2% by measuring 128 structured tests across 26 markets by channel and cohort, then scaling 5 winning campaign groups and reallocating ~$21k away from 26 underperformers",
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding Apple Search Ads from 2 to 26 markets with country-level bid and creative strategy",
            "Saved the team ~10 hours a month by building agentic reporting workflows with Claude Code and MCP connectors, shipped to production as a company-wide dashboard with Data Engineering and Security",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by analysing churn with active, inactive and churned users, then working with Product to rework the in-app explainer and help page",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by running the project end to end, from market research to KOL, affiliate and referral partnerships",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCA, and building an outreach list of 80 digital asset publishers with AI",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the journey",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Growth analytics", text: "CAC, conversion, activation and retention analysis by channel and cohort, structured testing and experimental design, Apple Search Ads attribution, funnel analysis, post-mortems" },
        { label: "Data & AI", text: "SQL, Python, R, Excel, Power BI, Streamlit, agentic workflows with Claude Code, Cursor, MCP and API integrations" },
        { label: "Projects & channels", text: "End-to-end launches, partnerships (KOL, affiliate, referral), Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn, X, Iterable" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
