# Plasma — technical interview prep (Growth / Paid Acquisition)

Read this an hour before. Bold lines are the ones to say out loud. Everything here is
backed by the performance note.

---

## 1. Your 30-second opener

**"I'm a growth marketer at Blockchain.com. I run paid acquisition across 26 markets,
and I use AI to fix the things that slow growth down. I scaled daily installs from 187 to
562, about 3x, while holding CPI flat at around $1.50. I ran 128 structured tests to get
there. And when we kept running out of creative, I built an AI UGC workflow that took
paid social CPI from $25 to $6. Before that I managed £50k a month at Malaberg at 120%
ROAS. My background is an MRes in experimental psychology with data science, so I think
about testing the way a researcher does."**

---

## 2. The five stories to have ready

Tell each in four beats: problem, what you did, the number, what you learned.

| Story | Problem | What you did | Result |
|---|---|---|---|
| **Scaling paid search** | Only 2 countries, 9 campaigns | Expanded to 26 countries and 121 campaigns, country-level bids and creative | 187 to 562 daily installs (~3x), CPI held at ~$1.50. Core US campaign 178 to 373/day (**~2x, not 3x**) |
| **128 tests** | Budget spread across campaigns that were not earning it | Structured tests, kill rules, cut 26 campaigns, scaled 5 groups, moved ~$21k | GB CPI −21.5% while installs +30.2% (**GB only**, account CPI stayed flat) |
| **AI UGC** | Relied on real creators, ran out of creative, TikTok assets last ~2 weeks | Evaluated 6 AI providers, 2 weeks of prompt engineering, built an end-to-end workflow | 100+ videos, CTR 0.4% to 1.15%, **paid social** CPI $25 to $6, production 2h to 30 min |
| **Perps churn** | Users churned | Voice-of-customer research with active, inactive and churned users. Found they did not understand perps. Explainer made persistent, help page reworked | Retention +12%, cumulative volume $100m to $500m in two months |
| **Earn relaunch** | Rebrand left every creator video with the old name | Recreated them with the AI workflow | 600+ installs in the first 7 days |

**Keep these straight under pressure:**
- The 21.5% is GB only. Account-wide CPI was flat. Say "on GB campaigns".
- The $25 to $6 is paid social, not paid search. Say "paid social".
- The US campaign roughly doubled. The 3x is the whole account.

---

## 3. The questions they will ask, and how to answer

### "Attribution, incrementality, cohort analysis. Where does each mislead you?"
This line is in their job ad. It is the most likely deep question.

- **Attribution** tells you which touchpoint got credit, not what caused the user to
  come. It over-credits branded search and retargeting, which catch people who were
  coming anyway. On iOS, since ATT, a lot of it is modelled, not observed.
- **Incrementality** (geo holdouts, conversion lift tests) answers "would this have
  happened without the ad?" It misleads when the test is too small or too short, when
  markets are not comparable, or when the holdout leaks.
- **Cohort analysis** shows how groups behave over time. It misleads when the mix
  changes (a new channel brings different users), when cohorts are not mature yet, or
  with seasonality.

**"I trust none of them alone. I use attribution to steer day to day, incrementality to
check the big bets, and cohorts to see whether the users are actually worth it. My MRes
was in experimental design and causal inference, so the question I always ask is: what
else could explain this number?"**

### "Your numbers are installs. We care about people who fund and keep spending."
The hiring-manager read flagged this as the first question they will ask.

**"Agreed, installs are the wrong goal on their own. At Plasma I would optimise campaigns
for the funding event, not the install, and judge channels on cost per funded account and
payback. Where funding events are too few for the algorithm to learn, I would use an
earlier event that predicts funding, and check it against funded cohorts."**
Then use perps as proof you care about what happens after the install: retention +12%.
If you have any funded or deposit rate from Blockchain.com, this is the moment to use it.

### "How do you run a creative test?"
**"One variable at a time, a clear hypothesis, a kill rule decided before launch, and
enough volume to trust the result. I test the hook first, because that is what decides
whether anyone watches. For Plasma, the obvious first test is Spend versus Send versus
Earn, by market, because they will not rank the same everywhere."**

### "How would you scale Meta or TikTok?"
- Broad targeting, and let the creative do the targeting.
- Raise budgets gradually (roughly 20% every few days) so you do not reset learning.
- Watch frequency and CTR decay for creative fatigue, and keep a pipeline of new
  creative ready. This is where the AI workflow matters.
- Move budget to where the next pound is cheapest, not where the average is best.

### "How would you take us beyond crypto-native users?"
**"Speak like a fintech, not a crypto project, which is what your website already does.
'Add local currency. Get dollars.' tells me the customer is someone in a soft-currency
market who wants dollars and cheap transfers. I would test remittance, dollar savings and
cashback as separate hooks by country, starting where dollar demand is highest."**
You speak Mandarin, Cantonese and Malay. Mention Southeast Asian corridors.

### "You have £X for a new market. What do you do?"
1. What does success mean: funded accounts at what cost, and what payback.
2. Set up tracking first, and check it fires end to end before spending.
3. Start small across 2 or 3 channels with 3 or 4 creative angles.
4. Kill fast, scale what works, report weekly with before and after.
5. Check compliance on every claim before it goes live.

---

## 4. The gaps, and honest answers

Do not bluff any of these. An honest answer plus a plan beats a fake one.

| They ask | Say |
|---|---|
| **AppsFlyer or any MMP?** | "I set up ad accounts and conversion tracking, and worked with Apple Search Ads attribution. I have not configured an MMP myself. I know it de-duplicates installs across channels and handles SKAN postbacks, and I would get up to speed quickly." |
| **SKAN / ATT** | Know the basics: since ATT most iOS users opt out, so SKAN sends delayed, aggregated postbacks with limited conversion values. Planning has to rely on modelled data and incrementality tests. |
| **Meta AEM** | "Not hands-on. I understand it limits and prioritises the web events Meta can use for iOS users." |
| **Data warehouse / SQL** | "I use SQL and Python and built automated reporting with Claude Code. I have not owned a warehouse, but I am comfortable pulling and checking my own data." |
| **Budget scale** | "£50k a month at Malaberg. The principles do not change with scale: marginal cost, kill rules, testing discipline." |
| **Seniority** | Let the evidence answer: 128 tests, 26 markets, a workflow the company now runs on. |

---

## 5. Things not to say

- **"Zero-fee USDT transfers"** as a blanket claim. Their own footnote limits it to
  Plasma routes, and third-party fees may apply. Say "free transfers on Plasma".
  Sending in from another chain (Tron, Ethereum) is a bridge with its own source-chain
  fee, unless Plasma One absorbs it, which could not be confirmed. Ask them instead
  (question 6).
- **XPL's price.** Do not raise it. If they do, acknowledge it calmly.
- **Exchanges beyond Binance.** Only Binance support for USDT on Plasma was confirmed.
- **"You don't run paid social."** Say "I could not find any active ads on the Meta Ads
  Library". The Ads Library shows active ads only.
- **Yield figures.** Sources disagree (6% vs 10%+). Do not quote one.

---

## 6. Questions to ask them

1. "What does success look like in the first 90 days: funded accounts, cost per funded
   account, or something else?"
2. "Which markets matter most right now, and is the priority remittance, savings or
   spending?"
3. "What does the tracking stack look like today, and which numbers do you trust least?"
4. "How do creative and compliance sign-off work at the moment?"
5. "What has been tried on paid social so far, and what did you learn?"
6. "When someone deposits USDT from another chain into Plasma One, does the app cover the
   bridge cost, or does the user pay it? That first deposit looks like the biggest point
   of friction in the funnel."

---

## 7. Logistics

- Have the Plasma One app installed and open. Know the onboarding flow.
- Have your CV and the 5 numbers above on one screen.
- Re-check plasma.org on the day for any new launch or promotion.
