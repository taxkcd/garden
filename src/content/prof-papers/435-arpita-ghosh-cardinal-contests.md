---
title: "435 · Cardinal Contests — Arpita Ghosh"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-arpita-ghosh"
source_hash: "9b358bb64a3a6ab985eab3f976d1bfc5551be8b6235af27d51071a3a7712e865"
sequence: 435
generator: "outreach-garden: managed"
---

# 435 · Cardinal Contests

## At a glance

- **Professor:** Arpita Ghosh
- **Institution:** Cornell University
- **Paper:** [Cardinal Contests](http://www.arpitaghosh.com/papers/cardinal_contests.pdf)
- **Authors:** Arpita Ghosh, Patrick Hummel
- **Year:** 2015

## Paper overview

This paper studies contests where participants are ranked not only by their relative performance but also by absolute quality scores. It shows that the best way to use these absolute scores to incentivize effort is to set a quality threshold that participants must exceed to win prizes. This threshold is the same for all prize ranks and leads to higher effort compared to traditional rank-only contests, especially in smaller contests or when more prizes are awarded.

### Why it matters

**Research problem:** How can a contest designer optimally incorporate cardinal (absolute) quality measurements into a rank-order contest to improve incentives for participant effort?

**Why it matters:** Many modern online contests evaluate entries using verifiable numerical scores rather than just relative rankings. Understanding how to best use this cardinal information can improve the design of contests to elicit higher quality contributions, which is important for innovation procurement and crowdsourcing platforms.

**Key contributions:**

- Formulation of cardinal contests that incorporate absolute quality scores into rank-order mechanisms.
- Proof that threshold mechanisms—awarding prizes only if quality exceeds a threshold—are optimal among all mixed cardinal-ordinal mechanisms.
- Proof that the optimal threshold is the same for all prize ranks under mild assumptions on noise distribution.
- Comparative statics showing how the number of participants and prize structure affect the optimal threshold and equilibrium effort.
- Simulation results quantifying the improvement in effort from using cardinal information under various contest parameters.

## About the professor

**Arpita Ghosh** — Associate Professor of Information Science, School of Computing and Information Science, Cornell University.

Research interests: using mathematical analysis to inform the design of online systems; analysis and design of online user contribution economies

### Research links

- [Faculty/profile page](http://www.arpitaghosh.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Game Theory and Mechanism Design
**The paper assumes:** game theory, mechanism design, equilibrium analysis, incentive compatibility
**Already in this field?** Skip this entirely if you already understand basic game theory concepts and the fundamentals of mechanism design including equilibrium and incentive compatibility.

To understand the theoretical foundations and mechanism design principles underlying the 'Cardinal Contests' paper, a solid grasp of game theory and mechanism design is essential. The rigorous course option provides a comprehensive university-level introduction to these topics, suitable for deep study and formal understanding. The fast track offers a concise, well-structured explainer series that covers the core concepts quickly and clearly, ideal for gaining intuition and practical insight without committing to a full-length course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Algorithmic Game Theory (Stanford CS364A, Fall 2013)](https://www.youtube.com/playlist?list=PLEGCF-WLh2RJBqmxvZ0_ie-mleCFhi2N4) — Tim Roughgarden Lectures · 20 videos · 25.2h across 20 episodes

**Watch only this:** Lectures 1-4 (Introduction and Mechanism Design Basics, Myerson's Lemma, Algorithmic Mechanism Design), about 5 hours — these cover the core mechanism design theory and foundational results relevant to cardinal contests.

*Why it unblocks this paper:* This Stanford CS364A 'Algorithmic Game Theory' course covers mechanism design basics, equilibrium concepts, and auction theory, all foundational for understanding the optimal contest design and incentive mechanisms analyzed in the paper.

*If you want all of it:* All 20 lectures, about 25.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Advanced Game Theory 11: Mechanism Design](https://www.youtube.com/playlist?list=PLcrc6i6xwaQQWi7prJYkI9SoRzDXEV01X) — selcuk ozyurt · 20 videos · 4.3h across 20 episodes

**Watch only this:** Episodes 1-8 (What is Mechanism Design? through Direct Mechanisms and Revelation Principle), about 1.75 hours — these episodes cover the essential mechanism design framework and incentive concepts needed to grasp the paper's contributions.

*Why it unblocks this paper:* This 'Advanced Game Theory 11: Mechanism Design' series offers concise, focused explanations of mechanism design concepts including incentive compatibility and direct mechanisms, providing a quick yet rigorous overview aligned with the paper's focus.

*If you want all of it:* All 20 episodes, about 4.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Cardinal Contests' paper, start with foundational concepts in game theory equilibrium to grasp the equilibrium assumptions underlying the paper's theoretical results. Next, study mechanism design with ordinal and cardinal information to understand how combining rank and absolute scores affects incentives. Then, explore incentive design in crowdsourcing contests to contextualize the practical relevance of cardinal contests. Finally, focus on the core concept of cardinal contests themselves, prioritizing the authors' own talk if available, to directly engage with their main results and methods.

### Game theory equilibrium concepts *(prerequisite)*
Understanding equilibrium concepts such as pure strategy Nash equilibrium is essential to follow the paper's theoretical results, which assume symmetric pure-strategy equilibria. This section provides formal definitions and intuition behind these equilibrium concepts in strategic games.

*How the paper uses it:* The paper's proofs and equilibrium analysis rely on pure-strategy Nash equilibrium assumptions.

▶ [6. Finding Pure Strategy Nash Equilibrium: Median Voting Theorem (Game Theory Playlist 3)](https://www.youtube.com/watch?v=UYr7iPHRlo4) — selcuk ozyurt · 27:40 · 5 years ago

### Mechanism design with ordinal and cardinal information *(prerequisite)*
This section covers foundational mechanism design theory, focusing on how mechanisms can incorporate both ordinal (rank) and cardinal (absolute) information to influence incentives. It provides the theoretical background necessary to understand the paper's mixed cardinal-ordinal contest mechanisms.

*How the paper uses it:* The paper analyzes mixed cardinal-ordinal mechanisms modifying rank-based prizes using cardinal quality scores.

▶ [Mechanism Design: How to Implement Social Goals - Eric Maskin](https://www.youtube.com/watch?v=FISDfqvWhxU) — Institute for Advanced Study · 1:00:38 · 10 years ago

### Incentive design in crowdsourcing contests *(prerequisite)*
This section situates the paper within the practical domain of crowdsourcing contests, explaining how incentive design is critical for eliciting high-quality contributions in online platforms. It helps understand the motivation and application context of cardinal contests.

*How the paper uses it:* The paper's motivation and application focus on improving incentives in crowdsourcing and online contribution economies.

▶ [Stanford Seminar - Designing Crowdsourcing Techniques Based on Expert Creative Practice](https://www.youtube.com/watch?v=xW2unM9y88s) — Stanford Online · 53:59 · 10 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in game theory and mechanism design, focusing on how contests can be structured to incentivize effort using both ordinal (rank) and cardinal (absolute score) information. Starting with basic game theory equilibrium concepts, it then covers incentive design in crowdsourcing contests, followed by mechanism design that combines ordinal and cardinal information, and finally culminates with the core idea of optimal contest design mechanisms relevant to the paper.

### Game theory equilibrium concepts *(prerequisite)*
Learn the basics of Nash equilibrium and pure strategy equilibria, which explain how rational participants choose strategies in strategic settings. Understanding these equilibrium concepts is essential to grasp the paper's assumptions about participant behavior and effort choices in contests.

*How the paper uses it:* The paper assumes symmetric pure-strategy equilibria to analyze participant effort incentives in contests.

▶ [2. Nash Equilibrium: Formal Definition and Intuition (Game Theory Playlist 3)](https://www.youtube.com/watch?v=2IVsAWD9jiU) — selcuk ozyurt · 8:50 · 5 years ago

### Incentive design in crowdsourcing contests *(prerequisite)*
Explore how contests and crowdsourcing platforms design incentives to motivate high-quality contributions from participants. This context helps understand the practical relevance of the paper's focus on improving incentives using cardinal quality information.

*How the paper uses it:* The paper studies contests common in crowdsourcing platforms where absolute quality scores are available and can be used to improve incentives.

▶ [Archive: The Theory of Crowdsourcing Contests](https://www.youtube.com/watch?v=XWzLzPnkOJw) — UW Video · 50:29 · 12 years ago

### Mechanism design with ordinal and cardinal information *(prerequisite)*
Understand how mechanism design incorporates both rank-based (ordinal) and absolute score-based (cardinal) information to influence participant behavior. This foundational knowledge is key to appreciating the paper's novel approach of combining these two types of information in contest design.

*How the paper uses it:* The paper formulates and analyzes contests that mix ordinal rankings and cardinal quality scores to optimize incentives.

▶ [Mechanism Design: How to Implement Social Goals - Eric Maskin](https://www.youtube.com/watch?v=FISDfqvWhxU) — Institute for Advanced Study · 1:00:38 · 10 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing technical depth and research engagement centered on the 'Cardinal Contests' paper. The beginner project recreates the core threshold prize modification mechanism and visualizes its effect on effort incentives. The intermediate project implements the optimal threshold mechanism and simulates equilibrium effort gains compared to a rank-only baseline, demonstrating quantitative understanding. The advanced project extends the model by exploring joint optimization of prize structure and cardinal thresholds under risk aversion, addressing a key future direction and limitation of the paper.

### Beginner — Simulate and Visualize Threshold Prize Mechanism
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models a contest with a fixed number of participants and prizes, where prizes are awarded only if submissions exceed a quality threshold. You visualize how changing the threshold affects the probability of winning and expected effort under a simplified cost function.

**Why it shows you understood the paper:** This project demonstrates you understand the core idea of threshold prize modification functions (Theorem 3.1) and how they influence participant incentives in cardinal contests.

**Grounded in:** Theorem 3.1: Optimal prize modification functions are step functions with a single threshold.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** No external data needed; simulate participant qualities and noise as described in the paper's model.

**Build it:**

1. Implement a simple model of participant effort and quality with noise perturbations.
2. Define a step-function prize modification that awards prizes only if quality exceeds a threshold.
3. Simulate the contest outcome probabilities and expected effort for varying threshold values.
4. Plot the relationship between threshold level and expected effort or winning probability.
5. Write a README explaining the connection to Theorem 3.1 and threshold mechanisms.

**Ships as:** A Jupyter Notebook with simulation code and plots illustrating how threshold prize mechanisms affect incentives.

**Stretch goal:** Add interactivity with sliders to dynamically adjust threshold and number of prizes.

### Intermediate — Reimplement Optimal Threshold Mechanism and Compare Effort Gains
*Effort: 2 weekends, ~20 hours*

You implement the cardinal contest model from the paper, including the optimal threshold mechanism with identical thresholds across prize ranks (Theorem 3.2). You simulate equilibrium effort levels under varying numbers of participants and prizes, comparing to a rank-only baseline to quantify effort improvements.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's core method and reproduce key comparative statics results, demonstrating comprehension of the equilibrium analysis and incentive improvements from cardinal information.

**Grounded in:** Theorem 3.2: The optimal threshold is the same for all prize ranks if noise density is single-peaked at zero; Simulation results showing effort gains from cardinal information.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, Jupyter Notebook

**Data:** Simulated data generated according to the paper's stochastic effort-to-quality model with noise; no external dataset required.

**Build it:**

1. Implement the contest model with stochastic effort-to-quality mapping and noise distribution.
2. Implement the optimal threshold prize modification mechanism with a single threshold for all ranks.
3. Simulate equilibrium effort for varying numbers of participants and prizes.
4. Implement a rank-only contest baseline for comparison.
5. Plot and analyze the percentage increase in equilibrium effort due to cardinal thresholds.
6. Document the results and relate them to Theorems 3.2, 3.3, 3.4 and simulation findings.

**Ships as:** A well-documented Jupyter Notebook or Python script reproducing key theoretical and simulation results from the paper.

**Stretch goal:** Incorporate risk aversion in the agent utility functions and observe its effect on optimal thresholds and effort.

### Advanced — Joint Optimization of Prize Structure and Cardinal Thresholds under Risk Aversion
*Effort: 3-4 weeks*

You extend the paper's model by allowing the principal to jointly optimize both the rank-based prize structure and the cardinal threshold mechanism, explicitly modeling risk-averse agents. You formulate and solve this joint optimization problem numerically, comparing results to fixed prize structures with threshold modifications.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep engagement with the model and the ability to extend it to more realistic settings involving risk aversion and prize design.

**Grounded in:** Limitation: The model does not address the full optimal contest design problem that jointly optimizes prize structure and cardinal modifications; Future direction: Examining how risk aversion affects the optimal division of prizes under cardinal mechanisms.

**Tech stack:** Python 3.11, numpy, scipy.optimize, matplotlib, Jupyter Notebook

**Data:** Simulated data based on the paper's stochastic effort-to-quality model with noise and risk-averse utility functions; no external dataset required.

**Build it:**

1. Review the paper's model and assumptions about fixed prize structures and threshold mechanisms.
2. Formulate a joint optimization problem over prize allocations and threshold levels under risk-averse agent utilities.
3. Implement numerical optimization routines to solve for optimal prize divisions and thresholds.
4. Simulate equilibrium effort and compare to baseline fixed prize structures with thresholds.
5. Analyze how risk aversion changes optimal prize and threshold configurations.
6. Document methodology, results, and implications for contest design.

**Ships as:** A comprehensive Jupyter Notebook or Python project demonstrating joint optimization results with plots and analysis.

**Stretch goal:** Explore learning optimal thresholds from repeated contest simulations with unknown population parameters.
