---
title: "527 · Blockplane: A Global-Scale Byzantizing Middleware — Faisal Nawab"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-faisal-nawab"
source_hash: "baace66fdd3560167e465b14bbc6975ee2edbe4c1dcdaca3347e5e16e54bf018"
sequence: 527
generator: "outreach-garden: managed"
---

# 527 · Blockplane: A Global-Scale Byzantizing Middleware

## At a glance

- **Professor:** Faisal Nawab
- **Institution:** Univ. of California - Irvine
- **Paper:** [Blockplane: A Global-Scale Byzantizing Middleware](https://nawab.me/Uploads/Blockplane_ICDE2019_cr.pdf)
- **Authors:** Faisal Nawab, Mohammad Sadoghi
- **Year:** 2019

## Paper overview

Blockplane is a middleware designed to make existing distributed systems tolerate Byzantine failures, which include arbitrary faults like malicious attacks and software errors. It achieves this by pushing Byzantine fault tolerance to the communication layer, using a hierarchical, locality-aware design to reduce wide-area communication overhead. Blockplane exposes interfaces for committing state changes and communication, allowing developers to transform benign distributed protocols into Byzantine fault-tolerant ones with manageable complexity and improved performance in global-scale environments.

### Why it matters

**Research problem:** Developing Byzantine fault-tolerant protocols is complex and incurs high communication overhead, especially in globally distributed systems where wide-area latency is significant. Existing solutions either require redesigning applications or suffer from performance bottlenecks.

**Why it matters:** Byzantine failures model realistic and severe faults such as malicious attacks and arbitrary errors, which are critical to tolerate in applications like finance and mission-critical systems. Efficient Byzantine fault tolerance is essential for reliable global-scale distributed applications, especially with the rise of IoT and edge computing.

**Key contributions:**

- A middleware and communication infrastructure to make benign distributed protocols Byzantine fault-tolerant.
- A hierarchical locality-aware design that reduces wide-area communication overhead.
- Separation of fault-tolerance concerns between independent Byzantine failures and benign geo-correlated failures.
- A novel programming model exposing both commitment and communication interfaces to developers.
- Demonstration of transforming Paxos into a Byzantine fault-tolerant protocol using Blockplane.

## About the professor

**Faisal Nawab** — Univ. of California - Irvine.

Research interests: Edge-Cloud Data Management (ECDM), IoT, edge applications, energy-efficient data systems, decentralization, distributed data management

### Research links

- [Faculty/profile page](http://nawab.me)
- [Resolved homepage](https://nawab.me/main/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=oMHn13QAAAAJ)
- [DBLP](https://dblp.org/pers/hd/n/Nawab:Faisal)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Byzantine Fault Tolerance
**The paper assumes:** distributed systems fault tolerance, Byzantine fault tolerance protocols, consensus algorithms
**Already in this field?** Skip this entirely if you already understand Byzantine fault tolerance and consensus protocols in distributed systems.

This background focuses on Byzantine Fault Tolerance (BFT), a foundational concept for understanding the Blockplane middleware's approach to making distributed systems resilient against arbitrary and malicious faults. The rigorous course offers a deep dive into distributed systems and consensus protocols including Byzantine fault tolerance, while the fast track provides a concise, focused introduction to practical BFT concepts and PBFT, suitable for quickly grasping the essentials before reading the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [UMass CS677: Distributed Systems - Spring 23](https://www.youtube.com/playlist?list=PLacuG5pysFbCQ0o0D_uiF1WV05hvGhM1J) — UMass OS · 28 videos · 35.7h across 28 episodes

**Watch only this:** Lecture 19: Byzantine Fault Tolerance (about 76 minutes) — this lecture covers the core Byzantine fault tolerance concepts needed to understand the paper's middleware design and its comparison to PBFT.

*Why it unblocks this paper:* UMass CS677 (Spring 23) includes a dedicated lecture on Byzantine Fault Tolerance (Lecture 19) and related consensus topics, providing a rigorous, university-level foundation directly relevant to the paper's Byzantine fault tolerance design and performance trade-offs.

*If you want all of it:* All 28 lectures, about 35.7 hours — for comprehensive understanding of distributed systems, consensus, and fault tolerance.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Practical Fault Tolerance: A Comprehensive Course on PBFT - Fall 2024](https://www.youtube.com/playlist?list=PLJnEiCFA9YRmbuLimCUd9L2EmABNaVMNJ) — ExpoLab at UC Davis · 10 videos · 7.4h across 10 episodes

**Watch only this:** Episodes 1-4: On Consensus and PBFT Commitment Protocol (about 3 hours total) — these episodes cover the fundamentals of Byzantine consensus and PBFT commitment, providing a quick yet thorough grounding for understanding Blockplane's contributions.

*Why it unblocks this paper:* The 'Practical Fault Tolerance: A Comprehensive Course on PBFT' playlist offers a concise, well-structured introduction to Byzantine fault tolerance and PBFT protocols, directly aligned with the paper's focus on improving PBFT-like protocols with middleware.

*If you want all of it:* All 10 episodes, about 7.4 hours — for a complete practical overview of PBFT and Byzantine fault tolerance.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Blockplane middleware for Byzantine fault tolerance, start with foundational knowledge on distributed consensus protocols and Byzantine fault tolerance models, as these form the theoretical basis for the paper's contributions. Next, explore hierarchical locality-aware system design principles to grasp the middleware's optimization strategies. Then, study middleware design approaches for fault tolerance to appreciate the separation of concerns in Blockplane. Finally, focus on the core concept of Blockplane's middleware design and its hierarchical Byzantine fault tolerance approach, prioritizing the authors' own talk if available.

### Distributed consensus protocols lecture *(prerequisite)*
Distributed consensus protocols like Paxos and Raft are fundamental to understanding how distributed systems achieve agreement despite failures. This knowledge is essential to appreciate how Blockplane transforms benign consensus protocols into Byzantine fault-tolerant ones.

*How the paper uses it:* Blockplane demonstrates transforming Paxos into a Byzantine fault-tolerant protocol, so understanding consensus protocols is foundational.

▶ [UMass CS677 (Spring'24) - Lecture 19 - Distributed consensus, paxos, RAFT](https://www.youtube.com/watch?v=Ht38U8V3RPA) — UMass OS · 1:02:27 · Streamed 2 years ago

### Byzantine fault tolerance lecture *(prerequisite)*
Byzantine fault tolerance is the fault model Blockplane addresses, involving arbitrary and malicious faults. Understanding the Byzantine generals problem and classical BFT protocols is critical to grasp the challenges Blockplane overcomes.

*How the paper uses it:* Blockplane aims to provide Byzantine fault tolerance efficiently at global scale, so understanding BFT fundamentals is necessary.

▶ [Byzantine Fault Tolerance Meets Flexibility - Dahlia Malkhi - CES Summit '19](https://www.youtube.com/watch?v=HCwRpOjgP3Q) — MIT Digital Currency Initiative · 36:59 · 6 years ago

### Hierarchical locality-aware systems seminar *(prerequisite)*
Hierarchical and locality-aware system designs reduce communication overhead by grouping nodes based on physical or network proximity. This concept underpins Blockplane's approach to minimizing wide-area Byzantine communication costs.

*How the paper uses it:* Blockplane uses a hierarchical locality-aware design to reduce wide-area communication overhead in Byzantine fault tolerance.

▶ [COS 217 Fall 2020 Lecture16 - Storage Hierarchy, Caching, and Locality](https://www.youtube.com/watch?v=4YeRe60KWTc) — Princeton COS 217 · 38:53 · 5 years ago

### Middleware design for fault tolerance lecture *(prerequisite)*
Middleware that separates fault tolerance from application logic allows easier development and modular fault handling. Understanding middleware approaches to fault tolerance helps contextualize Blockplane's novel middleware design.

*How the paper uses it:* Blockplane introduces middleware that handles Byzantine fault tolerance at the communication layer, separating it from application logic.

▶ [Lecture 6: Fault Tolerance: Raft (1)](https://www.youtube.com/watch?v=64Zp3tzNbpE) — MIT 6.824: Distributed Systems · 1:20:01 · 6 years ago

### Blockplane hierarchical Byzantine fault tolerance
Understanding hierarchical Byzantine fault tolerance mechanisms is key to grasping how Blockplane achieves efficient global-scale Byzantine fault tolerance by localizing communication and masking failures.

*How the paper uses it:* Blockplane's central method is a hierarchical Byzantine fault tolerance design that reduces wide-area communication overhead.

▶ [UMass CS677 (Spring'24) - Lecture 18 - Byzantine Fault Tolerance (BFT)](https://www.youtube.com/watch?v=CgeW_YbriB8) — UMass OS · 1:10:43 · Streamed 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the foundational concepts needed to understand Blockplane, a middleware for Byzantine fault tolerance in global-scale distributed systems. Start by grasping the basics of Byzantine fault tolerance to understand the fault model Blockplane addresses, then learn about distributed consensus protocols like Paxos and PBFT that Blockplane builds upon. Next, explore hierarchical locality-aware system design to see how Blockplane reduces communication overhead, followed by middleware design principles for fault tolerance. Finally, dive into Blockplane's specific hierarchical Byzantine fault tolerance approach to understand its novel contributions.

### Byzantine fault tolerance lecture *(prerequisite)*
Learn what Byzantine faults are—failures where nodes may act arbitrarily or maliciously—and why tolerating them is critical for reliable distributed systems. This concept explains the Byzantine Generals Problem and introduces classical Byzantine fault tolerance protocols like PBFT.

*How the paper uses it:* Blockplane is designed to tolerate Byzantine failures, so understanding this fault model is essential to grasp its purpose.

▶ [Byzantine Generals Problem and Byzantine Fault Tolerance Explained in Hindi l Blockchain Series](https://www.youtube.com/watch?v=3-qCkMzH4Fg) — 5 Minutes Engineering · 8:31 · 3 years ago

### Distributed consensus protocols lecture *(prerequisite)*
Understand how distributed systems achieve agreement on shared state despite failures, focusing on consensus algorithms like Paxos and Raft. These protocols form the benign baseline that Blockplane extends to tolerate Byzantine faults.

*How the paper uses it:* Blockplane transforms benign consensus protocols such as Paxos into Byzantine fault-tolerant ones, so knowing consensus basics is key.

▶ ["Raft - The Understandable Distributed Protocol" by Ben Johnson (2013)](https://www.youtube.com/watch?v=ro2fU8_mr2w) — Strange Loop Conference · 36:33 · 5 years ago

### Hierarchical locality-aware systems seminar *(prerequisite)*
Explore how hierarchical and locality-aware designs optimize system performance by grouping nodes to reduce costly wide-area communication. This principle helps systems scale efficiently across geographically distributed datacenters.

*How the paper uses it:* Blockplane uses a hierarchical locality-aware design to minimize wide-area Byzantine communication overhead.

▶ [COS 217 Fall 2020 Lecture16 - Storage Hierarchy, Caching, and Locality](https://www.youtube.com/watch?v=4YeRe60KWTc) — Princeton COS 217 · 38:53 · 5 years ago

### Middleware design for fault tolerance lecture *(prerequisite)*
Learn how middleware can separate fault tolerance concerns from application logic, simplifying development and improving reliability. This includes how middleware manages communication and state replication transparently.

*How the paper uses it:* Blockplane is a middleware layer that handles Byzantine fault tolerance at the communication level, abstracting complexity from applications.

▶ [Lecture 6: Fault Tolerance: Raft (1)](https://www.youtube.com/watch?v=64Zp3tzNbpE) — MIT 6.824: Distributed Systems · 1:20:01 · 6 years ago

## Already in your library

- [Distributed Consensus: Definition & Properties of Consensus, Steps & Fault-Tolerance in Consen. ALG.](https://www.youtube.com/watch?v=wMrLPtyU_dE) — also for: Obfuscated Consensus (James Aspnes)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Blockplane's approach to Byzantine fault tolerance middleware. The beginner project focuses on reproducing the hierarchical locality-aware communication design in a simplified simulation. The intermediate project involves implementing a simplified Byzantine fault-tolerant consensus protocol inspired by Blockplane's Blockplane-Paxos design and comparing its latency to a benign baseline. The advanced project extends Blockplane by exploring developer usability improvements, addressing the programming complexity limitation by building a verification routine generator to ease adoption.

### Beginner — Simulate Blockplane's Hierarchical Locality-Aware Communication
*Effort: a weekend, ~8 hours*

You build a discrete-event simulation of a hierarchical distributed system with multiple datacenters, each containing local nodes. The simulation models communication delays and Byzantine fault masking within datacenters versus wide-area communication between datacenters. You implement the locality-aware communication pattern described in Blockplane to show how local communication reduces wide-area messaging.

**Why it shows you understood the paper:** This project demonstrates your grasp of Blockplane's core design principle of hierarchical locality-aware Byzantine fault tolerance and its impact on reducing wide-area communication overhead.

**Grounded in:** Blockplane uses a hierarchical locality-aware design where local nodes mask Byzantine failures, and global communication mimics benign protocols.

**Tech stack:** Python 3.11, SimPy (discrete-event simulation library)

**Data:** No external dataset needed; you simulate network latencies and node behaviors based on typical datacenter and WAN RTT values described in the paper.

**Build it:**

1. Set up a simulation environment with multiple datacenters, each containing a configurable number of nodes.
2. Model local communication within datacenters with low latency and wide-area communication between datacenters with higher latency.
3. Implement Byzantine fault masking locally by simulating faulty nodes and their effect on communication.
4. Measure and log the number and latency of messages sent locally versus wide-area.
5. Visualize or report the communication overhead reduction due to locality-aware design.

**Ships as:** A Python simulation repository with scripts to run scenarios and a README explaining the hierarchical communication model and results showing reduced wide-area messaging.

**Stretch goal:** Add a simple visualization dashboard showing message flows and latencies between datacenters and nodes.

### Intermediate — Implement Blockplane-Paxos Byzantine Fault-Tolerant Consensus
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of Blockplane's middleware to augment a benign Paxos consensus protocol with Byzantine fault tolerance using separate commit and communication interfaces. You simulate a small global deployment with multiple datacenters and compare the latency of your Byzantine-tolerant Paxos against a benign Paxos baseline under fault injection.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of transforming benign consensus protocols into Byzantine fault-tolerant ones using Blockplane's middleware design and measure the latency improvements over traditional Byzantine protocols.

**Grounded in:** Demonstration of transforming Paxos into a Byzantine fault-tolerant protocol using Blockplane; Blockplane-paxos shows 16-78% lower latency than PBFT in global-scale deployments.

**Tech stack:** Python 3.11, asyncio for networking simulation, pytest for testing

**Data:** No external dataset; you simulate network latencies and node failures based on parameters from the paper's global datacenter deployment scenarios.

**Build it:**

1. Implement a benign Paxos consensus protocol simulation with multiple nodes across datacenters.
2. Design and implement Blockplane's middleware interfaces: separate log-commit and send/receive communication APIs.
3. Augment the benign Paxos with Byzantine fault tolerance by adding verification routines and hierarchical communication.
4. Simulate Byzantine faults and measure consensus latency under different fault tolerance levels.
5. Compare latency results against the benign Paxos baseline and document findings.

**Ships as:** A Python repository with the Blockplane-Paxos implementation, test scripts simulating faults, and a README reporting latency comparisons and design explanations.

**Stretch goal:** Extend the simulation to include leader election and recovery mechanisms as described in Blockplane.

### Advanced — Verification Routine Generator to Ease Blockplane Programming Complexity
*Effort: 3+ weeks*

You build a developer tool that generates verification routine templates for applications using Blockplane's commit and communication interfaces. This tool parses application state transition definitions and automatically produces skeleton verification code to reduce programming complexity and errors. You evaluate the tool by applying it to a sample consensus protocol and measuring developer effort reduction.

**Why it shows you understood the paper:** This project addresses a key limitation of Blockplane—programming complexity due to separate commit and communication interfaces and verification routines—by proposing and prototyping a usability improvement aligned with the paper's future directions.

**Grounded in:** Programming with Blockplane is more complex than traditional SMR due to separate commit and communication interfaces and the need for verification routines; future directions include exploring optimizations to reduce verification routine complexity and improve developer usability.

**Tech stack:** TypeScript, Node.js, React (optional UI), YAML or JSON for state transition definitions

**Data:** No external dataset; you create example state machine definitions and protocol specifications as input to the generator.

**Build it:**

1. Design a schema to describe application state transitions and communication events in a structured format.
2. Implement a code generator that reads the schema and outputs verification routine skeletons compatible with Blockplane's APIs.
3. Build example state machine definitions for a simple consensus protocol.
4. Generate verification routines using your tool and integrate them into a Blockplane-like middleware simulation.
5. Evaluate the tool by documenting reduced manual coding effort and potential error reduction.
6. Optionally, build a minimal UI to assist developers in defining state transitions.

**Ships as:** A developer tool repository with code generator scripts, example inputs, generated verification routines, and a README explaining usage and benefits.

**Stretch goal:** Integrate the tool with a real Blockplane middleware implementation or extend it to support adaptive fault tolerance configurations.
