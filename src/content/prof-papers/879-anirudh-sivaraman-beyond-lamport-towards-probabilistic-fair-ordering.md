---
title: "879 · Beyond Lamport, Towards Probabilistic Fair Ordering — Anirudh Sivaraman"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-anirudh-sivaraman"
source_hash: "6f50eb2b85ae9df0263a8765c8061d56d5ee7f0e78554cab9d11e38b1e0ea5ac"
sequence: 879
generator: "outreach-garden: managed"
---

# 879 · Beyond Lamport, Towards Probabilistic Fair Ordering

## At a glance

- **Professor:** Anirudh Sivaraman
- **Institution:** New York University
- **Paper:** [Beyond Lamport, Towards Probabilistic Fair Ordering](https://arxiv.org/pdf/2510.13664)
- **Authors:** Muhammad Haseeb, Jinkun Geng, Radhika Mittal, Aurojit Panda, Srinivas Narayana, Anirudh Sivaraman
- **Year:** 2025

## Paper overview

This paper addresses the challenge of fairly ordering events generated concurrently by multiple clients in distributed systems, where perfect clock synchronization is impossible. The authors propose Tommy, a sequencer that uses probabilistic models based on learned clock offset distributions to order events fairly, even when timestamps are noisy. Tommy forms batches of events that cannot be confidently ordered, providing a partial but fair ordering useful for applications like financial exchanges and competitive marketplaces.

### Why it matters

**Research problem:** How to achieve fair ordering of events in distributed systems where clock synchronization errors prevent confident comparison of timestamps, especially for events generated close together in time.

**Why it matters:** Fair ordering is critical for applications such as financial exchanges, ad exchanges, and other competitive marketplaces where the order of event processing affects fairness and outcomes. Existing solutions either assume near-perfect clock synchronization or require specialized infrastructure, limiting their applicability in cloud or multi-data center environments.

**Key contributions:**

- Introduction of a probabilistic likely-happened-before relation (p-arrow) to compare noisy timestamps.
- Design of Tommy, a sequencer that uses learned clock offset distributions to achieve fair partial ordering of events.
- A statistical model to compute the probability that one event precedes another using local clocks and offset distributions.
- Handling of intransitivity in probabilistic ordering and batching of events to form a fair partial order.
- Preliminary evaluation showing Tommy outperforms TrueTime in fairness under higher clock errors and tighter event spacing.

## About the professor

**Anirudh Sivaraman** — Associate Professor, Computer Science, New York University.

Research interests: enabling ubiquitous network programmability; hardware designs; system software like compilers and multi-tenant runtimes; distributed consensus; fair-access stock exchanges

### Research links

- [Faculty/profile page](https://cs.nyu.edu/~anirudh)
- [Professor website](https://anirudhsk.github.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** probability theory and stochastic processes
**The paper assumes:** undergraduate probability theory, stochastic processes, probability distributions and convolution, probabilistic reasoning
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of probability theory and stochastic processes, including distribution convolution and probabilistic ordering concepts.

This background focuses on probability theory and stochastic processes, essential for understanding the probabilistic modeling and ordering methods in the paper. The rigorous course provides a deep, structured foundation in stochastic processes and probability distributions, while the fast track offers a concise, intuition-driven introduction to the core probability concepts relevant to the paper. Choose the rigorous course for thorough mastery or the fast track for a quicker, yet solid, conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [JAN 2020 - Introduction to Stochastic Processes](https://www.youtube.com/playlist?list=PLOzRYVm0a65dFqcSScAAtAjOMGrG7luhz) — NPTEL IIT Bombay · 50 videos · 31.8h across 50 episodes

**Watch only this:** Lectures 1 through 15 (Course Introduction to Gaussian random vector and joint Gaussian distribution), about 9.5 hours — this covers probability axioms, conditional probability, random variables, distributions, and Gaussian vectors critical for understanding the paper's statistical models.

*Why it unblocks this paper:* This NPTEL IIT Bombay course on Introduction to Stochastic Processes covers foundational probability theory, random variables, distributions, and stochastic processes, directly supporting the paper's reliance on probabilistic modeling of clock offset distributions and stochastic ordering.

*If you want all of it:* 31.8 hours across 50 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Essence of probability - 3Blue1Brown](https://www.youtube.com/playlist?list=PLiAulSm0XXgvCGe63mrAkda9UQ9478YQv) — Amr Elsayyad · 10 videos · 2.8h across 10 episodes

**Watch only this:** Episodes 1 through 9 (Bayes theorem to Convolutions), about 2.4 hours — these cover the essential probability concepts and convolution operations needed to grasp the paper's methods.

*Why it unblocks this paper:* The 'Essence of probability' series by Amr Elsayyad provides a visually intuitive and concise explanation of key probability concepts such as Bayes' theorem, distributions, and convolutions, which are central to the paper's probabilistic ordering approach.

*If you want all of it:* 2.8 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Beyond Lamport, Towards Probabilistic Fair Ordering," start by building a solid foundation on distributed clock synchronization and the classical Lamport happened-before relation, as these are fundamental to grasping the challenges of event ordering in distributed systems. Next, study the mathematical underpinnings of probabilistic partial order theory to appreciate the paper's novel probabilistic ordering relation. Finally, focus on the core concept of probabilistic event ordering in distributed systems, which directly relates to the paper's contribution, and conclude with the authors' own talk or closely related advanced research talks to gain direct insight into their approach and design decisions.

### Distributed clock synchronization *(prerequisite)*
Understanding clock synchronization errors and their impact on distributed systems is essential because the paper addresses fair ordering despite imperfect clock synchronization. This section covers the fundamental challenges and mechanisms of synchronizing clocks across distributed nodes.

*How the paper uses it:* The paper builds on the reality that perfect clock synchronization is impossible and uses learned clock offset distributions to probabilistically order events.

▶ [Distributed Systems 3.2: Clock synchronisation](https://www.youtube.com/watch?v=mAyW-4LeXZo) — Martin Kleppmann · 5y ago

### Lamport happened-before relation *(prerequisite)*
The Lamport happened-before relation is the classical baseline for event ordering in distributed systems. Understanding it is crucial to appreciate how the paper extends this concept to probabilistic ordering to handle noisy timestamps and concurrency.

*How the paper uses it:* The paper extends beyond Lamport's happened-before relation by introducing a probabilistic likely-happened-before relation to order events fairly.

▶ [Lamport's Logical Clock Algorithm Explained | Distributed System & Computing Lectures ✅](https://www.youtube.com/watch?v=lzn6AUBHmxw) — Last moment tuitions · 9y ago

### Probabilistic partial order theory *(prerequisite)*
This section introduces the mathematical foundation of partial orders under uncertainty, which is key to reasoning about the probabilistic ordering relations proposed in the paper. It helps understand challenges like intransitivity and batching in probabilistic event ordering.

*How the paper uses it:* The paper's probabilistic ordering relation forms a weighted directed graph representing a partial order that may be intransitive, requiring careful handling.

▶ [Lec-22_POSET | Partial Order Relation | Discrete Mathematics| Computer Engineering](https://www.youtube.com/watch?v=N7vr_g32rMc) — Computer_IT_ICT Engineering Department : LJIET · 4y ago

### Probabilistic event ordering in distributed systems
This core concept covers how probability models can be used to order events fairly in distributed systems despite noisy or uncertain timestamps. It directly relates to the paper's approach of using learned clock offset distributions and probabilistic comparisons.

*How the paper uses it:* The paper proposes Tommy, a sequencer that uses probabilistic models to achieve fair partial ordering of events in distributed systems.

▶ [Read a paper: Time, clocks, and the ordering of events in a distributed system](https://www.youtube.com/watch?v=ummQWQgkWOA) — Vivek Haldar · 7y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct talks by the paper's authors provide the most authoritative and detailed insights into their novel approach, design decisions, and evaluation results. Such talks often clarify subtle points and future research directions.

*How the paper uses it:* Hearing from the authors themselves offers direct understanding of Tommy's design and the probabilistic fair ordering approach.

▶ [The fairness puzzle that sparked probability](https://www.youtube.com/watch?v=_YRfSe-f1FE) — Chalk Talk · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Beyond Lamport, Towards Probabilistic Fair Ordering,' start by learning the basics of distributed clock synchronization and the classical Lamport happened-before relation, which form the foundation for event ordering in distributed systems. Then, build intuition on probabilistic partial order theory to grasp how uncertainty in event timing is modeled. Finally, explore probabilistic event ordering in distributed systems, the core concept behind the paper's novel approach to fair ordering under noisy timestamps.

### Distributed clock synchronization *(prerequisite)*
Distributed systems lack a single global clock, so nodes synchronize their clocks imperfectly, leading to clock offset errors. Understanding how clocks are synchronized and the nature of these errors is essential to appreciate why event ordering is challenging.

*How the paper uses it:* The paper addresses fair ordering despite clock synchronization errors that prevent confident timestamp comparisons.

▶ [Distributed Systems 3.2: Clock synchronisation](https://www.youtube.com/watch?v=mAyW-4LeXZo) — Martin Kleppmann · 5y ago

### Lamport happened-before relation *(prerequisite)*
Lamport's happened-before relation is a classical method to order events in distributed systems based on causal relationships and message passing, but it cannot order concurrent events with noisy timestamps.

*How the paper uses it:* The paper extends beyond Lamport's happened-before relation to handle probabilistic ordering under noisy clocks.

▶ [Lamport logical clock 🔥🔥](https://www.youtube.com/watch?v=taRbDdlAK7s) — Perfect Computer Engineer · 6y ago

### Probabilistic partial order theory *(prerequisite)*
Partial orders allow some events to be incomparable, and probabilistic partial orders extend this by incorporating uncertainty in ordering. This mathematical foundation helps model and reason about uncertain event orderings in the paper.

*How the paper uses it:* The paper uses probabilistic partial order theory to define a likely-happened-before relation that is not always transitive.

▶ [Lec-22_POSET | Partial Order Relation | Discrete Mathematics| Computer Engineering](https://www.youtube.com/watch?v=N7vr_g32rMc) — Computer_IT_ICT Engineering Department : LJIET · 4y ago

### Probabilistic event ordering in distributed systems
This concept covers how distributed systems can use probability models to order events fairly despite noisy and uncertain timestamps, balancing fairness and ordering granularity.

*How the paper uses it:* The paper's core contribution is Tommy, a sequencer that uses probabilistic models of clock offsets to achieve fair partial ordering of events.

▶ [Event Ordering in Distributed Systems | Total, Partial & Causal Ordering](https://www.youtube.com/watch?v=mmKXBlf1ejY) — Saksham Vedi · 4mo ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Tommy sequencer's probabilistic fair ordering approach. The beginner project recreates a core concept visualization from the paper using your existing JavaScript skills. The intermediate project implements the core probabilistic ordering method on synthetic timestamp data, comparing it against a simple baseline to reproduce fairness metrics. The advanced project extends the method to address the paper's limitation on online sequencing by building a prototype online sequencer with safe batch emission, exploring practical heuristics for real-time partial ordering.

### Beginner — Visualizing Probabilistic Likely-Happened-Before Relation
*Effort: a weekend, ~8 hours*

You build an interactive web visualization that demonstrates the probabilistic likely-happened-before (p-arrow) relation between two events with noisy timestamps. Using JavaScript and React, you simulate clock offset distributions (e.g., Gaussian) and show how the probability that one event precedes another is computed and visualized as a confidence score.

**Why it shows you understood the paper:** This project shows you grasp the core probabilistic ordering concept introduced by Tommy, including how clock offset distributions influence event ordering confidence, a key contribution of the paper.

**Grounded in:** Introduction of a probabilistic likely-happened-before relation (p-arrow) to compare noisy timestamps.

**Tech stack:** JavaScript, React, D3.js or similar visualization library

**Data:** Synthetic timestamp pairs with simulated clock offset distributions (Gaussian and non-Gaussian).

**Build it:**

1. Implement a UI to input or randomly generate two event timestamps and their clock offset distributions.
2. Compute the probability that one event happened before the other using convolution of offset distributions as described in the paper.
3. Visualize the distributions and the computed probability with charts and confidence indicators.
4. Allow toggling between Gaussian and other offset distributions to show differences in transitivity and confidence.
5. Document the relation and how the visualization maps to the paper's probabilistic ordering concept.

**Ships as:** A GitHub repo with a React app demonstrating the p-arrow relation computation and visualization, with a README explaining the concept and how it relates to the paper.

**Stretch goal:** Add an interactive graph showing how changing distribution parameters affects ordering confidence and transitivity.

### Intermediate — Probabilistic Partial Ordering Sequencer Prototype
*Effort: 1-3 weekends, ~20 hours*

You implement a simplified version of Tommy's core sequencing algorithm in Python or TypeScript. Using synthetic event timestamp data with noisy clocks and learned offset distributions, you compute pairwise probabilistic likely-happened-before relations, build a weighted directed graph, and extract a partial order by batching events that cannot be confidently ordered. You compare your results against a baseline Lamport happened-before ordering and report Rank Agreement Score (RAS) or a similar fairness metric.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method from the description, including handling probabilistic ordering, batching, and fairness evaluation, showing deep comprehension of Tommy's approach and its advantages over classical methods.

**Grounded in:** Design of Tommy, a sequencer that uses learned clock offset distributions to achieve fair partial ordering of events; Preliminary evaluation showing Tommy outperforms TrueTime in fairness under higher clock errors and tighter event spacing.

**Tech stack:** Python 3.11+, NumPy, SciPy, Matplotlib or Plotly for visualization

**Data:** Synthetic event timestamps generated with configurable clock offset noise and inter-event gaps to simulate concurrent events.

**Build it:**

1. Generate synthetic event data with timestamps from multiple clients, simulating clock offset noise with known distributions.
2. Implement the probabilistic likely-happened-before relation computation using convolution and FFT optimizations as described.
3. Build the weighted directed graph of events based on pairwise probabilities.
4. Implement batching logic to group events that cannot be confidently ordered.
5. Compute Rank Agreement Score (RAS) comparing your partial order to a baseline Lamport happened-before order.
6. Visualize and report results showing how your method improves fairness under varying noise and event spacing.

**Ships as:** A GitHub repo with code to run the sequencing prototype, generate synthetic data, compute partial orders, and produce fairness evaluation plots, with a detailed README linking back to the paper's methods and results.

**Stretch goal:** Add support for arbitrary clock offset distributions beyond Gaussian and evaluate their impact on ordering transitivity and fairness.

### Advanced — Prototype Online Sequencer with Safe Batch Emission
*Effort: a few weeks, ~60 hours*

You develop a prototype online version of Tommy's sequencer that incrementally receives events and emits safe batches for partial ordering in real time. You implement heuristics to handle the intransitivity of probabilistic ordering and ensure no future messages can reorder already emitted batches, addressing one of the paper's key limitations. You evaluate latency and fairness trade-offs on synthetic streaming event data.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing your ability to extend the core method to a practical online setting and explore heuristics for safe batch emission, demonstrating research-level comprehension and initiative.

**Grounded in:** The current design assumes all messages are present before sequencing; online sequencing is discussed but not fully implemented; The sequencer must ensure that once a batch of messages is emitted, no new message should arrive that either belongs in the same batch or demands a lower rank.

**Tech stack:** Python 3.11+, Asyncio or Node.js for event streaming, NumPy, Matplotlib or Plotly

**Data:** Synthetic streaming event data simulating real-time arrival with clock offset noise and varying inter-arrival times.

**Build it:**

1. Design an event ingestion pipeline that simulates online arrival of timestamped events from multiple clients.
2. Implement incremental computation of probabilistic likely-happened-before relations as new events arrive.
3. Develop heuristics to detect safe batches of events that can be emitted without risk of reordering by future events.
4. Handle intransitive edges by applying edge removals or transformations to maintain partial order consistency.
5. Evaluate the trade-off between latency (time to emit batches) and fairness (confidence thresholds) on synthetic data.
6. Document the design decisions, limitations, and potential improvements for real-world deployment.

**Ships as:** A GitHub repo with a prototype online sequencer simulation, code for safe batch emission heuristics, evaluation scripts, and a comprehensive README discussing how this addresses the paper's limitations and future directions.

**Stretch goal:** Incorporate stochastic tie-breaking to extend partial orders to fair total orders as suggested in the paper's future work.
