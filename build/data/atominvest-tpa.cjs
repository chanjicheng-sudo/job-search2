// Atominvest — Graduate Technical Product Analyst (API, SSO, MCP, SFTP, Office plugins).
// Very technical, AI-led. Not crypto, so "digital assets".
//
// AI and production tools lead (Claude Code, MCP, engineering-pipeline deployment, APIs,
// bots), then discovery to requirements, hypothesis testing, root cause. Profile is
// AI-led and says plainly what she built. No hands-on SQL or spreadsheet claim.
//
// Not claimed: Postman, JSON, SSO, SFTP, OpenAI, regression testing, private markets.
// Right-to-work blocker in applications/atominvest/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "atominvest-tpa",
  label: "Atominvest — Graduate Technical Product Analyst",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer in fintech and digital assets who builds production tools with AI. Using Claude " +
    "Code, Cursor and MCP connectors, I build API integrations, internal bots and automated " +
    "reporting. I also run customer research and deliver the findings to Product to improve user experience.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Cut reporting time by ~10 hours a month by building automated reporting with Claude Code, MCP connectors and API integrations, evaluating 4 implementation approaches and deploying it to production through the engineering pipeline with Data Engineering and Security",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill and handed it over to the team",
            "Delivered 100+ production-ready AI video assets by spending 2 weeks on prompt engineering to fix recurring output failures and taking proposed assets through Legal review before release",
            "Removed repeat manual work across the team by building internal bots and MCP and API integrations, deployed on fly.io",
            "Increased user retention by 12% by root-causing churn on the perps product through research with active, inactive and churned users, then turning the findings into requirements with Product for a persistent explainer and a reworked help page",
            "Cut UK CPI by 21.5% while installs rose 30.2% by designing 128 structured tests across 26 markets and scaling the 5 campaign groups that held up",
            "Sourced 3 major high net worth clients by researching how a major exchange was losing access to European clients under MiCA, and building an outreach list of 80 publishers with AI",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by researching local regulation and setting up a new compliance review process with Legal",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by troubleshooting drop-off points with Power BI, Excel and Microsoft Clarity and rebuilding the journey",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "AI tools", text: "Claude, Claude Code, Cursor, MCP connectors, prompt engineering, Claude skills, critical review and validation of AI output" },
        { label: "Technical", text: "REST APIs and API integrations, MCP, Streamlit, fly.io deployment, Microsoft Excel, Power BI, SQL, Python and R from research" },
        { label: "Product & analysis", text: "Customer research, requirements, root-cause analysis, hypothesis testing and experimental design, structured testing, documentation and handover" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
