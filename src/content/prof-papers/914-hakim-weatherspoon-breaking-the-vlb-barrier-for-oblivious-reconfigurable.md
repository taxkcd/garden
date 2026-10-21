---
title: "914 · Breaking the VLB Barrier for Oblivious Reconfigurable Networks — Hakim Weatherspoon"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hakim-weatherspoon"
source_hash: "609c3b7bca25398d01ad2b99b3113f22f0835fed5855718b645646eabcbce300"
sequence: 914
generator: "outreach-garden: managed"
---

# 914 · Breaking the VLB Barrier for Oblivious Reconfigurable Networks

## At a glance

- **Professor:** Hakim Weatherspoon
- **Institution:** Cornell University
- **Paper:** [Breaking the VLB Barrier for Oblivious Reconfigurable Networks](https://arxiv.org/pdf/2308.14837)
- **Authors:** Tegan Wilson, Daniel Amir, Nitika Saran, Robert Kleinberg, Vishal Shrivastav, Hakim Weatherspoon
- **Year:** 2023

## Paper overview

This paper revisits the classic Valiant Load Balancing (VLB) method for oblivious routing in networks, particularly in the context of modern reconfigurable datacenter networks. It introduces a novel routing scheme that improves latency and throughput tradeoffs by using a semi-oblivious approach and randomized network topologies. The authors prove that their scheme can achieve better performance than traditional VLB, breaking the long-standing factor-of-two latency stretch barrier, and provide theoretical bounds and proofs for these improvements.

### Why it matters

**Research problem:** The problem is whether Valiant Load Balancing (VLB), a widely used oblivious routing method that balances load by routing through a random intermediate node with a latency stretch factor of two, remains optimal in the setting of reconfigurable networks that can rapidly change their topology. The authors investigate if it is possible to improve the latency-throughput tradeoff in such networks without centralized coordination.

**Why it matters:** Datacenter networks increasingly use reconfigurable switches to adapt topology rapidly, but workloads change too fast for centralized control. VLB has been the state-of-the-art oblivious routing method for decades, but it requires overprovisioning network capacity by a factor of two, increasing costs significantly. Improving routing efficiency without sacrificing obliviousness or requiring centralized control can reduce datacenter costs and improve performance.

**Key contributions:**

- A novel oblivious routing scheme for reconfigurable networks with additive stretch 1, improving over VLB's factor 2 stretch.
- Proof that semi-oblivious routing can asymptotically outperform fully oblivious routing in reconfigurable networks.
- Development of a randomized connection schedule using vector space constellations to ensure near-uniform load distribution.
- New exponential tail bounds for bilinear forms on permutation group orbits, useful for analyzing routing load.
- Theoretical latency-throughput tradeoff bounds that nearly match lower bounds, demonstrating near-optimality.

## About the professor

**Hakim Weatherspoon** — Professor of Computer Science, Department of Computer Science, Cornell University.

Research interests: information systems, distributed systems, network systems, peer-to-peer systems, fault-tolerance, reliability, security, performance of internet-scale systems with decentralized control

### Research links

- [Faculty/profile page](https://www.cs.cornell.edu/people/hakim-weatherspoon)
- [Identity evidence](http://www.cs.cornell.edu/~hweather)
- [Professor website](https://www.cs.cornell.edu/~hweather/)
- [Resolved homepage](http://www.cs.cornell.edu/~hweather/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algebraic Combinatorics and Finite Fields
**The paper assumes:** finite fields, vector spaces, group actions, bilinear forms, algebraic combinatorics
**Already in this field?** Skip this entirely if you already have a solid understanding of finite fields, group theory, and algebraic combinatorics at the undergraduate or beginning graduate level.

This background focuses on algebraic combinatorics and finite fields, essential for understanding the mathematical framework behind the novel oblivious routing schemes and their performance guarantees in the paper. The rigorous course option provides a deep, structured university-level treatment of algebraic graph theory and combinatorics relevant to the paper's core concepts. The fast track offers a shorter, more accessible series covering key algebraic combinatorics topics to quickly build intuition and foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Open Problems in Algebraic Combinatorics](https://www.youtube.com/playlist?list=PL_x-9BL_zf4GjLfAYKgh_Q_eyjAv9R-vX) — Combinatorics & Optimization University of Waterloo · 15 videos · 13.3h across 15 episodes

**Watch only this:** Episodes 1-6, about 5.3 hours — covering instantaneous uniform mixing, Erdős-Ko-Rado theorems, tight 2-designs, equiangular lines over finite fields, and algebraic aspects of t-intersecting families, which build the algebraic combinatorics foundation needed for the paper's routing scheme and analysis.

*Why it unblocks this paper:* This University of Waterloo series on Open Problems in Algebraic Combinatorics covers algebraic graph theory topics such as permutation groups, finite fields, and designs that directly relate to the paper's use of vector spaces over finite fields and bilinear forms on permutation group orbits.

*If you want all of it:* 13.3 hours across all 15 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Combinatorics 1 Lectures](https://www.youtube.com/playlist?list=PLiR7fd-rXGgjurtwz5Rw7tKuUPYrvpi8M) — Sebi Cioaba · 39 videos · 32.8h across 39 episodes

**Watch only this:** Episodes 1-10, about 8.4 hours — covering finite sets, permutations, binomial theorem, generating functions, and enumeration under group actions including the orbit-stabilizer lemma and Burnside's lemma, which are directly relevant to the paper's mathematical tools.

*Why it unblocks this paper:* This 'Combinatorics 1 Lectures' series provides a clear, concise introduction to combinatorics including permutations, group actions, and enumeration under group actions, which are crucial for understanding the paper's use of permutation group orbits and combinatorial constructions in routing.

*If you want all of it:* 32.8 hours across all 39 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Breaking the VLB Barrier for Oblivious Reconfigurable Networks," start by grounding yourself in the foundational concepts of reconfigurable datacenter networks, oblivious routing in networks, and the classic Valiant Load Balancing (VLB) method. These prerequisites provide the necessary context on network environments, routing paradigms, and baseline load balancing techniques. Finally, focus on the paper's core concept through the authors' own detailed seminar talk, which presents their novel routing scheme, theoretical contributions, and performance improvements over VLB.

### Reconfigurable datacenter networks *(prerequisite)*
This section covers the environment where the paper's new routing scheme applies. Understanding the characteristics, challenges, and architectures of reconfigurable datacenter networks is crucial to appreciate why traditional routing methods like VLB may be suboptimal and how rapid topology changes impact routing design.

*How the paper uses it:* The paper targets oblivious routing improvements specifically for reconfigurable datacenter networks that can rapidly change topology.

▶ [Rearchitecting Datacenter Networks: A New Paradigm with Optical Core and Optical Edge](https://www.youtube.com/watch?v=Wu8MynsrO0Q) — Centre for Networked Intelligence, IISc · 55:37 · 9mo ago

### Oblivious routing in networks *(prerequisite)*
Oblivious routing is the core routing paradigm underlying the paper's approach. This section introduces the concept of routing without demand awareness, including semi-oblivious routing variants, and discusses theoretical and practical aspects of oblivious routing schemes in networks.

*How the paper uses it:* The paper designs novel oblivious and semi-oblivious routing schemes that improve upon classical oblivious routing methods.

▶ [DIMACS Networking Workshop: Nate Foster - Kulfi: Traffic Engineering Using Semi-Oblivious Routing](https://www.youtube.com/watch?v=SigyXYzsm3w) — Rutgers University · 25:22 · 10y ago

### Valiant Load Balancing *(prerequisite)*
Valiant Load Balancing (VLB) is the foundational oblivious routing method that the paper improves upon. Understanding VLB's mechanism, its factor-of-two latency stretch, and its role in load balancing provides essential background to grasp the significance of breaking the VLB barrier.

*How the paper uses it:* The paper revisits and improves the classic VLB method by reducing latency stretch from a multiplicative factor of 2 to an additive stretch of 1.

▶ [Load Balancing in Cloud Computing](https://www.youtube.com/watch?v=TUVyWnPIYuE) — CEC · 58:44 · 8y ago

### Breaking the VLB Barrier for Oblivious Reconfigurable Networks (Paper authors talk) *(paper-talk search result; attribution unverified)*
This is the authors' own detailed seminar talk presenting their novel oblivious routing scheme, theoretical proofs, and performance results. It offers direct insights into their methodology, mathematical tools, and the significance of their contributions beyond VLB.

*How the paper uses it:* This talk is by the paper's authors and directly explains their new routing scheme and theoretical results.

▶ [Tegan Wilson: Breaking the VLB Barrier for Oblivious Reconfigurable Networks](https://www.youtube.com/watch?v=cfxNW_yTUWo) — Brown CS Theory · 49:55 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Breaking the VLB Barrier for Oblivious Reconfigurable Networks,' start by learning the foundational concept of load balancing in networks, focusing on Valiant Load Balancing (VLB), which the paper improves upon. Next, grasp the core routing paradigm of oblivious routing, essential for appreciating the paper's novel routing schemes. Then, explore the context of reconfigurable datacenter networks where these routing methods apply. Finally, learn about randomized network topologies, a key technique used in the paper to achieve improved performance.

### Valiant Load Balancing *(prerequisite)*
Valiant Load Balancing (VLB) is a classic method to balance network traffic by routing packets through a random intermediate node, which helps avoid congestion but doubles the path length. Understanding VLB provides the baseline for how oblivious routing works and why improving its latency stretch is important.

*How the paper uses it:* The paper improves upon VLB by reducing its latency stretch from a factor of 2 to an additive stretch of 1.

▶ [What is a LOAD BALANCER really about?](https://www.youtube.com/watch?v=LQuuoHTyYz8) — ByteByteGo · 6:45 · 1y ago

### Oblivious routing in networks *(prerequisite)*
Oblivious routing is a routing strategy where paths are fixed in advance and do not adapt to current network traffic, ensuring simplicity and decentralization. Learning this concept helps understand the paper's focus on routing schemes that do not rely on centralized control or demand awareness.

*How the paper uses it:* The paper proposes a novel oblivious routing scheme and a semi-oblivious variant that outperform traditional oblivious routing in reconfigurable networks.

▶ [DIMACS Networking Workshop: Nate Foster - Kulfi: Traffic Engineering Using Semi-Oblivious Routing](https://www.youtube.com/watch?v=SigyXYzsm3w) — Rutgers University · 25:22 · 10y ago

### Reconfigurable datacenter networks *(prerequisite)*
Reconfigurable datacenter networks use switches that can rapidly change their connections to adapt to traffic patterns, offering flexibility but also challenges for routing. Understanding this environment clarifies why traditional routing methods like VLB may be suboptimal and motivates the paper's new approach.

*How the paper uses it:* The paper targets oblivious routing improvements specifically in the context of modern reconfigurable datacenter networks.

▶ [Data Center Networking - Characteristics and Challenges](https://www.youtube.com/watch?v=MDIHkPIZO9M) — NPTEL-NOC IITM · 36:05 · 3y ago

### Randomized network topologies
Randomized network topologies involve designing network connections in a way that incorporates randomness to evenly distribute load and reduce bottlenecks. This concept is key to the paper's method of using randomized connection schedules to improve load balancing and latency.

*How the paper uses it:* The paper uses randomized connection schedules based on vector space constellations to achieve near-uniform load distribution and improved latency.

▶ [Network Topology](https://www.youtube.com/watch?v=uSKdjjw5zow) — Neso Academy · 13:36 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
A direct presentation by the paper's authors provides detailed insights into their novel routing scheme, theoretical contributions, and the significance of breaking the VLB latency barrier. Watching this talk can consolidate understanding after grasping the foundational concepts.

*How the paper uses it:* This talk by Tegan Wilson covers the paper's main results and methods in detail.

▶ [Tegan Wilson: Breaking the VLB Barrier for Oblivious Reconfigurable Networks](https://www.youtube.com/watch?v=cfxNW_yTUWo) — Brown CS Theory · 49:55 · 1y ago

## Already in your library

- [Oblivious Transfer - Computerphile](https://www.youtube.com/watch?v=wE5cl8J27Is) — also for: Oblivis: A Framework for Delegated and Efficient Oblivious Transfer (Yvo Desmedt)
- [How Routing Works: The Basics, Protocols, and Real-World Examples for Beginners](https://www.youtube.com/watch?v=kyMoEgdMbH8) — also for: Knowledge-Guided Machine Learning for Stabilizing Near-Shortest Path Routing (Anish Arora)
- [Reconfigurable Computing: Architectural and Design Tool ...](https://www.youtube.com/watch?v=5_H_j72Ftq8) — also for: Seeking Solutions in Configurable Computing (David Andrews)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper's novel routing schemes for reconfigurable networks. The beginner project recreates a simplified simulation of Valiant Load Balancing (VLB) and the paper's additive stretch 1 improvement to visualize latency differences. The intermediate project implements the core semi-oblivious routing scheme described in the paper, comparing its latency-throughput tradeoff against VLB on synthetic network topologies. The advanced project explores extending the semi-oblivious routing scheme to handle partial demand awareness or variable node degrees, addressing one of the paper's stated limitations and future directions.

### Beginner — Simulate and Visualize VLB vs Additive Stretch 1 Routing
*Effort: a weekend (~8 hours)*

You build a small-scale network simulator in Python that models routing latency for Valiant Load Balancing (VLB) and the paper's additive stretch 1 routing scheme on a fixed topology. The simulator will generate random permutation demands and compute average latency under both schemes, visualizing the latency stretch difference.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental difference between VLB's multiplicative factor 2 latency stretch and the paper's additive stretch 1 improvement by reproducing and visualizing the key latency metric on synthetic data.

**Grounded in:** Our routing scheme improves VLB by stretching routing paths the minimum possible amount — an additive stretch of 1 rather than a multiplicative stretch of 2.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic permutation demand matrices generated randomly to simulate network traffic; no external dataset needed.

**Build it:**

1. Implement a simple network topology model with N nodes (e.g., N=16).
2. Implement Valiant Load Balancing routing: route each demand via a random intermediate node and compute path latency.
3. Implement the additive stretch 1 routing scheme as described, routing via an intermediate node with one additional hop.
4. Generate random permutation demands and simulate routing latency under both schemes.
5. Plot and compare average latency distributions for VLB and additive stretch 1 routing.
6. Write a README explaining the simulation setup and the latency stretch difference.

**Ships as:** A Python repository with simulation code, latency comparison plots, and a README explaining the additive stretch 1 improvement over VLB.

**Stretch goal:** Add visualization of load distribution across links to illustrate load balancing differences.

### Intermediate — Implement Semi-Oblivious Routing Scheme and Compare Latency-Throughput Tradeoff
*Effort: 2 weekends (~20 hours)*

You implement the core semi-oblivious routing scheme from the paper using randomized connection schedules based on vector space constellations on a synthetic reconfigurable network topology. You simulate routing under uniform permutation demands and compare throughput and latency metrics against standard VLB routing.

**Why it shows you understood the paper:** This project shows you can translate the paper's theoretical routing design into a working simulation, reproducing key performance metrics and demonstrating the semi-oblivious scheme's advantage over fully oblivious VLB routing.

**Grounded in:** We design a novel oblivious routing scheme for reconfigurable networks that uses randomized connection schedules based on vector spaces over finite fields and an overcomplete system of vectors called constellations. Our routing paths have an additive stretch of 1 instead of the multiplicative factor of 2 in VLB.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** Synthetic network topologies and uniform permutation demand matrices generated programmatically; no external dataset required.

**Build it:**

1. Implement a model of a reconfigurable network topology with prime power size N (e.g., N=16 or 25).
2. Implement randomized connection schedules using vector space constellations as described in the paper.
3. Simulate semi-oblivious routing with primary low-latency paths and failover paths.
4. Implement baseline VLB routing for comparison.
5. Generate uniform permutation demands and measure throughput and latency under both schemes.
6. Plot latency-throughput tradeoff curves and write a report comparing results.

**Ships as:** A Python simulation repository with semi-oblivious routing implementation, comparison plots, and a detailed README explaining the routing scheme and performance results.

**Stretch goal:** Incorporate the paper's exponential tail bounds analysis to statistically validate load distribution in your simulation.

### Advanced — Extend Semi-Oblivious Routing to Partial Demand Awareness and Variable Node Degrees
*Effort: 3+ weeks*

You develop an extension to the semi-oblivious routing scheme that incorporates partial demand awareness and supports variable node degrees, addressing practical datacenter constraints. You implement this extended scheme in simulation, evaluate its latency-throughput tradeoff, and compare it to the original semi-oblivious scheme and VLB routing.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by adapting the theoretical routing scheme to more realistic network conditions, demonstrating your ability to innovate beyond the original work and engage with open research questions.

**Grounded in:** The semi-oblivious routing scheme requires limited demand awareness and a small amount of shared knowledge among nodes, which may complicate fully decentralized implementations. Future directions include developing adaptive or partially demand-aware routing schemes that balance performance gains with decentralization and simplicity.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib

**Data:** Synthetic reconfigurable network topologies with variable node degrees and partial demand matrices generated programmatically.

**Build it:**

1. Review the semi-oblivious routing scheme implementation from the intermediate project.
2. Design a model for partial demand awareness where nodes have limited knowledge of traffic demands.
3. Modify the routing algorithm to adapt connection schedules based on partial demand information.
4. Extend the network topology model to support variable node degrees reflecting practical constraints.
5. Simulate routing under these new conditions and measure latency and throughput.
6. Compare results against the original semi-oblivious and VLB routing schemes.
7. Document challenges, assumptions, and potential tradeoffs in a comprehensive README.

**Ships as:** A Python simulation repository with extended semi-oblivious routing code, evaluation results, and a detailed report discussing the adaptation to practical constraints and performance implications.

**Stretch goal:** Prototype a decentralized coordination mechanism to share limited demand information among nodes.
