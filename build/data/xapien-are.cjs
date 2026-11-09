// Xapien — Applied Research Engineer (AI due diligence). Entry-level AI engineering.
// Not crypto, so "digital assets".
//
// AI-led at her request (Nov 2026): show she knows AI and learns fast, through evidence.
// Building and evaluating AI first, then deployment, APIs, experiments and statistics,
// research. Python only as research use. Profile plain and AI-led.
//
// Not claimed: hands-on Python, algorithm optimisation, Unix, microservices, Terraform,
// AWS. See applications/xapien/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "xapien-are",
  label: "Xapien — Applied Research Engineer",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer in fintech and digital assets who builds, tests and deploys AI tools. I built my " +
    "company's first in-house AI content workflow in 2 weeks, and deployed automated reporting with " +
    "Claude Code and MCP connectors through the engineering pipeline. I design experiments and evaluate " +
    "results statistically, trained in experimental design and causal inference.",

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
            "Delivered 100+ production-ready AI video assets by comparing 6 AI model providers across avatar, voice, motion and video generation, and spending 2 weeks on prompt engineering to fix recurring output failures",
            "Cut reporting time by ~10 hours a month by building automated reporting with Claude Code, MCP connectors and API integrations, evaluating 4 implementation approaches and deploying it to production through the engineering pipeline with Data Engineering and Security",
            "Removed repeat manual work across the team by building internal bots and MCP and API integrations, deployed on fly.io",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) communications into 24 languages",
            "Cut UK CPI by 21.5% while installs rose 30.2% by designing 128 structured experiments across 26 markets and scaling the 5 campaign groups that held up",
            "Increased user retention by 12% by designing research with active, inactive and churned users, finding why they dropped off our perps product, and working with Product on the fix",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by researching local digital asset regulation and setting up a new compliance review process with Legal",
            "Sourced 3 major high net worth clients by spotting a regulatory change under MiCA and building an outreach list of 80 publishers with AI",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by finding drop-off points through funnel analysis in Power BI, Excel and Microsoft Clarity",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "AI", text: "Claude, Claude Code, Cursor, MCP connectors, LLM prompt engineering, Claude skills, AI model evaluation (avatar, voice, motion and video models: Runway, Gemini, Seedance, ElevenLabs)" },
        { label: "Building & deployment", text: "API integrations, MCP, production deployment through an engineering pipeline, fly.io, Streamlit, automated reporting" },
        { label: "Statistics", text: "Experimental design, causal inference, hypothesis testing, structured experiments, Python and R for statistical analysis (research), SQL" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
