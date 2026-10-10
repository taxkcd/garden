---
title: "625 · Incentive-compatible Collusion-resistance via Posted Prices — Matheus V. X. Ferreira"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-matheus-v-x-ferreira"
source_hash: "822697154939409bd6c9c00eaa689c767676bcd9570100e207cad57f53dbd185"
sequence: 625
generator: "outreach-garden: managed"
---

# 625 · Incentive-compatible Collusion-resistance via Posted Prices

## At a glance

- **Professor:** Matheus V. X. Ferreira
- **Institution:** University of Virginia
- **Paper:** [Incentive-compatible Collusion-resistance via Posted Prices](https://arxiv.org/abs/2412.20853)
- **Authors:** Matheus V.X. Ferreira, Yotam Gafni, Max Resnick
- **Year:** 2024

## Paper overview

This paper studies how to design transaction fee mechanisms (TFMs) that resist collusion among participants, including miners and bidders, by ensuring that any collusion is both incentive-compatible and individually rational. The authors fully characterize such collusion-resistant mechanisms in the single-bidder case, showing they correspond to posted-price mechanisms with prices not too high relative to a certain threshold. They analyze the welfare and revenue implications of these mechanisms under different bidder value distributions.

### Why it matters

**Research problem:** Existing transaction fee mechanisms are vulnerable to collusion between bidders and miners, which can undermine incentive compatibility and revenue guarantees. Prior notions of collusion-resistance assume full trust among colluders, which is unrealistic. The problem is to refine collusion-resistance definitions to require collusions themselves to be incentive-compatible and individually rational, and to characterize mechanisms that satisfy these refined notions.

**Why it matters:** Transaction fee mechanisms are critical in blockchain systems for allocating block space and determining fees. Collusion can distort these markets, reduce miner revenue, and harm fairness and efficiency. Designing mechanisms that are robust to realistic collusion scenarios is essential for secure, transparent, and auditable blockchain platforms.

**Key contributions:**

- Refinement of collusion-resistance notions to require incentive compatibility and individual rationality of the collusion itself.
- Full characterization of collusion-resistant and incentive-compatible transaction fee mechanisms in the single-bidder case as posted-price mechanisms with bounded prices.
- Extension of Myerson's auction theory to incorporate constant burn rates in the analysis of virtual values and reserve prices.
- Analysis of welfare and revenue trade-offs for regular and non-regular bidder value distributions.
- Demonstration that collusion-free prices guarantee at least an e-approximation of optimal welfare for monotone-hazard-rate distributions.

## About the professor

**Matheus V. X. Ferreira** — Assistant Professor, Computer Science, University of Virginia.

Research interests: Algorithmic Economics, Multi-agent AI, Security, Cryptography

### Research links

- [Faculty/profile page](https://engineering.virginia.edu/faculty/matheus-venturyne-xavier-ferreira)
- [Identity evidence](https://matheusvxf.github.io)
- [Professor website](https://sites.google.com/view/matheusvxf/bio)
- [Resolved homepage](https://matheusvxf.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Auction Theory and Mechanism Design
**The paper assumes:** auction theory, mechanism design, incentive compatibility, Myerson's auction theory
**Already in this field?** Skip this entirely if you already have a solid understanding of auction theory and mechanism design, including Myerson's optimal auction framework.

This background covers auction theory and mechanism design fundamentals essential to understanding the paper's characterization of collusion-resistant posted-price mechanisms and their incentive compatibility properties. The rigorous course option provides a deep, structured university-level treatment of mechanism design concepts, while the fast track offers a concise, intuition-driven introduction to auction market theory suitable for quickly grasping key ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2022 - Introduction to Game Theory and Mechanism Design](https://www.youtube.com/playlist?list=PLOzRYVm0a65dbzLZE-Y4Uh2QhVA7TBLXN) — NPTEL IIT Bombay · 63 videos · 19.5h across the first 60 episodes

**Watch only this:** Modules 1 and 2: 'Introduction: Game Theory' and 'Introduction: Mechanism Design' (episodes 2 and 3), about 40 minutes total — these provide core auction theory and mechanism design concepts relevant to the paper.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Game Theory and Mechanism Design covers foundational concepts such as dominant strategies, Nash equilibria, and mechanism design principles that underpin the paper's theoretical framework on incentive-compatible and collusion-resistant mechanisms.

*If you want all of it:* First 60 episodes, about 19.5 hours — full course covers extensive game theory and mechanism design topics.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Technical Analysis + Orderflow : ICT and Auction Market Theory (AMT)](https://www.youtube.com/playlist?list=PL2majgm9BDchT08TitXqGCwurbuAv5GEd) — Marc Wick · 20 videos · 5.2h across 20 episodes

**Watch only this:** First 5 episodes: 'Similarities Between Auction Market Theory and ICT', 'Failed Auctions Explained', 'Fair Value Gap + Volume Profile', 'How I Trade Failed Auctions', and 'Advanced Order Flow #5', about 1.25 hours total — these cover auction basics and market behavior relevant to understanding posted-price auctions.

*Why it unblocks this paper:* This short-form series on Auction Market Theory offers clear, practical explanations of auction concepts and market dynamics, providing intuition behind posted-price mechanisms and collusion resistance in a compact format aligned with the paper's themes.

*If you want all of it:* All 20 episodes, about 5.2 hours — full series covers detailed auction market theory and trading strategies.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Incentive-compatible Collusion-resistance via Posted Prices," start by building a foundation in mechanism design and auction theory, focusing on incentive compatibility and Myerson reserve prices. Then, explore the concept of collusion resistance in mechanism design to grasp the paper's refinement of collusion notions. Finally, study the paper's core contribution on posted-price mechanisms and incentive-compatible collusion resistance through the authors' own talk, which directly addresses their novel results in blockchain transaction fee mechanisms.

### Mechanism design incentive compatibility *(prerequisite)*
This section covers the fundamental theory of mechanism design, focusing on incentive compatibility, which ensures truthful behavior by participants. Understanding these concepts is essential to grasp how the paper designs mechanisms that are robust to strategic manipulation and collusion.

*How the paper uses it:* The paper refines incentive compatibility notions to include incentive-compatible and individually rational collusions.

▶ [Lecture 8: Mechanism Design and Incentives vs. Protocols and Notions of Trust](https://www.youtube.com/watch?v=JRyv9G5ef-M) — MIT OpenCourseWare · 1:10:56 · 2mo ago

### Auction theory Myerson reserve price *(prerequisite)*
Myerson's auction theory and reserve price characterization are central to the paper's extension incorporating fee burning and collusion constraints. This lecture provides the necessary background on optimal auctions and virtual value functions.

*How the paper uses it:* The paper extends Myerson's auction theory to incorporate constant burn rates in virtual value functions and reserve prices.

▶ [Eric Maskin | Auction Theory](https://www.youtube.com/watch?v=K5orhbb2LqM) — Harvard CMSA · 1:31:54 · 4y ago

### Collusion resistance in mechanism design *(prerequisite)*
Understanding collusion resistance is critical to appreciate the paper's refinement of collusion notions requiring incentive compatibility and individual rationality. This concept underpins the paper's characterization of collusion-resistant transaction fee mechanisms.

*How the paper uses it:* The paper refines collusion-resistance notions and characterizes mechanisms that satisfy these refined constraints.

▶ [Yotam Gafni, Infrastructure Incentive Compatible Collusion Resistance via Posted](https://www.youtube.com/watch?v=Of9elAcfKMc) — The Latest in Defi Research · 24:17 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on incentive-compatible, collusion-resistant transaction fee mechanisms in blockchains. It starts with the basics of mechanism design and incentive compatibility to build intuition about truthful behavior in economic settings. Then it covers auction theory focusing on Myerson reserve prices, followed by collusion resistance in mechanism design, and concludes with posted-price mechanisms, which are central to the paper's characterization of collusion-resistant mechanisms.

### Mechanism design incentive compatibility *(prerequisite)*
Learn what mechanism design is and why incentive compatibility matters: it ensures participants truthfully reveal their private information because it aligns their incentives with honest behavior. This foundational concept helps understand how mechanisms can be designed to prevent manipulation.

*How the paper uses it:* The paper relies on incentive compatibility to ensure truthful bidding and to refine collusion-resistance notions.

▶ [Incentive compatibility & participation constraints (Separating Eqbm & Mechanism Design)](https://www.youtube.com/watch?v=gpD19ZPoZhk) — Ashley Hodgson · 8:07 · 9y ago

### Auction theory Myerson reserve price *(prerequisite)*
Understand Myerson's auction theory, especially the concept of reserve prices that maximize seller revenue by setting a minimum acceptable bid. This theory underpins the paper's extension to include fee burning and collusion constraints in posted-price mechanisms.

*How the paper uses it:* The paper extends Myerson's reserve price concept to incorporate constant burn rates and characterize collusion-resistant prices.

▶ [Eric Maskin | Auction Theory](https://www.youtube.com/watch?v=K5orhbb2LqM) — Harvard CMSA · 1:31:54 · 4y ago

### Collusion resistance in mechanism design *(prerequisite)*
Explore how mechanism design can be made robust against collusion, where participants coordinate to manipulate outcomes. This concept is central to the paper's refinement of collusion-resistance to require incentive-compatible and individually rational collusions.

*How the paper uses it:* The paper refines collusion-resistance notions and characterizes mechanisms that are resistant to incentive-compatible collusions.

▶ [Yotam Gafni, Infrastructure Incentive Compatible Collusion Resistance via Posted](https://www.youtube.com/watch?v=Of9elAcfKMc) — The Latest in Defi Research · 24:17 · 2y ago

### Posted price mechanisms
Learn about posted-price mechanisms where a seller offers a take-it-or-leave-it price to buyers, which is simpler and more practical than auctions. The paper shows that collusion-resistant transaction fee mechanisms correspond exactly to posted-price mechanisms with bounded prices.

*How the paper uses it:* The paper fully characterizes collusion-resistant mechanisms as posted-price auctions with prices bounded between the burn rate and adjusted Myerson reserve price.

▶ [Dynamic Posted-Price Mechanisms for the Blockchain Transaction-Fee Market by Matheus V. X. Ferreira](https://www.youtube.com/watch?v=Tv_Rqdq9kw0) — ACM AFT Conference '21 · 20:10 · 4y ago

## Already in your library

- [Emir Kamenica - Persuasion vs. incentives](https://www.youtube.com/watch?v=I3pccR-dumw) — also for: Friend or Foe: Delegating to an AI whose Alignment is Unknown (Annie Liang)
- [Converting any Algorithm into an Incentive-Compatible ...](https://www.youtube.com/watch?v=SSc6osVJvDY) — also for: Shill-Proof Auctions (Tim Roughgarden)
- [(AGT11E8) [Game Theory] Direct Mechanisms, Dominant ...](https://www.youtube.com/watch?v=E4O9TXaYW60) — also for: Characterizing Off-Chain Influence Proof Transaction Fee Mechanisms (Clayton Thomas)
- [Lecture 22: Auctions, Part 1](https://www.youtube.com/watch?v=-XGDKoWi0Zg) — also for: Efficiently Restructuring Sovereign Debt via Arctic Auctions with Convex Costs (Vijay V. Vazirani)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's characterization of collusion-resistant transaction fee mechanisms as posted-price auctions. The beginner project reproduces the core posted-price mechanism concept and its incentive constraints in simulation. The intermediate project implements the mechanism for a single-bidder setting, evaluates welfare and revenue trade-offs under different bidder value distributions, and compares to a simple baseline. The advanced project extends the analysis toward multi-bidder settings, addressing one of the paper's stated limitations and exploring collusion dynamics beyond the single-bidder case.

### Beginner — Simulate Collusion-Resistant Posted-Price Mechanism
*Effort: a weekend, ~8 hours*

You build a simple Python simulation of a posted-price transaction fee mechanism for a single bidder with a fixed burn rate. The simulation checks incentive compatibility and individual rationality constraints for collusion by verifying bidder acceptance and miner incentives at different posted prices.

**Why it shows you understood the paper:** This project shows you understand the core characterization of collusion-resistant mechanisms as posted-price auctions with prices bounded by burn and reserve price, and the refined IC+IR collusion definitions.

**Grounded in:** The project demonstrates the paper's key result that DSIC+MMIC+(IC+IR)-OCA mechanisms correspond exactly to posted-price auctions with prices between the burn rate and the adjusted Myerson reserve price.

**Tech stack:** Python 3.11

**Data:** Synthetic bidder value samples generated from simple distributions (e.g., uniform, exponential) to simulate bidder valuations.

**Build it:**

1. Implement a function to compute the Myerson virtual value and reserve price adjusted for a constant burn rate.
2. Simulate bidder valuations sampled from a chosen distribution (e.g., uniform).
3. Implement posted-price mechanism logic that accepts bids above the posted price and burns a fixed fee.
4. Check incentive compatibility and individual rationality constraints for the bidder and miner under collusion scenarios.
5. Visualize or print results showing the range of posted prices that satisfy collusion-resistance.

**Ships as:** A Python script and README showing simulation results verifying the posted-price interval for collusion-resistance and illustrating IC+IR collusion constraints.

**Stretch goal:** Add support for non-regular distributions and observe discontinuities in collusion-free price sets.

### Intermediate — Implement and Evaluate Single-Bidder Collusion-Resistant Mechanism
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's core posted-price transaction fee mechanism for a single bidder with constant burn, including computation of the adjusted Myerson reserve price. You evaluate welfare and miner revenue under different posted prices and bidder value distributions, comparing collusion-resistant posted prices to a naive fixed-price baseline.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main mechanism design and analyze welfare/revenue trade-offs, reproducing key metrics and understanding the impact of collusion-resistance constraints.

**Grounded in:** It reproduces the paper's characterization of collusion-resistant posted prices as a contiguous interval bounded by the adjusted Myerson reserve price and burn, and the welfare and revenue trade-offs for regular distributions.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic bidder value samples drawn from known regular distributions (e.g., exponential, uniform) to simulate bidder valuations.

**Build it:**

1. Implement Myerson's virtual value function and compute the reserve price adjusted for constant burn.
2. Generate bidder valuation samples from multiple regular distributions.
3. Implement the posted-price mechanism with prices varying within and outside the collusion-resistant interval.
4. Compute and plot welfare and miner revenue metrics for each posted price.
5. Compare results to a naive fixed-price baseline ignoring collusion constraints.
6. Document findings and relate them to the paper's welfare approximation guarantees.

**Ships as:** A Python project with scripts and plots demonstrating welfare and revenue trade-offs for collusion-resistant posted prices versus baseline, with a detailed README.

**Stretch goal:** Incorporate a simple non-regular distribution to observe discontinuities in collusion-free price sets.

### Advanced — Extend Collusion-Resistance Analysis to Multi-Bidder Settings
*Effort: few weeks, ~60+ hours*

You extend the single-bidder posted-price mechanism to a simplified multi-bidder setting, designing and simulating posted-price mechanisms that attempt to maintain incentive-compatible and individually rational collusion-resistance among multiple bidders and a miner. You analyze how collusion dynamics change and evaluate welfare and revenue under these extended settings.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by moving beyond the single-bidder case, demonstrating deep engagement with the paper's theory and its practical challenges in realistic blockchain markets.

**Grounded in:** Addresses the paper's stated limitation and future direction: extending characterization to multi-bidder and multi-item settings where collusion dynamics are more complex.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic bidder valuations for multiple bidders generated from known distributions; no real dataset is available.

**Build it:**

1. Review the single-bidder posted-price mechanism and collusion-resistance definitions from the paper.
2. Design a multi-bidder posted-price mechanism inspired by the single-bidder characterization, specifying posted prices per bidder or uniform prices.
3. Implement simulation of multiple bidders with sampled valuations and a miner, modeling possible collusion scenarios.
4. Check incentive compatibility and individual rationality constraints for collusions involving multiple bidders and the miner.
5. Evaluate welfare and miner revenue metrics under different posted-price settings and collusion assumptions.
6. Document challenges, limitations, and insights compared to the single-bidder case.

**Ships as:** A Jupyter notebook or Python project demonstrating the multi-bidder collusion-resistance mechanism design, simulation results, and analysis with a comprehensive README.

**Stretch goal:** Explore stronger individual rationality notions (ex-interim) in the multi-bidder setting and their impact on collusion-resistance.
