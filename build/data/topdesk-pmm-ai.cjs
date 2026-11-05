// TOPdesk — Product Marketing Manager, AI & Automation. B2B SaaS (IT and enterprise
// service management). London, from £66k.
//
// The JD's distinctive asks are credibility on AI claims and explaining AI simply. She
// builds and evaluates AI tools herself, so the AI-builder bullets lead, then product
// partnership, launches and B2B lead generation. Her rules: result-led, change in
// brackets, no filler, no keyword counts, simple skills lines. Crypto terms explained for
// a non-crypto reader.
//
// Not claimed: B2B SaaS, ITSM/ESM, analyst relations, win/loss programmes, formal sales
// enablement. See applications/topdesk/jd-read.md.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "topdesk-pmm-ai",
  label: "TOPdesk — Product Marketing Manager, AI & Automation",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Marketer who builds with AI, working across go-to-market, positioning and product adoption for " +
    "fintech products in 26 markets. I solve marketing problems with AI, and because I build AI tools " +
    "every day in Claude Code and Cursor, I know where they work and where they fail. I work directly " +
    "with Product, Sales and Compliance, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Increased CTR from 0.4% to 1.15% (+188%) and cut production time by 75% by building the company's first in-house AI content workflow, evaluating 6 AI model providers and prompt-engineering output to brand and compliance standards",
            "Saved the team ~10 hours a month by automating daily performance reporting with Claude Code and MCP connectors, and led its launch as a company-wide dashboard with Data Engineering and Security",
            "Increased user retention by 12% and grew trading volume on our perpetual futures product from $100m to $500m (5x) in two months by leading customer research with active, inactive and churned users and working with Product to make the in-app explainer persistent",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading its go-to-market across competitor review, positioning, brand and tone, and partner channels",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database, partnering with B2B Product Marketing on Institutional and Wealth projects",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR) and building an 80-publisher contact list with AI",
            "Drove 600+ installs in the first 7 days of the Earn relaunch by recreating outdated creator assets with AI video after the rebrand",
            "Increased email open rate by 10% by localising CRM communications into 24 languages with built-in CRM APIs",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing and promotional pages, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Product marketing", text: "Positioning and messaging, go-to-market and launch planning, competitive intelligence, customer research, B2B lead generation, regulated messaging with Legal and Compliance" },
        { label: "AI & automation", text: "Claude Code, Cursor, LLM evaluation and prompt engineering, MCP and API integrations, AI agents and bots (deployed on fly.io), automated dashboards (Streamlit)" },
        { label: "Data", text: "SQL, Python, R, Power BI, Excel, Microsoft Clarity, A/B testing, cohort and funnel analysis" },
        { label: "Creative", text: "Creative briefing and direction, AI content production, Figma, Photoshop" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
