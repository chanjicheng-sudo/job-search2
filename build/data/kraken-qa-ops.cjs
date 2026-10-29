// Kraken / Payward — QA & Operations, internal AI-native growth platform.
//
// Written in Jessie's own register: verb, what, numbers. No explanatory subclauses, no
// reasoning inside a bullet, no [ADD:] annotations in the document. The three gaps that
// decide this screen are tracked in OPEN-QUESTIONS.md and on the published page, not in
// the CV itself.
//
// The thesis: the platform automates audience building, copywriting, budget allocation
// and send scheduling. She has done all four by hand in regulated crypto, so she can
// tell when an agent's output is wrong rather than only when the software errors.

const { name, contact, education } = require("./common.cjs");

module.exports = {
  slug: "kraken-qa-ops",
  label: "Kraken — QA & Operations",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Growth marketer who runs AI systems and builds with them. I have manually done everything an AI " +
    "growth platform automates, from building audiences and writing copy to moving budget and " +
    "scheduling sends, across 26 markets in regulated crypto. I use Claude Code and Cursor daily, " +
    "build MCP and API integrations, and spend time finding where models get things wrong. " +
    "Experienced in structured testing and regulated messaging review, with a data-science research " +
    "background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Ran 128 structured campaign tests across 26 countries, identifying 5 scalable campaign groups and reallocating budget away from 26 underperforming campaigns",
            "Evaluated 6 AI model providers and spent 2 weeks on prompt engineering to fix recurring output failures, reviewing 100+ generated assets against brand and compliance standards",
            "Monitored daily spend and performance across 121 live campaigns in 26 markets, investigating anomalies and escalating what did not reconcile",
            "Automated daily paid media reporting with Claude Code and Cursor, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Built MCP and API integrations and internal bots to remove repeat manual work across the team",
            "Implemented API tools to translate CRM communications into local languages, increasing email open rate by 10%",
            "Played a key role in rolling out the UK FinProm approval process with Compliance, reviewing regulated messaging across all retail products and app-store content across 20 storefronts in UK, US and EU markets",
            "Developed an AI-powered UGC production workflow, delivering 100+ video assets and cutting production time by 75%",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Managed £50k+ monthly paid budget managing ads and conversion funnels, sustaining 120% ROAS",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "AI & automation", text: "Prompt engineering and output quality control, evaluation of 6 model providers, automation workflows (Claude Code, Cursor), MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), AI UGC workflow design (avatar, voice, motion, video), tools: Runway, Jitter, Gemini, Seedance, Wan, Seeaudio, ElevenLabs" },
        { label: "Testing & measurement", text: "Structured and experimental test design, edge-case enumeration, review and approval queues, test and process documentation, anomaly investigation, funnel and cohort analysis, survey design and segmentation, Power BI, Excel, Microsoft Clarity, R, Python, SQL" },
        { label: "Operations", text: "Multi-market and multi-language delivery across 26 countries, regulated messaging review with Compliance (Adclear), app-store content standards across 20 storefronts, cross-functional work with Data Engineering, Security and Front-End" },
        { label: "Marketing workflows", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn, ASO and Custom Product Page, international campaign structure, creative testing and budget allocation, competitor research (Appfollow), creative briefing and direction, Figma, Photoshop" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
