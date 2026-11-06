// eToro — UK Marketing (generalist: campaigns, copy, creative briefs, partners, launches).
// Canary Wharf, hybrid 3 days. 1–3 years. AI used daily by the team.
//
// The JD does not say "crypto", so "digital assets" is used. Creative briefing is the
// JD's first requirement, so the creative-briefs bullet is included. FinProm is left out
// (the JD does not ask about compliance). Her rules and approved language: AI UGC story
// in her version (spotted competitors, built in 2 weeks, skill handed to the team).
//
// Not claimed: events, sponsorships, podcasts, invoices, organic social, Canva,
// Salesforce Marketing Cloud. See applications/etoro/jd-read.md.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "etoro-marketing",
  label: "eToro — UK Marketing",
  name: "JESSIE CHAN",
  contact,

  profile:
    "B2C fintech marketer working across campaigns, copy, creative and partners in 26 markets. I use AI " +
    "to solve marketing problems, whether improving current workflows or opening new acquisition funnels. I write briefs and copy, coordinate launches with partners and " +
    "internal teams, and design in Canva, Figma and Photoshop. I bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Built the company's first in-house AI UGC workflow in 2 weeks after spotting competitors running AI-generated ads, cutting production time by 75%, lifting CTR from 0.4% to 1.15% (+188%) and driving 600+ installs in the first 7 days of the yield product relaunch",
            "Made the AI UGC workflow scalable by building a prompt-generation skill, then handed it over to other team members to run without me",
            "Delivered 30+ creative briefs and 40 ads across 9 channels, and directed 50+ assets to 3 external partners across multiple markets",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by coordinating the campaign across KOL, affiliate and referral partners and setting up a compliance review with Legal",
            "Increased email open rate by 10% by localising Iterable (CRM) communications into 24 languages with built-in APIs",
            "Increased user retention by 12% by researching why users dropped off our perps product and working with Product to rewrite the in-app explainer and help page",
            "Saved the team ~10 hours a month by automating daily performance reporting with Claude Code, shipped as a company-wide dashboard with Data Engineering and Security",
            "Sourced 3 major high net worth clients by spotting that a major exchange was losing access to European clients under new EU digital asset regulation (MiCAR), and running an outreach campaign to 80 publishers built with AI",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured tests across 26 markets and moving budget to the 5 campaign groups that worked",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by redesigning landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI and Microsoft Clarity",
            "Led weekly content reviews with Compliance to clear consumer-finance copy across all channels",
            "Sustained 120% ROAS while managing £50k+ monthly paid budget",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Marketing", text: "Campaign coordination and project management, product launches, copywriting (email, landing pages, notifications, app store), creative briefs for designers and videographers, partner and stakeholder management" },
        { label: "Channels", text: "CRM and email marketing (Iterable), paid social (TikTok, Meta, LinkedIn), Google Ads, B2C fintech" },
        { label: "Design & AI tools", text: "Canva, Figma, Photoshop, AI tools for drafting, ideation, research and editing (Claude, Gemini), AI video (Runway, ElevenLabs), Claude Code automation" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
