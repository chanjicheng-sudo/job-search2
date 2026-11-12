// McKinsey — Growth, Marketing & Sales Practice (experienced hire). Consulting framing:
// hypothesis, analysis, recommendation, impact. Not crypto, so "digital assets".
//
// Hypothesis-led research and growth results lead, then marketing ROI, market entry,
// spotting a market shift, AI, analytics automation, lifecycle, B2B sales support.
//
// Not claimed: consulting experience, 2+ years full time. BSc 2:1 confirmed Nov 2026.
// See applications/mckinsey/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

// BSc class shown for McKinsey (they screen on 2:1 or above).
const education = {
  ...educationWithMark,
  entries: educationWithMark.entries.map((e) =>
    e.title.startsWith("BSc") ? { ...e, title: "BSc (Hons) Psychology (2:1), University of Exeter" } : e
  ),
};

module.exports = {
  slug: "mckinsey-gms",
  label: "McKinsey — Growth, Marketing & Sales",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer in fintech and digital assets, working across retail, wealth and institutional " +
    "products in 26 markets. I form hypotheses, test them with structured experiments and customer " +
    "research, and turn the results into recommendations the business acts on. I use AI to solve " +
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
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by testing why users churned through research with 114 active, inactive and churned users, then recommending product changes that Product adopted",
            "Grew daily installs from 200+ to 800+ (~4x) at a flat ~$1.50 CPI by expanding Apple Search Ads from 2 to 26 markets with country-level bid and creative strategy",
            "Cut UK CPI by 21.5% while installs rose 30.2% by designing 128 structured experiments across 26 markets and reallocating ~$21k from 26 underperforming campaigns to 5 scalable campaign groups",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading the market entry on my own initiative, from regulatory research and positioning to a new compliance review process and partner channels",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCA, and building an outreach list of 80 publishers with AI",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database with the Senior B2B Product Marketing Manager",
            "Cut reporting time by ~10 hours a month by building automated performance reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the customer journey",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Growth & marketing", text: "Go-to-market and market entry, customer lifecycle management, digital marketing, marketing ROI and budget allocation, channel and partner management, customer research" },
        { label: "Analytics", text: "Hypothesis testing, experimental design, causal inference, funnel and cohort analysis, Power BI, Excel, SQL, Python and R from research" },
        { label: "AI", text: "Claude Code, Cursor, MCP connectors, API integrations, AI content production, automated dashboards" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
