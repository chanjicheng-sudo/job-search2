// General purpose — crypto growth marketer, sent to recruiters. Her own text of Oct 2026,
// kept verbatim. Only the Skills section was restructured, at her request, for
// readability: one category per line, duplicates removed.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "crypto-growth-general",
  label: "General — Crypto Growth Marketer",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Fintech/crypto growth marketer with hands-on ownership of paid acquisition across five channels and " +
    "26 markets, plus the creative, app-store and reporting systems behind it. I use AI to solve growth " +
    "problems, most recently building an AI UGC workflow from scratch that cut CPI by 76% and increased " +
    "acquisition volume by 15%. Experienced in managing retail, wealth and institutional products in a " +
    "regulated environment, with a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Developed an AI-powered UGC production workflow, delivering 100+ video assets across TikTok and Google Ads, increasing CTR from 0.4% to 1.15% (+188%), reducing CPI from $25 to $6 (−76%), and cutting production time by 75%",
            "Automated daily paid media channels reporting with Claude Code and Cursor, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard",
            "Reduced CPI on UK campaigns by 21.5% while installs increased 30.2%, and scaled the core US campaign to 3x daily users acquired through CPP and SKAG testing and optimization",
            "Built an outreach channel of 80 crypto publishers for high net worth client acquisition that sourced 3 major clients",
            "Supported Retail, Wealth and Institutional growth customer research and prospecting",
            "Ran 128 structured campaign tests across 26 countries, identifying 5 scalable campaign groups and reallocating budget away from 26 underperforming campaigns",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Managed £50k+ monthly paid budget managing ads and conversion funnels, sustaining 120% ROAS",
            "Increased daily conversions from 10 to 50+ (5x) by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity, contributing to +5% funnel progression",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "AI & automation", text: "Claude Code, Cursor, MCP and API integrations (Windsor.ai), AI UGC workflows (avatar, voice, motion, video), vibe-coded apps and bots (fly.io)" },
        { label: "AI creative tools", text: "Runway, Jitter, Gemini, Seedance, Wan, Seeaudio, ElevenLabs" },
        { label: "Paid media", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn, ASO and Custom Product Pages, creative testing, budget allocation" },
        { label: "Creative", text: "Creative briefing and direction, agency and partner management, Figma, Photoshop" },
        { label: "Measurement", text: "AppsFlyer, Apple Search Ads attribution, conversion tracking setup, funnel and cohort analysis, test and survey design, competitor research (Appfollow), Power BI, Excel, Microsoft Clarity, SQL, Python, R" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
        { label: "Interests", text: "Digital assets, business psychology, languages, martial arts, weightlifting" },
      ],
    },
  ],
};
