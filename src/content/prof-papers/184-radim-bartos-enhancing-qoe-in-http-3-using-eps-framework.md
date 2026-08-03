---
title: "184 · Enhancing QoE in HTTP/3 using EPS Framework — Radim Bartos"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-radim-bartos"
source_hash: "6d3f520789648b7da0493b40d0766ec2db87433959c7aaa30edd200935d05e6d"
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
