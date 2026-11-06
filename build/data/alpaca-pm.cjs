// Alpaca — Project Manager (enterprise partner integrations of brokerage APIs).
// Equities, crypto, options. Coordinates partners, BD, engineering, legal, compliance,
// operations and customer success. Voice of the customer internally.
//
// The JD uses "crypto", so it stays. Project and partner delivery leads, then API and
// automation work, customer feedback into product, enterprise and crypto. ATS: JD terms
// used where her record supports them. FinProm kept (JD: regulatory disclosures).
//
// Not claimed: project manager title, enterprise software implementations, Jira,
// Confluence, Postman, curl, Metabase, websockets, KYC/AML operations, brokerage.
// See applications/alpaca/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "alpaca-pm",
  label: "Alpaca — Project Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Crypto and fintech marketer who runs projects end to end across 26 markets, coordinating partners, " +
    "Product, Engineering, Data, Compliance and Legal. I build with APIs and AI myself, including MCP " +
    "integrations and automated dashboards, and I turn customer feedback into product changes. I bring " +
    "a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by managing the launch end to end, coordinating Legal, a new compliance review process and KOL, affiliate and referral partners",
            "Saved the team ~10 hours a month by building automated reporting with Claude Code, MCP connectors and API integrations, shipped to production as a company-wide dashboard with Data Engineering and Security",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by turning feedback from active, inactive and churned users into product changes with Product",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, working with B2B Product Marketing",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCAR, and building an outreach list of 80 crypto publishers with AI",
            "Cut UK CPI by 21.5% while installs rose 30.2% by analysing 128 structured tests across 26 markets and reallocating budget away from 26 underperforming campaigns",
            "Managed delivery with 3 external acquisition partners across multiple markets, supplying 50+ assets to agreed timelines",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging and disclosures across all retail crypto products in UK, US and EU markets",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by troubleshooting drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Project & partner management", text: "End-to-end launches, timelines and dependencies, partner and stakeholder management, cross-functional delivery, voice of the customer, handover and enablement" },
        { label: "Technical", text: "REST APIs and API integrations, MCP connectors, Claude Code, Cursor, SQL, Python, Streamlit, Power BI" },
        { label: "Crypto & regulated products", text: "Perps, crypto lending, wealth and institutional products, regulatory disclosures (UK FinProm), MiCAR, compliance review processes" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
