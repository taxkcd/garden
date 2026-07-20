---
title: "031 · Shill-Proof Auctions — Tim Roughgarden"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-timroughgarden-org"
source_hash: "07536308eb369ed8ab506ecdde8053141456ac56a05ff2e4918f529761452190"
sequence: 31
generator: "outreach-garden: managed"
---

# 031 · Shill-Proof Auctions

## At a glance

- **Professor:** Tim Roughgarden
- **Institution:** Columbia University
- **Paper:** [Shill-Proof Auctions](https://doi.org/10.1145/3736252.3742623)
- **Authors:** Andrew Komo, Scott Duke Kominers, Tim Roughgarden
- **Year:** 2025

## Paper overview

This paper studies auction formats that prevent sellers from manipulating prices by pretending to be fake bidders (shill bidding). It identifies auction types that make such manipulation unprofitable, ensuring fairer and more credible auctions.

### Why it matters

**Research problem:** How to design single-item auction formats that are resistant to shill bidding, where a seller might submit fake bids to influence the auction outcome and increase their profit.

**Why it matters:** Shill bidding undermines the fairness and credibility of auctions, potentially harming bidders and reducing trust in online and electronic commerce platforms. Designing auctions that are shill-proof improves market integrity and efficiency.

**Key contributions:**

- Defined and distinguished strong and weak shill-proofness in auction design.
- Proved that the Dutch auction with a suitable reserve price is the unique revenue-optimal and strongly shill-proof auction.
- Showed that the Dutch auction without a reserve is the unique prior-independent auction that is both efficient and weakly shill-proof.
- Demonstrated that any optimal auction can satisfy only two of the three properties: static, ex-post incentive compatible, and weakly shill-proof.

## About the professor

**Tim Roughgarden** — Professor of Computer Science, Computer Science, Columbia University.

Research interests: Economics & Computation, Game Theory, Web3 & Blockchain, Cryptoeconomics, Algorithms, Optimization

### Research links

- [Faculty/profile page](https://www.engineering.columbia.edu/faculty-staff/directory/tim-roughgarden)
- [Identity evidence](http://timroughgarden.org)

## Learning path

To deeply understand the 2025 paper "Shill-Proof Auctions" by Komo, Kominers, and Roughgarden, start with foundational concepts in algorithmic game theory and mechanism design incentive compatibility to grasp the strategic and incentive constraints in auction design. Then, study the Dutch auction theory to appreciate the unique auction format central to the paper's results. Finally, focus on the authors' own detailed talk on shill-proof auctions to directly engage with their novel contributions and theoretical insights.

## Recommended videos (in order)

### Algorithmic game theory *(prerequisite)*
Algorithmic game theory provides the foundational framework for analyzing strategic behavior and equilibria in auctions, which is essential for understanding the theoretical underpinnings of shill-proof auction design. Tim Roughgarden, a co-author of the paper, has extensive lectures on this topic that cover equilibria and computational aspects relevant to mechanism design.

*How the paper uses it:* The paper leverages algorithmic game theory to analyze auction formats and strategic manipulation by sellers.

▶ [Algorithmic Game Theory (Lecture 6: Simple Near-Optimal ...](https://www.youtube.com/watch?v=DkZswYeJLRE) — Tim Roughgarden Lectures · 1:14:31

### Mechanism design incentive compatibility *(prerequisite)*
Understanding incentive compatibility is crucial for grasping the trade-offs and properties of auction mechanisms, including how auctions can be designed so that bidders reveal their true valuations. This background is necessary to appreciate the paper's distinctions between strong and weak shill-proofness and their relation to incentive compatibility.

*How the paper uses it:* The paper analyzes auctions that are ex-post incentive compatible alongside shill-proofness properties.

▶ [Converting any Algorithm into an Incentive-Compatible ...](https://www.youtube.com/watch?v=SSc6osVJvDY) — Microsoft Research · 1:12:22

### Dutch auction theory *(prerequisite)*
The Dutch auction is the unique auction format identified in the paper as achieving strong and weak shill-proofness under certain conditions. Understanding the mechanics and theory behind Dutch auctions is essential to fully grasp the paper's main results and uniqueness claims.

*How the paper uses it:* The Dutch auction is central to the paper's characterization of shill-proof auctions.

▶ [W10_L1: Auctions: introduction english dutch sealed bid ...](https://www.youtube.com/watch?v=f3zOtu4dPOs) — IIT Madras - B.S. Degree Programme · 16:14

### Authors' talk on shill-proof auctions *(the paper's own talk)*
This recorded talk by Tim Roughgarden and co-authors is the most direct and authoritative source for understanding the paper's contributions, methodology, and implications. It provides detailed insights into the definitions of strong and weak shill-proofness, the uniqueness results for the Dutch auction, and the trade-offs in auction design.

*How the paper uses it:* This talk presents the authors' own exposition of their 2025 paper on shill-proof auctions.

▶ [29 May 2025, Tim Roughgarden (a16z crypto and Columbia ...](https://www.youtube.com/watch?v=doBWXzbM3L4) — VSET · 1:16:20
