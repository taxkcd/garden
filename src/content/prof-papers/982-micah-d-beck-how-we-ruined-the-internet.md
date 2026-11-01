---
title: "982 · How We Ruined the Internet — Micah D. Beck"
date: 2026-11-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-micah-d-beck"
source_hash: "84a25aaf3bcd2ed6f59f85a33d76f908ffe394434a9a60a9eeb39e9cc8bea68f"
sequence: 982
generator: "outreach-garden: managed"
---

# 982 · How We Ruined the Internet

## At a glance

- **Professor:** Micah D. Beck
- **Institution:** University of Tennessee
- **Paper:** [How We Ruined the Internet](https://arxiv.org/pdf/2306.01101)
- **Authors:** Micah D. Beck, Terry R. Moore
- **Year:** 2023

## Paper overview

This paper analyzes how the original design assumptions of the Internet, particularly its point-to-point datagram forwarding model, have led to the rise of private overlay networks like CDNs and Cloud infrastructures that conflict with the early vision of an open, universal Internet. It argues that the Internet's technical limitations forced the creation of these private networks, which now dominate and restrict access, undermining openness, competition, and innovation.

### Why it matters

**Research problem:** The Internet's foundational architecture, based on a loosely synchronous point-to-point datagram delivery service, is inadequate for supporting asynchronous point-to-multipoint applications at global scale, leading to the emergence of private overlay infrastructures that contradict the original Open Data Networking goals.

**Why it matters:** The inadequacy of the Internet's architecture has resulted in monopolistic control by hypergiant overlay operators, social and political harms from targeted advertising and surveillance, ossification of network innovation, and barriers to universal, affordable connectivity, undermining the original vision of an open, accessible, and evolving global information infrastructure.

**Key contributions:**

- Distinction between Internet* (original architecture) and Internet++ (current evolved infrastructure with overlays).
- Identification of the Internet* as a 'stovepiped' spanning layer limited to point-to-point datagram forwarding.
- Explanation of how asynchronous point-to-multipoint applications at scale cannot be efficiently supported by Internet*.
- Analysis of the growth of Content Delivery Networks (CDNs) and Cloud infrastructures as private overlays circumventing Internet* limitations.
- Discussion of network ossification caused by optimizations for unicast datagram forwarding ('fast path').

## About the professor

**Micah D. Beck** — Associate Professor, Dept. of Electrical Eng. and Computer Sci., University of Tennessee.

### Research links

- [Faculty/profile page](https://eecs.utk.edu/people/micah-beck)
- [Identity evidence](http://web.eecs.utk.edu/~mbeck)
- [LinkedIn](https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=micah-beck-0708371)
- [Social profile](https://bsky.app/profile/micahbeck.bsky.social)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computer Networks
**The paper assumes:** undergraduate computer networks concepts including packet switching, datagram forwarding, routing protocols, and multicast communication
**Already in this field?** Skip this entirely if you already have a solid undergraduate-level understanding of computer networking fundamentals, including Internet architecture and routing.

To understand the architectural limitations of the original Internet and the rise of private overlay networks like CDNs, a solid grasp of computer networking fundamentals—especially routing, datagram delivery, and multicast—is essential. The rigorous course option offers a detailed, university-level exploration of routing concepts, while the fast track provides a concise, focused introduction to the same topics, suitable for readers with limited time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS144 An Introduction to Computer Networks: Routing Unit.](https://www.youtube.com/playlist?list=PLTQzEwN6b5LUL85DCttO9z_-BOQTApyvZ) — Nick W McKeown · 8 videos · 2.1h across 8 episodes

**Watch only this:** Episodes 1 through 6 (routing intro, routing basics, routing bellmanford, routing dijkstra, routing Internet, routing bgp), about 1.5 hours total — these cover routing principles, Internet routing, and BGP, foundational to the paper's analysis.

*Why it unblocks this paper:* This Stanford CS144 Routing Unit playlist by Nick W McKeown covers routing fundamentals including Internet routing, BGP, and multicast, directly relevant to understanding the Internet's point-to-point datagram forwarding model and its limitations discussed in the paper.

*If you want all of it:* All 8 episodes, about 2.1 hours total — including spanning tree protocol and multicast routing for broader context.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Networks Distilled](https://www.youtube.com/playlist?list=PLLFIgriuZPAcBwg_vhcxECMi7l7cnfOmI) — Kenan Casey · 23 videos · 3.1h across 23 episodes

**Watch only this:** Episodes 1, 3, 8, 10, 16, 17, 20, and 23 (Introduction, Internet Protocol Stack Overview, Understanding DNS, Understanding UDP, Network Layer Summary, Understanding IPv4, Understanding Routing Protocols, Understanding Wi-Fi), about 1.5 hours total — these episodes cover the core networking concepts and routing needed to grasp the paper's arguments.

*Why it unblocks this paper:* Kenan Casey's 'Computer Networks Distilled' series provides clear, concise explanations of key networking concepts such as IP, DNS, UDP, TCP, routing protocols, and multicast, giving a quick yet comprehensive overview of the Internet architecture relevant to the paper.

*If you want all of it:* All 23 episodes, about 3.1 hours total — for a thorough but still concise grounding in computer networking.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "How We Ruined the Internet," start by grounding yourself in the foundational Internet architecture, specifically the point-to-point datagram model, as this is the core technical limitation the paper critiques. Next, explore the architecture and role of Content Delivery Networks (CDNs), which emerged as private overlays circumventing these limitations. Then, study network ossification and fast path optimizations to grasp the technical barriers to evolving the Internet infrastructure. Finally, engage with the authors' own talk to gain direct insight into their analysis and conclusions about the Internet's architectural evolution and its socio-technical consequences.

### Content Delivery Networks architecture *(prerequisite)*
CDNs are key overlay technologies that emerged to work around the Internet's architectural limitations. This section explains their design, operation, and how they effectively create private networks on top of the Internet. The chosen talk is a detailed conference presentation that balances theoretical understanding with practical insights, suitable for advanced learners.

*How the paper uses it:* The paper analyzes how CDNs replicate content and use routing overlays to circumvent Internet* limitations, contributing to the Internet++ infrastructure.

▶ [CDNs 101: An Introduction to Content Delivery Networks - Jake Ginnivan - NDC Oslo 2023](https://www.youtube.com/watch?v=djyt_mG3S60) — NDC Conferences · 53:15 · 3y ago

### Network ossification and fast path optimizations *(prerequisite)*
Network ossification refers to the technical and economic barriers that prevent evolution in Internet infrastructure, largely due to optimizations for fast unicast datagram forwarding. This section explains why innovations like multicast or in-network storage have been difficult to adopt. The selected video is a university lecture that rigorously discusses these concepts in the context of future Internet design.

*How the paper uses it:* The paper identifies network ossification as a key factor limiting innovation and the adoption of alternative connectivity models.

▶ [Internet ossification](https://www.youtube.com/watch?v=DT5Jk-jpfK8) — Computer Science at Karlstad University · 14:59 · 7y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the paper's critique of the Internet's architecture, starting with the basic Internet design of point-to-point datagram communication. It then covers Content Delivery Networks (CDNs) as key overlay networks that emerged due to Internet limitations, followed by network ossification and fast path optimizations that hinder innovation. Finally, it explains asynchronous point-to-multipoint communication, the core communication pattern the paper identifies as unsupported by the original Internet design.

### Internet architecture point-to-point datagram model *(prerequisite)*
Learn how the original Internet was designed to forward data packets individually from one point to another without built-in support for group communication. This point-to-point datagram model is the foundation of Internet communication but has inherent limitations for scaling certain applications.

*How the paper uses it:* The paper critiques this foundational Internet* design as inadequate for supporting asynchronous point-to-multipoint applications at global scale.

▶ [Datagram Networks](https://www.youtube.com/watch?v=n1f0iGNVGps) — TutorialsPoint · 5:37 · 8y ago

### Content Delivery Networks architecture *(prerequisite)*
Understand what CDNs are and how they work by replicating content across many servers worldwide to improve performance and availability. CDNs emerged as private overlay networks to work around the Internet's limitations in efficiently delivering content at scale.

*How the paper uses it:* The paper analyzes CDNs as private overlay networks that circumvent Internet* limitations and dominate content delivery.

▶ [What is a CDN (Content Delivery Network)?](https://www.youtube.com/watch?v=b4_6thkYZXs) — Gaurav Sen · 5:43 · 2y ago

### Network ossification and fast path optimizations *(prerequisite)*
Explore how technical optimizations in routers for fast unicast packet forwarding have hardened the Internet's architecture, making it difficult to introduce new features like multicast or in-network storage. This ossification limits innovation and adaptability of the network.

*How the paper uses it:* The paper identifies network ossification caused by 'fast path' optimizations as a key barrier to evolving Internet infrastructure.

▶ [Internet ossification](https://www.youtube.com/watch?v=DT5Jk-jpfK8) — Computer Science at Karlstad University · 14:59 · 7y ago

### Asynchronous point-to-multipoint communication
Learn about asynchronous point-to-multipoint communication, where one sender transmits data to multiple receivers without requiring them to be synchronized. This communication pattern is essential for applications like mass media distribution but is not efficiently supported by the original Internet architecture.

*How the paper uses it:* The paper highlights the lack of in-network support for asynchronous point-to-multipoint communication as a fundamental Internet* limitation.

▶ [Broadcast, Multicast, Unicast & Point-to-Point Communication | Computer Networks Course | Lecture 2](https://www.youtube.com/watch?v=EjwP9gCtQVo) — Mind Your Exam Channel · 11:48 · 4y ago

## Already in your library

- [https://www.youtube.com › watch?v=ouqqU0FJjhQ](https://www.youtube.com/watch?v=ouqqU0FJjhQ) — also for: StarCDN: Moving Content Delivery Networks to Space (Ramesh K. Sitaraman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "How We Ruined the Internet" by Micah D. Beck and Terry R. Moore. The beginner project recreates a core concept from the paper about Internet*'s point-to-point datagram model limitations. The intermediate project involves implementing a simplified CDN overlay simulation to show how private overlays circumvent Internet* limitations. The advanced project tackles a future direction by prototyping a basic asynchronous point-to-multipoint communication model to explore alternatives to the current Internet architecture.

### Beginner — Simulate Internet* Datagram Forwarding Limitations
*Effort: a weekend, ~8 hours*

You build a simple network simulation in Python that models the Internet*'s point-to-point datagram forwarding. The simulation will demonstrate hotspot problems when multiple asynchronous point-to-multipoint requests are made, illustrating inefficiencies described in the paper.

**Why it shows you understood the paper:** This project shows you grasp the fundamental architectural limitation of Internet*'s datagram model and its impact on asynchronous multipoint communication, a key contribution of the paper.

**Grounded in:** Demonstrated that Internet*'s point-to-point datagram model cannot efficiently support asynchronous point-to-multipoint applications, leading to hotspot problems and inefficiencies.

**Tech stack:** Python 3.11

**Data:** No external dataset needed; synthetic traffic patterns are generated within the simulation.

**Build it:**

1. Implement a simple network graph representing nodes and point-to-point links.
2. Simulate unicast datagram forwarding for multiple asynchronous requests targeting multiple receivers.
3. Measure and visualize traffic hotspots and inefficiencies caused by repeated unicast transmissions.
4. Document the simulation results and relate them to the paper's explanation of Internet* limitations.

**Ships as:** A Python repository with simulation code, visualization scripts, and a README explaining how the simulation reproduces Internet* datagram forwarding limitations.

**Stretch goal:** Add a comparison visualization showing how multicast or in-network caching could alleviate hotspots, even if not fully implemented.

### Intermediate — Implement a Simplified CDN Overlay Simulation
*Effort: 2 weekends, ~20 hours*

You develop a prototype in Python or TypeScript simulating a CDN overlay network that replicates content across multiple servers and uses DNS-like routing to direct client requests. You compare its efficiency against the baseline Internet* datagram forwarding simulation from the beginner project.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method of illustrating how CDNs circumvent Internet* limitations by creating private overlays, and to measure the resulting efficiency gains.

**Grounded in:** Showed that CDNs use DNS and BGP routing information to implement their own routing overlays, effectively creating private networks.

**Tech stack:** Python 3.11, TypeScript (optional for frontend visualization), Matplotlib or D3.js for visualization

**Data:** Synthetic network topology and traffic patterns generated to mimic global traffic volume scaling.

**Build it:**

1. Extend the beginner simulation to include multiple replicated CDN servers hosting the same content.
2. Implement a DNS-like routing mechanism that directs client requests to the nearest CDN server.
3. Simulate client requests and measure traffic load distribution and latency compared to baseline.
4. Visualize and report metrics showing how the CDN overlay reduces hotspots and improves efficiency.
5. Write a README linking the simulation results to the paper's analysis of CDN overlays.

**Ships as:** A repository with simulation code, metrics comparison, visualizations, and documentation explaining how the CDN overlay model works and its benefits over Internet*.

**Stretch goal:** Incorporate a simple BGP routing simulation to dynamically adjust CDN server selection based on network conditions.

### Advanced — Prototype Asynchronous Point-to-Multipoint Communication Model
*Effort: 3+ weeks*

You design and implement a prototype network protocol or middleware layer that supports asynchronous point-to-multipoint communication, addressing a key limitation identified in the paper. This prototype will demonstrate an alternative to Internet*'s datagram model, exploring mechanisms like in-network caching or multicast emulation to improve scalability and openness.

**Why it shows you understood the paper:** This project tackles a future direction from the paper by attempting a technical design and partial implementation of a next-generation network model, showing deep comprehension of the paper's critique and vision for Internet evolution.

**Grounded in:** Reexamination and potential redesign of Internet architecture assumptions, especially regarding support for asynchronous point-to-multipoint communication.

**Tech stack:** Python 3.11, FastAPI or Node.js for network service simulation, Docker for containerized deployment, React/TypeScript for visualization dashboard

**Data:** Synthetic network traffic and topology data generated for testing asynchronous communication scenarios.

**Build it:**

1. Research existing multicast and in-network caching protocols to inform design decisions.
2. Design a simple protocol or middleware that supports asynchronous point-to-multipoint messaging with caching or replication.
3. Implement the protocol in a simulated environment using Python or Node.js.
4. Create test scenarios with multiple senders and receivers to evaluate scalability and latency.
5. Build a dashboard to visualize message flows, cache hits, and network load.
6. Document the design, implementation challenges, and how this prototype addresses the paper's identified limitations.

**Ships as:** A multi-component repository including protocol implementation, simulation scripts, visualization dashboard, and a detailed README discussing the prototype's relevance to the paper's future directions.

**Stretch goal:** Integrate real-world data or experiment with deployment on a small testbed network to evaluate performance.
