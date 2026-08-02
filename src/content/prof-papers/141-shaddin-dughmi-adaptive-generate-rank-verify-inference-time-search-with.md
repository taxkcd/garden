---
title: "141 · Adaptive Generate-Rank-Verify: Inference-Time Search with Costly Verification — Shaddin Dughmi"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shaddin-dughmi"
source_hash: "693bd2ace1d71c3f551f84177c91614f4c21b2bd8e7cbfba3584774a72473be1"
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
