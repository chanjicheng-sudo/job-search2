// MoonPay — Product Manager, Crypto Asset Management (liquidity and asset infrastructure).
// Crypto-native, so "crypto" is used. Product execution: requirements, prioritisation,
// cross-functional delivery with Engineering, Operations, Compliance, Finance, Treasury.
//
// Product-shaped evidence leads: research turned into a product change, a regulated
// new-market launch, production integrations and automation, data-led prioritisation.
// ATS: JD terms used where her record supports them. FinProm kept (JD bonus: regulated
// products, crypto compliance). MRes mark shown.
//
// Not claimed: product manager title, liquidity, OTC or exchange integrations, custody,
// wallets, routing. See applications/moonpay/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "moonpay-pm",
  label: "MoonPay — Product Manager, Crypto Asset Management",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Crypto marketer working across retail, wealth and institutional products, with a product mindset. " +
    "I turn ambiguous problems into clear requirements and priorities, deliver them with Product, " +
    "Engineering, Data, Compliance and Legal, and use data to decide what to fix first. I use AI every " +
    "day, from Claude Code automation to MCP and API integrations, and bring a data-science research " +
    "background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by turning research with active, inactive and churned users into product requirements, then working with Product to change the in-app explainer and help page",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by coordinating Legal, a new compliance review process and partners for a new market",
            "Cut reporting time by ~10 hours a month by building automated reporting with Claude Code and MCP connectors, shipped to production as a company-wide dashboard with Data Engineering and Security",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Cut UK CPI by 21.5% while installs rose 30.2% by using data from 128 structured tests across 26 markets to prioritise 5 scalable campaign groups and cut 26 underperformers",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCAR, and building an outreach list of 80 crypto publishers with AI",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail crypto products in UK, US and EU markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding friction points through funnel analysis in Power BI, Excel and Microsoft Clarity and rebuilding the journey",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Product & delivery", text: "Product requirements, prioritisation, cross-functional delivery, stakeholder management, launch coordination, customer research, data-led decision making" },
        { label: "Crypto & regulated products", text: "Perps, crypto lending, wealth and institutional products, MiCAR, UK FinProm, compliance review processes" },
        { label: "Data & technical", text: "SQL, Python, R, APIs and MCP integrations, Claude Code, Cursor, Power BI, Streamlit" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
