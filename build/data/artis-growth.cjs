// Artis — Growth Marketing Associate (B2B SaaS for commodities trading). London, £45-50k.
// Not crypto, so "digital assets". B2B lead generation leads: account research and
// targeted outreach, then partnerships, positioning from research, testing, email, AI,
// content and briefs (JD: working with a designer, basic creative), reporting.
//
// Not claimed: HubSpot, ZoomInfo, events, webinars, B2B SaaS, commodities.
// See applications/artis/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "artis-growth",
  label: "Artis — Growth Marketing Associate",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer in fintech and digital assets who generates qualified leads and clients, working " +
    "with Sales and Business Development across retail, wealth and institutional products. I research " +
    "target accounts, build outreach and content that gives people a reason to engage, and measure what " +
    "turns into pipeline. I use AI to solve marketing problems, whether improving current workflows or " +
    "opening new acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Generated 20+ active leads for Institutional business development by researching and building a 100-operator prospect database, working with the Senior B2B Product Marketing Manager",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCA, then building an outreach list of 80 publishers with AI and running the outreach",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by running the go-to-market end to end, from positioning to KOL, affiliate and referral partnerships",
            "Increased user retention by 12% by researching why active, inactive and churned users dropped off our perps product, then turning the findings into clearer product messaging with Product",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests on keywords, bids and creative across 26 markets, then scaling the 5 campaign groups that worked",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Delivered 30+ creative briefs and 40 ads across 9 channels including LinkedIn, and supplied 50+ assets to 3 external partners",
            "Cut reporting time by ~10 hours a month by building automated reporting with Claude Code and MCP connectors, shipped as a company-wide dashboard",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the journey",
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Lead generation", text: "Account research and segmentation, targeted outreach, LinkedIn, email, partnerships, positioning and messaging, content, funnel and attribution analysis" },
        { label: "AI & automation", text: "Claude Code, Cursor, MCP connectors, AI-built prospect lists, AI video and content production, automated dashboards" },
        { label: "Tools & creative", text: "Iterable (CRM), Power BI, Excel, Microsoft Clarity, Canva, Figma, Photoshop, LinkedIn, Meta, Google Ads" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
