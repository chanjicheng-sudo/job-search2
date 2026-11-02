# Plasma — product and competitive notes

Verified by web search in October 2026. Re-check before reusing, crypto moves fast.

## The differentiators

1. **Gas is payable in USDT, and standard USDT transfers are free.** A protocol-level
   paymaster sponsors gas on simple peer-to-peer USDT transfers, so a user can hold
   nothing but USDT and still transact. On Tron the same transfer is near-zero only with
   staked energy, otherwise roughly $2–4.50 burning TRX.
2. **Purpose-built for stablecoins, not a general-purpose chain.** PlasmaBFT consensus,
   1000+ TPS, near-instant finality, designed around USDT specifically.
3. **Bitcoin-anchored, EVM-compatible.** Periodic anchoring to Bitcoin for security, full
   EVM compatibility so existing tooling works.
4. **They own both the chain and the consumer app.** Plasma One is a neobank running on
   their own L1: fiat and stablecoin deposits, fee-free cross-border transfers, yield up
   to 6%, a Visa card in three tiers, cashback paid in XPL. Most competitors are either
   infrastructure or an app. Plasma is both, so the growth team sits close to the product.
5. **Stripe design partner** for multi-currency stablecoin card infrastructure, announced
   October 2026.

Timeline: $20M raise February 2025, Thiel-backed. Mainnet beta 25 September 2025 with $2B
day-one liquidity. Plasma One launched publicly June 2026.

Exchange support: Binance supports USDT deposits and withdrawals directly on Plasma
network. XPL trades on Binance, Bybit, OKX and Bitget, several supporting direct
withdrawal to Plasma. **Coinbase support was not confirmed — do not name exchanges beyond
Binance without checking.**

## Two things to keep straight under questioning

- **The zero-fee benefit covers simple USDT transfers on Plasma routes, not arbitrary
  smart contract calls.** Their own footnote: "Zero-fee USD₮ transfers refer to Plasma
  routes; third-party fees may apply." Overstating this in an ad is exactly what a
  compliance reviewer sends back.
- **XPL has had a significant price decline since launch.** Do not raise it unprompted,
  but do not look unaware of it either.

## The growth angle

The thing that should matter to a performance marketer is not the architecture. It is
that Plasma has removed, at protocol level, the friction that normally destroys a crypto
acquisition funnel: install the app to move your own money, then discover you must first
buy a separate volatile token to pay the fee. No amount of creative testing fixes that,
because it is a product constraint sitting mid-funnel.

Two consequences:

- The install-to-first-transaction gap is structurally shorter. The metric she could not
  move at Blockchain.com is the one most likely to move here.
- There is a hard, comparable claim to advertise, which is far easier to test against
  than the abstract messaging most crypto products are stuck with.

The Visa card, the yield and the free transfers give three distinct propositions —
remittance, saving, spending — which will not rank the same way in every market.

## What is special about Plasma — research update, November 2026

Third-party sources, mostly press releases and reviews. Where they disagree it is flagged.
Check live terms in the app before quoting any number.

### The one-line version

Plasma is the only one of the stablecoin chains that also runs its own consumer bank app
on top. The others sell infrastructure to businesses. Plasma sells "dollars in your
pocket" to people, mainly in emerging markets, and its own chain makes that cheaper.

### Against the other stablecoin chains

| | Plasma | Tempo | Arc |
|---|---|---|---|
| Backers | Tether / Bitfinex circle, Founders Fund (Thiel), Framework | Stripe and Paradigm | Circle |
| Built around | USDT | Any USD stablecoin | USDC |
| Who it sells to | Consumers, through Plasma One, plus developers | Payment companies and merchants | Institutions (it has a built-in FX engine) |
| Fees | Simple USDT transfers free; other fees in XPL or approved tokens | No native token, fees in any stablecoin | Gas in USDC |
| Live | Mainnet beta 25 Sep 2025 | 18 Mar 2026 | Sources conflict; reported live around Sep 2026 |

Things that are different about Plasma:

- **It got there first.** It was live six months before Tempo and launched with about $2B
  of liquidity on day one.
- **It is built on USDT.** Most of the world's stablecoin money is USDT, and most of it
  sits with retail users in emerging markets. That is exactly who Plasma One is for.
  Arc (USDC) and Tempo (Stripe) both lean towards institutions and the US.
- **It owns the consumer app.** None of the competitors runs its own bank app, so Plasma
  is the one where a growth team works directly with end users.
- **Stripe is a partner as well as a competitor.** Stripe backs Tempo but is also building
  stablecoin cards with Plasma (October 2026). Do not frame it as Plasma versus Stripe.

### Plasma One, the product itself

- **Spend, save and send in one app.** A Visa card with up to 4% cashback, yield on the
  dollar balance, and free transfers between Plasma users.
- **Yield is variable and has come down.** At launch it was marketed at 10%+. A 2026
  review saw about 4.9% APY, and the site says "up to 6%". The yield comes from DeFi
  (a vault run by Veda), so it is not an insured deposit. Never quote a fixed rate.
- **Card tiers:** Lite, Core and Platinum. Cashback does not apply to ATM withdrawals,
  P2P transfers or buying and selling crypto.
- **Self-custodial, but easy to use.** It uses embedded wallets (Privy), so users get
  their own keys without having to manage a seed phrase like in a crypto wallet.
- **No bank licence.** Card issuing goes through Rain and fiat access through regulated
  partners. Features differ by country, and **US residents are restricted** from the main
  sign-up flow. That fits the focus on emerging markets.
- **Traction:** about 5,000 weekly active users in the private beta. More than $100M in
  card spend by October 2026 (Paul's post). Kept 64.5% of April spenders after six months.

### Features on the chain's roadmap

Sources disagree on what is live, so treat these as "announced" unless checked:

- **Custom gas tokens:** pay fees in USDT, and later BTC, instead of XPL.
- **pBTC, a Bitcoin bridge:** Bitcoin brought onto Plasma through a group of independent
  verifiers instead of a single custodian.
- **Confidential payments:** optional privacy that hides amounts and who receives the
  money. Useful for payroll and business payments.

### Why this matters for a growth role

- The pitch to consumers is **access to dollars and cheap cross-border money**, not crypto.
  The chain features are why it can be free and fast, but users never see them.
- Being USDT-first, consumer-first and out of the US means **the markets are Turkey, LatAm,
  the Middle East and Southeast Asia**, so creative has to be localised.
- Retention is already strong. The growth problem is **getting the first deposit and the
  first card spend**, which is where the brief to "go beyond crypto natives" bites.

Sources: theblock.co (Plasma One announcement), blockworks.co, kkinvesting.io Plasma One
card review 2026, privy.io blog, chainstack.com stablecoin L1 comparison, blockeden.xyz
stablechains article, dwellir.com stablechain RPC guide, Binance Research Plasma page,
imToken Plasma page.

## How Plasma One compares with other payment products — November 2026

Most fee and cashback figures come from affiliate card-comparison sites and conflict
with each other. Use the categories, not the exact numbers.

| Type | Examples | Who holds the money | What it is missing compared with Plasma One |
|---|---|---|---|
| Exchange cards | Crypto.com, Bybit, Coinbase | The exchange (custodial) | Tied to a trading account. Built for people who already trade. |
| Custodial stablecoin cards | RedotPay, KAST | The company (custodial) | Strong in emerging markets, but no own chain and no built-in yield. |
| Self-custodial wallet cards | MetaMask Card, Gnosis Pay, Ether.fi Cash, Ready | The user | Made for crypto natives: seed phrases, gas fees, moving between chains. |
| Licensed fintechs | Revolut, Wise | A regulated bank or e-money firm | Insured and licensed, but stablecoins are an add-on. Revolut launched a euro stablecoin in Aug 2026 and plans a US bank with stablecoins in 2027. |

### What makes Plasma One different

1. **It is the only one running on its own blockchain.** Transfers between users are
   free, and receiving from other chains costs nothing on Plasma One's side. Every
   other card company pays someone else's network fees or passes them on.
2. **Self-custody without the crypto hassle.** Users hold their own keys, but sign up
   with embedded wallets (Privy) and never see a seed phrase. Wallet cards like MetaMask
   or Gnosis Pay are self-custodial but crypto-native. RedotPay and KAST are easy to use
   but custodial. Plasma One sits between the two.
3. **Spend, save and send in one app.** Card, yield on the balance and free transfers
   together. Most cards are only for spending, with no yield.
4. **Built around USDT.** Most of the world's stablecoin money is USDT, held by everyday
   users in emerging markets. Users of Binance can withdraw USDT straight to Plasma.
5. **Retention is a proof point.** 64.5% of April spenders still active after six
   months, against 27% for MetaMask (Paul's figure).

### Where it is weaker, and what to expect being asked

- **Cashback is paid in XPL.** Its value moves with the token price, which is down a lot.
  KAST pays cashback in dollars.
- **No bank licence and no deposit insurance.** Revolut and Wise have both. Yield comes
  from DeFi, so it carries risk.
- **FX and caps.** Some sources report around 1% FX plus Visa costs, and a cashback cap
  above a monthly spend level. Check in the app.
- **Not open to US residents** in the main sign-up flow.

### How to say it in an interview

> Most crypto cards either hold your money for you, or give you your own wallet and
> expect you to know how crypto works. Plasma One gives you your own wallet without the
> crypto steps, and because it runs on its own chain, moving money is free. That makes
> it closer to Revolut for people who want dollars than to a crypto card.

Sources: fxcintel.com stablecoin card analysis, stablecoininsider.org neobanks for
stablecoins 2026, vaultleap.com crypto debit cards 2026, slash.com RedotPay vs KAST,
defillama.com crypto cards, cointelegraph.com and thedefiant.io on Revolut, ara.cat on
Revolut euro stablecoin.

## How Plasma makes money — November 2026

Plasma does not publish a revenue breakdown. This is pieced together from on-chain data
(DefiLlama), product reviews and how card businesses normally work. Items marked
"inferred" are reasoning, not reported fact.

### Where the money comes from

1. **Card interchange.** Each time a Plasma One card is used, the merchant's bank pays a
   fee, roughly 1–2% in most markets and lower in the UK and EU. It is split between the
   issuer (Rain), Visa and Plasma. This is why Paul measures card spend: it is the number
   that turns into revenue. (Split inferred; Plasma has not disclosed it.)
2. **FX spread.** Reviews report about 1% extra on non-USD purchases, even though there
   is no stated FX fee. Some of that likely goes to Plasma or its partners.
3. **Paid tiers.** The card has Lite, Core and Platinum tiers. The current promotion,
   "Claim Core tier free for 6 months", implies Core is normally paid.
4. **A share of yield (inferred).** Users earn yield from a Veda vault. Apps like this
   usually keep part of the yield before passing the rest on. Not confirmed for Plasma.
5. **Chain fees.** Simple USDT transfers are free, but other transactions pay gas in XPL.
   This is very small today: about $10K in Q3 2026 by DefiLlama, and the "fee switch" that
   would send fees to token holders is off.
6. **Partnerships and businesses (inferred).** Stripe's stablecoin cards, Deel payroll and
   Whop run on or with Plasma. Business and infrastructure deals are a likely future
   revenue line, but no terms are public.

### Where the money goes

- **Cashback costs more than interchange earns.** Up to 4% cashback against roughly 1–2%
  interchange means each purchase can lose money. The gap is paid in XPL that the
  Foundation buys on the market (Paul, April 2026). That is customer-acquisition spend,
  not profit.
- **Free transfers** are a cost Plasma takes on to win users.

### What actually funds the company

- Equity raises (about $20M in February 2025, then more) and the XPL token sale, which
  raised hundreds of millions in 2025.
- The Foundation's XPL treasury. If the network grows, the tokens it holds are worth more.

### The strategic picture

- **Tether's angle.** Plasma is closely linked to the Tether / Bitfinex circle. Tether earns
  interest on the reserves behind every USDT in circulation, so more USDT in use benefits
  Tether even if transfers are free. This is a benefit to the wider group, not direct
  revenue for Plasma.
- **The plan is growth first, profit later.** It is the same model as early Revolut:
  subsidise usage, get to scale, then earn from interchange, FX, subscriptions and
  business services.

### Why this matters in the interview

- **Card spend is the revenue line**, so a growth hire should be judged on users who fund
  and spend, not installs. That matches the JD.
- **Cashback is a subsidy.** A smart question: "How do you think about the cost of
  cashback against interchange when you value a new user?" It shows you understand unit
  economics. Do not suggest the business is losing money. Frame it as a deliberate
  investment.
- Do not bring up token sale amounts or the falling XPL price.

Sources: defillama.com (Plasma chain revenue and XPL), bleap.finance Plasma One review,
kkinvesting.io Plasma One card review, coinstats.app October 2026 analysis, techflowpost
and forklog on the XPL sale and token model, decrypt.co on the Plasma One launch.

## How users fund and spend with Plasma One — November 2026

- **The wallet is built into the app.** No separate crypto wallet is needed.
- **Bank transfer in local currency.** Virtual accounts in USD, EUR, GBP, MXN (since June
  2026) and BRL, over local payment systems such as SEPA, Faster Payments and ACH. Money is
  converted to stablecoins on arrival. USD wires reportedly cost $10–15. Other local
  transfers have small fees.
- **Stablecoin deposits** from Plasma, Ethereum, Solana and Tron, or straight from an
  exchange such as Binance.
- **Spending converts at the till.** The balance converts to local currency at the moment
  of purchase (App Store listing). Apple Wallet virtual card, or a physical card.
- **Card after ID check**, issued by Rain within minutes. Some countries have a $10 card
  fee or minimum deposit. US residents restricted.

Growth angle: local bank funding is the mainstream route, so it is the first-deposit step
to watch. Crypto users can come straight from an exchange.

Sources: Plasma One App Store listing, Plasma help centre (intercom.help), spendnode.io on
MXN funding, penchan.co and polymart.app card guides, Blockworks.
