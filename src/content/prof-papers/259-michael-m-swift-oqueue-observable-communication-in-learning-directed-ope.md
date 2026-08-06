---
title: "259 · OQueue: Observable Communication in Learning Directed Operating Systems — Michael M. Swift"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-m-swift"
source_hash: "18fdf8d481239ed9456bd8ea2242259e8ef460cf95e69090a13e1948fee838f4"
sequence: 259
generator: "outreach-garden: managed"
---

# 259 · OQueue: Observable Communication in Learning Directed Operating Systems

## At a glance

- **Professor:** Michael M. Swift
- **Institution:** University of Wisconsin - Madison
- **Paper:** [OQueue: Observable Communication in Learning Directed Operating Systems](https://pages.cs.wisc.edu/~swift/papers/pacmi25-oqueues.pdf)
- **Authors:** Aditya Atul Tewari, Saurabh Agarwal, Sujay Yadalam, Aditya Akella, Arthur Michener Peters, Michael M. Swift, Christopher J. Rossbach
- **Year:** 2025

## Paper overview

This paper introduces OQUEUEs, a new data-plane abstraction designed to enable efficient, observable communication between operating system subsystems to facilitate machine learning-driven policies. OQUEUEs unify communication and observation, allowing policies to access data across subsystem boundaries with minimal kernel modifications, supporting notifications and historical queries. The authors demonstrate OQUEUEs' design, implementation, and use in a file-prefetcher with learned policies, showing improved performance and developer productivity.

### Why it matters

**Research problem:** Operating systems have many resource-management policies that could benefit from machine learning (ML), but the lack of a unified data-plane abstraction for efficient cross-subsystem data movement and observation hinders ML policy adoption. Current OS structures require cumbersome kernel modifications to share data across subsystems, slowing development and deployment of ML-driven policies.

**Why it matters:** ML-driven policies have shown significant benefits in cloud computing, databases, networking, and content delivery networks, but OS policies lag behind due to data access challenges. Enabling ML in OS policies can improve system performance, resource management, and adaptability to evolving hardware and applications.

**Key contributions:**

- Introduction of OQUEUEs, a novel data-plane abstraction unifying communication and observation for OS subsystems.
- Definition and implementation of strong and weak observers to support exactly-once views and historical queries respectively.
- Design of a declarative interface allowing dynamic attachment of producers, consumers, and observers with minimal overhead when unused.
- Implementation of OQUEUEs in Linux userspace and the Rust-based Asterinas kernel.
- Demonstration of OQUEUEs enabling rapid development and deployment of ML-driven OS policies, specifically a file-prefetcher with learned policies.

## About the professor

**Michael M. Swift** — Professor, Computer Sciences Department, University of Wisconsin - Madison.

Research interests: hardware/operating system boundary, including virtual memory, persistence and storage, new compute technologies, and device drivers.

### Research links

- [Faculty/profile page](http://pages.cs.wisc.edu/~swift)
- [Professor website](https://pages.cs.wisc.edu/~swift/index.html)
- [Lab website](http://scail.cs.wisc.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the OQueue paper, start by building foundational knowledge on operating system data-plane abstractions and kernel message passing mechanisms, which underpin OQueue's design. Next, study the observer pattern in systems software to grasp the semantics of strong and weak observers in OQueue. Finally, focus on the core concept by reviewing the authors' own talk or closely related advanced talks about OQueue and its role in enabling machine learning-driven OS policies.

### Operating system data-plane abstractions *(prerequisite)*
Understanding data-plane abstractions in operating systems is essential to grasp how OQUEUE unifies communication and observation across OS subsystems. These abstractions separate data handling from control logic, a foundational idea for OQUEUE's design.

*How the paper uses it:* OQUEUE builds on OS data-plane abstractions to provide a unified primitive for cross-subsystem communication and observation.

▶ [Control Plane Abstractions](https://www.youtube.com/watch?v=vMgDSTWpnqU) — NPTEL-NOC IITM · 3 years ago

### Kernel message passing mechanisms *(prerequisite)*
Kernel message passing is a core mechanism for inter-process and inter-subsystem communication in operating systems. Understanding these mechanisms is critical to appreciate how OQUEUE implements efficient, lock-free message passing with observer semantics.

*How the paper uses it:* OQUEUE extends traditional kernel message passing by integrating observer patterns for efficient data sharing and observation.

▶ [Message Passing Systems (Part 1)](https://www.youtube.com/watch?v=LuuSXWkDJOo) — Neso Academy · 7 years ago

### Observer pattern in systems software *(prerequisite)*
The observer pattern is a software design pattern that allows objects to be notified of state changes in other objects. This pattern underlies OQUEUE's strong and weak observer semantics, enabling exactly-once message views and historical queries.

*How the paper uses it:* OQUEUE's novel support for strong and weak observers directly applies the observer pattern to OS communication primitives.

▶ [L13: Observer Pattern | Design Patterns](https://www.youtube.com/watch?v=N7qNtyHTh5c) — CodeNCode · 10 months ago

### Machine learning driven OS policies
Machine learning-driven OS policies motivate the need for OQUEUE by demonstrating how ML can improve resource management and system performance. Understanding this context clarifies why efficient, observable communication is crucial.

*How the paper uses it:* OQUEUE enables rapid development and deployment of ML-driven OS policies by providing efficient cross-subsystem data sharing and observation.

▶ [ML applications in Linux kernel - Viacheslav Dubeyko (IBM)](https://www.youtube.com/watch?v=E7q0SKeniXU) — Linux Plumbers Conference · 41:25

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand OQUEUEs and their role in enabling machine learning-driven operating system policies, start by learning foundational concepts of operating system data-plane abstractions and kernel message passing mechanisms. Then, grasp the observer pattern in systems software, which underpins OQUEUEs' observation capabilities. Finally, explore the core idea of OQUEUEs as a unified communication and observation primitive in OS subsystems, followed by context on how machine learning can improve OS policies.

### Operating system data-plane abstractions *(prerequisite)*
Data-plane abstractions in operating systems separate the handling of data (fast path) from control logic, enabling efficient processing and modular design. Understanding this helps grasp how OQUEUEs unify communication and observation across OS subsystems with minimal kernel changes.

*How the paper uses it:* OQUEUEs build on data-plane abstractions to provide a unified communication and observation primitive for OS subsystems.

▶ [Control Plane Abstractions](https://www.youtube.com/watch?v=vMgDSTWpnqU) — NPTEL-NOC IITM · 3 years ago

### Kernel message passing mechanisms *(prerequisite)*
Message passing is a fundamental mechanism for inter-process and inter-subsystem communication in operating systems, allowing asynchronous data exchange without shared memory. Knowing this is essential to understand how OQUEUEs implement efficient cross-subsystem communication.

*How the paper uses it:* OQUEUEs extend kernel message passing with observer semantics to enable efficient data sharing and observation.

▶ [Message Passing Systems (Part 1)](https://www.youtube.com/watch?v=LuuSXWkDJOo) — Neso Academy · 7 years ago

### Observer pattern in systems software *(prerequisite)*
The observer pattern is a software design pattern where objects (observers) watch another object (subject) and get notified of changes. This pattern underlies OQUEUEs' support for strong and weak observers to view messages exactly once or query history.

*How the paper uses it:* OQUEUEs implement strong and weak observers based on the observer pattern to provide flexible message observation.

▶ [Observer Design Pattern Explained | Real-Life Use Case + Code Example](https://www.youtube.com/watch?v=Jpmp4GY8r3Q) — Coder Army · 28:31 · 1 year ago

### Machine learning driven OS policies
Machine learning can improve OS resource management policies by adapting to workload patterns and hardware changes. Understanding this context clarifies why OQUEUEs are valuable for enabling ML-driven policies in operating systems.

*How the paper uses it:* OQUEUEs facilitate rapid development and deployment of ML-driven OS policies by providing efficient data sharing and observation.

▶ [ML applications in Linux kernel - Viacheslav Dubeyko (IBM)](https://www.youtube.com/watch?v=E7q0SKeniXU) — Linux Plumbers Conference · 41:25


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the OQUEUE abstraction from the paper. The beginner project recreates a core mechanism of OQUEUEs—combining message passing with observer semantics—using familiar tools. The intermediate project implements a simplified OQUEUE-inspired queue with observer support and benchmarks its overhead compared to a baseline queue. The advanced project extends the OQUEUE concept by exploring integration with OS scheduler primitives to reduce synchronization overhead, addressing a key limitation and future direction from the paper.

### Beginner — Simulate OQUEUE Strong and Weak Observers in Userspace
*Effort: a weekend, ~8 hours*

You build a userspace simulation of an OQUEUE-like queue supporting strong observers (exactly-once message views) and weak observers (historical queries) using lock-free ring buffers. This project recreates the core abstraction of unified communication and observation by implementing producer, consumer, and observer roles with minimal synchronization.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental OQUEUE abstraction of combining message passing with observer semantics and the difference between strong and weak observers, which is central to the paper's contribution.

**Grounded in:** Introduction of OQUEUEs, a novel data-plane abstraction unifying communication and observation for OS subsystems; Definition and implementation of strong and weak observers to support exactly-once views and historical queries respectively.

**Tech stack:** C++, Linux userspace, POSIX threads

**Data:** Synthetic message streams generated in userspace to simulate OS subsystem communication.

**Build it:**

1. Implement a lock-free ring buffer supporting multiple producers and consumers.
2. Add support for strong observers that receive exactly-once views of messages.
3. Add support for weak observers that can query historical messages from the buffer.
4. Write test programs simulating producers sending messages, consumers receiving them, and observers querying or receiving notifications.
5. Measure basic throughput and correctness of message delivery and observation.

**Ships as:** A GitHub repo with C++ code implementing the OQUEUE-inspired queue and observers, test scripts demonstrating usage, and a README explaining the abstraction and results.

**Stretch goal:** Add a simple notification mechanism where observers get callbacks on new messages without polling.

### Intermediate — Reimplement OQUEUE Data-Plane Abstraction and Benchmark Overhead
*Effort: 2 weekends, ~20 hours*

You implement a simplified OQUEUE data-plane abstraction in Linux userspace, supporting multi-producer multi-consumer queues with strong and weak observers. You benchmark the overhead compared to the rigtorp MPMCQueue baseline and demonstrate scalability with increasing observers.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's core method and reproduce its key performance claim of ~12% overhead compared to state-of-the-art queues without observers, demonstrating comprehension of the design and evaluation.

**Grounded in:** A preliminary, unoptimized implementation of OQUEUEs shows an average-case overhead of 12% over that of multi-producer, multi-consumer queues; RPC throughput remains stable with increasing numbers of strong and weak observers, demonstrating scalability.

**Tech stack:** C++, Linux userspace, POSIX threads, Google Benchmark or similar

**Data:** Synthetic message workloads simulating OS subsystem communication; no external datasets needed.

**Build it:**

1. Study and understand the rigtorp MPMCQueue implementation as a baseline ((link removed — unverified)).
2. Implement an OQUEUE-inspired queue adding support for strong and weak observers using lock-free ring buffers.
3. Write benchmark tests comparing throughput and latency of your queue with and without observers against the baseline MPMCQueue.
4. Analyze how throughput changes as you increase the number of observers.
5. Document results and compare to the paper's reported ~12% overhead.

**Verified links from the paper:**

- <https://github.com/rigtorp/SPSCQueue> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with your OQUEUE-inspired queue implementation, benchmark code, performance graphs, and a README discussing results and comparison to the paper.

**Stretch goal:** Extend the implementation to support yield-waiting synchronization and measure latency tradeoffs.

### Advanced — Prototype OQUEUE-Aware Scheduler Integration to Reduce Synchronization Overhead
*Effort: 3+ weeks*

You design and prototype an extension to the OQUEUE abstraction that integrates with Linux kernel scheduling primitives to reduce busy-wait synchronization overhead. This addresses the paper's limitation of busy-waiting by enabling direct thread handoff or event-driven wakeups between producers and consumers.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of OQUEUE internals, OS scheduler interactions, and synchronization optimization for ML-driven OS policies.

**Grounded in:** Current OQUEUE implementation uses busy-waiting for synchronization, which can be inefficient; integration with OS schedulers for optimized waiting is future work.

**Tech stack:** C, Linux kernel module development, C++ userspace, Linux perf tools

**Data:** Synthetic workloads simulating OS subsystem communication; no external datasets required.

**Build it:**

1. Study Linux kernel scheduling and synchronization primitives relevant to thread wakeup and handoff.
2. Design an extension to the OQUEUE userspace implementation that uses futexes or eventfd to signal consumers instead of busy-waiting.
3. Implement a prototype kernel module or userspace helper to facilitate OQUEUE-aware scheduling.
4. Benchmark synchronization latency and CPU overhead compared to busy-waiting.
5. Document design decisions, implementation details, and performance improvements.

**Ships as:** A GitHub repo with kernel module and userspace code, benchmark scripts, performance analysis, and a detailed README explaining the scheduler integration and its impact.

**Stretch goal:** Explore extending the prototype to support multiple OS subsystems communicating via OQUEUEs with ML-driven policies.

_The paper does not provide released code or datasets; the intermediate project relies on reimplementing the OQUEUE abstraction from the paper's description and using the rigtorp MPMCQueue as a baseline from third-party artifacts._
