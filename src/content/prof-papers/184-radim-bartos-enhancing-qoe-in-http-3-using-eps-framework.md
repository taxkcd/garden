---
title: "184 · Enhancing QoE in HTTP/3 using EPS Framework — Radim Bartos"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-radim-bartos"
source_hash: "4de04025204f8d806f8958eb9e881d1046da743e523f636e62e0e84a275b21fb"
sequence: 184
generator: "outreach-garden: managed"
---

# 184 · Enhancing QoE in HTTP/3 using EPS Framework

## At a glance

- **Professor:** Radim Bartos
- **Institution:** University of New Hampshire
- **Paper:** [Enhancing QoE in HTTP/3 using EPS Framework](https://arxiv.org/pdf/2404.17439)
- **Authors:** Abhinav Gupta, Radim Bartos
- **Year:** 2024

## Paper overview

This paper proposes a new scheduling mechanism for HTTP/3 web resource delivery that mixes incremental and non-incremental data transfers based on urgency levels defined by the Extensible Prioritization Scheme (EPS). The approach aims to improve the quality of experience (QoE) for users by optimizing how web resources are prioritized and delivered, especially for websites with many and large resources. Experimental results show improved web performance metrics compared to existing methods.

### Why it matters

**Research problem:** How to improve web resource delivery performance and user experience in HTTP/3 by effectively prioritizing and scheduling resource transfers using the Extensible Prioritization Scheme (EPS).

**Why it matters:** HTTP/3 and QUIC protocols aim to enhance web communication speed and efficiency, but existing resource prioritization methods can be inefficient, leading to suboptimal user experience. Improving scheduling and prioritization can reduce page load times and improve interactivity, which is critical for modern web applications.

**Key contributions:**

- A mixed scheduling algorithm that manages incremental and non-incremental HTTP/3 requests based on EPS urgency levels.
- An EPS priority mapping scheme linking Chromium resource priorities and types to EPS urgency levels and delivery methods.
- Experimental evaluation demonstrating improved web performance metrics over standard, incremental, and non-incremental HTTP/3 delivery methods.

## About the professor

**Radim Bartos** — Professor and Chair, Department of Computer Science, University of New Hampshire.

Research interests: communication protocol design, networked computing, precision clock synchronization protocols for networked systems, disconnected network protocols for cyber-physical systems, mobile video delivery and content-centric networks, communication protocols for autonomous underwater vehicles

### Research links

- [Faculty/profile page](http://www.cs.unh.edu/~rbartos)
- [Resolved homepage](http://www.cs.unh.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Networking and HTTP/3 Protocols
**The paper assumes:** computer networking fundamentals, HTTP/3 protocol architecture, QUIC transport protocol, resource prioritization in web protocols
**Already in this field?** Skip this entirely if you already have a solid understanding of HTTP/3 and QUIC protocols and their resource scheduling mechanisms.

To understand the paper on enhancing QoE in HTTP/3 using the EPS framework, a solid grasp of HTTP/3, QUIC, and network protocol layering is essential. The rigorous course option offers a deep, structured university-level lecture series covering core networking concepts including HTTP and transport protocols, while the fast track provides a concise, clear series focused on computer networking fundamentals and HTTP, suitable for quick but effective background preparation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Networks and Internet Protocols - NPTEL | IITKGP](https://www.youtube.com/playlist?list=PLEAYkSg4uSQ2NMmzNNsEK5RVbhxqx0BZF) — Rahul Madhavan · 61 videos · 32.9h across the first 60 episodes

**Watch only this:** Lectures 8, 9 (Application Layer IV – Hypertext Transfer Protocol (HTTP), HTML, Telnet Part-I and Part-II), Lectures 11-14 (Transport Layer I to IV), Lectures 19-22 (Transmission Control Protocol I to IV), about 4 hours total — these cover HTTP fundamentals, transport protocols, and congestion control critical to HTTP/3 and QUIC.

*Why it unblocks this paper:* This NPTEL course from IIT Kharagpur covers computer networks comprehensively, including detailed lectures on HTTP, transport layer protocols, and congestion control, providing the rigorous foundation needed to understand HTTP/3 and QUIC scheduling mechanisms discussed in the paper.

*If you want all of it:* Approximately 32.9 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Networks 1 (CS3502)](https://www.youtube.com/playlist?list=PLo80JwUm6hSSwGLJmS_quaeJgx9SILLiI) — Epic Networks Lab · 59 videos · 9.5h across 59 episodes

**Watch only this:** Episodes 8 and 9 (Web Browsers, Caches, & HTTP; Email and SMTP), Episodes 15-18 (Introduction to Transport-Layer Services; Multiplexing & Demultiplexing; UDP and Internet Checksums; Reliable Data Transfer), Episode 23 (TCP vs. QUIC), about 1.5 hours total — focused on HTTP, transport layers, and QUIC relevant to the paper.

*Why it unblocks this paper:* This concise lecture series by Epic Networks Lab covers core networking concepts including HTTP and transport layer protocols with clear, intuition-first explanations, making it a great quick background for understanding HTTP/3 and QUIC scheduling improvements.

*If you want all of it:* About 9.5 hours across 59 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Enhancing QoE in HTTP/3 using EPS Framework," start by building a solid foundation on the HTTP/3 and QUIC protocols, which underpin the transport layer improvements targeted by the paper. Next, study the Extensible Prioritization Scheme (EPS) as it defines the urgency levels critical to the proposed scheduling mechanism. Then, review the concepts of incremental and non-incremental delivery modes, which the paper combines in its mixed scheduling approach. Finally, focus on the paper's core contribution: the mixed scheduling mechanism for HTTP/3 resource delivery based on EPS urgencies, ideally through the authors' own talk or the closest available advanced technical presentation.

### HTTP/3 and QUIC protocols *(prerequisite)*
Understanding HTTP/3 and QUIC is essential as they form the transport protocol foundation for the paper’s scheduling improvements. These protocols introduce multiplexing, reduced latency, and new prioritization capabilities that the paper leverages to enhance web resource delivery.

*How the paper uses it:* The paper builds on HTTP/3 and QUIC to improve resource prioritization and scheduling for better QoE.

▶ [HOW QUIC WORKS - Intro to the QUIC Transport Protocol](https://www.youtube.com/watch?v=HnDsMehSSY4) — Chris Greer · 5 years ago

### Extensible Prioritization Scheme EPS *(prerequisite)*
EPS defines the framework for assigning urgency levels and priorities to HTTP requests, which is central to the paper’s scheduling mechanism. A deep understanding of EPS allows comprehension of how urgency influences resource delivery order and performance.

*How the paper uses it:* The paper uses EPS urgency levels to guide its mixed scheduling mechanism for HTTP/3 resource delivery.

▶ [HTTP Request Prioritization (RFC 9218) | The Backend Engineering Show](https://www.youtube.com/watch?v=mgcv4UR3jKU) — Hussein Nasser · 36:11 · 4 years ago

### Mixed scheduling mechanism for HTTP/3
This is the core contribution of the paper: a novel scheduling mechanism that combines incremental and non-incremental delivery modes guided by EPS urgency levels to optimize web resource delivery and improve QoE. Understanding this mechanism is key to grasping the paper’s innovation and results.

*How the paper uses it:* The paper proposes and experimentally validates this mixed scheduling mechanism to enhance HTTP/3 QoE.

▶ [HTTP 3 Explained](https://www.youtube.com/watch?v=ai8cf0hZ9cQ) — Code with Lucian · 8:57 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on enhancing HTTP/3 QoE using the EPS framework, start by learning the foundational transport protocols HTTP/3 and QUIC, which underpin the web resource delivery improvements. Next, grasp how web resource prioritization works in browsers to appreciate the scheduling challenges. Then, study the Extensible Prioritization Scheme (EPS) that defines urgency levels used in the paper. After that, understand incremental versus non-incremental delivery modes, which are combined in the paper's mixed scheduling mechanism. Finally, focus on the paper's core contribution: the mixed scheduling mechanism for HTTP/3 that leverages EPS urgencies to improve user experience.

### HTTP/3 and QUIC protocols *(prerequisite)*
HTTP/3 is the latest version of the HTTP protocol that runs over QUIC, a transport protocol built on UDP designed to reduce latency and improve web performance. Understanding how QUIC works and how HTTP/3 uses it is essential to grasp the improvements in resource delivery and scheduling discussed in the paper.

*How the paper uses it:* The paper builds on HTTP/3 and QUIC protocols to propose better scheduling mechanisms for resource delivery.

▶ [HOW QUIC WORKS - Intro to the QUIC Transport Protocol](https://www.youtube.com/watch?v=HnDsMehSSY4) — Chris Greer · 5 years ago

### Web resource prioritization *(prerequisite)*
Web resource prioritization is how browsers and servers decide the order in which web resources like scripts, images, and stylesheets are fetched and delivered. This prioritization impacts page load speed and user experience, making it a key concept for understanding scheduling improvements.

*How the paper uses it:* The paper improves web resource delivery by optimizing prioritization and scheduling based on resource urgency.

▶ [How browser fetches resources| Fetch-priority, resource hints explained](https://www.youtube.com/watch?v=y62IsXlKLZA) — Semicolon Guy · 1 year ago

### Extensible Prioritization Scheme EPS *(prerequisite)*
EPS is a framework that defines urgency levels and priority signals for HTTP requests, allowing flexible and extensible prioritization of web resources. Learning EPS helps understand how the paper assigns urgency and delivery methods to different resource types.

*How the paper uses it:* The paper uses EPS urgency levels as the basis for its mixed scheduling mechanism.

▶ [HTTP Request Prioritization (RFC 9218) | The Backend Engineering Show](https://www.youtube.com/watch?v=mgcv4UR3jKU) — Hussein Nasser · 36:11 · 4 years ago

### Incremental vs non-incremental delivery *(prerequisite)*
Incremental delivery sends data in chunks as it becomes available, improving perceived load times, while non-incremental delivery sends the entire resource at once. Understanding these modes is crucial to grasp the paper’s mixed scheduling approach that combines both based on urgency.

*How the paper uses it:* The paper’s mixed scheduling mechanism combines incremental and non-incremental delivery modes based on EPS urgencies.

▶ [HTTP 3 Explained](https://www.youtube.com/watch?v=ai8cf0hZ9cQ) — Code with Lucian · 8:57 · 4 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Enhancing QoE in HTTP/3 using EPS Framework." The beginner project reproduces a core concept of EPS urgency-based scheduling in a simplified simulation. The intermediate project implements the paper's mixed scheduling algorithm and compares its performance to baseline methods on a small-scale simulated HTTP/3 resource delivery workload. The advanced project extends the paper by exploring dynamic EPS priority adjustment to address limitations and future directions mentioned by the authors.

### Beginner — Simulate EPS Urgency-Based Scheduling for HTTP/3 Resources
*Effort: a weekend, ~8 hours*

You build a simplified discrete-event simulator in Python that models HTTP/3 resource delivery with incremental and non-incremental transfers scheduled according to EPS urgency levels. The simulator will allow you to configure resource types, urgencies, and delivery methods, then output basic timing metrics like simulated First Contentful Paint (FCP).

**Why it shows you understood the paper:** This project shows you understand the core mechanism of EPS urgency-based mixed scheduling and how it affects resource delivery timing, reflecting the paper's key contribution of combining incremental and non-incremental delivery based on urgency.

**Grounded in:** A mixed scheduling algorithm that manages incremental and non-incremental HTTP/3 requests based on EPS urgency levels.

**Tech stack:** Python 3.11

**Data:** Simulated HTTP/3 resource delivery workload synthesized based on typical web resource types and urgencies described in the paper.

**Build it:**

1. Implement a basic discrete-event simulation framework in Python for HTTP/3 resource requests.
2. Define resource types with associated EPS urgency levels and delivery methods (incremental or non-incremental) based on the paper's EPS priority mapping.
3. Simulate scheduling and delivery of resources according to urgency, tracking timing metrics like FCP.
4. Visualize or log the timing results to show how mixed scheduling affects delivery order and timing.
5. Write a README explaining the EPS urgency concept and how your simulation models it.

**Ships as:** A Python simulation repo with code, example configurations, timing output logs, and a README explaining EPS urgency-based scheduling.

**Stretch goal:** Add a simple visualization of resource delivery timelines comparing mixed scheduling to incremental-only or non-incremental-only approaches.

### Intermediate — Implement and Evaluate Mixed EPS Scheduling on Simulated HTTP/3 Workload
*Effort: 2 weekends, ~20 hours*

You implement the paper's mixed scheduling algorithm combining incremental and non-incremental HTTP/3 resource delivery based on EPS urgencies. Using a simulated dataset of web resource requests modeled after Chromium priorities, you compare your implementation's performance on metrics like FCP, LCP, and TBT against baseline incremental-only and non-incremental-only scheduling.

**Why it shows you understood the paper:** This project demonstrates you can faithfully reimplement the paper's core method and experimentally evaluate its benefits, replicating the paper's key results on web performance metrics and showing comprehension of EPS priority mapping and mixed scheduling.

**Grounded in:** Experimental evaluation demonstrating improved web performance metrics over standard, incremental, and non-incremental HTTP/3 delivery methods.

**Tech stack:** Python 3.11, Matplotlib or Plotly for visualization

**Data:** Simulated HTTP/3 resource request traces based on Chromium browser resource priorities and types as described in the paper; no authors' code released, so simulation is based on paper descriptions.

**Build it:**

1. Reimplement the mixed scheduling algorithm managing incremental and non-incremental requests based on EPS urgencies.
2. Create or synthesize a dataset of HTTP/3 resource requests with Chromium-like priority and resource type distributions.
3. Implement baseline scheduling methods: incremental-only and non-incremental-only prioritized delivery.
4. Run experiments comparing mixed scheduling to baselines, measuring simulated FCP, LCP, TBT, and CLS metrics.
5. Visualize and analyze the results, highlighting improvements and any metric trade-offs.
6. Document your implementation details, experiment setup, and findings in a detailed README.

**Verified links from the paper:**

- <https://github.com/andydavies/http2-prioritization-issues> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python repo with the mixed scheduling implementation, baseline methods, experiment scripts, metric calculations, visualizations, and a comprehensive README.

**Stretch goal:** Incorporate the third-party artifact https://github.com/andydavies/http2-prioritization-issues as a baseline for HTTP/2 prioritization issues and compare results to your HTTP/3 EPS mixed scheduler.

### Advanced — Dynamic EPS Priority Adjustment for HTTP/3 Scheduling Optimization
*Effort: 3+ weeks*

You extend the paper's mixed scheduling mechanism by implementing a dynamic EPS priority adjustment system that adapts urgencies based on real-time network conditions or resource load. This addresses the paper's future direction of exploring dynamic EPS priority tuning to optimize resource delivery further. You evaluate your extension on simulated workloads and analyze improvements or trade-offs in web performance metrics.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions by advancing the scheduling framework with dynamic priority adaptation, potentially improving inconsistent Speed Index results and addressing real-world network variability.

**Grounded in:** Exploring dynamic adjustment of EPS priorities to further optimize resource delivery.

**Tech stack:** Python 3.11, Matplotlib or Plotly, Docker (optional for environment reproducibility)

**Data:** Simulated HTTP/3 resource delivery workloads with configurable network latency and load parameters to test dynamic priority adjustments.

**Build it:**

1. Design a dynamic EPS priority adjustment algorithm that modifies urgency levels based on simulated network latency, resource size, or delivery progress.
2. Integrate this dynamic adjustment into the existing mixed scheduling implementation from the intermediate project.
3. Simulate varying network conditions and resource loads to test the dynamic scheduler.
4. Measure and compare web performance metrics (FCP, LCP, TBT, SI, CLS) against static EPS priority scheduling.
5. Analyze whether dynamic adjustment mitigates Speed Index inconsistencies and improves overall QoE metrics.
6. Document your design decisions, implementation details, experimental results, and insights in a comprehensive report.

**Ships as:** A Python repo with dynamic EPS priority adjustment code, experiment scripts, metric evaluation, visualizations, and a detailed README discussing improvements and limitations.

**Stretch goal:** Explore integration of precision clock synchronization concepts (from Professor Bartos' research) to enhance timing accuracy in scheduling decisions under high-latency conditions.
