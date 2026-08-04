---
title: "207 · Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms — Clayton Thomas"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-clayton-thomas"
source_hash: "d3e60a551ba343388a9ee29ddb39a99c5b0633d5c5fd523fe50f862360bd1de8"
sequence: 207
generator: "outreach-garden: managed"
---

# 207 · Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms

## At a glance

- **Professor:** Clayton Thomas
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms](https://arxiv.org/abs/2512.02354)
- **Authors:** Aadityan Ganesh, Clayton Thomas, S. Matthew Weinberg
- **Year:** 2025

## Paper overview

This paper studies transaction fee mechanisms (TFMs) used in blockchain systems to allocate block space based on user bids. It focuses on designing TFMs that are resistant to miners manipulating the system off-chain to increase their revenue, a property called off-chain influence-proofness (OffC-IP). The authors characterize all such OffC-IP TFMs, showing that deterministic, non-cryptographic OffC-IP TFMs must be posted-price mechanisms with carefully tuned burns, and that randomized OffC-IP TFMs exist beyond posted-price mechanisms. The work clarifies the trade-offs and limitations of TFMs in blockchain settings.

### Why it matters

**Research problem:** How to design transaction fee mechanisms that are incentive compatible and resistant to miners manipulating the system off-chain to increase revenue, while maintaining simplicity for users and miners, and without relying heavily on cryptography.

**Why it matters:** Blockchains rely on TFMs to allocate limited block space efficiently and fairly. Miners can manipulate these mechanisms off-chain to extract extra revenue, undermining fairness and simplicity. Understanding which TFMs prevent such manipulations is crucial for secure and user-friendly blockchain protocols.

**Key contributions:**

- Characterization of OffC-IP TFMs via a burn identity linking burn and allocation rules.
- Proof that deterministic, non-cryptographic OffC-IP and OnC-S TFMs are posted-price mechanisms with specially tuned burns.
- Impossibility results showing deterministic OffC-IP and OnC-S TFMs require infinite supply and prior dependence.
- Construction of randomized OffC-IP and OnC-S TFMs that do not use cryptography and work with finite supply.
- Discussion of trade-offs between OffC-IP and strong collusion-proofness (SCP) properties.

## About the professor

**Clayton Thomas** — Assistant Professor, Computer Science, Rensselaer Polytechnic Institute.

Research interests: design of collective decision-making algorithms for settings such as student-school matching, high-stakes auctions, and multi-candidate voting

### Research links

- [Faculty/profile page](https://faculty.rpi.edu/clayton-thomas)
- [Professor website](https://clathomasprime.github.io/)
- [Resolved homepage](https://clathomasprime.github.io)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Off-Chain Influence Proof Transaction Fee Mechanisms, start with foundational concepts in mechanism design focusing on monopsonists and incentive compatibility, which underpin the theoretical model of miners as Bayesian monopsonists and the DSIC properties of the mechanisms. Next, explore the practical context of transaction fee mechanisms in blockchains to appreciate the real-world problem setting. Finally, study the authors' own detailed presentation on their novel characterization of OffC-IP TFMs to grasp their main contributions and results.

### Mechanism Design for Monopsonists *(prerequisite)*
This section covers the core theoretical framework modeling miners as Bayesian monopsonists optimizing virtual utility, a central modeling assumption in the paper. Understanding monopsony and related auction theory is essential to grasp how the paper characterizes OffC-IP TFMs as truthful auctions for a multi-dimensional monopsonist.

*How the paper uses it:* The paper models the miner as a Bayesian monopolist (monopsonist) optimizing virtual utility to characterize OffC-IP TFMs.

▶ [(IME2) Chapter 3 - Video 4: The Case of Monopsony (Single ...](https://www.youtube.com/watch?v=MRJGU95U0_U) — selcuk ozyurt · 16:36

### Incentive Compatibility and DSIC *(prerequisite)*
This section explains dominant strategy incentive compatibility (DSIC), a key property ensuring truthful bidding in auctions and TFMs. Understanding DSIC is crucial for following the paper's characterization of OffC-IP TFMs as DSIC auctions and the burn identity linking allocation and burn rules.

*How the paper uses it:* The paper proves that OffC-IP TFMs correspond to DSIC auctions for the multi-dimensional monopsonist.

▶ [(AGT11E8) [Game Theory] Direct Mechanisms, Dominant ...](https://www.youtube.com/watch?v=E4O9TXaYW60) — selcuk ozyurt · 10:28

### Transaction Fee Mechanisms in Blockchains *(prerequisite)*
This section provides context on how transaction fee mechanisms allocate block space in blockchain systems, the practical problem the paper addresses. It situates the theoretical results within the blockchain domain and explains the motivation for designing OffC-IP TFMs.

*How the paper uses it:* The paper studies TFMs used in blockchains to allocate block space and prevent miner manipulation.

▶ [EC'24 Tutorial: Transaction Fee Mechanism Design (Part 1 ...](https://www.youtube.com/watch?v=XMUXrBUFCHY) — ACM SIGecom · 21:06

### Paper Author Talk *(the paper's own talk)*
This is the authors' own recorded talk presenting their novel characterization of OffC-IP TFMs, including the burn identity, deterministic and randomized mechanisms, and impossibility results. It offers the most direct and detailed exposition of the paper's contributions and insights.

*How the paper uses it:* This talk by Aadityan Ganesh presents the paper's main results and methodology on OffC-IP TFMs.

▶ [Characterizing Off-Chain Influence Proof Transaction Fee ...](https://www.youtube.com/watch?v=XfMS6QFOGpE) — Aadityan Ganesh · 33:20

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Off-Chain Influence Proof Transaction Fee Mechanisms, start by learning the basics of transaction fee mechanisms in blockchains to grasp the practical problem context. Then build foundational knowledge in mechanism design concepts like monopsonists and incentive compatibility, which underpin the theoretical modeling of miners and truthful auctions. Finally, explore the paper's core contributions on OffC-IP TFMs, including the role of randomized mechanisms and burn rules, through concise expert talks by the authors.

### Transaction Fee Mechanisms in Blockchains *(prerequisite)*
This section introduces how blockchains allocate limited block space to users via transaction fee mechanisms (TFMs). Understanding this practical context is essential to appreciate why TFMs must be designed carefully to prevent miner manipulation and ensure fairness.

*How the paper uses it:* The paper studies TFMs as the core mechanism for allocating block space and focuses on their vulnerability to off-chain miner manipulation.

▶ [EC'24 Tutorial: Transaction Fee Mechanism Design (Part 1 ...](https://www.youtube.com/watch?v=XMUXrBUFCHY) — ACM SIGecom · 21:06

### Mechanism Design for Monopsonists *(prerequisite)*
Learn the economic theory of monopsonists—single buyers in a market—and how auctions and mechanisms are designed when the buyer optimizes virtual utility. This models miners as monopolistic buyers of transactions, a key abstraction in the paper.

*How the paper uses it:* The paper models miners as Bayesian monopsonists optimizing virtual utility to characterize OffC-IP TFMs.

▶ [(IME2) Chapter 3 - Video 4: The Case of Monopsony (Single ...](https://www.youtube.com/watch?v=MRJGU95U0_U) — selcuk ozyurt · 16:36

### Incentive Compatibility and DSIC *(prerequisite)*
Dominant Strategy Incentive Compatibility (DSIC) ensures participants truthfully reveal their preferences regardless of others' actions. Understanding DSIC is crucial for grasping why certain TFMs prevent manipulation and are considered truthful.

*How the paper uses it:* The paper proves OffC-IP TFMs are DSIC auctions for a multi-dimensional monopsonist, linking incentive compatibility to off-chain manipulation resistance.

▶ [(AGT11E8) [Game Theory] Direct Mechanisms, Dominant ...](https://www.youtube.com/watch?v=E4O9TXaYW60) — selcuk ozyurt · 10:28

### Randomized Mechanisms and Burn Rules
This section covers how randomized mechanisms and burn rules work in auctions, including how burning a fraction of payments can enforce truthful behavior. These concepts are key to the paper's construction of randomized OffC-IP TFMs that work with finite supply.

*How the paper uses it:* The paper constructs randomized OffC-IP TFMs using carefully tuned burn rules to achieve incentive compatibility without cryptography.

▶ [Lecture 7.3: Optimal Auctions (Mechanism Design)](https://www.youtube.com/watch?v=476v2Bu-7w0) — economification · 20:12 · 5 years ago

### Paper Author Talk *(the paper's own talk)*
Watch the authors explain their novel characterization of OffC-IP TFMs, including the burn identity and the trade-offs in deterministic and randomized mechanisms. This talk provides direct insight into the paper's main contributions and results.

*How the paper uses it:* This talk by Aadityan Ganesh presents the paper's key results on OffC-IP TFMs and their implications for blockchain transaction fee design.

▶ [Characterizing Off-Chain Influence Proof Transaction Fee ...](https://www.youtube.com/watch?v=XfMS6QFOGpE) — Aadityan Ganesh · 33:20

## Already in your library

- [Lecture 22: Auctions, Part 1](https://www.youtube.com/watch?v=-XGDKoWi0Zg) — also for: Efficiently Restructuring Sovereign Debt via Arctic Auctions with Convex Costs (Vijay V. Vazirani)
