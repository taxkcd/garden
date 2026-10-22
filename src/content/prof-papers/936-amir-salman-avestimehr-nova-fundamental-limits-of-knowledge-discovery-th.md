---
title: "936 · NOVA: Fundamental Limits of Knowledge Discovery Through AI — Amir Salman Avestimehr"
date: 2026-10-22
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-amir-salman-avestimehr"
source_hash: "d1e259d1dc38a0d30feb2c758988ede9b40ae5329df7ad03b4fcb32ce1f0a16d"
sequence: 936
generator: "outreach-garden: managed"
---

# 936 · NOVA: Fundamental Limits of Knowledge Discovery Through AI

## At a glance

- **Professor:** Amir Salman Avestimehr
- **Institution:** University of Southern California
- **Paper:** [NOVA: Fundamental Limits of Knowledge Discovery Through AI](https://arxiv.org/pdf/2605.15219)
- **Authors:** Salman Avestimehr, Ken Duffy, Muriel Médard
- **Year:** 2026

## Paper overview

This paper introduces NOVA, a theoretical framework modeling how AI systems can autonomously discover new knowledge by iteratively generating, verifying, accumulating, and retraining on knowledge artifacts. It analyzes conditions under which AI can successfully explore knowledge spaces, avoid failure modes like forgetting or contamination, and quantifies the cost and rate of discoveries. The work also highlights the importance of anchoring retraining to prevent lock-in on early discoveries and the critical role of human guidance to overcome exploration and verification bottlenecks.

### Why it matters

**Research problem:** Can AI systems autonomously discover genuinely new knowledge through iterative self-improvement, and what are the fundamental limits, costs, and failure modes of this generate-verify-accumulate-retrain loop?

**Why it matters:** Understanding the theoretical limits and mechanisms of AI-driven knowledge discovery is crucial for advancing trustworthy AI systems capable of autonomous scientific discovery, formal reasoning, and innovation without human intervention. It also informs how to design AI systems that avoid collapse, contamination, and diminishing returns.

**Key contributions:**

- Formalization of AI-driven knowledge discovery as an adaptive generate-verify-accumulate-retrain loop with convergence and failure mode analysis.
- Development of an explicit recursive retraining model showing how anchoring to a persistent base distribution prevents lock-in and preserves exploration.
- Identification of a contamination trap under imperfect verification where false positives can dominate near the discovery frontier.
- Derivation of Zipf-tail-based discovery rate and cumulative cost scaling laws relating exposure distribution to discovery efficiency.
- Formalization of human guidance, generation, and verification as amplification factors that can overcome autonomous exploration barriers.

## About the professor

**Amir Salman Avestimehr** — Dean's Professor, Electrical and Computer Engineering and Computer Science, University of Southern California.

Research interests: Information theory, distributed and federated machine learning, trustworthy AI systems

### Research links

- [Faculty/profile page](https://www.avestimehr.com)
- [Google Scholar](https://scholar.google.com/citations?user=Qhe5ua0AAAAJ&hl=en)
- [GitHub](https://github.com/FedML-AI/FedML)
- [LinkedIn](https://www.linkedin.com/in/salman-avestimehr-46aa662)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** stochastic processes and adaptive sampling
**The paper assumes:** stochastic processes, adaptive sampling theory, occupancy models, species estimation theory, and recursive retraining dynamics
**Already in this field?** Skip this entirely if you already have a solid understanding of stochastic processes and adaptive sampling methods in machine learning or statistics.

To understand the NOVA framework's modeling of AI-driven knowledge discovery as an adaptive generate-verify-accumulate-retrain loop, a solid grasp of stochastic processes and adaptive sampling is essential. The rigorous course option offers a comprehensive university-level introduction to stochastic processes, covering foundational probability concepts and key stochastic process models. The fast track provides a shorter, more accessible introduction to the same topics, suitable for quickly gaining intuition and core knowledge without the full depth of the course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [JAN 2020 - Introduction to Stochastic Processes](https://www.youtube.com/playlist?list=PLOzRYVm0a65dFqcSScAAtAjOMGrG7luhz) — NPTEL IIT Bombay · 50 videos · 31.8h across 50 episodes

**Watch only this:** Watch lectures 1 through 20 (Course Introduction through Properties of Poisson Process Part 2), about 12.7 hours — this covers probability foundations, random variables, and key stochastic process models relevant to adaptive sampling and recursive retraining.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Introduction to Stochastic Processes covers foundational probability theory and stochastic processes in depth, including random variables, Poisson processes, convergence, and properties of stochastic processes, directly supporting the theoretical underpinnings of NOVA's adaptive sampling and retraining models.

*If you want all of it:* 31.8 hours across all 50 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Probability Theory and Stochastic Processes](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBtK-hVSSPlbBzfxXwWON4x) — NPTEL IIT Delhi · 93 videos · 18.7h across the first 60 episodes

**Watch only this:** Watch episodes 1 through 20 (Intro Video through Joint probability mass function), about 6 hours — this subset covers the essential probability theory and random variable concepts needed to grasp NOVA's generate-verify-accumulate-retrain loop.

*Why it unblocks this paper:* This NPTEL IIT Delhi playlist offers a concise introduction to probability theory and stochastic processes with clear explanations of probability spaces, random variables, distributions, and independence, providing a quick but solid foundation for understanding the stochastic modeling in NOVA.

*If you want all of it:* 18.7 hours across the first 60 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the NOVA framework and its theoretical contributions to AI-driven knowledge discovery, start by building foundational knowledge on the mathematical and algorithmic principles underlying the paper. This includes occupancy and species estimation theory for discovery rate scaling, recursive retraining with anchoring to prevent lock-in, verification precision and contamination traps critical for failure mode analysis, and human-AI collaboration models that amplify discovery. Finally, focus on the core concept of the NOVA framework itself through the authors' own seminar talk to connect all these elements into the paper's unified theoretical framework.

### Occupancy and species estimation theory *(prerequisite)*
This concept provides the mathematical foundation for understanding the discovery rate and cumulative cost scaling laws derived in NOVA. The selected seminar and university lectures offer rigorous treatments of occupancy models and species estimation, which are essential for grasping how exposure distributions relate to discovery efficiency in the paper.

*How the paper uses it:* NOVA uses occupancy and species estimation theory to derive Zipf-tail-based discovery rate and cost scaling laws.

▶ [Winter 2021 - Rahel Sollmann - Occupancy modeling and the study of wildlife communities](https://www.youtube.com/watch?v=vgOQenxov5U) — UW School of Aquatic and Fishery Sciences · 1:02:16 · 3y ago

### Recursive retraining with anchoring *(prerequisite)*
Understanding recursion and recursive algorithms is crucial to grasp the explicit recursive retraining model NOVA develops, especially how anchoring to a base distribution prevents lock-in and preserves exploration. The MIT OpenCourseWare lectures provide a rigorous, university-level introduction to recursion and recurrences, which underpin this key technique.

*How the paper uses it:* NOVA's recursive retraining model with anchoring prevents lock-in on early discoveries and maintains persistent exploration.

▶ [Lecture 7: Recurrences](https://www.youtube.com/watch?v=PvuwfciiH2U) — MIT OpenCourseWare · 1:13:24 · 1y ago

### Verification precision and contamination traps *(prerequisite)*
This concept is critical for understanding the failure modes in NOVA related to imperfect verification and contamination traps. While no direct academic talks on verification precision in AI discovery were found, the closest relevant content covers false positives and false negatives in cybersecurity and detection systems, providing a rigorous foundation for the verification cost and quality trade-offs discussed in the paper.

*How the paper uses it:* NOVA identifies contamination traps under imperfect verification where false positives can dominate near the discovery frontier.

▶ [False Positives & False Negatives in Cybersecurity | Detection Errors Explained!](https://www.youtube.com/watch?v=hSlhXaVYMXU) — Intelligence Quest · 12:14 · 1y ago

### Human-AI collaboration in knowledge discovery *(prerequisite)*
Human-AI collaboration models in NOVA formalize how human guidance amplifies AI discovery beyond autonomous limits. The selected university and research institute talks provide substantive, research-level insights into human-AI cooperation and collaboration dynamics, which align with the paper's formalization of human guidance as an amplification factor.

*How the paper uses it:* NOVA formalizes human guidance, generation, and verification as amplification factors overcoming autonomous exploration barriers.

▶ [Human-AI Cooperation in eDiscovery: The First Twenty-ish Years](https://www.youtube.com/watch?v=W_LkgRH-h38) — Institute for Experiential AI · 1:11:21 · 5y ago

### NOVA framework talk *(paper-talk search result; attribution unverified)*
This is the authors' own seminar talk presenting the NOVA framework, directly addressing the paper's core contributions and theoretical results. Watching this talk last allows the viewer to integrate foundational concepts with the paper's novel framework for AI-driven knowledge discovery.

*How the paper uses it:* This seminar by the authors presents the NOVA framework modeling the generate-verify-accumulate-retrain loop and its theoretical limits.

▶ [HAI Seminar: The World Model and Spatial Intelligence Era: Governing AI Beyond Language](https://www.youtube.com/watch?v=Ef6k1d2Uq4Q) — Stanford HAI · 1:11:40 · 12d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand the NOVA framework for AI-driven knowledge discovery. We start with the mathematical foundation of occupancy and species estimation theory to grasp discovery rate scaling, then cover recursion and anchoring to understand retraining dynamics. Next, we explore verification precision and contamination traps to appreciate failure modes, followed by human-AI collaboration to see amplification of discovery. Finally, we conclude with the core adaptive generate-verify-accumulate-retrain loop modeling the iterative AI discovery process.

### Occupancy and species estimation theory *(prerequisite)*
Occupancy and species estimation theory provides statistical tools to estimate how many distinct items (species or knowledge artifacts) exist in a domain based on sampled observations. This helps quantify discovery rates and costs when exploring large knowledge spaces. Understanding this theory builds intuition for how NOVA models discovery efficiency and scaling laws.

*How the paper uses it:* NOVA derives discovery rate and cumulative cost scaling laws using occupancy and species estimation theory.

▶ [Occupancy Modeling Video 3 -- What are Occupancy Models and What are the Applications?](https://www.youtube.com/watch?v=-F-txltI_iA) — Michael Cove · 24:36 · 6y ago

### Recursive retraining with anchoring *(prerequisite)*
Recursive retraining involves iteratively updating AI models with newly discovered knowledge, but without anchoring, this can cause lock-in on early findings. Anchoring means retaining a connection to a base distribution to preserve exploration and prevent suppression of alternatives. This concept explains how NOVA ensures persistent exposure to diverse knowledge artifacts.

*How the paper uses it:* Anchored recursive retraining prevents lock-in on early accepted artifacts and preserves exploration in NOVA.

▶ [Lecture 15: Recursion](https://www.youtube.com/watch?v=Bbyp4VRbmyY) — MIT OpenCourseWare · 45:19 · 2y ago

### Verification precision and contamination traps *(prerequisite)*
Verification precision refers to how accurately an AI system can confirm the validity of discovered knowledge. Imperfect verification can lead to contamination traps where false positives accumulate and dominate, especially near the discovery frontier. Understanding this helps grasp NOVA's analysis of failure modes and the need for improving verification quality as discoveries become rare.

*How the paper uses it:* NOVA identifies a contamination trap under imperfect verification requiring increasingly precise verification near the discovery frontier.

▶ [False Positives & False Negatives in Cybersecurity | Detection Errors Explained!](https://www.youtube.com/watch?v=hSlhXaVYMXU) — Intelligence Quest · 12:14 · 1y ago

### Human-AI collaboration in knowledge discovery *(prerequisite)*
Human-AI collaboration models how human guidance in generation and verification can expand the AI's reachable knowledge space and amplify discovery rates beyond autonomous limits. This concept highlights the importance of combining human insight with AI capabilities to overcome exploration bottlenecks.

*How the paper uses it:* NOVA formalizes human guidance as amplification factors that overcome autonomous exploration barriers.

▶ [Human-AI Cooperation in eDiscovery: The First Twenty-ish Years](https://www.youtube.com/watch?v=W_LkgRH-h38) — Institute for Experiential AI · 1:11:21 · 5y ago

### Adaptive generate verify accumulate retrain loop
This loop is the core iterative process in NOVA where AI systems generate candidate knowledge, verify it, accumulate valid artifacts, and retrain models on this growing knowledge base. Understanding this loop is key to grasping how NOVA models autonomous knowledge discovery and its fundamental limits.

*How the paper uses it:* NOVA formalizes AI-driven knowledge discovery as an adaptive generate-verify-accumulate-retrain loop.

▶ [Self-Evolving Harnesses — When Agents Rewrite Their Own Loop](https://www.youtube.com/watch?v=e-AegdEabN4) — Multi-Agent Academy · 6:38 · 3mo ago

## Already in your library

- [Stanford Seminar - The State of Design Knowledge in Human-AI Interaction](https://www.youtube.com/watch?v=JybLJiJpKS0) — also for: Artificial intelligence in communication impacts language and social relationships (Malte F. Jung)
- [Stanford Seminar - Designing Human-Centered AI Systems for Human-AI Collaboration](https://www.youtube.com/watch?v=JcI7V6Rs7cA) — also for: Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces (Anh Nguyen)
- [Rethinking Research: The Role of Humans in Scientific ...](https://www.youtube.com/watch?v=ZUsQJvEsNjo) — also for: LLM-ODE: Data-driven Discovery of Dynamical Systems with Large Language Models (Jonathan Gryak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the NOVA framework for AI-driven knowledge discovery. The beginner project recreates a core mechanism of the generate-verify-accumulate-retrain loop in a simplified setting. The intermediate project implements the anchored recursive retraining model and explores contamination effects on discovery rates. The advanced project extends NOVA by designing and simulating adaptive verification strategies to control contamination near the discovery frontier, addressing a key limitation noted in the paper.

### Beginner — Simulate the Generate-Verify-Accumulate-Retrain Loop
*Effort: a weekend, ~8 hours*

You build a simple simulation of the NOVA generate-verify-accumulate-retrain loop over a small finite knowledge space. The simulation models iterative generation of knowledge artifacts, verification with configurable false positive/negative rates, accumulation of accepted artifacts, and retraining that influences future generation probabilities.

**Why it shows you understood the paper:** This project demonstrates you understand the core adaptive sampling loop formalized by NOVA and the role of verification and retraining in knowledge discovery dynamics.

**Grounded in:** The paper introduces NOVA modeling the generate, verify, accumulate, retrain loop as an adaptive sampling process over a knowledge space.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic finite knowledge space simulated as a discrete set of knowledge artifacts.

**Build it:**

1. Define a small finite knowledge space as a set of discrete artifacts.
2. Implement a generator that samples artifacts probabilistically based on retraining state.
3. Implement a verification function with configurable false positive and false negative rates.
4. Simulate accumulation of accepted artifacts and update retraining state accordingly.
5. Run the loop iteratively and plot coverage of the knowledge space over time.
6. Analyze effects of verification precision on discovery coverage.

**Ships as:** A Jupyter notebook with simulation code, plots showing discovery coverage over iterations, and a README explaining the NOVA loop and simulation parameters.

**Stretch goal:** Add a simple anchoring mechanism to retraining to observe its effect on exploration persistence.

### Intermediate — Implement Anchored Recursive Retraining and Contamination Effects
*Effort: 2 weekends, ~20 hours*

You implement the explicit recursive retraining model with anchoring described in NOVA, simulating how anchoring prevents lock-in on early discoveries. You also model imperfect verification to demonstrate the contamination trap where false positives accumulate near the discovery frontier, affecting discovery rates.

**Why it shows you understood the paper:** This project shows you can translate NOVA's theoretical retraining and contamination models into code, reproducing key failure modes and mitigation strategies.

**Grounded in:** Theorem 3(ii) shows that anchoring to a persistent base distribution bounds distortion and guarantees continued exposure; Corollary 6 states that tolerable false-positive rate must shrink proportionally to new-valid mass near the discovery frontier.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, Pandas

**Data:** Synthetic finite knowledge space with simulated exposure distributions and verification noise.

**Build it:**

1. Implement the recursive retraining model with anchoring to a fixed base distribution.
2. Simulate knowledge artifact generation probabilities evolving under retraining.
3. Model verification with false positive and false negative rates that vary near the discovery frontier.
4. Simulate contamination accumulation and measure its impact on discovery coverage and rate.
5. Plot discovery cost scaling and contamination thresholds as verification precision varies.
6. Compare anchored retraining against unanchored retraining to illustrate lock-in effects.

**Ships as:** A Jupyter notebook with code, plots illustrating contamination traps and anchoring benefits, and a README linking results to NOVA's theoretical claims.

**Stretch goal:** Incorporate a simple Zipf-tail exposure distribution to reproduce discovery cost scaling laws.

### Advanced — Design Adaptive Verification Strategies to Control Contamination
*Effort: 3+ weeks, ~60 hours*

You extend NOVA by designing and simulating verification strategies that dynamically allocate computational resources to maintain low false-positive rates near the discovery frontier without prohibitive cost. This addresses the paper's limitation on stylized verification cost models and explores practical contamination control.

**Why it shows you understood the paper:** This project tackles a key future direction from NOVA, demonstrating your ability to extend theoretical models into adaptive algorithms that balance verification cost and precision, a critical bottleneck in autonomous knowledge discovery.

**Grounded in:** The paper highlights the contamination trap under imperfect verification and suggests designing verification procedures that adaptively allocate compute to maintain contamination thresholds.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib, SciPy, Pandas

**Data:** Synthetic knowledge space with simulated artifact generation and verification cost models; no real dataset available.

**Build it:**

1. Review NOVA's contamination trap and verification precision trade-offs.
2. Implement a base simulation of the generate-verify-accumulate-retrain loop with contamination effects.
3. Design adaptive verification strategies that allocate more compute to verification near the discovery frontier.
4. Model verification cost as a function of allocated compute and precision achieved.
5. Simulate and compare discovery rates, contamination levels, and cumulative verification costs under static vs adaptive strategies.
6. Analyze trade-offs and produce visualizations linking verification effort to contamination control and discovery efficiency.

**Ships as:** A comprehensive Jupyter notebook or Python package with simulation code, adaptive verification algorithms, detailed plots, and a README discussing implications for practical AI system design.

**Stretch goal:** Integrate a simple human-AI collaboration model to simulate human-guided verification amplification.
