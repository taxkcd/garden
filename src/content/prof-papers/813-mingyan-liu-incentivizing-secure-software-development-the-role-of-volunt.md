---
title: "813 · Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver — Mingyan Liu"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mingyan-liu"
source_hash: "d1dc42ef98fa15a5bcea84e9a70b146eedfdad092addb8fed4d04d613342f6f7"
sequence: 813
generator: "outreach-garden: managed"
---

# 813 · Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver

## At a glance

- **Professor:** Mingyan Liu
- **Institution:** University of Michigan
- **Paper:** [Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver](https://arxiv.org/pdf/2401.08476)
- **Authors:** Ziyuan Huang, Gergely Biczók, Mingyan Liu
- **Year:** 2024

## Paper overview

This paper studies how voluntary security audits combined with liability waivers can encourage software vendors to invest more in secure software development. It models the vendor's decision-making process as a sequential investment problem under audit, and analyzes how audit design affects vendor participation and effort. The work finds that audits that are accurate but not overly strict best incentivize vendors to invest in security, and that dynamic audit schemes can further improve investment incentives.

### Why it matters

**Research problem:** Software vendors often lack incentives to invest adequately in security due to misaligned economic incentives and limited liability exposure. The paper addresses how voluntary audits tied to liability waivers can realign incentives to promote secure software development.

**Why it matters:** Insecure software products pose significant risks to the digital ecosystem, causing widespread harm to users and infrastructure. Traditional liability frameworks have been ineffective for software, but evolving regulations and audit-based liability waivers offer new mechanisms to improve security incentives.

**Key contributions:**

- Formulation of the vendor's audit participation as a sequential decision problem with repeated audits and imperfect tests.
- Characterization of the vendor's optimal investment strategies, showing two broad types: 'one-and-done' and 'incremental' investments.
- Analysis of how audit accuracy and difficulty affect vendor participation and effort incentives.
- Introduction of dynamic audit schemes that adapt tests based on past failures to further incentivize higher investments.
- Equivalence interpretation of the audit mechanism as a form of liability insurance with premium discrimination.

## About the professor

**Mingyan Liu** — Faculty, Electrical Engineering & Computer Science, University of Michigan.

### Research links

- [Faculty/profile page](https://controls.engin.umich.edu/profile/mingyan-liu)
- [Professor website](https://web.eecs.umich.edu/~mingyan/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Markov decision processes
**The paper assumes:** Markov decision processes, dynamic programming, sequential decision making under uncertainty
**Already in this field?** Skip this entirely if you already understand Markov decision processes and their solution methods such as value iteration or policy iteration.

This background covers Markov decision processes (MDPs), which are essential to understanding the sequential decision-making framework used in the paper's modeling of vendor audit participation and investment decisions. The rigorous course option provides a detailed, university-level introduction to MDPs, including foundational concepts and solution methods. The fast track offers a concise, intuition-focused series that covers the core ideas quickly for readers who want a solid grasp without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS486/686 Lecture 18 - Markov Decision Process Part 1](https://www.youtube.com/playlist?list=PLdBx38JxhMNvMw_C3KbeUOI_hCNPyVcyc) — Alice Gao · 9 videos · 1.3h across 9 episodes

**Watch only this:** Episodes 1-5: 'L18: Introducing Markov Decision Process' through 'L18: Policy of a Markov Decision Process', about 40 minutes total — these cover the fundamental definitions, reward structures, and policy concepts needed to understand the paper's MDP framework.

*Why it unblocks this paper:* This playlist by Alice Gao is a university lecture series that thoroughly introduces Markov decision processes, covering key concepts such as discounted rewards, policies, and optimal strategies, which directly align with the paper's use of MDPs to model vendor decisions.

*If you want all of it:* All 9 episodes, about 1.3 hours total — for a complete understanding including solving optimal policies and example problems.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Markov Decision Process](https://www.youtube.com/playlist?list=PLKQYHgEtgnEAWq86qLOqv7RaLEQN8fIty) — Sangeet Moy Das · 6 videos · 0.4h across 6 episodes

**Watch only this:** Episodes 1-4: 'Markov Decision Processes - Georgia Tech - Machine Learning' through 'Markov Decision Processes Four - Georgia Tech - Machine Learning', about 12 minutes total — covers the essential MDP concepts and problem setup relevant to the paper.

*Why it unblocks this paper:* This short series from Georgia Tech provides concise, clear explanations of MDP basics in about 3 minutes per episode, ideal for quickly grasping the core concepts without deep mathematical detail, suitable for readers pressed for time.

*If you want all of it:* All 6 episodes, about 18 minutes total — for a quick but comprehensive overview including example problems.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver," start by building foundational knowledge on economic incentives in cybersecurity and the role of software security audits. Then, gain a solid grasp of Markov decision processes as they are central to modeling the vendor's sequential investment decisions under audit. Finally, focus on the paper's core concept through the authors' own talk or the closest academic-level presentation on secure software development life cycles and audit mechanisms.

### Economic incentives cybersecurity lecture *(prerequisite)*
This section covers foundational economic principles and incentive structures that influence cybersecurity investments. Understanding how incentives shape security behavior is crucial to grasping the paper's motivation and the rationale behind voluntary audits and liability waivers.

*How the paper uses it:* The paper addresses misaligned economic incentives in software security investment and proposes audit-based mechanisms to realign them.

▶ [#HITB2018AMS Welcome Address: Improving Incentives for Cybersecurity - Michel van Eeten](https://www.youtube.com/watch?v=6doH4xEWF_4) — Hack In The Box Security Conference · 17:23 · 8y ago

### Software security audits lecture *(prerequisite)*
This section introduces the concept and practice of security audits, focusing on their role in assessing and improving software security controls. It provides context for understanding how voluntary audits function as a mechanism to incentivize secure software development.

*How the paper uses it:* Voluntary security audits are a key mechanism studied in the paper to encourage vendor investment in secure software.

▶ [Security Audits (W6)](https://www.youtube.com/watch?v=GvDsUiJLynA) — Marc-Andre Leger · 8:52 · 4mo ago

### Markov decision process security investment *(prerequisite)*
Markov decision processes (MDPs) provide the mathematical framework for modeling sequential decision-making under uncertainty, which is central to the paper's analysis of vendor investment strategies under audit. This section offers an advanced introduction to MDPs suitable for understanding the paper's modeling approach.

*How the paper uses it:* The paper formulates the vendor's audit participation and investment decisions as a discounted-reward Markov decision process.

▶ [Markov Decision Processes 2 - Reinforcement Learning | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=HpaHTfY52RQ) — Stanford Online · 1:14:38 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This section features the authors' own presentation or the closest academic-level talk on secure software development and audit mechanisms. It provides direct insight into the paper's model, results, and contributions from the researchers themselves.

*How the paper uses it:* Direct source for the authors’ presentation of their model and results on incentivizing secure software development through audits and liability waivers.

▶ [The Beginning of Secure Software Development Life Cycle](https://www.youtube.com/watch?v=h_c0YW-Pjak) — EC-Council University · 32:31 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on incentivizing secure software development through voluntary audits and liability waivers, start by grasping the economic incentives behind cybersecurity investments. Then, learn about software security audits as a practical mechanism to enforce security standards. Next, understand liability waivers and their role in risk transfer and incentive alignment. Finally, build intuition on Markov decision processes, the core modeling tool used in the paper to represent vendor investment decisions under audit.

### Economic incentives cybersecurity lecture *(prerequisite)*
This section introduces how economic incentives shape cybersecurity behaviors and investments. It explains why misaligned incentives lead to security failures and how better incentive design can improve security outcomes.

*How the paper uses it:* The paper addresses misaligned economic incentives as a root cause of insufficient security investment by software vendors.

▶ [#HITB2018AMS Welcome Address: Improving Incentives for Cybersecurity - Michel van Eeten](https://www.youtube.com/watch?v=6doH4xEWF_4) — Hack In The Box Security Conference · 17:23 · 8y ago

### Software security audits lecture *(prerequisite)*
This section covers what security audits are, how they are conducted, and their role in assessing and improving software security. It provides practical insight into audit processes and their importance in enforcing security controls.

*How the paper uses it:* Voluntary security audits are the key mechanism studied in the paper to incentivize vendors to invest in secure software development.

▶ [What is a Security Audit? - Damson Cloud](https://www.youtube.com/watch?v=mvAJNMqVie4) — Damson Cloud · 10:11 · 3y ago

### Liability waivers software security seminar *(prerequisite)*
This section explains liability waivers, how they function to transfer risk, and their legal and practical implications. Understanding waivers helps clarify how they can be combined with audits to realign vendor incentives.

*How the paper uses it:* The paper models liability waivers as a risk transfer mechanism that complements audits to encourage vendor participation and investment.

▶ [Release of Liability - How to Write a Liability Waiver](https://www.youtube.com/watch?v=krFSOPhuFxg) — ElectricGuitarKing · 12:29 · 12y ago

### Markov decision process security investment
This section introduces Markov decision processes (MDPs), a mathematical framework for modeling sequential decision-making under uncertainty. It builds intuition on states, actions, rewards, and policies, which are central to the paper's vendor investment model.

*How the paper uses it:* The paper formulates the vendor's audit participation and investment decisions as a discounted-reward MDP to analyze optimal strategies.

▶ [Markov Decision Processes Explained in 12 Minutes](https://www.youtube.com/watch?v=2sVDNV3l-vo) — The Synthetic Mind · 11:59 · 2mo ago

## Already in your library

- [Markov Decision Processes 1 - Value Iteration | Stanford CS221: AI (Autumn 2019)](https://www.youtube.com/watch?v=9g32v7bK3Co) — also for: Exploiting Kubernetes Autoscaling for Economic Denial of Sustainability (David Starobinski)
- [RL Course by David Silver - Lecture 2: Markov Decision Process](https://www.youtube.com/watch?v=lfHX2hHRMVQ) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)
- [Markov Decision Processes Explained | The Foundation of ...](https://www.youtube.com/watch?v=ljrjEh13Vyg) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical ladder to demonstrate understanding of the paper "Incentivizing Secure Software Development: the Role of Voluntary Audit and Liability Waiver." Starting from a simple simulation of vendor audit participation decisions, progressing to implementing and analyzing audit parameter effects on vendor investment strategies, and culminating in extending the model to incorporate strategic auditors, each project ties directly to key contributions and limitations of the paper. The projects leverage your existing software engineering and applied ML skills while gradually introducing new modeling and analysis techniques.

### Beginner — Simulate Vendor Audit Participation Decisions
*Effort: a weekend, ~8 hours*

You build a simple Python simulation of a vendor's sequential decision process to participate in voluntary audits and invest in software security. The simulation models the two main vendor strategies identified in the paper: 'one-and-done' upfront investment and incremental investment over repeated audits. You visualize how different audit test accuracies and thresholds affect vendor participation.

**Why it shows you understood the paper:** This project shows you understand the vendor's sequential investment problem and the impact of audit design on vendor behavior, directly reflecting the paper's Lemma 1 and Section IV results.

**Grounded in:** Demonstrates the vendor's optimal investment strategies and how audit accuracy and difficulty influence participation (Lemma 1, Section IV).

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** No external data needed; you simulate vendor decisions and audit outcomes based on parameters described in the paper.

**Build it:**

1. Implement a Markov decision process model for vendor audit participation with states representing investment levels and audit outcomes.
2. Encode two vendor strategies: 'one-and-done' and incremental investment.
3. Simulate audit tests with configurable accuracy (noise) and threshold parameters.
4. Run simulations varying audit parameters and plot vendor participation rates and investment levels.
5. Write a README explaining the model, parameters, and key observations linking to the paper.

**Ships as:** A Python repo with simulation code, plots showing vendor participation vs audit parameters, and a README connecting results to the paper's findings.

**Stretch goal:** Add a simple risk attitude parameter to model vendor risk preferences and observe its effect on participation.

### Intermediate — Reimplement and Analyze Static and Dynamic Audit Schemes
*Effort: 2 weekends, ~20 hours*

You reimplement the core Markov decision process model of the vendor's audit participation and investment decisions from the paper, including both static and dynamic audit schemes. You analyze how audit accuracy, difficulty thresholds, and dynamic audit sequences affect vendor investment incentives and participation, comparing your results to the paper's key metrics and figures.

**Why it shows you understood the paper:** This project demonstrates a faithful reimplementation of the paper's core method and reproduces its main quantitative insights, showing you grasp the mathematical modeling and incentive analysis central to the paper.

**Grounded in:** Reimplements the core MDP model and analyzes audit design parameters and dynamic audit schemes (Sections III, IV, V).

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, pandas

**Data:** No external dataset; you generate synthetic audit test outcomes and vendor investment states per the paper's model assumptions.

**Build it:**

1. Formally implement the discounted-reward Markov decision process modeling vendor audit participation and investment.
2. Implement static audit schemes with configurable test accuracy and difficulty thresholds.
3. Implement dynamic audit schemes with sequences of tests adapting based on past failures.
4. Simulate vendor strategies and compute expected utilities and participation incentives under different audit parameters.
5. Compare your simulation results to the paper's reported metrics and plots.
6. Document your implementation, analysis, and comparison in a detailed README.

**Ships as:** A Python project with code for static and dynamic audit MDPs, analysis scripts, plots reproducing key paper results, and a comprehensive README.

**Stretch goal:** Add a simple baseline model without audits to quantitatively compare vendor investment incentives.

### Advanced — Extend the Model to Strategic Auditors and Audit Costs
*Effort: 3+ weeks*

You extend the paper's theoretical model by incorporating a strategic, profit-motivated auditor who sets audit difficulty and pricing to maximize their own utility, addressing a key limitation noted by the authors. You also model audit costs and explore their impact on vendor participation and investment incentives. You implement this extended model, simulate vendor and auditor interactions, and analyze equilibrium outcomes.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by modeling strategic auditors and audit costs, demonstrating deep comprehension of the paper's assumptions and the ability to advance its framework.

**Grounded in:** Addresses the limitation of a neutral, non-strategic auditor and explores audit cost structures (Limitations and Future Directions).

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, pandas

**Data:** Synthetic data generated from the extended model simulations; no external datasets required.

**Build it:**

1. Review the original MDP model and identify points to incorporate auditor strategy and audit costs.
2. Model the auditor as a profit-maximizing agent who chooses audit difficulty and pricing parameters.
3. Formulate the joint vendor-auditor interaction as a game or bilevel optimization problem.
4. Implement simulation code to compute equilibrium strategies for vendor investment and auditor audit design.
5. Analyze how audit costs and auditor incentives affect vendor participation and security investment.
6. Write a detailed report and README explaining your model extension, simulation results, and implications.

**Ships as:** A Python codebase modeling strategic auditor-vendor interactions, simulation results illustrating equilibrium behaviors, and a comprehensive report linking back to the paper's limitations and future work.

**Stretch goal:** Incorporate heterogeneous vendor risk preferences and empirically calibrate model parameters from real-world audit data if available.
