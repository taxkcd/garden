---
title: "699 · Defending Hash Tables from Subterfuge with Depth Charge — Jared Saia"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jared-saia"
source_hash: "3f141e9c16e9e70102dcf82c43231019f2a6dc4e9acbc5511afda7106c22bfaa"
sequence: 699
generator: "outreach-garden: managed"
---

# 699 · Defending Hash Tables from Subterfuge with Depth Charge

## At a glance

- **Professor:** Jared Saia
- **Institution:** University of New Mexico
- **Paper:** [Defending Hash Tables from Subterfuge with Depth Charge](http://www.cs.unm.edu/~saia/papers/ICDCN24.pdf)
- **Authors:** Trisha Chakraborty, Jared Saia, Maxwell Young
- **Year:** 2024

## Paper overview

This paper addresses the problem of protecting hash tables from algorithmic complexity attacks, where attackers degrade performance by causing many collisions. The authors propose Depth Charge, a defense that uses resource burning (requiring users to expend verifiable resources proportional to the depth of objects in hash chains) to ensure that attackers pay more to degrade performance than the cost incurred by legitimate users. The approach adapts costs based on attack intensity, maintaining efficient query, insertion, and deletion times even under attack.

### Why it matters

**Research problem:** Hash tables are vulnerable to algorithmic complexity attacks where adversaries insert objects that cause many collisions, degrading performance from expected constant time to linear time. Existing defenses like secret or stronger hash functions are insufficient, especially in distributed or compromised environments. The challenge is to design a defense that mitigates these attacks without incurring prohibitive costs for legitimate users.

**Why it matters:** Hash tables are fundamental data structures widely used in computing systems. Algorithmic complexity attacks can severely degrade system performance and availability, leading to denial-of-service and other security issues. Effective defenses are critical for maintaining system reliability and security, especially in distributed and adversarial settings.

**Key contributions:**

- Introduction of Depth Charge, the first RB-based defense against algorithmic complexity attacks on hash tables.
- A formal model capturing adversarial insertions, queries, and deletions with fixed hash table size and hash function.
- Theoretical guarantees bounding RB costs and latency for single and sequences of operations under attack.
- Use of move-to-front heuristic combined with RB charging by depth to achieve quadratic cost advantage over attackers.
- Analysis showing expected constant average query cost under random queries when attacks are limited.

## About the professor

**Jared Saia** — Department of Computer Science, University of New Mexico.

Research interests: distributed algorithms, security, game theory, and spectral methods

### Research links

- [Faculty/profile page](http://www.cs.unm.edu/~saia)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** algorithmic complexity and amortized analysis
**The paper assumes:** amortized analysis, algorithmic complexity, data structure cost models
**Already in this field?** Skip this entirely if you already understand amortized analysis and complexity bounds for data structures.

This background focuses on algorithmic complexity and amortized analysis, which are crucial for understanding the theoretical guarantees and cost tradeoffs in the Depth Charge defense against hash table attacks. The rigorous course offers a deep, structured exploration of amortized analysis within a broader algorithms context, while the fast track provides a concise, focused introduction to amortized analysis concepts for quicker comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.046J Design and Analysis of Algorithms, Spring 2015](https://www.youtube.com/playlist?list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp) — MIT OpenCourseWare · 34 videos · 39.5h across 34 episodes

**Watch only this:** Lectures 5: Amortization: Amortized Analysis (about 69 minutes) — this lecture specifically covers amortized analysis, providing the essential theory needed to understand the paper's cost bounding techniques.

*Why it unblocks this paper:* MIT 6.046J Design and Analysis of Algorithms covers amortized analysis in a rigorous university setting with a dedicated lecture on amortization and related advanced algorithmic topics, directly supporting the theoretical aspects of the paper.

*If you want all of it:* 39.5 hours across 34 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Amortized Analysis](https://www.youtube.com/playlist?list=PLMLFEbzd52KOJourNOm_WOyFVB2r4mBDC) — Nikita Jain Insights · 9 videos

**Watch only this:** Watch the first 3 videos (approximately 15-20 minutes total) covering the basics of amortized analysis, which provide a solid foundation for understanding the paper's amortized cost reasoning.

*Why it unblocks this paper:* This short-form playlist focuses specifically on amortized analysis with concise videos, offering a quick and clear introduction to the key concepts needed to grasp the paper's amortized cost arguments without requiring a full course commitment.

*If you want all of it:* 9 videos (total duration not specified, estimated under 1 hour)

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Defending Hash Tables from Subterfuge with Depth Charge," start by grounding yourself in the foundational concepts of algorithmic complexity attacks and hash table collision resolution, as these define the attack model and data structure behavior the paper addresses. Next, study the move-to-front heuristic, a key technique used in the paper to improve query latency. Finally, focus on the core concept of the paper—Depth Charge itself—by reviewing advanced university lectures on hash tables that provide the necessary background and context, since no direct author talk is available.

### Algorithmic complexity attacks *(prerequisite)*
Understanding algorithmic complexity attacks is essential as they represent the adversarial model that Depth Charge defends against. These attacks exploit hash table collisions to degrade performance from expected constant time to linear time, causing denial-of-service and security issues.

*How the paper uses it:* The paper addresses algorithmic complexity attacks on hash tables and proposes Depth Charge as a defense.

▶ [Lecture 8: Hashing with Chaining](https://www.youtube.com/watch?v=0M_kIqhwbFo) — MIT OpenCourseWare · 51:16 · 13y ago

### Hash table collision resolution *(prerequisite)*
Collision resolution techniques in hash tables are fundamental to understanding how adversaries create long collision chains and how Depth Charge imposes costs proportional to object depth in these chains. This knowledge is crucial to grasp the paper's defense mechanism.

*How the paper uses it:* Depth Charge charges resource burning costs based on the depth of objects in collision chains, which depends on collision resolution methods.

▶ [Hashing | Maps | Time Complexity | Collisions | Division Rule of Hashing | Strivers A2Z DSA Course](https://www.youtube.com/watch?v=KEs5UyBJ39g) — take U forward · 1:00:06 · 3y ago

### Move-to-front heuristic *(prerequisite)*
The move-to-front heuristic is a key technique used in Depth Charge to improve query latency for frequently accessed good objects by moving them to the head of their respective lists. Understanding this heuristic helps in appreciating how Depth Charge balances latency and cost.

*How the paper uses it:* The paper uses the move-to-front heuristic combined with resource burning to achieve better latency and cost balance.

▶ [MTF(MOVE TO FRONT)](https://www.youtube.com/watch?v=h6rXMpwpMcE) — Vivek Jaiswal · 6 yr ago

### Depth Charge paper talk *(paper-talk search result; attribution unverified)*
Although no direct author talk on Depth Charge is available, advanced university lectures on hash tables provide rigorous and detailed background on hash table operations, collision handling, and performance considerations, which are central to understanding the paper's novel defense approach.

*How the paper uses it:* These lectures provide the core data structure context necessary to understand Depth Charge's design and theoretical guarantees.

▶ [CMU Database Systems - 06 Hash Tables (Fall 2018)](https://www.youtube.com/watch?v=ByG1IMM6Ua8) — CMU Database Group · 1:21:12 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the Depth Charge defense against algorithmic complexity attacks on hash tables, start by learning the basics of hash tables and how collisions are resolved, as these are fundamental to the attack and defense mechanisms. Next, grasp the nature of algorithmic complexity attacks that exploit collisions to degrade performance. Then, learn about the move-to-front heuristic, a key technique Depth Charge uses to improve query latency. Finally, study resource burning defenses, the central mechanism Depth Charge employs to impose costs on attackers and maintain efficient operations under attack.

### Hash table collision resolution *(prerequisite)*
Hash tables store data by mapping keys to indices using hash functions, but collisions occur when multiple keys map to the same index. Collision resolution techniques like chaining store collided items in linked lists, affecting performance depending on list length. Understanding these techniques is essential to grasp how attackers exploit collisions and how defenses like Depth Charge work.

*How the paper uses it:* Depth Charge defends hash tables by managing costs based on the depth of objects in collision chains.

▶ [Lecture 8: Hashing with Chaining](https://www.youtube.com/watch?v=0M_kIqhwbFo) — MIT OpenCourseWare · 51:16 · 13y ago

### Algorithmic complexity attacks *(prerequisite)*
Algorithmic complexity attacks deliberately cause many collisions in hash tables, turning expected constant-time operations into slow linear-time ones. This degrades system performance and can lead to denial-of-service. Understanding this attack model clarifies the threat Depth Charge aims to mitigate.

*How the paper uses it:* Depth Charge addresses the problem of attackers inserting objects to create long collision chains that degrade hash table performance.

▶ [Hash Tables and Hash Functions](https://www.youtube.com/watch?v=KyUTuwz_b7Q) — Computer Science Lessons · 13:56 · 9y ago

### Move-to-front heuristic *(prerequisite)*
The move-to-front heuristic improves access times by moving recently accessed items to the front of a list, making future accesses faster. This technique helps maintain low latency for frequently queried good objects even under attack.

*How the paper uses it:* Depth Charge uses the move-to-front heuristic to reduce latency for good objects in collision chains.

▶ [MTF(MOVE TO FRONT)](https://www.youtube.com/watch?v=h6rXMpwpMcE) — Vivek Jaiswal · 6 yr ago

## Already in your library

- [L-6.1: What is hashing with example | Hashing in data structure](https://www.youtube.com/watch?v=W5q0xgxmRd8) — also for: Linear Hashing Is Optimal (David Zuckerman)
- [1. Introduction to Algorithms](https://www.youtube.com/watch?v=0IAPZzGSbME) — also for: Optimal-Cost Construction of Shallow Cuttings for 3-D Dominance Ranges in the I/O-Model (Yakov Nekrich)
- [Lecture 23: Computational Complexity](https://www.youtube.com/watch?v=moPtwq_cVH8) — also for: Learning-assisted schedulability analysis: opportunities and limitations (Sanjoy K. Baruah)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the Depth Charge defense against algorithmic complexity attacks on hash tables. The beginner project reproduces the core resource burning cost mechanism on a small scale. The intermediate project implements the Depth Charge algorithm and compares its performance against a baseline under simulated attack conditions. The advanced project extends Depth Charge to explore dynamic resizing or adaptive charging thresholds, addressing a key limitation noted by the authors.

### Beginner — Simulate Depth-Based Resource Burning in Hash Chains
*Effort: a weekend, ~8 hours*

You build a simple hash table simulation in C++ or JavaScript that models collision chains as linked lists. For each insertion, query, or deletion, you compute and log a resource burning (RB) cost proportional to the depth of the object in the chain, mimicking the Depth Charge charging scheme. You visualize how RB costs increase as chains grow deeper.

**Why it shows you understood the paper:** This project shows you grasp the fundamental idea of charging costs proportional to object depth in collision chains, a core mechanism of Depth Charge. A professor would see you can translate the theoretical RB cost concept into a working simulation.

**Grounded in:** Our algorithm, Depth Charge, charges RB costs for operations based on the depth of the appropriate object in the list that the object hashes to in the table.

**Tech stack:** C++, JavaScript, Node.js

**Data:** Simulated synthetic hash table operations with controlled insertions to create collision chains.

**Build it:**

1. Implement a basic hash table with separate chaining using linked lists.
2. Add instrumentation to track the depth of each object in its chain.
3. Implement RB cost calculation proportional to object depth for insert, query, and delete operations.
4. Simulate sequences of operations that create collision chains of varying lengths.
5. Log and plot RB costs versus chain depth to observe quadratic cost growth.
6. Write a README explaining the RB cost mechanism and its significance.

**Ships as:** A repository with code simulating Depth Charge's RB cost charging by depth, logs and plots showing cost growth with chain depth, and a README explaining the mechanism.

**Stretch goal:** Add the move-to-front heuristic to reorder chains on queries and show its effect on RB costs.

### Intermediate — Implement Depth Charge Defense and Compare Against Baseline
*Effort: 1-3 weekends, ~20 hours*

You implement the Depth Charge algorithm for a fixed-size hash table with separate chaining, including RB cost charging proportional to object depth and the move-to-front heuristic. You simulate adversarial insertions designed to create long collision chains and measure RB costs and latency. You compare Depth Charge's performance against a baseline hash table without RB charging under the same attack.

**Why it shows you understood the paper:** This project demonstrates you can faithfully implement the core Depth Charge defense and reproduce its key theoretical guarantees on cost and latency under attack. A professor would see you understand both the algorithm and its adversarial cost model.

**Grounded in:** Corollary 3.9 establishes the total RB cost and latency as O(√(I + Q + D + (I + Q + D)B) ℓ_M).

**Tech stack:** C++, Python (for simulation and plotting)

**Data:** Synthetic sequences of insertions, queries, and deletions simulating adversarial and benign workloads.

**Build it:**

1. Implement a fixed-size hash table with separate chaining in C++.
2. Add Depth Charge RB cost charging proportional to object depth for all operations.
3. Incorporate the move-to-front heuristic on queries.
4. Create a baseline hash table implementation without RB charging.
5. Simulate adversarial workloads that attempt to create long collision chains.
6. Measure and plot RB costs and latency for Depth Charge versus baseline.
7. Write a report comparing results and relating them to the paper's theoretical bounds.

**Ships as:** A repository with Depth Charge and baseline implementations, simulation scripts, performance plots, and a README/report analyzing results.

**Stretch goal:** Experiment with varying the fixed hash table size and observe effects on RB costs and latency.

### Advanced — Extend Depth Charge to Support Dynamic Resizing and Adaptive Charging
*Effort: a few weeks, ~60+ hours*

You extend the Depth Charge algorithm to support dynamic resizing of the hash table and adaptive RB charging thresholds that activate only when chain lengths exceed certain limits. You implement this extension and simulate workloads with and without attacks to evaluate overhead and defense effectiveness. This addresses a key limitation and future direction noted by the authors.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future work, designing and implementing a meaningful extension that balances defense strength with overhead in benign conditions. A professor would see your ability to innovate beyond the original work.

**Grounded in:** Extending Depth Charge to support dynamic resizing of hash tables under unpredictable system load. Achieving zero or negligible cost to the algorithm when no attack is present by charging only when list sizes exceed thresholds.

**Tech stack:** C++, Python (for simulation and analysis)

**Data:** Synthetic workloads simulating benign and adversarial conditions with varying load and chain lengths.

**Build it:**

1. Design a dynamic resizing scheme for the hash table compatible with Depth Charge's RB charging.
2. Implement adaptive RB charging that activates only when chain lengths exceed configurable thresholds.
3. Integrate these extensions into the Depth Charge implementation.
4. Simulate workloads with and without attacks, measuring RB costs, latency, and overhead.
5. Analyze trade-offs between defense strength and overhead in benign conditions.
6. Document design decisions, implementation details, and evaluation results in a detailed README.

**Ships as:** A repository with extended Depth Charge code supporting dynamic resizing and adaptive charging, simulation and evaluation scripts, and a comprehensive README discussing findings.

**Stretch goal:** Incorporate a simple ML model to predict attack intensity and dynamically adjust charging thresholds.
