// Alpaca — Crypto / Brokerage Operations (global remote, core hours 9am to 5pm PT).
// Daily monitoring and surveillance, trading ops, onboarding, reconciliation, AML support,
// workflow and tool improvements, partner communication.
//
// The JD uses "crypto", so it stays. Workflow automation and regulatory adaptation lead,
// then monitoring and anomaly work, root cause, new-market compliance. ATS: JD terms used
// where her record supports them. FinProm kept (JD: regulatory environment).
//
// Not claimed: broker-dealer operations, trade execution, KYC/AML casework, general
// ledger, 3+ years in operations. See applications/alpaca/jd-read-ops.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "alpaca-ops",
  label: "Alpaca — Operations",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Problem solver in regulated crypto and fintech, working across 26 markets with Compliance, Legal, " +
    "Data and Product. I monitor performance daily, investigate what does not add up, and automate " +
    "manual work with SQL, Python and AI tools like Claude Code. I adapt quickly to changing regulation, " +
    "from UK FinProm to MiCAR, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Cut reporting time by ~10 hours a month by replacing manual reporting with automation built in Claude Code, MCP connectors and APIs, shipped to production as a company-wide dashboard with Data Engineering and Security",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under MiCAR, and building an outreach list of 80 crypto publishers with AI",
            "Converted 4 high net worth clients onto the crypto loans product in Malaysia within 1 month of launch by researching local crypto regulation and setting up a new compliance review process with Legal",
            "Cut UK CPI by 21.5% while installs rose 30.2% by monitoring daily spend and performance across 121 live campaigns in 26 markets, investigating anomalies and reallocating ~$21k away from 26 underperforming campaigns",
            "Increased user retention by 12% and grew cumulative perps trading volume from $100m to $500m (5x) in two months by root-causing churn through research with active, inactive and churned users, then working with Product to rework the in-app explainer and help page",
            "Supported the rollout of the UK FinProm approval process with Compliance, reviewing regulated messaging and risk disclosures across all retail crypto products in UK, US and EU markets",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by troubleshooting drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Drove 120% ROAS on £50k+ monthly paid budget, monitoring spend daily",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Operations", text: "Daily monitoring, anomaly investigation, data reconciliation, root-cause analysis, workflow, policy and tool improvements, process documentation, internal and external partner communication" },
        { label: "Crypto & regulation", text: "Perps trading, crypto lending, wealth and institutional products, UK FinProm, MiCAR, compliance review processes, regulated financial services" },
        { label: "Technical", text: "SQL, Python, R, Excel, Power BI, APIs and MCP integrations, Claude Code, Cursor, Streamlit" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
