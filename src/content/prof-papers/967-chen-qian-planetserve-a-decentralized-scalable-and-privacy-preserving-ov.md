---
title: "967 · PlanetServe: A Decentralized, Scalable, and Privacy-Preserving Overlay for Democratizing Large Language Model Serving — Chen Qian"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chen-qian"
source_hash: "2e9230b3d0c71f902a770fea2e957cf933ab4e3a7fde568f49eca0b6def99d0d"
sequence: 967
generator: "outreach-garden: managed"
---

# 967 · PlanetServe: A Decentralized, Scalable, and Privacy-Preserving Overlay for Democratizing Large Language Model Serving

## At a glance

- **Professor:** Chen Qian
- **Institution:** Univ. of California - Santa Cruz
- **Paper:** [PlanetServe: A Decentralized, Scalable, and Privacy-Preserving Overlay for Democratizing Large Language Model Serving](https://arxiv.org/pdf/2504.20101)
- **Authors:** Fei Fang, Yifan Hua, Shengze Wang, Ruilin Zhou, Yi Liu, Chen Qian, Xiaoxue Zhang
- **Year:** 2026

## Paper overview

PlanetServe is a decentralized network infrastructure designed to enable scalable, cost-efficient, and privacy-preserving serving of large language models (LLMs). It leverages computing resources volunteered by individuals and organizations to create a distributed overlay network that supports LLM deployment without relying on expensive centralized cloud services. The system ensures user anonymity, protects prompt content privacy, balances load among model-serving nodes, and verifies model correctness through a decentralized reputation system.

### Why it matters

**Research problem:** Serving large language models at scale is challenging due to high costs, limited accessibility for smaller organizations, scalability bottlenecks in centralized cloud deployments, and privacy concerns related to centralized data handling.

**Why it matters:** As open-source and cost-efficient LLMs become more prevalent, enabling scalable and affordable deployment is critical to democratize AI innovation. Current centralized cloud solutions are expensive and create privacy vulnerabilities, limiting access for independent researchers and smaller entities.

**Key contributions:**

- Design and implementation of a decentralized overlay network for LLM serving that addresses scalability, privacy, and cost-efficiency.
- Novel anonymous communication protocol combining Onion routing and S-IDA to protect user anonymity and message confidentiality with low overhead.
- Introduction of a distributed Hash-Radix tree data structure for efficient KV cache sharing and load balancing among model nodes without centralized coordination.
- A decentralized verification mechanism using probabilistic challenge prompts and reputation scores maintained by a committee of verification nodes running BFT consensus.
- Prototype implementation and evaluation demonstrating significant latency reduction and strong privacy guarantees.

## About the professor

**Chen Qian** — Professor of Biomolecular Engineering, Baskin Engineering, Univ. of California - Santa Cruz.

### Research links

- [Faculty/profile page](https://qianlabucsc.github.io)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Distributed Systems and Consensus
**The paper assumes:** distributed systems fundamentals, consensus algorithms, Byzantine fault tolerance, overlay networks, anonymous routing protocols
**Already in this field?** Skip this entirely if you already understand distributed systems concepts and consensus protocols, especially Byzantine fault tolerance and overlay network design.

This background covers distributed systems and consensus protocols, which are foundational to understanding PlanetServe's decentralized overlay network, Byzantine Fault Tolerant consensus, and privacy-preserving mechanisms. The rigorous course provides a deep dive into distributed computing concepts, algorithms, and fault tolerance, while the fast track offers a concise, intuition-driven introduction to key distributed systems principles and Byzantine fault tolerance. Choose the rigorous course for comprehensive mastery or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Distributed Computing CS-332](https://www.youtube.com/playlist?list=PLpTMNSADLSk11eV_XfoeQJYPelQsLKhg4) — Seekho Lecture TV · 27 videos · 16.6h across 27 episodes

**Watch only this:** Watch episodes W01 L01 Video01 Syllabus and Intro to DC slide 1-8 Feb 21 (8 min), W01 L01 Video02 Intro to DC Feb 25 start from 5min skip before slide 8-33 (28 min), W02 L02 Video05 Distributed Architecture slide 1-6 (6 min), W02 L02 Video06 Distributed Architecture slide 7-13 (7 min), W03-L04-Video09 Mar 11 Content Addressable Network Slide 1-30 (30 min), W05-L07-Video18 Apr 14 Chandy-Lamport Snapshot (duration not given, estimate ~30 min), W10-L12-Video 25 Paxos - Distributed Consensus (typical episode ~36 min). Total about 2.5 to 3 hours. These cover distributed architecture, overlay networks, snapshot algorithms, and consensus protocols foundational to the paper.

*Why it unblocks this paper:* This university-level course covers essential distributed computing topics including consensus algorithms, fault tolerance, and overlay networks, directly relevant to PlanetServe's decentralized verification and network design.

*If you want all of it:* 16.6 hours across 27 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Distributed Systems (www.distributedsystemscourse.com)](https://www.youtube.com/playlist?list=PLOE1GTZ5ouRPbpTnrZ3Wqjamfwn_Q5Y9A) — Distributed Systems Course · 18 videos · 4.5h across 18 episodes

**Watch only this:** Watch episodes L1: What is a distributed system? (14 min), L2: Why build a distributed system? (14 min), L6: Byzantine Fault Tolerance (14 min), L9: Paxos Simplified (14 min). Total about 1 hour. These episodes cover the basics of distributed systems, fault tolerance, and consensus protocols relevant to the paper.

*Why it unblocks this paper:* This short-form series provides clear, concise explanations of distributed systems fundamentals including Byzantine Fault Tolerance and consensus, suitable for quickly grasping the core concepts behind PlanetServe's design.

*If you want all of it:* 4.5 hours across 18 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand PlanetServe, start with foundational concepts including Byzantine fault tolerant consensus for decentralized verification, anonymous overlay networks for privacy, and distributed hash radix trees for efficient data sharing. These prerequisites build the necessary background on the system's decentralized verification, privacy-preserving communication, and data structures. Finally, study the authors' own talk on PlanetServe to grasp the integrated design, implementation, and evaluation of their novel decentralized LLM serving overlay.

### Byzantine fault tolerant consensus seminar *(prerequisite)*
This section covers Byzantine fault tolerant consensus protocols, which are fundamental to PlanetServe's decentralized verification and reputation management. Understanding Byzantine Paxos and PBFT consensus mechanisms provides insight into how the system ensures correctness and robustness despite malicious or faulty nodes.

*How the paper uses it:* PlanetServe uses a committee of verification nodes running a BFT consensus protocol to maintain model node reputations and ensure data consistency.

▶ [Dr. TLA+ Series - Byzantine Paxos](https://www.youtube.com/watch?v=XnfAZHkyOy4) — Microsoft Research · 1:01:14 · 9y ago

### Anonymous overlay networks lecture *(prerequisite)*
This section explains anonymous overlay networks, focusing on privacy-preserving communication techniques such as Onion routing and secure information dispersal. These concepts are critical to understanding how PlanetServe protects user anonymity and prompt content privacy in its decentralized overlay.

*How the paper uses it:* PlanetServe's novel anonymous communication protocol combines Onion routing and S-IDA to protect user anonymity and message confidentiality.

▶ [Secure Trusted Overlay Networks for Robust Privacy-Protecting Communication](https://www.youtube.com/watch?v=3YgIr6uavYU) — Microsoft Research · 48:09 · 10y ago

### Distributed hash radix tree lecture *(prerequisite)*
This section introduces distributed hash radix trees and related data structures for efficient key-value cache sharing and load balancing. Understanding these data structures is essential to grasp how PlanetServe achieves efficient distributed cache management without centralized coordination.

*How the paper uses it:* PlanetServe introduces a distributed Hash-Radix tree data structure for efficient KV cache sharing and load balancing among model nodes.

▶ [CMU Advanced Database Systems - 08 OLTP Indexes: Trie Data Structures (Spring 2019)](https://www.youtube.com/watch?v=gjY13VrXcBo) — CMU Database Group · 1:21:11 · 7y ago

### PlanetServe decentralized LLM serving talk *(paper-talk search result; attribution unverified)*
This is the authors' own presentation of PlanetServe, providing direct insight into their design rationale, system architecture, privacy mechanisms, verification protocols, and evaluation results. Watching this talk offers the most authoritative and comprehensive understanding of the paper's contributions.

*How the paper uses it:* This talk is given by the paper's authors and covers the design and evaluation of PlanetServe, the decentralized overlay for LLM serving.

▶ [The SVCACA Cloud Computing Forum talk by Chin Fang, Founder, Zettar Inc.](https://www.youtube.com/watch?v=EWUPvCA42w0) — zettarinfo · 13:46 · 14y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand PlanetServe, start by learning about overlay networks and their role in building privacy-preserving decentralized systems. Next, grasp Byzantine fault tolerant consensus, which underpins the system's decentralized verification and reputation mechanisms. Then, explore distributed hash radix trees to see how efficient data sharing and load balancing are achieved. Finally, dive into the core concept of decentralized large language model serving to appreciate how PlanetServe combines these elements for scalable, private, and cost-effective LLM deployment.

### Anonymous overlay networks lecture *(prerequisite)*
Overlay networks are logical networks built on top of physical networks, enabling flexible routing and privacy features like anonymous communication. Understanding how overlay networks work, especially anonymous routing techniques like Onion routing combined with Secure Information Dispersal Algorithm (S-IDA), is essential to grasp how PlanetServe protects user anonymity and message confidentiality.

*How the paper uses it:* PlanetServe uses a novel anonymous communication protocol combining Onion routing and S-IDA to ensure privacy and reliability in its decentralized overlay network.

▶ [What is Underlay Network and Overlay Network?](https://www.youtube.com/watch?v=AbImMmhP6kY) — I-MEDITA (IT Training Academy) · 18:53 · 4y ago

### Byzantine fault tolerant consensus seminar *(prerequisite)*
Byzantine fault tolerant (BFT) consensus protocols allow a distributed system to agree on a single state even when some nodes behave maliciously or fail arbitrarily. Learning the basics of BFT consensus helps understand how PlanetServe maintains trustworthy verification and reputation scores despite adversarial nodes.

*How the paper uses it:* PlanetServe’s verification nodes run a BFT consensus protocol to maintain consistent and authentic reputation scores for model-serving nodes.

▶ [PBFT Explained: Byzantine Fault Tolerance for Beginners](https://www.youtube.com/watch?v=KPmZtBjUL_k) — CodeLucky · 5:20 · 10mo ago

### Distributed hash radix tree lecture *(prerequisite)*
A distributed hash radix tree is a data structure that efficiently organizes and shares key-value caches across nodes without centralized control. Understanding this structure clarifies how PlanetServe achieves efficient KV cache sharing and load balancing among model nodes.

*How the paper uses it:* PlanetServe introduces a distributed Hash-Radix tree to represent aggregated KV cache state, enabling efficient search and load balancing among model nodes.

▶ [Kademlia, Explained](https://www.youtube.com/watch?v=1QdKhNpsj8M) — number 0 · 24:22 · 3y ago

### Decentralized large language model serving seminar
Decentralized LLM serving involves distributing the inference workload across multiple nodes to improve scalability, reduce costs, and preserve privacy. This concept ties together the previous topics and shows how PlanetServe leverages decentralized resources to serve large language models effectively.

*How the paper uses it:* PlanetServe is a decentralized overlay network designed specifically for scalable, privacy-preserving serving of large language models using volunteered computing resources.

▶ [How to Serve Big LLM over Decentralized GPUs? | Parallax + Dynamic Programming](https://www.youtube.com/watch?v=xFADPHDHLhI) — Deep Learning with Yacine · 37:07 · 8mo ago

## Already in your library

- [Understanding the Particle Filter | | Autonomous Navigation, Part 2](https://www.youtube.com/watch?v=NrzmH_yerBU) — also for: Imaging Hidden Objects with Consumer LiDAR via Motion Induced Sampling (Ramesh Raskar)
- [Peer-to-Peer Architectural Model: Overlay Network, Unstructured & Structured P2P, Advtgs & Disadvtgs](https://www.youtube.com/watch?v=5TlXplq3wv4) — also for: Managing Edge Resources at Scale: A Peer-to-Peer CDN for On-Demand Video Streaming (Klara Nahrstedt)
- [Lecture 6: Fault Tolerance: Raft (1)](https://www.youtube.com/watch?v=64Zp3tzNbpE) — also for: Blockplane: A Global-Scale Byzantizing Middleware (Faisal Nawab)
- [Byzantine Fault Tolerance Meets Flexibility - Dahlia Malkhi - CES Summit '19](https://www.youtube.com/watch?v=HCwRpOjgP3Q) — also for: Blockplane: A Global-Scale Byzantizing Middleware (Faisal Nawab)
- [Byzantine Generals Problem and Byzantine Fault Tolerance Explained in Hindi l Blockchain Series](https://www.youtube.com/watch?v=3-qCkMzH4Fg) — also for: Blockplane: A Global-Scale Byzantizing Middleware (Faisal Nawab)
- [L-6.1: What is hashing with example | Hashing in data structure](https://www.youtube.com/watch?v=W5q0xgxmRd8) — also for: Linear Hashing Is Optimal (David Zuckerman)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Large Language Models from scratch](https://www.youtube.com/watch?v=lnA9DMvHtfI) — also for: Vipera: Blending Visual and LLM-Driven Guidance for Systematic Auditing of Text-to-Image Generative AI (Adam Perer)
- [What Are Small Language Models? | The AI Research Lab - Explained](https://www.youtube.com/watch?v=1Rlr2OxR678) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of PlanetServe's decentralized, privacy-preserving LLM serving overlay. The beginner project focuses on reproducing and visualizing the anonymous routing anonymity metric, the intermediate project builds and extends the authors' prototype to evaluate latency and load balancing, and the advanced project tackles a stated limitation by designing a latency-optimized anonymous routing variant for interactive applications.

### Beginner — Anonymity Metric Visualization for PlanetServe Routing
*Effort: a weekend, ~8 hours*

You build a small simulation and visualization tool that reproduces the normalized entropy anonymity metric used in PlanetServe to measure user anonymity under different fractions of malicious nodes. The tool will implement a simplified version of the anonymous overlay routing combining Onion routing and S-IDA principles and compute entropy-based anonymity scores to compare against baseline Onion routing and Garlic Cast metrics.

**Why it shows you understood the paper:** This project shows you understand PlanetServe's novel anonymous routing design and how anonymity is quantitatively measured and compared to prior methods, a core privacy contribution of the paper.

**Grounded in:** PlanetServe provides strong user anonymity outperforming Onion routing and Garlic Cast, with normalized entropy reaching 0.965 at 5% malicious nodes.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** Synthetic network topology and node behavior simulated to match the paper's anonymity evaluation setup.

**Build it:**

1. Implement a simplified anonymous overlay routing simulation combining Onion routing and S-IDA concepts.
2. Simulate a network with varying fractions of malicious nodes (e.g., 0%, 5%, 10%).
3. Compute normalized entropy anonymity scores for PlanetServe routing, Onion routing, and Garlic Cast baselines.
4. Visualize the anonymity scores as a function of malicious node fraction using matplotlib.
5. Write a README explaining the metric, simulation assumptions, and results.

**Ships as:** A Jupyter Notebook or Python script with plots showing anonymity metric comparisons and a README documenting the approach and findings.

**Stretch goal:** Add interactive sliders to vary network parameters and visualize real-time changes in anonymity scores.

### Intermediate — Extending PlanetServe Prototype for Latency and Load Balancing Evaluation
*Effort: 2-3 weekends, ~20 hours*

You clone and run the PlanetServe open-source prototype from https://github.com/fffeifang/PlanetServe.git, then extend it to measure latency reduction and load balancing effects of the distributed Hash-Radix tree KV cache sharing. You implement a simple baseline without overlay forwarding for comparison and report latency metrics similar to the paper's evaluation.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' codebase, reproduce core latency results, and understand the distributed data structure and load balancing mechanisms central to PlanetServe's scalability contribution.

**Grounded in:** Latency reduction of over 50% compared to baseline designs without overlay forwarding; introduction of a distributed Hash-Radix tree for efficient KV cache sharing and load balancing.

**Tech stack:** Python 3.11, Docker, Git, Linux shell

**Data:** Use the synthetic latency and workload setup provided in the PlanetServe prototype repository for evaluation.

**Build it:**

1. Clone the PlanetServe repository and follow setup instructions to run the prototype on a local or cloud testbed.
2. Run baseline experiments without overlay forwarding to measure latency and throughput.
3. Enable the distributed Hash-Radix tree KV cache sharing and overlay forwarding features.
4. Measure and compare latency and throughput metrics between baseline and PlanetServe overlay.
5. Extend the prototype to log load distribution among model nodes and visualize load balancing effects.
6. Document the setup, experiments, and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/fffeifang/PlanetServe.git> — released by the paper's authors

**Ships as:** A forked PlanetServe prototype repository with scripts to reproduce latency and load balancing experiments, plus a report README with analysis and plots.

**Stretch goal:** Implement a simple modification to the Hash-Radix tree to simulate node churn and evaluate robustness.

### Advanced — Designing a Low-Latency Anonymous Routing Variant for Interactive LLM Serving
*Effort: 3-4 weeks, ~60 hours*

You design and prototype an extension to PlanetServe's anonymous overlay routing that reduces latency overhead for latency-sensitive interactive applications. This involves modifying the routing protocol to optimize path length and reduce cryptographic overhead while preserving strong anonymity guarantees. You evaluate trade-offs between latency, anonymity, and reliability through simulation or prototype experiments.

**Why it shows you understood the paper:** This project addresses a key limitation stated in the paper about latency overhead in interactive use cases, demonstrating deep comprehension of PlanetServe's routing design and the challenges in balancing privacy with performance.

**Grounded in:** Latency overhead from anonymous routing may be perceptible in latency-sensitive interactive applications, especially at inter-continental scales; future direction includes enhancing anonymous routing protocols to reduce latency and improve robustness.

**Tech stack:** Python 3.11, Docker, Git, NetworkX, matplotlib, Linux shell

**Data:** Synthetic network topologies and latency models simulating inter-continental overlay nodes, based on the paper's evaluation environment.

**Build it:**

1. Study the PlanetServe anonymous routing protocol combining Onion routing and S-IDA in detail.
2. Design a routing variant that reduces the number of hops or cryptographic operations per message.
3. Implement the routing variant in a simulation environment or extend the PlanetServe prototype.
4. Simulate or run experiments comparing latency, anonymity (entropy metric), and reliability against the original protocol.
5. Analyze trade-offs and document findings with plots and discussion.
6. Write a comprehensive README explaining the design, implementation, evaluation, and implications.

**Verified links from the paper:**

- <https://github.com/fffeifang/PlanetServe.git> — released by the paper's authors

**Ships as:** A prototype or simulation codebase demonstrating the new routing variant, with evaluation scripts and a detailed report README discussing trade-offs and improvements.

**Stretch goal:** Explore incentive mechanisms to encourage user nodes to participate in low-latency routing paths.
