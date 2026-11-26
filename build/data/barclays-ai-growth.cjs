// Barclays — AI & Data-Led Growth Marketing Manager (AVP). Bank, not crypto, so "digital
// assets". AI-led profile per her technical/AI role rule. AI and agentic workflows first,
// then customer insight into action, journeys, cross-team work in a regulated business.
// Not claimed: PEGA, CDP, team leadership, CIM. See applications/barclays/jd-read.md.

const { contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "barclays-ai-growth",
  label: "Barclays — AI & Data-Led Growth Marketing Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer at a consumer finance app, running campaigns and customer journeys across paid media, " +
    "app stores, CRM and web across the UK, US, EU and Africa. I build agentic workflows with Claude Code, MCP " +
    "connectors and APIs for content creation, campaign optimisation and reporting, and I work across Product, " +
    "Engineering, Data, Legal and Compliance in a regulated business. I use AI to solve marketing problems, " +
    "whether improving current workflows or opening new acquisition funnels.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Graduate Growth Marketing Manager",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built the company's first in-house AI UGC workflow in 2 weeks, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%), cutting CPI from $25 to $6 (−76%) and driving 600+ installs in the first 7 days after I recreated the creative for our rebranded yield product, then built a prompt-generation skill so the team runs it across products and jurisdictions",
            "Grew first-time installs from ~20k to ~28k (+40%) in two months by using the AppFollow API to analyse competitor keywords and rebuilding our App Store listings in 14 languages",
            "Grew daily installs from 200+ to 800+ (~4x) by scaling Apple Search Ads from 2 to 26 markets, matching each search to a Custom Product Page and running 128 structured tests, cutting UK CPI by 21.5%",
            "Grew cumulative perps trading volume from $100m to $500m (5x) in two months and increased user retention by 12% by surveying active, inactive and churned users and turning the insights into product changes",
            "Increased email open rate by 10% by building API tools that localise Iterable (CRM) customer journeys into 24 languages",
            "Cut reporting time by ~10 hours a month by building agentic reporting with Claude Code and MCP connectors, and worked with Marketing, Web3, Data Engineering, AI Engineering and Security to launch it as a company-wide dashboard",
            "Delivered the relaunch journey for our rebranded yield product, building new web pages with front-end engineers, balancing copy for marketing and compliance, and updating FAQs with Customer Success",
            "Aligned the CMO, Trading, Product, Legal and an external partner within days on a re-planned $600,000 digital asset rewards campaign, taken over at three days' notice",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Lifted landing page CTR by 20%, conversion rate by 25% and average order value by 16% then a further 10% by redesigning the customer journey in a trusted editorial style",
            "Drove 120% ROAS on £50k+ monthly paid budget",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "AI & automation", text: "Agentic workflows, marketing technology, Claude Code, MCP connectors, API tools, AI-powered creative (AI UGC), prompt engineering, automated reporting" },
        { label: "Marketing", text: "Campaign management across digital channels, marketing strategy, customer acquisition and engagement, multi-step omni-channel customer journeys, CRM (Iterable), paid media (Google, Meta, TikTok, X, LinkedIn, programmatic), Apple Search Ads, App Store optimisation, content and copywriting" },
        { label: "Data & insight", text: "Customer data and insights, market research, competitive analysis, customer research and surveys, data-driven decision-making, A/B testing, funnel analysis, campaign performance reporting, budget allocation and ROI, Power BI, Excel" },
        { label: "Stakeholders & regulation", text: "Stakeholder management across marketing, technology and analytics teams, agency and partner management, compliance reviews and risk disclosures, UK FinProm, MiCAR" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
