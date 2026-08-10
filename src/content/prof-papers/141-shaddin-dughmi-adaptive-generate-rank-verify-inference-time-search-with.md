---
title: "141 · Adaptive Generate-Rank-Verify: Inference-Time Search with Costly Verification — Shaddin Dughmi"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shaddin-dughmi"
source_hash: "379aa2319ae6fdb0773ece83799264970d3ca91420e83be2de31e606ca891d7b"
sequence: 141
generator: "outreach-garden: managed"
---

# 141 · Adaptive Generate-Rank-Verify: Inference-Time Search with Costly Verification

## At a glance

- **Professor:** Shaddin Dughmi
- **Institution:** University of Southern California
- **Paper:** [Adaptive Generate-Rank-Verify: Inference-Time Search with Costly Verification](https://arxiv.org/pdf/2605.17609)
- **Authors:** Shaddin Dughmi, Mahdi Haghifam, Yusuf Hakan Kalayci
- **Year:** 2026

## Paper overview

This paper addresses how to efficiently use large language models (LLMs) at inference time when verifying candidate outputs is costly. It proposes an adaptive algorithm, ADAP, that dynamically balances generating candidate solutions, scoring them with a cheap reward model, and verifying them with an expensive verifier to find a correct answer with minimal total cost. The approach is theoretically grounded and empirically validated on mathematical reasoning and competitive programming tasks.

### Why it matters

**Research problem:** How to adaptively allocate inference-time compute resources between generating candidate responses, cheaply scoring them, and expensively verifying correctness, in order to find a verified-correct response with minimal total cost, especially when the relationship between reward scores and verification success is unknown and varies per prompt.

**Why it matters:** Inference-time compute is costly and verification (e.g., exact answer checking or test execution) is expensive. Fixed policies either overspend on easy prompts or underspend on hard ones, leading to inefficiency or failure. Adaptive policies that can operate online without prior knowledge of prompt difficulty or score-verifier relationships are needed for efficient and reliable LLM deployment.

**Key contributions:**

- Formalization of generate-rank-verify inference as a cost-sensitive active search problem with unknown score and success distributions.
- Characterization of the optimal distribution-aware policy as a simple threshold rule on success probability.
- Development of ADAP, an adaptive online algorithm with provable constant-factor cost guarantees under monotonicity assumptions.
- Learning-theoretic lower bounds based on the centered star number showing necessity of structural assumptions.
- Empirical validation demonstrating ADAP's cost-efficiency and reliability on mathematical reasoning and competitive programming tasks.

## About the professor

**Shaddin Dughmi** — Associate Professor, Computer Science, University of Southern California.

Research interests: Questions that stimulate the development of new algorithmic techniques, game theory, mechanism design, multi-agent systems, persuasion and information design, delegation and contract theory, decision making subject to online or stochastic uncertainty, and the theory of machine learning.

### Research links

- [Faculty/profile page](https://viterbi.usc.edu/directory/faculty/Dughmi/Shaddin)
- [Identity evidence](https://viterbi-web.usc.edu/~shaddin)
- [Professor website](https://viterbi-web.usc.edu/~shaddin/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cost-sensitive active search
**The paper assumes:** cost-sensitive active search, adaptive decision making under uncertainty, threshold policies in sequential search
**Already in this field?** Skip this entirely if you already understand cost-sensitive active search frameworks and adaptive sequential decision algorithms under uncertainty.

This background is essential for understanding the paper's core formulation of inference-time generation, scoring, and verification as a cost-sensitive active search problem with unknown score and success distributions. The rigorous course option offers a deep dive into foundational machine learning concepts including learning theory and decision-making under uncertainty, which underpin the paper's theoretical contributions. The fast track provides a concise, intuition-driven introduction to decision analysis techniques relevant to cost-sensitive decision making, enabling a quicker grasp of threshold policies and adaptive algorithms without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-4 and 8-9, about 7 hours — covering introduction, supervised learning basics, decision trees, ensemble methods, and learning theory sections to grasp the problem formalization and threshold policies.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng covers foundational machine learning concepts including learning theory, decision theory, and adaptive control, which are directly relevant to understanding the paper's formalization of cost-sensitive active search and the design of the ADAP algorithm.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Decision Analysis](https://www.youtube.com/playlist?list=PLD3fYc0bAjC-FbzlruUEYIO-El4PjDVCv) — Joshua Emmanuel · 19 videos · 1.8h across 19 episodes

**Watch only this:** Episodes 1-5, about 25 minutes — covering maximax/maximin, expected value, payoff tables, decision trees, and expected value of sample information to quickly understand threshold decision rules and cost tradeoffs.

*Why it unblocks this paper:* Joshua Emmanuel's Decision Analysis playlist offers concise, clear explainers on decision-making frameworks, expected value calculations, and decision trees, which provide practical intuition for cost-sensitive decision policies and adaptive verification strategies in the paper.

*If you want all of it:* 1.8 hours across 19 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Adaptive Generate-Rank-Verify: Inference-Time Search with Costly Verification,' start by building foundational knowledge on cost-sensitive active search algorithms, adaptive inference in large language models, learning-theoretic lower bounds in active learning, and the critical monotonicity assumptions in machine learning algorithms. These prerequisites provide the theoretical and practical context for the paper's contributions. Finally, focus on the core concept of adaptive generate-rank-verify algorithms, including any direct talks by the authors or closely related research presentations, to grasp the paper's novel adaptive algorithm ADAP and its theoretical guarantees.

### Cost-sensitive active search algorithms *(prerequisite)*
This section covers the theoretical framework of active search problems where costs are associated with querying or verifying candidates. Understanding sensitivity analysis and cost trade-offs in decision-making is essential to grasp how the paper formalizes the generate-rank-verify inference problem as a cost-sensitive active search problem.

*How the paper uses it:* The paper formalizes the generate-rank-verify inference as a cost-sensitive active search problem with unknown score and success distributions.

▶ [Distinguished Seminar in Optimization & Data: Tamara ...](https://www.youtube.com/watch?v=GVamIusPAEM) — Paul G. Allen School · 1:06:37

### Adaptive inference in large language models *(prerequisite)*
This section introduces adaptive inference techniques in LLMs, which dynamically allocate computational resources during inference. It provides background on how adaptive strategies can optimize performance and cost, directly relating to the paper's goal of balancing generation, scoring, and verification costs in LLM inference.

*How the paper uses it:* The paper proposes an adaptive algorithm that dynamically balances generating, scoring, and verifying candidate outputs during LLM inference.

▶ [Xifeng Yan - "Adaptive Inference in Transformers"](https://www.youtube.com/watch?v=ss5mzQrNSi4) — IEEE Robotics and Automation Society · 16:29

### Learning-theoretic lower bounds in active learning *(prerequisite)*
This section explores theoretical limits and lower bounds in active learning, highlighting why structural assumptions like monotonicity are necessary. Understanding these bounds is crucial to appreciate the paper's theoretical contributions and the necessity of monotonicity for ADAP's guarantees.

*How the paper uses it:* The paper provides learning-theoretic lower bounds showing that structural assumptions such as monotonicity are necessary for near-optimal cost guarantees.

▶ [S03E06: The one with Maxim Raginsky talking about Bounds ...](https://www.youtube.com/watch?v=KxH9lIiYLA8) — Shannon Channel · 58:15

### Monotonicity assumptions in machine learning algorithms *(prerequisite)*
This section focuses on monotonicity assumptions, which are key to enabling provable guarantees in machine learning algorithms. Understanding monotonicity helps in comprehending the theoretical foundations that allow ADAP to achieve constant-factor cost guarantees.

*How the paper uses it:* The monotonicity assumption that higher reward scores correspond to higher verification success probability is critical for ADAP's theoretical guarantees.

▶ [FOCS 2024 10B Directed Isoperimetry and Monotonicity ...](https://www.youtube.com/watch?v=DOoQqrsW7tQ) — FOCS 2024 · 19:59

### Adaptive Generate-Rank-Verify talk *(the paper's own talk)*
This section includes direct talks by the authors or closely related presentations that explain the adaptive generate-rank-verify approach. Such talks provide the most precise and insightful understanding of the paper's methodology, theoretical results, and empirical validation.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on the paper.

▶ [Adaptive RAG Explained — Route by Question Complexity](https://www.youtube.com/watch?v=qWP0Q6jHJVM) — BSSR Learn · 2 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on Adaptive Generate-Rank-Verify (ADAP) for efficient large language model inference, start by building foundational knowledge on adaptive inference in LLMs and the importance of monotonicity assumptions in machine learning algorithms. Then, learn about cost-sensitive active search algorithms which formalize the problem of balancing generation, scoring, and verification costs. Finally, explore the core concept of adaptive generate-rank-verify algorithms that the paper proposes to efficiently find verified-correct responses.

### Adaptive inference in large language models *(prerequisite)*
Adaptive inference techniques dynamically allocate computational resources during LLM inference, adjusting how much effort is spent based on the input's difficulty or other signals. This helps reduce cost and latency while maintaining accuracy. Understanding this background clarifies why adaptive strategies like ADAP are valuable.

*How the paper uses it:* The paper builds on adaptive inference ideas to design an algorithm that balances generating, ranking, and verifying candidate outputs efficiently.

▶ [Xifeng Yan - "Adaptive Inference in Transformers"](https://www.youtube.com/watch?v=ss5mzQrNSi4) — IEEE Robotics and Automation Society · 16:29

### Monotonicity assumptions in machine learning algorithms *(prerequisite)*
Monotonicity assumptions mean that as some input (like a score) increases, the likelihood of a positive outcome (like correctness) does not decrease. This structural property enables provable guarantees and simplifies decision-making in algorithms. Grasping this concept helps understand why ADAP relies on monotonic reward-to-success relationships.

*How the paper uses it:* ADAP's theoretical guarantees depend critically on the assumption that higher reward scores correspond to higher verification success probabilities.

▶ [Regression Models in Machine Learning: Isotonic Regression ...](https://www.youtube.com/watch?v=r8F8eWzoIS4) — Analytics with Snow · 22:42

### Cost-sensitive active search algorithms *(prerequisite)*
Cost-sensitive active search involves strategically querying or verifying candidates to find a correct one while minimizing total costs, which may include generation and verification expenses. This framework formalizes the trade-offs ADAP manages during inference.

*How the paper uses it:* The paper formalizes generate-rank-verify inference as a cost-sensitive active search problem balancing unknown score and success distributions.

▶ [3. Sensitivity Analysis for LP - Using Allowable Changes in ...](https://www.youtube.com/watch?v=48yZsA6jM8I) — Decision Making 101 · 14:44

### Adaptive Generate-Rank-Verify talk *(the paper's own talk)*
A direct talk by the authors or closely related presentations can provide insights into the motivation, design, and empirical results of ADAP, complementing theoretical understanding with practical perspectives.

*How the paper uses it:* Watching an author-led talk helps grasp the nuances and applications of ADAP in real tasks like math reasoning and coding.

▶ [Adaptive RAG Explained — Route by Question Complexity](https://www.youtube.com/watch?v=qWP0Q6jHJVM) — BSSR Learn · 2 weeks ago

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression for understanding and applying the Adaptive Generate-Rank-Verify (ADAP) algorithm from the paper. The beginner project reproduces a core mechanism of the ADAP approach on a synthetic example to grasp the generate-rank-verify cycle and monotonicity assumption. The intermediate project builds on the authors' released implementation to run ADAP on a subset of coding/math problems, comparing cost efficiency against a fixed baseline. The advanced project extends ADAP by addressing one of the paper's limitations—modeling variable verification costs depending on response complexity—to explore practical improvements beyond the original fixed-cost assumption.

### Beginner — Simulate Adaptive Generate-Rank-Verify on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a simple Python simulation of the generate-rank-verify process with synthetic candidate scores and verification outcomes. The simulation implements the threshold verification rule under the monotonicity assumption and visualizes how adaptive verification reduces total cost compared to naive fixed policies.

**Why it shows you understood the paper:** This project demonstrates you understand the core problem formalization and the threshold-based verification policy central to the paper's theoretical results.

**Grounded in:** Theorem 3.2 characterizes the optimal policy as verifying candidates exactly when h⋆ (r) > τ⋆, where τ⋆ balances verification and generation costs.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic data generated in code simulating candidate reward scores and verification success probabilities with monotone relationship.

**Build it:**

1. Implement a function to generate candidate reward scores sampled from a distribution.
2. Define a monotone success probability function mapping scores to verification success probabilities.
3. Simulate candidate generation and verification under a fixed threshold policy.
4. Compare total cost of adaptive threshold verification versus naive fixed verification policies.
5. Plot cost and success rate metrics to visualize efficiency gains.

**Ships as:** A Python notebook or script with simulation code, plots showing cost vs. policy, and a README explaining the threshold verification concept.

**Stretch goal:** Add noise to the monotone success function to explore robustness of threshold policies under imperfect monotonicity.

### Intermediate — Run and Evaluate ADAP on Coding and Math Benchmarks
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' ADAP implementation from https://github.com/yhkalayci/efficient_query on the provided coding and math problem sets. You reproduce the cost and success rate metrics comparing ADAP against uniform fixed verification policies, and produce a report with visualizations.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the experimental setup, and validate the core empirical claims about ADAP's cost-efficiency and reliability.

**Grounded in:** Section 5.3 reports ADAP's mean cost is 1422 on math vs. 4187 for uniform fixed policy, and 745 on coding vs. 4102 for uniform fixed policy.

**Tech stack:** Python 3.11, PyTorch (if required by authors' code), matplotlib, pandas

**Data:** The math and coding problem sets used in the authors' repository at https://github.com/yhkalayci/efficient_query, which include hidden test suites for verification.

**Build it:**

1. Clone the authors' repository and install dependencies as per their README.
2. Run baseline uniform fixed verification policies on the math and coding benchmarks to collect cost and success metrics.
3. Run ADAP on the same benchmarks and collect the same metrics.
4. Generate comparative plots of mean cost and success rate.
5. Write a report summarizing the results and reflecting on the adaptive policy's advantages.

**Verified links from the paper:**

- <https://github.com/yhkalayci/efficient_query> — released by the paper's authors

**Ships as:** A GitHub repo fork with scripts to run experiments, plots comparing ADAP and fixed policies, and a README documenting findings.

**Stretch goal:** Implement a simple difficulty-adaptive baseline policy and compare it against ADAP to observe differences.

### Advanced — Extend ADAP to Variable Verification Costs Based on Response Complexity
*Effort: 3+ weeks*

You develop an extension of the ADAP algorithm that models verification costs as variable and dependent on candidate response length or complexity, rather than fixed scalars. You modify the cost model and adaptive policy accordingly, then evaluate on the authors' benchmarks to measure cost savings and success rates.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors and demonstrates your ability to innovate on the theoretical framework and practical algorithm to improve real-world applicability.

**Grounded in:** Limitations: Costs are modeled as fixed scalars, ignoring variability with response length or complexity. Future directions include extending the framework to handle variable costs depending on response length or complexity.

**Tech stack:** Python 3.11, PyTorch (if required), matplotlib, pandas

**Data:** The math and coding benchmarks from the authors' repository at https://github.com/yhkalayci/efficient_query, with added metadata on response length or complexity extracted from candidate outputs.

**Build it:**

1. Study the original ADAP implementation and cost model to understand fixed cost assumptions.
2. Design a variable cost model that estimates verification cost as a function of response length or complexity.
3. Modify the ADAP algorithm to incorporate variable verification costs in its adaptive thresholding and sampling.
4. Run experiments comparing the original fixed-cost ADAP and your variable-cost ADAP on the benchmarks.
5. Analyze cost savings and success rates, and document the impact of variable cost modeling.

**Verified links from the paper:**

- <https://github.com/yhkalayci/efficient_query> — released by the paper's authors

**Ships as:** A GitHub repository with your extended ADAP implementation, experimental scripts, comparative plots, and a detailed README discussing methodology and results.

**Stretch goal:** Explore incorporating response content features directly into verification decisions to further reduce cost, as suggested in future directions.
