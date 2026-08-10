---
title: "095 · EDRP: Enhanced Dynamic Relay Point Protocol for Data Dissemination in Multi-hop Wireless IoT Networks — Alberto E. Cerpa"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alberto-e-cerpa"
source_hash: "5fd9efbe7284af79137d1e066a2d79018f12c778f349616663d9fbf492e60cda"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Wireless Networks and MAC Protocols
**The paper assumes:** wireless networking fundamentals, MAC protocols, CSMA mechanisms, link quality metrics, and multi-hop wireless communication
**Already in this field?** Skip this entirely if you already understand wireless network architectures, MAC layer contention protocols like CSMA, and the impact of link quality on multi-hop wireless communication.

To understand the design and evaluation of the Enhanced Dynamic Relay Point Protocol (EDRP) for multi-hop wireless IoT networks, a solid grasp of wireless networking fundamentals and Medium Access Control (MAC) protocols, especially contention-based ones like CSMA, is essential. The rigorous course option offers a comprehensive university-level lecture series on computer networks covering wireless LANs and MAC protocols in depth, while the fast track provides a concise, focused playlist on IoT networking and MAC protocols tailored for quick conceptual understanding. Choose the course for deep technical grounding or the fast track for a rapid, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Networks Lecture Series](https://www.youtube.com/playlist?list=PLbszJxGNQ27lBrmoN34YNdfP-2XGRsflR) — iSmile Academy · 28 videos · 17.8h across 28 episodes

**Watch only this:** Lectures 19, 20, and 21 (MAC Protocols, Wired LAN Ethernet, Wireless LAN CSMA/CA Bluetooth), about 1 hour 54 minutes total — these focus on MAC protocols and wireless LANs relevant to contention-based access and CSMA.

*Why it unblocks this paper:* This iSmile Academy Computer Networks lecture series covers key wireless networking concepts including CSMA/CA and wireless LANs, which are fundamental to understanding the MAC layer challenges and solutions like LQ-CSMA in EDRP.

*If you want all of it:* 17.8 hours across all 28 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [IoT Unit 3 FULL Playlist | Network & Communication in IoT Explained Super Easy | Score 90+ in Exams 🔥](https://www.youtube.com/playlist?list=PLUC5PNETuY-YWjQcXkh47RdVHrw-mw5OJ) — EveryOra · 7 videos · 0.8h across 7 episodes

**Watch only this:** Episodes 1 and 2 (Wireless Medium Access Issues in IoT, MAC Protocol Survey in IoT), about 12 minutes total — these cover the essentials of wireless MAC protocols and contention issues in IoT networks.

*Why it unblocks this paper:* This EveryOra IoT Unit 3 playlist provides a concise, clear explanation of wireless medium access issues and MAC protocols in IoT, directly addressing contention-based MAC challenges and data dissemination relevant to the paper.

*If you want all of it:* 0.8 hours across all 7 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the EDRP protocol paper. The beginner project reproduces the key LQ-CSMA mechanism's back-off delay behavior using simulated link quality data. The intermediate project implements the ML-BSS ordinal regression model for rateless block size prediction on synthetic link quality traces and compares it to a fixed block size baseline. The advanced project extends the LQ-CSMA mechanism by integrating a lightweight coordination scheme to reduce collisions, addressing a stated limitation and future direction of the paper.

### Beginner — Simulate and Visualize LQ-CSMA Back-off Delay Correlation
*Effort: a weekend, ~8 hours*

You build a simulation that generates synthetic link quality values for multiple nodes and applies the LQ-CSMA back-off delay assignment rule, which inversely correlates back-off delay with link quality. You visualize the resulting correlation and distribution of back-off delays to reproduce the paper's reported strong negative correlation (-0.947).

**Why it shows you understood the paper:** This project shows you understand how LQ-CSMA prioritizes transmissions by link quality and the statistical relationship between link quality and back-off delay, a core mechanism to reduce collisions in EDRP.

**Grounded in:** LQ-CSMA exhibits a strong negative correlation (-0.947) between link quality and back-off delay, effectively prioritizing high-quality links.

**Tech stack:** Python 3.11, matplotlib, numpy, scipy

**Data:** Synthetic link quality data generated to mimic real-world fluctuations as described in the paper's in-field analysis.

**Build it:**

1. Generate synthetic link quality values for a set of nodes with realistic variability.
2. Implement the LQ-CSMA back-off delay assignment function inversely proportional to link quality.
3. Calculate the Pearson correlation coefficient between link quality and assigned back-off delays.
4. Plot scatter and line charts showing link quality versus back-off delay.
5. Write a README explaining the simulation and how it relates to the paper's findings.

**Ships as:** A GitHub repo with Python scripts that simulate LQ-CSMA back-off delays, produce correlation statistics and plots, and a README linking the results to the paper's contribution.

**Stretch goal:** Add a simple event-driven simulation of multiple nodes contending with LQ-CSMA delays to observe collision reduction trends.

### Intermediate — Implement ML-BSS Ordinal Regression for Rateless Block Size Prediction
*Effort: 2 weekends, ~20 hours*

You implement the ML-BSS machine learning model using ordinal regression trees optimized by the TAO algorithm to predict rateless coding block sizes from historical link quality data. You train and test the model on synthetic link quality traces and compare its prediction accuracy and resulting goodput metric against a fixed block size baseline.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel ML-based block size adaptation approach, the ordinal regression formulation, and how predictive modeling improves data dissemination efficiency without receiver feedback.

**Grounded in:** Development of ML-BSS, a novel machine learning-based ordinal regression model optimized with TAO algorithm, to predict optimal rateless block sizes without receiver feedback.

**Tech stack:** Python 3.11, scikit-learn, numpy, pandas, matplotlib

**Data:** Synthetic time-series link quality data generated to simulate multi-hop wireless IoT network conditions as described in the paper; no public dataset available.

**Build it:**

1. Generate or simulate time-series link quality data representing fluctuating wireless links.
2. Implement an ordinal regression tree model and optimize it using the TAO algorithm or approximate with scikit-learn decision trees.
3. Train the model to predict rateless block sizes based on historical link quality features.
4. Evaluate model accuracy on test data and compare with a fixed block size baseline.
5. Calculate a simplified goodput metric to quantify performance improvements.
6. Document the implementation, results, and comparison to the paper's reported 95% accuracy and 20.76% goodput contribution.

**Ships as:** A GitHub repo containing the ML-BSS implementation, training and evaluation scripts, plots of prediction accuracy and goodput comparison, and a detailed README.

**Stretch goal:** Extend the model to incorporate additional features such as time-of-day or node position to improve prediction robustness.

### Advanced — Extend LQ-CSMA with Lightweight Coordination to Reduce Collisions
*Effort: 3+ weeks*

You design and implement an extension of the LQ-CSMA protocol that integrates a lightweight coordination or reservation mechanism to reduce residual collisions and transmission inversion events. You simulate a multi-hop wireless IoT network with fluctuating link qualities, compare your hybrid MAC protocol against baseline LQ-CSMA, and analyze improvements in collision rates and goodput.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing your ability to extend state-of-the-art protocols by combining contention-based access with coordination to improve reliability and efficiency in real-world IoT networks.

**Grounded in:** Residual collisions remain inevitable under contention-based MACs despite LQ-CSMA improvements. Future work could explore hybrid approaches that combine LQ-CSMA with lightweight coordination or reservation schemes.

**Tech stack:** Python 3.11, simpy or ns-3 (if feasible), numpy, matplotlib

**Data:** Synthetic multi-hop wireless network simulation data with link quality fluctuations modeled after the paper's field experiments.

**Build it:**

1. Review LQ-CSMA mechanism and its limitations as described in the paper.
2. Design a lightweight coordination scheme (e.g., token passing, mini-reservation slots) compatible with LQ-CSMA.
3. Implement a discrete-event simulation of multi-hop wireless IoT nodes with fluctuating link qualities.
4. Integrate your hybrid MAC protocol and simulate data dissemination sessions.
5. Measure collision rates, transmission ordering, and goodput metrics compared to baseline LQ-CSMA.
6. Analyze results and document how coordination reduces collisions without sacrificing scalability.
7. Write a comprehensive README discussing design decisions, simulation setup, results, and relation to the paper's future directions.

**Ships as:** A GitHub repo with simulation code, comparative analysis scripts, plots of collision and goodput metrics, and a detailed report linking your extension to the paper's stated limitations and future work.

**Stretch goal:** Implement adaptive parameter tuning for the coordination mechanism to optimize performance across different simulated environments.
