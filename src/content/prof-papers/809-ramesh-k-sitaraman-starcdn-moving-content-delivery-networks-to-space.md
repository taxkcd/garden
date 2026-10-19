---
title: "809 · StarCDN: Moving Content Delivery Networks to Space — Ramesh K. Sitaraman"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ramesh-k-sitaraman"
source_hash: "8af1dbf40893d612512287f8e26db24a63b7fefc0c98e4ce4ccab6ed2e20f5ee"
sequence: 809
generator: "outreach-garden: managed"
---

# 809 · StarCDN: Moving Content Delivery Networks to Space

## At a glance

- **Professor:** Ramesh K. Sitaraman
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [StarCDN: Moving Content Delivery Networks to Space](https://dl.acm.org/doi/pdf/10.1145/3718958.3754345)
- **Authors:** William X. Zheng, Aryan Taneja, Maleeha Masood, Anirudh Sabnis, Ramesh K. Sitaraman, Deepak Vasisht
- **Year:** 2025

## Paper overview

This paper presents StarCDN, a novel content delivery network architecture designed specifically for Low Earth Orbit (LEO) satellite networks like Starlink. Traditional terrestrial CDNs perform poorly with satellite networks due to high latency and bandwidth inefficiencies. StarCDN places caching servers directly on satellites and uses new techniques like consistent hashing and relayed fetching to handle the rapid orbital motion and dynamic user coverage of satellites. This approach reduces uplink bandwidth usage by up to 80% and improves user-perceived latency by 2.5 times. The authors also developed SpaceGEN, an open-source synthetic trace generator to simulate realistic satellite CDN traffic patterns.

### Why it matters

**Research problem:** Traditional terrestrial content delivery networks (CDNs) are not well-suited for Low Earth Orbit (LEO) satellite networks because of the satellites' rapid orbital motion and dynamic coverage areas, leading to degraded user experience and inefficient use of ground-to-satellite bandwidth.

**Why it matters:** LEO satellite networks like Starlink are rapidly expanding and serve millions of users globally. Improving CDN performance in these networks can significantly enhance user experience by reducing latency and network congestion, while also reducing operational costs by optimizing bandwidth usage in scarce satellite uplink channels.

**Key contributions:**

- Design of StarCDN, the first space-based CDN architecture tailored for LEO satellite networks.
- Development of a novel consistent hashing scheme adapted to the satellite constellation topology to reduce redundant caching and improve cache efficiency.
- Introduction of a relayed fetch technique that allows cached content to flow opposite to satellite orbital motion, improving cache hit rates despite dynamic user coverage.
- Creation of SpaceGEN, an open-source synthetic trace generator that models temporal and geographic variations in content access patterns across multiple global locations.
- Comprehensive evaluation using real-world Akamai CDN traces and simulations of 1170 Starlink satellites demonstrating significant improvements in cache hit rates, bandwidth utilization, and user latency.

## About the professor

**Ramesh K. Sitaraman** — Distinguished University Professor of Computer Science, College of Information and Computer Sciences, Univ. of Massachusetts Amherst.

Research interests: Internet-scale distributed systems and infrastructure for AI, including algorithms, architectures, performance, and energy efficiency.

### Research links

- [Faculty/profile page](https://groups.cs.umass.edu/ramesh)
- [Lab website](https://groups.cs.umass.edu/ramesh/lids-lab/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems and Consistent Hashing
**The paper assumes:** distributed systems fundamentals, consistent hashing, distributed caching algorithms
**Already in this field?** Skip this entirely if you already understand distributed caching and consistent hashing in distributed systems.

To understand the StarCDN paper, a solid grasp of distributed systems principles and consistent hashing is essential, as these underpin the paper's novel CDN architecture for LEO satellite networks. The rigorous course option offers a comprehensive university-level lecture series on distributed systems, covering foundational concepts and advanced topics relevant to distributed caching and consistency. The fast track provides a shorter, more focused playlist that introduces distributed systems fundamentals efficiently, suitable for readers who want a quicker but still authoritative overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Distributed Systems lecture series](https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB) — Martin Kleppmann · 23 videos · 6.9h across 23 episodes

**Watch only this:** Lectures 1.1 to 5.3 (Introduction through State machine replication), about 3.5 hours — these cover distributed system basics, replication, and fault tolerance essential for grasping distributed caching and consistent hashing.

*Why it unblocks this paper:* Martin Kleppmann's Distributed Systems lecture series is a well-structured university-level course that covers core distributed systems concepts including fault tolerance, replication, consensus, and cache consistency, which are critical to understanding StarCDN's architecture and caching strategies.

*If you want all of it:* 6.9 hours across all 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Distributed Systems (www.distributedsystemscourse.com)](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) — Distributed Systems Course · 18 videos · 4.5h across 18 episodes

**Watch only this:** Episodes L1 to L9 (What is a distributed system? through Paxos Simplified), about 2.1 hours — these provide a solid foundation in distributed systems and consensus protocols relevant to consistent hashing and caching.

*Why it unblocks this paper:* The Distributed Systems Course playlist offers concise, clear explanations of distributed systems fundamentals including consensus, fault tolerance, and consistency models in a shorter total duration, making it a practical fast-track for quickly understanding the key concepts behind StarCDN's design.

*If you want all of it:* 4.5 hours across all 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the StarCDN paper, start with foundational knowledge on LEO satellite network architecture to grasp the dynamic topology and coverage challenges that motivate the work. Next, study consistent hashing in distributed caching to comprehend the core technique StarCDN adapts for satellite caching. Then, explore inter-satellite links and routing to understand the relayed fetch mechanism enabling content flow opposite to orbital motion. Finally, focus on the paper's core concept by watching the authors' own talk on StarCDN, which presents their novel space-based CDN architecture and techniques in detail.

### LEO satellite network architecture *(prerequisite)*
Understanding the dynamic topology, rapid orbital motion, and coverage challenges of Low Earth Orbit satellites is essential to appreciate why traditional terrestrial CDNs perform poorly and why StarCDN's design is necessary. This section covers the fundamental communication and networking challenges in LEO satellite constellations.

*How the paper uses it:* StarCDN targets LEO satellite networks whose rapid orbital motion and dynamic coverage cause caching and latency challenges.

▶ [Satellite Network Architecture Explained | Bent Pipe, Inter-Satellite Links & Satellite Lifetime](https://www.youtube.com/watch?v=QAWLbSBFE6Q) — Parag Kar · 7mo ago

### Consistent hashing in distributed caching *(prerequisite)*
Consistent hashing is a core technique to partition cached content efficiently and reduce redundancy in distributed caching systems. Understanding this concept is crucial to grasp how StarCDN adapts consistent hashing to the satellite constellation topology for improved cache efficiency.

*How the paper uses it:* StarCDN introduces a satellite-specific consistent hashing scheme to partition cached content across satellites.

▶ [Consistent Hashing | Algorithms You Should Know #1](https://www.youtube.com/watch?v=UF9Iqmg94tk) — ByteByteGo · 4y ago

### StarCDN paper talk
This is the authors' own presentation of their novel CDN architecture designed specifically for LEO satellite networks. It provides direct insight into their design decisions, techniques like consistent hashing and relayed fetch, and evaluation results, making it the most authoritative and comprehensive resource on the paper.

*How the paper uses it:* This talk is by the paper authors and covers the StarCDN architecture and its novel techniques in detail.

▶ [https://www.youtube.com › watch?v=-dX0DbW-9iY](https://www.youtube.com/watch?v=-dX0DbW-9iY) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand StarCDN, start by learning the basics of Low Earth Orbit (LEO) satellite networks to grasp their dynamic coverage and motion challenges. Next, build foundational knowledge of Content Delivery Networks (CDNs) and caching strategies, followed by consistent hashing as a key technique for distributed caching. Then, explore inter-satellite links and routing, which enable StarCDN's relayed fetch mechanism. Finally, watch a focused talk on StarCDN itself to see how these concepts combine in the novel space-based CDN architecture.

### LEO satellite network architecture *(prerequisite)*
Learn how Low Earth Orbit satellites move rapidly around the Earth, causing dynamic coverage areas and unique communication challenges. This sets the stage for understanding why traditional terrestrial networks struggle and why new CDN designs are needed.

*How the paper uses it:* StarCDN addresses the rapid orbital motion and dynamic user coverage challenges inherent in LEO satellite networks.

▶ [LEO Satellite Networks: Brief Introduction to Communications Challenges](https://www.youtube.com/watch?v=1tw4SmS4Pc4) — Iain Explains Signals, Systems, and Digital Comms · 3y ago

### Content delivery networks design *(prerequisite)*
Understand what CDNs are, how they cache content closer to users to reduce latency, and the basics of caching strategies. This foundational knowledge is essential before diving into StarCDN's satellite-specific CDN design.

*How the paper uses it:* StarCDN innovates on traditional CDN principles to suit the satellite environment.

▶ [https://www.youtube.com › watch?v=ouqqU0FJjhQ](https://www.youtube.com/watch?v=ouqqU0FJjhQ) — YouTube result via DuckDuckGo

### Consistent hashing in distributed caching *(prerequisite)*
Consistent hashing is a technique to evenly distribute cached content across multiple servers while minimizing cache redundancy and reorganization when servers join or leave. This concept is crucial for StarCDN's efficient cache partitioning across satellites.

*How the paper uses it:* StarCDN uses a satellite-specific consistent hashing scheme to partition cached content and reduce redundancy.

▶ [What is CONSISTENT HASHING and Where is it used?](https://www.youtube.com/watch?v=zaRkONvyGr8) — Gaurav Sen · 8y ago

### Inter-satellite links and routing *(prerequisite)*
Inter-satellite links (ISLs) enable satellites to communicate directly with each other, allowing data to be relayed across the constellation. Understanding ISLs and routing is key to grasping how StarCDN implements its relayed fetch technique to counteract orbital motion.

*How the paper uses it:* StarCDN's relayed fetch technique leverages ISLs to fetch content opposite to satellite orbital motion.

▶ [Satellite Network Architecture Explained | Bent Pipe, Inter-Satellite Links & Satellite Lifetime](https://www.youtube.com/watch?v=QAWLbSBFE6Q) — Parag Kar · 7mo ago

### StarCDN paper talk
Watch a concise overview from the authors explaining StarCDN's architecture, key innovations like consistent hashing and relayed fetch, and evaluation results demonstrating improved latency and bandwidth efficiency in LEO satellite networks.

*How the paper uses it:* This talk provides direct insight into the novel space-based CDN architecture designed for LEO satellites.

▶ [https://www.youtube.com › watch?v=-dX0DbW-9iY](https://www.youtube.com/watch?v=-dX0DbW-9iY) — YouTube result via DuckDuckGo


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of StarCDN's novel CDN architecture for LEO satellite networks. The beginner project reproduces a key caching mechanism concept using familiar tools. The intermediate project involves reimplementing StarCDN's consistent hashing and relayed fetch techniques using the authors' synthetic trace generator and simulator, comparing cache hit rates against a baseline. The advanced project extends the paper by addressing a stated limitation: modeling transmission failures during satellite handovers with a fine-grained simulator and evaluating their impact on caching performance.

### Beginner — Simulate Consistent Hashing for Satellite Cache Partitioning
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of the paper's satellite-specific consistent hashing scheme to partition cached content across a simplified satellite constellation. Using Python, you implement consistent hashing with configurable buckets and simulate object-to-satellite assignment, measuring cache redundancy reduction compared to naive caching.

**Why it shows you understood the paper:** This project shows you grasp the core idea of how consistent hashing reduces redundant caching in a dynamic satellite environment by partitioning content efficiently across satellites.

**Grounded in:** Consistent hashing with 4 or 9 buckets balances cache hit rate improvements and latency overhead effectively.

**Tech stack:** Python 3.11

**Data:** Synthetic content object IDs generated randomly to simulate cache keys; no external dataset required.

**Build it:**

1. Implement a consistent hashing ring with configurable number of buckets in Python.
2. Simulate assignment of a set of content object IDs to satellites using the hashing scheme.
3. Compare the number of redundant cached objects across satellites with naive uniform caching.
4. Visualize the distribution of objects per satellite and redundancy reduction.
5. Write a README explaining the consistent hashing mechanism and its benefits in StarCDN.

**Ships as:** A Python script and README demonstrating consistent hashing for satellite cache partitioning with visualizations and analysis.

**Stretch goal:** Add a simple simulation of satellite orbital motion by periodically remapping buckets to satellites and observe cache churn.

### Intermediate — Reimplement StarCDN Caching and Relayed Fetch with SpaceGEN and Simulator
*Effort: 2 weekends, ~20 hours*

You reimplement the core StarCDN caching architecture including the satellite-specific consistent hashing and relayed fetch technique. Using the authors' open-source SpaceGEN synthetic trace generator and StarCDN-Simulator from GitHub, you run simulations of a smaller satellite constellation and compare cache hit rates and bandwidth usage against a naive LRU caching baseline.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the paper's actual synthetic data and simulation tools, faithfully reproducing and evaluating the key caching mechanisms that improve CDN performance in LEO satellite networks.

**Grounded in:** Comprehensive evaluation using real-world Akamai CDN traces and simulations of 1170 Starlink satellites demonstrating significant improvements in cache hit rates, bandwidth utilization, and user latency.

**Tech stack:** Python 3.11, Git, Linux shell

**Data:** Use SpaceGEN synthetic traces from https://github.com/ConnectedSystemsLab/SpaceGEN and StarCDN-Simulator from https://github.com/ConnectedSystemsLab/StarCDN-Simulator to generate and simulate satellite CDN traffic.

**Build it:**

1. Clone and set up the SpaceGEN synthetic trace generator and StarCDN-Simulator repositories.
2. Generate synthetic CDN request traces for a smaller satellite constellation (e.g., 50-100 satellites).
3. Implement or configure the simulator to run StarCDN's consistent hashing and relayed fetch caching policies.
4. Run baseline simulations using naive LRU caching for comparison.
5. Collect and analyze metrics: cache hit rates, uplink bandwidth usage, and user latency.
6. Document your implementation, results, and comparison in a detailed README.

**Verified links from the paper:**

- <https://github.com/ConnectedSystemsLab/StarCDN-Simulator> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/ConnectedSystemsLab/SpaceGEN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with scripts to generate synthetic traces, run caching simulations, and a report comparing StarCDN techniques to baseline caching.

**Stretch goal:** Experiment with different bucket counts in consistent hashing and analyze the tradeoff between cache hit rate and latency.

### Advanced — Modeling Transmission Failures During Satellite Handovers in StarCDN
*Effort: 3+ weeks*

You develop an enhanced simulation framework that extends the StarCDN-Simulator to model link-layer behaviors including transmission failures and disconnections during satellite handovers, a limitation noted in the paper. You evaluate how these failures impact cache hit rates, bandwidth utilization, and user latency, proposing mitigation strategies such as adaptive caching or request routing.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of StarCDN's architecture and the practical challenges in real-world LEO satellite networks. It also demonstrates your ability to extend existing simulators and analyze complex network behaviors.

**Grounded in:** The simulation framework is discrete-time and does not model disconnections or transmission failures during satellite handovers, which occur every few minutes.

**Tech stack:** Python 3.11, Git, Linux shell

**Data:** Use SpaceGEN synthetic traces and StarCDN-Simulator as a base; extend with custom simulation code to model transmission failures during handovers.

**Build it:**

1. Study the StarCDN-Simulator codebase to understand its architecture and caching mechanisms.
2. Design and implement a module to simulate transmission failures and disconnections during satellite handovers based on realistic timing and failure probabilities.
3. Integrate this module into the existing simulator framework.
4. Run simulations comparing performance metrics with and without failure modeling.
5. Analyze the impact on cache hit rates, bandwidth usage, and latency.
6. Explore and implement simple mitigation strategies such as adaptive relayed fetch or caching policies.
7. Write a comprehensive report documenting your methods, results, and insights.

**Verified links from the paper:**

- <https://github.com/ConnectedSystemsLab/StarCDN-Simulator> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/ConnectedSystemsLab/SpaceGEN> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** An extended StarCDN simulation framework with failure modeling, evaluation results, and a detailed report discussing implications and mitigation.

**Stretch goal:** Incorporate machine learning-based adaptive caching or request routing to dynamically respond to failures and improve performance.

_The authors released no direct implementation of StarCDN itself; the intermediate and advanced projects rely on third-party simulators and synthetic trace generators that approximate the paper's environment._
