---
title: "095 · EDRP: Enhanced Dynamic Relay Point Protocol for Data Dissemination in Multi-hop Wireless IoT Networks — Alberto E. Cerpa"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alberto-e-cerpa"
source_hash: "15ae2ee62f429132c24e1f1949111cdfe5798d645db2b9651ab00a58360e7fa8"
sequence: 95
generator: "outreach-garden: managed"
---

# 095 · EDRP: Enhanced Dynamic Relay Point Protocol for Data Dissemination in Multi-hop Wireless IoT Networks

## At a glance

- **Professor:** Alberto E. Cerpa
- **Institution:** Univ. of California - Merced
- **Paper:** [EDRP: Enhanced Dynamic Relay Point Protocol for Data Dissemination in Multi-hop Wireless IoT Networks](https://arxiv.org/pdf/2602.17619)
- **Authors:** Jothi Prasanna Shanmuga Sundaram, Magzhan Gabidolla, Luis Fujarte, Shawn Duong, Jianlin Guo, Toshiaki Koike-Akino, Pu (Perry) Wang, Kieran Parsons, Philip V. Orlik, Takenori Sumi, Yukimasa Nagai, Miguel Á. Carreira-Perpiñán, Alberto E. Cerpa
- **Year:** 2026

## Paper overview

This paper addresses the challenges of data dissemination in multi-hop wireless IoT networks, especially in real-world environments where link quality fluctuates unpredictably. The authors analyze the limitations of an existing protocol called DRP and propose an enhanced protocol, EDRP, which incorporates a link-quality aware CSMA mechanism and a machine learning-based algorithm to adapt rateless coding block sizes. Their solution significantly improves data transmission efficiency and reliability in practical IoT deployments.

### Why it matters

**Research problem:** Existing contention-based data dissemination protocols like DRP fail to handle real-world link quality fluctuations effectively, leading to overlapping transmissions, collisions, and degraded goodput in multi-hop wireless IoT networks.

**Why it matters:** Emerging IoT applications increasingly rely on grid-powered multi-hop wireless networks for critical functions such as smart grids and building management. Efficient and reliable data dissemination protocols are essential to ensure timely and robust communication, but real-world environmental factors and radio variability challenge existing protocols, limiting their practical applicability.

**Key contributions:**

- In-depth real-world performance analysis of DRP revealing its inability to handle erratic link quality fluctuations and the resulting collision behavior.
- Theoretical characterization of design requirements for collision reduction and rateless block size adaptation under passive acknowledgment schemes.
- Design and implementation of LQ-CSMA that biases CSMA back-off delays according to link quality to reduce collisions.
- Development of ML-BSS, a novel machine learning-based ordinal regression model optimized with TAO algorithm, to predict optimal rateless block sizes without receiver feedback.
- Comprehensive in-field evaluations demonstrating EDRP's significant goodput improvements over existing protocols.

## About the professor

**Alberto E. Cerpa** — Associate Professor, Computer Science & Engineering, Univ. of California - Merced.

### Research links

- [Faculty/profile page](https://eecs.ucmerced.edu/content/alberto-cerpa)
- [Identity evidence](http://www.andes.ucmerced.edu/~acerpa)
- [Identity evidence](https://engineering.ucmerced.edu/content/alberto-cerpa)
- [Identity evidence](https://directory.ucmerced.edu/person/acerpa)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the EDRP protocol and its contributions, start with foundational knowledge on multi-hop wireless IoT networks and rateless coding in wireless networks, as these provide the environmental and technical context. Next, explore machine learning techniques for link quality prediction, which underpin the ML-BSS component of EDRP. Then, study Link-Quality-aware CSMA to grasp the collision reduction mechanism. Finally, focus on the core concept by watching the authors' own talk or the closest available academic presentation on EDRP to see the integrated protocol design and evaluation.

### Rateless coding in wireless networks *(prerequisite)*
Rateless coding enables adaptive data dissemination without fixed block sizes, which is fundamental to EDRP's approach to handling fluctuating link qualities. Understanding rateless coding principles and their application in wireless networks provides the basis for appreciating the ML-BSS algorithm.

*How the paper uses it:* EDRP adapts rateless coding block sizes dynamically to improve transmission efficiency under varying link conditions.

▶ [Rateless Coding-based Cooperative Transmission/Routing for Wireless Networks](https://www.youtube.com/watch?v=DkEDDZYaOqc) — Wireless @ Virginia Tech · 8 years ago

### Machine learning for link quality prediction *(prerequisite)*
Machine learning methods for link quality prediction are critical to EDRP's ML-BSS algorithm, which predicts optimal rateless block sizes without receiver feedback. Familiarity with feature-based ML models and ordinal regression techniques will clarify how EDRP achieves this adaptation.

*How the paper uses it:* ML-BSS uses machine learning to predict link quality and select block sizes, enhancing EDRP's performance.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 2.2 - Traditional Feature-based Methods: Link](https://www.youtube.com/watch?v=4dVwlE9jYxY) — Stanford Online · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the EDRP protocol for data dissemination in multi-hop wireless IoT networks. It starts with the basics of multi-hop wireless IoT networks to set the context, then explains rateless coding as a key adaptive coding technique, followed by an introduction to CSMA and its link-quality-aware adaptation. Next, it covers machine learning methods for link quality prediction, culminating in the core EDRP protocol that integrates these ideas for improved data dissemination.

### Multi-hop wireless IoT networks *(prerequisite)*
Multi-hop wireless IoT networks connect devices over multiple wireless hops to extend coverage and reliability. Understanding their structure and challenges, such as variable link quality and interference, is essential to grasp why specialized data dissemination protocols like EDRP are needed.

*How the paper uses it:* EDRP operates in multi-hop wireless IoT networks where link quality fluctuates and impacts data dissemination performance.

▶ [NeoMesh on LoRa: Bringing True Mesh Networking to the ...](https://www.youtube.com/watch?v=fKnrmzrJTno) — The Things Industries · 14:55

### Rateless coding in wireless networks *(prerequisite)*
Rateless coding allows data to be encoded into an unlimited stream of packets so receivers can recover the original data after receiving enough packets, adapting to varying channel conditions without fixed block sizes. This flexibility is crucial for efficient data dissemination in unreliable wireless environments.

*How the paper uses it:* EDRP adapts rateless coding block sizes dynamically to improve data transmission efficiency without receiver feedback.

▶ [Rateless Coding-based Cooperative Transmission/Routing for Wireless Networks](https://www.youtube.com/watch?v=DkEDDZYaOqc) — Wireless @ Virginia Tech · 8 years ago

### Link-Quality-aware CSMA
Carrier Sense Multiple Access (CSMA) is a protocol where devices sense the channel before transmitting to avoid collisions. Link-quality-aware CSMA adjusts the back-off delay based on real-time link quality, prioritizing transmissions from nodes with better links to reduce collisions and improve throughput.

*How the paper uses it:* EDRP integrates LQ-CSMA to bias back-off delays according to link quality, reducing collisions in multi-hop dissemination.

▶ [Carrier Sense Multiple Access (CSMA) – Part 1](https://www.youtube.com/watch?v=MAZi6VoekYw) — Neso Academy · 6 years ago

### Machine learning for link quality prediction *(prerequisite)*
Machine learning can predict future link quality from historical data, enabling adaptive decisions without explicit feedback. Ordinal regression trees, a type of decision tree, can classify link quality levels efficiently, which is suitable for resource-constrained IoT devices.

*How the paper uses it:* EDRP uses a machine learning-based ordinal regression model to predict optimal rateless block sizes without receiver feedback.

▶ [Stanford CS224W: ML with Graphs | 2021 | Lecture 2.2 - Traditional Feature-based Methods: Link](https://www.youtube.com/watch?v=4dVwlE9jYxY) — Stanford Online · 5 years ago
