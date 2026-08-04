---
title: "214 · Perimeter Defense using a Turret with Finite Range and Service Times — Eric Torng"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-eric-torng"
source_hash: "ab192860e0867ba72c67264307e56ae621b88ddda8bf0e564874601b440b228f"
sequence: 214
generator: "outreach-garden: managed"
---

# 214 · Perimeter Defense using a Turret with Finite Range and Service Times

## At a glance

- **Professor:** Eric Torng
- **Institution:** Michigan State University
- **Paper:** [Perimeter Defense using a Turret with Finite Range and Service Times](https://arxiv.org/abs/2302.02186)
- **Authors:** Shivam Bajaj, Shaunak D. Bopardikar, Alexander Von Moll, Eric Torng, David W. Casbeer
- **Year:** 2023

## Paper overview

This paper studies how a single turret with limited range and a required service time can defend a perimeter against multiple intruders moving radially inward in a conical environment. It analyzes both offline scenarios where all intruders are known in advance and online scenarios where intruders arrive over time. The authors develop algorithms to maximize the number of intruders captured and provide theoretical performance guarantees.

### Why it matters

**Research problem:** How to optimally control a single turret with finite range and non-zero service time to defend a concentric perimeter against multiple intruders moving radially inward, considering both offline (all intruders known) and online (intruders arrive over time) settings.

**Why it matters:** Perimeter defense is critical in autonomous systems and security applications. Existing approaches often do not scale well with many intruders or do not handle online arrivals effectively. Understanding optimal defense strategies with realistic turret constraints can improve autonomous perimeter security.

**Key contributions:**

- Formulation of the perimeter defense problem with a turret having finite range and service time in a conical environment.
- Equivalence proof of the offline problem to a TRP-TW problem on a line segment.
- Development of a 2-approximate algorithm for the offline problem and a polynomial-time optimal algorithm in a special parameter regime (r = ρ).
- Establishment of fundamental limits showing no online algorithm can have competitive ratio better than (N-1) under certain conditions.
- Design of two online algorithms: Sweeping Turret (SiT) with 1-competitive ratio and Dynamically Project and Capture (DPaC) with 2-competitive ratio in specific parameter regimes.

## About the professor

**Eric Torng** — Associate Professor, Department of Computer Science and Engineering (CSE), Michigan State University.

Research interests: Algorithms, On-Line Algorithms, Scheduling, Perimeter Defense, Packet Processing

### Research links

- [Faculty/profile page](https://engineering.msu.edu/faculty/Eric-Torng)
- [Identity evidence](http://www.cse.msu.edu/~torng)
- [Identity evidence](http://www.cse.msu.edu/~torng/HPFrames/outline.html)
- [Identity evidence](http://www.cse.msu.edu/~torng/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on perimeter defense using a turret with finite range and service times, start by building foundational knowledge in competitive analysis of online algorithms and vehicle routing problems with service times, as these underpin the theoretical guarantees and modeling of the turret's constraints. Next, study the Traveling Repairperson Problem with Time Windows, the key combinatorial optimization problem to which the offline defense problem is mapped. Finally, focus on the core concept of the paper itself, prioritizing any direct talks by the authors or closely related academic presentations on perimeter defense algorithms.

### Competitive analysis of online algorithms *(prerequisite)*
Competitive analysis is fundamental to understanding the performance guarantees of the online turret defense algorithms developed in the paper. The selected videos are advanced seminar and university lectures from reputable institutions that rigorously cover the theory and applications of competitive analysis in online algorithms.

*How the paper uses it:* The paper uses competitive analysis to establish worst-case performance bounds for online turret defense algorithms.

▶ [Competitive Analysis of Online Algorithms (Part 1)](https://www.youtube.com/watch?v=Yi4ItudutsA) — Simons Institute for the Theory of Computing · 56:00

### Vehicle routing problems with service times *(prerequisite)*
Vehicle routing problems with service times model the turret’s finite service time constraint when capturing intruders. The chosen videos include university lectures and research webinars that provide a rigorous treatment of vehicle routing problems and their extensions, which are essential for understanding the problem formulation in the paper.

*How the paper uses it:* The turret defense problem incorporates service times analogous to vehicle routing problems with service constraints.

▶ [W9_L9.5: Logistics and distribution management - vehicle ...](https://www.youtube.com/watch?v=o5HH7KPlFus) — IIT Madras - B.S. Degree Programme · 20:42

### Traveling Repairperson Problem with Time Windows
This concept is central to the paper as the offline perimeter defense problem is shown to be equivalent to a Traveling Repairperson Problem with Time Windows (TRP-TW). The selected video provides a focused explanation of the Traveling Salesman Problem with Time Windows, which closely relates to TRP-TW, helping to understand the complexity and algorithmic approaches used.

*How the paper uses it:* The offline turret defense problem is mapped to the TRP-TW, enabling the use of known algorithms and complexity results.

▶ [Travelling Salesman Problem with Time Windows](https://www.youtube.com/watch?v=vEg_KDAdv1Q) — Elok Sukmadewi · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand the turret perimeter defense problem, starting with foundational ideas in online algorithms and vehicle routing problems, then moving to the Traveling Repairperson Problem with Time Windows, and concluding with the specific turret defense algorithms and their performance guarantees. The order builds intuition on how online decision-making and routing with service constraints relate to defending a perimeter against intruders.

### Competitive analysis of online algorithms *(prerequisite)*
Competitive analysis is a framework to evaluate how well an online algorithm performs compared to an optimal offline algorithm that knows the future. It helps understand worst-case performance guarantees when decisions must be made without full information.

*How the paper uses it:* The paper uses competitive analysis to provide performance guarantees for online turret defense algorithms.

▶ [Online Algorithms Explained: Competitive Analysis & Real-World Examples](https://www.youtube.com/watch?v=nqoz7JtXtVE) — CodeLucky · 4:39 · 1 year ago

### Vehicle routing problems with service times *(prerequisite)*
Vehicle routing problems involve planning routes for vehicles to visit multiple locations efficiently, often with constraints like service times at each stop. This models the turret’s need to spend time servicing each intruder after detection.

*How the paper uses it:* The turret defense problem models the turret’s finite service time as a vehicle routing problem with service constraints.

▶ [Vehicle Routing Problem (VRP) ~xRay Pixy](https://www.youtube.com/watch?v=fIjKO3sjgok) — Ritika xRay Pixy · 11:58

### Traveling Repairperson Problem with Time Windows
The Traveling Repairperson Problem with Time Windows extends the classic Traveling Salesman Problem by adding deadlines or time windows for visiting locations. It captures the turret’s need to intercept intruders before they cross the perimeter within certain time constraints.

*How the paper uses it:* The offline turret defense problem is shown to be equivalent to a TRP-TW on a line segment, enabling algorithmic solutions.

▶ [Travelling Salesman Problem with Time Windows](https://www.youtube.com/watch?v=vEg_KDAdv1Q) — Elok Sukmadewi · 6 years ago

### Algorithms for perimeter defense and surveillance *(prerequisite)*
Algorithms for perimeter defense focus on strategies to detect and intercept intruders efficiently using autonomous systems. Understanding these helps contextualize the turret defense problem within broader security applications.

*How the paper uses it:* The paper designs and analyzes specific turret defense algorithms with provable guarantees in a conical environment.

▶ [[T-Ro] Decentralized Approach for Perimeter Defense Problem(PDP).](https://www.youtube.com/watch?v=O_yS4szWPSE) — Artificial Intelligence and Robotics Lab, IISc · 2 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from the authors provides insight into their motivations, problem setup, and key contributions in their own words, complementing the technical understanding from other sections.

*How the paper uses it:* Direct presentation by the authors on turret perimeter defense and their algorithms.

▶ [X4 Turret: Final Faction, Perimeter Defense Series.](https://www.youtube.com/watch?v=hqP9ryx9RKU) — Sageforsaken · 4 years ago

## Already in your library

- [Lec-29 Vehicle Routeing Problem](https://www.youtube.com/watch?v=A1wsIFDKqBk) — also for: Quantum Annealing Approaches to Solving the Shipment Rerouting Problems (Fei Li)
