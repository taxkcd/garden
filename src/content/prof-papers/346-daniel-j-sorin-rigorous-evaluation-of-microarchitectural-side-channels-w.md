---
title: "346 · Rigorous Evaluation of Microarchitectural Side-Channels with Statistical Model Checking — Daniel J. Sorin"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-j-sorin"
source_hash: "71a7ac99a3c911e6d4506125ad36aa51a9f28ad50cfe7f0d2031a43faedbcdad"
sequence: 346
generator: "outreach-garden: managed"
---

# 346 · Rigorous Evaluation of Microarchitectural Side-Channels with Statistical Model Checking

## At a glance

- **Professor:** Daniel J. Sorin
- **Institution:** Duke University
- **Paper:** [Rigorous Evaluation of Microarchitectural Side-Channels with Statistical Model Checking](https://arxiv.org/pdf/2510.02475)
- **Authors:** Weihang Li, Pete Crowley, Arya Tschand, Yu Wang, Miroslav Pajic, Daniel Sorin
- **Year:** 2025

## Paper overview

This paper introduces Statistical Model Checking (SMC) as a rigorous, statistically sound method to evaluate microarchitectural side-channel attacks and defenses. It addresses the challenge of probabilistic behaviors in processors and attacks without relying on simplified models or assumptions about probability distributions. The authors demonstrate SMC's effectiveness through three case studies involving cache and speculative execution side channels, providing actionable insights and confidence intervals for security evaluations.

### Why it matters

**Research problem:** Evaluating microarchitectural side-channel attacks and defenses quantitatively is difficult due to inherent probabilistic behaviors and the complexity of modern processors. Existing methods rely on abstract or simplified models and assumptions about probability distributions, which may miss critical details and lack statistical rigor.

**Why it matters:** Side-channel attacks exploit subtle hardware behaviors to leak sensitive information, threatening system security. Accurate and rigorous evaluation methods are essential to understand attack success probabilities and defense effectiveness, enabling informed design and deployment decisions.

**Key contributions:**

- Demonstration of SMC's ability to provide statistically rigorous security evaluation without simplified models or assumptions.
- Development of expressive properties in temporal logic to analyze system security.
- Experimental validation through three case studies: Prime+Probe cache attacks, comparison of ScatterCache and Mirage defenses, and speculative execution side-channel defenses (CleanupSpec and unXpec).
- Provision of actionable insights such as quantifying noise injection needed to reduce attack success probability with statistical confidence.

## About the professor

**Daniel J. Sorin** — Professor, Electrical and Computer Engineering, Duke University.

Research interests: Computer architecture, Multicore memory systems, Fault-tolerant computer architecture, Verification-aware computer architecture

### Research links

- [Faculty/profile page](http://people.ee.duke.edu/~sorin)
- [Resolved homepage](https://pratt.duke.edu/news/semiconductor-game-changers-yiran-chen/?utm_source=ece&utm_medium=web&utm_campaign=ece-home-202603)
- [Lab website](https://athena.duke.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on rigorous evaluation of microarchitectural side-channels with Statistical Model Checking (SMC), start by building a strong foundation on microarchitectural side-channel attacks and their speculative execution variants, as these are the attack classes the paper evaluates. Next, gain familiarity with temporal logic for expressing security properties and cache side-channel defenses to appreciate the paper's analysis framework and case studies. Finally, focus on the core concept of Statistical Model Checking itself, culminating with the authors' own talks and related advanced research presentations to grasp their novel approach and experimental validations.

### Microarchitectural side-channel attacks *(prerequisite)*
This section covers the fundamental principles and mechanisms of microarchitectural side-channel attacks, including cache timing and speculative execution attacks. Understanding these attacks is essential to appreciate the security challenges addressed by the paper and the nature of the attacks evaluated using SMC.

*How the paper uses it:* The paper evaluates known microarchitectural side-channel attacks such as Prime+Probe and speculative execution attacks.

▶ [Lecture on Microarchitectural Side-Channel Attacks](https://www.youtube.com/watch?v=B2vGGoT-a4M) — Todd Austin · 1:01:54

### Speculative execution side-channel attacks *(prerequisite)*
Speculative execution attacks like Spectre are a key class of side-channel attacks analyzed in the paper's case studies. This section provides an advanced understanding of how speculative execution can be exploited to leak sensitive information, which is critical for grasping the paper's evaluation of defenses against such attacks.

*How the paper uses it:* The paper includes case studies evaluating speculative execution side-channel defenses such as CleanupSpec and unXpec.

▶ [Spectre Attacks Exploiting Speculative Execution](https://www.youtube.com/watch?v=zOvBHxMjNls) — IEEE Symposium on Security and Privacy · 21:11

### Temporal logic for security properties *(prerequisite)*
Temporal logic is used in the paper to express and analyze security properties rigorously. This section introduces the formal methods and logics that underpin the specification of security properties, enabling a precise and expressive framework for evaluation.

*How the paper uses it:* The authors develop expressive temporal logic properties to analyze system security within the SMC framework.

▶ [Program Repair for Hyperproperties](https://www.youtube.com/watch?v=heYotfAtLZg) — Simons Institute for the Theory of Computing · 31:55

### Cache side-channel defenses *(prerequisite)*
This section covers advanced defenses against cache-based side-channel attacks, including randomized and obfuscation techniques. Understanding these defenses is necessary to appreciate the comparative evaluation of ScatterCache and Mirage in the paper.

*How the paper uses it:* The paper experimentally compares ScatterCache and Mirage defenses using SMC to quantify their security guarantees.

▶ [USENIX Security '21 - MIRAGE: Mitigating Conflict-Based ...](https://www.youtube.com/watch?v=PSNX2EzRmRU) — USENIX · 12:15

### Statistical model checking
Statistical Model Checking (SMC) is the core methodological contribution of the paper, providing a rigorous statistical framework for evaluating side-channel attacks without simplified assumptions. This section introduces the theory and practice of SMC as applied to complex probabilistic systems.

*How the paper uses it:* The paper applies SMC to rigorously evaluate microarchitectural side-channel attacks and defenses with statistical confidence.

▶ [Geir Dullerud: Statistical Model Checking of Stochastic Hybrid ...](https://www.youtube.com/watch?v=ISRzO8OkocU) — leanprover community · 53:50

### Paper authors talk *(the paper's own talk)*
This section features talks by the paper's authors or closely related research presentations, providing direct insights into the paper's contributions, experimental setup, and results. These talks offer the most precise and authoritative understanding of the work.

*How the paper uses it:* Direct source for understanding the paper's contributions and approach from the authors or related research groups.

▶ [Microarchitectural side-channels and the impact on ...](https://www.youtube.com/watch?v=A2fwrUx62RE) — PIRAT Research Team · 47:47

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of microarchitectural side-channel attacks, which are the types of attacks the paper rigorously evaluates. Next, grasp the basics of temporal logic as it is used to express security properties in the paper's analysis. Then, explore cache and speculative execution side-channel defenses to understand the context of the evaluated defenses. Finally, dive into statistical model checking, the core rigorous method introduced by the paper to evaluate these attacks and defenses with statistical confidence.

### Microarchitectural side-channel attacks *(prerequisite)*
Microarchitectural side-channel attacks exploit subtle hardware behaviors like cache timing or speculative execution to leak sensitive information. Understanding these attacks provides the foundational context for why rigorous evaluation methods are needed.

*How the paper uses it:* The paper evaluates known microarchitectural side-channel attacks such as Prime+Probe cache attacks and speculative execution attacks.

▶ [Lecture 55: Microarchitectural attacks: Part I cache Timing ...](https://www.youtube.com/watch?v=k1-eZabDfa4) — NPTEL IIT Kharagpur · 32:38

### Temporal logic for security properties *(prerequisite)*
Temporal logic is a formal language used to express properties about sequences of events over time, such as security guarantees or attack conditions. It helps precisely specify what security properties the paper analyzes using statistical model checking.

*How the paper uses it:* The paper develops expressive temporal logic properties to rigorously analyze system security under side-channel attacks.

▶ [Verifying Safety and Liveness Properties of a Kernelized Web ...](https://www.youtube.com/watch?v=hSt3GdCXWeg) — Microsoft Research · 56:35

### Cache side-channel defenses *(prerequisite)*
Cache side-channel defenses aim to prevent attackers from inferring sensitive data by manipulating or randomizing cache behavior. Understanding these defenses provides context for the paper’s case studies comparing ScatterCache and Mirage.

*How the paper uses it:* The paper experimentally compares cache defenses like ScatterCache and Mirage using statistical model checking.

▶ [USENIX Security '21 - MIRAGE: Mitigating Conflict-Based ...](https://www.youtube.com/watch?v=PSNX2EzRmRU) — USENIX · 12:15

### Speculative execution side-channel attacks *(prerequisite)*
Speculative execution attacks exploit the CPU’s speculative execution to leak information via side channels. These attacks are a key focus of the paper’s evaluation of defenses like CleanupSpec and unXpec.

*How the paper uses it:* The paper evaluates speculative execution side-channel defenses using statistical model checking to quantify security-performance trade-offs.

▶ [#44 Spectre Variant | Part 1 | Information Security 5 Secure ...](https://www.youtube.com/watch?v=WzraTKpkbJQ) — NPTEL-NOC IITM · 14:47

### Statistical model checking
Statistical model checking is a rigorous method that uses repeated experiments and statistical inference to verify properties of complex probabilistic systems without simplified models. It provides confidence intervals on security properties, making it practical for evaluating real hardware and detailed simulators.

*How the paper uses it:* The paper introduces statistical model checking as a novel, statistically sound method to rigorously evaluate microarchitectural side-channel attacks and defenses.

▶ [Geir Dullerud: Statistical Model Checking of Stochastic Hybrid ...](https://www.youtube.com/watch?v=ISRzO8OkocU) — leanprover community · 53:50

## Already in your library

- [Introduction to LTL. Part 1: Basic Intuition](https://www.youtube.com/watch?v=a9fo3dUly8A) — also for: Formalizing MLTL Formula Progression in Isabelle/HOL (Katherine Kosaian)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Statistical Model Checking (SMC) applied to microarchitectural side-channel evaluation as presented in the paper. The beginner project reproduces a simplified SMC experiment on cache side channels using simulation data you generate yourself. The intermediate project implements the core SMC method from the paper to evaluate a Prime+Probe cache attack scenario with noise injection, comparing attack success probabilities. The advanced project extends the paper's approach by exploring SMC evaluation of adaptive attacker strategies, addressing a stated limitation and opening a path for research discussion.

### Beginner — Simulate and Statistically Evaluate a Simple Cache Side-Channel Attack
*Effort: a weekend, ~8 hours*

You build a small Python simulation of a cache side-channel scenario inspired by the paper's Prime+Probe case study. You generate synthetic probabilistic data representing attack success under varying noise levels, then apply basic statistical model checking to estimate confidence intervals on attack success probability.

**Why it shows you understood the paper:** This project shows you grasp the core idea of using repeated experiments and statistical inference to rigorously quantify side-channel attack success probabilities without simplified assumptions.

**Grounded in:** SMC quantifies the relationship between noise levels and attack success probability in Prime+Probe attacks, providing confidence intervals that guide noise injection strategies.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic probabilistic data generated by your simulation to mimic noise injection effects on cache side-channel attack success.

**Build it:**

1. Implement a simple probabilistic model of a Prime+Probe cache attack with adjustable noise level in Python.
2. Run multiple simulation trials at different noise levels to collect attack success/failure outcomes.
3. Apply statistical model checking by computing confidence intervals on attack success probability at each noise level.
4. Visualize the relationship between noise level and attack success probability with confidence intervals.
5. Write a README explaining the simulation assumptions, SMC method, and interpretation of results.

**Ships as:** A Jupyter notebook and Python scripts that simulate cache side-channel attacks with noise, apply SMC to estimate confidence intervals, and visualize results.

**Stretch goal:** Add temporal logic property checks to the simulation traces to mimic the paper's use of expressive temporal logic properties.

### Intermediate — Reimplement Statistical Model Checking for Prime+Probe Cache Attack Evaluation
*Effort: 2 weekends, ~20 hours*

You implement the core Statistical Model Checking method described in the paper to evaluate a Prime+Probe cache side-channel attack under noise injection. You simulate or synthesize attack traces with probabilistic noise, then statistically infer attack success probabilities and confidence intervals. You compare your results against a simple baseline that does not use SMC (e.g., naive averaging).

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the paper's main method, applying rigorous statistical inference to quantify side-channel security properties and validate defense effectiveness.

**Grounded in:** Demonstration of SMC's ability to provide statistically rigorous security evaluation without simplified models or assumptions; SMC quantifies the noise needed to reduce attack success probability with confidence.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic or simulated traces of Prime+Probe cache attacks with injected noise, generated by your own code since no authors' artifacts are available.

**Build it:**

1. Design and implement a simulator or data generator for Prime+Probe cache attack traces with configurable noise injection.
2. Implement Statistical Model Checking to estimate attack success probability and compute confidence intervals from repeated samples.
3. Implement a baseline method that estimates attack success probability by simple averaging without confidence bounds.
4. Run experiments comparing SMC and baseline results across noise levels.
5. Visualize and document the results, highlighting the advantages of SMC.
6. Write a detailed README explaining the methodology, implementation, and findings.

**Ships as:** A Python project with code to generate attack traces, perform SMC evaluation, compare to baseline, and visualize results with confidence intervals.

**Stretch goal:** Extend the evaluation to compare two simple cache defenses (e.g., naive noise injection vs. Mirage-like defense) using SMC.

### Advanced — Extend Statistical Model Checking to Adaptive Side-Channel Attacker Strategies
*Effort: 3+ weeks*

You develop an extension of the paper's SMC methodology to evaluate side-channel attacks where the attacker adapts their strategy based on observed outcomes, addressing a key limitation noted by the authors. You design a framework to model adaptive attacker behavior, simulate adaptive attack traces, and apply SMC to quantify security properties under adaptive scenarios.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of SMC's assumptions and the challenges of unknown or evolving attacks. It positions you to engage in research discussions with the professor.

**Grounded in:** SMC assumes fixed attacker strategies and known attacks; exploration of SMC for adaptive or unknown attack scenarios is a future direction.

**Tech stack:** Python 3.11, NumPy, SciPy, Matplotlib, Jupyter Notebook

**Data:** Synthetic adaptive attack traces generated by your extended simulator modeling attacker strategy changes based on prior outcomes.

**Build it:**

1. Review the paper's SMC methodology and its assumption of fixed attacker strategies.
2. Design a model for adaptive attacker strategies that update based on previous attack results.
3. Implement a simulator that generates adaptive attack traces with probabilistic noise and strategy updates.
4. Extend the SMC framework to handle adaptive traces and compute confidence intervals on attack success.
5. Run experiments comparing fixed vs. adaptive attacker scenarios and analyze the impact on security evaluation.
6. Prepare a comprehensive report and README documenting your extension, methodology, and insights.

**Ships as:** A Python-based framework and report demonstrating SMC evaluation of adaptive side-channel attacks, with code, visualizations, and analysis.

**Stretch goal:** Apply the adaptive SMC framework to real hardware traces if accessible, or propose variability injection improvements to better mimic real noise.
