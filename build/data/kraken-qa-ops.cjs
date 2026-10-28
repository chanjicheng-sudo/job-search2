// Kraken / Payward — QA & Operations, internal AI-native growth platform.
//
// Rebuilt from the documented structure rather than restored byte-for-byte: structured
// testing leads, daily monitoring is its own bullet, the AI vendor work is framed as
// finding where models get things wrong, compliance review is promoted out of a trailing
// clause, and paid acquisition compresses to one closing line. Skills leads with testing
// and operations; paid media drops to fourth. The dissertation mark is back in, because
// rigour is what this req is buying.

const { name, contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "kraken-qa-ops",
  label: "Kraken — QA & Operations",
  name,
  contact,

  profile:
    "Marketing operations and analytics specialist who tests systems for a living: 128 structured " +
    "campaign tests across 26 markets, daily reporting built and monitored, and regulated output " +
    "reviewed before it ships. Trained in experimental design and causal inference, so a test plan " +
    "and a suspect number are familiar ground. Uses AI tooling daily and has spent weeks finding " +
    "where it gets things wrong.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Blockchain.com, London, United Kingdom",
          dates: "May 2026 – Present",
          sub: "Growth Marketing Intern  |  Retail, Wealth and Institutional",
          bullets: [
            "Designed and ran 128 structured tests across 26 markets, defining what each test would prove, which segments it covered and when to stop it; identified 5 scalable campaign groups and cut 26 that failed their criteria",
            "Monitored daily performance and spend across 121 live campaigns in 26 markets, investigating anomalies against expected ranges and escalating what did not reconcile. [ADD: one specific error caught before it cost money — the single most persuasive line on this CV for this role]",
            "Evaluated 6 AI model providers across avatar, voice, motion and video generation, then spent ~2 weeks on prompt engineering to find and correct recurring failure modes in their output before it could reach a live ad",
            "Reviewed regulated customer-facing messaging across all retail products before release, and owned app-store content across 20 storefronts, checking copy against compliance standards in UK, US and EU markets",
            "Automated daily Apple Search Ads reporting after evaluating 4 implementation approaches, cutting ~30 min/day of manual work; partnered with Data Engineering, AI Engineering and Security to publish it as an internal Streamlit dashboard. [ADD: did you reconcile the dashboard figures against Apple Search Ads source data before launch? That is QA on a software product and should say so]",
            "Scaled paid acquisition from 187 to 562 daily installs (~3x) at flat ~$1.50 CPI while expanding from 2 to 26 countries, and built the in-house AI UGC pipeline that cut creative production from ~2 hours to 30 minutes per asset",
          ],
        },
        {
          org: "Malaberg, London, United Kingdom",
          dates: "Feb 2025 – Apr 2026",
          sub: "Performance Marketer",
          bullets: [
            "Led weekly content reviews with the Compliance team, working through a review queue to clear regulated consumer-finance messaging across every acquisition channel",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30+ min to almost immediate output and giving the team one consistent source for the numbers",
            "Ran funnel and lifecycle analysis in Power BI, Excel and Microsoft Clarity to find where users dropped out, then rebuilt the pages responsible; daily conversions rose from 10 to 50+ (5x) with +5% funnel progression",
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skills: [
        { label: "Testing & operations", text: "Structured test design and experimental method; regression thinking and edge-case enumeration; review and approval queues; written documentation and process notes; working to compliance standards with Legal and Compliance. [ADD: Jira, Linear or any issue tracker you have used, even lightly — a named nice-to-have]" },
        { label: "Data", text: "Funnel and cohort analysis; anomaly investigation; automated reporting pipelines; Power BI, Excel, Microsoft Clarity, Streamlit, SQL, R, Python. [ADD: Mixpanel or Amplitude if you have touched either]" },
        { label: "AI tooling", text: "Daily use across generation and analysis; prompt engineering and output quality control; evaluation of 6 model providers across avatar, voice, motion and video" },
        { label: "Paid media", text: "Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn; international campaign structure across 26 markets" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
