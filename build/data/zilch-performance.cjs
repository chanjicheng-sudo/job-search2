// Zilch — Performance Marketing Manager (reports to Director of Performance Marketing).
// Consumer fintech (pay later), London, hybrid.
//
// Her rules: result-led, active verbs, change in brackets, no filler, no keyword counts,
// most relevant first, simple skills lines. Paid social creative leads because the JD
// asks for "significant Paid Social & Paid App experience, especially with creative
// optimisation". AppsFlyer is listed because her own general CV lists it; the
// performance note marks it as unconfirmed, flagged to her.
//
// Not claimed, because not on record: Bing Ads, Google Analytics, programmatic,
// multi-million budgets. See applications/zilch/jd-read.md.

const { contact, education } = require("./common.cjs");

module.exports = {
  slug: "zilch-performance",
  label: "Zilch — Performance Marketing Manager",
  name: "JESSIE CHAN",
  contact,

  profile:
    "Performance marketer specialising in paid social and paid app acquisition for fintech, across 9 " +
    "channels and 26 markets. I run campaigns hands-on, from creative strategy and landing pages to " +
    "experiments and reporting, and I solve marketing problems with AI. I work across Product, " +
    "Engineering, Data and Compliance, and bring a data-science research background.",

  sections: [
    {
      heading: "EXPERIENCE",
      roles: [
        {
          org: "Institutional and Retail Growth Marketing Intern",
          dates: "May 2026 – Present",
          sub: "Blockchain.com, London, United Kingdom  |  Retail, Wealth and Institutional",
          bullets: [
            "Increased CTR from 0.4% to 1.15% (+188%) and reduced paid social CPI from $25 to $6 (−76%) by building an AI UGC production workflow, delivering 100+ video assets across TikTok and Google Ads and cutting production time by 75%",
            "Grew daily installs from 187 to 562 (~3x) at a flat ~$1.50 paid search CPI by expanding paid search from 2 to 26 markets (13x) with country-level bid and creative strategy",
            "Cut UK CPI by 21.5% while installs rose 30.2% by running 128 structured experiments across 26 markets, reallocating ~$21k from 26 underperforming campaigns to 5 scalable campaign groups",
            "Grew cumulative perps trading volume from $100m to $500m (5x) in two months and increased user retention by 12% by leading voice-of-customer research with churned users and making the product explainer persistent",
            "Drove 600+ installs in the first 7 days of the yield product relaunch by recreating outdated creator assets with AI video after the rebrand",
            "Converted 4 high net worth clients onto the loans product in Malaysia within 1 month of launch by leading go-to-market across paid media, influencer, affiliate and referral channels",
            "Increased email open rate by 10% by localising CRM communications into 24 languages with built-in CRM APIs",
            "Cut reporting time by ~10 hours a month by automating daily paid media reporting with Claude Code and MCP connectors, and led its launch as a company-wide Streamlit dashboard with Data Engineering and Security",
            "Delivered 30+ creative briefs and 40 ads across 9 channels, and directed 50+ assets to 3 external partners across multiple markets",
            "Generated 20+ active leads for Institutional business development by building a 100-operator prospect database",
          ],
        },
        {
          org: "Performance Marketer",
          dates: "Feb 2025 – Apr 2026",
          sub: "Malaberg, London, United Kingdom",
          bullets: [
            "Increased daily conversions from 10 to 50+ (5x) and funnel progression by 5% by rebuilding landing and promotional pages in Figma and Photoshop, informed by funnel analysis in Power BI, Excel and Microsoft Clarity",
            "Drove 120% ROAS on £50k+ monthly paid budget",
            "Cut daily report preparation from 30 min to near-instant by building a company-wide automated reporting pipeline on lead conversion",
            "Led weekly content reviews with Compliance to clear regulated consumer-finance messaging across all channels",
          ],
        },
      ],
    },
    education,
    {
      heading: "SKILLS",
      skills: [
        { label: "Paid media", text: "Meta Ads, TikTok Ads, Google Ads, Apple Search Ads, LinkedIn Ads, paid social creative strategy, bidding and budget allocation, international campaign structure" },
        { label: "Measurement", text: "AppsFlyer, Apple Search Ads attribution, conversion tracking, A/B testing and experimentation, funnel and cohort analysis, Power BI, Microsoft Clarity, SQL, Python, R, Microsoft Office (Excel)" },
        { label: "Conversion", text: "Landing page and customer journey optimisation, ASO and Custom Product Pages, Figma, Photoshop" },
        { label: "AI & automation", text: "AI UGC production (Runway, Gemini, Seedance, ElevenLabs), Claude Code, Cursor, MCP and API integrations, automated dashboards (Streamlit)" },
        { label: "Languages", text: "English, Mandarin, Cantonese (native), Malay (fluent)" },
      ],
    },
  ],
};
