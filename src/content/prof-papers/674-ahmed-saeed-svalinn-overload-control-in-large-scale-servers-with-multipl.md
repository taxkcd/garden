---
title: "674 · Svalinn: Overload Control in Large-Scale Servers with Multiple Resource Bottlenecks — Ahmed Saeed"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ahmed-saeed"
source_hash: "e6ebc78d6ea465905f035092fa551bd52d91c264d538fef3a939b030e72f6d5c"
sequence: 674
generator: "outreach-garden: managed"
---

# 674 · Svalinn: Overload Control in Large-Scale Servers with Multiple Resource Bottlenecks

## At a glance

- **Professor:** Ahmed Saeed
- **Institution:** Georgia Institute of Technology
- **Paper:** [Svalinn: Overload Control in Large-Scale Servers with Multiple Resource Bottlenecks](http://saeed.github.io/files/svalinn-osdi26.pdf)
- **Authors:** Bhaskar Pardeshi, Peidi Song, Ahmed Saeed
- **Year:** 2026

## Paper overview

This paper presents Svalinn, a new system to control overload in large servers that face multiple resource bottlenecks like CPU, memory bandwidth, and locks. Traditional controllers treat all requests as the same and react only to overall performance, which leads to underutilization of some resources. Svalinn separates throughput control from latency control and uses a credit-based system to admit requests while enforcing latency targets at each bottleneck. A key innovation is m_semaphore, a mechanism to explicitly control memory bandwidth usage by limiting concurrent memory-intensive requests. Svalinn improves server throughput significantly without increasing latency.

### Why it matters

**Research problem:** Modern datacenter servers face multiple resource bottlenecks simultaneously, and existing overload controllers treat applications as monoliths reacting to aggregate performance metrics. This 'single-queue fallacy' causes underutilization of uncongested resources and limits overall throughput.

**Why it matters:** As datacenter operators push servers to higher utilization, bottlenecks beyond CPU and memory capacity, such as memory bandwidth and lock contention, become critical. Inefficient overload control leads to wasted resources, increased latency, and degraded application performance, impacting cost and user experience.

**Key contributions:**

- A novel overload controller (Svalinn) that balances utilization across multiple resource bottlenecks by separating throughput and latency control.
- Introduction of m_semaphore, a lightweight API and dynamic controller to explicitly manage memory bandwidth contention.
- A utility-based credit admission controller that adapts load admission to maximize a customizable utility function.
- Implementation of Svalinn in two runtimes and integration with real-world applications (Memcached, RocksDB, DataFrame).
- Extensive evaluation demonstrating significant throughput improvements and latency control compared to state-of-the-art baselines.

## About the professor

**Ahmed Saeed** — Assistant Professor and BBISS Fellow, School of Computer Science, Georgia Institute of Technology.

Research interests: theory, design, and implementation of scalable computer networks and computer systems, including resource scheduling, congestion control, operating systems, and formal methods

### Research links

- [Faculty/profile page](https://www.cc.gatech.edu/~amsmti3)
- [Lab website](https://saeed.github.io/ansr_lab/index.html)
- [GitHub](https://github.com/GT-ANSR-Lab)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Systems Performance Modeling
**The paper assumes:** computer systems performance modeling, queueing theory, resource bottleneck analysis
**Already in this field?** Skip this entirely if you already understand performance modeling of computer systems and resource bottlenecks, including queueing and concurrency control.

To understand the Svalinn paper's approach to overload control in large-scale servers with multiple resource bottlenecks, a solid grasp of computer systems performance modeling is essential. The rigorous course option provides a deep, structured university-level treatment of performance modeling concepts, while the fast track offers a concise, focused introduction to simulation and queuing models relevant to resource contention and bottlenecks. Choose the course for comprehensive mastery, or the fast track for a quick, intuition-driven overview that covers the core principles efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [July 2022 - Introduction to Computer and Network Performance Analysis using Queuing Systems](https://www.youtube.com/playlist?list=PLOzRYVm0a65ee6CO0ZV9GkhfOG2stmG1q) — NPTEL IIT Bombay · 21 videos

**Watch only this:** Select the first 7 lectures focusing on queuing theory basics, bottleneck analysis, and performance metrics, approximately 3.5 hours total — enough to grasp key modeling concepts relevant to the paper.

*Why it unblocks this paper:* This NPTEL IIT Bombay playlist on Computer and Network Performance Analysis using Queuing Systems directly addresses performance modeling, queuing theory, and resource contention, which are foundational to understanding Svalinn's multi-bottleneck overload control approach.

*If you want all of it:* All 21 lectures, approximately 10 hours total, for a thorough understanding of queuing systems and performance analysis.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Simulation and Modeling](https://www.youtube.com/playlist?list=PLq_pd9CJ0vPTXXQZ7uVX_bMxQJxUCpxF-) — Faisal Concepts · 22 videos · 2.2h across 22 episodes

**Watch only this:** Watch episodes 1 through 10, about 50 minutes total — covering simulation basics, queuing systems, waiting times, and blocking probabilities, which form the core background needed for the paper.

*Why it unblocks this paper:* This Faisal Concepts playlist on Simulation and Modeling offers concise, clear explanations of queuing systems, traffic intensity, and blocking probability, providing an accessible introduction to performance modeling concepts critical for understanding resource bottlenecks and overload control.

*If you want all of it:* All 22 episodes, approximately 2.2 hours total, for a complete overview of simulation and queuing models.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Svalinn paper, start by building foundational knowledge on key prerequisite concepts: active queue management (AQM) for latency control, credit-based admission control for throughput regulation, memory bandwidth contention control as a critical implicit bottleneck, and multi-armed bandit algorithms that underpin dynamic tuning in Svalinn. After grasping these, focus on the core concept of multi-resource bottleneck overload control, which contextualizes the problem Svalinn addresses. Finally, watch the authors' own talk on Svalinn for a comprehensive, in-depth presentation of their novel system and contributions.

### active queue management AQM *(prerequisite)*
Active Queue Management is a fundamental technique used in Svalinn to enforce latency targets at each resource bottleneck by managing queue lengths proactively. Understanding AQM provides insight into how Svalinn separates latency control from throughput admission.

*How the paper uses it:* Svalinn uses distributed AQM policies at each bottleneck to enforce latency control independently from throughput admission.

▶ [Active Queue Management](https://www.youtube.com/watch?v=C5mDeJL3szU) — Computer Science at Karlstad University · 15:18 · 7y ago

### memory bandwidth contention control *(prerequisite)*
Memory bandwidth contention is an implicit bottleneck that traditional queue-based methods struggle to manage. Svalinn introduces m_semaphore to explicitly control concurrency of memory-intensive requests, making understanding memory bandwidth contention essential.

*How the paper uses it:* Svalinn addresses memory bandwidth contention explicitly via m_semaphore, a dynamic semaphore mechanism to limit concurrency of memory-intensive requests.

▶ [LPC2018 - Managing Memory Bandwidth Antagonism at Scale](https://www.youtube.com/watch?v=29b7n2rqWVM) — Linux Plumbers Conference · 42:12 · 7y ago

### multi-armed bandit algorithms systems *(prerequisite)*
Multi-armed bandit algorithms provide the algorithmic foundation for Svalinn's dynamic tuning of m_semaphore concurrency limits, balancing exploration and exploitation to optimize memory bandwidth usage.

*How the paper uses it:* Svalinn uses a multi-armed bandit algorithm to dynamically adjust m_semaphore capacity based on observed resource usage.

▶ [W1_L3: Immediate RL and bandits](https://www.youtube.com/watch?v=KMnAXw_WTNw) — IIT Madras - B.S. Degree Programme · 41:32 · 3y ago

### multi-resource bottleneck overload control
Managing multiple simultaneous resource bottlenecks is the central challenge addressed by Svalinn. This concept explains why traditional single-queue overload control fails and motivates Svalinn's modular approach to balancing throughput and latency across heterogeneous bottlenecks.

*How the paper uses it:* Svalinn targets the 'single-queue fallacy' by balancing utilization across multiple resource bottlenecks in large-scale servers.

▶ [Capacity, Bottlenecks & Utilization Explained — Operations Management](https://www.youtube.com/watch?v=mVWyNLnImCo) — Operations & Supply Chain Management University · 18:27 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Svalinn's approach to overload control in large-scale servers, start by learning about resource bottlenecks and how they limit system performance. Next, grasp the fundamentals of credit-based admission control and active queue management (AQM) as key mechanisms for throughput and latency control. Then, explore memory bandwidth contention control and multi-armed bandit algorithms, which underpin Svalinn's novel m_semaphore mechanism. Finally, watch the authors' own talk on Svalinn for a comprehensive view of the system.

### multi-resource bottleneck overload control *(prerequisite)*
Resource bottlenecks occur when one or more system components limit overall performance. Understanding how multiple bottlenecks interact and constrain throughput and latency is essential for managing server overload effectively.

*How the paper uses it:* Svalinn addresses the challenge of managing multiple simultaneous resource bottlenecks to improve server throughput and latency.

▶ [Capacity, Bottlenecks & Utilization Explained — Operations Management](https://www.youtube.com/watch?v=mVWyNLnImCo) — Operations & Supply Chain Management University · 18:27 · 3y ago

### credit-based admission control *(prerequisite)*
Credit-based admission control regulates how many requests enter the system to optimize throughput without causing overload. It separates throughput control from latency management by admitting requests based on available 'credits' tied to system utility.

*How the paper uses it:* Svalinn uses a utility-based credit admission controller to adaptively admit requests and maximize performance.

▶ [How to Use Credits | Lesson 33 | Complete Guide](https://www.youtube.com/watch?v=hU5cwHzm8Gs) — Mumtaz Academy · 5:05 · 1y ago

### active queue management AQM *(prerequisite)*
Active Queue Management (AQM) techniques proactively manage queues to control latency by dropping or marking packets before queues become full, thus preventing long delays and congestion.

*How the paper uses it:* Svalinn employs distributed AQM at each bottleneck to enforce latency targets independently of throughput control.

▶ [Active Queue Management](https://www.youtube.com/watch?v=C5mDeJL3szU) — Computer Science at Karlstad University · 15:18 · 7y ago

### memory bandwidth contention control *(prerequisite)*
Memory bandwidth contention happens when multiple requests compete for limited memory access, causing stalls and degraded performance. Controlling this implicit bottleneck requires specialized mechanisms beyond traditional queue management.

*How the paper uses it:* Svalinn introduces m_semaphore, a novel mechanism to explicitly control memory bandwidth contention by limiting concurrency of memory-intensive requests.

▶ [LPC2018 - Managing Memory Bandwidth Antagonism at Scale](https://www.youtube.com/watch?v=29b7n2rqWVM) — Linux Plumbers Conference · 42:12 · 7y ago

### multi-armed bandit algorithms systems *(prerequisite)*
Multi-armed bandit algorithms balance exploration and exploitation to dynamically optimize decisions under uncertainty. They are used to adaptively tune system parameters for improved performance.

*How the paper uses it:* Svalinn uses a multi-armed bandit algorithm to dynamically adjust m_semaphore capacity based on observed memory bandwidth and CPU usage.

▶ [Multi-Armed Bandits: A Cartoon Introduction - DCBA #1](https://www.youtube.com/watch?v=bkw6hWvh_3k) — Academic Gamer · 13:59 · 6y ago

### Svalinn overload control talk *(paper-talk search result; attribution unverified)*
This talk by the authors provides an in-depth overview of Svalinn’s design, key innovations like m_semaphore, and evaluation results, tying together all the concepts in the context of their system.

*How the paper uses it:* The authors’ presentation offers a comprehensive explanation of Svalinn’s approach to overload control in large-scale servers.

▶ [Trust, Control, and Digital Sovereignty with Open Source](https://www.youtube.com/watch?v=M-g0yKfng3w) — WSO2 · 26:11 · 9d ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of Svalinn's approach to overload control in servers with multiple resource bottlenecks. The beginner project reproduces a core mechanism (m_semaphore) in a simplified setting using your existing skills. The intermediate project implements the credit-based admission controller and compares throughput and latency against a baseline using the authors' open-source Svalinn code. The advanced project extends Svalinn by automating instrumentation of memory-intensive code paths, addressing a key limitation discussed in the paper.

### Beginner — Simulate m_semaphore for Memory Bandwidth Control
*Effort: a weekend, ~8 hours*

You build a simplified simulation of the m_semaphore mechanism that limits concurrency of memory-intensive requests to control memory bandwidth usage. Using a small synthetic workload, you implement a dynamic semaphore that adjusts allowed concurrency based on simulated memory bandwidth and CPU usage signals.

**Why it shows you understood the paper:** This project shows you grasp the core innovation of m_semaphore as a dynamic concurrency limiter for implicit bottlenecks like memory bandwidth, a key contribution of Svalinn.

**Grounded in:** Introduction of m_semaphore, a lightweight API and dynamic controller to explicitly manage memory bandwidth contention.

**Tech stack:** Python 3.11, matplotlib, numpy

**Data:** Synthetic workload simulating memory-intensive and CPU-intensive requests generated in code.

**Build it:**

1. Implement a simple simulation environment with two types of requests: memory-intensive and CPU-intensive.
2. Create a semaphore-like controller that limits the number of concurrent memory-intensive requests.
3. Design a feedback loop that adjusts the semaphore capacity based on simulated memory bandwidth and CPU usage metrics.
4. Run experiments varying offered load and plot throughput and resource usage over time.
5. Document how the dynamic adjustment prevents CPU stalls and improves utilization.

**Ships as:** A Python simulation with plots demonstrating how m_semaphore dynamically controls concurrency to optimize memory bandwidth usage.

**Stretch goal:** Add a simple multi-armed bandit algorithm to optimize semaphore capacity automatically based on observed metrics.

### Intermediate — Implement and Evaluate Svalinn's Credit-Based Admission Controller
*Effort: 2 weekends, ~20 hours*

You set up the Svalinn system using the authors' open-source Shenango runtime implementation and integrate it with a simple key-value store workload (e.g., Memcached). You implement the credit-based admission controller and compare throughput and tail latency against a baseline overload controller like SEDA.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the actual Svalinn codebase, reproduce key results on throughput and latency, and understand the separation of throughput and latency control in multi-resource bottleneck environments.

**Grounded in:** A utility-based credit admission controller that adapts load admission to maximize a customizable utility function.

**Tech stack:** Go, Linux, Docker, bash scripting

**Data:** Synthetic and real workloads generated by Memcached integrated with Svalinn; workload scripts from the Svalinn Shenango repository.

**Build it:**

1. Clone and build the Svalinn Shenango repository from https://github.com/GT-ANSR-Lab/svalinn-shenango.
2. Set up a test environment with Memcached and configure Svalinn's credit-based admission controller.
3. Run baseline experiments using SEDA or default admission control to measure throughput and tail latency.
4. Enable Svalinn's credit admission controller and repeat experiments under varying offered load.
5. Collect and plot throughput and latency metrics to compare performance.
6. Write a README explaining the setup, results, and how the credit controller improves resource utilization.

**Verified links from the paper:**

- <https://github.com/GT-ANSR-Lab/svalinn-shenango> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts, configuration, and results showing throughput and latency improvements using Svalinn's credit-based admission controller.

**Stretch goal:** Extend the evaluation to mixed workloads with CPU- and memory-intensive requests to observe multi-resource bottleneck balancing.

### Advanced — Automate Instrumentation for Memory-Intensive Bottleneck Detection
*Effort: 3+ weeks*

You develop a tool or framework that automates the identification and instrumentation of memory-intensive code paths to integrate with m_semaphore. This addresses the paper's limitation on manual instrumentation effort. You evaluate your tool on a small open-source application by automatically inserting instrumentation calls and measuring the impact on overload control.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of Svalinn by reducing developer burden and enabling easier adoption of memory bandwidth control in complex or legacy applications.

**Grounded in:** Extending Svalinn to handle additional implicit bottlenecks beyond memory bandwidth and automating instrumentation and bottleneck identification to reduce developer burden.

**Tech stack:** Python 3.11, clang/LLVM tooling or Python AST manipulation, bash scripting

**Data:** Open-source C/C++ or Go application codebases for testing instrumentation automation; synthetic workload scripts to generate memory-intensive requests.

**Build it:**

1. Research static and dynamic code analysis techniques to identify memory-intensive functions or code paths.
2. Implement a prototype tool that parses source code and automatically inserts calls to m_semaphore APIs around identified memory-intensive regions.
3. Integrate the instrumented application with a simplified m_semaphore controller (can reuse simulation from beginner project).
4. Run experiments to verify that instrumentation correctly limits concurrency and controls memory bandwidth usage.
5. Document the tool design, usage instructions, and evaluation results.
6. Optionally, extend the tool to support multiple programming languages or runtime environments.

**Ships as:** A repository containing the instrumentation automation tool, example instrumented applications, and evaluation demonstrating reduced manual effort and effective memory bandwidth control.

**Stretch goal:** Integrate the tool with Svalinn's full runtime to enable end-to-end automated overload control deployment.
