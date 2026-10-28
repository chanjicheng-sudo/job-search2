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
