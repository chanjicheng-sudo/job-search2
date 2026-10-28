// Kraken / Payward — QA & Operations, internal AI-native growth platform.
//
// Built on Jessie's current CV structure: title first, company and scope on the sub-line,
// dense inline skills block.
//
// The thesis: the platform she would be testing automates audience building, copywriting,
// budget allocation and send scheduling. She has done every one of those by hand, at
// scale, in regulated crypto. So she can tell when an agent's OUTPUT is wrong, not only
// when the software errors. She also builds with AI rather than only using it, which is
// their "AI-native habits" and "prompt engineering curiosity" requirements answered with
// work. Very few ops or QA applicants will have both halves.
//
// Education keeps the dissertation mark: rigour is what this req is buying.

const { name, contact, educationWithMark } = require("./common.cjs");

module.exports = {
  slug: "kraken-qa-ops",
  label: "Kraken — QA & Operations",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Marketing operations specialist who runs AI systems and builds with them. I have manually done " +
    "everything an AI growth platform automates — building audiences, writing copy, moving budget, " +
    "scheduling sends — across 26 markets in a regulated crypto business, so I can tell when the " +
    "output is wrong and not only when the software is. I use Claude Code and Cursor daily, build MCP " +
    "and API integrations and internal bots, and have spent weeks finding where models get things " +
    "wrong. Trained in experimental design and causal inference: 128 structured tests run, 26 " +
    "campaigns cut on the evidence.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Designed and ran 128 structured tests across 26 markets, defining what each would prove, which segments it covered and when to stop it; identified 5 scalable campaign groups and cut 26 that failed their criteria",
            "Evaluated 6 AI model providers across avatar, voice, motion and video, then spent ~2 weeks on prompt engineering to find and correct recurring failure modes before any output reached a live ad; reviewed 100+ generated assets against quality and brand standards",
            "Build with AI daily: automation workflows in Claude Code and Cursor, MCP and API integrations, and internal bots deployed to remove repeat manual work across the team",
            "Monitored daily performance and spend across 121 live campaigns in 26 markets, investigating anomalies against expected ranges and escalating what did not reconcile. [ADD: one specific error you caught before it cost money — this is the single most persuasive line on the page for this role]",
            "Reviewed regulated customer-facing messaging across all retail products before release and owned app-store content across 20 storefronts, checking copy against compliance standards in UK, US and EU markets",
            "Automated daily reporting after evaluating 4 implementation approaches, cutting 30 min/day of manual work, and partnered with Data Engineering and Security to publish it as an internal dashboard. [ADD: did you reconcile the dashboard figures against source data before launch? That is QA on a software product and should say so]",
            "Ran paid, creative and lifecycle delivery across 5 channels and 26 markets, scaling installs ~3x at flat CPI while directing 30+ creative briefs and 40 ads",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Led weekly content reviews with Compliance, working a review queue to clear regulated consumer-finance messaging across every customer-facing channel",
            "Built a company-wide automated reporting pipeline on lead conversion, cutting daily report preparation from 30 min to almost immediate output and giving the team one consistent source for the numbers",
            "Ran funnel and lifecycle analysis in Power BI, Excel and Microsoft Clarity to find where users dropped out, then rebuilt the pages responsible; daily conversions rose from 10 to 50+ (5x) with funnel progression up 5%",
            "Managed £50k+ monthly paid budget with full accountability for efficiency, sustaining 120% ROAS",
          ],
        },
      ],
    },
    educationWithMark,
    {
      heading: "SKILLS",
      skillsBlock: [
        { label: "AI & automation", text: "Daily use across generation and analysis, prompt engineering and output quality control, evaluation of 6 model providers, automation workflows (Claude Code, Cursor), MCP and API integrations (Windsor.ai), vibe-coded apps and bots (deployed on fly.io), tools: Runway, Jitter, Gemini, Seedance, Wan, Seeaudio, ElevenLabs" },
        { label: "Testing & operations", text: "Structured test design and experimental method, edge-case enumeration, review and approval queues, written documentation and process notes, working to compliance standards with Legal and Compliance, multi-market and multi-language delivery. [ADD: Jira, Linear or any issue tracker you have used, even lightly — a named nice-to-have]" },
        { label: "Data", text: "Funnel and cohort analysis, anomaly investigation, automated reporting pipelines, Power BI, Excel, Microsoft Clarity, SQL, R, Python. [ADD: Mixpanel or Amplitude if you have touched either]" },
        { label: "Marketing workflows", text: "Paid media (Apple Search Ads, Google Ads, Meta, TikTok, LinkedIn), lifecycle and creative production, ASO and Custom Product Page, international campaign structure, competitor research (Appfollow), Figma, Photoshop" },
        { label: "Personal interest", text: "Digital assets, business psychology, languages" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
